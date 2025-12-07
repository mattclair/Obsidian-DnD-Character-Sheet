// Helper to extract Class and Feature Progression table from class note
function extractClassProgressionTable(content) {
    if (!content) return null;
    // Match everything between the callout > <table ... </table>
    const match = content.match(/> \[!tldr\] Class and Feature Progression[\s\S]*?<table[\s\S]*?<\/table>/i);
    return match ? match[0] : null;
}
const char = dv.current() ?? {};
const BASE_FOLDER = char.BASE_FOLDER;
const phbClassPath = `${BASE_FOLDER}/classes`;

// -----------------------------
// Show only features at the character's level (or class-level if provided)
// -----------------------------

// ---------- Helpers ----------
function normalizeClasses(raw) {
    if (!raw) return [];

    // string: "Bard"
    if (typeof raw === "string") {
        // Use top-level Level if present; will be resolved later by caller
        return [{ class: raw, level: null }];
    }

    // single object: { Bard: 14 }
    if (!Array.isArray(raw) && typeof raw === "object") {
        return Object.entries(raw).map(([cls, lvl]) => ({
            class: cls,
            level: (lvl === undefined || lvl === null) ? null : Number(lvl)
        }));
    }

    // array: can contain strings or objects
    if (Array.isArray(raw)) {
        const out = [];
        raw.forEach(item => {
            if (typeof item === "string") out.push({ class: item, level: null });
            else if (typeof item === "object") {
                Object.entries(item).forEach(([cls, lvl]) => out.push({ class: cls, level: (lvl === undefined ? null : Number(lvl)) }));
            }
        });
        return out;
    }

    return [];
}

function getPrimarySubclass(sc) {
    if (!sc) return null;
    if (typeof sc === "string") return sc;
    if (Array.isArray(sc) && sc.length > 0) return sc[0];
    if (typeof sc === "object") return Object.values(sc)[0] ?? null;
    return null;
}

function fileSlugFor(str) {
    return String(str).toLowerCase().replace(/['’"]/g, "").trim().replace(/\s+/g, "-");
}

async function loadFileText(path) {
    const file = dv.app.vault.getAbstractFileByPath(path);
    if (!file) return null;
    try { return await dv.app.vault.read(file); }
    catch (e) { console.warn("read failed:", path, e); return null; }
}

function parseFeaturesFromContent(content, filePath, sourceType) {
    if (!content || typeof content !== "string") return [];
    const lines = content.split("\n");
    const features = [];
    for (const line of lines) {
        const m = line.match(/^###\s+(.+?)\s*\(Level\s*(\d+)\)/i);
        if (m) {
            const fullHeading = m[0].replace(/^###\s*/, "").trim();
            const name = m[1].trim();
            const level = Number(m[2]);
            features.push({ name, level, file: filePath, source: sourceType, heading: fullHeading });
        }
    }
    return features;
}

// ---------- Inputs / frontmatter ----------
const page = dv.current();
const pageLevel = (page.Level !== undefined && page.Level !== null) ? Number(page.Level) : null;

const classesRaw = normalizeClasses(page.dndClass);
if (classesRaw.length === 0) {
    dv.paragraph("⚠️ No dndClass found in frontmatter.");
    throw "";
}

// If subclass exists at top-level, normalize primary subclass (we'll use by index below)
const subclassRaw = page.subclass;
const subclassArray = Array.isArray(subclassRaw) ? subclassRaw : (subclassRaw ? [subclassRaw] : []);

// ---------- Main: load & parse per class ----------
let outputPerClass = []; // [{ className, classLevel, progressionHTML, listItems: [...] }]

for (let idx = 0; idx < classesRaw.length; idx++) {
    const entry = classesRaw[idx];
    const className = entry.class;
    // determine class-level: prefer explicit class-level from dndClass, else fall back to page.Level, else 1
    const classLevel = (entry.level !== null && entry.level !== undefined) ? Number(entry.level) : (pageLevel !== null ? pageLevel : 1);
    const classSlug = fileSlugFor(className);
    const subclassName = subclassArray[idx] ?? null;
    const subclassSlug = subclassName ? fileSlugFor(subclassName) : null;

    const classPath = `${phbClassPath}/${classSlug}-xphb.md`;
    const subclassPath = subclassSlug ? `${phbClassPath}/${classSlug}-xphb-${subclassSlug}-xphb.md` : null;

    // load files
    const classText = await loadFileText(classPath);
    const classFeatures = classText ? parseFeaturesFromContent(classText, classPath, "Class Feature") : [];
    const progressionHTML = extractClassProgressionTable(classText);
    let subclassFeatures = [];
    if (subclassPath) {
        const subText = await loadFileText(subclassPath);
        if (subText) subclassFeatures = parseFeaturesFromContent(subText, subclassPath, "Subclass Feature");
    }

    // combine but keep track of source
    let combined = [...classFeatures, ...subclassFeatures];

    // dedupe by file + heading
    const seen = new Set();
    combined = combined.filter(f => {
        const key = `${f.file}||${f.heading}`.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });

    // ------- FILTER by this class's target level -------
    // If you want "up to level", change === to <= below.
    const featuresAtLevel = combined.filter(f => f.level <= classLevel);


    // sort (optional)
    featuresAtLevel.sort((a,b) => a.level - b.level || a.name.localeCompare(b.name));

    // build link strings
    const listItems = featuresAtLevel.map(f => `[[${f.file}#${f.heading}|Level ${f.level} - ${f.name}]]`);

    outputPerClass.push({ className, classLevel, progressionHTML, listItems });
}

// ---------- Render ----------
if (outputPerClass.length === 0) {
    dv.paragraph("No classes to display.");
} else {
    outputPerClass.forEach(block => {
        dv.header(3, `${block.className} features at level ${block.classLevel}`);
        
        // Render class progression table first
            const progressionHeading = "Class and Feature Progression";
            const progressionLink = `[[${phbClassPath}/${fileSlugFor(block.className)}-xphb#^class-progression|Class & Feature Progression]]`;
            dv.paragraph(progressionLink);

        // Then the feature list
        if (block.listItems.length === 0) dv.paragraph("No features at this level.");
        else dv.list(block.listItems);
    });
}