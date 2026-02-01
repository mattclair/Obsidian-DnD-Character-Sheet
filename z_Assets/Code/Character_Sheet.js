if (!dv.current() || !dv.current().file) {
	console.log("Dataview not ready — skipping render");
	return;
}

if (!dv.current()?.BASE_FOLDER) {
	console.log("BASE_FOLDER not indexed yet — skipping render");
	return;
}

const c = dv.current(); // your character note

// =====================
// =====================
// FILE LOCATIONS
//======================
function getBaseFolders() {
	const c = window.getLiveCharacter?.() ?? dv.current?.();

	if (!c || !c.BASE_FOLDER) {
		throw new Error("BASE_FOLDER not ready");
	}

	const BASE_FOLDER = c.BASE_FOLDER;

	return {
		BASE_FOLDER,
		ITEMS_FOLDER: `${BASE_FOLDER}/items`,
		RULES_FOLDER: `${BASE_FOLDER}/rules`,
		SPELLS_FOLDER: `${BASE_FOLDER}/spells`,
		WSHAPE_FOLDER: `${BASE_FOLDER}/bestiary/beast`,
		BASTIONS_FOLDER: `${BASE_FOLDER}/bastions`,
	};
}

let BASE_FOLDER, ITEMS_FOLDER, RULES_FOLDER, SPELLS_FOLDER, WSHAPE_FOLDER, BASTIONS_FOLDER;

try {
	({
		BASE_FOLDER,
		ITEMS_FOLDER,
		RULES_FOLDER,
		SPELLS_FOLDER,
		WSHAPE_FOLDER,
		BASTIONS_FOLDER
	} = getBaseFolders());
} catch {
	// Dataview / frontmatter not ready yet — abort render safely
	return;
}


// =====================
// Helper Functions
// =====================

// Persist per-file dirty flags and pending state so data doesn't leak between notes
const __char_file_key = c?.file?.path || c?.name || "__unknown__";
window.__char_pending_dirtyByFile = window.__char_pending_dirtyByFile || {};
window.__char_pendingStateByFile = window.__char_pendingStateByFile || {};

window.__charStartupState ??= {};
const startup = window.__charStartupState[__char_file_key] ??= {
	initializing: true,
	rendered: false
};

let isDirty = !!window.__char_pending_dirtyByFile[__char_file_key];
function markDirty() {
		isDirty = true;
		console.log("Marking dirty for file key:", __char_file_key);
		window.__char_pending_dirtyByFile[__char_file_key] = true;
		updateSaveUi();
		updateMenuDirtyState();
}

function clearDirty() {
		isDirty = false;
		console.log("Clearing dirty for file key:", __char_file_key);
		window.__char_pending_dirtyByFile[__char_file_key] = false;
		updateSaveUi();
		updateMenuDirtyState();
}

// In-memory storage for character stats (scoped per-file)
window.__char_pendingStateByFile[__char_file_key] =
  window.__char_pendingStateByFile[__char_file_key] || {};

const pendingState = window.__char_pendingStateByFile[__char_file_key];

// 🔒 ONLY initialize health if it does not already exist
if (!pendingState.health) {
  pendingState.health = {
    current: Number(c.health?.current ?? c.health?.max ?? 0),
    max:     Number(c.health?.max ?? 0),
    temp:    Number(c.health?.temp ?? 0),
    maxTmp:  Number(c.health?.maxTmp ?? 0),
  };
}

// Handlers to allow imperative re-renders of small UI regions without a full Dataview refresh
window.__char_rebuildHandlers = window.__char_rebuildHandlers || {};
window.__char_rebuildHandlers[__char_file_key] = window.__char_rebuildHandlers[__char_file_key] || {};

async function commitPendingChanges() {
	const file = app.workspace.getActiveFile();
	if (!file) return;

		await app.fileManager.processFrontMatter(file, fm => {

		// Persist Health if present in pendingState
		fm.health ??= {};
		if (pendingState.health?.max != null) {
			fm.health = structuredClone(pendingState.health);
		}

		// Persist inventory if present in pendingState
		if (pendingState.inventory !== undefined) {
			fm.inventory = structuredClone(pendingState.inventory);
		}

		// Persist spells if present in pendingState
		if (pendingState.Spells !== undefined) {
			fm.Spells = structuredClone(pendingState.Spells);
		}

		// Persist wild-shape options if present in pendingState
		if (pendingState.wildShapeOptions !== undefined) {
			fm["wild-shape-options"] = structuredClone(pendingState.wildShapeOptions);
		}

		// Persist Wild Shape uses if present in pendingState
		if (pendingState.Wild_Shape !== undefined) {
			fm.Wild_Shape = structuredClone(pendingState.Wild_Shape);
		}

		// Persist weapon mastery if present in pendingState
		if (pendingState.weaponMastery !== undefined) {
			fm.weapon_mastery = structuredClone(pendingState.weaponMastery);
		}

		// Persist conditions if present in pendingState
		if (pendingState.conditions !== undefined) {
			fm.conditions = structuredClone(pendingState.conditions);
		}

		// Persist Bastion if present in pendingState
		if (pendingState.bastion !== undefined) {
			fm.Bastion = structuredClone(pendingState.bastion);
		}

		// Persist Luck if present in pendingState
		if (pendingState.Luck !== undefined) {
			fm.Luck = structuredClone(pendingState.Luck);
		}

		// Persist Rage if present in pendingState
		if (pendingState.Rage !== undefined) {
			fm.Rage = structuredClone(pendingState.Rage);
		}

		// Persist Bardic Inspiration if present in pendingState
		if (pendingState.Bardic_Inspiration !== undefined) {
			fm.Bardic_Inspiration = structuredClone(pendingState.Bardic_Inspiration);
		}

		// Persist Channel Divinity if present in pendingState
		if (pendingState.Channel_Divinity !== undefined) {
			fm.Channel_Divinity = structuredClone(pendingState.Channel_Divinity);
		}

		// Persist Second Wind if present in pendingState
		if (pendingState.Second_Wind !== undefined) {
			fm.Second_Wind = structuredClone(pendingState.Second_Wind);
		}

		// Persist Action Surge if present in pendingState
		if (pendingState.Action_Surge !== undefined) {
			fm.Action_Surge = structuredClone(pendingState.Action_Surge);
		}

		// Persist Superiority Dice if present in pendingState
		if (pendingState.Superiority_Dice !== undefined) {
			fm.Superiority_Dice = structuredClone(pendingState.Superiority_Dice);
		}

		// Persist PSI Energy Dice if present in pendingState
		if (pendingState.PSIenergy_dice !== undefined) {
			fm.PSIenergy_dice = structuredClone(pendingState.PSIenergy_dice);
		}

		// Persist Focus Points if present in pendingState
		if (pendingState.Focus_Points !== undefined) {
			fm.Focus_Points = structuredClone(pendingState.Focus_Points);
		}

		// Persist Energy Dice if present in pendingState
		if (pendingState.Energy_Dice !== undefined) {
			fm.Energy_Dice = structuredClone(pendingState.Energy_Dice);
		}

		// Persist Sorcery Points if present in pendingState
		if (pendingState.Sorcery_Points !== undefined) {
			fm.Sorcery_Points = structuredClone(pendingState.Sorcery_Points);
		}

		// Persist Magical Cunning if present in pendingState
		if (pendingState.Magical_Cunning !== undefined) {
			fm.Magical_Cunning = structuredClone(pendingState.Magical_Cunning);
		}

		// Persist Adrenaline Rush if present in pendingState
		if (pendingState.Adrenaline_Rush !== undefined) {
			fm.Adrenaline_Rush = structuredClone(pendingState.Adrenaline_Rush);
		}

		// Persist Relentless Endurance if present in pendingState
		if (pendingState.Relentless_Endurance !== undefined) {
			fm.Relentless_Endurance = structuredClone(pendingState.Relentless_Endurance);
		}

		// Persist Hit Dice if present in pendingState
		if (pendingState.Hit_Dice !== undefined) {
			fm.Hit_Dice = structuredClone(pendingState.Hit_Dice);
		}

		// Persist Death Saves if present in pendingState
		if (pendingState.Death_Saves !== undefined) {
			fm.Death_Saves = structuredClone(pendingState.Death_Saves);
		}

		// Persist Spell Slots if present in pendingState
		if (pendingState.spell_slot !== undefined) {
			fm.spell_slot = structuredClone(pendingState.spell_slot);
		}

		// Persist Name if present in pendingState
		if (pendingState.name !== undefined) {
			fm.name = pendingState.name;
		}

		// Persist DnD Class if present in pendingState
		if (pendingState.dndClass !== undefined) {
			fm.dndClass = pendingState.dndClass;
		}

		// Persist Subclass if present in pendingState
		if (pendingState.subclass !== undefined) {
			fm.subclass = pendingState.subclass;
		}

		// Persist Background if present in pendingState
		if (pendingState.background !== undefined) {
			fm.background = pendingState.background;
		}

		// Persist Species if present in pendingState
		if (pendingState.species !== undefined) {
			fm.species = pendingState.species;
		}

		// Persist Alignment if present in pendingState
		if (pendingState.alignment !== undefined) {
			fm.alignment = pendingState.alignment;
		}

		// Persist Size if present in pendingState
		if (pendingState.size !== undefined) {
			fm.size = pendingState.size;
		}

		// Persist Senses if present in pendingState
		if (pendingState.senses !== undefined) {
			fm.senses = pendingState.senses;
		}

		// Persist Languages if present in pendingState
		if (pendingState.languages !== undefined) {
			fm.languages = pendingState.languages;
		}

		// Persist Tools if present in pendingState
		if (pendingState.tools !== undefined) {
			fm.tools = pendingState.tools;
		}

		// Persist Instruments if present in pendingState
		if (pendingState.instruments !== undefined) {
			fm.instruments = pendingState.instruments;
		}

		// Persist Species Traits if present in pendingState
		if (pendingState.species_traits !== undefined) {
			fm.species_traits = pendingState.species_traits;
		}

		// Persist Spellcasting Ability if present in pendingState
		if (pendingState.Spellcasting_Ability !== undefined) {
			fm.Spellcasting_Ability = pendingState.Spellcasting_Ability;
		}

		// Persist Speed if present in pendingState
		if (pendingState.speed !== undefined) {
			fm.speed = pendingState.speed;
		}

		// Persist Base AC if present in pendingState
		if (pendingState.base_ac !== undefined) {
			fm.base_ac = pendingState.base_ac;
		}

		// Persist Armor Training if present in pendingState
		if (pendingState.armor_training !== undefined) {
			fm.armor_training = pendingState.armor_training;
		}

		// Persist Weapon Training if present in pendingState
		if (pendingState.weapon_training !== undefined) {
			fm.weapon_training = pendingState.weapon_training;
		}

		// Persist Image Paths if present in pendingState
		if (pendingState.image !== undefined) {
			fm.image = pendingState.image;
		}

		// Persist Level if present in pendingState
		if (pendingState.Level !== undefined) {
			fm.Level = pendingState.Level;
		}

		// Persist STR if present in pendingState
		if (pendingState.STR !== undefined) {
			fm.STR = pendingState.STR;
		}

		// Persist DEX if present in pendingState
		if (pendingState.DEX !== undefined) {
			fm.DEX = pendingState.DEX;
		}

		// Persist CON if present in pendingState
		if (pendingState.CON !== undefined) {
			fm.CON = pendingState.CON;
		}

		// Persist INT if present in pendingState
		if (pendingState.INT !== undefined) {
			fm.INT = pendingState.INT;
		}

		// Persist WIS if present in pendingState
		if (pendingState.WIS !== undefined) {
			fm.WIS = pendingState.WIS;
		}

		// Persist CHA if present in pendingState
		if (pendingState.CHA !== undefined) {
			fm.CHA = pendingState.CHA;
		}

		// Persist Proficiencies if present in pendingState
		if (pendingState.Proficiencies !== undefined) {
			fm.Proficiencies = pendingState.Proficiencies;
		}

		// Persist Feats if present in pendingState
		if (pendingState.feats !== undefined) {
			fm.feats = pendingState.feats
		}

		// Persist Stat_Bonus if present in pendingState
		if (pendingState.Stat_Bonus !== undefined) {
			fm.Stat_Bonus = pendingState.Stat_Bonus
		}

		// Persist Eldritch Invocations if present in pendingState
		if (pendingState.Eldritch_Invocations !== undefined) {
			fm.Eldritch_Invocations = pendingState.Eldritch_Invocations
		}

		// Persist Attuned if present in pendingState
		if (pendingState.attuned !== undefined) {
			fm.attuned = pendingState.attuned
		}
	});

  /* ---------- POST-SAVE UI SYNC ---------- */
  renderHpDisplay();
  window.__char_rebuildHandlers[__char_file_key]?.hp?.();

  delete pendingState.Level;
  delete pendingState.level;

  clearDirty();
  new Notice("All changes saved", 3000);
}


// Generic helper to wait until a DOM element exists
async function waitForElement(selector, timeout = 2000, interval = 50) {
    const start = Date.now();
    return new Promise((resolve, reject) => {
        const check = () => {
            const el = document.querySelector(selector);
            if (el) {
                resolve(el);
            } else if (Date.now() - start > timeout) {
                reject(new Error(`Element "${selector}" not found within ${timeout}ms`));
            } else {
                setTimeout(check, interval);
            }
        };
        check();
    });
}

function getClassLevels(dndClassField, totalLevel) {
    if (!dndClassField) {
        console.warn("Invalid dndClass format:", dndClassField);
        return [];
    }

    // Single-class as string or number
    if (typeof dndClassField === "string") {
        return [{ className: dndClassField, level: totalLevel }];
    }

    // Multi-class array of objects
    if (Array.isArray(dndClassField)) {
        return dndClassField.map(entry => {
            const className = Object.keys(entry)[0];
            const level = entry[className];
            return { className, level };
        });
    }

    console.warn("Unrecognized dndClass format:", dndClassField);
    return [];
}

// Helper: Get level of a specific class (e.g., "Rogue")
function getClassLevel(className) {
    const raw = dv.current().dndClass;
    const totalLevel = dv.current().Level ?? 1;

    if (!raw) return 0;

    // Case 1: Simple string, e.g. "Rogue"
    if (typeof raw === "string") {
        return raw === className ? totalLevel : 0;
    }

    // Case 2: Object { Rogue: 3 }
    if (!Array.isArray(raw) && typeof raw === "object") {
        return Number(raw[className] ?? 0);
    }

    // Case 3: Array (may contain strings or objects)
    if (Array.isArray(raw)) {
        let total = 0;

        raw.forEach(item => {
            if (typeof item === "string") {
                // Example: ["Rogue"]
                if (item === className) {
                    total += totalLevel; // fallback to character level
                }
            } else if (typeof item === "object") {
                // Example: [{"Rogue": 3}]
                if (item[className] !== undefined) {
                    total += Number(item[className]);
                }
            }
        });

        return total;
    }

    return 0;
}

// normalize Feats since it can contain strings or objects
const featsList = (c.feats ?? []).flatMap(f => {
    if (typeof f === "string") {
        return [f.toLowerCase()];
    }
    if (typeof f === "object" && f !== null) {
        // For feats like: Magic Initiate: { class:..., spell... }
        return Object.keys(f).map(key => key.toLowerCase());
    }
    return [];
});

// =====================
// CHARACTER ABILITIES
// =====================
const STR = c.STR ?? 10;
const DEX = c.DEX ?? 10;
const CON = c.CON ?? 10;
const INT = c.INT ?? 10;
const WIS = c.WIS ?? 10;
const CHA = c.CHA ?? 10;

// =====================
// ABILITY MODIFIERS
// =====================
const STR_MOD = Math.floor((STR - 10) / 2);
const DEX_MOD = Math.floor((DEX - 10) / 2);
const CON_MOD = Math.floor((CON - 10) / 2);
const INT_MOD = Math.floor((INT - 10) / 2);
const WIS_MOD = Math.floor((WIS - 10) / 2);
const CHA_MOD = Math.floor((CHA - 10) / 2);

// =====================
// Proficiency Bonus
// =====================
const classLevels = getClassLevels(dv.current().dndClass);
const Level = classLevels.reduce((sum, c) => sum + c.level, 0) || 1;
function proficiencyFromLevel(lvl) {
  if (lvl >= 17) return 6;
  if (lvl >= 13) return 5;
  if (lvl >= 9)  return 4;
  if (lvl >= 5)  return 3;
  return 2;
}
const pb = proficiencyFromLevel(Level);

// ======================
// CLASS INFO
// ======================
const classType = dv.current().dndClass ?? [];
const subclass = dv.current().subclass ?? [];
const classes = getClassLevels(dv.current().dndClass, dv.current().Level);
// ======================
// Does Character Have a Class
// ======================
const hasBarbarian = Array.isArray(c.dndClass)
  ? c.dndClass.some(obj => Object.keys(obj)[0] === "Barbarian")
  : c.dndClass === "Barbarian";
const hasBard = Array.isArray(c.dndClass)
  ? c.dndClass.some(obj => Object.keys(obj)[0] === "Bard")
  : c.dndClass === "Bard";
const hasCleric = Array.isArray(c.dndClass)
  ? c.dndClass.some(obj => Object.keys(obj)[0] === "Cleric")
  : c.dndClass === "Cleric";
const hasDruid = Array.isArray(c.dndClass)
  ? c.dndClass.some(obj => Object.keys(obj)[0] === "Druid")
  : c.dndClass === "Druid";
const hasFighter = Array.isArray(c.dndClass)
  ? c.dndClass.some(obj => Object.keys(obj)[0] === "Fighter")
  : c.dndClass === "Fighter";
const hasMonk = Array.isArray(c.dndClass)
  ? c.dndClass.some(obj => Object.keys(obj)[0] === "Monk")
  : c.dndClass === "Monk";
const hasPaladin = Array.isArray(c.dndClass)
  ? c.dndClass.some(obj => Object.keys(obj)[0] === "Paladin")
  : c.dndClass === "Paladin";
const hasRanger = Array.isArray(c.dndClass)
  ? c.dndClass.some(obj => Object.keys(obj)[0] === "Ranger")
  : c.dndClass === "Ranger";
const hasRogue = Array.isArray(c.dndClass)
  ? c.dndClass.some(obj => Object.keys(obj)[0] === "Rogue")
  : c.dndClass === "Rogue";
const hasSorcerer = Array.isArray(c.dndClass)
  ? c.dndClass.some(obj => Object.keys(obj)[0] === "Sorcerer")
  : c.dndClass === "Sorcerer";
const hasWarlock = Array.isArray(c.dndClass)
  ? c.dndClass.some(obj => Object.keys(obj)[0] === "Warlock")
  : c.dndClass === "Warlock";
const hasWizard = Array.isArray(c.dndClass)
  ? c.dndClass.some(obj => Object.keys(obj)[0] === "Wizard")
  : c.dndClass === "Wizard";
// ======================
// Character Levels in a Class
// ======================
const barbarianLevel = getClassLevel("Barbarian")
const bardLevel = getClassLevel("Bard")
const clericLevel = getClassLevel("Cleric")
const druidLevel = getClassLevel("Druid")
const fighterLevel = getClassLevel("Fighter")
const monkLevel = getClassLevel("Monk")
const paladinLevel = getClassLevel("Paladin")
const rangerLevel = getClassLevel("Ranger")
const rogueLevel = getClassLevel("Rogue")
const sorcererLevel = getClassLevel("Sorcerer")
const warlockLevel = getClassLevel("Warlock")
const wizardLevel = getClassLevel("Wizard")

// ======================
// Character Levels in a Subclass
// ======================
const hasArchfey = Array.isArray(c.subclass)
  ? c.subclass.includes("Archfey Patron")
  : c.subclass === "Archfey Patron";
const hasEldritchKnight = Array.isArray(c.subclass)
  ? c.subclass.includes("Eldritch Knight")
  : c.subclass === "Eldritch Knight";
const hasArcaneTrickster = Array.isArray(c.subclass)
  ? c.subclass.includes("Arcane Trickster")
  : c.subclass === "Arcane Trickster";
let eldritchKnightLevel = 0;
let arcaneTricksterLevel = 0;
if (hasEldritchKnight) { eldritchKnightLevel = fighterLevel };
if (hasArcaneTrickster) { arcaneTricksterLevel = rogueLevel };
const hasCircleOfTheMoon = Array.isArray(c.subclass)
  ? c.subclass.includes("Circle of the Moon")
  : c.subclass === "Circle of the Moon";
// ======================
// Feats
// ======================
const feats = dv.current().feats ?? [];

// Check for Eldritch Invocation: Armor of Shadows
function hasArmorOfShadows() {
  const invocations = c.Eldritch_Invocations ?? [];
  return invocations.includes("Armor of Shadows") ||
         invocations.includes("Armour of Shadows");
}
function hasAscendantStep() {
	  const invocations = c.Eldritch_Invocations ?? [];
	  return invocations.includes("Ascendant Step");
}
function hasFiendishVigor() {
	  const invocations = c.Eldritch_Invocations ?? [];
	  return invocations.includes("Fiendish Vigor");
}
function hasMaskOfManyFaces() {
	  const invocations = c.Eldritch_Invocations ?? [];
	  return invocations.includes("Mask of Many Faces");
}
function hasMasterofMyriadForms() {
	  const invocations = c.Eldritch_Invocations ?? [];
	  return invocations.includes("Master of Myriad Forms");
}
function hasMistyVisoions() {
	  const invocations = c.Eldritch_Invocations ?? [];
	  return invocations.includes("Misty Visions");
}
function hasOneWithShadows() {
	  const invocations = c.Eldritch_Invocations ?? [];
	  return invocations.includes("One with Shadows");
}
function hasOtherworldlyLeap() {
	  const invocations = c.Eldritch_Invocations ?? [];
	  return invocations.includes("Otherworldly Leap");
}
function hasVisionsOfDistantRealms() {
	  const invocations = c.Eldritch_Invocations ?? [];
	  return invocations.includes("Visions of Distant Realms");
}
function hasWhispersOfTheGrave() {
	  const invocations = c.Eldritch_Invocations ?? [];
	  return invocations.includes("Whispers of the Grave");
}

function getClassLevels(dndClassField) {
	if (!dndClassField) {
		console.warn("Invalid dndClass format:", dndClassField);
		return [];
	}

	// Single-class legacy string (treat as level 1)
	if (typeof dndClassField === "string") {
		return [{ className: dndClassField, level: 1 }];
	}

	// Single-class object { Warlock: 5 }
	if (typeof dndClassField === "object" && !Array.isArray(dndClassField)) {
		const [className, level] = Object.entries(dndClassField)[0] ?? [];
		return className && level
			? [{ className, level }]
			: [];
	}

	// Multi-class array [{ Warlock: 3 }, { Paladin: 4 }]
	if (Array.isArray(dndClassField)) {
		return dndClassField.map(entry => {
			const [className, level] = Object.entries(entry)[0] ?? [];
			return { className, level };
		}).filter(e => e.className && e.level);
	}

	console.warn("Unrecognized dndClass format:", dndClassField);
	return [];
}

