if (!dv.current() || !dv.current().file) {
	console.log("Dataview not ready — skipping render");
	return;
}

if (!dv.current()?.BASE_FOLDER) {
	console.log("BASE_FOLDER not indexed yet — skipping render");
	return;
}

const char = dv.current() ?? {};

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

let BASE_FOLDER;

try {
	({ BASE_FOLDER } = getBaseFolders());
} catch {
	return;
}





const phbClassPath = `${BASE_FOLDER}/classes`;
const rawFeats = dv.current().feats ?? [];

// Normalize feats into `{ name, data }`
const feats = rawFeats.map(f => {
   if (typeof f === "string") {
      return { name: f, data: null };
   }
   if (typeof f === "object") {
       const key = Object.keys(f)[0];
       return { name: key, data: f[key] };
   }
});

// build the list
const listItems = feats.map(feat => {
    const featFile = `${BASE_FOLDER}/feats/${feat.name.toLowerCase().replace(/ /g, "-")}-xphb`;
   return dv.fileLink(featFile, false, feat.name);
});

// Render as diamond-style list (same as your class features)
dv.list(listItems);