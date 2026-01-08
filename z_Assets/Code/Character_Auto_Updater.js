// use js engine plugin in obsidian to run this script at startup
// this script will auto update the dnd character sheet system files from github

setTimeout(runUpdater, 1500); // delay to allow obsidian to load

const REPO_BASE =
  "https://raw.githubusercontent.com/mattclair/Obsidian-DnD-Character-Sheet/main";

const MANIFEST_URL = `${REPO_BASE}/manifest.json`;
const VERSION_KEY = "dndSystemVersion";

async function fetchManifest() {
  const res = await fetch(MANIFEST_URL);
  if (!res.ok) throw new Error("Failed to fetch manifest");
  return await res.json();
}

function isNewer(remote, local) {
  const r = remote.split(".").map(Number);
  const l = local.split(".").map(Number);
  for (let i = 0; i < 3; i++) {
    if (r[i] > l[i]) return true;
    if (r[i] < l[i]) return false;
  }
  return false;
}

async function ensureFolder(path) {
  const parts = path.split("/").slice(0, -1);
  let current = "";
  for (const part of parts) {
    current = current ? `${current}/${part}` : part;
    if (!app.vault.getAbstractFileByPath(current)) {
      await app.vault.createFolder(current).catch(() => {});
    }
  }
}

async function syncFile(relativePath) {
  const url = `${REPO_BASE}/${relativePath}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.warn("Failed to fetch:", relativePath);
    return;
  }

  const content = await res.text();
  await ensureFolder(relativePath);

  const existing = app.vault.getAbstractFileByPath(relativePath);

  try {
    if (existing) {
      if (existing.type === "folder") {
        console.warn("Path exists as folder, skipping:", relativePath);
        return;
      }

      // Existing file → overwrite safely
      await app.vault.modify(existing, content);
      console.log("Updated:", relativePath);
    } else {
      // File does not exist → create
      await app.vault.create(relativePath, content);
      console.log("Created:", relativePath);
    }
  } catch (e) {
    console.warn("Sync failed for", relativePath, e);
  }
}

async function runUpdater() {
  try {
    const manifest = await fetchManifest();
    const remoteVersion = manifest.version;
    const localVersion = localStorage.getItem(VERSION_KEY) || "0.0.0";

    if (!isNewer(remoteVersion, localVersion)) {
      console.log("DnD system up to date:", localVersion);
      return;
    }

    console.log(`Updating DnD system ${localVersion} → ${remoteVersion}`);

    for (const entry of manifest.files) {
    if (entry.endsWith("/")) {
        // Folder entry
        await ensureFolder(entry + "placeholder.md");
    } else {
        await syncFile(entry);
    }
}

    localStorage.setItem(VERSION_KEY, remoteVersion);
    new Notice(`DnD system updated to v${remoteVersion}`);
  } catch (err) {
    console.error("DnD updater failed:", err);
  }
}

runUpdater();