function formatSpellName(name) {
	return name
		.replace(/-xphb$|-phb$|-frhof$|-srd$/i, "")
		.replace(/-/g, " ")
		.replace(/'/g, "")
		.replace(/\b\w/g, c => c.toUpperCase());
}

// =====================================================================================
// ==============================================================   Character Onboarding
// =====================================================================================

// ============== Character Data ==================
function selectField(key, options) {
  return `
    <label>
      ${prettyKey(key)}
      <select data-key="${key}">
        <option value="">— Select —</option>
        ${options.map(o => `<option value="${o}">${o}</option>`).join("")}
      </select>
    </label>
  `;
}
function setDeep(obj, path, value) {
	const parts = path.split(".");
	let cur = obj;

	for (let i = 0; i < parts.length - 1; i++) {
		const p = parts[i];
		cur[p] ??= {};
		cur = cur[p];
	}

	cur[parts.at(-1)] = value;
}
function getDeep(obj, path) {
	return path.split(".").reduce((o, k) => o?.[k], obj);
}
function val(v) {
  if (Array.isArray(v)) return v.join(", ");
  if (v === undefined || v === null) return "";
  return v;
}
function hydrateClasses(character, overlay) {
	const container = overlay.querySelector(".class-blocks");
	if (!container) return;

	container.querySelectorAll(".class-row").forEach(r => r.remove());

	let classEntries = [];

	// ---- MULTICLASS ----
	if (Array.isArray(character?.dndClass)) {
		classEntries = character.dndClass.map((entry, i) => {
			const [cls, lvl] = Object.entries(entry)[0] ?? [];
			return {
				class: cls,
				level: lvl,
				subclass: character.subclass?.[i] ?? ""
			};
		});
	}

	// ---- SINGLE CLASS: object ----
	else if (
		character?.dndClass &&
		typeof character.dndClass === "object"
	) {
		const [cls, lvl] = Object.entries(character.dndClass)[0] ?? [];
		classEntries.push({
			class: cls,
			level: lvl,
			subclass: character.subclass ?? ""
		});
	}

	// ---- SINGLE CLASS: split fields ----
	else if (typeof character?.dndClass === "string") {
		classEntries.push({
			class: character.dndClass,
			level: character.Level ?? character.level ?? "",
			subclass: character.subclass ?? ""
		});
	}

	// ---- Fallback: empty row ----
	if (!classEntries.length) {
		container.insertBefore(
			createClassRow(),
			container.querySelector(".add-class")
		);
		return;
	}

	// ---- Render rows ----
	for (const entry of classEntries) {
		const row = createClassRow();

		row.querySelector('[data-subkey="class"]').value = entry.class ?? "";
		row.querySelector('[data-subkey="level"]').value = entry.level ?? "";
		row.querySelector('[data-subkey="subclass"]').value = entry.subclass ?? "";

		container.insertBefore(row, container.querySelector(".add-class"));
	}
}
function createClassRow() {
	const row = document.createElement("div");
	row.className = "class-row";

	row.innerHTML = `
		<input
			placeholder="Class"
			data-subkey="class"
		>
		<input
			type="number"
			min="1"
			placeholder="Level"
			data-subkey="level"
		>
		<input
			placeholder="Subclass (optional)"
			data-subkey="subclass"
		>
		<button type="button" class="remove-class">✕</button>
	`;

	// Optional: allow removing a class row
	row.querySelector(".remove-class").onclick = () => {
		row.remove();
	};

	return row;
}
function openCharacterOnboardingModal(character = null) {
	// Prevent multiple modals
	if (document.querySelector(".char-onboarding-overlay")) return;

	const overlay = document.createElement("div");
	overlay.className = "char-onboarding-overlay";
	overlay.innerHTML = `
		<div class="char-onboarding-modal">
  			<h2>${character ? "Edit Character" : "Create Your Character"}</h2>

			<div class="onboarding-grid">
				<label>Name<input data-key="name" /></label>
				<div class="class-blocks" data-key="classes">
				<h3>Classes</h3>

				<!-- rows injected dynamically -->

				<button class="add-class">+ Add Class</button>
				</div>
				<label>Image Paths<input data-key="image" placeholder="ex: z_Assets/Misc/Char.png" /></label>
				<label>Max Health<input data-key="health.max" type="number" placeholder="Number" min=1 /></label>
				<label>Background<input data-key="background" /></label>
				<label>Species<input data-key="species" /></label>
				<label>Species Traits<input data-key="species_traits" placeholder="Comma separated" /></label>
				${selectField("alignment", [
					"Lawful Good", 
					"Neutral Good", 
					"Chaotic Good", 
					"Lawful Neutral", 
					"True Neutral", 
					"Chaotic Neutral", 
					"Lawful Evil", 
					"Neutral Evil", 
					"Chaotic Evil"])}
				${selectField("size", ["Small", "Medium"])}
				<label>Senses<input data-key="senses" /></label>

				<label>Languages<input data-key="languages" placeholder="Comma separated" /></label>
				<label>Tools<input data-key="tools" placeholder="Comma separated" /></label>
				<label>Instruments<input data-key="instruments" placeholder="Comma separated" /></label>

				${selectField("Spellcasting_Ability", ["CHA", "INT", "WIS"])}
				<label>Speed<input data-key="speed" type="number" placeholder="Number" /></label>
				<label>Base AC<input data-key="Base_AC" type="number" placeholder="Number" /></label>
				<fieldset data-key="armor_training">
					<legend>Armor Training</legend>
					<label><input type="checkbox" value="Light Armor"> Light Armor</label>
					<label><input type="checkbox" value="Medium Armor"> Medium Armor</label>
					<label><input type="checkbox" value="Heavy Armor"> Heavy Armor</label>
					<label><input type="checkbox" value="Shields"> Shields</label>
				</fieldset>
				<fieldset data-key="weapon_training">
					<legend>Weapon Training</legend>
					<label><input type="checkbox" value="Simple Weapons"> Simple Weapons</label>
					<label><input type="checkbox" value="Martial Weapons"> Martial Weapons</label>
				</fieldset>
			</div>

			<div class="onboarding-actions">
				<button class="cancel">Cancel</button>
				<button class="confirm">${character ? "Save Changes" : "Create Character"}</button>
			</div>
		</div>
	`;

	document.body.appendChild(overlay);
	const container = overlay.querySelector(".class-blocks");
	const addBtn = container.querySelector(".add-class");

	addBtn.onclick = (e) => {
		e.preventDefault();
		container.insertBefore(createClassRow(), addBtn);
	};

	if (character) {
		hydrateClasses(character, overlay);
	} else {
		container.insertBefore(createClassRow(), addBtn);
	}
				
	if (character) {
		const fields = overlay.querySelectorAll("[data-key]");

		for (const el of fields) {
			const key = el.dataset.key;
			let value = getDeep(character, key);

			if (value == null) continue;

			// FIELDSET (checkbox groups)
			if (el.tagName === "FIELDSET") {
				let values = value;

				// Normalize to array
				if (typeof values === "string") {
					values = [values];
				}
				if (!Array.isArray(values)) continue;

				el.querySelectorAll("input[type=checkbox]").forEach(cb => {
					cb.checked = values.includes(cb.value);
				});
			}

			// SELECT
			else if (el.tagName === "SELECT") {
				el.value = value;
			}

			// INPUT
			else if (el.tagName === "INPUT") {
				if (Array.isArray(value)) {
					el.value = value.join(", ");
				} else {
					el.value = value;
				}
			}
		}
	}


	const close = () => overlay.remove();

	overlay.querySelector(".cancel").onclick = close;

	overlay.querySelector(".confirm").onclick = async () => {
		pendingState ??= {};

		const fields = overlay.querySelectorAll("[data-key]");

		for (const el of fields) {
			const key = el.dataset.key;
			let value;

			if (el.tagName === "FIELDSET") {
				value = Array.from(el.querySelectorAll("input:checked"))
					.map(i => i.value);
				if (!value.length) continue;
			}
			else if (el.tagName === "SELECT") {
				value = el.value;
			}
			else if (el.tagName === "INPUT") {
				value = el.value.trim();
				if (!value) continue;

				if (el.type === "number") value = Number(value);

				if (typeof value === "string" && value.includes(",")) {
					value = value.split(",").map(v => v.trim()).filter(Boolean);
				}
			}

			// Special case: Max Health
			if (key === "health.max") {
				pendingState.health ??= {};
				pendingState.health.max = value;
				pendingState.health.current = value;
				pendingState.health.temp ??= 0;
				pendingState.health.maxTmp ??= value;
				continue;
			}

			setDeep(pendingState, key, value);
			console.log("Onboarding set:", key, value);
		}

		// --- Handle multiclass data ONCE ---
		const classRows = overlay.querySelectorAll(".class-row");

		const classes = [];
		const subclasses = [];

		for (const row of classRows) {
			const cls = row.querySelector('[data-subkey="class"]')?.value?.trim();
			const lvl = Number(row.querySelector('[data-subkey="level"]')?.value);
			const sub = row.querySelector('[data-subkey="subclass"]')?.value?.trim();

			if (!cls || !lvl) continue;

			classes.push({ [cls]: lvl });
			if (sub) subclasses.push(sub);
		}

		if (classes.length) pendingState.dndClass = classes;
		if (subclasses.length) pendingState.subclass = subclasses;

		close();
		markDirty();
		await commitPendingChanges();
		for (const k in pendingState) {
			delete pendingState[k];
		}	
	};
}
// ============== Character Stats ==================
function renderProficiencies(character) {
  // List **all possible proficiencies** we want to display
  const profs = [
    "STR_SAVE", "DEX_SAVE", "CON_SAVE", "INT_SAVE", "WIS_SAVE", "CHA_SAVE",
    "Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception",
	"History", "Insight", "Intimidation", "Investigation", "Medicine",
	"Nature", "Perception", "Persuasion", "Religion", "Sleight of Hand",
	"Stealth", "Survival"
  ];

  return profs.map(prof => {
    // Default to 0 if the character does not have this proficiency yet
    const currentValue = character?.Proficiencies?.[prof] ?? 0;

    return `
      <div class="prof-row">
        <label>${prof}</label>
        <select data-prof="${prof}">
          <option value="0" ${currentValue === 0 ? "selected" : ""}>None</option>
          <option value="1" ${currentValue === 1 ? "selected" : ""}>Proficient</option>
          <option value="2" ${currentValue === 2 ? "selected" : ""}>Expertise</option>
        </select>
      </div>
    `;
  }).join("");
}

function hydrateStatFields(character, overlay) {
  if (!character) return;

  // Stats
  ["STR", "DEX", "CON", "INT", "WIS", "CHA"].forEach(stat => {
    const input = overlay.querySelector(`[data-key="${stat}"]`);
    if (input && character[stat] !== undefined) {
      input.value = character[stat];
    }
  });

  // Proficiencies
  if (character.Proficiencies) {
    Object.entries(character.Proficiencies).forEach(([k, v]) => {
      const select = overlay.querySelector(`[data-prof="${k}"]`);
      if (select) select.value = v;
    });
  }
}

function openCharacterStatOnboardingModal(character = null) {
  if (document.querySelector(".char-stats-overlay")) return;

  const overlay = document.createElement("div");
  overlay.className = "char-stats-overlay";
  overlay.innerHTML = `
  <div class="char-stats-modal">
    <div class="modal-body">
      <h2>${character ? "Edit Stats" : "Create Stats"}</h2>

      <div class="stats-grid">
        <label>STR <input data-key="STR" type="number" min="1" max="30"></label>
        <label>DEX <input data-key="DEX" type="number" min="1" max="30"></label>
        <label>CON <input data-key="CON" type="number" min="1" max="30"></label>
        <label>INT <input data-key="INT" type="number" min="1" max="30"></label>
        <label>WIS <input data-key="WIS" type="number" min="1" max="30"></label>
        <label>CHA <input data-key="CHA" type="number" min="1" max="30"></label>
      </div>

      <h3>Proficiencies & Saves</h3>
      <div class="proficiencies-grid">
        ${renderProficiencies(character)}
      </div>
    </div>

    <div class="actions">
      <button class="cancel">Cancel</button>
      <button class="confirm">${character ? "Save" : "Create"}</button>
    </div>
  </div>
`;

  document.body.appendChild(overlay);

  hydrateStatFields(character, overlay);

  const close = () => overlay.remove();

  overlay.querySelector(".cancel").onclick = close;

  overlay.querySelector(".confirm").onclick = async () => {
    pendingState ??= {};

    // Save stats
    const statInputs = overlay.querySelectorAll("[data-key]");
    for (const input of statInputs) {
      const key = input.dataset.key;
      const val = Number(input.value);
      if (!val) continue;
      pendingState[key] = val;
    }

    // Save proficiency data
    const profNodes = overlay.querySelectorAll("[data-prof]");
    pendingState.Proficiencies ??= {};

    for (const node of profNodes) {
		const profKey = node.dataset.prof;
		const val = Number(node.value);

		if (val === 0) {
			// Remove it if it exists
			delete pendingState.Proficiencies[profKey];
		} else {
			pendingState.Proficiencies[profKey] = val;
		}
	}

    markDirty();
    await commitPendingChanges();
    close();
  };
}

//================= Feat Onboarding =====================
const FEAT_DEFINITIONS = {
  "Actor": {
    type: "simple"
  },
  "Alert": {
    type: "simple"
  },
  "Archery": {
    type: "simple"
  },
  "Athlete": {
    type: "simple"
  },
  "Blind Fighting": {
    type: "simple"
  },
  "Lucky": {
    type: "simple"
  },
	"Charger": {
    type: "simple"
  },
  "Chef": {
    type: "simple"
  },
  "Crafter": {
    type: "simple"
  },
  "Crossbow Expert": {
    type: "simple"
  },
  "Crusher": {
    type: "simple"
  },"Defense": {
    type: "simple"
  },
  "Defensive Duelist": {
    type: "simple"
  },
  "Dual Wielder": {
    type: "simple"
  },
  "Dueling": {
    type: "simple"
  },
  "Durable": {
    type: "simple"
  },
  "Elemental Adept": {
    type: "simple"
  },
  "Fey Touched": {
    type: "spell-choice",
    fields: ["spell"]
  },
  "Grappler": {
    type: "simple"
  },
  "Great Weapon Fighting": {
    type: "simple"
  },
  "Great Weapon Master": {
    type: "simple"
  },
  "Healer": {
    type: "simple"
  },
  "Heavily Armored": {
    type: "simple"
  },
  "Heavy Armor Master": {
    type: "simple"
  },
  "Inspiring Leader": {
    type: "simple"
  },
  "Interception": {
    type: "simple"
  },
  "Keen Mind": {
    type: "simple"
  },
  "Lightly Armored": {
    type: "simple"
  },
  "Lucky": {
    type: "simple"
  },
  "Mage Slayer": {
    type: "simple"
  },
  "Magic Initiate": {
    type: "magic-initiate",
    fields: ["class", "spell", "cantrips"]
  },
  "Martial Weapon Training": {
    type: "simple"
  },
  "Medium Armor Master": {
    type: "simple"
  },
  "Mounted Combatant": {
    type: "simple"
  },
  "Musician": {
    type: "simple"
  },
  "Observant": {
    type: "simple"
  },
  "Piercer": {
    type: "simple"
  },
  "Poisoner": {
    type: "simple"
  },
  "Pole Arm Master": {
    type: "simple"
  },
  "Protection": {
    type: "simple"
  },
  "Resilient": {
    type: "simple"
  },
  "Ritual Caster": {
    type: "simple"
  },
  "Savage Attacker": {
    type: "simple"
  },
  "Sentinel": {
    type: "simple"
  },
  "Shadow Touched": {
    type: "spell-choice",
    fields: ["spell"]
  },
  "Sharpshooter": {
    type: "simple"
  },
  "Shield Master": {
    type: "simple"
  },
  "Skilled": {
    type: "simple"
  },
  "Skill Expert": {
    type: "simple"
  },
  "Skulker": {
    type: "simple"
  },
  "Slasher": {
    type: "simple"
  },
  "Speedy": {
    type: "simple"
  },
  "Spell Sniper": {
    type: "simple"
  },
  "Tavern Brawler": {
    type: "simple"
  },
  "Telekinetic": {
    type: "simple"
  },
  "Telepathic": {
    type: "simple"
  },
  "Thrown Weapon Fighting": {
    type: "simple"
  },
  "Tough": {
    type: "simple"
  },
  "Two-Weapon Fighting": {
    type: "simple"
  },
  "Unarmed Fighting": {
    type: "simple"
  },
  "War Caster": {
    type: "simple"
  },
  "Weapon Master": {
    type: "simple"
  }
  
}; 

function normalizeFeatsFromFrontmatter(fmFeats = []) {
  return fmFeats.map(f => {
    if (typeof f === "string") {
      return { name: f };
    }

    if (typeof f === "object") {
      const [name, data] = Object.entries(f)[0];
      return { name, data: structuredClone(data) };
    }

    return null;
  }).filter(Boolean);
}

function createFeatRow(entry = {}) {
  const row = document.createElement("div");
  row.className = "feat-row";

  row.innerHTML = `
    <select class="feat-select">
      <option value="">Select Feat</option>
      ${Object.keys(FEAT_DEFINITIONS)
        .map(f => `<option value="${f}">${f}</option>`)
        .join("")}
    </select>

    <div class="feat-extra"></div>

    <button type="button" class="remove-feat">✕</button>
  `;

  const select = row.querySelector(".feat-select");
  const extra  = row.querySelector(".feat-extra");

  select.value = entry.name ?? "";

  select.onchange = () => {
    entry.data = {};
    renderFeatExtras(select.value, extra, entry);
  };

  row.querySelector(".remove-feat").onclick = () => {
    row.remove();
  };

  if (entry.name) {
    renderFeatExtras(entry.name, extra, entry);
  }

  return row;
}

function renderFeatExtras(featName, container, entry) {
  container.innerHTML = "";

  const def = FEAT_DEFINITIONS[featName];
  if (!def || def.type === "simple") return;

  if (def.type === "magic-initiate") {
    container.innerHTML = `
      <label>
        Class
        <select data-key="class">
          <option value="">Select</option>
          <option>Cleric</option>
          <option>Druid</option>
          <option>Wizard</option>
        </select>
      </label>

      <label>
        Spell
        <input data-key="spell" placeholder="Spell name">
      </label>

      <label>
        Cantrips
        <input data-key="cantrips" placeholder="Comma-separated">
      </label>
    `;
  }

  if (def.type === "spell-choice") {
    container.innerHTML = `
      <label>
        Spell
        <input data-key="spell" placeholder="Spell name">
      </label>
    `;
  }

  hydrateFeatExtras(container, entry.data);
}

function hydrateFeatExtras(container, data = {}) {
  container.querySelectorAll("[data-key]").forEach(input => {
    const key = input.dataset.key;

    if (Array.isArray(data[key])) {
      input.value = data[key].join(", ");
    } else if (data[key]) {
      input.value = data[key];
    }
  });
}

function collectFeatsFromUI(container) {
  const feats = [];

  container.querySelectorAll(".feat-row").forEach(row => {
    const name = row.querySelector(".feat-select").value;
    if (!name) return;

    const extra = row.querySelector(".feat-extra");
    const data = {};

    extra.querySelectorAll("[data-key]").forEach(input => {
      let value = input.value.trim();
      if (!value) return;

      if (input.dataset.key === "cantrips") {
        value = value.split(",").map(v => v.trim()).filter(Boolean);
      }

      data[input.dataset.key] = value;
    });

    if (Object.keys(data).length) {
      feats.push({ [name]: data });
    } else {
      feats.push(name);
    }
  });

  return feats;
}

function ensureAlwaysPreparedSpells() {
  pendingState.Spells ??= {};

  const normalizeBucket = (bucket) => ({
    Cantrips: Array.isArray(bucket?.Cantrips) ? bucket.Cantrips : [],
    Spells: Array.isArray(bucket?.Spells) ? bucket.Spells : []
  });

  pendingState.Spells.Prepared =
    normalizeBucket(pendingState.Spells.Prepared);

  pendingState.Spells.Known =
    normalizeBucket(pendingState.Spells.Known);

  pendingState.Spells.Always_Prepared =
    normalizeBucket(pendingState.Spells.Always_Prepared);
}


function addAlwaysPreparedSpell(name, type = "spell") {
  ensureAlwaysPreparedSpells();

  const bucket =
    type === "cantrip"
      ? pendingState.Spells.Always_Prepared.Cantrips
      : pendingState.Spells.Always_Prepared.Spells;

  if (!Array.isArray(bucket)) {
    console.warn("Spell bucket was not an array:", bucket);
    return;
  }

  if (!bucket.includes(name)) {
    bucket.push(name);
  }
}


function applyFeatGrantedSpells(feats) {
  feats.forEach(feat => {
    // SIMPLE FEAT — nothing to do
    if (typeof feat === "string") return;

    const [name, data] = Object.entries(feat)[0];
    if (!data) return;

    // ---------- MAGIC INITIATE ----------
    if (name === "Magic Initiate") {
      if (data.spell) {
        addAlwaysPreparedSpell(data.spell, "spell");
      }

      if (Array.isArray(data.cantrips)) {
        data.cantrips.forEach(c =>
          addAlwaysPreparedSpell(c, "cantrip")
        );
      }
    }

    // ---------- FEY TOUCHED ----------
    if (name === "Fey Touched") {
      // Granted spell
      addAlwaysPreparedSpell("Misty Step", "spell");

      // Chosen spell
      if (data.spell) {
        addAlwaysPreparedSpell(data.spell, "spell");
      }
    }

    // ---------- SHADOW TOUCHED ----------
    if (name === "Shadow Touched") {
      // Granted spell
      addAlwaysPreparedSpell("Invisibility", "spell");

      // Chosen spell
      if (data.spell) {
        addAlwaysPreparedSpell(data.spell, "spell");
      }
    }
  });
}

function openCharacterFeatOnboardingModal(character = null) {
  if (document.querySelector(".char-feats-overlay")) return;

  pendingState.Spells ??= structuredClone(character?.Spells ?? {
	Prepared: { Cantrips: [], Spells: [] },
	Always_Prepared: { Cantrips: [], Spells: [] },
	Known: { Cantrips: [], Spells: [] }
	});


  const overlay = document.createElement("div");
  overlay.className = "char-feats-overlay";
  overlay.innerHTML = `
    <div class="char-feats-modal">
      <h2>${character ? "Edit Feats" : "Add Feats"}</h2>

      <div class="feat-blocks"></div>

      <button class="add-feat">+ Add Feat</button>

      <div class="actions">
        <button class="cancel">Cancel</button>
        <button class="confirm">Save</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const featContainer = overlay.querySelector(".feat-blocks");

  // Seed pending state
  pendingState.feats = normalizeFeatsFromFrontmatter(character?.feats ?? []);

  // Render existing feats
  if (!pendingState.feats.length) {
    featContainer.appendChild(createFeatRow());
  } else {
    pendingState.feats.forEach(entry => {
      featContainer.appendChild(createFeatRow(entry));
    });
  }

  overlay.querySelector(".add-feat").onclick = () => {
    featContainer.appendChild(createFeatRow());
  };

  const close = () => overlay.remove();

  overlay.querySelector(".cancel").onclick = close;

  overlay.querySelector(".confirm").onclick = async () => {
    const feats = collectFeatsFromUI(featContainer);
	pendingState.feats = feats;
	applyFeatGrantedSpells(feats);

    markDirty();
    await commitPendingChanges();
    close();
  };
}




// ================ Bonus Onbarding =======================
const STAT_BONUS_KEYS = [
  // Ability scores
  "STR", "DEX", "CON", "INT", "WIS", "CHA",

  // Saves
  "STR_SAVE", "DEX_SAVE", "CON_SAVE", "INT_SAVE", "WIS_SAVE", "CHA_SAVE",

  // Skills
  "Acrobatics", "Animal_Handling", "Arcana", "Athletics", "Deception",
  "History", "Insight", "Intimidation", "Investigation", "Medicine",
  "Nature", "Perception", "Performance", "Persuasion", "Religion",
  "Sleight_of_Hand", "Stealth", "Survival",

  // Derived
  "Initiative",
  "Armor_Class",
  "Spell_Attack",
  "Spell_Save_DC",
  "Passive_Perception",
  "Speed"
];

function createBonusRow(key = "", data = {}) {
  const row = document.createElement("div");
  row.className = "bonus-row";

  row.innerHTML = `
    <select class="bonus-key">
      <option value="">Select Stat</option>
      ${STAT_BONUS_KEYS.map(k =>
        `<option value="${k}" ${k === key ? "selected" : ""}>
          ${k.replaceAll("_", " ")}
        </option>`
      ).join("")}
    </select>

    <input
      class="bonus-value"
      type="text"
      placeholder="Value (e.g. 1, CHA_MOD, CHA_MOD / 2)"
      value="${data.value ?? ""}"
    />

    <input
      class="bonus-source"
      type="text"
      placeholder="Source"
      value="${data.source ?? ""}"
    />

    <button class="remove">✕</button>
  `;

  row.querySelector(".remove").onclick = () => row.remove();

  return row;
}

function collectBonusesFromUI(container) {
  const bonuses = {};

  container.querySelectorAll(".bonus-row").forEach(row => {
    const key = row.querySelector(".bonus-key").value;
    if (!key) return;

    const value = row.querySelector(".bonus-value").value.trim();
    const source = row.querySelector(".bonus-source").value.trim();

    if (!value && !source) return;

    bonuses[key] = {
      value: value || 0,
      source: source || ""
    };
  });

  return bonuses;
}


function openCharacterBonusOnboardingModal(character = null) {
  if (document.querySelector(".char-bonus-overlay")) return;

  const overlay = document.createElement("div");
  overlay.className = "char-bonus-overlay";
  overlay.innerHTML = `
    <div class="char-bonus-modal">
      <h2>Stat Bonuses</h2>

      <p class="bonus-help">
        Bonuses support dynamic expressions.
        See <a href="[[README#Stat Bonuses|Stat Bonus]]">Stat Bonus</a> for details.
      </p>

      <div class="bonus-blocks"></div>

      <button class="add-bonus">+ Add Bonus</button>

      <div class="actions">
        <button class="cancel">Cancel</button>
        <button class="confirm">Save</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const container = overlay.querySelector(".bonus-blocks");

  // Seed pending state safely
  pendingState.Stat_Bonus = structuredClone(character?.Stat_Bonus ?? {});

  // Render existing bonuses
  const entries = Object.entries(pendingState.Stat_Bonus);
  if (!entries.length) {
    container.appendChild(createBonusRow());
  } else {
    for (const [key, data] of entries) {
      container.appendChild(createBonusRow(key, data));
    }
  }

  overlay.querySelector(".add-bonus").onclick = () => {
    container.appendChild(createBonusRow());
  };

  const close = () => overlay.remove();
  overlay.querySelector(".cancel").onclick = close;

  overlay.querySelector(".confirm").onclick = async () => {
    pendingState.Stat_Bonus = collectBonusesFromUI(container);

    markDirty();
    await commitPendingChanges();
    close();
  };
}

// ======================================================================================
// =================================================================   UI Refresh Helpers
// ======================================================================================
const active = [];
const condObj = getConditionsState();
const concentrationActive = condObj.concentration === true;

function addResourceToggles({
  parent,
  label,
  namespace,
  prefix = "",
  count = 1,
  key,             // for single-key toggles
  showIndex = true // show the number after checkbox
}) {
  // Ensure the namespace exists in pendingState
  pendingState[namespace] ??= {};

  const wrap = parent.createEl("div", { cls: "char-header-stat" });
  if (label) wrap.createEl("strong", { text: label });

  const row = wrap.createDiv({ cls: "resource-toggle-row" });

  if (key) {
    // Single toggle
    if (pendingState[namespace][key] === undefined) pendingState[namespace][key] = false;

    const labelEl = row.createEl("label", { cls: "resource-toggle" });
    const input = labelEl.createEl("input", { type: "checkbox" });

    // Bind data for refresh
    input.dataset.namespace = namespace;
    input.dataset.key = key;

    input.checked = !!pendingState[namespace][key];

    input.addEventListener("change", () => {
      pendingState[namespace][key] = input.checked;
      markDirty();
	  syncAfterConditionChange();
    });

  } else {
    // Numbered toggles
    for (let i = 1; i <= count; i++) {
      const toggleKey = `${prefix}${i}`;
      if (pendingState[namespace][toggleKey] === undefined) pendingState[namespace][toggleKey] = false;

      const labelEl = row.createEl("label", { cls: "resource-toggle" });
      const input = labelEl.createEl("input", { type: "checkbox" });

      // Bind data for refresh
      input.dataset.namespace = namespace;
      input.dataset.key = toggleKey;

      input.checked = !!pendingState[namespace][toggleKey];

      input.addEventListener("change", () => {
        pendingState[namespace][toggleKey] = input.checked;
        markDirty();
      });

      if (showIndex) labelEl.appendText(` ${i}`);
    }
  }
  return row; // return the row if needed later
}

function updateSaveUi() {
  if (!saveBtn) return;

  saveBtn.disabled = !isDirty;
  saveBtn.classList.toggle("disabled", !isDirty);

  const dirtyEl = root.querySelector(".dirty-indicator");
  if (dirtyEl) {
    dirtyEl.hidden = !isDirty;
  }
}

function rebuildHeader() {
  if (startup.initializing) return;
  try {
		console.log("rebuildHeader() wrapper called; pendingState.conditions:", pendingState.conditions);
		window.__char_rebuildHandlers?.[__char_file_key]?.rebuildHeader?.();
		console.log("Character header rebuilt (wrapper)");
  } catch (e) {
    console.warn("Header rebuild failed", e);
  }
}

function syncConcentrationCSS() {
  if (startup.initializing) return;
  const cond =
    pendingState.conditions ??
    dv.current().conditions ??
    {};

  const isConcentrating =
    cond.concentration === true &&
    !!cond.concentration_spell;

  const headers = document.querySelectorAll('.character-header-block');

  headers.forEach(root => {
    if (isConcentrating) {
      root.classList.add('is-concentrating');
      root.dataset.concentrationSpell = cond.concentration_spell;
    } else {
      root.classList.remove('is-concentrating');
      delete root.dataset.concentrationSpell;
    }
  });
}

function refreshResourceToggles() {
  document.querySelectorAll("input[type=checkbox][data-namespace][data-key]").forEach(input => {
    const ns = input.dataset.namespace;
    const key = input.dataset.key;
    if (pendingState[ns] && key in pendingState[ns]) {
      input.checked = !!pendingState[ns][key];
    }
  });
}

function refreshSpellSlotToggles() {
	if (startup.initializing) return;
	console.log("Refreshing spell slot toggles from pendingState");
    const wrappers = document.querySelectorAll(
        '.mb-input-wrapper[data-namespace="spell_slot"]'
    );

    wrappers.forEach(wrapper => {
        const key = wrapper.dataset.key;
        const box = wrapper.querySelector('.checkbox-container');

        if (!box) return;

        const enabled = !!pendingState.spell_slot?.[key];

        box.classList.toggle("is-enabled", enabled);
        box.setAttribute("aria-checked", enabled ? "true" : "false");
    });
}

function syncAfterSpellCast() {
  if (startup.initializing) return;
  refreshSpellSlotToggles();
  rebuildConditions();
  rebuildHeader();
  syncConcentrationCSS();
}

function getConditionsState() {
  pendingState.conditions ??= structuredClone(c.conditions ?? {});
  return pendingState.conditions;
}

function getHpUiState() {
  const h = pendingState.health ?? { max: 0, current: 0, temp: 0 };

  const maxHP     = Number(h.max ?? 0);
  const currentHP = Number(h.current ?? 0);
  const tempHP    = Number(h.temp ?? 0);
  const maxTemp   = Number(h.maxTmp ?? (maxHP || 1));

  const hpPercent = maxHP > 0
    ? Math.max(0, Math.min(100, (currentHP / maxHP) * 100))
    : 0;

  const tempPercent = tempHP > 0
    ? Math.max(0, Math.min(100, (tempHP / maxTemp) * 100))
    : 0;

  return {
    maxHP,
    currentHP,
    tempHP,
    hpPercent,
    tempPercent
  };
}

function updateMenuDirtyState() {
  const btn = root.querySelector(".char-menu-toggle");
  const dirtyIndicator = root.querySelector(".dirty-indicator");
  const saveBtn = root.querySelector(".save-btn");

  if (!btn) return;

  btn.classList.toggle("dirty", isDirty);

  if (dirtyIndicator) dirtyIndicator.hidden = !isDirty;
  if (saveBtn) saveBtn.disabled = !isDirty;
}

function resolveImageSrc(path) {
  if (!path) return "";
  const file = app.vault.getAbstractFileByPath(path);
  if (!file) {
    console.warn("Image not found in vault:", path);
    return "";
  }
  return app.vault.getResourcePath(file);
}

function prettyKey(k) {
  return k.replace(/_/g, " ").replace(/\b\w/g, ch => ch.toUpperCase());
}

for (const [key, val] of Object.entries(condObj)) {
  // Special case for concentration
  if (key === "concentration" && val === true) {
    const spellName = condObj?.concentration_spell ?? "";
    if (spellName) {
      active.push(`Concentrating: ${spellName}`);
    } else {
      active.push(prettyKey(key));
    }
    continue;
  }

  if (val === true) { 
    active.push(prettyKey(key)); 
    continue; 
  }
  if (val === false || val == null) continue;

  if (typeof val === "object") {
    if ("count" in val && Number(val.count) > 0) {
      active.push(`${prettyKey(key)} (${val.count})`); continue;
    }
    if (val.Level === true) { active.push(`${prettyKey(key)} (Level)`); continue; }
    const innerTrue = Object.entries(val).filter(([k2, v2]) => k2 !== "count" && v2 === true);
    if (innerTrue.length) {
      const innerNames = innerTrue.map(([k2]) => prettyKey(k2)).join(", ");
      active.push(`${prettyKey(key)} (${innerNames})`);
      continue;
    }
  }

  if (typeof val === "number" && val > 0) {
    active.push(`${prettyKey(key)} (${val})`);
  }
}



window.getLiveCharacter = function () {
  const fm = dv.current();

  return {
    ...fm,
    conditions: {
      ...(fm.conditions ?? {}),
      ...(pendingState.conditions ?? {})
    },
    Stat_Bonus: {
      ...(fm.Stat_Bonus ?? {}),
      ...(pendingState.Stat_Bonus ?? {})
    }
  };
};

function getEffectiveConditions() {
  return pendingState.conditions
    ? structuredClone(pendingState.conditions)
    : structuredClone(c.conditions ?? {});
}


// ======================================================================================
// ==================================================================    Character Header
// ======================================================================================

const totalLevel = classLevels.reduce((sum, cls) => sum + cls.level, 0) || "?";

const isMulticlass = classLevels.length > 1;
const isSingleClass = classLevels.length === 1;

const classText = isMulticlass
  ? classLevels.map(({ className, level }) => `${className} (${level})`).join(" / ")
  : (classLevels[0]?.className ?? c.dndClass ?? "Class");

const subclassText = Array.isArray(c.subclass)
  ? c.subclass.join(" / ")
  : (c.subclass ?? "");

const subtitle = isSingleClass
  ? `Level ${totalLevel} ${classText}${subclassText ? ` — ${subclassText}` : ""}`
  : `Level ${totalLevel} ${classText}${subclassText ? ` — ${subclassText}` : ""}`;
const condDisplay = active.length ? active.join(", ") : "None";

function normalizeHealth(h = {}) {
	return {
		max:     Number(h.max ?? 0),
		current: Number(h.current ?? h.max ?? 0),
		temp:    Number(h.temp ?? 0),
		maxTmp:  Number(h.maxTmp ?? h.max ?? 1),
	};
}
const health = normalizeHealth(pendingState.health);
const maxHP     = Number(health.max ?? 0);
const currentHP = Number(health.current ?? maxHP);
const tempHP    = Number(health.temp ?? 0);
const maxTemp   = Number(health.maxTmp ?? 1);
const hpPercent = Math.max(0, Math.min(100, (currentHP / maxHP) * 100));
const tempPercent = Math.max(0, Math.min(100, (tempHP / maxTemp) * 100));
let images = [];

if (Array.isArray(c.image)) {
    images = c.image;                 // Already an array
} else if (typeof c.image === "string") {
    images = [c.image];               // Convert single string to array
}

// Pick one image — your choice of rule:
const chosenImagePath =
  images.length > 0
    ? images[Math.floor(Math.random() * images.length)]
    : "";

const chosenImage = resolveImageSrc(chosenImagePath);

const menuHtml = `
<div class="char-menu">
  <button class="char-menu-toggle" aria-label="Open menu">
    <span class="menu-icon">☰</span>
  </button>

  <div class="char-menu-panel">
    <div class="dirty-indicator" hidden>● Unsaved changes</div>
    <button class="char-menu-btn save-btn" disabled>
      💾 Save Changes
    </button>
	<button class="char-menu-btn edit-btn" enabled>
      ✏️ Edit Character
    </button>
	<button class="char-menu-btn stats-btn" enabled>
      📊 Edit Stats
    </button>
	<button class="char-menu-btn feats-btn" enabled>
      🌟 Edit Feats
    </button>
	</button>
	<button class="char-menu-btn bonus-btn" enabled>
      💫 Edit Bonuses
    </button>
  </div>
</div>
`;
	let html = `
<div class="char-header">
	${menuHtml}
<div class="char-info">
    <h1 class="char-name">${c.name ?? "Click Here to Create a new Character"}</h1>
    <div class="char-subtitle">
		<div class="char-subtitle">${subtitle}</div>
	</div>
    <div class="char-details">
      <div><b>Background:</b> ${c.background ?? "None"}</div>
      <div><b>Species:</b> ${c.species ?? "None"}</div>
      <div><b>Alignment:</b> ${c.alignment ?? "None"}</div>
      <div><b>Size:</b> ${c.size ?? "None"}</div>
      <div><b>Senses:</b> ${c.senses ?? "None"}</div>
      <div><b>Languages:</b> ${Array.isArray(c.languages) ? c.languages.join(", ") : c.languages ?? "None"}</div>
      <div><b>Tool Proficiencies:</b> ${Array.isArray(c.tools) ? c.tools.join(", ") : c.tools ?? "None"}</div>
      <div><b>Instrument Proficiencies:</b> ${Array.isArray(c.instruments) ? c.instruments.join(", ") : c.instruments ?? "None"}</div>
      <div><b>Armor Training:</b> ${Array.isArray(c.armor_training) ? c.armor_training.join(", ") : c.armor_training ?? "None"}</div>
      <div><b>Weapon Training:</b> ${Array.isArray(c.weapon_training) ? c.weapon_training.join(", ") : c.weapon_training ?? "None"}</div>
      <div><b>Resistances:</b> ${Array.isArray(c.resistances) ? c.resistances.join(", ") : c.resistances ?? "None"}</div>
      <div><b>Conditions:</b> ${condDisplay}</div>
    </div>
  </div>

  <div class="char-portrait-container">
    <div class="char-portrait">
      ${chosenImage ? `<img src="${chosenImage}" alt="${c.name}" />` : ""}
    </div>
    <div class="hp-bars">
      <div class="hp-bar"><div class="hp-fill" style="height:${hpPercent}%;"></div></div>
      <div class="temp-bar"><div class="temp-fill" style="height:${tempPercent}%;"></div></div>
      <div class="hp-label">${currentHP}/${maxHP}${tempHP > 0 ? ` (+${tempHP})` : ""}</div>
    </div>
  </div>
</div>
`;

const root = dv.container.createEl("div");
root.classList.add("character-header-block");
root.innerHTML = html;
syncConcentrationCSS();

const nameEl = root.querySelector(".char-name");

if (!c.name && nameEl && !nameEl.dataset.bound) {
	nameEl.dataset.bound = "true";
	nameEl.style.cursor = "pointer";
	nameEl.style.textDecoration = "underline";
	nameEl.style.opacity = "0.85";
	nameEl.style.zIndex = 9999;

	nameEl.addEventListener("click", () => {
		openCharacterOnboardingModal();
	});
}

const hpFill   = root.querySelector(".hp-fill");
const tempFill = root.querySelector(".temp-fill");
const hpLabel  = root.querySelector(".hp-label");

const menuRoot = root.querySelector(".char-menu");
const toggleBtn = root.querySelector(".char-menu-toggle"); 
const saveBtn   = root.querySelector(".save-btn");
const editBtn = root.querySelector(".edit-btn");
const editStatBtn = root.querySelector(".stats-btn");
const editFeatBtn = root.querySelector(".feats-btn");
const editBonusBtn = root.querySelector(".bonus-btn");

if (menuRoot && toggleBtn && !menuRoot.dataset.bound) {
  menuRoot.dataset.bound = "true";

  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    menuRoot.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!menuRoot.classList.contains("open")) return;
    if (!menuRoot.contains(e.target)) {
      menuRoot.classList.remove("open");
    }
  });

  if (saveBtn) {
    saveBtn.addEventListener("click", commitPendingChanges);
	//new Notice("Changes saved", 3000);
  }
  if (editBtn) {
		editBtn.addEventListener("click", (e) => {
		e.preventDefault();
		e.stopPropagation();
		menuRoot.classList.remove("open");
		openCharacterOnboardingModal(c);
	});
  }
  if (editStatBtn) {
	editStatBtn.addEventListener("click", (e) => {
		e.preventDefault();
		e.stopPropagation();
		menuRoot.classList.remove("open");
		openCharacterStatOnboardingModal(c);
	});
  }
  if (editFeatBtn) {
	editFeatBtn.addEventListener("click", (e) => {
		e.preventDefault();
		e.stopPropagation();
		menuRoot.classList.remove("open");
		openCharacterFeatOnboardingModal(c);
	});
  }
  if (editBonusBtn) {
	editBonusBtn.addEventListener("click", (e) => {
		e.preventDefault();
		e.stopPropagation();
		menuRoot.classList.remove("open");
		openCharacterBonusOnboardingModal(c);
	});
  }
  if (!menuRoot || !toggleBtn) {
	console.warn("Character menu not ready yet");
  }
}

// Ensure UI reflects any persisted dirty state from previous runs
updateSaveUi();
renderHpDisplay();
updateMenuDirtyState();

// Expose a header rebuild handler so conditions/other bits can update without full refresh
try {
	window.__char_rebuildHandlers[__char_file_key].rebuildHeader = function() {
		try {
			console.log('rebuildHeader handler running; pendingState.conditions:', pendingState.conditions);
			const headers = Array.from(document.querySelectorAll('.character-header-block .char-details'));
			console.log('rebuildHeader handler found header elements:', headers.length);
			if (!headers.length) return;

			const condObjLocal = getConditionsState();
			const activeLocal = [];

			for (const [k, v] of Object.entries(condObjLocal)) {
				if (k === 'concentration' && v === true) {
					const spellName = condObjLocal?.concentration_spell ?? '';
					if (spellName) activeLocal.push(`Concentrating: ${spellName}`);
					else activeLocal.push(prettyKey(k));
					continue;
				}
				if (v === true) { activeLocal.push(prettyKey(k)); continue; }
				if (v === false || v == null) continue;
				if (typeof v === 'object') {
					if ('count' in v && Number(v.count) > 0) { activeLocal.push(`${prettyKey(k)} (${v.count})`); continue; }
					if (v.Level === true) { activeLocal.push(`${prettyKey(k)} (Level)`); continue; }
					const innerTrue = Object.entries(v).filter(([k2, v2]) => k2 !== 'count' && v2 === true);
					if (innerTrue.length) { const innerNames = innerTrue.map(([k2]) => prettyKey(k2)).join(', '); activeLocal.push(`${prettyKey(k)} (${innerNames})`); continue; }
				}
				if (typeof v === 'number' && v > 0) { activeLocal.push(`${prettyKey(k)} (${v})`); }
			}

			const condDisplayLocal = activeLocal.length ? activeLocal.join(', ') : 'None';

			for (const [idx, headerDetails] of headers.entries()) {
				// Find the Conditions row in this header and update it
				const child = Array.from(headerDetails.children).find(el => el.textContent && el.textContent.trim().startsWith('Conditions:'));
				if (child) {
					child.innerHTML = `<b>Conditions:</b> ${condDisplayLocal}`;
				}
			}

			// Keep other header UI in sync
			try { updateSaveUi(); } catch (e) {}
			try { renderHpDisplay(); } catch (e) {}
			console.log('rebuildHeader handler updated header display');
		} catch (err) { console.error('rebuildHeader failed:', err); }
	};
} catch (e) {}







// === Character Header Bottom Bar ===
const bottomBar = root.createEl("div", { cls: "char-header-bottom" });

/* ===== Heroic Inspiration ===== */
addResourceToggles({
  parent: bottomBar,
  label: "Heroic Inspiration",
  namespace: "conditions",
  key: "heroic_inspiration",
  showIndex: false
});

// Only display Luck Points if character has the Lucky feat
if (feats.includes("Lucky")) {
    addResourceToggles({
	  parent: bottomBar,
	  label: "Luck:",
	  namespace: "Luck",
	  prefix: "luck_point_",
	  count: pb,
	  showIndex: false
	});
}

// Only display Guarded Mind if character has the Mage Slayer feat
if (feats.includes("Mage Slayer")) {
    addResourceToggles({
	  parent: bottomBar,
	  label: "Mage Slayer:",
	  namespace: "Mage_Slayer",
	  prefix: "guarded_mind_",
	  count: 1,
	  showIndex: false
	});
}

// Only display Quick Ritual if character has the Ritual Caster feat
if (feats.includes("Ritual Caster")) {
    addResourceToggles({
	  parent: bottomBar,
	  label: "Quick Ritual:",
	  namespace: "Ritual_Caster",
	  prefix: "quick_ritual_",
	  count: 1,
	  showIndex: false
	});
}

// ============================================
//==============Class/Feat/Race Specific Resource Toggles
// ============================================

// Only display Rage Points if character is a Barbarian
if (hasBarbarian) {
  function rageFromLevel(lvl) {
	  if (lvl >= 17) return 6;
	  if (lvl >= 11) return 5;
	  if (lvl >= 5) return 4;
	  if (lvl >= 2)  return 3;
	  if (lvl >= 1)  return 2;
	  return 0;
	}
	
	addResourceToggles({
	  parent: bottomBar,
	  label: "Rage:",
	  namespace: "Rage",
	  prefix: "rage-",
	  count: rageFromLevel(barbarianLevel),
	  showIndex: false
	});
}

// Only display Bardic Inspiration if character is a Bard
if (hasBard) {

  let biUses = Math.max(1, CHA_MOD);

  function bardicDieFromLevel(lvl) {
    if (lvl >= 15) return "d12";
    if (lvl >= 9) return "d10";
    if (lvl >= 4) return "d8";
    return "d6";
  }

  const bardWrap = bottomBar.createEl("div", { cls: "char-header-stat" });

  bardWrap.createEl("strong", { text: "Bardic Inspiration: " });

  // Die value (shown once)
  bardWrap.createEl("span", {
    cls: "bardic-die",
    text: bardicDieFromLevel(bardLevel)
  });

  addResourceToggles({
    parent: bardWrap,
    label: "",
    namespace: "Bardic_Inspiration",
    prefix: "bardic_insp_",
    count: biUses,
    showIndex: false
  });
}



// Only display Wild Shape if character is a Druid
if (hasDruid) {

  function wsFromLevel(lvl) {
    if (lvl >= 17) return 4;
    if (lvl >= 7) return 3;
    if (lvl >= 2) return 2;
    return 0;
  }

	addResourceToggles({
	parent: bottomBar,
	label: "Wild Shape:",
	namespace: "Wild_Shape",
	prefix: "wild_shape-",
	count: wsFromLevel(druidLevel),
	showIndex: false   // 👈 keys are numbered, UI is not
});
}

// Only display Second Wind if character is a Fighter
if (hasFighter) {

  function swFromLevel(lvl) {
    if (lvl >= 10) return 4;
    if (lvl >= 4) return 3;
    return 2;
  }

  addResourceToggles({
	  parent: bottomBar,
	  label: "Second Wind:",
	  namespace: "Second_Wind",
	  prefix: "second_wind-",
	  count: swFromLevel(fighterLevel),
	  showIndex: false
	});

    if( fighterLevel >= 2 ) {
		let ammount = 1;
		if (fighterLevel >= 17) { ammount = 2; }
		addResourceToggles({
		parent: bottomBar,
		label: "Action Surge:",
		namespace: "Action_Surge",
		prefix: "action_surge-",
		count: swFromLevel(ammount),
		showIndex: false
		});
	}
	
}

// Only Superiority Dice if character is a Battle Master Fighter
if (subclass.includes("Battle Master")) {

  function supDieFromLevel(lvl) {
    if (lvl >= 15) return [7, "d8"];
    if (lvl >= 7)  return [5, "d8"];
    return [4, "d8"];
  }

  const supWrap = bottomBar.createEl("div", { cls: "char-header-stat" });

  const [sd, value] = supDieFromLevel(fighterLevel);

  supWrap.createEl("strong", { text: "Superiority Dice:" });
  supWrap.createEl("span", { text: `${sd} × ${value}` });

  addResourceToggles({
    parent: supWrap,
    label: "",
    namespace: "Superiority_dice",
    prefix: "superiority_die_",
    count: sd,
    showIndex: false
  });
}

// Only display Energy Dice if character is a Psi Warrior Fighter
if (subclass.includes("Psi Warrior")) {

  function pwenergyDieFromLevel(lvl) {
    if (lvl >= 17) return [12, "d12"];
    if (lvl >= 13) return [10, "d10"];
    if (lvl >= 11) return [8,  "d10"];
    if (lvl >= 9)  return [8,  "d8"];
    if (lvl >= 5)  return [6,  "d8"];
    if (lvl >= 3)  return [4,  "d6"];
    return [0, "d6"];
  }

  const pwWrap = bottomBar.createEl("div", { cls: "char-header-stat" });

  const [pwed, value] = pwenergyDieFromLevel(fighterLevel);

  pwWrap.createEl("strong", { text: "Energy Dice:" });
  pwWrap.createEl("span", { text: `(${value})` });

  if (pwed > 0) {
    addResourceToggles({
      parent: pwWrap,
      label: "",
      namespace: "PSIenergy_dice",
      prefix: "psienergy_die_",
      count: pwed,
      showIndex: false
    });
  }
}

// Only display Focus Points if character is a Monk
if (hasMonk) {

  function fpFromLevel(lvl) {
    // monk gives 1 focus point per monk level starting level 2
    if (lvl >= 2) return monkLevel;
    return 0;
  }

  addResourceToggles({
	  parent: bottomBar,
	  label: "Focus Points:",
	  namespace: "Focus_Points",
	  prefix: "focus_points-",
	  count: fpFromLevel(monkLevel),
	  showIndex: false
	});
}

// Combined Channel Divinity for Cleric and Paladin
function addChannelDivinityToggles({ parent, clericLevel, paladinLevel, hasCleric, hasPaladin }) {
  // Determine total CD uses
  function clericCD(lvl) {
    if (lvl >= 17) return 4;
    if (lvl >= 6)  return 3;
    if (lvl >= 2)  return 2;
    return 0;
  }

  function paladinCD(lvl) {
    if (lvl >= 11) return 3;
    if (lvl >= 3)  return 2;
    return 0;
  }

  const totalCD = (hasCleric ? clericCD(clericLevel) : 0) +
                  (hasPaladin ? paladinCD(paladinLevel) : 0);

  if (totalCD <= 0) return; // nothing to display

  let cdText = "Channel Divinity";
  if (hasCleric && hasPaladin) cdText += " (Cleric + Paladin)";
  else if (hasCleric) cdText += " (Cleric)";
  else if (hasPaladin) cdText += " (Paladin)";

  const cdWrap = parent.createEl("div", { cls: "char-header-stat" });
  cdWrap.createEl("strong", { text: cdText });

  addResourceToggles({
    parent: cdWrap,
    label: "",
    namespace: "Channel_Divinity",
    prefix: "divinity-",
    count: totalCD,
    showIndex: false
  });
}
addChannelDivinityToggles({
  parent: bottomBar,
  clericLevel: clericLevel,
  paladinLevel: paladinLevel,
  hasCleric: hasCleric,
  hasPaladin: hasPaladin
});


// Only  Display Dreadful Strike if character is a Gloom Stalker Ranger
if (subclass.includes("Gloom Stalker" )) {
  
  addResourceToggles({
	  parent: bottomBar,
	  label: "Dreadful Strike:",
	  namespace: "Dreadful_Strike",
	  prefix: "dreadful_strike-",
	  count: WIS_MOD,
	  showIndex: false
	});
}

// Only display Energy Dice if character is a Soul Knife Rogue
if (subclass.includes("Soulknife")) {

  function energyDieFromLevel(lvl) {
    if (lvl >= 17) return [12, "d12"];
    if (lvl >= 13) return [10, "d10"];
    if (lvl >= 11) return [8,  "d10"];
    if (lvl >= 9)  return [8,  "d8"];
    if (lvl >= 5)  return [6,  "d8"];
    if (lvl >= 3)  return [4,  "d6"];
    return [0, "d6"];
  }

  const skWrap = bottomBar.createEl("div", { cls: "char-header-stat" });

  const [sked, value] = energyDieFromLevel(rogueLevel);

  skWrap.createEl("strong", { text: "Energy Dice:" });
  skWrap.createEl("span", { text: `(${value})` });

  if (sked > 0) {
    addResourceToggles({
      parent: skWrap,
      label: "",
      namespace: "Energy_Dice",
      prefix: "energy_die_",
      count: sked,
      showIndex: false
    });
  }
}

// Only display Sorcery Points if character is a Sorcerer
if (hasSorcerer) {

  function spFromLevel(lvl) {
    // sorcerer gives 1 sorcery point per level starting level 2
    if (lvl >= 2) return sorcererLevel;
    return 0;
  }

  addResourceToggles({
	  parent: bottomBar,
	  label: "Sorcery Points:",
	  namespace: "Sorcery_Points",
	  prefix: "sorcery_points-",
	  count: spFromLevel(sorcererLevel),
	  showIndex: false
	});
}

// Only display Magical Cunning if character is a Warlock
if (hasWarlock) {

  addResourceToggles({
	  parent: bottomBar,
	  label: "Magical Cunning:",
	  namespace: "Magical_Cunning",
	  prefix: "magical_cunning-",
	  count: 1,
	  showIndex: false
	});
}

/* ====== Species Traits ======== */


// Only display for Orc's (Relentless Endurance)
if (c.species === "Orc") {

  addResourceToggles({
	  parent: bottomBar,
	  label: "Adrenaline Rush:",
	  namespace: "Adrenaline_Rush",
	  prefix: "adrenaline_rush-",
	  count: pb,
	  showIndex: false
	});
	addResourceToggles({
	  parent: bottomBar,
	  label: "Relentless Endurance:",
	  namespace: "Relentless_Endurance",
	  prefix: "relentless_endurance-",
	  count: 1,
	  showIndex: false
	});
	
}




/* ===== Hit Dice (Multiclass Compatible, Memory-driven) ===== */

// Ensure Hit_Dice namespace exists in pendingState
pendingState.Hit_Dice ??= structuredClone(c.Hit_Dice ?? {});

// Hit die values by class
const hitDieByClass = {
    Barbarian: "d12",
    Fighter: "d10", Paladin: "d10", Ranger: "d10",
    Cleric: "d8", Druid: "d8", Monk: "d8", Rogue: "d8",
    Warlock: "d8", Bard: "d8",
    Wizard: "d6", Sorcerer: "d6"
};

// Normalize dndClass into a dictionary: { ClassName: Levels }
let classDict = {};
if (typeof c.dndClass === "string") {
    classDict[c.dndClass] = c.Level ?? 1;
} else if (Array.isArray(c.dndClass)) {
    c.dndClass.forEach(obj => {
        const [cls, lvl] = Object.entries(obj)[0];
        classDict[cls] = lvl;
    });
}

// Create wrapper
const hdWrap = bottomBar.createEl("div", { cls: "char-header-stat" });
hdWrap.createEl("strong", { text: "Hit Dice:" });
hdWrap.createEl("br");

// Build row for each class using addResourceToggles
Object.entries(classDict).forEach(([cls, lvl]) => {
    const die = hitDieByClass[cls] ?? "d8";

    const rowWrap = hdWrap.createEl("div", { cls: "resource-toggle-row" });
    rowWrap.createEl("strong", { text: `(${die}):` });

    // Use addResourceToggles
    addResourceToggles({
        parent: rowWrap,
        label: "",
        namespace: "Hit_Dice",
        prefix: `${cls}_${die}-`,
        count: lvl,
        showIndex: false,
        onCreate: (input, key) => {
            // Link dataset for potential direct UI refresh
            input.dataset.namespace = "Hit_Dice";
            input.dataset.key = key;
        }
    });
});


/* ===== Death Saves ===== */

// Ensure Death_Save exists in pendingState
pendingState.Death_Save ??= structuredClone(c.Death_Save ?? {});

// ----- Successes -----
const dSaveSuccessWrap = bottomBar.createEl("div", { cls: "char-header-stat" });
dSaveSuccessWrap.createEl("strong", { text: "💀 - Successes:" });

const sucRow = dSaveSuccessWrap.createDiv({ cls: "resource-toggle-row" });
const dSaveSuccessArr = [...Array(3).keys()];

dSaveSuccessArr.forEach(i => {
    const key = `success-${i+1}`;
    if (pendingState.Death_Save[key] === undefined) pendingState.Death_Save[key] = false;

    const labelEl = sucRow.createEl("label", { cls: "resource-toggle" });
    const input = labelEl.createEl("input", { type: "checkbox" });
    input.checked = !!pendingState.Death_Save[key];

    input.addEventListener("change", () => {
        pendingState.Death_Save[key] = input.checked;
        markDirty();
    });
});

// ----- Failures -----
const dSaveFailWrap = bottomBar.createEl("div", { cls: "char-header-stat" });
dSaveFailWrap.createEl("strong", { text: "☠️ - Failures:" });

const failRow = dSaveFailWrap.createDiv({ cls: "resource-toggle-row" });
const dSavFailArr = [...Array(3).keys()];

dSavFailArr.forEach(i => {
    const key = `fail-${i+1}`;
    if (pendingState.Death_Save[key] === undefined) pendingState.Death_Save[key] = false;

    const labelEl = failRow.createEl("label", { cls: "resource-toggle" });
    const input = labelEl.createEl("input", { type: "checkbox" });
    input.checked = !!pendingState.Death_Save[key];

    input.addEventListener("change", () => {
        pendingState.Death_Save[key] = input.checked;
        markDirty();
    });
});

// === Health tracking buttons ===

let hpChangeValue = 0;

function renderHpDisplay() {
  const {
    maxHP,
    currentHP,
    tempHP,
    hpPercent,
    tempPercent
  } = getHpUiState();

  if (hpFill) {
    hpFill.style.height = `${hpPercent}%`;
  }

  if (tempFill) {
    tempFill.style.height = `${tempPercent}%`;
  }

  if (hpLabel) {
    hpLabel.textContent =
      `${currentHP}/${maxHP}` + (tempHP > 0 ? ` (+${tempHP})` : "");
  }
}

function updateHealthMemory(updater, afterNotice) {
  pendingState.health ??= {};
  updater(pendingState);

  markDirty();

  if (afterNotice) afterNotice();
}



function dealDamage() {
  const delta = hpChangeValue;
  if (!delta) return;

  updateHealthMemory(state => {
    const temp = Number(state.health.temp ?? 0);
    const current = Number(state.health.current ?? 0);

    if (temp === 0) {
      state.health.current = Math.max(0, current - delta);
    } else {
      state.health.temp = temp - delta;
      if (state.health.temp < 0) {
        state.health.current = Math.max(0, current + state.health.temp);
        state.health.temp = 0;
      }
    }
  }, () => {
    const rollMod = CON_MOD + pb;

    if (c.conditions?.concentration === true) {
      let conTest = Math.floor(delta / 2);
      conTest = Math.min(30, Math.max(10, conTest));
      new Notice(`Roll a DC ${conTest} Concentration Check! Add ${rollMod}`, 5000);
    } else {
      new Notice(`Dealing ${delta} hp of damage (Unsaved)`, 5000);
    }
  });

	// Ensure UI reflects any persisted dirty state from previous runs
	updateSaveUi();
	updateMenuDirtyState();
	renderHpDisplay();
	resetHpInput();
}



function healHitPoints() {
  const delta = hpChangeValue;
  if (!delta) return;

  updateHealthMemory(state => {
    const max = Number(state.health.max ?? 0);
    const current = Number(state.health.current ?? 0);

    state.health.current = Math.min(
      Math.max(0, current + delta),
      max
    );
  }, () => {
    new Notice(`Healing ${delta} HP (Unsaved)`, 5000);
  });

  renderHpDisplay();
  resetHpInput();
}

function applyTempHP() {
  const delta = hpChangeValue;
  if (!delta) return;

  updateHealthMemory(state => {
    const currentTemp = Number(state.health.temp ?? 0);
    state.health.temp = Math.max(currentTemp, delta);
    state.health.maxTmp = delta;
  }, () => {
    new Notice(`Adding ${delta} Temporary Hit Points (Unsaved)`, 5000);
  });

  renderHpDisplay();
  resetHpInput();
}

function resetHP() {
  updateHealthMemory(state => {
    state.health.current = Number(state.health.max ?? 0);
    state.health.temp = 0;
    state.health.maxTmp = 0;
  });

  renderHpDisplay();
  new Notice("Health reset", 3000);
}

let dealDamageBtn, healBtn, tempBtn, resetBtn;





// Wrapper div for health controls
const hpWrapper = dv.container.createEl("div", { cls: "hp-controls-wrapper" });

/* === Row 1: HP change + buttons === */
const row1 = hpWrapper.createEl("div", { cls: "hp-controls-flex" });

// Label
row1.createEl("strong", { text: "Add Health Or Deal Damage:" });

// Number input
const hpInput = row1.createEl("input", {
  type: "number",
  cls: "hp-change-input"
});

hpInput.value = 0;

hpInput.addEventListener("input", () => {
  hpChangeValue = Number(hpInput.value || 0);
});

hpInput.addEventListener("input", () => {
  hpChangeValue = Number(hpInput.value || 0);
  updateHpButtons();
});

function resetHpToMax() {
  updateHealthMemory(state => {
    state.health.current = Number(state.health.max ?? 0);
    state.health.temp = 0;
    state.health.maxTmp = 0;
	markDirty();
  }, () => {
    new Notice("Health reset to maximum (unsaved)", 3000);
  });

  renderHpDisplay();
  resetHpInput();
}

function resetHpInput() {
  hpChangeValue = 0;
  hpInput.value = "";
  updateHpButtons();
}

// Buttons
const buttonsRow1 = [
  { id: "deal-damage", label: "🗡️ Deal Damage" },
  { id: "heal-hitpoints", label: " 🧡 Heal HP" },
  { id: "temp-hitpoints", label: " 💙 Temp HP" },
  { id: "reset-hp-input", label: "↺ Reset" }
];


function updateHpButtons() {
  const hasValue = hpChangeValue !== null && hpChangeValue !== 0 && hpChangeValue !== "";

  dealDamageBtn.disabled = !hasValue;
  healBtn.disabled = !hasValue;
  tempBtn.disabled = !hasValue;
}


buttonsRow1.forEach(btn => {
  const el = row1.createEl("button", {
    text: btn.label,
    cls: "hp-btn",
    attr: { "data-action": btn.id }
  });

  switch (btn.id) {
    case "deal-damage":
      dealDamageBtn = el;
      el.onclick = dealDamage;
      break;

    case "heal-hitpoints":
      healBtn = el;
      el.onclick = healHitPoints;
      break;

    case "temp-hitpoints":
      tempBtn = el;
      el.onclick = applyTempHP;
      break;

    case "reset-hp-input":
      resetBtn = el;
      el.onclick = resetHpToMax;
      break;
  }
});

/* === Row 2: Rest buttons === */
const row2 = hpWrapper.createEl("div", { cls: "hp-controls-flex" });

let shortRestBtn, longRestBtn;

[
  { id: "short-rest", label: "Short Rest" },
  { id: "long-rest", label: "Long Rest" }
].forEach(btn => {
  const el = row2.createEl("button", {
    text: btn.label,
    cls: "hp-btn rest-btn",
    attr: { "data-action": btn.id }
  });

  // Capture the buttons in variables
  if (btn.id === "short-rest") shortRestBtn = el;
  if (btn.id === "long-rest") longRestBtn = el;
});

// onclick functions
shortRestBtn.onclick = () => {
  // Health recovery is optional, maybe partial
  pendingState.health ??= {};
  // pendingState.health.current += Math.floor(pendingState.health.max / 2);

  // Cleric + Paladin Channel Divinity (recover 1 use)
  pendingState.Channel_Divinity ??= {};
  const cdKeys = Object.keys(pendingState.Channel_Divinity)
    .filter(k => k.startsWith("divinity-"))
    .sort((a,b) => Number(a.split("-")[1]) - Number(b.split("-")[1]));

  for (const key of cdKeys) {
    if (!pendingState.Channel_Divinity[key]) {
      pendingState.Channel_Divinity[key] = true;
      markDirty();
      break;
    }
  }

  // Druid Wild Shape (recover 1 use)
  pendingState.Wild_Shape ??= {};
  const wsKeys = Object.keys(pendingState.Wild_Shape)
    .filter(k => k.startsWith("wild_shape-"))
    .sort((a,b) => Number(a.split("-")[1]) - Number(b.split("-")[1]));

  for (const key of wsKeys) {
    if (!pendingState.Wild_Shape[key]) {
      pendingState.Wild_Shape[key] = true;
      markDirty();
      break;
    }
  }

  // Fighter Action Surge + Second Wind
  pendingState.Action_Surge ??= {};
  Object.keys(pendingState.Action_Surge).forEach(k => pendingState.Action_Surge[k] = true);

  pendingState.Second_Wind ??= {};
  Object.keys(pendingState.Second_Wind).forEach(k => pendingState.Second_Wind[k] = true);

  // Monk Focus Points
  pendingState.Focus_Points ??= {};
  Object.keys(pendingState.Focus_Points).forEach(k => pendingState.Focus_Points[k] = true);

  // Soulknife Energy Dice (recover 1 use)
  pendingState.Energy_Dice ??= {};
  Object.keys(pendingState.Energy_Dice)
    .filter(k => k.startsWith("energy_die_"))
    .sort((a,b) => Number(a.split("_").pop()) - Number(b.split("_").pop()))
    .some(k => {
      if (!pendingState.Energy_Dice[k]) {
        pendingState.Energy_Dice[k] = true;
        markDirty();
        return true; // stop after recovering one
      }
      return false;
    });

  // Warlock Pact Slots
  pendingState.spell_slot ??= {};
  Object.keys(pendingState.spell_slot)
    .filter(k => k.startsWith("pact"))
    .forEach(k => pendingState.spell_slot[k] = true);

  // Refresh UI
  refreshResourceToggles();
  renderHpDisplay();
  updateMenuDirtyState();
  updateSaveUi();
  renderOverviewTab();

  new Notice("Short Rest applied (unsaved)", 5000);
};

longRestBtn.onclick = async () => {
  const file = app.workspace.getActiveFile();
  if (!file) return;

  // Reset HP via your existing logic
  resetHP();

  await app.fileManager.processFrontMatter(file, fm => {
    fm.spell_slot ??= {};

    // Restore ALL spell slots
    pendingState.spell_slot ??= {};
	Object.keys(pendingState.spell_slot).forEach(k => {
		pendingState.spell_slot[k] = true;
	});
	markDirty();

    

    // Restore ALL Hit Dice
	pendingState.Hit_Dice ??= {};
    Object.keys(pendingState.Hit_Dice).forEach(key => {
      pendingState.Hit_Dice[key] = true;
    });

	// Restore Heroic Inspiration if Human
	if (c.species === "Human") {
		pendingState.conditions ??= {};
		pendingState.conditions.heroic_inspiration = true;
		markDirty();
	}

	// Reset Class Specific Resources

	if (hasBarbarian) {
		pendingState.Rage ??= {};
		Object.keys(pendingState.Rage).forEach(key => {
			if (key.startsWith("rage-")) {
				pendingState.Rage[key] = true;
			}
		});
		markDirty();
	}

	if (hasBard) {
		pendingState.Bardic_Inspiration ??= {};
		Object.keys(pendingState["Bardic_Inspiration"]).forEach(key => {
			if (key.startsWith("bardic_insp_")) {
				pendingState["Bardic_Inspiration"][key] = true;
			}
		});
		markDirty();
	}

	if (hasCleric) {
		pendingState.Channel_Divinity ??= {};
		Object.keys(pendingState.Channel_Divinity).forEach(key => {
			if (key.startsWith("divinity-")) {
				pendingState.Channel_Divinity[key] = true;
			}
		});
		markDirty();
	}

	if (hasDruid) {
		pendingState.Wild_Shape ??= {};
		Object.keys(pendingState.Wild_Shape).forEach(key => {
			if (key.startsWith("wild_shape-")) {
				pendingState.Wild_Shape[key] = true;
			}
		});
		markDirty();
	}

	if (hasDruid && druidLevel >= 2) {
		// Reset wild-shape selections in-memory and mark dirty (will be persisted on Save)
		pendingState.wildShapeOptions = [];
		markDirty();
		try { window.__char_rebuildHandlers?.[__char_file_key]?.renderWildShapeUI?.(); } catch (e) {}
		setTimeout(() => { try { app.commands.executeCommandById("dataview:refresh-views"); } catch {} }, 50);
	}

	if (hasFighter) {
		pendingState.Second_Wind ??= {};
		pendingState.Action_Surge ??= {};
		Object.keys(pendingState.Second_Wind).forEach(key => {
			if (key.startsWith("second_wind-")) {
				pendingState.Second_Wind[key] = true;
			}
		});

		Object.keys(pendingState.Action_Surge).forEach(key => {
			if (key.startsWith("action_surge-")) {
				pendingState.Action_Surge[key] = true;
			}
		});
		markDirty();
	}

	if (hasMonk) {
		pendingState.Focus_Points ??= {};
		Object.keys(pendingState.Focus_Points).forEach(key => {
			if (key.startsWith("focus_points-")) {
				pendingState.Focus_Points[key] = true;
			}
		});
		markDirty();
	}

	if (hasPaladin) {
		pendingState.Channel_Divinity ??= {};
		Object.keys(pendingState.Channel_Divinity).forEach(key => {
			if (key.startsWith("divinity-")) {
				pendingState.Channel_Divinity[key] = true;
			}
		});
		markDirty();
	}

	if (subclass.includes("Gloom Stalker" )) {
		pendingState.Dreadful_Strike ??= {};
		Object.keys(pendingState.Dreadful_Strike).forEach(key => {
			if (key.startsWith("dreadful_strike-")) {	
				pendingState.Dreadful_Strike[key] = true;
			}
		});
		markDirty();
	}

	if (subclass.includes("Soulknife" )) {
		pendingState.Energy_Dice ??= {};
		Object.keys(pendingState.Energy_Dice).forEach(key => {
			if (key.startsWith("energy_die_")) {
				pendingState.Energy_Dice[key] = true;
			}
		});
		markDirty();
	}

	if (hasSorcerer) {
		pendingState.Sorcery_Points ??= {};
		Object.keys(pendingState.Sorcery_Points).forEach(key => {
			if (key.startsWith("sorcery_points-")) {
				pendingState.Sorcery_Points[key] = true;
			}
		});
		markDirty();
	}

	if (hasWarlock) {
		pendingState.Magical_Cunning ??= {};
		Object.keys(pendingState.Magical_Cunning).forEach(key => {
			if (key.startsWith("magical_cunning-")) {
				pendingState.Magical_Cunning[key] = true;
			}
		});
		markDirty();
	}
	
	// Reset Feat Specific Resources

	if (feats.includes("Lucky")) {
		pendingState.Luck ??= {};
		Object.keys(pendingState.Luck).forEach(key => {
			if (key.startsWith("luck_point_")) {
				pendingState.Luck[key] = true;
			}
		});
	}

	if (feats.includes("Mage Slayer")) {
		pendingState.Mage_Slayer ??= {};
		Object.keys(pendingState.Mage_Slayer).forEach(key => {
			if (key.startsWith("guarded_mind_")) {
				pendingState.Mage_Slayer[key] = true;
			}
		});
		markDirty();
	}

	if (feats.includes("Ritual Caster")) {
		pendingState.Ritual_Caster ??= {};
		Object.keys(pendingState.Ritual_Caster).forEach(key => {
			if (key.startsWith("quick_ritual_")) {
				pendingState.Ritual_Caster[key] = true;
			}
		});
		markDirty();
	}

	if (pendingState.weaponMastery && Object.keys(pendingState.weaponMastery).length) {
		// Clear in-memory weapon mastery and mark dirty; Save will persist
		pendingState.weaponMastery = {};
		markDirty();
		try { window.__char_rebuildHandlers?.[__char_file_key]?.rebuildWeaponMastery?.(); } catch (e) {}
		setTimeout(() => { try { app.commands.executeCommandById("dataview:refresh-views"); } catch {} }, 50);
	}


	// Reset Species Specific Resources

	if (c.species === "Orc") {
		pendingState.Adrenaline_Rush ??= {};
		pendingState.Relentless_Endurance ??= {};
		Object.keys(pendingState.Adrenaline_Rush).forEach(key => {
			if (key.startsWith("adrenaline_rush-")) {
				pendingState.Adrenaline_Rush[key] = true;
			}
		});
		Object.keys(pendingState.Relentless_Endurance).forEach(key => {
			if (key.startsWith("relentless_endurance-")) {
				pendingState.Relentless_Endurance[key] = true;
			}
		});
	}

	// Conditions are now handled in-memory (pendingState) and persisted on Save

	
	

  });
	// After processing frontmatter for resources, update conditions in-memory
	// so UI reflects resets immediately and changes are persisted on Save.
	try {
		pendingState.conditions = pendingState.conditions || structuredClone(dv.current().conditions ?? {});

		// Handle exhaustion decrement
		if (pendingState.conditions.exhaustion?.Level === true) {
			const ex = pendingState.conditions.exhaustion;
			ex.count = Math.max(0, (ex.count ?? 0) - 1);
			if (ex.count === 0) ex.Level = false;
		}

		// Reset other conditions
		Object.keys(pendingState.conditions).forEach(key => {
			if (key === 'exhaustion') return;
			if (key.startsWith('heroic_inspiration')) {
				pendingState.conditions[key] = (c.species === 'Human');
			} else if (key.startsWith('concentration_spell')) {
				pendingState.conditions[key] = '';
			} else {
				delete pendingState.conditions[key];
			}
		});

		markDirty();

		// Update header display immediately
		try { window.__char_rebuildHandlers?.[__char_file_key]?.rebuildHeader?.(); } catch (e) {}

		// Update condition buttons and active list if the Conditions panel exists
		try {
			const panel = document.querySelector('#conditions .panel');
			if (panel) {
				const buttonContainer = panel.querySelector('.conditions-buttons');
				if (buttonContainer) {
					Array.from(buttonContainer.querySelectorAll('button')).forEach(btn => {
						const k = btn.dataset?.condKey ?? (btn.textContent || '').toLowerCase().replace(/ /g, '_');
						const val = pendingState.conditions?.[k] ?? false;
						btn.style.backgroundColor = val ? 'var(--interactive-accent)' : 'var(--background-modifier-border)';
					});

					const activeContainer = buttonContainer.previousElementSibling;
					if (activeContainer) {
						// Rebuild active list
						const conditions = getConditionsState();
						const active = Object.entries(conditions)
							.filter(([key, val]) => {
								if (val === true) return true;
								if (key === 'exhaustion' && typeof val === 'object' && val.Level === true && (val.count ?? 0) > 0) return true;
								return false;
							})
							.map(([key]) => key);

						activeContainer.innerHTML = '';
						if (active.length) {
							const items = active.map(key => {
								const slug = key.toLowerCase().replace(/_/g, '-');
								const target = `${BASE_FOLDER}/rules/conditions#${slug}`;
								return dv.fileLink(target, false, key.replace(/_/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase()));
							});
							dv.el('ul', items, { container: activeContainer });
						}
					}
				}
			}
		} catch (e) { console.error('Failed to update conditions panel after long rest:', e); }

	} catch (e) { console.error('Failed to update pendingState.conditions after long rest:', e); }
	
	refreshResourceToggles();
	renderHpDisplay();
	updateMenuDirtyState();
	updateSaveUi();
	refreshSpellSlotToggles();
	rebuildHeader();
	rebuildConditions();
	syncConcentrationCSS();
	syncAfterSpellCast();
	renderOverviewTab();
	syncAfterConditionChange();

	new Notice("Long Rest Completed!", 3000);
};

updateHpButtons();

//=====================================================================
// ==================================TABBED DASHBOARD BELOW ===========
//=====================================================================
// Remove any previously rendered dashboard instances in the document to avoid duplicate tab systems
try {
	const existing = Array.from(document.querySelectorAll('.char-dashboard'));
	if (existing.length > 0) {
			existing.forEach(el => el.remove());
	}
} catch (e) {}

const container = dv.el("div", { cls: "char-dashboard" });
try { dv.container.appendChild(container); } catch (e) { console.warn('Failed to append char-dashboard to dv.container', e); }
try {
	// Diagnostics suppressed: dashboard instance info omitted in production
	const dashboards = document.querySelectorAll('.char-dashboard');
	dashboards.forEach(() => {});
} catch (e) {}
container.innerHTML = `
<style>
.char-dashboard {
  font-family: var(--font-interface);
  color: var(--text-normal);
  background: rgba(15, 10, 25, 0.8);
  border: 1px solid rgba(120, 0, 180, 0.3);
  border-radius: 12px;
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: 0 0 20px rgba(120, 0, 180, 0.3);
}
.tab-bar {
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid rgba(150,150,255,0.2);
}
.tab {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}
.tab.active {
  border-bottom: 2px solid var(--interactive-accent);
  color: var(--interactive-accent);
}
.tab:hover { color: var(--text-accent); }
.tab-content { display: none; animation: fadeIn 0.3s ease; }
.tab-content.active { display: block; }
.panel {
  padding: 0.8rem;
  background: rgba(4, 59, 92, 0.2);
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(120, 0, 180, 0.2);
}
.stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
  text-align: center;
}
.stat {
  background: rgba(20, 10, 35, 0.5);
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: inset 0 0 6px rgba(138,43,226,0.5);
}
.item-list, .spell-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 0.6rem;
}
.item, .spell {
  background: rgba(25, 15, 35, 0.6);
  padding: 0.6rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: inset 0 0 5px rgba(120,0,180,0.4);
}
.condition { margin: 0.3rem 0; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

<div class="tab-bar">
  <div class="tab active" id="tab-overview" data-tab="overview">Overview</div>
  <div class="tab" id="tab-spells" data-tab="spells">Spells</div>
  <div class="tab" id="tab-weapons" data-tab="weapons">Weapons</div>
  <div class="tab" id="tab-inventory" data-tab="inventory">Inventory</div>
  <div class="tab" id="tab-conditions" data-tab="conditions">Conditions</div>
  <div class="tab" id="tab-bastions" data-tab="bastions">Bastions</div>
  <div class="tab" id="tab-session" data-tab="session">Session Notes</div>
</div>

<div class="tab-content active" id="overview">
  <div class="panel">
    <div class="stat-grid">
    </div>
  </div>
</div>

<div class="tab-content" id="spells">
  <div class="panel">
    <div class="spell-list"></div>
  </div>
</div>

<div class="tab-content" id="weapons">
  <div class="panel">
    <div class="weapon-list"></div>
  </div>
</div>

<div class="tab-content" id="inventory">
  <div class="panel">
    <div class="item-list"></div>
  </div>
</div>

<div class="tab-content" id="conditions">
  <div class="panel">
  </div>
</div>

<div class="tab-content" id="bastions">
  <div class="panel">
  </div>
</div>

<div class="tab-content" id="session">
  <div class="panel">
  </div>
</div>
`;

// ======== Tab Restore + Switching ========

// Get container for tab system
const tabContainer = container;

// Get tab buttons and tab content
const tabButtons = tabContainer.querySelectorAll(".tab-bar .tab");
const tabPanels = tabContainer.querySelectorAll(".tab-content");

// Helper: activate a tab by its ID (ex: "tab-inventory")
function setActiveTab(tabButtonId) {
	// Resolve the correct dashboard instance to operate on.
	// Prefer the button inside our current `tabContainer` (the instance we just created),
	// otherwise fall back to any element with that id in the document and use its closest
	// `.char-dashboard` ancestor.
	let btn = null;
	try {
		if (tabContainer) btn = tabContainer.querySelector(`#${tabButtonId}`);
	} catch (e) { btn = null; }
	if (!btn) {
		// global lookup as fallback
		try { btn = document.getElementById(tabButtonId); } catch (e) { btn = null; }
	}
	if (!btn) {
		try {
			const available = localContainer ? Array.from(localContainer.querySelectorAll('.tab-bar .tab')).map(b=>b.id) : [];
			console.warn('setActiveTab: button not found', tabButtonId, 'available buttons=', available);
		} catch (e) {
			console.warn('setActiveTab: button not found and could not list buttons', tabButtonId);
		}
		return;
	}

	const targetId = btn.dataset.tab;

	// Determine container (closest dashboard) to scope the activation
	const localContainer = (btn && btn.closest) ? (btn.closest('.char-dashboard') || tabContainer) : tabContainer;
	if (!localContainer) {
		console.warn('setActiveTab: no local container could be resolved for', tabButtonId);
		return;
	}

	// Remove active classes from THIS container's buttons/panels
	const localButtons = localContainer.querySelectorAll('.tab-bar .tab');
	const localPanels = localContainer.querySelectorAll('.tab-content');
	localButtons.forEach(t => t.classList.remove('active'));
	localPanels.forEach(p => p.classList.remove('active'));

	// Activate selected in the local container
	btn.classList.add('active');
	const panel = localContainer.querySelector(`#${targetId}`);
	if (panel) {
		panel.classList.add('active');
	} else {
		console.warn('setActiveTab: target panel not found for', targetId);
	}
}

// Load last tab or default to the first
let saved = localStorage.getItem("lastActiveInventoryTab");
if (!saved || !tabContainer.querySelector(`#${saved}`)) {
    saved = tabButtons[0].id; // fallback to first tab
}

// Apply the saved tab
setActiveTab(saved);

// Attach click listeners
tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.id;
        setActiveTab(id);
        localStorage.setItem("lastActiveInventoryTab", id);
    });
});

// Add a delegated click handler as a fallback so clicks work even if
// the script has been evaluated multiple times and listeners were lost.
try {
	if (!window.__charDashboardTabHandlerInstalled) {
		window.__charDashboardTabHandlerInstalled = true;
		window.__lastUserAction = 0;
		document.addEventListener('click', (ev) => {
			const t = ev.target.closest?.('.tab');
			if (!t) return;
			const id = t.id;
			window.__lastUserAction = Date.now();
			try { localStorage.setItem('lastActiveInventoryTab', id); } catch (e) {}
			try {
				// Activate tabs on the container that was actually clicked
				const containerEl = t.closest('.char-dashboard') || document.querySelector('.char-dashboard');
				if (!containerEl) return;
				const localButtons = containerEl.querySelectorAll('.tab-bar .tab');
				const localPanels = containerEl.querySelectorAll('.tab-content');
				localButtons.forEach(b => b.classList.remove('active'));
				localPanels.forEach(p => p.classList.remove('active'));
				t.classList.add('active');
				const targetId = t.dataset.tab;
				const panel = containerEl.querySelector(`#${targetId}`);
				if (panel) panel.classList.add('active');

				// Diagnostics: show which '#inventory' nodes exist in document and which was activated
				try {
					// diagnostics suppressed
				} catch (dx) { console.warn('Diagnostics failed', dx); }

			} catch (e) { console.warn('Delegated activation failed', e); }
		});
	}
} catch (e) {}

// Expose setActiveTab for manual testing from the console
try { window.setActiveTab = setActiveTab; } catch (e) {}

// Reapply the saved tab after a short delay to avoid timing races with async renders
setTimeout(() => {
	try {
		// Don't reapply if the user interacted recently
		const lastAction = window.__lastUserAction || 0;
		if (Date.now() - lastAction < 500) {
			return;
		}
		const savedLater = localStorage.getItem("lastActiveInventoryTab") || saved;
		if (savedLater && tabContainer.querySelector(`#${savedLater}`)) {
			setActiveTab(savedLater);
		} else {
			setActiveTab(tabButtons[0].id);
		}
	} catch (e) {
		console.warn("Reapply saved tab failed:", e);
	}
}, 300);

// =====================
// Keyboard Navigation
// =====================
document.addEventListener("keydown", (e) => {
	if (!e.ctrlKey || (e.key !== "ArrowLeft" && e.key !== "ArrowRight")) return;
	const activeTab = tabContainer.querySelector(".tab-bar .tab.active");
	if (!activeTab) return;
	e.preventDefault();
	const tabsArray = Array.from(tabButtons);
	const currentIndex = tabsArray.indexOf(activeTab);
	let newIndex = currentIndex;
	if (e.key === "ArrowLeft") {
		newIndex = (currentIndex - 1 + tabsArray.length) % tabsArray.length;
	}	 else if (e.key === "ArrowRight") {
		newIndex = (currentIndex + 1) % tabsArray.length;
	}
	setActiveTab(tabsArray[newIndex].id);
	localStorage.setItem("lastActiveInventoryTab", tabsArray[newIndex].id);
});




// ======================================================================================
// ============================================================    Overview Container Tab
// ======================================================================================
function rebuildOverview() {
	if (startup.initializing) return;
	window.__char_rebuildHandlers?.[__char_file_key]?.rebuildOverview?.();
}
function renderOverviewTab() {
	const c = window.getLiveCharacter();
	const conditions = getEffectiveConditions();
	try {
		console.log("Rendering Overview Tab for character:", c.name || "(Unnamed)");
		// Rendering Overview (diagnostics suppressed)
        // === Level-based Proficiency Bonus ===
		const profs = c.Proficiencies ?? {};
		let rawBonus = c.Stat_Bonus ?? {};
		
		// Dataview sometimes returns strings for nested YAML — parse if needed
		if (typeof rawBonus === "string") {
		  try {
		    rawBonus = JSON.parse(rawBonus);
		  } catch {
		    const yaml = rawBonus.split("\n").filter(Boolean);
		    const obj = {};
		    let currentKey = null;
		    for (const line of yaml) {
		      if (!line.startsWith("  ")) {
		        currentKey = line.split(":")[0].trim();
		        obj[currentKey] = {};
		      } else if (currentKey) {
		        const [k, v] = line.trim().split(":").map(s => s.trim());
		        obj[currentKey][k] = isNaN(v) ? v : Number(v);
		      }
		    }
		    rawBonus = obj;
		  }
		}
		if (typeof rawBonus !== "object" || Array.isArray(rawBonus)) rawBonus = {};
		
		// Helper: Ability Modifier
		function mod(score) {
		  return Math.floor((score - 10) / 2);
		}
		
		// Dynamic variables dictionary
		const vars = {
		  STR: Number(c.STR ?? 10),
		  DEX: Number(c.DEX ?? 10),
		  CON: Number(c.CON ?? 10),
		  INT: Number(c.INT ?? 10),
		  WIS: Number(c.WIS ?? 10),
		  CHA: Number(c.CHA ?? 10),
		  STR_MOD: mod(Number(c.STR ?? 10)),
		  DEX_MOD: mod(Number(c.DEX ?? 10)),
		  CON_MOD: mod(Number(c.CON ?? 10)),
		  INT_MOD: mod(Number(c.INT ?? 10)),
		  WIS_MOD: mod(Number(c.WIS ?? 10)),
		  CHA_MOD: mod(Number(c.CHA ?? 10)),
		  PROF: pb
		};
		
		// Resolve dynamic expressions
		function resolveBonus(value) {
		  if (typeof value === "number") return value;
		  if (!value) return 0;
		  try {
		    return Function(...Object.keys(vars), `return ${value}`)(...Object.values(vars));
		  } catch {
		    console.warn("Failed to resolve dynamic bonus:", value);
		    return 0;
		  }
		}
		
		// Normalize bonuses
		const statBonus = {};
		const bonusSources = {};
		for (const [key, val] of Object.entries(rawBonus)) {
		  if (typeof val === "number") statBonus[key] = val;
		  else if (typeof val === "object") {
		    const dynamicVal = resolveBonus(val.value);
		    statBonus[key] = dynamicVal;
		    bonusSources[key] = val.source ?? "";
		  } else if (typeof val === "string") statBonus[key] = resolveBonus(val);
		  else statBonus[key] = 0;
		}
		
		// Ability Scores
		const stats = [
		  { name: "STR", value: vars.STR },
		  { name: "DEX", value: vars.DEX },
		  { name: "CON", value: vars.CON },
		  { name: "INT", value: vars.INT },
		  { name: "WIS", value: vars.WIS },
		  { name: "CHA", value: vars.CHA }
		];
		
		// Skills
		const skillAbilities = {
		  "Acrobatics": "DEX",
		  "Animal Handling": "WIS",
		  "Arcana": "INT",
		  "Athletics": "STR",
		  "Deception": "CHA",
		  "History": "INT",
		  "Insight": "WIS",
		  "Intimidation": "CHA",
		  "Investigation": "INT",
		  "Medicine": "WIS",
		  "Nature": "INT",
		  "Perception": "WIS",
		  "Performance": "CHA",
		  "Persuasion": "CHA",
		  "Religion": "INT",
		  "Sleight of Hand": "DEX",
		  "Stealth": "DEX",
		  "Survival": "WIS"
		};
		
		// Derived Stats
		let baseAC = Number(c.Base_AC ?? 10);
		if (conditions.mage_armor) baseAC = 13;
		const spellAbility = c.Spellcasting_Ability;
		const spellAbilityScore = vars[spellAbility];
		const spellMod = mod(spellAbilityScore);
		const initiative = vars.DEX_MOD + (statBonus.Initiative ?? 0);
		const armorClass = baseAC + vars.DEX_MOD + (statBonus.Armor_Class ?? 0);
		const spellSaveDC = 8 + pb + spellMod + (statBonus.Spell_Save_DC ?? 0);
		const spellAttack = pb + spellMod + (statBonus.Spell_Attack ?? 0);
		const passivePerception = 10 + vars.WIS_MOD + (pb * (profs.Perception ?? 0)) + (statBonus.Perception ?? 0);
		const speedDisplay = (c.speed ?? 30) + (statBonus.Speed ?? 0);
		
		// === Render Statblock ===
		let charStatHtml = `<div class="character-stats-container">`;
		
		// Left column: Ability Scores
		charStatHtml += `<div class="ability-grid">`;
		for (let s of stats) {
		  const totalScore = s.value + (statBonus[s.name] ?? 0);
		  const modDisplay = mod(totalScore);
		  const profLevel = profs[`${s.name}_SAVE`] ?? 0;
		  const saveTotal = modDisplay + (pb * profLevel);
		  const saveClass = profLevel === 2 ? "save-expertise" : (profLevel === 1 ? "save-proficient" : "");
		  const bonusBadge = (statBonus[s.name] ?? 0) !== 0 ? `<div class="ability-bonus">${statBonus[s.name] >= 0 ? '+' + statBonus[s.name] : statBonus[s.name]}</div>` : "";
		
		  charStatHtml += `<div class="ability-box">
		    <div class="ability-name">${s.name}</div>
		    <div class="ability-score">${totalScore}${bonusBadge}</div>
		    <div class="ability-mod">Modifier: ${modDisplay >=0 ? '+' + modDisplay : modDisplay}</div>
		    <div class="saving-throw ${saveClass}">Save ${saveTotal >= 0 ? '+' + saveTotal : saveTotal}</div>
		  </div>`;
		}
		charStatHtml += `</div>`;
		
		// Middle column: Skills
		charStatHtml += `<div class="skills-box"><div class="skills-header">Skill Proficiencies</div><div class="skills-list">`;
		for (let [skill, ability] of Object.entries(skillAbilities)) {
		  const baseScore = vars[ability];
		  const abilityBonus = statBonus[ability] ?? 0;
		  const abilityMod = mod(baseScore + abilityBonus);
		  const profLevel = profs[skill] ?? 0;
		  const skillBonus = statBonus[skill] ?? 0;
		  const totalBonus = abilityMod + pb * profLevel + skillBonus;
		  const displayBonus = totalBonus >= 0 ? `+${totalBonus}` : totalBonus;
		  const profClass =
		    profLevel === 2 ? "skill-expertise" :
		    profLevel === 1 ? "skill-proficient" :
		    "skill-normal";
		
		  charStatHtml += `<div class="skill-line ${profClass}">
		      <span class="skill-ability">${ability}</span>
		      <span class="skill-name">${skill}</span>
		      <span class="skill-bonus">${displayBonus}</span>
		    </div>`;
		}
		charStatHtml += `<div class="pb-box">Proficiency Bonus: +${pb}</div></div></div>`;
		
		// Right column: Spell/Derived Stats
		charStatHtml += `<div class="spell-grid">`;
		const spellStats = [
		  ["Initiative", initiative >=0 ? '+'+initiative : initiative],
		  ["Armor Class", armorClass],
		  ["Spell Save DC", spellSaveDC],
		  ["Spell Attack", spellAttack >=0 ? '+'+spellAttack : spellAttack],
		  ["Passive Perception", passivePerception],
		  ["Speed", `${speedDisplay} ft`]
		];
		for (let [name, value] of spellStats) {
		  charStatHtml += `<div class="spell-box"><div class="spell-name">${name}</div><div class="spell-value">${value}</div></div>`;
		}
		charStatHtml += `</div>`;
		
		
		
		// close character-stats-container BEFORE the bonus table
		charStatHtml += `</div>`;
		
		// Active Bonuses Table
		if (Object.keys(rawBonus).length > 0) {
		  charStatHtml += `
		    <div class="bonus-table">
		      <div class="bonus-header">Active Bonuses</div>
		      <table>
		        <thead>
		          <tr><th>Stat</th><th>Bonus</th><th>Source</th></tr>
		        </thead>
		        <tbody>
		  `;
		
		  const sortedBonuses = Object.entries(rawBonus).sort(([a],[b]) => a.localeCompare(b));
		
		  for (const [key, value] of sortedBonuses) {
		    const displayVal = typeof value === "object" ? resolveBonus(value.value) : resolveBonus(value);
		    const source     = typeof value === "object" ? value.source ?? "" : bonusSources[key] ?? "";
		
		    charStatHtml += `
		        <tr>
		          <td>${key.replaceAll("_"," ")}</td>
		          <td>${displayVal >= 0 ? '+'+displayVal : displayVal}</td>
		          <td>${source}</td>
		        </tr>`;
		  }
		
		  charStatHtml += `
		        </tbody>
		      </table>
		    </div>
		  `;
		}

		console.log(
			"AC debug:",
			"baseAC =", baseAC,
			"DEX_MOD =", vars.DEX_MOD,
			"final AC =", armorClass
		);
		
		
		// === Replace Overview Stat Grid with Full Character Stat Block ===
		const overviewPanel = container.querySelector("#overview .panel");
		let statsRoot = overviewPanel.querySelector(".character-stats-root");
		if (!statsRoot) {
		statsRoot = document.createElement("div");
		statsRoot.className = "character-stats-root";
		overviewPanel.appendChild(statsRoot);
		}
		statsRoot.innerHTML = charStatHtml;

		// Remove the old stat-grid placeholder
		const oldStatGrid = overviewPanel.querySelector(".stat-grid");
		if (oldStatGrid) oldStatGrid.remove();


		// Ensure handler registry exists
		window.__char_rebuildHandlers ??= {};
		window.__char_rebuildHandlers[__char_file_key] ??= {};

		// Expose Overview rebuild handler
		window.__char_rebuildHandlers[__char_file_key].rebuildOverview = function () {
			try {
				// Guard: only rebuild if Overview tab exists
				const overviewPanel = container?.querySelector?.("#overview .panel");
				if (!overviewPanel) return;

				renderOverviewTab();
				console.log("Overview rebuilt");
			} catch (e) {
				console.warn("Overview rebuild failed", e);
			}
		};
		
		
    } catch (e) {
        console.error("Overview Tab Failed:", e);
        dv.paragraph("⚠ Overview failed to load. Check console.");
    }
};

renderOverviewTab(); // initial render


// ======================================================================================
//================================================================   Spells Container Tab
// ======================================================================================

 (async function renderSpellsTab() {
	try {

		// ---------- SPELL TAB PANEL ----------
		const spellsPanel = container.querySelector("#spells .panel");
		if (!spellsPanel) {
			console.error("Spell panel not found!");
			return;
		}
		// no spellcasting ability
		if (!c.Spellcasting_Ability){
			spellsPanel.createEl("div", {
				text: "This character does not have spellcasting abilities.",
				cls: "no-spellcasting-ability"
			});
			return;
		}

		// Wild Shape Card Selection
		console.log("Rendering: Wild Card Selection");

		const page = dv.current();
		const wildShapeWrapper = spellsPanel.createEl("div", {
			cls: "wild-shape-wrapper"
		});

		if (hasDruid && druidLevel >= 2) {
			const loading = wildShapeWrapper.createEl("div", {
				text: "🐾 Loading Wild Shape options...",
				cls: "wild-shape-loading"
			});

			setTimeout(() => {
				try {
					loading.remove();
					renderWildShapeHelper(wildShapeWrapper, page);
				} catch (err) {
					console.error("Wild Shape load failed:", err);
					loading.setText("⚠️ Failed to load Wild Shape data.");
				}
			}, 0);
		}
		
		function renderWildShapeHelper(wildShapeWrapper, page) {

			function getWildShapeRules(druidLevel) {
				if (hasCircleOfTheMoon) {
					return {
						known: druidLevel >= 8 ? 8 : druidLevel >= 4 ? 6 : 4,
						maxCR: Math.floor(druidLevel / 3),
						allowFly: druidLevel >= 8
					};
				}

				if (druidLevel >= 8) return { known: 8, maxCR: 1, allowFly: true };
				if (druidLevel >= 4) return { known: 6, maxCR: 0.5, allowFly: false };
				if (druidLevel >= 2) return { known: 4, maxCR: 0.25, allowFly: false };
				return { known: 0, maxCR: 0, allowFly: false };
			}

			function isExcludedWildShape(name) {
				if (!name) return true;
				const n = name.toLowerCase();
				return n.startsWith("beast of the") || // exclude spell summoned versions
					n.startsWith("bestial spirit") || // exclude spell summoned versions
					n.startsWith("giant-insect") || // prefer monster manual versions
					n.startsWith("giant insect") || // prefer monster manual versions
					n.includes("swarm of"); // exclude swarms
			}

			function formatCR(cr) {
				if (!Number.isFinite(cr)) return "0";
				if (cr === 0) return "0";

				const fractions = {
					0.125: "1/8",
					0.25: "1/4",
					0.5: "1/2"
				};

				return fractions[cr] ?? String(cr);
			}

			function hasBurrowSpeed(beast) {
				if (!beast.speed) return false;
				return beast.speed.toLowerCase().includes("burrow");
			}

			function hasClimbSpeed(beast) {
				if (!beast.speed) return false;
				return beast.speed.toLowerCase().includes("climb");
			}

			function hasFlySpeed(beast) {
				if (!beast.speed) return false;
				return beast.speed.toLowerCase().includes("fly");
			}

			function hasSwimSpeed(beast) {
				if (!beast.speed) return false;
				return beast.speed.toLowerCase().includes("swim");
			}


			const rules = getWildShapeRules(druidLevel);
			

			const beasts = dv.pages(`"${WSHAPE_FOLDER}"`)
				.where(p => p.tags?.some(t => t.includes("monster/type/beast")))
				.map(p => {
					const crTag = p.tags.find(t => t.includes("monster/cr/"));
					let cr = 0;

					if (crTag) {
						const raw = crTag.split("/").pop();
						if (raw.includes("-")) {
							const [num, den] = raw.split("-").map(Number);
							cr = num / den;
						} else {
							cr = Number(raw);
						}
					}

					if (!Number.isFinite(cr)) cr = 0;

					const ws = p.wildshape ?? {};
					const name = p.aliases?.[0] ?? p.file.name.replace(/-x\w+$/, "");

					return {
						name,
						page: p,
						cr,
						ac: ws.ac ?? null,
						speed: ws.speed ?? "",
						image: ws.image ?? null,
						hasFly: ws.fly === true
					};
				})
				.where(b =>
					!isExcludedWildShape(b.name) &&
					b.cr <= rules.maxCR &&
					(rules.allowFly || !b.hasFly)
				)
				.sort(b => b.name);

			const file = app.workspace.getActiveFile();
			// Use in-memory pending state for wild-shape options
			pendingState.wildShapeOptions = pendingState.wildShapeOptions || structuredClone(Array.isArray(page["wild-shape-options"]) ? page["wild-shape-options"] : []);

			function renderWildShapeUI() {
				wildShapeWrapper.empty();
				const grid = wildShapeWrapper.createEl("div", {
					cls: "wild-shape-card-grid"
				});

				for (let i = 0; i < rules.known; i++) {
					renderWildShapeCard(grid, i);
				}
			}

			// Expose an imperative re-render for rest handlers or other external triggers
			try {
				window.__char_rebuildHandlers[__char_file_key].renderWildShapeUI = function() {
					try { renderWildShapeUI(); } catch (e) { console.error('renderWildShapeUI failed:', e); }
				};
			} catch (e) {}

			function renderWildShapeCard(parent, index) {
				const card = parent.createEl("div", { cls: "wild-shape-card" });
				const selected = (pendingState.wildShapeOptions || [])[index];

				// =====================================================
				// EMPTY CARD
				// =====================================================
				if (!selected) {
					card.createEl("h4", { text: `🐾 Wild Shape Slot ${index + 1}` });

					let activeFilter = "all";
					const filterButtons = {};

					const FILTERS = [
						{ key: "all", icon: "🐾", label: "All Beasts", test: () => true },
						{ key: "climb", icon: "🪜", label: "Filter for Beasts with a Climb Speed", test: hasClimbSpeed },
						{ key: "swim", icon: "🏊", label: "Filter for Beasts with a Swim Speed", test: hasSwimSpeed },
						{ key: "burrow", icon: "🪏", label: "Filter for Beasts with a Burrow Speed", test: hasBurrowSpeed },
						{ key: "fly", icon: "🦇", label: "Filter for Beasts with a Fly Speed", test: hasFlySpeed }
					];

					// Filter buttons
					const filterRow = card.createEl("div", {
						cls: "wild-shape-filter-row"
					});

					FILTERS.forEach(f => {
						const btn = filterRow.createEl("button", {
							text: f.icon,
							cls: "wild-shape-filter-btn",
							attr: { title: f.label }
						});

						filterButtons[f.key] = btn;

						btn.addEventListener("click", () => {
							activeFilter = activeFilter === f.key ? "all" : f.key;
							updateFilterUI();
							renderSelectOptions();
						});
					});

					// Dropdown
					const select = card.createEl("select", {
						cls: "wild-shape-select"
					});


					select.addEventListener("change", async e => {
						if (!e.target.value) return;

						const current = pendingState.wildShapeOptions || [];
						const next = [...current];
						next[index] = e.target.value;

						// Update in-memory and mark dirty; UI will re-render from pendingState
						pendingState.wildShapeOptions = next;
						markDirty();

						wildShapeWrapper.empty();
						renderWildShapeUI();
					});

					function updateFilterUI() {
						Object.entries(filterButtons).forEach(([key, btn]) => {
							btn.classList.toggle(
								"is-active",
								key === activeFilter && activeFilter !== "all"
							);
						});
					}

					function renderSelectOptions() {
						select.innerHTML = "";
						select.createEl("option", {
							text: "--- Select Beast ---",
							value: ""
						});

						const filter = FILTERS.find(f => f.key === activeFilter);
						const filtered = beasts.filter(b => filter.test(b));

						filtered.forEach(b => {
							select.createEl("option", {
								text: `${b.name} (CR ${formatCR(b.cr)})`,
								value: b.name
							});
						});
					}

					updateFilterUI();
					renderSelectOptions();
					return;
				}

				// =====================================================
				// POPULATED CARD
				// =====================================================
				const beast = beasts.find(b => b.name === selected);
				if (!beast) return;

				card.createEl("h4", { text: `🐾 ${beast.name}` });

				if (beast.image) {
					const imgPath = app.vault.getAbstractFileByPath(beast.image);
					if (imgPath) {
						card.createEl("img", {
							attr: { src: app.vault.getResourcePath(imgPath) },
							cls: "wild-shape-token"
						});
					}
				}

				const stats = card.createEl("div", { cls: "wild-shape-stats" });

				let ac = beast.ac;
				if (hasCircleOfTheMoon && WIS_MOD) {
					ac = Math.max(ac ?? 0, 13 + WIS_MOD);
				}

				const acBlock = stats.createEl("div", { cls: "wild-shape-stat-block" });
				acBlock.createEl("span", { text: "🛡AC", cls: "wild-shape-stat-label" });
				acBlock.createEl("span", { text: ac, cls: "wild-shape-stat-value" });

				const speedBlock = stats.createEl("div", { cls: "wild-shape-speed" });
				speedBlock.createEl("span", {
					text: "🐾Speed",
					cls: "wild-shape-speed-label"
				});

				(beast.speed || "")
					.split(",")
					.map(s => s.trim())
					.filter(Boolean)
					.forEach(part => {
						speedBlock.createEl("span", {
							text: part,
							cls: "wild-shape-speed-entry"
						});
					});

				const crBlock = stats.createEl("div", { cls: "wild-shape-stat-block" });
				crBlock.createEl("span", { text: "💀CR", cls: "wild-shape-stat-label" });
				crBlock.createEl("span", {
					text: formatCR(beast.cr),
					cls: "wild-shape-stat-value"
				});

				const footer = card.createEl("div", { cls: "wild-shape-footer" });
				footer.createEl("a", {
					text: "Open Stat Block",
					cls: "internal-link",
					href: beast.page.file.path + "#Animals"
				});

				const clear = footer.createEl("button", { text: "Clear" });
				clear.addEventListener("click", async () => {
					const current = pendingState.wildShapeOptions || [];
					const next = [...current];
					next[index] = null;

					// Update in-memory and mark dirty
					pendingState.wildShapeOptions = next.filter(Boolean);
					markDirty();

					wildShapeWrapper.empty();
					renderWildShapeUI();
				});
			}			
			renderWildShapeUI();
		}

		// ================================
		// Eldirtch Invocations
		// ================================
		if(hasWarlock){
			const invocationOptions = ["Agonizing Blast", "Armor of Shadows", "Ascendant Step",
				"Devil's Sight", "Devouring Blade", "Eldritch Mind", "Eldritch Smite", "Eldritch Spear",
				"Fiendish Vigor", "Gaze of Two Minds", "Gift of the Depths", "Gift of the Protectors",
				"Investment of the Chain Master", "Lessions of the First Ones", "Lifedrinker",
				"Mask of Many Faces", "Master of Myriad Forms", "Misty Visions", "One with Shadows",
				"Otherworldly Leap", "Pacto of the Blade", "Pacto fo the Chain", "Pact of the Tome",
				"Repelling Blast", "Thirsting Blade", "Visions of Distant Realms", "Whispers of the Grave",
				"Witch Sight"
			];

			function invocationFromWarlockLevel() {
				if (warlockLevel >= 18) {return 10};
				if (warlockLevel >= 15) {return 9};
				if (warlockLevel >= 12) {return 8};
				if (warlockLevel >= 9) {return 7};
				if (warlockLevel >= 7) {return 6};
				if (warlockLevel >= 5) {return 5};
				if (warlockLevel >= 2) {return 3};
				return 1;
			}

			const maxInvocations = invocationFromWarlockLevel();

			pendingState.Eldritch_Invocations ??=
				structuredClone(c.Eldritch_Invocations ?? []);

			const invocationWrapper = spellsPanel.createEl("div", {
				cls: "eldritch-invocations-wrapper"
			});

			const heading = invocationWrapper.createEl("h4", {
				text: "Eldritch Invocations",
				cls: "phb-heading"
			});

			const subText = invocationWrapper.createEl("div", {
				text: `Choose up to ${maxInvocations}`,
				cls: "invocation-limit"
			});

			const list = invocationWrapper.createEl("div", {
				cls: "invocation-list"
			});

			function updateLimitState() {
				const selectedCount = pendingState.Eldritch_Invocations.length;
				list.querySelectorAll("input[type='checkbox']").forEach(cb => {
					if (!cb.checked) {
						cb.disabled = selectedCount >= maxInvocations;
					}
				});
			}

			invocationOptions.forEach(name => {
				const row = list.createEl("label", {
					cls: "invocation-item"
				});

				const checkbox = row.createEl("input", {
					type: "checkbox"
				});

				checkbox.checked = pendingState.Eldritch_Invocations.includes(name);

				checkbox.addEventListener("change", () => {
					if (checkbox.checked) {
						if (pendingState.Eldritch_Invocations.length >= maxInvocations) {
							checkbox.checked = false;
							return;
						}
						pendingState.Eldritch_Invocations.push(name);
						markDirty();
						refreshResourceToggles
						refreshSpellSlotToggles
						syncAfterConditionChange
					} else {
						pendingState.Eldritch_Invocations =
							pendingState.Eldritch_Invocations.filter(i => i !== name);
					}

					updateLimitState();
				});

				row.createEl("span", { text: name });
			});

			updateLimitState();
		}
		
		


		// ======================================================================================
		// Spell Slots
		// ======================================================================================
		pendingState.spell_slot ??= structuredClone(c.spell_slot ?? {});
        const char = dv.current() ?? {};
		const preparedSpells = (char.Prepared_spells ?? []).map(s => String(s).trim()).filter(Boolean);
		const spellAttackExtra = Number(char.Stat_Bonus?.Spell_Attack?.value ?? 0);
		
		
		// ---------- SPELL TAB PANEL ----------
		//const spellsPanel = container.querySelector("#spells .panel");
		if (!spellsPanel) return console.error("Spell panel not found!");
		
		// ---------- SPELL SLOTS ----------
		const spellSlotsDiv = document.createElement("div");
		spellSlotsDiv.classList.add("spell-slots");
		spellSlotsDiv.style.marginBottom = "8px";
		
		
		// ---------- SPELL SLOTS ----------
		const spellSlotsWrapper = document.createElement("div");
		spellSlotsWrapper.classList.add("spell-slots-wrapper");
		
		const spellSlotsHeading = document.createElement("h4");
		spellSlotsHeading.textContent = "Spell Slots";
		spellSlotsHeading.classList.add("phb-heading");
		spellSlotsWrapper.appendChild(spellSlotsHeading);
		
		
		
		// Insert into panel
		spellSlotsWrapper.appendChild(spellSlotsDiv);

		// THEN insert wild shape above it
		if (wildShapeWrapper) {
			spellSlotsWrapper.insertBefore(wildShapeWrapper, spellSlotsHeading);
		}
				
		function addSpellLine({ prefix, label, count = 1, cssClass = "spell-toggle" }) {
			const line = spellSlotsDiv.createEl("div", { cls: "spell-line" });
			const toggleRow = line.createEl("span", { cls: "spell-toggles" });

			pendingState.spell_slot ??= {};

			for (let i = 1; i <= count; i++) {
				const key = `${prefix}${count > 1 ? i : ""}`;
				const enabled = !!pendingState.spell_slot[key];

				// Meta Bind–style wrapper
				const wrapper = toggleRow.createEl("div", {
					cls: `mb-input-wrapper ${cssClass}`
				});

				wrapper.dataset.namespace = "spell_slot";
				wrapper.dataset.key = key;

				// Checkbox container (this is what your CSS targets)
				const box = wrapper.createEl("div", {
					cls: "checkbox-container",
					attr: {
						role: "checkbox",
						"aria-checked": enabled ? "true" : "false"
					}
				});

				if (enabled) box.classList.add("is-enabled");

				// Memory-only toggle behavior
				box.addEventListener("click", e => {
					e.preventDefault();
					e.stopPropagation();

					const next = !pendingState.spell_slot[key];
					pendingState.spell_slot[key] = next;

					box.classList.toggle("is-enabled", next);
					box.setAttribute("aria-checked", next ? "true" : "false");

					markDirty();
					renderOverviewTab();
				});
			}

			if (label) {
				line.createEl("span", {
					cls: "spell-label",
					text: label
				});
			}
		}

		
		
		
			
		//=================================== Full / Half / Third Casters
		if (
			hasBard || hasCleric || hasDruid || hasSorcerer || hasWizard ||
			hasPaladin || hasRanger || hasEldritchKnight || hasArcaneTrickster
		) {
			const fullCasterSlotsTable = {
				1:  [2,0,0,0,0,0,0,0,0],
				2:  [3,0,0,0,0,0,0,0,0],
				3:  [4,2,0,0,0,0,0,0,0],
				4:  [4,3,0,0,0,0,0,0,0],
				5:  [4,3,2,0,0,0,0,0,0],
				6:  [4,3,3,0,0,0,0,0,0],
				7:  [4,3,3,1,0,0,0,0,0],
				8:  [4,3,3,2,0,0,0,0,0],
				9:  [4,3,3,3,1,0,0,0,0],
				10: [4,3,3,3,2,0,0,0,0],
				11: [4,3,3,3,2,1,0,0,0],
				12: [4,3,3,3,2,1,0,0,0],
				13: [4,3,3,3,2,1,1,0,0],
				14: [4,3,3,3,2,1,1,0,0],
				15: [4,3,3,3,2,1,1,1,0],
				16: [4,3,3,3,2,1,1,1,0],
				17: [4,3,3,3,2,1,1,1,1],
				18: [4,3,3,3,3,1,1,1,1],
				19: [4,3,3,3,3,2,1,1,1],
				20: [4,3,3,3,3,2,2,1,1]
			};

			const spellcasterLevel =
				bardLevel +
				clericLevel +
				druidLevel +
				sorcererLevel +
				wizardLevel +
				Math.ceil(paladinLevel / 2) +
				Math.ceil(rangerLevel / 2) +
				Math.ceil(eldritchKnightLevel / 3) +
				Math.ceil(arcaneTricksterLevel / 3);

			const slots = fullCasterSlotsTable[spellcasterLevel] ?? [];

			for (let lvl = 1; lvl <= 9; lvl++) {
				const count = slots[lvl - 1];
				if (!count) continue;

				addSpellLine({
					prefix: `level_${lvl}_`,
					label: `Level ${lvl}`,
					count,
					cssClass: "spell-toggle"
				});
			}
		}


		//=================================== Pact Magic + Mystic Arcanum (Warlock)
		if (hasWarlock) {
			let maxSlots = 1;
			if (warlockLevel >= 2) maxSlots = 2;
			if (warlockLevel >= 11) maxSlots = 3;
			if (warlockLevel >= 17) maxSlots = 4;

			let mLevel = 1;
			if (warlockLevel >= 2) mLevel = 2;
			if (warlockLevel >= 5) mLevel = 3;
			if (warlockLevel >= 7) mLevel = 4;
			if (warlockLevel >= 9) mLevel = 5;

			addSpellLine({
				label: `Pact Magic Spell Slot(s) – Level ${mLevel}`,
				prefix: "pact",
				count: maxSlots,
				cssClass: "pact-toggle"
			});

			if (warlockLevel >= 11)
				addSpellLine({ label: "Mystic Arcanum – Level 6", prefix: "arcanum1", cssClass: "pact-toggle" });

			if (warlockLevel >= 13)
				addSpellLine({ label: "Mystic Arcanum – Level 7", prefix: "arcanum2", cssClass: "pact-toggle" });

			if (warlockLevel >= 15)
				addSpellLine({ label: "Mystic Arcanum – Level 8", prefix: "arcanum3", cssClass: "pact-toggle" });

			if (warlockLevel >= 17)
				addSpellLine({ label: "Mystic Arcanum – Level 9", prefix: "arcanum4", cssClass: "pact-toggle" });
		}


		//========================== Species Based Spell Slots
		const elfSpellTable = {
		    Drow: [
		        { level: 3, name: "Faerie Fire", key: "elf_faerie_fire" },
		        { level: 5, name: "Darkness", key: "elf_darkness" }
		    ],
		    "High Elf": [
		        { level: 3, name: "Detect Magic", key: "elf_detect_magic" },
		        { level: 5, name: "Misty Step", key: "elf_misty_step" }
		    ],
		    "Wood Elf": [
		        { level: 3, name: "Longstrider", key: "elf_longstrider" },
		        { level: 5, name: "Pass Without Trace", key: "elf_pass_without_trace" }
		    ]
		};
		
		let elfType = null;
		
		if (c.species === "Elf") {
		    if (c.species_traits.includes("Drow")) elfType = "Drow";
		    if (c.species_traits.includes("High Elf")) elfType = "High Elf";
		    if (c.species_traits.includes("Wood Elf")) elfType = "Wood Elf";
		}
		
		if (elfType && elfSpellTable[elfType]) {
		    elfSpellTable[elfType].forEach(spell => {
			if (Level >= spell.level) {
				addSpellLine({
					label: spell.name,
					prefix: spell.key,
					cssClass: "spell-toggle"
				});
			}
		});
		}
		
		if (c.species === "Gnome") {
			if (c.species_traits.includes("Forest Gnome")){
					addSpellLine({
					label: "Speak with Animals",
					prefix: "forest_gnome_speak_with_animals",
					cssClass: "spell-toggle"
				});
			}
		}
		
		
		if (c.species === "Goliath" && c.species_traits.includes("Cloud Giant")) {
			addSpellLine({
				label: "Cloud's Jaunt (Misty Step)",
				prefix: "misty_step",
				count: pb,
				cssClass: "spell-toggle"
			});
		} 
		
		const tieflingSpellTable = {
		    Abyssal: [
		        { level: 3, name: "Ray of Sickness", key: "tiefling_ray_of_sickness" },
		        { level: 5, name: "Hold Person", key: "tiefling_hold_person" }
		    ],
		    "Chthonic": [
		        { level: 3, name: "False Life", key: "tiefling_false_life" },
		        { level: 5, name: "Ray of Enfeeblement", key: "tiefling_ray_of_enfeeblement" }
		    ],
		    "Infernal": [
		        { level: 3, name: "Hellish Rebuke", key: "tiefling_hellish_rebuke" },
		        { level: 5, name: "Darkness", key: "tiefling_darkness" }
		    ]
		};
		
		let tieflingType = null;
		
		if (c.species === "Tiefling") {
		    if (c.species_traits.includes("Abyssal")) tieflingType = "Abyssal";
		    if (c.species_traits.includes("Chthonic")) tieflingType = "Chthonic";
		    if (c.species_traits.includes("Infernal")) tieflingType = "Infernal";
		}
		
		if (tieflingType && tieflingSpellTable[tieflingType]) {
		    tieflingSpellTable[tieflingType].forEach(spell => {
		        if (Level >= spell.level) {
		            if (Level >= spell.level) {
						addSpellLine({
							label: spell.name,
							prefix: spell.key,
							cssClass: "spell-toggle"
						});
					}
		        }
		    });
		}

		//======================================================= Class and Feat Based Spell Slots

		//==================================== Favored Enemy (Hunter's Mark)
		if (hasRanger) {
			function favEnemyFromLevel(lvl) {
			    if (lvl >= 17) return 6;
			    if (lvl >= 13) return 5;
			    if (lvl >= 9) return 4;
			    if (lvl >= 5) return 3;
			    return 2;
			}
			addSpellLine({
				label: "Favored Enemy (Hunter's Mark)",
				prefix: "hunters_mark",
				count: favEnemyFromLevel(rangerLevel),
				cssClass: "spell-toggle"
			});
		}
		

		//==================================== Fey Touched
		const ftObj = feats.find(f => typeof f === "object" && f["Fey Touched"]);

		if (ftObj) {
		    const ft = ftObj["Fey Touched"];
		    const spellKey = ft.spell.replace(/\s+/g, "_").toLowerCase();  // safe key
		
		    addSpellLine({
				label: `Fey Touched – ${ft.spell} – Level 1`,
				prefix: `fey_touched_${spellKey}`,
				cssClass: "spell-toggle"
			});

			addSpellLine({
				label: "Fey Touched – Misty Step – Level 2",
				prefix: "fey_touched_misty_step",
				cssClass: "spell-toggle"
			});
		}
		
		//=================================== Magic Initiate
		const miObj = feats.find(f => typeof f === "object" && f["Magic Initiate"]);

		if (miObj) {
			const mi = miObj["Magic Initiate"];

			addSpellLine({
				prefix: mi.class.replace(/\s+/g, "_").toLowerCase(),
				label: `Magic Initiate (${mi.class}) – ${mi.spell}`,
				cssClass: "spell-toggle"
			});
		}

			
		

		//==================================== Shadow Touched
		const stObj = feats.find(f => typeof f === "object" && f["Shadow Touched"]);

		if (stObj) {
		    const st = stObj["Shadow Touched"];
		    const spellKey = st.spell.replace(/\s+/g, "_").toLowerCase();  // safe key
		
			addSpellLine({
				label: `Shadow Touched – ${st.spell} – Level 1`,
				prefix: `shadow_touched_${spellKey}`,
				cssClass: "spell-toggle"
			});

			addSpellLine({
				label: "Shadow Touched – Invisibility – Level 2",
				prefix: "shadow_touched_invisibility",
				cssClass: "spell-toggle"
			});
		}
		
		//=================================== Steps of the Fey (Misty Step) CHA_MOD Times/day
		if (hasWarlock && hasArchfey) {
			 addSpellLine({
				label: `Steps of the Fey (Misty Step)`,
				prefix: "misty_step",
				cssClass: "spell-toggle",
				count: CHA_MOD
			});
		}
		
		const invocations = c.Eldritch_Invocations
		if (hasWarlock && invocations.includes("Gift of the Depths")) {
			addSpellLine({
				label: `Gift of the Deptsh (water_breathing)`,
				prefix: "Water Brathing",
				cssClass: "spell-toggle",
				count: 1
			});
		}		
		
		
		// Render SpellSlotsWrapper
		spellsPanel.prepend(spellSlotsWrapper);
		
		//====================================
		// ---------- CANTRIP TABLE ----------
		//====================================
		const cantripWrapper = document.createElement("div");
		const cantripHeading = document.createElement("h4");
		cantripHeading.textContent = "Damage Cantrips";
		cantripHeading.classList.add("phb-heading");
		cantripWrapper.appendChild(cantripHeading);
		cantripWrapper.classList.add("cantrip-wrapper");
		cantripWrapper.style.marginBottom = "8px";
		
		const slugifyName = name =>
		  String(name)
		    .toLowerCase()
		    .replace(/['"]/g, "")
		    .replace(/\s+/g, "-")
		    .replace(/[^a-z0-9\-]/g, "-")
		    .replace(/-+/g, "-")
		    .replace(/^-|-$/g, "");
		
		const isDamageCantripText = text => {
		  if (!text) return false;
		
		  const attack =
		    /\bmake\b.*\battack\b/i.test(text) ||
		    /\bspell attack\b/i.test(text);
		
		  const dice =
		    /`?\d+d\d+`?/i.test(text);
		
		  const onHit =
		    /\bon a hit\b/i.test(text) ||
		    /\btakes\s+`?\d+d\d+`?\s+[A-Za-z]+\s+damage[.,]?/i.test(text);
		
		  return (attack || onHit) && dice;
		};
		
		const extractDamageDie = text => (text.match(/`?(\d+d\d+)`?/i) ?? [])[1] ?? "";
		const extractDamageType = text => (text.match(/`?\d+d\d+`?\s*([A-Za-z]+)\s+damage/i) ?? [])[1] ?? "";
		
		// ==========================
		// Prepare combined cantrip list
		// Use in-memory pending state for spells so changes survive reruns
		pendingState.Spells = pendingState.Spells || structuredClone(dv.current().Spells ?? {
			Prepared: { Cantrips: [], Spells: [] },
			Always_Prepared: { Cantrips: [], Spells: [] },
			Known: { Cantrips: [], Spells: [] }
		});
		const spellLists = pendingState.Spells;
		// Gather all spell names from all lists
		const allSpells = [
		  ...(spellLists.Prepared?.Cantrips ?? []),
		  ...(spellLists.Prepared?.Spells ?? []),
		  ...(spellLists.Always_Prepared?.Cantrips ?? []),
		  ...(spellLists.Always_Prepared?.Spells ?? []),
		  ...(spellLists.Known?.Cantrips ?? []),
		  ...(spellLists.Known?.Spells ?? [])
		];
		
		// Remove duplicates
		const uniqueSpells = [...new Set(allSpells.map(s => s.trim()))];
		
		// Filter out only cantrips based on spell file frontmatter
		const uniqueCantrips = uniqueSpells.filter(name => {
		  const page = dv.pages(`"${SPELLS_FOLDER}"`)
			  .where(p => p.file?.name === name || (p.aliases ?? []).includes(name))
			  .first();
		  return page?.tags?.includes("ttrpg-cli/spell/level/cantrip");
		});
		
		const extractCantripUpgrade = text => {
		    const match = text.match(/\*\*Cantrip Upgrade\.\*\*([\s\S]*?)(?=\n\*\*|$)/i);
		    if (!match) return "";
		    return match[1].trim().replace(/\n+/g, " ");
		};
		
		// ==========================
		// Build Table
		const cantripTable = document.createElement("table");
		cantripTable.classList.add("dataview", "table-view-table", "damage-cantrip-table");
		cantripTable.style.width = "100%";
		cantripTable.innerHTML = `<thead><tr>
		    <th>Cantrip</th><th>Spell Atk Bonus</th><th>Damage & Type</th><th>Notes</th>
		</tr></thead>`;
		
		const cantripTbody = document.createElement("tbody");
		
		for (const name of uniqueCantrips) {
		    const slug = slugifyName(name);
		    const page = dv.pages(`"${SPELLS_FOLDER}"`).where(p => (p.file?.name ?? "").toLowerCase().startsWith(slug)).first();
		    if (!page) continue;
		
		    let text = "";
		    try { text = await app.vault.cachedRead(app.vault.getAbstractFileByPath(page.file.path)); } catch(e){ continue; }
		    if (!isDamageCantripText(text)) continue;
		
		    const dmgDie = extractDamageDie(text) || "—";
		    const dmgType = extractDamageType(text) || "";
		
		    let notes = "";
		    if (name.toLowerCase() === "eldritch blast") {
		        let beams = 1;
		        if (warlockLevel >= 5) beams = 2;
		        if (warlockLevel >= 11) beams = 3;
		        if (warlockLevel >= 17) beams = 4;
		        notes = `${beams} beam${beams>1?"s":""}`;
		        if ((char.Eldritch_Invocations ?? []).includes("Agonizing Blast")) notes += `, +${CHA_MOD} (Agonizing Blast)`;
		        if ((char.conditions?.concentration_spell ?? "").toLowerCase() === "hex") notes += `, +1d6 (Hex)`;
		    }
		    
		    // Append Cantrip Upgrade text (new)
			const upgradeText = extractCantripUpgrade(text);
			if (upgradeText) {
			    // If Eldritch Blast notes already present → put upgrade on a new line
			    if (notes) {
			        notes += "<br>" + upgradeText.replace(/`([^`]+)`/g, "$1");
			    } else {
			        notes = upgradeText.replace(/`([^`]+)`/g, "$1");
			    }
			}
		    
		    // get spellcasting ability
		    const spellAbility = c.Spellcasting_Ability ?? [];
		    let spellAttackStat = ""
		    if( spellAbility === "CHA" ) {spellAttackStat = CHA_MOD}
		    if( spellAbility === "INT" ) {spellAttackStat = INT_MOD}
		    if( spellAbility === "WIS" ) {spellAttackStat = WIS_MOD}
			if( spellAbility === "" || spellAbility == null ) {spellAttackStat = 0}
		
		    const attackValue = pb + spellAttackStat + spellAttackExtra;
		    const displayAttack = attackValue >= 0 ? `+${attackValue}` : `${attackValue}`;
		
		    const tr = document.createElement("tr");
		
		    const tdName = document.createElement("td");
		    const linkEl = dv.fileLink(page.file.path, false, name);
		    if (linkEl instanceof HTMLElement) tdName.appendChild(linkEl);
		    else tdName.textContent = name;
		    tr.appendChild(tdName);
		
		    const tdAtk = document.createElement("td"); tdAtk.textContent = displayAttack; tr.appendChild(tdAtk);
		    const tdDmg = document.createElement("td"); tdDmg.textContent = dmgType ? `${dmgDie} ${dmgType}` : dmgDie; tr.appendChild(tdDmg);
		    const tdNotes = document.createElement("td"); tdNotes.innerHTML = notes || ""; tr.appendChild(tdNotes);
		
		    cantripTbody.appendChild(tr);
		}
		
		cantripTable.appendChild(cantripTbody);
		
		// Show placeholder if empty
		if (!cantripTbody.children.length) {
		    const row = document.createElement("tr");
		    const c = document.createElement("td"); 
		    c.colSpan=4; 
		    c.innerHTML="<i>No damage cantrips prepared.</i>"; 
		    row.appendChild(c);
		    cantripTbody.appendChild(row);
		}
		
		
		// ===============================================================
		// ========================= SPELL TABLE =========================
		// Update in-memory spell lists (persist to pendingState and mark dirty)
		async function updateSpellLists(spellsObj) {
			// store in-memory so UI can be snappy; commitPendingChanges will persist to frontmatter
			pendingState.Spells = structuredClone(spellsObj);
			markDirty();
			// Refresh Dataview/UI so the script reruns and reads pendingState.Spells
			try { app.commands.executeCommandById("dataview:refresh-views"); } catch {}
		}

		function getPreparedHeaderTitle(spellState) {
			const classes = getClassLevels(dv.current().dndClass, dv.current().Level);

			let totalAllowedCantrips = 0;
			let totalAllowedSpells = 0;

			for (const c of classes) {
				const { allowedCantripCount, allowedSpellCount } =
				getSpellCounts(c.className, c.level);
				totalAllowedCantrips += allowedCantripCount;
				totalAllowedSpells += allowedSpellCount;
			}

			const actualPrepSpells =
				spellState.Prepared?.Spells?.length ?? 0;
			const actualPrepCantrips =
				spellState.Prepared?.Cantrips?.length ?? 0;

			const diffSpellCount = totalAllowedSpells - actualPrepSpells;
			const diffCantripCount = totalAllowedCantrips - actualPrepCantrips;
			

			const missing = [];
			if (diffSpellCount > 0)
				missing.push(`Prepare ${diffSpellCount} more spell${diffSpellCount === 1 ? "" : "s"}`);
			if (diffCantripCount > 0)
				missing.push(`Choose ${diffCantripCount} more cantrip${diffCantripCount === 1 ? "" : "s"}`);

			return missing.length ? missing.join(" / ") : "Prepared Spells";
		}
		
		
		// ========================= LOAD SPELLS =========================
		//const spellLists = dv.current().Spells ?? {};
		//already loaded in cantrip table
		// Standardize structure: all lists use { Cantrips: [], Spells: [] }
		function normalizeList(list) {
		    if (Array.isArray(list)) return { Cantrips: [], Spells: list };
		    return { Cantrips: list.Cantrips ?? [], Spells: list.Spells ?? [] };
		}
		
		const prepared = normalizeList(spellLists.Prepared);
		const always   = normalizeList(spellLists.Always_Prepared);
		const known    = normalizeList(spellLists.Known);
		
		// Load all spell pages
		const spells = dv.pages(`"${SPELLS_FOLDER}"`);
		
		// ========================= HELPERS =========================
		function extractField(text, label) {
		    const regex = new RegExp(`\\*\\*${label}:\\*\\*\\s*([^\\n]+)`, "i");
		    const match = text.match(regex);
		    return match ? match[1].trim() : "";
		}
		
		function formatSpellName(name) {
		  return name
		    .replace(/-xphb$|-phb$|-frhof$|-srd$/i, "")
		    .replace(/-/g, " ")
		    .replace(/\b\w/g, c => c.toUpperCase());
		}
		
		function parseLevel(levelStr) {
		    if (!levelStr) return 99;
		    const lower = levelStr.toLowerCase();
		    if (lower.includes("cantrip")) return 0;
		    const match = lower.match(/(\d)(?:st|nd|rd|th)-level/);
		    return match ? Number(match[1]) : 99;
		}
		
		function belongsToCategory(list, name) {
		    name = name.toLowerCase().replace(/'/g, "");
		    return (list ?? []).some(s =>
		        s.toLowerCase().replace(/'/g, "") === name
		    );
		}
		
		
		// ==========================
		// Build spellData
		const spellData = [];
		for (let spell of spells) {
		    const content = await dv.io.load(spell.file.path);
		    const displayName = formatSpellName(spell.file.name);
		    const levelSchool = extractField(content, "Level") || (content.match(/\*(.*?)\*/)?.[1] ?? "");
		    const levelNum = parseLevel(levelSchool);
		    const duration = extractField(content, "Duration");
		
		    spellData.push({
		        file: spell.file,
		        Name: displayName,
		        LevelNum: levelNum,
		        Level_School: levelSchool,
		        Casting: extractField(content, "Casting time"),
		        Range: extractField(content, "Range"),
		        Components: extractField(content, "Components"),
		        Duration: duration,
		        IsConcentration: /concentration/i.test(duration),
		        Classes: (spell.classes ?? []).join(", "),
		    });
		    //console.log("Loaded spell:", {
		    //raw: spell.file.name,
		    //formatted: displayName
		//});
		}
		
		// Sort alphabetically/level
		spellData.sort((a, b) => a.LevelNum - b.LevelNum || a.Name.localeCompare(b.Name));
		
		// ==========================
		// Build rows for each category
		const preparedRows = [];
		const alwaysRows = [];
		const knownRows = [];
		
		for (const spell of spellData) {
		    const lower = spell.Name.toLowerCase();
		
		    if (belongsToCategory(always.Cantrips, lower) || belongsToCategory(always.Spells, lower)) {
		        alwaysRows.push(spell);
		    } else if (belongsToCategory(prepared.Cantrips, lower) || belongsToCategory(prepared.Spells, lower)) {
		        preparedRows.push(spell);
		    } else if (belongsToCategory(known.Cantrips, lower) || belongsToCategory(known.Spells, lower)) {
		        knownRows.push(spell);
		    }
		    /*console.log("Assigning category:", spell.Name, {
		    isAlways: belongsToCategory(always.Cantrips, spell.Name) || belongsToCategory(always.Spells, spell.Name),
		    isPrepared: belongsToCategory(prepared.Cantrips, spell.Name) || belongsToCategory(prepared.Spells, spell.Name),
		    isKnown: belongsToCategory(known.Cantrips, spell.Name) || belongsToCategory(known.Spells, spell.Name)
		});
		*/
		}
		
		 
		
		// Combine Prepared + Always Prepared
		const combinedRows = [
		    ...alwaysRows.map(spell => ({ ...spell, type: "always" })),
		    ...preparedRows.map(spell => ({ ...spell, type: "prepared" })),
		];
		
		// Sort: Cantrips first, then by level number, then alphabetically by name
		combinedRows.sort((a, b) => {
		    if (a.LevelNum !== b.LevelNum) return a.LevelNum - b.LevelNum;
		    return a.Name.localeCompare(b.Name);
		});
		const knownRowsTyped = knownRows.map(spell => ({ ...spell, type: "known" }));
		
		
		
		// --- build wrappers and attach tables ---
		// `buildPreparedTable(title, rows, type)` already returns a wrapper <div>
		const preparedWrapper = document.createElement("div");
		preparedWrapper.id = "preparedWrapper";
		preparedWrapper.classList.add("spell-wrapper");
		
		// ===============================
		//   PREPARED SPELL COUNT BLOCK
		// ===============================
		
		function getSpellCounts(className, level) {
		    level = Math.max(1, Math.min(20, level));
		
		    // Cantrips known table (from PHB)
		    const cantripsTable = {
		        Bard:             [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
		        Cleric:           [3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5],
		        Druid:            [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
		        Paladin:          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		        Ranger:           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		        Sorcerer:         [4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6],
		        Warlock:          [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
		        Wizard:           [3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5],
		        Arcane_Trickster: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		        Eldritch_Knight:  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		    };
		
		    // Prepared spells calculation table (PHB 2024)
		    const preparedTable = {
		        Bard:             [4,5,6,7,9,10,11,12,14,15,16,16,17,17,18,18,19,20,21,22],
		        Cleric:           [4,5,6,7,9,10,11,12,14,15,16,16,17,17,18,18,19,20,21,22],
		        Druid:            [4,5,6,7,9,10,11,12,14,15,16,16,17,17,18,18,19,20,21,22],
		        Paladin:          [2,3,4,5,6,6,7,7,9,9,10,10,11,11,12,12,14,14,15,15],
		        Ranger:           [2,3,4,5,6,6,7,7,9,9,10,10,11,11,12,12,14,14,15,15],
		        Sorcerer:         [2,4,6,7,9,10,11,12,14,15,16,16,17,17,18,18,19,20,21,22],
		        Warlock:          [2,3,4,5,6,7,8,9,10,10,11,11,12,12,13,13,14,14,15,15],
		        Wizard:           [2,4,6,7,9,10,11,12,14,15,16,16,17,17,18,18,19,20,21,22],
		        Arcane_Trickster: [0,0,3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13],
		        Eldritch_Knight:  [0,0,3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13]
		    };
		
		    // Lookup (level-1 because array is 0-based)
		    const allowedCantripCount = cantripsTable[className]?.[level - 1] ?? 0;
		    const allowedSpellCount = preparedTable[className]?.[level - 1] ?? 0;
		
		    return { allowedCantripCount, allowedSpellCount };
		}
		// Get Spells from in-memory pending state
		const Spells =
			pendingState.Spells ??
			structuredClone(dv.current().Spells ?? {
				Prepared: { Cantrips: [], Spells: [] },
				Always_Prepared: { Cantrips: [], Spells: [] },
				Known: { Cantrips: [], Spells: [] }
		});
		const classes = getClassLevels(dv.current().dndClass, dv.current().Level);
		
		let totalAllowedCantrips = 0;
		let totalAllowedSpells = 0;
		
		classes.forEach(c => {
		    const { allowedCantripCount, allowedSpellCount } = getSpellCounts(c.className, c.level);
		    totalAllowedCantrips += allowedCantripCount;
		    totalAllowedSpells += allowedSpellCount;
		});
		
		// Actual prepared counts from YAML
		const actualPrepSpells   = Spells?.Prepared?.Spells?.length   ?? 0;
		const actualPrepCantrips = Spells?.Prepared?.Cantrips?.length ?? 0;
		
		// Difference
		const diffSpellCount   = totalAllowedSpells   - actualPrepSpells;
		const diffCantripCount = totalAllowedCantrips - actualPrepCantrips;
		
		// Prepared spells vs allowed counts (debug suppressed)
		
		// Render
		if (diffSpellCount > 0 || diffCantripCount > 0) {
		    let missingMsg = [];
		    if (diffSpellCount > 0) missingMsg.push(`Prepare ${diffSpellCount} more spell${diffSpellCount === 1 ? "" : "s"}`);
		    if (diffCantripCount > 0) missingMsg.push(`Choose ${diffCantripCount} more cantrip${diffCantripCount === 1 ? "" : "s"}`);
		    preparedWrapper.appendChild(buildPreparedTable(missingMsg.join(" / "), combinedRows, "prepared"));
		} else {
		    preparedWrapper.appendChild(buildPreparedTable("Prepared Spells", combinedRows, "prepared"));
		}
		
		
		
		// build known wrapper
		const knownWrapper = document.createElement("div");
		knownWrapper.id = "knownWrapper";
		knownWrapper.classList.add("spell-wrapper");

		// Local helper to rebuild prepared/known tables from pendingState.Spells
		function rebuildSpellUI() {
			if (startup.initializing) return;
			const spellListsLocal = pendingState.Spells || structuredClone(dv.current().Spells ?? { Prepared: { Cantrips: [], Spells: [] }, Always_Prepared: { Cantrips: [], Spells: [] }, Known: { Cantrips: [], Spells: [] } });
			const preparedLocal = normalizeList(spellListsLocal.Prepared);
			const alwaysLocal = normalizeList(spellListsLocal.Always_Prepared);
			const knownLocal = normalizeList(spellListsLocal.Known);
			
			const pRows = [];
			const aRows = [];
			const kRows = [];
			for (const spell of spellData) {
				const lower = spell.Name.toLowerCase();
				if (belongsToCategory(alwaysLocal.Cantrips, lower) || belongsToCategory(alwaysLocal.Spells, lower)) {
					aRows.push(spell);
				} else if (belongsToCategory(preparedLocal.Cantrips, lower) || belongsToCategory(preparedLocal.Spells, lower)) {
					pRows.push(spell);
				} else if (belongsToCategory(knownLocal.Cantrips, lower) || belongsToCategory(knownLocal.Spells, lower)) {
					kRows.push(spell);
				}
			}
			const combined = [
				...aRows.map(s => ({ ...s, type: 'always' })),
				...pRows.map(s => ({ ...s, type: 'prepared' })),
			];
			combined.sort((a,b) => a.LevelNum - b.LevelNum || a.Name.localeCompare(b.Name));
			const knownTyped = kRows.map(s => ({ ...s, type: 'known' }));
			
			// Clear and repopulate wrappers
			preparedWrapper.innerHTML = '';
			const headerTitle = getPreparedHeaderTitle(spellListsLocal);
			preparedWrapper.appendChild(buildPreparedTable(headerTitle, combined));
			knownWrapper.innerHTML = '';
			knownWrapper.appendChild(buildPreparedTable('Known Spells', knownTyped));
		}

		// Initialize UI from pendingState
		rebuildSpellUI();
		
		// Now insert into your UI
		// Option A: append inside the existing cantripWrapper (below the cantrip table)
		if (typeof cantripWrapper !== "undefined" && cantripWrapper instanceof HTMLElement) {
		   // cantripWrapper.appendChild(preparedWrapper);
		    //cantripWrapper.appendChild(knownWrapper);
		} else {
		    // fallback: append to container if cantripWrapper is not available
		    container.appendChild(preparedWrapper);
		    container.appendChild(knownWrapper);
		}
		
		
		// Split Level/School correctly
		function createLevelSchoolCell(levelSchoolStr) {
		    const td = document.createElement("td");
		    td.style.textAlign = "center";   // <— THIS is what you want
		
		    const parts = levelSchoolStr.split(",").map(p => p.trim());
		    const levelPart = parts[0] ?? "";
		    const schoolPart = parts[1] ?? "";
		
		    const levelSpan = document.createElement("span");
		    levelSpan.textContent = levelPart;
		
		    const commaSpan = document.createElement("span");
		    commaSpan.textContent = schoolPart ? ",\n " : ""; // display comma if school exists
		
		    const schoolSpan = document.createElement("span");
		    schoolSpan.textContent = schoolPart;
		    schoolSpan.style.color = "var(--text-muted)";
		    schoolSpan.style.fontWeight = "200";
		    schoolSpan.style.opacity = "40%";
		    // schoolSpan.style.textAlign = "center"; // no longer needed
		
		    td.appendChild(levelSpan);
		    td.appendChild(commaSpan);
		    td.appendChild(schoolSpan);
		
		    return td;
		}
		
		async function setConcentrationSpell(spellName) {
			pendingState.conditions ??= {};

			pendingState.conditions.concentration_spell = spellName;
			pendingState.conditions.concentration = true;

			markDirty();
			rebuildConditions();
			// Immediate UI sync (memory-driven)
			//refreshConditionsTabUI();
			//rebuildHeader();
			//syncConcentrationCSS();
		}


		// Build a list of spell slot definitions (key, label, used)
		function getSpellSlotDefs() {
			// Merge frontmatter slots with in-memory pendingState overrides so
			// the picker reflects slots spent during this session.
			const fmSlots = (dv.current().spell_slot) ?? {};
			const slotsObj = Object.assign({}, fmSlots, pendingState.spell_slot ?? {});

			// Recreate full caster slots table (same as used for rendering)
			const fullCasterSlotsTable = {
			  1:  [2,0,0,0,0,0,0,0,0],
			  2:  [3,0,0,0,0,0,0,0,0],
			  3:  [4,2,0,0,0,0,0,0,0],
			  4:  [4,3,0,0,0,0,0,0,0],
			  5:  [4,3,2,0,0,0,0,0,0],
			  6:  [4,3,3,0,0,0,0,0,0],
			  7:  [4,3,3,1,0,0,0,0,0],
			  8:  [4,3,3,2,0,0,0,0,0],
			  9:  [4,3,3,3,1,0,0,0,0],
			  10: [4,3,3,3,2,0,0,0,0],
			  11: [4,3,3,3,2,1,0,0,0],
			  12: [4,3,3,3,2,1,0,0,0],
			  13: [4,3,3,3,2,1,1,0,0],
			  14: [4,3,3,3,2,1,1,0,0],
			  15: [4,3,3,3,2,1,1,1,0],
			  16: [4,3,3,3,2,1,1,1,0],
			  17: [4,3,3,3,2,1,1,1,1],
			  18: [4,3,3,3,3,1,1,1,1],
			  19: [4,3,3,3,3,2,1,1,1],
			  20: [4,3,3,3,3,2,2,1,1]
			};

			// Calculate combined caster level same as render code
			const spellcasterLevel =
			    bardLevel +
			    clericLevel +
			    druidLevel +
			    sorcererLevel +
			    wizardLevel +
			    Math.floor(paladinLevel / 2) +
			    Math.floor(rangerLevel / 2) +
			    Math.floor(eldritchKnightLevel / 3) +
			    Math.floor(arcaneTricksterLevel / 3);

			const fullCasterSlots = fullCasterSlotsTable[spellcasterLevel] ?? [0,0,0,0,0,0,0,0,0];

			const defs = [];

			for (let lvl = 1; lvl <= 9; lvl++) {
				const cnt = fullCasterSlots[lvl - 1];
				if (cnt === 0) continue;
				// Group generated numeric slots into a single definition per level
				const members = [];
				for (let i = 1; i <= cnt; i++) members.push(`level_${lvl}_${i}`);
				let available = 0;
				for (const m of members) if (slotsObj[m] !== false) available++;
				let label = `Level ${lvl}`;
				if (cnt > 1) label = `${label} (${available} of ${cnt})`;
				const used = available === 0;
				defs.push({ key: `level_${lvl}`, label, used, slotLevel: lvl, isSpecific: false, members });
			}

			// Warlock pact slots
			let maxPact = 0;
			if (hasWarlock) {
				if (warlockLevel >= 17) maxPact = 4;
				else if (warlockLevel >= 11) maxPact = 3;
				else if (warlockLevel >= 2) maxPact = 2;
				else maxPact = 1;
				// Determine pact slot "magical level" (mLevel) similar to rendering logic
				let mLevel = 1;
				if (warlockLevel >= 9) mLevel = 5;
				else if (warlockLevel >= 7) mLevel = 4;
				else if (warlockLevel >= 5) mLevel = 3;
				else if (warlockLevel >= 2) mLevel = 2;
				for (let i=1;i<=maxPact;i++) defs.push({ key: `pact${i}`, label: `Pact Slot (level ${mLevel}) ${i}`, used: (slotsObj[`pact${i}`] === false), isPact: true, slotLevel: mLevel });
				// Mystic arcanum keys
				if (warlockLevel >= 11) defs.push({ key: 'arcanum1', label: 'Mystic Arcanum (6th)', used: (slotsObj['arcanum1'] === false), slotLevel: 6 });
				if (warlockLevel >= 13) defs.push({ key: 'arcanum2', label: 'Mystic Arcanum (7th)', used: (slotsObj['arcanum2'] === false), slotLevel: 7 });
				if (warlockLevel >= 15) defs.push({ key: 'arcanum3', label: 'Mystic Arcanum (8th)', used: (slotsObj['arcanum3'] === false), slotLevel: 8 });
				if (warlockLevel >= 17) defs.push({ key: 'arcanum4', label: 'Mystic Arcanum (9th)', used: (slotsObj['arcanum4'] === false), slotLevel: 9 });
			}

			// Include any custom keys present in frontmatter (helpful for Shadow Touched / Magic Initiate etc)
			if (slotsObj && typeof slotsObj === 'object') {
				const existing = new Set(defs.map(d => d.key));
				// helper: nice label formatter
				const minorWords = new Set(['of','the','a','an','in','on','to','for','and','or','with','at','by']);
				function niceLabel(str) {
					let s = String(str).replace(/_/g, ' ').trim();
					return s.split(/\s+/).map((w,i)=>{
						w = w.toLowerCase();
						if (i===0 || !minorWords.has(w)) return w.charAt(0).toUpperCase()+w.slice(1);
						return w;
					}).join(' ');
				}

				// try to locate Magic Initiate spell if present in feats
				let miSpell = null;
				let miClass = null;
				try {
					const miObj = feats.find(f => typeof f === 'object' && f['Magic Initiate']);
					if (miObj) {
						const mi = miObj['Magic Initiate'];
						miSpell = mi?.spell;
						miClass = (mi?.class ?? '').toLowerCase();
					}
				} catch(e) { /* ignore */ }

				// Collect grouped keys (base + index)
				const groups = {};
				for (const k of Object.keys(slotsObj)) {
					if (existing.has(k)) continue;
					const m = k.match(/^(.*?)(\d+)$/);
					if (m) {
						let base = m[1];
						// Normalize trailing underscore (e.g., 'level_1_' -> 'level_1')
						// so numeric keys like 'level_1_1' merge with generated 'level_1' defs.
						if (base.endsWith('_')) base = base.slice(0, -1);
						// If a def for this base already exists (e.g., generated 'level_1'), skip grouping
						if (existing.has(base)) continue;
						if (!groups[base]) groups[base] = { members: [] };
						groups[base].members.push(k);
					} else {
						// If a def already exists for this exact key, skip
						if (existing.has(k)) continue;
						groups[k] = { members: [k] };
					}
				}

				for (const base of Object.keys(groups)) {
					const members = groups[base].members.sort();
					const total = members.length;
					let available = 0;
					for (const m of members) if (slotsObj[m] !== false) available++;
					let label = niceLabel(base);
					// If this matches Magic Initiate class key (e.g., 'wizard') and we found miSpell, use that name
					if (miSpell && miClass && base.toLowerCase() === miClass) {
						label = miSpell || label;
					}
					if (total > 1) label = `${label} (${available} of ${total})`;
					const used = available === 0;
					if (total === 1) defs.push({ key: members[0], label, used, isSpecific: true, members });
					else defs.push({ key: base, label, used, isSpecific: true, members });
				}
			}

			return defs;
		}

		async function spendSpellSlot(key) {
			pendingState.spell_slot ??= {};

			// Resolve grouped key (e.g., 'level_3') to a concrete numbered key (e.g., 'level_3_1').
			let target = key;
			if (!(target in pendingState.spell_slot)) {
				// 1) Look for available numbered candidates in pendingState first
				let candidates = Object.keys(pendingState.spell_slot)
					.filter(k => k.startsWith(target) && /\d+$/.test(k) && pendingState.spell_slot[k] !== false);
				// 2) Then look in frontmatter (dv.current()) if none in pendingState
				if (!candidates.length) {
					const fm = (dv.current().spell_slot) ?? {};
					candidates = Object.keys(fm).filter(k => k.startsWith(target) && /\d+$/.test(k) && fm[k] !== false);
				}
				// 3) If still none, assume the first numeric index
				if (candidates.length) target = candidates[0];
				else if (!/\d+$/.test(target)) target = `${target}_1`;
			}

			if (!target) return false;

			pendingState.spell_slot[target] = false; // mark spent
			markDirty();
			renderOverviewTab();
			return true;
		}

		const nextFrame = () => new Promise(r => requestAnimationFrame(r));		

		function showSpellSlotPicker(spell) {
			// Don't consume spell slot for Eldritch Invocations / special features
			if (hasArmorOfShadows() && slugifyName(spell.Name) === 'mage-armor') {
				new Notice(`Cast ${spell.Name} (with Armor of Shadows. No slot consumed)`);
				pendingState.conditions ??= {};
				pendingState.conditions.mage_armor = true;
  				markDirty();
				syncAfterSpellCast();
				renderOverviewTab();
				rebuildConditions();
				return;
			}
			if (hasAscendantStep() && slugifyName(spell.Name) === 'levitate') {
				new Notice(`Cast ${spell.Name} (no slot consumed)`);
				syncAfterSpellCast();
				return;
			}
			if (hasFiendishVigor() && slugifyName(spell.Name) === 'false-life') {
				new Notice(`Cast ${spell.Name} (no slot consumed)`);
				syncAfterSpellCast();
				return;
			}
			if (hasMaskOfManyFaces() && slugifyName(spell.Name) === 'disguise-self') {
				new Notice(`Cast ${spell.Name} (no slot consumed)`);
				syncAfterSpellCast();
				return;
			}
			if (hasMasterofMyriadForms() && slugifyName(spell.Name) === 'alter-self') {
				new Notice(`Cast ${spell.Name} (no slot consumed)`);
				syncAfterSpellCast();
				return;
			}
			if (hasMistyVisoions() && slugifyName(spell.Name) === 'silent-image') {
				new Notice(`Cast ${spell.Name} (no slot consumed)`);
				syncAfterSpellCast();
				return;
			}
			if (hasOneWithShadows() && slugifyName(spell.Name) === 'invisibility') {
				new Notice(`Cast ${spell.Name} (with One with Shadows. No slot consumed)`);
				pendingState.conditions ??= {};
				pendingState.conditions.invisible = true;
  				markDirty();
				syncAfterSpellCast();
				rebuildConditions();
				return;
			}
			if (hasOtherworldlyLeap() && slugifyName(spell.Name) === 'jump') {
				new Notice(`Cast ${spell.Name} (no slot consumed)`);
				syncAfterSpellCast();
				return;
			}
			if (hasVisionsOfDistantRealms() && slugifyName(spell.Name) === 'arcane-eye') {
				new Notice(`Cast ${spell.Name} (no slot consumed)`);
				syncAfterSpellCast();
				return;
			}
			if (hasWhispersOfTheGrave() && slugifyName(spell.Name) === 'speak-with-dead') {
				new Notice(`Cast ${spell.Name} (no slot consumed)`);
				syncAfterSpellCast();
				return;
			}
			// Cantrips don't consume slots
			if ((spell.LevelNum ?? 0) === 0) {
				if (spell.IsConcentration) {
					setConcentrationSpell(spell.Name);
				}
				new Notice(`Cast ${spell.Name} (cantrip)`);
				syncAfterSpellCast();
				rebuildConditions();
				return;
			}

			const defs = getSpellSlotDefs();
			const available = defs.filter(d => !d.used);
			if (!available.length) { new Notice('No available spell slots', 4000); return; }

			// Build modal
			const overlay = document.createElement('div');
			overlay.style.position = 'fixed';
			overlay.style.left = 0; overlay.style.top = 0; overlay.style.right = 0; overlay.style.bottom = 0;
			overlay.style.background = 'rgba(0,0,0,0.5)';
			overlay.style.zIndex = 9999;
			overlay.style.display = 'flex';
			overlay.style.alignItems = 'center';
			overlay.style.justifyContent = 'center';

			const box = document.createElement('div');
			box.style.background = 'var(--background-secondary)';
			box.style.color = 'var(--text)';
			box.style.padding = '12px';
			box.style.borderRadius = '6px';
			box.style.minWidth = '320px';

			const title = document.createElement('div');
			title.textContent = `Choose a spell slot to expend for ${spell.Name}`;
			title.style.marginBottom = '8px';
			box.appendChild(title);

			const list = document.createElement('div');
			list.style.display = 'grid';
			list.style.gridTemplateColumns = '1fr 1fr';
			list.style.gap = '6px';

			const spellLevel = spell.LevelNum ?? 0;
			for (const d of defs) {
				const btn = document.createElement('button');
				let label = d.label + (d.used ? ' (used)' : '');
				// Determine whether this slot can be used for the spell's level
				let usable = !d.used;
				if (usable) {
					if (d.isSpecific) {
						// Specific keyed slots (shadow_touched, misty_step1, etc.) should only be usable
						// when they match the spell being cast (e.g., misty_step for Misty Step).
						const spellKey = slugifyName(spell.Name).replace(/-/g,'_');
						let matches = false;
						// If this def has members (grouped numbered keys), check members
						if (Array.isArray(d.members) && d.members.length) {
							for (const m of d.members) {
								if (!m) continue;
								const low = String(m).toLowerCase();
								if (low === spellKey) { matches = true; break; }
								if (low.endsWith('_' + spellKey)) { matches = true; break; }
								if (low.includes(spellKey)) { matches = true; break; }
							}
						} else {
							const low = String(d.key || '').toLowerCase();
							if (low === spellKey) matches = true;
							if (low.endsWith('_' + spellKey)) matches = true;
							if (low.includes(spellKey)) matches = true;
						}
						// Magic Initiate special-case: enable if the MI spell matches this spell
						try {
							const miObj = feats.find(f => typeof f === 'object' && f['Magic Initiate']);
							if (miObj) {
								const miSpell = miObj['Magic Initiate']?.spell;
								const miClassLocal = (miObj['Magic Initiate']?.class ?? '').toLowerCase();
								if (miSpell && slugifyName(miSpell).replace(/-/g,'_') === spellKey) {
									// Only enable MI slot if this specific slot corresponds to the MI class key
									const checkKeys = Array.isArray(d.members) && d.members.length ? d.members : [d.key];
									for (const ck of checkKeys) {
										if (String(ck || '').toLowerCase() === miClassLocal) { matches = true; break; }
									}
								}
							}
						} catch(e) { /* ignore */ }
						usable = matches;
					} else if (d.isPact) {
						// Pact magic counts for levels 1-5
						usable = spellLevel <= 5;
						if (!usable) label += ' (pact ≤5)';
					} else if (typeof d.slotLevel === 'number') {
						// Only allow using a slot if the slot's level is >= spell level
						usable = d.slotLevel >= spellLevel;
						if (!usable) label += ` (requires ≥${spellLevel})`;
					} else {
						// Unknown slot: allow by default
						usable = true;
					}
				}

				btn.textContent = label;
				btn.disabled = !usable;
				btn.onclick = async () => {
				overlay.remove();

				// Allow DOM + focus to settle
				await nextFrame();

				const ok = await spendSpellSlot(d.key);
				if (!ok) return;

				if (spell.IsConcentration) {
					await setConcentrationSpell(spell.Name);
				}

				markDirty();
				renderOverviewTab();

				// UI updates AFTER memory is correct
				refreshSpellSlotToggles();
				rebuildConditions();
				rebuildHeader();
				syncAfterSpellCast();
				// Always target the actual header root
				const headerRoot = document.querySelector('.character-header-block');
				if (headerRoot) syncConcentrationCSS();

				new Notice(`Expended ${d.label} for ${spell.Name}`, 3000);
				};
				list.appendChild(btn);
			}

			box.appendChild(list);

			const cancel = document.createElement('div');
			cancel.style.marginTop = '8px';
			const cancelBtn = document.createElement('button');
			cancelBtn.textContent = 'Cancel';
			cancelBtn.onclick = () => overlay.remove();
			cancel.appendChild(cancelBtn);
			box.appendChild(cancel);

			overlay.appendChild(box);
			document.body.appendChild(overlay);
		}
		
		
		// ==========================
		// Build combined table
		function buildPreparedTable(title, rows) {
		    const wrapper = document.createElement("div");
		    wrapper.classList.add("spell-section");
		
			const header = document.createElement("h3");
			header.textContent = title;
			header.classList.add("phb-header-row");
			

			// Colapsable Header
			const toggleBtn = document.createElement("button");
			toggleBtn.textContent = "▼";
			toggleBtn.classList.add("collapse-toggle");
			toggleBtn.style.marginRight = "6px";

			// Header row with inline search box
			const headerRow = document.createElement('div');
			headerRow.style.display = 'flex';
			headerRow.style.alignItems = 'center';
			headerRow.style.justifyContent = 'space-between';

			const headerLeft = document.createElement('div');
			headerLeft.style.display = "flex";
			headerLeft.style.alignItems = "center";

			headerLeft.appendChild(toggleBtn);
			headerLeft.appendChild(header);

			const searchInput = document.createElement('input');
			searchInput.type = 'search';
			searchInput.placeholder = 'Search spells...';
			searchInput.style.padding = '6px';
			searchInput.style.marginLeft = '8px';
			searchInput.style.minWidth = '480px';
			searchInput.style.maxWidth = '820px';
			headerLeft.style.flex = "1";

			headerRow.appendChild(headerLeft);
			headerRow.appendChild(searchInput);
			wrapper.appendChild(headerRow);
		
		    const table = document.createElement("table");
		    table.classList.add("dataview", "table-view-table");
		
		    table.innerHTML = `
		      <thead>
		        <tr>
		          <th>Spell</th>
		          <th>Level/School</th>
		          <th>Casting</th>
		          <th>Range</th>
		          <th>Components</th>
		          <th>Duration</th>
		          <th>Classes</th>
		          <th></th>
		        </tr>
		      </thead>
		    `;
		    
		
		    const tbody = document.createElement("tbody");

			let isCollapsed = false;

			const setCollapsed = (collapsed) => {
				isCollapsed = collapsed;
				tbody.style.display = collapsed ? "none" : "";
				toggleBtn.textContent = collapsed ? "▶" : "▼";
			};

			toggleBtn.onclick = () => {
				setCollapsed(!isCollapsed);
			};

			// Auto-collapse large Known spell lists
			if (title.toLowerCase().includes("known") && rows.length > 20) {
				setCollapsed(true);
			}

			const countBadge = document.createElement("span");
			countBadge.textContent = `(${rows.length})`;
			countBadge.style.opacity = "0.6";
			countBadge.style.marginLeft = "6px";

			header.appendChild(countBadge);
		
			for (const spell of rows) {
			const tr = document.createElement("tr");
			// attach searchable name for quick filtering
			tr.dataset.spellName = (spell.Name || '').toLowerCase();
		
		    // Spell Name Cell
			const tdName = document.createElement("td");
			
			const linkComponent = dv.fileLink(spell.file.path, false, spell.Name);
			const linkEl = dv.el("span", linkComponent);  // converts component → DOM node
			tdName.appendChild(linkEl);
			
			tr.appendChild(tdName);
		
		    // Level/School
		    tr.appendChild(createLevelSchoolCell(spell.Level_School));
		
		    // Other columns
		    for (const val of [spell.Casting, spell.Range, spell.Components, spell.Duration, spell.Classes]) {
		        const td = document.createElement("td");
		        td.textContent = val;
		        tr.appendChild(td);
		    }
		
		    // Move button
		    const tdMove = document.createElement("td");
		
		    if (spell.type === "prepared") {
		        const btn = document.createElement("button");
		        btn.classList.add("move-btn");
		        btn.textContent = "▼";
		        btn.onclick = () => moveSpell(spell.Name, "Prepared", "Known");
		        tdMove.appendChild(btn);
		    } else if (spell.type === "known") {
		        const btn = document.createElement("button");
		        btn.classList.add("move-btn");
		        btn.textContent = "▲";
		        btn.onclick = () => moveSpell(spell.Name, "Known", "Prepared");
		        tdMove.appendChild(btn);
		    }
		
		    tr.appendChild(tdMove);
		
		    // NEW: Cast button column — hide ONLY for Known spells
			const tdCast = document.createElement("td");
			
			// These types SHOULD show a cast button
			const canCastTypes = ["prepared", "always", "always_prepared", "granted", "feat"];
			
			// If the spell is NOT in the "known" list, show cast button
			if (spell.type !== "known") {
			    const castBtn = document.createElement("button");
			    castBtn.classList.add("cast-btn");
			    castBtn.textContent = "✨";
			
				castBtn.onclick = async () => {
					// Open the spell-slot picker. The picker will spend a slot
					// and call `setConcentrationSpell` for concentration spells.
					showSpellSlotPicker(spell);
				};
			
			    tdCast.appendChild(castBtn);
			}
			
			tr.appendChild(tdCast);
		
		    // ----------------------------------------------------
		
		tbody.appendChild(tr);
		}
		
		table.appendChild(tbody);
		wrapper.appendChild(table);

		// Wire search input to filter this table
		searchInput.addEventListener('input', (ev) => {
			const q = String(searchInput.value || '').trim().toLowerCase();
			for (const r of tbody.children) {
				const name = (r.dataset.spellName || '').toLowerCase();
				if (!q || name.includes(q)) r.style.display = '';
				else r.style.display = 'none';
			}
		});
		return wrapper;
		} 


		// ==========================
		// Move spell function
		async function moveSpell(name, fromKey, toKey) {
			// moveSpell called (debug suppressed)
			new Notice(`Moving spell ${name} from ${fromKey}, to ${toKey}`, 5000);
			pendingState.Spells = pendingState.Spells || structuredClone(dv.current().Spells ?? { Prepared: { Cantrips: [], Spells: [] }, Always_Prepared: { Cantrips: [], Spells: [] }, Known: { Cantrips: [], Spells: [] } });
			const spellsObj = pendingState.Spells;
		
		    const mapping = {
		        Prepared: spellsObj.Prepared, 
		        Known: spellsObj.Known,
		        Always_Prepared: spellsObj.Always_Prepared
		    };
		
			// mapping object (debug suppressed)
		
		    const fromList = mapping[fromKey]?.Spells;
		    const toList = mapping[toKey]?.Spells;
		
			// from/to lists (debug suppressed)
		
		    if (!fromList || !toList) {
		        console.error("ERROR: fromList or toList undefined!", { fromKey, toKey });
		        return;
		    }
		
		    const idx = fromList.findIndex(s => s.toLowerCase() === name.toLowerCase());
			// index in fromList (debug suppressed)

			if (idx !== -1) {
				// removing from fromList (debug suppressed)
		        fromList.splice(idx, 1);
		    } else {
		        console.warn("Spell NOT found in fromList:", name);
		    }
		
		    if (!toList.some(s => s.toLowerCase() === name.toLowerCase())) {
				// adding to toList (debug suppressed)
		        toList.push(name);
		    } else {
		        console.warn("Spell already exists in toList:", name);
		    }
		
		    console.log("fromList AFTER:", fromList);
		    console.log("toList AFTER:", toList);
		
			await updateSpellLists(spellsObj);

			// Update UI immediately from pending state
			markDirty();
			rebuildSpellUI();
		}
		
		
		//-----------------------------------------------------
		// ADD/REMOVE Spell Interface (below Known Spells table)
		//-----------------------------------------------------
		const allSpellNames = spellData
			.map(s => s.Name)
			.sort((a, b) => a.localeCompare(b));
		function getSpellLevelByName(name) {
			const lower = name.toLowerCase();
			const match = spellData.find(s => s.Name.toLowerCase() === lower);
			return match?.LevelNum ?? null; // null = unknown spell
		}
		
		const knownCasters = new Set([
			"Bard",
			"Sorcerer",
			"Warlock",
			"Eldritch_Knight",
			"Arcane_Trickster"
		]);

		const spellClasses = getClassLevels(dv.current().dndClass, dv.current().Level);
		const isKnownCaster = spellClasses.every(c => knownCasters.has(c.className));
		const hasFreePreparedSlots = diffSpellCount > 0;

		const spellInputWrapper = document.createElement("div");
		spellInputWrapper.style.marginTop = "1rem";
		spellInputWrapper.style.display = "flex";
		spellInputWrapper.style.gap = "0.5rem";
		spellInputWrapper.style.alignItems = "center";
		
		// Input field
		const spellInput = document.createElement("input");
		spellInput.type = "text";
		spellInput.placeholder = "Enter spell name...";
		spellInput.style.padding = "6px";
		spellInput.style.flex = "1";
		
		// Helper: normalize formatting exactly like your display logic
		function normalizeSpellName(name) {
		    return name
		        .trim()
		        .replace(/['"]/g, "")          // remove quotes for matching
		        .replace(/\b\w/g, c => c.toUpperCase());
		}
		
		// Always Prepared checkbox (left of input)
		const alwaysLabel = document.createElement("label");
		alwaysLabel.style.marginRight = "8px";
		const alwaysPreparedCheckbox = document.createElement("input");
		alwaysPreparedCheckbox.type = "checkbox";
		alwaysPreparedCheckbox.style.marginRight = "4px";
		alwaysLabel.appendChild(alwaysPreparedCheckbox);
		alwaysLabel.appendChild(document.createTextNode("Always Prepared?"));

		// Prepared checkbox
		const preparedLabel = document.createElement("label");
		preparedLabel.style.marginRight = "8px";
		const preparedCheckbox = document.createElement("input");
		preparedCheckbox.type = "checkbox";
		preparedCheckbox.style.marginRight = "4px";
		preparedLabel.appendChild(preparedCheckbox);
		preparedLabel.appendChild(document.createTextNode("Prepared?"));


		// Make sure only Always Prepared? or Prepared? can be checked. Never both
		alwaysPreparedCheckbox.addEventListener("change", () => {
			if (alwaysPreparedCheckbox.checked) preparedCheckbox.checked = false;
		});

		preparedCheckbox.addEventListener("change", () => {
			if (preparedCheckbox.checked) alwaysPreparedCheckbox.checked = false;
		});

		// ----------------------------------
		// Prepared checkbox state control
		// ----------------------------------
		if (isKnownCaster) {
			// Known casters: default ON, never disabled
			preparedCheckbox.checked = true;
			preparedCheckbox.disabled = false;
		} else {
			// Prepared casters
			if (hasFreePreparedSlots) {
				preparedCheckbox.checked = true;
				preparedCheckbox.disabled = false;
			} else {
				preparedCheckbox.checked = false;
				preparedCheckbox.disabled = true;
			}
		}

		if (!isKnownCaster && !hasFreePreparedSlots) {
			preparedCheckbox.title = "No prepared spell slots remaining";
		}

		// ADD button
		const addBtn = document.createElement("button");
		addBtn.textContent = "Add Spell";
		addBtn.style.padding = "6px 10px";
		addBtn.onclick = async () => {
			const raw = spellInput.value.trim();
			if (!raw) return;

			const formatted = normalizeSpellName(raw);

			pendingState.Spells =
				pendingState.Spells ||
				structuredClone(dv.current().Spells ?? {
					Prepared: { Cantrips: [], Spells: [] },
					Always_Prepared: { Cantrips: [], Spells: [] },
					Known: { Cantrips: [], Spells: [] }
				});

			const spellsObj = pendingState.Spells;

			const lower = formatted.toLowerCase();

			// Utility to check existence anywhere
			const existsAnywhere = (list) =>
				list.some(s => s.toLowerCase() === lower);

			// ----------------------------
			// Always Prepared
			// ----------------------------
			// Detect spell level from loaded spellData
			const levelNum = getSpellLevelByName(formatted);

			if (levelNum == null) {
				new Notice(`Spell "${formatted}" not found.`);
				return;
			}

			const isCantrip = levelNum === 0;

			// Convenience selectors
			const AP = spellsObj.Always_Prepared;
			const P  = spellsObj.Prepared;
			const K  = spellsObj.Known;

			// Pick correct buckets
			const apList = isCantrip ? AP.Cantrips : AP.Spells;
			const pList  = isCantrip ? P.Cantrips  : P.Spells;
			const kList  = isCantrip ? K.Cantrips  : K.Spells;

			// ----------------------------
			// Always Prepared
			// ----------------------------
			if (alwaysPreparedCheckbox.checked) {
				if (!existsAnywhere(apList)) {
					apList.push(formatted);
				}

			// ----------------------------
			// Prepared
			// ----------------------------
			} else if (preparedCheckbox.checked) {
				if (!existsAnywhere(pList)) {
					pList.push(formatted);
				}

				// Ensure it exists in Known as well (rules-accurate)
				if (!existsAnywhere(kList)) {
					kList.push(formatted);
				}

			// ----------------------------
			// Known (default)
			// ----------------------------
			} else {
				if (!existsAnywhere(kList)) {
					kList.push(formatted);
				}
			}

			await updateSpellLists(spellsObj);
			rebuildSpellUI();

			// Reset UI
			spellInput.value = "";
			alwaysPreparedCheckbox.checked = false;
			preparedCheckbox.checked = false;
		};

		
		// REMOVE button
		const removeBtn = document.createElement("button");
		removeBtn.textContent = "Remove Spell";
		removeBtn.style.padding = "6px 10px";
		removeBtn.onclick = async () => {
			const raw = spellInput.value.trim();
			if (!raw) return;

			const formatted = normalizeSpellName(raw);
			pendingState.Spells = pendingState.Spells || structuredClone(dv.current().Spells ?? { Prepared: { Cantrips: [], Spells: [] }, Always_Prepared: { Cantrips: [], Spells: [] }, Known: { Cantrips: [], Spells: [] } });
			const spellsObj = pendingState.Spells;

			// Try removing from Known first
			const knownList = spellsObj.Known.Spells || [];
			let idx = knownList.findIndex(s => s.toLowerCase() === formatted.toLowerCase());
			if (idx !== -1) {
				knownList.splice(idx, 1);
				await updateSpellLists(spellsObj);
				rebuildSpellUI();
				spellInput.value = "";
				return;
			}

			// Otherwise, try Always_Prepared
			const alwaysList = spellsObj.Always_Prepared?.Spells || [];
			idx = alwaysList.findIndex(s => s.toLowerCase() === formatted.toLowerCase());
			if (idx !== -1) {
				alwaysList.splice(idx, 1);
				await updateSpellLists(spellsObj);
				rebuildSpellUI();
				spellInput.value = "";
			}
		};
		// Ensure the input field is visible before buttons (checkbox first)
		spellInputWrapper.appendChild(alwaysLabel);
		spellInputWrapper.appendChild(preparedLabel);
		spellInputWrapper.appendChild(spellInput);
		spellInputWrapper.appendChild(addBtn);
		spellInputWrapper.appendChild(removeBtn);
		
		// Attach to the document AFTER the Known Spells table
		container.appendChild(spellInputWrapper);
		
		
		cantripWrapper.appendChild(cantripTable);
		spellSlotsWrapper.after(cantripWrapper);
		// Now insert your new spell-table interface
		cantripWrapper.after(preparedWrapper);
		preparedWrapper.after(knownWrapper);
		knownWrapper.after(spellInputWrapper);
        
    } catch (e) {
        console.error("Spells Tab Failed:", e);
        dv.paragraph("⚠ Spells failed to load. Check console.");
    }
})();



 

// ======================================================================================
//================================================================== Weapon Container Tab
// ======================================================================================

 (async function renderMasteryTab() {
	try {
		// Redirect console.log to a no-op to suppress unwanted logs
		// Always scope to container — never global document
		const weaponsTab = container.querySelector("#weapons");
		if (!weaponsTab) {
			console.warn("[Weapons Tab] #weapons tab not found — skipping Weapons render.");
			return;
		}

		const weaponPanel = weaponsTab.querySelector(".panel");
		if (!weaponPanel) {
			console.warn("[Weapons Tab] .panel not found inside #weapons");
			return;
		}

		const weaponList = weaponPanel.querySelector(".weapon-list");
		if (!weaponList) {
			console.warn("[Weapons Tab] .weapon-list missing inside panel");
			return;
		}

		const WEAPONS_TAB = weaponPanel;
		

		const weaponHeading = document.createElement("h4");
		weaponHeading.textContent = "Weapon Details";
		weaponHeading.classList.add("phb-heading");
		weaponPanel.insertBefore(weaponHeading, weaponList);

		// -----------------------------
		// CONFIG
		// -----------------------------
		const INVENTORY = dv.current().inventory ?? {};

		function parseWeaponName(name) {
		// Matches: (+1), (+2), (+3)
		const match = name.match(/\(\s*\+([1-3])\s*\)/);

		return {
			baseName: name.replace(/\s*\(\s*\+[1-3]\s*\)/, "").trim(),
			enhancement: match ? Number(match[1]) : 0
		};
		}


		// Map friendly names → slugs
		function slugify(str) {
			return String(str)
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, "-")
				.replace(/^-+|-+$/g, "");
		}

		const inventoryEntries = Object.keys(INVENTORY).map(name => {
		const parsed = parseWeaponName(name);
		return {
			friendly: name,               // "Greataxe (+1)"
			baseName: parsed.baseName,    // "Greataxe"
			enhancement: parsed.enhancement,
			slug: slugify(parsed.baseName)
		};
		});


		// -----------------------------
		// LOAD COMPENDIUM WEAPONS
		// -----------------------------

		const allWeapons = dv.pages(`"${ITEMS_FOLDER}"`)
			.where(p =>
				p.tags &&
				p.tags.some(t => t.startsWith("ttrpg-cli/item/weapon"))
			);
		//console.log(`allWeapons = ${allWeapons}`)
		// -----------------------------
		// STRICT MATCH: filename starts with slug + "-"
		function matchesInventoryWeapon(fileName, slug) {
			fileName = fileName.toLowerCase();

			// Acceptable suffixes
			const allowedSuffixes = ["-xphb", "-homebrew", "-xdmg", "-frhof", "-fraif"];

			for (const suffix of allowedSuffixes) {
				if (fileName === slug + suffix) return true;
			}

			return false;
		}

		const matchedWeapons = [];

		for (const entry of inventoryEntries) {
			const matches = allWeapons
				.filter(p => matchesInventoryWeapon(p.file.name.toLowerCase(), entry.slug))
				.map(p => ({
					friendly: entry.friendly,
					page: p,
					enhancement: entry.enhancement
				}));

			matchedWeapons.push(...matches);
		}


		// ===== ATTACK BONUS CALCULATION =====
		async function getAttackBonus(w) {
			const page = w.page;
			const tags = page.tags ?? [];
			const feats = (page.feats ?? []).map(f => f.toLowerCase()); // normalize

			let usedStat = null;

			let content = "";
			try {
				const file = app.vault.getAbstractFileByPath(page.file.path);
				if (file) content = await app.vault.read(file);
			} catch(e) {
				console.warn(`Could not read file: ${page.file.path}`);
			}

			const propMatch = content.match(/\*\*Properties\*\*:\s*(.+)/i);
			const properties = propMatch ? propMatch[1] : "";
			const hasFinesse = /\[Finesse\]/i.test(properties);

			let modifier = 0;

			// Determine ability mod
			if (tags.some(t => t.includes("weapon/ranged"))) {
				usedStat = "DEX";
				modifier = DEX_MOD;
			}
			else if (tags.some(t => t.includes("weapon/melee"))) {
				if (hasFinesse && DEX_MOD >= STR_MOD) {
					usedStat = "DEX"; 
					modifier = DEX_MOD;
				} else {
					usedStat = "STR"; 
					modifier = STR_MOD;
				}
			}

			// Add proficiency
			modifier += pb;

			// ---------- NEW: Archery Damage Bonus ----------
			const isRanged = tags.some(t => t.includes("weapon/ranged"));
			const hasArcheryFeat = featsList.includes("archery");
			console.log(`isRanged = ${isRanged}`)
			console.log(`hasArcheryFeat = ${hasArcheryFeat}`)
			if (isRanged && hasArcheryFeat) {
				modifier += 2;
			}
			// ------------------------------------------------

			// ---------- Magic Weapon Enhancement ----------
			if (w.enhancement > 0) {
			modifier += w.enhancement;
			}
			// --------------------------------------------

			return (modifier >= 0 ? "+" : "") + modifier;
		}



		// -----------------------------
		// GET DAMAGE STRING
		async function getDamageString(w) {
			const page = w.page;

			let content = "";
			try {
				const file = app.vault.getAbstractFileByPath(page.file.path);
				if (file) content = await app.vault.read(file);
			} catch(e) {
				console.warn(`Could not read file: ${page.file.path}`);
			}

			const propMatch = content.match(/\*\*Properties\*\*:\s*(.+)/i);
			const properties = propMatch ? propMatch[1] : "";
			const hasFinesse = /\[Finesse\]/i.test(properties);

			let modifier = STR_MOD;

			if (page.tags?.some(t => t.includes("weapon/ranged"))) {
				modifier = DEX_MOD;
			}
			else if (page.tags?.some(t => t.includes("weapon/melee"))) {
				if (hasFinesse && DEX_MOD >= STR_MOD) {
					modifier = DEX_MOD;
				}
			}



			// Add proficiency for heavy weapons with great weapon feat		

			// ---------- NEW: Great Weapon Master Damage Bonus ----------
			const isHeavy = /\[Heavy\]/i.test(properties);
			const hasGreatWeaponFeat = featsList?.some(
			f => f.toLowerCase() === "great weapon master"
			);

			if (isHeavy && hasGreatWeaponFeat) {
			modifier += pb;
			}
			// ---------------------------------------------------------

			// ---------- Magic Weapon Enhancement ----------
			if (w.enhancement > 0) {
			modifier += w.enhancement;
			}
			// --------------------------------------------

			//modifier += pb;
			//Removed due to incorreclty adding prof bonus to damage
			const sign = modifier >= 0 ? "+" : "";

			const damageBlock = content.match(/\*\*Damage\*\*:\s*([\s\S]+?)(?:\n\n|\Z)/i);
			if (!damageBlock) return "–";

			const block = damageBlock[1];

			const versatile = [...block.matchAll(/(One-handed|Two-handed):\s*([0-9d]+)\s*(\w+)/gi)];
			if (versatile.length > 0) {
				return versatile.map(v => `${v[2]} ${sign}${modifier} ${v[3]}`).join(" / ");
			}

			const single = block.match(/([0-9d]+)\s*(\w+)/);
			if (single) {
				return `${single[1]} ${sign}${modifier} ${single[2]}`;
			}

			return "–";
		}


		// grab mastery map from frontmatter
		const masteryMap = dv.current().mastery ?? {};

		// -----------------------------
		// RENDER TABLE WITH ATK BONUS, DAMAGE & MASTERY
		if (matchedWeapons.length === 0) {
			weaponList.innerHTML = "<i>No weapons found.</i>";
		} else {

			// Build a native HTML table
			const table = document.createElement("table");
			table.classList.add("dataview", "table-view-table");

			table.innerHTML = `
			<thead>
				<tr>
				<th>Weapon</th>
				<th>Atk Bonus</th>
				<th>Damage & Type</th>
				<th>Mastery</th>
				</tr>
			</thead>
			`;

			const tbody = document.createElement("tbody");

			for (let w of matchedWeapons) {
				const row = document.createElement("tr");

				// === Weapon Link ===
				const nameCell = document.createElement("td");
				const link = document.createElement("a");
				link.classList.add("internal-link");
				link.href = w.page.file.path;
				link.textContent = w.friendly;
				nameCell.appendChild(link);

				// === Atk Bonus ===
				const atkCell = document.createElement("td");
				atkCell.textContent = await getAttackBonus(w);

				// === Damage ===
				const dmgCell = document.createElement("td");
				dmgCell.textContent = await getDamageString(w);

				// === Mastery Link ===
				const masteryCell = document.createElement("td");

				const masteryType = masteryMap[w.friendly];
				if (masteryType) {
					const masteryLink = document.createElement("a");
					masteryLink.classList.add("internal-link");
					masteryLink.href = `${RULES_FOLDER}/item-mastery#${masteryType}`;
					masteryLink.textContent = masteryType;
					masteryCell.appendChild(masteryLink);
				} else {
					masteryCell.textContent = "–";
				}

				row.appendChild(nameCell);
				row.appendChild(atkCell);
				row.appendChild(dmgCell);
				row.appendChild(masteryCell);

				tbody.appendChild(row);
			}

			table.appendChild(tbody);

			weaponList.innerHTML = "";
			weaponList.appendChild(table);
		}






		// ===== Weapon Mastery Selector =====
		const fm = dv.current();
		// initialize per-file pending weapon mastery
		pendingState.weaponMastery = pendingState.weaponMastery || structuredClone(fm.weapon_mastery ?? {});
		const wMasteryMap = pendingState.weaponMastery;

		const WEAPON_MASTERY_MAP = {
			Cleave: ["Greataxe", "Halberd"],
			Graze: ["Glaive", "Greatsword"],
			Nick: ["Dagger", "Light Hammer", "Scimitar", "Sickle"],
			Push: ["Greatclub", "Heavy Crossbow", "Pike", "Warhammer"],
			Sap: ["Flail", "Longsword", "Mace", "Morningstar", "Spear", "War Pick"],
			Slow: ["Club", "Javelin", "Light Crossbow", "Longbow", "Musket", "Sling", "Whip"],
			Topple: ["Battleaxe", "Lance", "Maul", "Quarterstaff", "Trident"],
			Vex: ["Blowgun", "Dart", "Hand Crossbow", "Handaxe", "Pistol", "Rapier", "Shortbow", "Shortsword"]
		};

		const WEAPON_TYPE_MAP = {
			// Simple weapons
			"Club": "Simple",
			"Dagger": "Simple",
			"Greatclub": "Simple",
			"Handaxe": "Simple",
			"Javelin": "Simple",
			"Light Hammer": "Simple",
			"Mace": "Simple",
			"Quarterstaff": "Simple",
			"Sickle": "Simple",
			"Spear": "Simple",		

			// Simple Ranged Weapons
			"Dart": "Simple",
			"Crossbow, Light": "Simple",
			"Light Crossbow": "Simple",	
			"Shortbow": "Simple",
			"Sling": "Simple",

			// Martial weapons
			"Battleaxe": "Martial",
			"Flail": "Martial",
			"Glaive": "Martial",
			"Greataxe": "Martial",
			"Greatsword": "Martial",
			"Halberd": "Martial",
			"Lance": "Martial",
			"Longsword": "Martial",
			"Maul": "Martial",
			"Morningstar": "Martial",
			"Pike": "Martial",
			"Rapier": "Martial",
			"Scimitar": "Martial",
			"Shortsword": "Martial",
			"Trident": "Martial",
			"Warhammer": "Martial",
			"War Pick": "Martial",
			"Whip": "Martial",

			// Martial Ranged Weapons
			"Blowgun": "Martial",
			"Hand Crossbow": "Martial",
			"Heavy Crossbow": "Martial",
			"Longbow": "Martial",

			// Firearms (2024 DMG keeps them Martial)
			"Pistol": "Martial",
			"Musket": "Martial",
		};


		const WEAPONS = Object.entries(WEAPON_MASTERY_MAP).flatMap(([mastery, weapons]) =>
			weapons.map(name => ({
				name,
				mastery,
				type: WEAPON_TYPE_MAP[name] || "Unknown"
			}))
		);





		function getWeaponMasteryCounts(className, level) {
			level = Math.max(1, Math.min(20, level));

			const masteryTable = {
				Barbarian: [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
				Fighter:   [3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6],
				Paladin:   [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
				Ranger:    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
				Rogue:     [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
			};

			const allowedMasteryCount = masteryTable[className]?.[level - 1] ?? 0;
			return { allowedMasteryCount };
		}
		// Get YAML
		const player = dv.current();

		// Total mastery slots
		let totalMasterySlots = 0;

		classes.forEach(c => {
			const { allowedMasteryCount } = getWeaponMasteryCounts(c.className, c.level);
			totalMasterySlots += allowedMasteryCount;
		});


		const hasMastery = totalMasterySlots > 0 && Object.keys(masteryMap).length > 0;

		if (totalMasterySlots === 0 && Object.keys(masteryMap).length > 0) {
			dv.paragraph("⚠ **This class does not gain Weapon Mastery.** Remove the `mastery:` block from frontmatter to clear this warning.");
			return; // Stop BEFORE building mastery UI
		}

		if (hasMastery) {
		// --- PHB Heading ---
			const masteryHeading = document.createElement("h4");
			masteryHeading.textContent = "Weapon Mastery";
			masteryHeading.classList.add("phb-heading");
			
			const masteryWrapper = dv.container.createEl("div", {cls: "mastery-paragraph-werapper"});
			// --- Paragraphs ---
			dv.paragraph("Choose your weapon mastery type at the start of each adventuring day")
			const masteryp1 = dv.container.lastElementChild;
			
			dv.paragraph("**Weapon Mastery Types**: [[08-Weapon Masteries#^256bd1|Cleave]], [[08-Weapon Masteries#^7604ec| Graze]], [[08-Weapon Masteries#^6d6139|Nick]], [[08-Weapon Masteries#^bf41d1|Push]], [[08-Weapon Masteries#^b10ae3|SAP]], [[08-Weapon Masteries#^2413e0|Slow]], [[08-Weapon Masteries#^971c6a|Topple]], [[08-Weapon Masteries#^0a78ab| Vex]]")
			const masteryp2 = dv.container.lastElementChild;
			
			masteryWrapper.appendChild(masteryHeading);
			masteryWrapper.appendChild(masteryp1);
			masteryWrapper.appendChild(masteryp2);
			weaponPanel.appendChild(masteryWrapper);



			const masteryContainer = dv.el("div", "", { cls: "weapon-mastery-selector" });

			function renderWeaponMasteryUI() {
				// Build table skeleton
				let tableHtml = `
						<table class="table">
					<thead>
						<tr>
						<th>Mastery Slot</th>
						<th>Weapon Type</th>
						<th>Mastery</th>
						</tr>
					</thead>
					<tbody>
					`;

				for (let i = 1; i <= totalMasterySlots; i++) {
					tableHtml += `
						<tr>
						<td>Mastery ${i}</td>
						<td><select id="mastery${i}">
								<option value="">-- Select --</option>
							</select>
						</td>
						<td id="mastery${i}Mastery">–</td>
						</tr>`;
				}

				tableHtml += `</tbody></table>`;
				masteryContainer.innerHTML = tableHtml;
				weaponPanel.appendChild(masteryContainer);

				const trainings = Array.isArray(player.weapon_training) ? player.weapon_training : [];

				function weaponAllowed(w) {
					if (trainings.includes("Simple Weapons") && w.type === "Simple") return true;
					if (trainings.includes("Martial Weapons") && w.type === "Martial") return true;
					const finesseWeapons = ["Dagger", "Rapier", "Scimitar", "Shortsword", "Whip"];
					if (trainings.includes("Martial weapons that have the Finesse Property") && w.type === "Martial" && finesseWeapons.includes(w.name)) return true;
					return false;
				}

				async function saveWeaponMastery(slot, weapon, mastery) {
					pendingState.weaponMastery = pendingState.weaponMastery || {};
					if (!weapon) delete pendingState.weaponMastery[slot];
					else pendingState.weaponMastery[slot] = { weapon, mastery };
					markDirty();
				}

				const trainedWeapons = WEAPONS.filter(weaponAllowed);
				const uniqueWeapons = [];
				const seenClasses = new Set();
				for (const w of trainedWeapons) {
					if (!seenClasses.has(w.name)) { seenClasses.add(w.name); uniqueWeapons.push(w); }
				}

				const options = uniqueWeapons.map(w => `<option value="${w.name}">${w.name}</option>`).join("");

				for (let i = 1; i <= totalMasterySlots; i++) {
					const select = masteryContainer.querySelector(`#mastery${i}`);
					const output = masteryContainer.querySelector(`#mastery${i}Mastery`);

					if (!select) continue;

					select.innerHTML += options;

					if (pendingState.weaponMastery[i]?.weapon) {
						select.value = pendingState.weaponMastery[i].weapon;
						output.textContent = pendingState.weaponMastery[i].mastery ?? findMastery(pendingState.weaponMastery[i].weapon);
					}

					select.addEventListener("change", async e => {
						const weapon = e.target.value;
						const mastery = findMastery(weapon);
						output.textContent = mastery;
						await saveWeaponMastery(i, weapon, mastery);
					});
				}

				function findMastery(weaponClass) {
					const w = uniqueWeapons.find(x => x.name === weaponClass);
					return w?.mastery ?? "–";
				}
			}

			// Initial render
			renderWeaponMasteryUI();

			// Expose an imperative re-render for rest handlers or external triggers
			try {
				window.__char_rebuildHandlers[__char_file_key].rebuildWeaponMastery = function() {
					try { renderWeaponMasteryUI(); } catch (e) { console.error('renderWeaponMasteryUI failed:', e); }
				};
			} catch (e) {}

		}
	} catch (e) {
		console.error("Mastery Tab Failed:", e);
        dv.paragraph("⚠ Mastery failed to load. Check console.");
	}
})();
		






// ======================================================================================
//=============================================================   Inventory Container Tab
// ======================================================================================
console.log("Rendering TAB: Inventory");

// Example usage for Inventory tab
(async function renderInventoryTab() {
    try {
		// Wait specifically for the Inventory panel to exist in the DOM
		const panelEl = await waitForElement("#inventory .panel");
		console.log("panel container found for Inventory Tab", panelEl);
		// FIND INVENTORY TAB (scoped to our dashboard instance)
		const inventoryTab = tabContainer.querySelector('#inventory');
		if (!inventoryTab) { console.error("Inventory tab NOT FOUND in local dashboard."); return; }
		const invPanel = inventoryTab.querySelector('.panel');
		if (!invPanel) { console.error(".panel not found inside inventory tab"); return; }

		// Idempotency: if the inventory wrapper already exists and has content, skip re-render
		const existingInv = invPanel.querySelector(".inventory-wrapper");
		if (existingInv) {
			const childCount = existingInv.childElementCount ?? 0;
			console.log("Inventory existing wrapper found. childCount=", childCount);
			if (childCount > 0) {
				console.log("Inventory already rendered — skipping");
				return;
			} else {
				console.log("Inventory wrapper present but empty — removing and re-rendering");
				existingInv.remove();
			}
		}
		
		const inventoryHeading = document.createElement("h4");
		inventoryHeading.textContent = "Player Inventory";
		inventoryHeading.classList.add("phb-heading");
		invPanel.appendChild(inventoryHeading);
		
		// Create wrapper
		const inventoryWrapper = document.createElement("div");
		inventoryWrapper.classList.add("inventory-wrapper");
		inventoryWrapper.style.display = "flex";
		inventoryWrapper.style.flexDirection = "column";
		inventoryWrapper.style.gap = "1rem";
		inventoryWrapper.style.marginTop = "1rem";
		invPanel.appendChild(inventoryWrapper);
		
		// ============================
		// CONFIG
		// ============================
        
		// Use in-memory inventory state (persisted to `window.pendingState`)
		pendingState.inventory = pendingState.inventory || structuredClone(dv.current().inventory ?? {});
		const inventory = pendingState.inventory;
		//const STR = dv.current().STR ?? 10; // default STR if missing
		const size = dv.current().size ?? "Medium";
		
		let carryWeight = 15 * STR; // default Medium
		if(size === "Tiny") carryWeight = 7.5 * STR;
		if(size === "Small") carryWeight = 15 * STR;
		if(size === "Medium") carryWeight = 15 * STR;
		if(size === "Large") carryWeight = 30 * STR;
		if(size === "Huge") carryWeight = 60 * STR;
		if(size === "Gargantuan") carryWeight = 120 * STR;
		
		const normalizeName = name => String(name)
		    .toLowerCase()
		    .replace(/\([^)]*\)/g, "")
		    .replace(/'/g, "")
		    .replace(/[^a-z0-9]/g, "-")
		    .replace(/-+/g, "-")
		    .replace(/^-|-$/g, "");
		
		// ============================
		// HELPERS
		// ============================
		async function getFileContent(path) {
		    const file = app.vault.getAbstractFileByPath(path);
		    if (!file) return "";
		    return await app.vault.read(file);
		}
		
		function extractFields(content, tags) {
		    const costMatch = content.match(/\*\*Cost\*\*:\s*([^\n]+)/i);
		    const weightMatch = content.match(/\*\*Weight\*\*:\s*([^\n]+)/i);
		    const rarityTag = tags?.find(t => t.includes("rarity/"));
		    const rarity = rarityTag ? rarityTag.split("/").pop().replace("-", " ") : null;
		
		    let cost = costMatch ? costMatch[1].trim() : null;
		    let weight = weightMatch ? weightMatch[1].trim() : null;
		
		    if (!cost && rarity) {
		        const rarityValue = {
		            common: "100 gp",
		            uncommon: "400 gp",
		            rare: "4,000 gp",
		            "very rare": "40,000 gp",
		            legendary: "200,000 gp",
		            artifact: "Priceless"
		        };
		        cost = rarityValue[rarity] ?? "—";
		    }
		
		    return { cost: cost ?? "—", weight: weight ?? "—" };
		}
		
		// ============================
		// BUILD TABLE DATA (async helper)
		// ============================
		const files = dv.pages(`"${ITEMS_FOLDER}"`);

		async function buildTableData(inv) {
			const tableData = [];
			let totalWeight = 0;

			for (const [name, qty] of Object.entries(inv)) {
				const norm = normalizeName(name);
				let match = files.find(p => normalizeName(p.file.name) === norm);

				if (!match) {
					match = files.find(p => (p.aliases ?? []).some(a => normalizeName(a) === norm));
				}
				if (!match) {
					match = files.find(p => normalizeName(p.file.name).includes(norm));
				}

				let cost = "—";
				let weight = "—";

				if (match) {
					const content = await getFileContent(match.file.path);
					const fields = extractFields(content, match.tags);
					cost = fields.cost;
					weight = fields.weight;
					const numericWeight = parseFloat(weight.replace(/[^\d.]/g, "")) || 0;
					totalWeight += numericWeight * qty;
				}

				tableData.push({
					file: match?.file,
					Name: name,
					Qty: qty,
					Cost: cost,
					Weight: weight,
				});
			}

			return { tableData, totalWeight };
		}
		
		// Encumbrance will be determined after computing totalWeight in buildTableData
		
		// ============================
		// BUILD TABLE ELEMENT
		// ============================
		const invTable = document.createElement("table");
		invTable.classList.add("dataview", "table-view-table");
		
		invTable.innerHTML = `
		  <thead>
		    <tr>
		      <th>Item</th>
		      <th>Qty</th>
		      <th>Cost</th>
		      <th>Weight</th>
		    </tr>
		  </thead>
		`;
		
		const invbody = document.createElement("tbody");

		// display total weight
		const totalDiv = document.createElement("div");
		totalDiv.style.marginTop = "0.5rem";
		inventoryWrapper.appendChild(totalDiv);

		function renderTable(tableData, totalWeight) {
			// clear existing rows
			invbody.innerHTML = "";

			// Sort and render rows
			tableData.sort((a, b) => a.Name.localeCompare(b.Name));
			for (const item of tableData) {
				const row = document.createElement("tr");

				const nameCell = document.createElement("td");
				if (item.file) {
					const link = document.createElement("a");
					link.classList.add("internal-link");
					link.href = item.file.path;
					link.textContent = item.Name;
					nameCell.appendChild(link);
				} else {
					nameCell.textContent = item.Name;
				}

				const qtyCell = document.createElement("td"); qtyCell.textContent = item.Qty;
				const costCell = document.createElement("td"); costCell.textContent = item.Cost;
				const weightCell = document.createElement("td"); weightCell.textContent = item.Weight;

				row.appendChild(nameCell);
				row.appendChild(qtyCell);
				row.appendChild(costCell);
				row.appendChild(weightCell);

				invbody.appendChild(row);
			}

			totalDiv.innerHTML = `<strong>Total Weight:</strong> ${totalWeight.toFixed(1)} lbs — ${totalWeight <= carryWeight ? "Unencumbered" : "Encumbered"}`;
		}
		
		// Initially build table data and render
		const { tableData, totalWeight } = await buildTableData(inventory);
		renderTable(tableData, totalWeight);
		
		// Add the table to your wrapper
		invTable.appendChild(invbody);
		inventoryWrapper.appendChild(invTable);

		// Mark panel as rendered to avoid duplicate renders
		try { invPanel.dataset.inventoryRendered = "true"; } catch (e) {}

		// Inventory UI appended (diagnostics suppressed)
		
		// totalDiv populated by renderTable
        
		
		
		// ============================
		// INPUT FIELD + BUTTONS
		// ============================
		const invContainer = document.createElement("div");
		invContainer.style.display = "flex";
		invContainer.style.flexDirection = "column";
		invContainer.style.gap = "0.5rem";
		
		// Input field
		const inputWrapper = document.createElement("div");
		inputWrapper.style.display = "flex";
		inputWrapper.style.alignItems = "center";
		inputWrapper.style.gap = "0.5rem";
		
		const inputLabel = document.createElement("label");
		inputLabel.textContent = "Item name:";
		inputLabel.style.minWidth = "100px";
		
		const itemInput = document.createElement("input");
		itemInput.type = "text";
		itemInput.placeholder = "Enter item name...";
		itemInput.style.flex = "1";
		itemInput.style.padding = "4px 8px";
		itemInput.style.borderRadius = "6px";
		itemInput.style.border = "1px solid var(--background-modifier-border)";
		itemInput.style.backgroundColor = "var(--background-primary)";
		itemInput.style.color = "var(--text-normal)";
		
		inputWrapper.appendChild(inputLabel);
		inputWrapper.appendChild(itemInput);
		invContainer.appendChild(inputWrapper);
		
		// Buttons
		const btnWrapper = document.createElement("div");
		btnWrapper.style.display = "flex";
		btnWrapper.style.gap = "0.5rem";
		
		const addButton = document.createElement("button");
		addButton.textContent = "Add Item";
		const removeButton = document.createElement("button");
		removeButton.textContent = "Remove Item";
		
		[addButton, removeButton].forEach(btn => {
		    btn.style.padding = "6px 12px";
		    btn.style.borderRadius = "6px";
		    btn.style.cursor = "pointer";
		    btn.style.backgroundColor = "var(--interactive-accent)";
		    btn.style.color = "var(--text-on-accent)";
		    btn.style.border = "none";
		    btn.style.fontWeight = "500";
		    btnWrapper.appendChild(btn);
		});
		
		inputWrapper.appendChild(btnWrapper);
		inventoryWrapper.appendChild(invContainer);
				
		
		async function updateInventoryYaml(newInventory) {
		    const file = app.workspace.getActiveFile();
		    if (!file) return;
		
		    let content = await app.vault.read(file);
		
		    // Match the frontmatter
		    const yamlMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
		    if (!yamlMatch) return console.error("No YAML frontmatter found.");
		
		    let yamlBody = yamlMatch[1];
		
		    // Split frontmatter into lines
		    const lines = yamlBody.split("\n");
		
		    // Find start and end of inventory block (if exists)
		    let invStart = lines.findIndex(l => l.trim().startsWith("inventory:"));
		    let invEnd = invStart;
		
		    if (invStart >= 0) {
		        // Look for where the block ends (next top-level key)
		        for (let i = invStart + 1; i < lines.length; i++) {
		            if (/^\S/.test(lines[i])) break; // top-level key
		            invEnd = i;
		        }
		    }
		
		    // Build new inventory block
		    const invLines = ["inventory:"];
		    for (const [k, v] of Object.entries(newInventory)) {
		        invLines.push(`  ${k}: ${v}`);
		    }
		
		    if (invStart >= 0) {
		        // Replace existing inventory
		        lines.splice(invStart, invEnd - invStart + 1, ...invLines);
		    } else {
		        // Insert inventory at end of frontmatter
		        lines.push(...invLines);
		    }
		
		    const newYaml = `---\n${lines.join("\n")}\n---\n`;
		
		    // Preserve rest of note content
		    const restContent = content.slice(yamlMatch[0].length);
		
		    await app.vault.modify(file, newYaml + restContent);
		
		    // Refresh Dataview
		    try { app.commands.executeCommandById("dataview:refresh-views"); } catch {}
		}
		
		
		
		
		
		
		// -----------------------------
		// FIND MATCHING INVENTORY KEY
		// -----------------------------
		function findMatchingInventoryKey(inputName, inventory) {
		    const targetNorm = normalizeName(inputName);
		
		    for (const key of Object.keys(inventory)) {
		        if (normalizeName(key) === targetNorm) {
		            return key; // Match found
		        }
		    }
		
		    return null; // No match — will create new entry
		}
		
		
		// -----------------------------
		// ADD ITEM
		// -----------------------------
		addButton.onclick = async () => {
			const raw = itemInput.value.trim();
			if (!raw) return;

			// Ensure pendingState.inventory exists
			pendingState.inventory = pendingState.inventory || {};
			const currentInv = pendingState.inventory;

			const matchedKey = findMatchingInventoryKey(raw, currentInv);

			if (matchedKey) {
				currentInv[matchedKey] = Number(currentInv[matchedKey] || 0) + 1;
			} else {
				currentInv[raw] = 1;
			}

			markDirty();
			itemInput.value = "";

			const { tableData, totalWeight } = await buildTableData(currentInv);
			renderTable(tableData, totalWeight);
		};
		
		
		// -----------------------------
		// REMOVE ITEM
		// -----------------------------
		removeButton.onclick = async () => {
			const raw = itemInput.value.trim();
			if (!raw) return;

			pendingState.inventory = pendingState.inventory || {};
			const currentInv = pendingState.inventory;

			const matchedKey = findMatchingInventoryKey(raw, currentInv);

			if (!matchedKey) {
				new Notice(`Item "${raw}" not found in inventory.`);
				return;
			}

			// decrement qty
			currentInv[matchedKey] = Number(currentInv[matchedKey] || 0) - 1;

			// remove if reaches zero
			if (currentInv[matchedKey] <= 0) {
				delete currentInv[matchedKey];
			}

			markDirty();
			itemInput.value = "";

			const { tableData, totalWeight } = await buildTableData(currentInv);
			renderTable(tableData, totalWeight);
		};
		
		//===================================================== Attuned Items
		
		function slugifyItemName(name) {
			return String(name)
				.toLowerCase()
				.trim()
				.replace(/['"]/g, "")
				.replace(/[^a-z0-9]+/g, "-")
				.replace(/^-+|-+$/g, "");
		}

		const attunedWrapper = document.createElement("div");
		attunedWrapper.style.marginTop = "1.5rem";

		// --- Attuned state initialization (SINGLE SOURCE OF TRUTH) ---
		pendingState.attuned = Array.isArray(pendingState.attuned)
			? pendingState.attuned
			: Array.isArray(dv.current().attuned)
				? [...dv.current().attuned]
				: [];

		const attuned = pendingState.attuned;


		// Title
		const title = document.createElement("h3");
		title.textContent = "Attuned Items";
		attunedWrapper.appendChild(title);

		const listEl = document.createElement("ul");
		attunedWrapper.appendChild(listEl);

		
		function rebuildAttunedList() {
			listEl.innerHTML = "";

			if (attuned.length === 0) {
				const noneText = document.createElement("p");
				noneText.textContent = "_No attuned items._";
				noneText.style.fontStyle = "italic";
				listEl.appendChild(noneText);
				return;
			}

			const srdItems = dv.pages(`"${ITEMS_FOLDER}"`).where(p => p.file?.path);

			attuned.forEach((name, index) => {
				const li = document.createElement("li");
				li.style.display = "flex";
				li.style.alignItems = "center";
				li.style.gap = "0.5rem";

				// ---------- Item link or text ----------
				const wantedSlug = slugifyItemName(name);
				let match = null;

				try {
					match = srdItems.find(p => {
						const fileSlug = slugifyItemName(p.file.name);
						return fileSlug.startsWith(wantedSlug);
					});
				} catch {}

				if (match?.file?.path) {
					try {
						const link = dv.fileLink(match.file.path, false, name);
						const span = dv.el("span", link);
						li.appendChild(span);
					} catch {
						const span = document.createElement("span");
						span.textContent = name;
						li.appendChild(span);
					}
				} else {
					const span = document.createElement("span");
					span.textContent = name;
					li.appendChild(span);
				}

				// ---------- Remove button ----------
				const removeBtn = document.createElement("button");
				removeBtn.textContent = "✕";
				removeBtn.title = "Remove attunement";
				removeBtn.style.marginLeft = "auto";
				removeBtn.style.border = "none";
				removeBtn.style.background = "transparent";
				removeBtn.style.cursor = "pointer";
				removeBtn.style.color = "var(--text-muted)";

				removeBtn.onclick = () => {
					attuned.splice(index, 1);
					markDirty();
					rebuildAttunedList();
				};

				li.appendChild(removeBtn);
				listEl.appendChild(li);
			});
		}

		rebuildAttunedList();
		inventoryWrapper.appendChild(attunedWrapper);	
		
		
		
		// --- Inventory Items Dropdown + Attune Button ---
		const inventoryItems = Object.keys(dv.current().inventory ?? {});
		if (inventoryItems.length > 0) {
			const formWrapper = document.createElement("div");
			formWrapper.style.display = "flex";
			formWrapper.style.alignItems = "center";
			formWrapper.style.gap = "0.5rem";
			formWrapper.style.marginTop = "0.8rem";

			const select = document.createElement("select");
			inventoryItems.forEach(item => {
				const option = document.createElement("option");
				option.value = item;
				option.textContent = item;
				select.appendChild(option);
			});

			formWrapper.appendChild(select);

			const attuneButton = document.createElement("button");
			attuneButton.textContent = "Attune Item";
			attuneButton.style.padding = "6px 12px";
			attuneButton.style.borderRadius = "6px";
			attuneButton.style.border = "none";
			attuneButton.style.cursor = "pointer";
			attuneButton.style.background = "var(--interactive-accent)";
			attuneButton.style.color = "var(--text-on-accent)";
			attuneButton.style.fontWeight = "500";

			attuneButton.onclick = () => {
				const selected = select.value;
				if (!selected) return;

				if (attuned.includes(selected)) {
					new Notice(`⚠️ ${selected} is already attuned.`);
					return;
				}

				attuned.push(selected);
				markDirty();
				rebuildAttunedList();
			};

			formWrapper.appendChild(attuneButton);
			attunedWrapper.appendChild(formWrapper);
		}

		
		
		
		// Only render if ammo frontmatter exists
		if (c.ammunition) {
		
		    const ammunitionHeading = document.createElement("h4");
		    ammunitionHeading.textContent = "Ammunition Die";
		    ammunitionHeading.classList.add("phb-heading");
		    invPanel.appendChild(ammunitionHeading);
		
		    // Container for die selector row
		    const dieRow = document.createElement("div");
		    dieRow.style.display = "flex";
		    dieRow.style.gap = "0.5rem";
		    dieRow.style.alignItems = "center";
		    dieRow.style.marginBottom = "1rem";
		    dieRow.style.gap = "2rem";
		
		    // Dice in left→right order
		    const dice = ["d12", "d10", "d8", "d6", "d4"];
		
		    // Load current selection from frontmatter
		    const currentDie = (c.ammunition?.arrow ?? "").toLowerCase();
		
		    // Function to update YAML frontmatter
		    async function updateAmmo(newDie) {
			    const file = app.vault.getAbstractFileByPath(dv.current().file.path);
			    let content = await app.vault.read(file);
			
			    const lines = content.split("\n");
			    let insideAmmo = false;
			
			    for (let i = 0; i < lines.length; i++) {
			        const line = lines[i].trim();
			
			        // Enter ammunition block
			        if (line.startsWith("ammunition:")) {
			            insideAmmo = true;
			            continue;
			        }
			
			        // Leave block when indentation ends
			        if (insideAmmo && !line.startsWith("arrow:") && !line.startsWith("  arrow:") && !line.startsWith("    arrow:") && /^[^ ]/.test(lines[i])) {
			            insideAmmo = false;
			        }
			
			        // Rewrite arrow line
			        if (insideAmmo && line.startsWith("arrow:")) {
			            const indent = lines[i].match(/^\s*/)[0]; // keep original indent
			            lines[i] = `${indent}arrow: ${newDie}`;
			            break;
			        }
			    }
			
			    await app.vault.modify(file, lines.join("\n"));
			}
		
		    // Create die image elements — use opacity for inactive/active
			dice.forEach(die => {
			    const img = document.createElement("img");
			    const vaultPath = `z_Assets/SVGs/${die}.svg`;
			    img.src = app.vault.adapter.getResourcePath(vaultPath);
			
			    // size / pointer / transitions
			    img.style.width = "80px";
			    img.style.cursor = "pointer";
			    img.style.transition = "transform 0.18s ease, opacity 0.18s ease";
			    img.style.transformOrigin = "center";
			
			    // Default: slightly transparent (inactive)
			    img.style.opacity = "0.45";
			
			    // If currently selected, make it fully opaque
			    if (die === currentDie) {
			        img.style.opacity = "1";
			        img.style.filter = "drop-shadow(0 0 6px gold)";
			    } else {
			        img.style.filter = "none";
			    }
			
			    // Hover bounce — don't change opacity on hover, only scale
			    img.addEventListener("mouseenter", () => {
			        img.style.transform = "scale(1.12)";
			    });
			    img.addEventListener("mouseleave", () => {
			        img.style.transform = "scale(1)";
			    });
			
			    // On click: update YAML first, then update UI to reflect new selection
			    img.addEventListener("click", async () => {
			        // Update frontmatter
			        await updateAmmo(die);
			
			        // Reset all thumbnails to inactive
			        Array.from(dieRow.children).forEach(el => {
			            el.style.opacity = "0.45";
			            el.style.filter = "none";
			        });
			
			        // Activate clicked one
			        img.style.opacity = "1";
			        img.style.filter = "drop-shadow(0 0 6px gold)";
			    });
			
			    dieRow.appendChild(img);
			});
		
		    invPanel.appendChild(dieRow);
		}
		
		

    } catch (e) {
        console.error("Inventory Tab Failed:", e);
        dv.paragraph("⚠ Inventory failed to load. Check console.");
    }
})();









// ======================================================================================
//============================================================   Conditions Container Tab
// ======================================================================================
console.log("Rendering TAB: Conditions");
function rebuildConditions() {
	if (startup.initializing) return;
	try {
		window.__char_rebuildHandlers?.[__char_file_key]?.rebuildConditions?.();
	} catch (e) {
		console.warn("rebuildConditions wrapper failed", e);
	}
}

function syncAfterConditionChange() {
	if (startup.initializing) return;
	console.log("Syncing after condition change...");
	rebuildHeader();
	rebuildConditions();
	syncConcentrationCSS();
	rebuildOverview();
}



// Conditions tab renderer
(async function renderConditionsTab() {
	try {
		// Wait specifically for the Conditions panel to exist in the DOM
		await waitForElement("#conditions .panel");

		const page = dv.current();

		// Initialize pending conditions from frontmatter if not already present
		pendingState.conditions = pendingState.conditions || structuredClone(page.conditions ?? {});

		const conditionsTab = tabContainer.querySelector('#conditions');
		if (!conditionsTab) {
			console.error("Conditions tab NOT FOUND in local dashboard.");
			return;
		}

		// Find or create the panel container
		const panel = conditionsTab.querySelector('.panel');
		if (!panel) {
			console.error(".panel not found inside conditions tab");
			return;
		}
		
		// Idempotency: if the conditions buttons already exist and have content, skip re-render
		let existingContainer = panel.querySelector(".conditions-buttons");
		if (existingContainer) {
			const childCount = existingContainer.childElementCount ?? 0;
			console.log("Conditions existing container found. childCount=", childCount);
			if (childCount > 0) {
				console.log("Conditions already rendered — skipping");
				return;
			} else {
				console.log("Conditions container present but empty — removing and re-rendering");
				existingContainer.remove();
			}
		}
		
		
		
		const conditionsHeading = document.createElement("h4");
		conditionsHeading.textContent = "Active Conditions";
		conditionsHeading.classList.add("phb-heading");
		panel.appendChild(conditionsHeading);

		// 👇 Dataview will render INTO this
		const activeConditionsContainer = document.createElement("div");


		// expose a conditions rebuild handler so it can be refreshed externally
		window.__char_rebuildHandlers[__char_file_key].rebuildConditions = function () {
			try {
				console.log("rebuildConditions handler running; pendingState.conditions:", pendingState.conditions);

				// 1. Update button states
				panel.querySelectorAll("button[data-condition-key]").forEach(btn => {
					const key = btn.dataset.conditionKey;

					let active = false;
					if (key === "exhaustion") {
						active =
							pendingState.conditions?.exhaustion?.Level === true &&
							(pendingState.conditions.exhaustion.count ?? 0) > 0;
					} else {
						active = pendingState.conditions?.[key] === true;
					}

					btn.classList.toggle("is-active", active);
				});

				// 2. Update active list
				renderActiveConditions(activeConditionsContainer);

				console.log("Conditions rebuilt");
			} catch (e) {
				console.warn("Conditions rebuild failed", e);
			}
		};



		panel.appendChild(activeConditionsContainer);

		window.__renderActiveConditions = renderActiveConditions;
		renderActiveConditions(activeConditionsContainer);
		activeConditionsContainer.classList.add("conditions-active-list");

		function renderActiveConditions(container) {
			console.log("Rendering active conditions list into container:", container);
			// Ensure container is cleared to avoid duplicate lists on re-render
			try { container.innerHTML = ""; } catch (e) {}

			const conditions = pendingState.conditions ?? (dv.current().conditions ?? {});
			//const conditions = pendingState.conditions || {};

			const active = Object.entries(conditions)
				.filter(([key, val]) => {
					// Normal boolean conditions
					if (val === true) return true;

					// Exhaustion object
					if (
						key === "exhaustion" &&
						typeof val === "object" &&
						val.Level === true &&
						(val.count ?? 0) > 0
					) return true;

					return false;
				})
				.map(([key]) => key);

			if (active.length === 0) return;

			const items = active.map(key => {
				// Human-readable label
				let label = key
					.replace(/_/g, " ")
					.replace(/\b\w/g, c => c.toUpperCase());

				if (key === "concentration") {
					label = "Concentration";
				}

				// CLI-style slug (mage-armor)
				const slug = key
					.toLowerCase()
					.replace(/_/g, "-");

				let target;

				switch (key) {
					case "bless":
						target = `${BASE_FOLDER}/spells/${slug}-xphb`;
						break;	
					case "concentration":
						target = `${BASE_FOLDER}/rules/conditions#concentration`;
						break;								
					case "haste":
						target = `${BASE_FOLDER}/spells/${slug}-xphb`;
						break;
					case "heroic_inspiration":
						target = `${BASE_FOLDER}/rules/variant-rules/${slug}-xphb`;
						break;
					case "mage_armor":
						target = `${BASE_FOLDER}/spells/${slug}-xphb`;
						break;
					case "rage":
						target = `${BASE_FOLDER}/classes/barbarian-xphb#${slug} (Level 1)`;
						break;
					default:
						target = `${BASE_FOLDER}/rules/conditions#${slug}`;
				}

				return dv.fileLink(target, false, label);
			});

			// Render the active list into the cleared container
			dv.el("ul", items, { container });
		}


		
		
		// Create a container for buttons
		const buttonContainer = document.createElement("div");
		buttonContainer.classList.add("conditions-buttons");
		buttonContainer.style.display = "flex";
		buttonContainer.style.flexWrap = "wrap";
		buttonContainer.style.gap = "0.5rem";
		panel.appendChild(buttonContainer);
		
		// === BOOLEAN CONDITIONS ===
		const booleanConditions = [
			{key: "blinded", label: "Blinded"},
			{key: "charmed", label: "Charmed"},
			{key: "concentration", label: "Concentration"},
			{key: "deafened", label: "Deafened"},
			{key: "frightened", label: "Frightened"},
			{key: "grappled", label: "Grappled"},
			{key: "incapacitated", label: "Incapacitated"},
			{key: "invisible", label: "Invisible"},
			{key: "paralyzed", label: "Paralyzed"},
			{key: "petrified", label: "Petrified"},
			{key: "poisoned", label: "Poisoned"},
			{key: "prone", label: "Prone"},
			{key: "restrained", label: "Restrained"},
			{key: "stunned", label: "Stunned"},
			{key: "unconscious", label: "Unconscious"},
			{key: "mage_armor", label: "Mage Armor"},
			{key: "rage", label: "Rage", requires: "barbarian"},
			{key: "bless", label: "Bless"},
			{key: "haste", label: "Haste"}
		];

		function ensureRageState(file) {
			pendingState.Rage ??= {};

			// If already populated, do nothing
			if (Object.keys(pendingState.Rage).length) return;

			const fm = app.metadataCache.getFileCache(file)?.frontmatter;
			if (!fm?.Rage) return;

			for (const [k, v] of Object.entries(fm.Rage)) {
				pendingState.Rage[k] = v;
			}
		}

		async function consumeRageUse() {
			const file = app.workspace.getActiveFile();
			if (!file) throw new Error("No active file");

			ensureRageState(file);

			const entry = Object.entries(pendingState.Rage)
				.find(([_, available]) => available === true);

			if (entry) {
				const [key] = entry;
				pendingState.Rage[key] = false;
				markDirty();
				refreshResourceToggles();
				return;
			}

			new Notice("No Rage uses remaining!", 3000);
			throw new Error("No Rage uses left");
		}

		
		
		// Helper to create a condition button
		function createConditionButton(cond) {
			const key = cond.key.toLowerCase();
			const label = cond.label;

			const btn = document.createElement("button");
			btn.textContent = label;
			btn.dataset.conditionKey = key;

			const currentVal = !!pendingState.conditions[key];

			// Initial visual state
			btn.classList.toggle("is-active", currentVal);

			btn.onclick = async () => {
				pendingState.conditions ??= structuredClone(c.conditions ?? {});
				const conditions = pendingState.conditions;

				const current = !!conditions[key];
				const next = !current;

				// === RAGE SPECIAL HANDLING ===
				if (key === "rage" && next) {
					try {
						await consumeRageUse();
					} catch {
						return;
					}
				}

				// === CONCENTRATION CLEANUP ===
				if (key === "concentration" && !next) {
				delete conditions.concentration_spell;
				}

				if (next) conditions[key] = true;
				else delete conditions[key];

				// 🔑 Single source of truth for visuals
				btn.classList.toggle("is-active", next);

				markDirty();
				syncAfterConditionChange();
			};

			return btn;
		}

		
		// Render boolean condition buttons
		booleanConditions.forEach(cond => {
			if (cond.requires === "barbarian" && !hasBarbarian) return;
			buttonContainer.appendChild(createConditionButton(cond));
		});
		
		// === EXHAUSTION ===
		const exContainer = document.createElement("div");
		exContainer.style.display = "flex";
		exContainer.style.alignItems = "center";
		exContainer.style.gap = "0.3rem";

		const exButton = document.createElement("button");
		exButton.textContent = "Exhaustion";
		exButton.dataset.conditionKey = "exhaustion";
		exButton.style.flex = "1";

		const exInc = document.createElement("button");
		exInc.textContent = "+";

		const exDec = document.createElement("button");
		exDec.textContent = "-";

		const isActive =
			pendingState.conditions?.exhaustion?.Level === true &&
			(pendingState.conditions.exhaustion.count ?? 0) > 0;
		
		exButton.classList.toggle("is-active", isActive);

		// === Helpers ===
		async function toggleExhaustion() {
		pendingState.conditions ??= {};
		pendingState.conditions.exhaustion ??= { count: 0, Level: false };

		if (pendingState.conditions.exhaustion.Level) {
			pendingState.conditions.exhaustion.count = 0;
			pendingState.conditions.exhaustion.Level = false;
		} else {
			pendingState.conditions.exhaustion.count = 1;
			pendingState.conditions.exhaustion.Level = true;
		}

		markDirty();
		syncAfterConditionChange(); // 🔑 unified path
		}

		async function changeExhaustion(delta) {
		pendingState.conditions ??= {};
		pendingState.conditions.exhaustion ??= { count: 0, Level: false };

		let count = pendingState.conditions.exhaustion.count ?? 0;
		count += delta;

		if (count <= 0) {
			pendingState.conditions.exhaustion.count = 0;
			pendingState.conditions.exhaustion.Level = false;
		} else {
			pendingState.conditions.exhaustion.count = count;
			pendingState.conditions.exhaustion.Level = true;
		}

		markDirty();
		syncAfterConditionChange(); // 🔑 unified path
		}

		// === Attach events ===
		exButton.onclick = toggleExhaustion;
		exInc.onclick = () => changeExhaustion(1);
		exDec.onclick = () => changeExhaustion(-1);

		exContainer.appendChild(exButton);
		exContainer.appendChild(exInc);
		exContainer.appendChild(exDec);
		buttonContainer.appendChild(exContainer);


		// Mark panel as rendered (non-fatal)
		try { panel.dataset.conditionsRendered = "true"; } catch (e) {}
		console.log("conditions panel childCount:", panel.childElementCount, "panel innerHTML length:", panel.innerHTML?.length);
		try {
			if (!startup.initializing) {
				const cs2 = window.getComputedStyle(panel);
				console.log("conditions panel active class:", panel.classList.contains('active'), "display:", cs2.display, "visibility:", cs2.visibility, "opacity:", cs2.opacity);
			}
		} catch (e) {}
		try {
			const outerC = tabContainer.querySelector('#conditions');
			const btnC = tabContainer.querySelector('#tab-conditions');
			console.log("conditions outer active:", outerC?.classList.contains('active'), "tab-button active:", btnC?.classList.contains('active'));
		} catch (e) {}

	} catch (e) {
		console.error("Conditions Tab Failed:", e);
		dv.paragraph("⚠ Conditions failed to load. Check console.");
	}
})();



// ======================================================================================
//==============================================================   Bastions Container Tab
// ======================================================================================

console.log("Rendering TAB: Bastions");

(async function renderBastionsTab() {
  try {
    await waitForElement("#bastions .panel");

    const bastionTab = tabContainer.querySelector("#bastions");
    if (!bastionTab) return console.error("Bastions tab not found");

    const bastionPanel = bastionTab.querySelector(".panel");
    if (!bastionPanel) return console.error("Bastions panel not found");

    // Clear panel if rerendered
    bastionPanel.innerHTML = "";


    const page = dv.current();

		// Initialize bastion in pendingState from frontmatter if not already present
		pendingState.bastion = pendingState.bastion || structuredClone(page.Bastion ?? {
			name: "",
			current_day: 0,
			defenders: 0,
			facilities: []
		});

		const bastion = pendingState.bastion;
    

	/* ---------------------------
       Helpers
    ----------------------------*/

	const FACILITY_SIZE_ORDER = ["cramped", "roomy", "vast"];

	const BASIC_FACILITY_TYPES = [
		"Bedroom",
		"Dining Room",
		"Parlor",
		"Courtyard",
		"Kitchen",
		"Storage"
	];

	function countBasicBySize(bastion, size) {
		return (bastion.facilities ?? []).filter(f =>
			f.type === "basic" &&
			f.size === size
		).length;
	}

	function getNextFacilitySize(size) {
		const idx = FACILITY_SIZE_ORDER.indexOf(size);
		if (idx === -1 || idx === FACILITY_SIZE_ORDER.length - 1) return null;
		return FACILITY_SIZE_ORDER[idx + 1];
	}

	async function upgradeFacilitySize(facilityName) {
		const facility = (pendingState.bastion.facilities || []).find(f => f.name === facilityName);
		if (!facility) return;

		const nextSize = getNextFacilitySize(facility.size);
		if (!nextSize) return;

		facility.size = nextSize;

		markDirty();
		new Notice(`${facility.name} upgraded to ${nextSize}`);
		renderBastionsTab();
	}

	function getMaxDefenders(bastion) {
		const barracks = (bastion.facilities ?? []).filter(f =>
			f.name === "Barrack" && f.status === "operational"
		);

		return barracks.reduce((sum, b) => {
			const size = (b.size ?? "").toLowerCase();

			switch (size) {
				case "vast":
					return sum + 25;
				case "roomy":
					return sum + 12;
				default:
					return sum; // cramped or invalid
			}
		}, 0);
	}

	async function createBasicFacility(name, size) {
		pendingState.bastion = pendingState.bastion || { name: '', current_day: 0, defenders: 0, facilities: [] };
		pendingState.bastion.facilities = pendingState.bastion.facilities || [];
		pendingState.bastion.facilities.push({ name, type: 'basic', size, status: 'operational', hirelings: 0 });
		markDirty();
	}


	function showCreateBasicFacilityModal() {
		const bastion = pendingState.bastion || dv.current().Bastion;
		if (!bastion) return;

		const crampedExists = countBasicBySize(bastion, "cramped") >= 1;
		const roomyExists = countBasicBySize(bastion, "roomy") >= 1;

		// Overlay
		const overlay = document.createElement("div");
		Object.assign(overlay.style, {
			position: "fixed",
			inset: 0,
			background: "rgba(0,0,0,0.5)",
			zIndex: 9999,
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		});

		const box = document.createElement("div");
		Object.assign(box.style, {
			background: "var(--background-secondary)",
			color: "var(--text)",
			padding: "12px",
			borderRadius: "6px",
			minWidth: "320px"
		});

		box.appendChild(Object.assign(document.createElement("h4"), {
			textContent: "Create Basic Facility"
		}));

		/* ---------- Type Picker ---------- */

		const typeLabel = document.createElement("div");
		typeLabel.textContent = "Facility Type";
		typeLabel.style.marginTop = "8px";
		box.appendChild(typeLabel);

		const typeSelect = document.createElement("select");
		BASIC_FACILITY_TYPES.forEach(t => {
			const opt = document.createElement("option");
			opt.value = t;
			opt.textContent = t;
			typeSelect.appendChild(opt);
		});
		box.appendChild(typeSelect);

		/* ---------- Size Picker ---------- */

		const sizeLabel = document.createElement("div");
		sizeLabel.textContent = "Facility Size";
		sizeLabel.style.marginTop = "12px";
		box.appendChild(sizeLabel);

		let selectedSize = null;

		const sizeRow = document.createElement("div");
		sizeRow.style.display = "flex";
		sizeRow.style.gap = "8px";
		sizeRow.style.marginTop = "6px";

		function makeSizeButton(size, disabled) {
			const btn = document.createElement("button");
			btn.textContent = size[0].toUpperCase() + size.slice(1);
			btn.disabled = disabled;

			btn.onclick = () => {
			selectedSize = size;
			[...sizeRow.children].forEach(b => b.classList.remove("mod-cta"));
			btn.classList.add("mod-cta");
			};

			return btn;
		}

		sizeRow.appendChild(makeSizeButton("cramped", crampedExists));
		sizeRow.appendChild(makeSizeButton("roomy", roomyExists));

		box.appendChild(sizeRow);

		/* ---------- Buttons ---------- */

		const btnRow = document.createElement("div");
		btnRow.style.display = "flex";
		btnRow.style.justifyContent = "flex-end";
		btnRow.style.gap = "8px";
		btnRow.style.marginTop = "12px";

		const cancel = document.createElement("button");
		cancel.textContent = "Cancel";
		cancel.onclick = () => overlay.remove();

		const confirm = document.createElement("button");
		confirm.textContent = "Create";
		confirm.classList.add("mod-cta");

		confirm.onclick = async () => {
			if (!selectedSize) return;

			await createBasicFacility(typeSelect.value, selectedSize);
			overlay.remove();
			renderBastionsTab();
		};

		btnRow.appendChild(cancel);
		btnRow.appendChild(confirm);
		box.appendChild(btnRow);

		overlay.appendChild(box);
		document.body.appendChild(overlay);
	}


	function showNumberPicker({ title, confirmText = "Confirm", onConfirm }) {
		const overlay = document.createElement("div");
		overlay.style.position = "fixed";
		overlay.style.left = 0;
		overlay.style.top = 0;
		overlay.style.right = 0;
		overlay.style.bottom = 0;
		overlay.style.background = "rgba(0,0,0,0.5)";
		overlay.style.zIndex = 9999;
		overlay.style.display = "flex";
		overlay.style.alignItems = "center";
		overlay.style.justifyContent = "center";

		const box = document.createElement("div");
		box.style.background = "var(--background-secondary)";
		box.style.color = "var(--text)";
		box.style.padding = "12px";
		box.style.borderRadius = "6px";
		box.style.minWidth = "280px";

		const titleEl = document.createElement("div");
		titleEl.textContent = title;
		titleEl.style.marginBottom = "8px";
		box.appendChild(titleEl);

		const input = document.createElement("input");
		input.type = "number";
		input.min = "0";
		input.step = "1";
		input.style.width = "100%";
		input.style.marginBottom = "10px";
		input.focus();
		box.appendChild(input);

		const btnRow = document.createElement("div");
		btnRow.style.display = "flex";
		btnRow.style.justifyContent = "space-between";

		const confirm = document.createElement("button");
		confirm.textContent = confirmText;
		confirm.className = "mod-cta";

		const cancel = document.createElement("button");
		cancel.textContent = "Cancel";

		confirm.onclick = () => {
			const val = Number(input.value);
			if (!Number.isNaN(val)) {
				overlay.remove();
				onConfirm(val);
			}
		};

		cancel.onclick = () => overlay.remove();

		btnRow.appendChild(confirm);
		btnRow.appendChild(cancel);
		box.appendChild(btnRow);

		overlay.appendChild(box);
		document.body.appendChild(overlay);
	}


	async function resolveBastionAttack(losses) {
		pendingState.bastion.defenders = Math.max((pendingState.bastion.defenders ?? 0) - losses, 0);
		pendingState.bastion.defenders = Math.min(pendingState.bastion.defenders, getMaxDefenders(pendingState.bastion));

		if (pendingState.bastion.defenders === 0) {
			(pendingState.bastion.facilities || []).forEach(f => { f.status = 'inactive'; });
		}

		markDirty();
		new Notice(`Bastion attacked! ${losses} defenders lost.`);
		renderBastionsTab();
	}

	async function toggleFacilityStatus(facilityName) {
		const facility = (pendingState.bastion.facilities || []).find(f => f.name === facilityName);
		if (!facility) return;

		if (facility.status === 'inactive') {
			facility.status = 'operational';
		} else {
			facility.status = 'inactive';
			facility.order = 'None';
			delete facility.order_started_day;
			delete facility.order_duration;
			delete facility.order_result;
		}

		markDirty();
		renderBastionsTab();
	}


	const ORDER_OPTIONS = {
		"Arcane Study": {
			"Craft: Blank Book": {
			duration: 7,
			result: "A blank book is carefully prepared and ready for use."
			},
			"Craft: Arcane Focus": {
			duration: 7,
			result: "An Arcane Focus has been crafted and is ready to pick up."
			},
			"Craft: Common Magic Item": {
			duration: 5,
			result: "A common magic item has been created. It cost 50 gp to make."
			},
			"Craft: Uncommon Magic Item": {
			duration: 10,
			result: "An uncommon magic item has been created. It cost 200 gp to make."
			}
		},

		"Archive": {
			"Research Helpful Lore": {
			duration: 7,
			result: "Valuable information is uncovered within the archives."
			},
			"Reference Book": {
			duration: 1,
			result: "A reference book is created for future use."
			}
		},

		"Armory": {
			"Trade: Stock Armory": {
			duration: 7,
			result: "The armory is restocked with common weapons and armor."
			}
		},

		"Barrack": {
			"Recruit Bastion Defenders": {
			duration: 7,
			result: "Four new defenders have been recruited to protect the bastion."
			}
		},

		"Demiplane": {
			"Empower: Arcane Resilience": {
			duration: 7,
			result: "You gain temporary hit points equal to 5 × your character level."
			},
			"Fabricate: Common Item": {
			duration: 1,
			result: "A common item of your choice has been created within the demiplane."
			}
		},

		"Gaming Hall": {
			"Trade: Gambling Hall": {
			duration: 7,
			result: "Roll 1d100 to determine earnings from the gambling hall."
			}
		},

		"Garden": {
			"Harvest Garden Growth": {
			duration: 7,
			result: "You harvest useful herbs and plants from the garden."
			}
		},

		"Greenhouse": {
			"Fruit of Restoration": {
			duration: 1,
			result: "You harvest up to three fruits that grant the effects of Lesser Restoration when consumed."
			},
			"Harvest Healing Herbs": {
			duration: 7,
			result: "Hirelings create a greater Potion of Healing from harvested herbs."
			},
			"Harvest Poison": {
			duration: 7,
			result: "Hirelings create a basic poison from toxic plants."
			}
		},

		"Guildhall": {
			"Recruit Guild Assignment": {
			duration: 5,
			result: "A new guild assignment has been recruited to the bastion."
			}
		},

		"Laboratory": {
			"Craft: Alchemist's Supplies": {
			duration: 3,
			result: "An item made using alchemist's supplies has been created."
			},
			"Craft: Potion": {
			duration: 5,
			result: "A potion (Burnt Othur Fumes, Essence of Ether, or Torpor) has been created."
			}
		},

		"Library": {
			"Research: Topical Lore": {
			duration: 7,
			result: "Valuable information is uncovered within the library."
			}
		},

		"Meditation Chamber": {
			"Empower: Inner Peace": {
			duration: 1,
			result: "You have gained inner peace, granting advantage on the next Bastion Event roll."
			},
			"Fortify Self": {
			duration: 7,
			result: "Roll twice on the Saving Throws table. You gain advantage on determined saving throws for 7 days."
			}
		},

		"Menagerie": {
			"Recruit Creature": {
			duration: 7,
			result: "Hirelings recruit a creature to add to the menagerie. It is counted as a bastion defender."
			}
		},

		"Observatory": {
			"Empower: Eldritch Discovery": {
			duration: 7,
			result: "Roll to see if you gain a charm. On an odd, gain one of the following: Charm of Darkvision, Charm of Heroism, or Charm of Vitality."
			}
		},

		"Pub": {
			"Research: Information Gathering": {
			duration: 7,
			result: "Your spies can gain valuable information regarding local creatures."
			}
		},

		"Reliquary": {
			"Harvest Talisman": {
			duration: 7,
			result: "A talisman has been created that can be used in place of material components for one spell."
			}
		},

		"Sarcristy": {
			"Craft: Holy Water": {
			duration: 7,
			result: "Holy water has been created."
			},
			"Craft: Magic Item (Relic)": {
			duration: 14,
			result: "A relic magic item has been created. It cost 500 gp to make."
			}
		},

		"Sanctuary": {
			"Craft: Sacred Focus": {
			duration: 7,
			result: "A sacred focus has been created."
			}
		},

		"Sanctum": {
			"Empower: Fortifying Rites": {
			duration: 7,
			result: "You gain temporary hit points equal to your level"
			},
			"Sanctum Recall": {
			duration: 1,
			result: "Your sanctum can be used as the destination for Word of Recall."
			}
		},

		"Scriptorium": {
			"Craft: Book Replica": {
			duration: 7,
			result: "A replica of a non-magical book has been created."
			},
			"Craft: Spell Scroll": {
			duration: 10,
			result: "A spell scroll of level 3 or lower has been created."
			},
			"Craft: Paperwork": {
			duration: 7,
			result: "Up to 50 copies of broadsheet, pamphlet, or similar paperwork have been created."
			}
		},

		"Smithy": {
			"Craft: Smith Tools": {
			duration: 3,
			result: "An item made using smith's tools has been created."
			},
			"Craft: Magic Item": {
			duration: 10,
			result: "A common or uncommon magic item has been created."
			}
		},

		"Stable": {
			"Trade: Animals": {
			duration: 7,
			result: "A mount has been recruited to the stable."
			}
		},

		"Storehouse": {
			"Trade: Goods": {
			duration: 7,
			result: "Supplies have been stockpiled in the storehouse."
			}
		},

		"Teleportation Circle": {
			"Recruit Spellcaster": {
			duration: 1,
			result: "Roll a die. On an even, you recruit a Friendly NPC spellcaster that can cast an 8th-level spell."
			}
		},

		"Theater": {
			"Host Performance": {
			duration: 7,
			result: "A performance has been hosted in the theater."
			}
		},

		"Training Area": {
			"Train Bastion Defenders": {
			duration: 7,
			result: "Bastion defenders are trained in combat."
			}
		},

		"Trophy Room": {
			"Research: Lore": {
			duration: 7,
			result: "Hirelings uncover valuable lore about a specific topic."
			},
			"Research: Trinket Trophy": {
			duration: 7,
			result: "Roll a die. On an even, a magic item is discovered (Common Implement)."
			}
		},

		"War Room": {
			"Recruit: Lieutenant": {
			duration: 7,
			result: "You recruit a lieutenant to help manage bastion defenses."
			},
			"Recruit: Soldiers": {
			duration: 3,
			result: "Your Lieutenant's have gathered an army."
			}
		},

		"Workshop": {
			"Craft: Adventuring Gear": {
			duration: 7,
			result: "A replica of a set of artisan's tools has been created."
			},
			"Craft: Magic Item": {
			duration: 10,
			result: "A common or uncommon magic item has been created."
			}
		}
	};

	const SPECIAL_FACILITIES = {
		"Arcane Study": {
			minLevel: 5,
			size: "roomy",
			hirelings: 1,
			repeatable: false
		},
		"Armory": {
			minLevel: 5,
			size: "roomy",
			hirelings: 1,
			repeatable: false
		},
		"Barrack": {
			minLevel: 5,
			size: "roomy",
			hirelings: 1,
			repeatable: true
		},
		"Garden": {
			minLevel: 5,
			size: "roomy",
			hirelings: 1,
			repeatable: true
		},
		"Library": {
			minLevel: 5,
			size: "roomy",
			hirelings: 1,
			repeatable: false
		},
		"Sanctuary": {
			minLevel: 5,
			size: "roomy",
			hirelings: 1,
			repeatable: false
		},
		"Smithy": {
			minLevel: 5,
			size: "roomy",
			hirelings: 2,
			repeatable: false
		},
		"Storehouse": {
			minLevel: 5,
			size: "roomy",
			hirelings: 1,
			repeatable: false
		},
		"Workshop": {
			minLevel: 5,
			size: "roomy",
			hirelings: 3,
			repeatable: false
		},
		"Gaming Hall": {
			minLevel: 9,
			size: "vast",
			hirelings: 4,
			repeatable: false
		},
		"Greenhouse": {
			minLevel: 9,
			size: "roomy",
			hirelings: 1,
			repeatable: false
		},
		"Laboratory": {
			minLevel: 9,
			size: "roomy",
			hirelings: 1,
			repeatable: false
		},
		"Sacristy": {
			minLevel: 9,
			size: "roomy",
			hirelings: 1,
			repeatable: false
		},
		"Scriptorium": {
			minLevel: 9,
			size: "roomy",
			hirelings: 1,
			repeatable: false
		},
		"Stable": {
			minLevel: 9,
			size: "roomy",
			hirelings: 1,
			repeatable: true
		},
		"Teleportation Circle": {
			minLevel: 9,
			size: "roomy",
			hirelings: 1,
			repeatable: false
		},
		"Theater": {
			minLevel: 9,
			size: "vast",
			hirelings: 4,
			repeatable: false
		},
		"Training Area": {
			minLevel: 9,
			size: "vast",
			hirelings: 4,
			repeatable: true
		},
		"Trophy Room": {
			minLevel: 9,
			size: "roomy",
			hirelings: 1,
			repeatable: false
		},
		"Archive": {
			minLevel: 13,
			size: "roomy",
			hirelings: 1,
			repeatable: false
		},
		"Meditation Chamber": {
			minLevel: 13,
			size: "cramped",
			hirelings: 1,
			repeatable: false
		},
		"Menagerie": {
			minLevel: 13,
			size: "vast",
			hirelings: 2,
			repeatable: false
		},
		"Observatory": {
			minLevel: 13,
			size: "roomy",
			hirelings: 1,
			repeatable: false
		},
		"Pub": {
			minLevel: 13,
			size: "roomy",
			hirelings: 1,
			repeatable: false
		},
		"Reliquary": {
			minLevel: 13,
			size: "cramped",
			hirelings: 1,
			repeatable: false
		},

		"Demiplane": {
			minLevel: 17,
			size: "vast",
			hirelings: 1,
			repeatable: false
		},
		"Guildhall": {
			minLevel: 17,
			size: "vast",
			hirelings: 1,
			repeatable: false
		},
		"Sanctum": {
			minLevel: 17,
			size: "roomy",
			hirelings: 4,
			repeatable: false
		},
		"War Room": {
			minLevel: 17,
			size: "vast",
			hirelings: 2,
			repeatable: false
		}
	};

	const characterLevel = page.Level ?? 0;
		const existing = new Set((bastion.facilities ?? []).map(f => f.name));

		const availableSpecialFacilities = Object.entries(SPECIAL_FACILITIES)
		.filter(([name, def]) =>
			def.minLevel <= characterLevel &&
			!existing.has(name)
	);

	async function createSpecialFacility(name) {
		const def = SPECIAL_FACILITIES[name];
		if (!def) return;

		pendingState.bastion.facilities = pendingState.bastion.facilities || [];
		pendingState.bastion.facilities.push({ name, type: 'special', size: def.size, hirelings: def.hirelings, order: 'None', status: 'operational' });
		markDirty();
	}




	async function setFacilityOrder(facilityName, order) {
		const facility = (pendingState.bastion.facilities || []).find(f => f.name === facilityName);
		if (!facility) return;

		const orderDef = ORDER_OPTIONS[facility.name]?.[order];
		if (!orderDef) return;

		facility.order = order;
		facility.order_started_day = pendingState.bastion.current_day ?? 1;
		facility.order_duration = orderDef.duration;
		facility.order_result = orderDef.result;

		markDirty();
	}
	

	async function completeOrder(facilityName) {
		const facility = (pendingState.bastion.facilities || []).find(f => f.name === facilityName);
		if (!facility) return;

		// --- Apply order effects ---
		if (facility.name === 'Barrack' && facility.order === 'Recruit Bastion Defenders') {
			const maxDefenders = getMaxDefenders(pendingState.bastion);
			pendingState.bastion.defenders = Math.min((pendingState.bastion.defenders ?? 0) + 4, maxDefenders);
		}

		facility.last_result = 'Completed';
		facility.last_result_note = facility.order_result;

		facility.order = 'None';
		delete facility.order_started_day;
		delete facility.order_duration;
		delete facility.order_result;

		markDirty();
		new Notice(`${facility.name}: Order completed`);
		renderBastionsTab();
	}

	function getRemainingDays(facility, currentDay) {
		if (!facility.order_started_day || !facility.order_duration) return null;
		return (facility.order_started_day + facility.order_duration) - currentDay;
	}

	function isOrderComplete(facility, currentDay) {
		const remaining = getRemainingDays(facility, currentDay);
		return remaining !== null && remaining <= 0;
	}


	function facilityToNotePath(name) {
		const slug = name.toLowerCase().replace(/\s+/g, "-");
		return `${BASTIONS_FOLDER}/${slug}.md`;
	}

	function createFacilityLink(parentEl, facilityName) {
		const path = facilityToNotePath(facilityName);

		const link = parentEl.createEl("a", {
			text: "details…",
			cls: "internal-link facility-details-link"
		});

		link.setAttr("data-href", path);
		link.setAttr("href", path);

		return link;
	}

	async function advanceBastionTime(days) {
		pendingState.bastion.current_day = (pendingState.bastion.current_day ?? 1) + days;
		markDirty();
		renderBastionsTab();
	}

	function showBastionNamePicker(onConfirm) {
		const overlay = document.createElement("div");
		overlay.style.position = "fixed";
		overlay.style.inset = 0;
		overlay.style.background = "rgba(0,0,0,0.5)";
		overlay.style.zIndex = 9999;
		overlay.style.display = "flex";
		overlay.style.alignItems = "center";
		overlay.style.justifyContent = "center";

		const box = document.createElement("div");
		box.style.background = "var(--background-secondary)";
		box.style.color = "var(--text)";
		box.style.padding = "12px";
		box.style.borderRadius = "6px";
		box.style.minWidth = "300px";

		const title = document.createElement("div");
		title.textContent = "Name Your Bastion";
		title.style.marginBottom = "8px";
		box.appendChild(title);

		const input = document.createElement("input");
		input.type = "text";
		input.placeholder = "Bastion Name";
		input.style.width = "100%";
		input.style.marginBottom = "10px";
		input.focus();
		box.appendChild(input);

		const row = document.createElement("div");
		row.style.display = "flex";
		row.style.justifyContent = "space-between";

		const create = document.createElement("button");
		create.textContent = "Create";
		create.className = "mod-cta";

		const cancel = document.createElement("button");
		cancel.textContent = "Cancel";

		create.onclick = () => {
			const name = input.value.trim();
			if (!name) return;
			overlay.remove();
			onConfirm(name);
		};

		cancel.onclick = () => overlay.remove();

		row.appendChild(create);
		row.appendChild(cancel);
		box.appendChild(row);

		overlay.appendChild(box);
		document.body.appendChild(overlay);
	}

	function capitalize(word) {
		return word ? word.charAt(0).toUpperCase() + word.slice(1) : "";
	}

    /* ---------------------------
       Bastion Overview Card
    ----------------------------*/

	//const characterLevel = page.Level ?? 0;
	
	const existingFacilities = (bastion.facilities ?? []);

	const eligibleSpecialFacilities = Object.entries(SPECIAL_FACILITIES)
		.filter(([name, def]) => {
			if (def.minLevel > characterLevel) return false;

			if (!def.repeatable) {
				return !existingFacilities.some(f => f.name === name);
			}

			return true; // repeatable facilities always allowed
		});

	if (!(page.Bastion || (pendingState.bastion && pendingState.bastion.name))) {
		const card = bastionPanel.createEl("div", {
			cls: "bastion-card bastion-empty"
		});

		card.createEl("h3", {
			text: "🏰 Bastion",
			cls: "phb-heading"
		});

		card.createEl("p", {
			text: "No bastion data is configured for this character."
		});

		const btn = card.createEl("button", {
			text: "Create Bastion"
		});

		if ((page.Level ?? 0) < 5) {
			btn.disabled = true;
			btn.title = "Requires level 5";
		} else {
			btn.onclick = () => {
				showBastionNamePicker(async (name) => {
					pendingState.bastion = { name, current_day: 0, defenders: 0, facilities: [] };
					markDirty();
					new Notice(`Bastion "${name}" created`);
					renderBastionsTab();
				});
			};
		}

		return; // ⛔ stop here, do not render normal bastion UI
	}

	/* ---------------------------
	Facilities Grid
	----------------------------*/

    const card = bastionPanel.createEl("div", {
      cls: "bastion-card bastion-overview"
    });

    // Heading
    card.createEl("h3", {
      text: `🏰 ${bastion.name}`,
      cls: "phb-heading"
    });

    // --- Bastion Flavor Text ---
	let flavorText = "The bastion stands quietly, its purpose yet to be fully realized.";

	const flavorPage = dv.page("z_Assets/Strings/BastionComments");
	const fm = flavorPage?.file?.frontmatter;

	if (fm?.default && Array.isArray(fm.default) && fm.default.length > 0) {
	flavorText = fm.default[Math.floor(Math.random() * fm.default.length)];
	}

	// Replace tokens
	const bastionName = dv.current()?.Bastion?.name ?? "the bastion";

	flavorText = flavorText.replaceAll("{{bastion_name}}", bastionName);
	console.log("Flavor text:", flavorText);
	card.createEl("p", {
	text: flavorText,
	cls: "bastion-flavor"
	}); 

    // --- Derived State ---
    const facilities = bastion.facilities ?? [];

    const totalFacilities = facilities.length;
	const specialFacilitiesCount = facilities.filter(f => f.type === "special").length;
	const basicFacilitiesCount = facilities.filter(f => f.type === "basic").length;
	const hirelings = facilities.reduce((sum, f) => sum + (f.hirelings ?? 0), 0);
	const defenders = bastion.defenders ?? 0;
	const maxDefenders = getMaxDefenders(bastion);

    // --- State Grid ---
    const stats = card.createEl("div", { cls: "bastion-stats-grid" });

    const stat = (label, value) => {
	const s = stats.createEl("div", { cls: "bastion-stat" });
	s.createEl("div", {
		text: String(value),
		cls: "bastion-stat-value"
	});
	s.createEl("div", {
		text: label,
		cls: "bastion-stat-label"
	});
	};

    stat("Facilities", totalFacilities);
    stat("Basic", basicFacilitiesCount);
    stat("Special", specialFacilitiesCount);
    stat("Hirelings", hirelings);
	stat("Defenders", `${defenders} / ${maxDefenders}`);

	const addBasicBtn = bastionPanel.createEl("button", {
		text: "Create Basic Facility",
		cls: "facility-btn"
	});

	addBasicBtn.addEventListener("click", showCreateBasicFacilityModal);

	const createRow = bastionPanel.createEl("div", {
		cls: "bastion-create-row"
		});

		const createBtn = createRow.createEl("button", {
		text: "➕ Create Special Facility",
		cls: "facility-btn"
		});

		createBtn.disabled = eligibleSpecialFacilities.length === 0;

		if (eligibleSpecialFacilities.length === 0) {
		createRow.createEl("div", {
			text: "No special facilities available at your current level.",
			cls: "muted"
		});
	}

	createBtn.addEventListener("click", () => {
		// Prevent duplicates
		createRow.querySelector(".facility-picker")?.remove();

		const picker = createRow.createEl("div", {
			cls: "facility-picker"
		});

		eligibleSpecialFacilities.forEach(([name, def]) => {
			const btn = picker.createEl("button", {
				text: `${name} (${def.size}, ${def.hirelings} hirelings)`,
				cls: "facility-btn small"
			});

			btn.addEventListener("click", async () => {
				await createSpecialFacility(name);
				renderBastionsTab();
			});
		});

		const cancel = picker.createEl("button", {
			text: "Cancel",
			cls: "facility-btn small muted"
		});

		cancel.addEventListener("click", () => picker.remove());
	});


	// Split facilities
	const specialFacilities = facilities.filter(f => f.type === "special");
	const basicFacilities = facilities.filter(f => f.type === "basic");

	/* ---------- Special Facilities ---------- */

	if (specialFacilities.length > 0) {
	const specialSection = bastionPanel.createEl("div", {
		cls: "bastion-section"
	});

	specialSection.createEl("h4", {
		text: "Special Facilities",
		cls: "phb-heading"
	});

	const grid = specialSection.createEl("div", {
		cls: "facility-grid special"
	});

	specialFacilities.forEach(f => {
		const card = grid.createEl("div", {
			cls: "facility-card special"
		});

		// Header
		card.createEl("h5", {
			text: f.name,
			cls: "facility-name"
		});

		const linkRow = card.createEl("div", { cls: "facility-links" });
		createFacilityLink(linkRow, f.name);

		// Meta
		const meta = card.createEl("div", { cls: "facility-meta" });
		meta.createEl("span", { text: `Space: ${capitalize(f.size)}` });
		meta.createEl("span", { text: `Level: ${characterLevel}` });
		meta.createEl("span", { text: `Hirelings: ${f.hirelings ?? 0}` });
		
		const statusRow = card.createEl("div", {
			cls: "facility-status-row"
		});
		statusRow.createEl("span", {
			text: `Status: ${f.status}`,
			cls: f.status === "inactive" ? "status inactive" : "status operational"
		});

		// Upgrade button
		const nextSize = getNextFacilitySize(f.size);

		if (nextSize) {
			const upgradeBtn = card.createEl("button", {
				text: `Upgrade to ${nextSize}`,
				cls: "facility-btn small"
			});

			upgradeBtn.addEventListener("click", async () => {
				await upgradeFacilitySize(f.name);
			});
		} else {
			card.createEl("div", {
				text: "Facility fully upgraded",
				cls: "muted"
			});
		}

		// Order display
		let orderLine = "Idle";

		if (f.order && f.order !== "None") {
			const remaining = getRemainingDays(f, bastion.current_day ?? 1);

			orderLine = remaining > 0
				? `${f.order} — completes in ${remaining} day${remaining === 1 ? "" : "s"}`
				: `${f.order} — ready to complete`;
		}

		card.createEl("div", {
			text: `Order: ${orderLine}`,
			cls: "facility-order"
		});

		if (f.last_result) {
			card.createEl("div", {
				text: `${f.last_result}: ${f.last_result_note}`,
				cls: "facility-result"
			});
		}


		if (f.status === "operational") {
			const btn = card.createEl("button", {
				text: "Assign Order",
				cls: "facility-btn assign-order"
			});

			btn.addEventListener("click", () => {
				card.querySelector(".order-picker")?.remove();

				const picker = card.createEl("div", { cls: "order-picker" });
				const options = Object.keys(ORDER_OPTIONS[f.name] ?? {});

				options.forEach(opt => {
					const optBtn = picker.createEl("button", {
						text: opt,
						cls: "facility-btn small"
					});

					optBtn.addEventListener("click", async () => {
						await setFacilityOrder(f.name, opt);
						renderBastionsTab();
					});
				});

				const cancel = picker.createEl("button", {
					text: "Cancel",
					cls: "facility-btn small muted"
				});

				cancel.addEventListener("click", () => picker.remove());
			});
		} else {
			card.createEl("div", {
				text: "Facility inactive — cannot issue orders this turn.",
				cls: "muted"
			});
		}

		


		const toggleBtn = statusRow.createEl("button", {
			text: f.status === "inactive" ? "Repair Facility" : "Shut Down",
			cls: "facility-btn small"
		});

		toggleBtn.addEventListener("click", async () => {
			await toggleFacilityStatus(f.name);
		});

		if (f.status === "inactive") {
			card.classList.add("inactive");
		}

	});
	}

	

	/* ---------- Basic Facilities ---------- */

	if (basicFacilities.length > 0) {
	const basicSection = bastionPanel.createEl("div", {
		cls: "bastion-section"
	});

	basicSection.createEl("h4", {
		text: "Basic Facilities",
		cls: "phb-heading muted"
	});

	const grid = basicSection.createEl("div", {
		cls: "facility-grid basic"
	});

	basicFacilities.forEach(f => {
		const card = grid.createEl("div", {
		cls: "facility-card basic"
		});

		card.createEl("div", {
		text: `${f.name} (${capitalize(f.size)})`,
		cls: "facility-name"
		});

		const linkRow = card.createEl("div", { cls: "facility-links" });
		createFacilityLink(linkRow, f.name);

		const nextSize = getNextFacilitySize(f.size);

		if (nextSize) {
			const upgradeBtn = card.createEl("button", {
				text: `Upgrade to ${nextSize}`,
				cls: "facility-btn small"
			});

			upgradeBtn.addEventListener("click", async () => {
				await upgradeFacilitySize(f.name);
			});
		} else {
			card.createEl("div", {
				text: "Facility fully upgraded",
				cls: "muted"
			});
		}
	});
	}

	/* ---------------------------
	Bastion Orders Section
	----------------------------*/

	const activeOrders = (bastion.facilities ?? []).filter(f =>
	f.type === "special" &&
	f.status === "operational" &&
	f.order &&
	f.order !== "None"
	);

	const ordersSection = bastionPanel.createEl("div", {
	cls: "bastion-section bastion-orders"
	});

	ordersSection.createEl("h4", {
	text: "Active Bastion Orders",
	cls: "phb-heading"
	});

	if (activeOrders.length === 0) {
	ordersSection.createEl("p", {
		text: "No active orders. Special facilities are currently idle.",
		cls: "muted"
	});
	} else {
	const orderList = ordersSection.createEl("div", {
		cls: "order-list"
	});

	activeOrders.forEach(f => {
		const card = orderList.createEl("div", {
		cls: "order-card"
		});

		// Facility name
		card.createEl("div", {
		text: f.name,
		cls: "order-facility"
		});

		// Order description
		card.createEl("div", {
		text: `Order: ${f.order}`,
		cls: "order-type"
		});

		// Supporting details
		const details = card.createEl("div", {
		cls: "order-meta"
		});

		details.createEl("span", {
		text: `Hirelings: ${f.hirelings ?? 0}`
		});

		details.createEl("span", {
		text: `Facility Level: ${characterLevel ?? 1}`
		});

		const remaining = getRemainingDays(f, bastion.current_day ?? 1);


	if (remaining > 0) {
		card.createEl("div", {
			text: `Completes in ${remaining} day${remaining === 1 ? "" : "s"}`,
			cls: "order-timer muted"
		});
	} else {
			const resolveBtn = card.createEl("button", {
				text: "Complete Order",
				cls: "facility-btn resolve-order"
			});

			resolveBtn.addEventListener("click", async () => {
				await completeOrder(f.name);
			});
		}
	});
	}

	/* ---------------------------
	Bastion Time Controls
	----------------------------*/

	const timeBar = bastionPanel.createEl("div", {
		cls: "bastion-time-bar"
	});

	timeBar.createEl("div", {
		text: `📅 Bastion Day ${bastion.current_day ?? 1}`,
		cls: "bastion-day-display"
	});

	const btnGroup = timeBar.createEl("div", {
		cls: "bastion-time-buttons"
	});

	const advance1 = btnGroup.createEl("button", {
		text: "+1 Day",
		cls: "facility-btn advance-time"
	});

	advance1.addEventListener("click", () => advanceBastionTime(1));

	const advance7 = btnGroup.createEl("button", {
		text: "+7 Days",
		cls: "facility-btn advance-time"
	});

	advance7.addEventListener("click", () => advanceBastionTime(7));

	const attackBtn = timeBar.createEl("button", {
		text: "Resolve Bastion Attack",
		cls: "facility-btn danger"
	});

	attackBtn.addEventListener("click", () => {
		showNumberPicker({
			title: "Defenders Lost",
			confirmText: "Resolve Attack",
			onConfirm: async (losses) => {
				await resolveBastionAttack(losses);
			}
		});
	});



  } catch (e) {
    console.error("Bastions tab failed:", e);
  }
})();


// ======================================================================================
//=============================================================         Session Notes Tab
// ======================================================================================
console.log("Rendering TAB: Session Notes");

(async function renderSessionNotesTab() {
	try {
		// Wait specifically for the Session panel
		await waitForElement("#session .panel");

		const sessionTab = tabContainer.querySelector('#session');
		if (!sessionTab) { console.error("Session tab NOT FOUND in local dashboard."); return; }

		const notePanel = sessionTab.querySelector('.panel');
		if (!notePanel) { console.error(".panel not found in session tab"); return; }

		// Idempotency: if the session scratchpad already exists and has content, skip re-render
		const existingScratch = notePanel.querySelector('.session-scratchpad');
		if (existingScratch) {
			const childCount = existingScratch.childElementCount ?? 0;
			console.log("Session existing scratchpad found. childCount=", childCount);
			if (childCount > 0) {
				console.log("Session already rendered — skipping");
				return;
			} else {
				console.log("Session scratchpad present but empty — removing and re-rendering");
				existingScratch.remove();
			}
		}

		notePanel.innerHTML = '<h3 class="phb-heading">Session Notes</h3>';
        const noteContainer = dv.el("div", "", { cls: "session-scratchpad" });

        // --- UI ELEMENTS ---
        const textarea = document.createElement("textarea");
        textarea.rows = 8;
        textarea.placeholder = "Quick notes during session...";
        textarea.style.width = "100%";
        textarea.style.marginBottom = "0.5em";
        textarea.style.resize = "vertical";
        textarea.style.padding = "0.5em";
        textarea.style.borderRadius = "8px";
        textarea.style.border = "1px solid var(--background-modifier-border)";
        textarea.style.fontFamily = "var(--font-text)";

        const saveButton = document.createElement("button");
        saveButton.textContent = "💾 Save Session Note";
        saveButton.style.padding = "0.5em 1em";
        saveButton.style.borderRadius = "8px";
        saveButton.style.border = "none";
        saveButton.style.cursor = "pointer";
        saveButton.style.backgroundColor = "var(--interactive-accent)";
        saveButton.style.color = "var(--text-on-accent)";

        const status = document.createElement("div");
        status.style.marginTop = "0.5em";
        status.style.fontSize = "0.9em";
        status.style.opacity = "0.8";

        noteContainer.appendChild(textarea);
        noteContainer.appendChild(saveButton);
        noteContainer.appendChild(status);
		notePanel.appendChild(noteContainer);
		try { notePanel.dataset.sessionRendered = "true"; } catch (e) {}
		console.log("session panel childCount:", notePanel.childElementCount, "panel innerHTML length:", notePanel.innerHTML?.length);
		try {
			if (!startup.initializing) {
				const cs3 = window.getComputedStyle(notePanel);
				console.log("session panel active class:", notePanel.classList.contains('active'), "display:", cs3.display, "visibility:", cs3.visibility, "opacity:", cs3.opacity);
			}
		} catch (e) {}
		try {
			const outerS = tabContainer.querySelector('#session');
			const btnS = tabContainer.querySelector('#tab-session');
			console.log("session outer active:", outerS?.classList.contains('active'), "tab-button active:", btnS?.classList.contains('active'));
			console.log('session global selector equals local?', document.querySelector('#session') === outerS);
		} catch (e) {}

        // --- TRACKING ---
        let dirty = false;       // Has user typed since last save?
        textarea.addEventListener("input", () => dirty = true);

        // --- SAVE LOGIC ---
        async function saveNote() {
            if (!dirty) return; // nothing to save
            
            const text = textarea.value.trim();
            if (!text) { status.textContent = "✏️ Nothing to save."; return; }

            status.textContent = "💾 Saving...";

            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, "0");
            const day = String(now.getDate()).padStart(2, "0");

            const filename = `SessionNotes-${year}-${month}-${day}.md`;

            const currentFile = app.workspace.getActiveFile();
            const currentFolder = currentFile?.parent?.path ?? "${BASE_FOLDER}$SessionNotes";
            const filePath = `${currentFolder}/${filename}`;

            const header =
                `# Session Notes\n` +
                `> Created: ${now.toLocaleString()}\n` +
                `> Character: [[${currentFile?.basename}]]\n\n`;

            const content = `${header}${text}\n`;

            try {
                let file = app.vault.getAbstractFileByPath(filePath);

                if (file) {
                    const existing = await app.vault.read(file);
                    await app.vault.modify(file, existing + "\n\n" + content);
                } else {
                    await app.vault.create(filePath, content);
                }

                status.textContent = `✅ Auto-saved`;
                dirty = false; // reset dirty flag
                textarea.dataset.lastSaved = text;

            } catch (err) {
                console.error(err);
                status.textContent = "❌ Error saving note";
            }
        }

        // --- AUTO-SAVE EVERY 30 SECONDS ---
        setInterval(saveNote, 30_000);

        // --- SAVE BUTTON ---
        saveButton.onclick = saveNote;

        // --- SAVE ON TAB OR NOTE CHANGE ---
        const unregisterLE = app.workspace.on("layout-change", saveNote);
        const unregisterAF = app.workspace.on("active-leaf-change", saveNote);

        // Optional: clean up event listeners when the tab unloads
        window.addEventListener("beforeunload", saveNote);

    } catch (e) {
        console.error("Session Notes Tab Failed:", e);
        dv.paragraph("⚠ Session Notes failed to load. Check console.");
    }
})();



// force save before closing note

// function isHoverPreviewLeaf(leaf) {
// 	if (!leaf?.parent?.containerEl) return false;

// 	return leaf.parent.containerEl.classList.contains("popover");
// }

// async function confirmSave(title, message) {
//   return new Promise(resolve => {
//     // Overlay
//     const overlay = document.createElement("div");
//     overlay.style = `
//       position: fixed;
//       top: 0; left: 0;
//       width: 100%; height: 100%;
//       background: rgba(0,0,0,0.5);
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       z-index: 9999;
//     `;

//     // Modal box
//     const box = document.createElement("div");
//     box.style = `
//       background: white; 
//       padding: 1rem 2rem; 
//       border-radius: 8px;
//       max-width: 400px;
//       text-align: center;
//     `;

//     const h2 = document.createElement("h2");
//     h2.textContent = title;

//     const p = document.createElement("p");
//     p.textContent = message;

//     const btnWrap = document.createElement("div");
//     btnWrap.style = "margin-top: 1rem; display: flex; justify-content: space-around;";

//     const yesBtn = document.createElement("button");
//     yesBtn.textContent = "Save";
//     yesBtn.onclick = () => {
//       document.body.removeChild(overlay);
//       resolve(true);
//     };

//     const noBtn = document.createElement("button");
//     noBtn.textContent = "Continue Without Saving";
//     noBtn.onclick = () => {
//       document.body.removeChild(overlay);
//       resolve(false);
//     };

//     btnWrap.appendChild(yesBtn);
//     btnWrap.appendChild(noBtn);

//     box.appendChild(h2);
//     box.appendChild(p);
//     box.appendChild(btnWrap);
//     overlay.appendChild(box);
//     document.body.appendChild(overlay);
//   });
// }



// let ignoreNextLeafChange = false;
// let pendingLeavePrompt = false;
// let lastActiveLeaf = app.workspace.activeLeaf;
// let isHandlingLeave = false;
// let queuedLeaf = null;
// let lastFile = app.workspace.getActiveFile();

// // listen for leaf changes

// app.workspace.on("active-leaf-change", async (nextLeaf) => {
// 	try {
// 		if (isHandlingLeave) return;

// 		// Obsidian can pass null when closing the last leaf
// 		if (!nextLeaf) {
// 			lastActiveLeaf = null;
// 			return;
// 		}

// 		const previousLeaf = lastActiveLeaf;
// 		lastActiveLeaf = nextLeaf;

// 		// Ignore hover previews
// 		if (nextLeaf.parent?.containerEl?.classList?.contains("popover")) return;

// 		if (!isDirty) return;

// 		isHandlingLeave = true;
// 		queuedLeaf = nextLeaf;

// 		// Snap back immediately
// 		if (previousLeaf) {
// 			app.workspace.setActiveLeaf(previousLeaf, { focus: false });
// 		}

// 		const choice = await confirmSave(
// 			"Unsaved Changes",
// 			"You have unsaved changes. Save before leaving?"
// 		);

// 		if (choice === true) {
// 			await commitPendingChanges();
// 		}

// 		// Resume navigation
// 		if (queuedLeaf) {
// 			app.workspace.setActiveLeaf(queuedLeaf, { focus: true });
// 		}

// 	} catch (err) {
// 		console.error("Save-before-leave error:", err);
// 	} finally {
// 		queuedLeaf = null;
// 		isHandlingLeave = false;
// 	}
// });

if (!startup.rendered) {
	startup.rendered = true;

	// Defer heavy rendering to next frame
	requestAnimationFrame(() => {
		renderOverviewTab();
		// Conditions tab renders itself
		startup.initializing = false;
	});
}
