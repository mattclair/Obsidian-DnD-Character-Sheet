const c = dv.current(); // your character note
// Suppress noisy debug logs from this script (restored at end)
let __char_dashboard_origConsoleLog;
try {
	__char_dashboard_origConsoleLog = console.log;
	// Replace console.log with a no-op to silence debug output
	console.log = function() {};
} catch (e) {
	// environment may not allow overriding console; ignore
}
// =====================
// =====================
// FILE LOCATIONS
//======================
const BASE_FOLDER = c.BASE_FOLDER;
const ITEMS_FOLDER = `${BASE_FOLDER}/items`;
const RULES_FOLDER = `${BASE_FOLDER}/rules`;
const SPELLS_FOLDER = `${BASE_FOLDER}/spells`;
const WSHAPE_FOLDER =  `${BASE_FOLDER}/bestiary/beast`;

	  
	  
// =====================
// Helper Functions
// =====================
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



function addResourceToggles({
  parent,
  label,
  namespace,
  prefix,
  count,
  suffix = ""
}) {
  const wrap = parent.createEl("div", { cls: "char-header-block" });
  wrap.createEl("strong", { text: label });
  const arr = [...Array(count).keys()];
  wrap.appendChild(
    dv.el("span",
      arr.map((_, i) => `\`INPUT[toggle:${namespace}.${prefix}${i+1}${suffix}]\``).join(" ")
    )
  );
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
const Level = Number(dv.current().Level ?? 1);
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
// Debug logs removed for production
// ======================
// Feats
// ======================
const feats = dv.current().feats ?? [];

// Optional: debug info suppressed

// Functions
function formatSpellName(name) {
  return name
    .replace(/-xphb$|-phb$|-srd$/i, "")
    .replace(/-/g, " ")
    .replace(/'/g, "")
    .replace(/\b\w/g, c => c.toUpperCase());
}

// ======================================================================================
// ==================================================================    Character Header
// ======================================================================================
//const c = dv.current();
const condObj = c.conditions ?? {};
const concentrationActive = condObj.concentrating === true;
const borderColor = concentrationActive ? "#950606" : "var(--background-primary-alt)";

const active = [];
function prettyKey(k) {
  return k.replace(/_/g, " ").replace(/\b\w/g, ch => ch.toUpperCase());
}

for (const [key, val] of Object.entries(condObj)) {
  // Special case for concentrating
  if (key === "concentrating" && val === true) {
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

const condDisplay = active.length ? active.join(", ") : "None";
const maxHP = c.health?.max ?? 30;
const currentHP = c.health?.current ?? 30;
const tempHP = c.health?.temp ?? 0;
const maxTemp = c.health?.maxTmp ?? maxHP;
const hpPercent = Math.max(0, Math.min(100, (currentHP / maxHP) * 100));
const tempPercent = Math.max(0, Math.min(100, (tempHP / maxTemp) * 100));

let images = [];

if (Array.isArray(c.image)) {
    images = c.image;                 // Already an array
} else if (typeof c.image === "string") {
    images = [c.image];               // Convert single string to array
}

// Pick one image — your choice of rule:
const chosenImage = images.length > 0
    ? images[Math.floor(Math.random() * images.length)]  // Random pick
    : "";

let html = `
<div class="char-header" style="border: 1px solid ${borderColor}; border-radius: 14px; transition: border-color 0.3s;">
  <div class="char-info">
    <h1 class="char-name">${c.name ?? "Unnamed Character"}</h1>
    <div class="char-subtitle">
		  Level ${c.Level ?? "?"}
		  ${
		    Array.isArray(c.dndClass)
		      ? " " + c.dndClass.map(obj => {
		          const [cls, lvl] = Object.entries(obj)[0];
		          return `${cls} (${lvl})`;
		        }).join(" / ")
		      : ` ${c.dndClass ?? "Class"}`
		  }
		  ${
		    Array.isArray(c.subclass)
		      ? " — " + c.subclass.join(" / ")
		      : (c.subclass ? ` — ${c.subclass}` : "")
		  }
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



// === Character Header Bottom Bar (Luck, Hit Dice, Inspiration) ===

// === Render header and capture the element ===
const headerEl = dv.el("div", html, { cls: "character-header-block" });

// === Character Header Bottom Bar ===
const bottomBar = headerEl.createEl("div", { cls: "char-header-bottom" });

/* ===== Heroic Inspiration ===== */
const inspWrap = bottomBar.createEl("div", { cls: "char-header-block" });
inspWrap.createEl("strong", { text: "Inspiration:" });

inspWrap.appendChild(
  dv.el("span", `\`INPUT[toggle:conditions.heroic_inspiration]\``)
);

// Only display Luck Points if character has the Lucky feat
if (feats.includes("Lucky")) {
    addResourceToggles({
	  parent: bottomBar,
	  label: "Luck:",
	  namespace: "Luck",
	  prefix: "luck_point_",
	  count: pb
	});
}

// Only display Guarded Mind if character has the Mage Slayer feat
if (feats.includes("Mage Slayer")) {
    addResourceToggles({
	  parent: bottomBar,
	  label: "Mage Slayer:",
	  namespace: "Mage_Slayer",
	  prefix: "guarded_mind_",
	  count: 1
	});
}

// Only display Quick Ritual if character has the Ritual Caster feat
if (feats.includes("Ritual Caster")) {
    addResourceToggles({
	  parent: bottomBar,
	  label: "Quick Ritual:",
	  namespace: "Ritual_Caster",
	  prefix: "quick_ritual_",
	  count: 1
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
	  count: rageFromLevel(barbarianLevel)
	});
}

// Only display Bardic Inspiration if character is a Bard
if (hasBard) {
	let biDie = CHA_MOD
	if (biDie <= 0) { biDie = 1 };
  function bInspFromLevel(lvl) {
	  if (lvl >= 15) return [biDie, "d12"];
	  if (lvl >= 9) return [biDie, "d10"];
	  if (lvl >= 4) return [biDie, "d8"];
	  return [biDie, "d6"];
	}
	const bardWrap= bottomBar.createEl("div", { cls: "char-header-block" });
	const [bi, value] = bInspFromLevel(bardLevel);
	
	bardWrap.createEl("strong", { text: "Bardic Inspiration:" });
	
	const bardicInspVal = `${value}`;
	bardWrap.createEl("span", { text: bardicInspVal });
	
	const biArr = [...Array(bi).keys()];
	bardWrap.appendChild(dv.el("span",
	  biArr.map((e,i) => `\`INPUT[toggle:Bardic-Insp.bardic_insp_die_${i + 1}]\``).join(" ")
		));
}

// Only display Channel Divinity if character is a Cleric

if (clericLevel >= 2) {
  function cdFromLevel(lvl) {
    if (lvl >= 17) return 4;
    if (lvl >= 6) return 3;
    if (lvl >= 2) return 2;
    return 0;
  }
  
  let cdText = "Channel Divinity";
  if (hasPaladin) cdText += " (Cleric)";
  const cdWrap = bottomBar.createEl("div", { cls: "char-header-block" });
  cdWrap.createEl("strong", { text: cdText });

  const cdArr = [...Array(cdFromLevel(clericLevel)).keys()];

  cdWrap.appendChild(
    dv.el("span",
      cdArr.map((e,i) => `\`INPUT[toggle:Channel_Divinity.divinity-${i+1}]\``).join(" ")
    )
  );
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
	  count: wsFromLevel(druidLevel)
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
	  count: swFromLevel(fighterLevel)
	});

    if( fighterLevel >= 2 ) {
		let ammount = 1;
		if (fighterLevel >= 17) { ammount = 2; }
		addResourceToggles({
		parent: bottomBar,
		label: "Action Surge:",
		namespace: "Action_Surge",
		prefix: "action_surge-",
		count: swFromLevel(ammount)
		});
	}
	
}

// Only  Superiority Die if character is a Champion Fighter
if (subclass.includes("Champion")) {

  function supDieFromLevel(lvl) {
	  if (lvl >= 15)  return [7, "d8"];
	  if (lvl >= 7)  return [5, "d8"];
	  return [4, "d8"];
	}

  const supWrap= bottomBar.createEl("div", { cls: "char-header-block" });
	const [sd, value] = supDieFromLevel(fighterLevel);
	
  supWrap.createEl("strong", { text: "Superiority Dice:" });

  const supDiceVal = `${sd} × ${value}`;
	supWrap.createEl("span", { text: supDiceVal });

  const sdArr = [...Array(sd).keys()];
	supWrap.appendChild(dv.el("span",
	  sdArr.map((e,i) => `\`INPUT[toggle:Superiority_dice.superiority_die_${i + 1}]\``).join(" ")
		));;
}

// Only display Energy Dice Dice if character is a Psi Warrior Fighter
if (subclass.includes("Psi Warrior")) {
  function pwenergyDieFromLevel(lvl) {
	  if (lvl >= 17) return [12, "d12"];
	  if (lvl >= 13) return [10, "d10"];
	  if (lvl >= 11) return [8, "d10"];
	  if (lvl >= 9)  return [8, "d8"];
	  if (lvl >= 5)  return [6, "d8"];
	  if (lvl >= 3)  return [4, "d6"];
	  return [0, "d6"];
	}
	
	const pwWrap= bottomBar.createEl("div", { cls: "char-header-block" });
	const [pwed, value] = pwenergyDieFromLevel(fighterLevel);
	
	pwWrap.createEl("strong", { text: "Energy Dice:" });
	
	const pwenergyDiceVal = `(${value})`;
	pwWrap.createEl("span", { text: pwenergyDiceVal });
	
	const pwArr = [...Array(pwed).keys()];
	pwWrap.appendChild(dv.el("span",
	  pwArr.map((e,i) => `\`INPUT[toggle:PSIenergy_dice.psienergy_die_${i + 1}]\``).join(" ")
		));
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
	  count: fpFromLevel(monkLevel)
	});
}

// Only display Channel Divinity if character is a Paladin
if (paladinLevel >= 3) {

  function paladinCDFromLevel(lvl) {
    if (lvl >= 11) return 3;
    if (lvl >= 3) return 2;
    return 0;
  }
  
  let cdText = "Channel Divinity";
  if (hasCleric) cdText += " (Paladin)";
  const cdWrap = bottomBar.createEl("div", { cls: "char-header-block" });
  cdWrap.createEl("strong", { text: cdText });

  const cdArr = [...Array(paladinCDFromLevel(paladinLevel)).keys()];

  cdWrap.appendChild(
    dv.el("span",
      cdArr.map((e,i) => `\`INPUT[toggle:Channel_Divinity.divinity-${i+1}]\``).join(" ")
    )
  );
}

// Only  Display Dreadful Strike if character is a Gloom Stalker Ranger
if (subclass.includes("Gloom Stalker" )) {
  
  addResourceToggles({
	  parent: bottomBar,
	  label: "Dreadful Strike:",
	  namespace: "Dreadful_Strike",
	  prefix: "dreadful_strike-",
	  count: WIS_MOD
	});
}

// Only display Soul Knife Dice if character is a Soul Knife Rogue
if (subclass.includes("Soulknife" )) {
  function energyDieFromLevel(lvl) {
	  if (lvl >= 17) return [12, "d12"];
	  if (lvl >= 13) return [10, "d10"];
	  if (lvl >= 11) return [8, "d10"];
	  if (lvl >= 9)  return [8, "d8"];
	  if (lvl >= 5)  return [6, "d8"];
	  if (lvl >= 3)  return [4, "d6"];
	  return [0, "d6"];
	}
	
	const SkWrap= bottomBar.createEl("div", { cls: "char-header-block" });
	const [ed, value] = energyDieFromLevel(rogueLevel);
	
	SkWrap.createEl("strong", { text: "Energy Dice:" });
	
	const energyDiceVal = `(${value})`;
	SkWrap.createEl("span", { text: energyDiceVal });
	
	const edArr = [...Array(ed).keys()];
	SkWrap.appendChild(dv.el("span",
	  edArr.map((e,i) => `\`INPUT[toggle:energy_dice.energy_die_${i + 1}]\``).join(" ")
		));
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
	  count: spFromLevel(sorcererLevel)
	});
}

// Only display Magical Cunning if character is a Warlock
if (hasWarlock) {

  addResourceToggles({
	  parent: bottomBar,
	  label: "Magical Cunning:",
	  namespace: "Magical_Cunning",
	  prefix: "magical_cunning-",
	  count: 1
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
	  count: pb
	});
	addResourceToggles({
	  parent: bottomBar,
	  label: "Relentless Endurance:",
	  namespace: "Relentless_Endurance",
	  prefix: "relentless_endurance-",
	  count: 1
	});
	
}




/* ===== Hit Dice (Multiclass Compatible) ===== */

// Hit die values by class
const hitDieByClass = {
    Barbarian: "d12",
    Fighter: "d10", Paladin: "d10", Ranger: "d10",
    Cleric: "d8", Druid: "d8", Monk: "d8", Rogue: "d8",
    Warlock: "d8", Bard: "d8",
    Wizard: "d6", Sorcerer: "d6"
};

// Read frontmatter
const fm = dv.current();

// Normalize dndClass into a dictionary: { ClassName: Levels }
let classDict = {};

if (typeof fm.dndClass === "string") {
    // Single-class format
    classDict[fm.dndClass] = fm.Level ?? 1;
} else if (Array.isArray(fm.dndClass)) {
    // Multiclass array of objects
    fm.dndClass.forEach(obj => {
        const [cls, lvl] = Object.entries(obj)[0];
        classDict[cls] = lvl;
    });
} else {
    classDict = {};
}

// Create wrapper
const hdWrap = bottomBar.createEl("div", { cls: "char-header-block" });
hdWrap.createEl("strong", { text: "Hit Dice:" });
hdWrap.createEl("br");

// Build row for each class
Object.entries(classDict).forEach(([cls, lvl]) => {
    const die = hitDieByClass[cls] ?? "d8"; // default fallback

    // Label
    hdWrap.createEl("div", { text: `${cls} (${die}):`, cls: "hd-class-label" });

    // Build toggles: one per level for this class
    const toggles = [...Array(lvl).keys()]
        .map((i) => `\`INPUT[toggle:Hit_Dice.${cls}_${die}-${i+1}]\``)
        .join(" ");

    // Insert toggles as DV inline elements
    hdWrap.appendChild(dv.el("div", toggles));
});


/* ===== Death Saves ===== */

const dSaveSuccessWrap = bottomBar.createEl("div", { cls: "char-header-block" });
dSaveSuccessWrap.createEl("strong", { text: "💀 - Successes:" });
//proficiency bonus times/day
const dSaveSuccessArr = [...Array(3).keys()];

dSaveSuccessWrap.appendChild(
dv.el("span",
	  dSaveSuccessArr.map((e,i) => `\`INPUT[toggle:Death_Save.success-${i+1}]\``).join(" ")
	)
);

/* ===== Death Saves ===== */

const dSaveFailWrap = bottomBar.createEl("div", { cls: "char-header-block" });
dSaveFailWrap.createEl("strong", { text: "☠️ - Failures:" });
//proficiency bonus times/day
const dSavFailArr = [...Array(3).keys()];

dSaveFailWrap.appendChild(
dv.el("span",
	  dSavFailArr.map((e,i) => `\`INPUT[toggle:Death_Save.fail-${i+1}]\``).join(" ")
	)
);

// === Health tracking buttons ===

let hpChangeValue = 0;

async function updateHealth(updater, afterNotice) {
  const file = app.workspace.getActiveFile();
  if (!file) return;

  await app.fileManager.processFrontMatter(file, fm => {
    fm.health ??= {};
    updater(fm);
  });

  if (afterNotice) afterNotice();
}

function resetHpInput() {
  hpChangeValue = 0;
  hpInput.value = "";
}

async function dealDamage() {
  const delta = hpChangeValue;
  if (!delta) return; // early return if nothing to deal

  await updateHealth(fm => {
    fm.health ??= {};
    const temp = Number(fm.health.temp ?? 0);
    const current = Number(fm.health.current ?? 0);

    if (temp === 0) {
      fm.health.current = Math.max(0, current - delta);
    } else {
      fm.health.temp = temp - delta;
      if (fm.health.temp < 0) {
        fm.health.current = Math.max(0, current + fm.health.temp);
        fm.health.temp = 0;
      }
    }
  }, async () => {
    const file = app.workspace.getActiveFile();
    const content = await app.vault.read(file);
    const rollMod = CON_MOD + pb;

    if (/concentrating:\s*true/.test(content)) {
      let conTest = Math.floor(delta / 2);
      if (conTest > 30) conTest = 30;
      if (conTest < 10) conTest = 10;

      new Notice(`Roll a DC ${conTest} Concentration Check! Add ${rollMod} to the D20 Test`, 5000);
    } else {
      new Notice(`Dealing ${delta} hp of damage`, 5000);
    }
  });
}



async function healHitPoints() {
  await updateHealth(fm => {
    const delta = hpChangeValue;
    if (!delta) return;

    const max = Number(fm.health.max ?? 0);
    const current = Number(fm.health.current ?? 0);

    fm.health.current = Math.min(
      Math.max(0, current + delta),
      max
    );
	new Notice("Healing " + `${hpChangeValue}` + " hp of damage", 5000);
  });
}

async function applyTempHP() {
  await updateHealth(fm => {
    const delta = hpChangeValue;
    if (!delta) return;

    const currentTemp = Number(fm.health.temp ?? 0);

    fm.health.temp = Math.max(currentTemp, delta);
    fm.health.maxTmp = delta;
	new Notice("Adding " + `${hpChangeValue}` + " Temperary Hit Points", 5000);
  });
}

async function resetHP() {
  await updateHealth(fm => {
    fm.health.current = Number(fm.health.max ?? 0);
    fm.health.temp = 0;
  });
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

async function resetHpInput() {
  const delta = hpChangeValue; 
  hpChangeValue = 0;
  hpInput.value = "";
  updateHpButtons();

  await updateHealth(fm => {
    fm.health ??= {};
    fm.health.current = Number(fm.health.max ?? 0);
    fm.health.temp = 0;
  });

  new Notice("Health values reset to default", 5000);
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
      el.onclick = resetHpInput;
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
shortRestBtn.onclick = async () => {
  const file = app.workspace.getActiveFile();
  if (!file) return;

  await app.fileManager.processFrontMatter(file, fm => {

	
    
	// Cleric Channel Divinity recovery
	if( hasCleric ) {
		fm.Channel_Divinity ??= {};

		// Get keys like ["divinity-1", "divinity-2"]
		const divinityKeys = Object.keys(fm.Channel_Divinity ?? {})
			.filter(k => k.startsWith("divinity-"))
			.sort((a, b) => {
				const na = Number(a.split("-")[1]);
				const nb = Number(b.split("-")[1]);
				return na - nb;
			});

			// Recover exactly ONE spent use
			for (const key of divinityKeys) {
			if (fm.Channel_Divinity[key] === false) {
				fm.Channel_Divinity[key] = true;
				break; // stop after recovering one
			}
		}
	}
	

	// Druid Wild Shape recovery
	if (hasDruid ) {
		const wildShapeKeys = Object.keys(fm.Wild_Shape ?? {})
			.filter(k => k.startsWith("wild_shape-"))
			.sort((a, b) => {
				const na = Number(a.split("-")[1]);
				const nb = Number(b.split("-")[1]);
				return na - nb;
			});

			// Recover exactly ONE spent use
			for (const key of wildShapeKeys) {
			if (fm.Wild_Shape[key] === false) {
				fm.Wild_Shape[key] = true;
				break; // stop after recovering one
			}
		}
	}
	
	if (hasFighter ) {
		// Fighter Action Surge recovery
		fm.Action_Surge ??= {};

		Object.keys(fm.Action_Surge).forEach(key => {
			if (key.startsWith("action_surge-")) {
				fm.Action_Surge[key] = true;
			}
		});

		// Fighter Second Wind recovery
		const secondWindKeys = Object.keys(fm.Second_Wind ?? {})
			.filter(k => k.startsWith("wild_shape-"))
			.sort((a, b) => {
				const na = Number(a.split("-")[1]);
				const nb = Number(b.split("-")[1]);
				return na - nb;
			});

			// Recover exactly ONE spent use
			for (const key of secondWindKeys) {
			if (fm.Second_Wind[key] === false) {
				fm.Second_Wind[key] = true;
				break; // stop after recovering one
			}
		}
	}

	// Monk Focus Point recovery
	if( hasMonk ) {
		fm.Focus_Points ??= {};
		
		// Reset only pact slots to true
		Object.keys(fm.Focus_Points).forEach(key => {
		if (key.startsWith("focus_points-")) {
			fm.Focus_Points[key] = true;
		}
		});
	}

	// Paladin Channel Divinity recovery
	if( hasPaladin ) {
		fm.Channel_Divinity ??= {};

		// Get keys like ["divinity-1", "divinity-2"]
		const divinityKeys = Object.keys(fm.Channel_Divinity ?? {})
			.filter(k => k.startsWith("divinity-"))
			.sort((a, b) => {
				const na = Number(a.split("-")[1]);
				const nb = Number(b.split("-")[1]);
				return na - nb;
			});

			// Recover exactly ONE spent use
			for (const key of divinityKeys) {
			if (fm.Channel_Divinity[key] === false) {
				fm.Channel_Divinity[key] = true;
				break; // stop after recovering one
			}
		}
	}

	if (subclass.includes("Soulknife" )) {
		fm.energy_dice ??= {};

		// Get keys like ["divinity-1", "divinity-2"]
		const energyDiceKeys = Object.keys(fm.energy_dice ?? {})
			.filter(k => k.startsWith("energy_die_"))
			.sort((a, b) => {
				const na = Number(a.split("-")[1]);
				const nb = Number(b.split("-")[1]);
				return na - nb;
			});

			// Recover exactly ONE spent use
			for (const key of energyDiceKeys) {
			if (fm.energy_dice[key] === false) {
				fm.energy_dice[key] = true;
				break; // stop after recovering one
			}
		}
	}
	
	// Warlock Pact Magic recovery
	if ( hasWarlock ) {
		fm.spell_slot ??= {};
		
		// Reset only pact slots to true
		Object.keys(fm.spell_slot).forEach(key => {
		if (key.startsWith("pact")) {
			fm.spell_slot[key] = true;
		}
		});
	}	

  });  

  new Notice(
    "Short Reset Completed. \nRemember to: \n  -Track spent Hit Dice\n  -Track Recovered HP",
    5000
  );
};

longRestBtn.onclick = async () => {
  const file = app.workspace.getActiveFile();
  if (!file) return;

  // Reset HP via your existing logic
  await resetHP();

  await app.fileManager.processFrontMatter(file, fm => {
    fm.spell_slot ??= {};

    // Restore ALL spell slots
    Object.keys(fm.spell_slot).forEach(key => {
      fm.spell_slot[key] = true;
    });

    fm.Hit_Dice ??= {};

    // Restore ALL Hit Dice
    Object.keys(fm.Hit_Dice).forEach(key => {
      fm.Hit_Dice[key] = true;
    });

	// Reset Class Specific Resources

	if (hasBarbarian) {
		Object.keys(fm.Rage).forEach(key => {
			if (key.startsWith("rage-")) {
				fm.Rage[key] = true;
			}
		});
	}

	if (hasBard) {
		Object.keys(fm["Bardic-Insp"]).forEach(key => {
			if (key.startsWith("bardic_insp_die_")) {
				fm["Bardic-Insp"][key] = true;
			}
		});
	}

	if (hasCleric) {
		Object.keys(fm.Channel_Divinity).forEach(key => {
			if (key.startsWith("divinity-")) {
				fm.Channel_Divinity[key] = true;
			}
		});
	}

	if (hasDruid) {
		Object.keys(fm.Wild_Shape).forEach(key => {
			if (key.startsWith("wild_shape-")) {
				fm.Wild_Shape[key] = true;
			}
		});
	}

	if (hasFighter) {
		Object.keys(fm.Second_Wind).forEach(key => {
			if (key.startsWith("second_wind-")) {
				fm.Second_Wind[key] = true;
			}
		});

		Object.keys(fm.Action_Surge).forEach(key => {
			if (key.startsWith("action_surge-")) {
				fm.Action_Surge[key] = true;
			}
		});
	}

	if (hasMonk) {
		Object.keys(fm.Focus_Points).forEach(key => {
			if (key.startsWith("focus_points-")) {
				fm.Focus_Points[key] = true;
			}
		});
	}

	if (hasPaladin) {
		Object.keys(fm.Channel_Divinity).forEach(key => {
			if (key.startsWith("divinity-")) {
				fm.Channel_Divinity[key] = true;
			}
		});
	}

	if (subclass.includes("Gloom Stalker" )) {
		Object.keys(fm.Dreadful_Strike).forEach(key => {
			if (key.startsWith("dreadful_strike-")) {	
				fm.Dreadful_Strike[key] = true;
			}
		});
	}

	if (subclass.includes("Soulknife" )) {
		Object.keys(fm.energy_dice).forEach(key => {
			if (key.startsWith("energy_die_")) {
				fm.energy_dice[key] = true;
			}
		});
	}

	if (hasSorcerer) {
		Object.keys(fm.Sorcery_Points).forEach(key => {
			if (key.startsWith("sorcery_points-")) {
				fm.Sorcery_Points[key] = true;
			}
		});
	}

	if (hasWarlock) {
		Object.keys(fm.Magical_Cunning).forEach(key => {
			if (key.startsWith("magical_cunning-")) {
				fm.Magical_Cunning[key] = true;
			}
		});
	}


	// Reset Feat Specific Resources
	fm.Luck ??= {};
	fm.Mage_Slayer ??= {};
	fm.Ritual_Caster ??= {};

	if (feats.includes("Lucky")) {
		Object.keys(fm.Luck).forEach(key => {
			if (key.startsWith("luck_point_")) {
				fm.Luck[key] = true;
			}
		});
	}

	if (feats.includes("Mage Slayer")) {
		Object.keys(fm.Mage_Slayer).forEach(key => {
			if (key.startsWith("guarded_mind_")) {
				fm.Mage_Slayer[key] = true;
			}
		});
	}

	if (feats.includes("Ritual Caster")) {
		Object.keys(fm.Ritual_Caster).forEach(key => {
			if (key.startsWith("quick_ritual_")) {
				fm.Ritual_Caster[key] = true;
			}
		});
	}


	// Reset Species Specific Resources

	if (c.species === "Orc") {
		Object.keys(fm.Adrenaline_Rush).forEach(key => {
			if (key.startsWith("adrenaline_rush-")) {
				fm.Adrenaline_Rush[key] = true;
			}
		});
		Object.keys(fm.Relentless_Endurance).forEach(key => {
			if (key.startsWith("relentless_endurance-")) {
				fm.Relentless_Endurance[key] = true;
			}
		});
	}

	if (c.species === "Human") {
		Object.keys(fm.conditions).forEach(key => {
			if (key.startsWith("heroic_inspiration")) {
				fm.conditions[key] = true;
			}
		});
	}
	

  });

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






// ======================================================================================
// ============================================================    Overview Container Tab
// ======================================================================================

(function renderOverviewTab() {
	try {
		// Rendering Overview (diagnostics suppressed)
        // === Level-based Proficiency Bonus ===
		const profs = dv.current().Proficiencies ?? {};
		let rawBonus = dv.current().Stat_Bonus ?? {};
		
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
		  STR: Number(dv.current().STR ?? 10),
		  DEX: Number(dv.current().DEX ?? 10),
		  CON: Number(dv.current().CON ?? 10),
		  INT: Number(dv.current().INT ?? 10),
		  WIS: Number(dv.current().WIS ?? 10),
		  CHA: Number(dv.current().CHA ?? 10),
		  STR_MOD: mod(Number(dv.current().STR ?? 10)),
		  DEX_MOD: mod(Number(dv.current().DEX ?? 10)),
		  CON_MOD: mod(Number(dv.current().CON ?? 10)),
		  INT_MOD: mod(Number(dv.current().INT ?? 10)),
		  WIS_MOD: mod(Number(dv.current().WIS ?? 10)),
		  CHA_MOD: mod(Number(dv.current().CHA ?? 10)),
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
		let baseAC = Number(dv.current().Base_AC ?? 10);
		if (dv.current()?.conditions?.mage_armor) baseAC = 13;
		const spellAbility = dv.current().Spellcasting_Ability;
		const spellAbilityScore = vars[spellAbility];
		const spellMod = mod(spellAbilityScore);
		//const dexMod = vars.DEX_MOD;
		//const wisMod = vars.WIS_MOD;
		const initiative = DEX_MOD + (statBonus.Initiative ?? 0);
		const armorClass = baseAC + DEX_MOD + (statBonus.Armor_Class ?? 0);
		const spellSaveDC = 8 + pb + spellMod + (statBonus.Spell_Save_DC ?? 0);
		const spellAttack = pb + spellMod + (statBonus.Spell_Attack ?? 0);
		const passivePerception = 10 + WIS_MOD + (pb * (profs.Perception ?? 0)) + (statBonus.Perception ?? 0);
		const speedDisplay = (dv.current().speed ?? 30) + (statBonus.Speed ?? 0);
		
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
		
		
		// === Replace Overview Stat Grid with Full Character Stat Block ===
		const overviewPanel = container.querySelector("#overview .panel");
		
		// Remove the old stat-grid placeholder
		const oldStatGrid = overviewPanel.querySelector(".stat-grid");
		if (oldStatGrid) oldStatGrid.remove();
		
		// Insert the full character stats HTML
		const statsContainer = document.createElement("div");
		statsContainer.innerHTML = charStatHtml;
		overviewPanel.appendChild(statsContainer);
    } catch (e) {
        console.error("Overview Tab Failed:", e);
        dv.paragraph("⚠ Overview failed to load. Check console.");
    }
})();









// ======================================================================================
//================================================================   Spells Container Tab
// ======================================================================================

 (async function renderSpellsTab() {
	try {
		// Rendering Spells (diagnostics suppressed)

        const char = dv.current() ?? {};
		const preparedSpells = (char.Prepared_spells ?? []).map(s => String(s).trim()).filter(Boolean);
		const spellAttackExtra = Number(char.Stat_Bonus?.Spell_Attack?.value ?? 0);
		
		
		// ---------- SPELL TAB PANEL ----------
		const spellsPanel = container.querySelector("#spells .panel");
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
		
		function addSpellLine(toggles, label) {
		    const line = spellSlotsDiv.createEl("div", { cls: "spell-line" });
		    line.appendChild(dv.paragraph(`${toggles} ${label}`));
		}
		
		
			
		//=================================== Full/Half/One-Third Spell Caster
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
		
		    // Calculate combined caster level
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
		        
			// spellcasting level computed (debug suppressed)
		
		    const fullCasterSlots = fullCasterSlotsTable[spellcasterLevel] ?? [0,0,0,0,0,0,0,0,0];
		
		    // Render slots
		    for (let lvl = 1; lvl <= 9; lvl++) {
		        const slotCount = fullCasterSlots[lvl - 1];
		        if (slotCount === 0) continue;
		
		        const toggles = [...Array(slotCount).keys()]
		          .map(i => `\`INPUT[toggle(class(spell-toggle)):spell_slot.level_${lvl}_${i+1}]\``)
		          .join(" ");
		
		        addSpellLine(toggles, `Level ${lvl}`);
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
		    const pactToggles = [...Array(maxSlots).keys()]
		        .map(i => `\`INPUT[toggle(class(pact-toggle)):spell_slot.pact${i+1}]\``)
		        .join(" ");
		    addSpellLine(pactToggles, `Pact Magic Spell Slot - Level ${mLevel}`);
		
		    if (warlockLevel >= 11) addSpellLine("`INPUT[toggle(class(pact-toggle)):spell_slot.arcanum1]`", "Mystic Arcanum Spell Slot - Level 6");
		    if (warlockLevel >= 13) addSpellLine("`INPUT[toggle(class(pact-toggle)):spell_slot.arcanum2]`", "Mystic Arcanum Spell Slot - Level 7");
		    if (warlockLevel >= 15) addSpellLine("`INPUT[toggle(class(pact-toggle)):spell_slot.arcanum3]`", "Mystic Arcanum Spell Slot - Level 8");
		    if (warlockLevel >= 17) addSpellLine("`INPUT[toggle(class(pact-toggle)):spell_slot.arcanum4]`", "Mystic Arcanum Spell Slot - Level 9");
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
		            const toggle = `\`INPUT[toggle(class(spell-toggle)):spell_slot.${spell.key}]\``;
		            addSpellLine(toggle, spell.name);
		        }
		    });
		}
		
		if (c.species === "Gnome") {
			if (c.species_traits.includes("Forest Gnome")){
				const toggle = `\`INPUT[toggle(class(spell-toggle)):spell_slot.forest_gnome_speak_with_animals]\``;
		            addSpellLine(toggle, "Speak with Animals");
			}
		}
		
		
		if (c.species === "Goliath" && c.species_traits.includes("Cloud Giant")) {
		    const toggles = [...Array(pb).keys()]
		        .map(i => `\`INPUT[toggle(class(spell-toggle)):spell_slot.misty_step${i+1}]\``)
		        .join(" ");
		    addSpellLine(toggles, "Cloud's Jaunt (Misty Step)");
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
		            const toggle = `\`INPUT[toggle(class(spell-toggle)):spell_slot.${spell.key}]\``;
		            addSpellLine(toggle, spell.name);
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
			const toggles = [...Array(favEnemyFromLevel(rangerLevel)).keys()]
		        .map(i => `\`INPUT[toggle(class(spell-toggle)):spell_slot.hunters_mark${i+1}]\``)
		        .join(" ");
		    addSpellLine(toggles, "Favored Enemy (Hunter's Mark)");
		}
		

		//==================================== Fey Touched
		const ftObj = feats.find(f => typeof f === "object" && f["Fey Touched"]);

		if (ftObj) {
		    const ft = ftObj["Fey Touched"];
		    const spellKey = ft.spell.replace(/\s+/g, "_").toLowerCase();  // safe key
		
		    addSpellLine(
		        `\`INPUT[toggle(class(spell-toggle)):spell_slot.fey_touched_${spellKey}]\``,
		        `Fey Touched - ${ft.spell} - Level 1`
		    );
		
		    addSpellLine(
		        `\`INPUT[toggle(class(spell-toggle)):spell_slot.fey_touched_misty_step]\``,
		        `Fey Touched - Misty Step - Level 2`
		    );
		}
		
		//=================================== Magic Initiate
		const miObj = feats.find(f => typeof f === "object" && f["Magic Initiate"]);
		
		if (miObj) {
		    const mi = miObj["Magic Initiate"];
		    addSpellLine(
		        `\`INPUT[toggle(class(spell-toggle)):spell_slot.${mi.class.toLowerCase()}]\``,
		        `Magic Initiate (${mi.class}) - ${mi.spell} - Level 1`
		    );
		}

			
		

		//==================================== Shadow Touched
		const stObj = feats.find(f => typeof f === "object" && f["Shadow Touched"]);

		if (stObj) {
		    const st = stObj["Shadow Touched"];
		    const spellKey = st.spell.replace(/\s+/g, "_").toLowerCase();  // safe key
		
		    addSpellLine(
		        `\`INPUT[toggle(class(spell-toggle)):spell_slot.shadow_touched_${spellKey}]\``,
		        `Shadow Touched - ${st.spell} - Level 1`
		    );
		
		    addSpellLine(
		        `\`INPUT[toggle(class(spell-toggle)):spell_slot.shadow_touched_invisibility]\``,
		        `Shadow Touched - Invisibility - Level 2`
		    );
		}
		
		//=================================== Steps of the Fey (Misty Step) CHA_MOD Times/day
		if (hasWarlock && hasArchfey) {
		    const toggles = [...Array(CHA_MOD).keys()]
		        .map(i => `\`INPUT[toggle(class(spell-toggle)):spell_slot.misty_step${i+1}]\``)
		        .join(" ");
		    addSpellLine(toggles, "Steps of the Fey (Misty Step)");
		}
		
		const invocations = c.Eldritch_Invocations
		if (hasWarlock && invocations.includes("Gift of the Depths")) {
		    const toggles = [...Array(1).keys()]
		        .map(i => `\`INPUT[toggle(class(spell-toggle)):spell_slot.water_breathing${i+1}]\``)
		        .join(" ");
		    addSpellLine(toggles, "Gift of the Depths (Water Brathing)");
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
		const spellLists = dv.current().Spells ?? {};
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
		async function updateSpellLists(spellsObj) {
		    const file = app.workspace.getActiveFile();
		    if (!file) return;
		
		    await app.fileManager.processFrontMatter(file, fm => {
		        fm.Spells = spellsObj;
		    });
		
		    app.commands.executeCommandById("dataview:refresh-views");
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
		    .replace(/-xphb$|-phb$|-srd$/i, "")
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
		// Get Spells from YAML
		const Spells = dv.current().Spells;
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
		knownWrapper.appendChild(buildPreparedTable("Known Spells", knownRowsTyped, "known"));
		
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
		    const file = app.workspace.getActiveFile();
		    if (!file) return;
		
		    await app.fileManager.processFrontMatter(file, fm => {
		        if (!fm.conditions) fm.conditions = {};
		
		        // Toggle logic:
		        // If clicking the same spell, clear concentration.
		        if (fm.conditions.concentration_spell === spellName) {
		            fm.conditions.concentration_spell = "";
		            fm.conditions.concentrating = false;
		        } else {
		            fm.conditions.concentration_spell = spellName;
		            fm.conditions.concentrating = true;
		        }
		    });
		
		    app.commands.executeCommandById("dataview:refresh-views");
		}


		// Build a list of spell slot definitions (key, label, used)
		function getSpellSlotDefs() {
			const slotsObj = (dv.current().spell_slot) ?? {};

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
				for (let i = 1; i <= cnt; i++) {
					const key = `level_${lvl}_${i}`;
					// In frontmatter this project stores `true` for available slots.
					// Treat explicit `false` as a spent/used slot.
					defs.push({ key, label: `Level ${lvl} Slot ${i}`, used: (slotsObj[key] === false), slotLevel: lvl, isSpecific: false });
				}
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
						const base = m[1];
						if (!groups[base]) groups[base] = { members: [] };
						groups[base].members.push(k);
					} else {
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
			const file = app.workspace.getActiveFile();
			if (!file) return false;
			let success = false;
			await app.fileManager.processFrontMatter(file, fm => {
				if (!fm.spell_slot) fm.spell_slot = {};
				// Mark as spent -> set to false (project uses `true` for available)
				let target = key;
				if (!(target in fm.spell_slot)) {
					// try to find a numbered member (e.g., misty_step1..misty_step4)
					const candidates = Object.keys(fm.spell_slot).filter(k => k.startsWith(target) && /\d+$/.test(k) && fm.spell_slot[k] !== false);
					if (candidates.length) target = candidates[0];
				}
				fm.spell_slot[target] = false;
				success = true;
			});
			app.commands.executeCommandById("dataview:refresh-views");
			return success;
		}

		function showSpellSlotPicker(spell) {
			// Cantrips don't consume slots
			if ((spell.LevelNum ?? 0) === 0) {
				if (spell.IsConcentration) setConcentrationSpell(spell.Name);
				new Notice(`Cast ${spell.Name} (cantrip)`);
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
					const ok = await spendSpellSlot(d.key);
					if (ok) {
						if (spell.IsConcentration) await setConcentrationSpell(spell.Name);
						new Notice(`Expended ${d.label} for ${spell.Name}`, 3000);
					}
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
			header.classList.add("phb-heading");

			// Header row with inline search box
			const headerRow = document.createElement('div');
			headerRow.style.display = 'flex';
			headerRow.style.alignItems = 'center';
			headerRow.style.justifyContent = 'space-between';

			const headerLeft = document.createElement('div');
			headerLeft.appendChild(header);

			const searchInput = document.createElement('input');
			searchInput.type = 'search';
			searchInput.placeholder = 'Search spells...';
			searchInput.style.padding = '6px';
			searchInput.style.marginLeft = '8px';
			searchInput.style.minWidth = '480px';
			searchInput.style.maxWidth = '820px';

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
		    const spellsObj = dv.current().Spells ?? {};
		
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
		}
		
		
		//-----------------------------------------------------
		// ADD/REMOVE Spell Interface (below Known Spells table)
		//-----------------------------------------------------
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
		
		// ADD button
		const addBtn = document.createElement("button");
		addBtn.textContent = "Add Spell";
		addBtn.style.padding = "6px 10px";
		addBtn.onclick = async () => {
		    const raw = spellInput.value.trim();
		    if (!raw) return;
		
		    const formatted = normalizeSpellName(raw);
		    const spellsObj = dv.current().Spells;
		
		    if (!spellsObj.Known.Spells.some(s => s.toLowerCase() === formatted.toLowerCase())) {
		        spellsObj.Known.Spells.push(formatted);
		        await updateSpellLists(spellsObj);
		    }
		};
		
		// REMOVE button
		const removeBtn = document.createElement("button");
		removeBtn.textContent = "Remove Spell";
		removeBtn.style.padding = "6px 10px";
		removeBtn.onclick = async () => {
		    const raw = spellInput.value.trim();
		    if (!raw) return;
		
		    const formatted = normalizeSpellName(raw);
		    const spellsObj = dv.current().Spells;
		    const list = spellsObj.Known.Spells;
		
		    const idx = list.findIndex(s => s.toLowerCase() === formatted.toLowerCase());
		    if (idx !== -1) {
		        list.splice(idx, 1);
		        await updateSpellLists(spellsObj);
		    }
		};
		
		// Assemble controls
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

		// Restore original console.log (if we replaced it earlier)
		try {
			if (typeof __char_dashboard_origConsoleLog === 'function') {
				console.log = __char_dashboard_origConsoleLog;
			}
		} catch (e) {
			// ignore restore errors
		}
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
			const allowedSuffixes = ["-xphb", "-homebrew", "-xdmg"];

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
			"Dart": "Simple",
			"Greatclub": "Simple",
			"Handaxe": "Simple",
			"Javelin": "Simple",
			"Light Hammer": "Simple",
			"Mace": "Simple",
			"Quarterstaff": "Simple",
			"Sickle": "Simple",
			"Spear": "Simple",
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
			"War Pick": "Martial",
			"Warhammer": "Martial",
			"Whip": "Martial",

			// Firearms (2024 DMG keeps them Martial)
			"Pistol": "Martial",
			"Musket": "Martial",
			"Revolver": "Martial",
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
			
			// Create N rows based on total mastery slots
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
			
			
			// ===== Helper Functions ======


			// ===== Populate Mastery Options Dynamically =====
			//const player = dv.current();
			const trainings = Array.isArray(player.weapon_training)
			? player.weapon_training
			: [];
			
			
			
			function weaponAllowed(w) {
			// Simple
			if (trainings.includes("Simple Weapons") && w.type === "Simple") {
				return true;
			}

			// Martial
			if (trainings.includes("Martial Weapons") && w.type === "Martial") {
				return true;
			}

			// Martial Finesse (manually list finesse weapons)
			const finesseWeapons = ["Dagger", "Rapier", "Scimitar", "Shortsword", "Whip"];

			if (
				trainings.includes("Martial weapons that have the Finesse Property") &&
				w.type === "Martial" &&
				finesseWeapons.includes(w.name)
			) {
				return true;
			}

			return false;
		}



			
			const trainedWeapons = WEAPONS.filter(weaponAllowed);
			
			// Remove duplicates by weapon_class
			const uniqueWeapons = [];
			const seenClasses = new Set();
			for (const w of trainedWeapons) {
				if (!seenClasses.has(w.name)) {
					seenClasses.add(w.name);
					uniqueWeapons.push(w);
				}
			}
			
			// Build options
			const options = uniqueWeapons.map(w => `<option value="${w.name}">${w.name}</option>`).join("");
			
			for (let i = 1; i <= totalMasterySlots; i++) {
			const select = masteryContainer.querySelector(`#mastery${i}`);
			if (select) {
				select.innerHTML += options;

				select.addEventListener("change", e => {
					const output = masteryContainer.querySelector(`#mastery${i}Mastery`);
					output.textContent = findMastery(e.target.value);
				});
			}
		}
			
			function findMastery(weaponClass) {
				const w = uniqueWeapons.find(x => x.name === weaponClass);
				return w?.mastery ?? "–";
			}
			
			
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
		
		const inventory = dv.current().inventory ?? {};
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
		// BUILD TABLE DATA
		// ============================
		const files = dv.pages(`"${ITEMS_FOLDER}"`);
		//console.log(`files = ${files}`)
		const tableData = [];
		let totalWeight = 0;
		
		for (const [name, qty] of Object.entries(inventory)) {
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
		
		// ============================
		// DETERMINE ENCUMBRANCE
		// ============================
		let encumbrance = totalWeight <= carryWeight ? "Unencumbered" : "Encumbered";
		
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
		
		// Sort Inventory Table Alphabetically
		tableData.sort((a, b) => a.Name.localeCompare(b.Name));
		
		// Build table rows
		for (const item of tableData) {
		    const row = document.createElement("tr");
		
		    // ---- ITEM NAME (with real Obsidian link + hover preview) ----
		    const nameCell = document.createElement("td");
		
		    if (item.file) {
		        const link = document.createElement("a");
		        link.classList.add("internal-link");         // enables hover + styling
		        link.href = item.file.path;                  // correct vault-relative path
		        link.textContent = item.Name;                // displayed name
		        nameCell.appendChild(link);
		    } else {
		        nameCell.textContent = item.Name;
		    }
		
		    // Other fields
		    const qtyCell = document.createElement("td"); qtyCell.textContent = item.Qty;
		    const costCell = document.createElement("td"); costCell.textContent = item.Cost;
		    const weightCell = document.createElement("td"); weightCell.textContent = item.Weight;
		
		    row.appendChild(nameCell);
		    row.appendChild(qtyCell);
		    row.appendChild(costCell);
		    row.appendChild(weightCell);
		
		    invbody.appendChild(row);
		}
		
		invTable.appendChild(invbody);
		
		// Add the table to your wrapper
		inventoryWrapper.appendChild(invTable);

		// Mark panel as rendered to avoid duplicate renders
		try { invPanel.dataset.inventoryRendered = "true"; } catch (e) {}

		// Inventory UI appended (diagnostics suppressed)
		
		// Optional: display total weight
		const totalDiv = document.createElement("div");
		totalDiv.style.marginTop = "0.5rem";
		totalDiv.innerHTML = `<strong>Total Weight:</strong> ${totalWeight.toFixed(1)} lbs — ${encumbrance}`;
		inventoryWrapper.appendChild(totalDiv);
		
		
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
		
		// ============================
		// ADD / REMOVE ITEM FUNCTIONS
		// ============================
		
		// Normalize user input for matching
		/*function normalizeForMatch(str) {
		    return String(str)
		        .toLowerCase()
		        .replace(/\([^)]*\)/g, "")
		        .replace(/'/g, "")
		        .replace(/[^a-z0-9]/g, "-")
		        .replace(/-+/g, "-")
		        .replace(/^-|-$/g, "");
		}*/
		
		
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
		
		    const currentInv = { ...inventory };
		
		    const matchedKey = findMatchingInventoryKey(raw, currentInv);
		
		    if (matchedKey) {
		        // Increase existing quantity
		        currentInv[matchedKey] += 1;
		    } else {
		        // Create a new key in the YAML using the EXACT typed name
		        currentInv[raw] = 1;
		    }
		
		    await updateInventoryYaml(currentInv);
		    itemInput.value = "";
		};
		
		
		// -----------------------------
		// REMOVE ITEM
		// -----------------------------
		removeButton.onclick = async () => {
		    const raw = itemInput.value.trim();
		    if (!raw) return;
		
		    const currentInv = { ...inventory };
		
		    const matchedKey = findMatchingInventoryKey(raw, currentInv);
		
		    if (!matchedKey) {
		        new Notice(`Item "${raw}" not found in inventory.`);
		        return;
		    }
		
		    // decrement qty
		    currentInv[matchedKey] -= 1;
		
		    // remove if reaches zero
		    if (currentInv[matchedKey] <= 0) {
		        delete currentInv[matchedKey];
		    }
		
		    await updateInventoryYaml(currentInv);
		    itemInput.value = "";
		};
		
		//===================================================== Attuned Items
		// --- Attuned Items ---
		const attuned = dv.current().attuned ?? [];
		
		// container for attuned items
		const attunedWrapper = document.createElement("div");
		attunedWrapper.style.marginTop = "1.5rem";
		
		// title
		const title = document.createElement("h3");
		title.textContent = "Attuned Items";
		attunedWrapper.appendChild(title);
		
		if (attuned.length === 0) {
		    const noneText = document.createElement("p");
		    noneText.textContent = "_No attuned items._";
		    noneText.style.fontStyle = "italic";
		    attunedWrapper.appendChild(noneText);
		
		} else {
		    const srdItems = dv.pages(`"${ITEMS_FOLDER}"`);
		    //console.log(`srdItems = ${srdItems}`)
		    const listEl = document.createElement("ul");
		
		    attuned.forEach(name => {
		        const li = document.createElement("li");
		
		        // Normalized name for comparison
		        const norm = formatSpellName(name);
		
		        // Try to find a matching note
		        let match = null;
		        try {
		            match = srdItems.find(p => formatSpellName(p.file.name) === norm);
		        } catch (e) {
		            // If formatSpellName fails, fall back to plain text
		            match = null;
		        }
		
		        // If a match exists and has a valid path
		        if (match && match.file && match.file.path) {
		            const link = document.createElement("a");
		
		            try {
		                link.href = app.vault.getResourcePath(match.file.path);
		                link.textContent = name;
		                li.appendChild(link);
		            } catch (e) {
		                // Fallback: plain text
		                li.textContent = name;
		            }
		
		        } else {
		            // No match → plain text
		            li.textContent = name;
		        }
		
		        listEl.appendChild(li);
		    });
		
		    attunedWrapper.appendChild(listEl);
		}
		
		// append to the inventoryWrapper so it appears inside the tab
		inventoryWrapper.appendChild(attunedWrapper);
		
		
		
		
		// --- Inventory Items Dropdown + Attune Button ---
		const inventoryItems = Object.keys(dv.current().inventory ?? {});
		if (inventoryItems.length > 0) {
		    const formWrapper = document.createElement("div");
		    formWrapper.style.display = "flex";
		    formWrapper.style.alignItems = "center";
		    formWrapper.style.gap = "0.5rem";
		    formWrapper.style.marginTop = "0.8rem";
		
		    // Dropdown select
		    const select = document.createElement("select");
		    inventoryItems.forEach(item => {
		        const option = document.createElement("option");
		        option.value = item;
		        option.textContent = item;
		        select.appendChild(option);
		    });
		    formWrapper.appendChild(select);
		
		    // Attune button
		    async function addAttunedItem(itemName) {
		    const file = app.vault.getAbstractFileByPath(dv.current().file.path);
		
		    if (!file) {
		        new Notice("❌ Could not find current character file.");
		        return;
		    }
		
		    const content = await app.vault.read(file);
		    const yamlRegex = /^---\n([\s\S]*?)\n---/;
		    const match = content.match(yamlRegex);
		
		    if (!match) {
		        new Notice("❌ No frontmatter found.");
		        return;
		    }
		
		    let yamlLines = match[1].split("\n");
		
		    // Ensure `attuned:` exists
		    let attunedStart = yamlLines.findIndex(line => line.trim() === "attuned:");
		    if (attunedStart === -1) {
		        yamlLines.push("attuned:");
		        attunedStart = yamlLines.length - 1;
		    }
		
		    // Check if already attuned (case insensitive match)
		    let exists = false;
		    yamlLines.forEach(line => {
		        if (line.trim() === `- ${itemName}`) exists = true;
		    });
		
		    if (exists) {
		        new Notice(`⚠️ ${itemName} is already attuned.`);
		        return;
		    }
		
		    // Always wrap in double quotes, escape any internal quotes
			const safeItem = itemName.replace(/"/g, '\\"');
			yamlLines.splice(attunedStart + 1, 0, `  - "${safeItem}"`);
		
		    const newYaml = yamlLines.join("\n");
		    const updatedContent = content.replace(yamlRegex, `---\n${newYaml}\n---`);
		
		    await app.vault.modify(file, updatedContent);
		
		    new Notice(`✅ ${itemName} is now attuned.`);
			}
		
		    
		    const attuneButton = document.createElement("button");
		    attuneButton.textContent = "Attune Item";
		    attuneButton.style.padding = "6px 12px";
		    attuneButton.style.borderRadius = "6px";
		    attuneButton.style.cursor = "pointer";
		    attuneButton.style.border = "none";
		    attuneButton.style.backgroundColor = "var(--interactive-accent)";
		    attuneButton.style.color = "var(--text-on-accent)";
		    attuneButton.style.fontWeight = "500";
		
		    formWrapper.appendChild(attuneButton);
		    attunedWrapper.appendChild(formWrapper);
		
		    // --- Button Behavior ---
		    attuneButton.onclick = async () => {
		    const selected = select.value;
		    if (!selected) return;
		
		    await addAttunedItem(selected);
		
		    // Immediately update visual list
		    const li = document.createElement("li");
		    li.textContent = selected;
		    listEl.appendChild(li);
			};
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


// Conditions tab renderer
(async function renderConditionsTab() {
	try {
		// Wait specifically for the Conditions panel to exist in the DOM
		await waitForElement("#conditions .panel");

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
		
		// Create a container for buttons
		const buttonContainer = document.createElement("div");
		buttonContainer.classList.add("conditions-buttons");
		buttonContainer.style.display = "flex";
		buttonContainer.style.flexWrap = "wrap";
		buttonContainer.style.gap = "0.5rem";
		panel.appendChild(buttonContainer);
		
		// === BOOLEAN CONDITIONS ===
		const booleanConditions = [
		    "blinded", "charmed", "concentrating", "deafened",
		    "frightened", "grappled", "incapacitated", "invisible",
		    "paralyzed", "petrified", "poisoned", "prone",
		    "restrained", "stunned", "unconscious", "mage_armor"
		];
		
		// Helper to create a condition button
		function createConditionButton(cond) {
		    const btn = document.createElement("button");
		    const currentVal = dv.current().conditions?.[cond] ?? false;
		    btn.textContent = cond.replace(/_/g," ").replace(/\b\w/g, c => c.toUpperCase());
		    btn.style.backgroundColor = currentVal ? "var(--interactive-accent)" : "var(--background-modifier-border)";
		    btn.style.color = "var(--text-on-accent)";
		    btn.style.padding = "4px 8px";
		    btn.style.borderRadius = "6px";
		    btn.style.border = "none";
		    btn.style.cursor = "pointer";
		    btn.onclick = async () => {
		    const filePath = dv.current().file.path;
		    const file = app.vault.getAbstractFileByPath(filePath);
		    if (!file) return;
		    const content = await app.vault.read(file);
		    const yamlRegex = /^---\n([\s\S]*?)\n---/;
		    const match = content.match(yamlRegex);
		    if (!match) return;
		    let yaml = match[1].split("\n");
		    
		    let condIndex = yaml.findIndex(line => line.trim().startsWith("conditions:"));
		    if (condIndex === -1) {
		        yaml.push("conditions:");
		        yaml.push(`  ${cond}: true`);
		    } else {
		        let lineIndex = yaml.findIndex((line,i) => i > condIndex && /^\s{2}[^\s]+:/.test(line) && line.trim().startsWith(cond + ":"));
		        if (lineIndex === -1) {
		            yaml.splice(condIndex + 1, 0, `  ${cond}: true`);
		        } else {
		            const current = yaml[lineIndex].split(":")[1].trim() === "true";
		            const newVal = !current;
		            yaml[lineIndex] = `  ${cond}: ${newVal}`;
		            
		            // If turning off Concentration, also remove concentration_spell
					if (cond === "concentrating" && !newVal) {
					    const spellIndex = yaml.findIndex((line,i) =>
					        i > condIndex && /^\s{2}concentration_spell:/.test(line)
					    );
					    if (spellIndex !== -1) yaml.splice(spellIndex, 1);
					}
		
		            // If turning off Concentration, also remove concentration_spell
		            if (cond === "concentrating" && !newVal) {
		                const spellIndex = yaml.findIndex((line,i) => i > condIndex && /^\s{2}concentration_spell:/.test(line));
		                if (spellIndex !== -1) yaml.splice(spellIndex, 1);
		            }
		        }
		    }
		
		    const newYaml = yaml.join("\n");
		    const updatedContent = content.replace(yamlRegex, `---\n${newYaml}\n---`);
		    await app.vault.modify(file, updatedContent);
		
		    // Update button color
		    btn.style.backgroundColor = btn.style.backgroundColor === "var(--interactive-accent)" ? "var(--background-modifier-border)" : "var(--interactive-accent)";
		};
		    return btn;
		}
		
		// Render boolean condition buttons
		booleanConditions.forEach(cond => buttonContainer.appendChild(createConditionButton(cond)));
		
		// === EXHAUSTION ===
		const exContainer = document.createElement("div");
		exContainer.style.display = "flex";
		exContainer.style.alignItems = "center";
		exContainer.style.gap = "0.3rem";
		
		const exButton = document.createElement("button");
		exButton.textContent = "Exhaustion";
		exButton.style.flex = "1";
		
		const exInc = document.createElement("button");
		exInc.textContent = "+";
		
		const exDec = document.createElement("button");
		exDec.textContent = "-";
		
		// Helpers for exhaustion
		async function toggleExhaustion() {
		    const filePath = dv.current().file.path;
		    const file = app.vault.getAbstractFileByPath(filePath);
		    if (!file) return;
		    const content = await app.vault.read(file);
		    const yamlRegex = /^---\n([\s\S]*?)\n---/;
		    const match = content.match(yamlRegex);
		    if (!match) return;
		    let yaml = match[1].split("\n");
		    let condIndex = yaml.findIndex(line => line.trim().startsWith("conditions:"));
		    if (condIndex === -1) {
		        yaml.push("conditions:");
		        yaml.push("  exhaustion:");
		        yaml.push("    count: 1");
		        yaml.push("    Level: true");
		    } else {
		        let exIndex = yaml.findIndex((line,i) => i>condIndex && /^\s{2}exhaustion:/.test(line));
		        if (exIndex === -1) {
		            yaml.splice(condIndex + 1, 0, "  exhaustion:", "    count: 1", "    Level: true");
		        } else {
		            let levelIndex = yaml.findIndex((line,i) => i>exIndex && /^\s{4}Level:/.test(line));
		            let countIndex = yaml.findIndex((line,i) => i>exIndex && /^\s{4}count:/.test(line));
		            let levelVal = yaml[levelIndex].split(":")[1].trim() === "true";
		            if (!levelVal) {
		                yaml[levelIndex] = "    Level: true";
		                yaml[countIndex] = "    count: 1";
		            } else {
		                yaml[levelIndex] = "    Level: false";
		                yaml[countIndex] = "    count: 0";
		            }
		        }
		    }
		    const updatedContent = content.replace(yamlRegex, `---\n${yaml.join("\n")}\n---`);
		    await app.vault.modify(file, updatedContent);
		}
		
		async function changeExhaustion(delta) {
		    const filePath = dv.current().file.path;
		    const file = app.vault.getAbstractFileByPath(filePath);
		    if (!file) return;
		    const content = await app.vault.read(file);
		    const yamlRegex = /^---\n([\s\S]*?)\n---/;
		    const match = content.match(yamlRegex);
		    if (!match) return;
		    let yaml = match[1].split("\n");
		    let condIndex = yaml.findIndex(line => line.trim().startsWith("conditions:"));
		    if (condIndex === -1) return;
		    let exIndex = yaml.findIndex((line,i) => i>condIndex && /^\s{2}exhaustion:/.test(line));
		    if (exIndex === -1) return;
		    let countIndex = yaml.findIndex((line,i) => i>exIndex && /^\s{4}count:/.test(line));
		    let levelIndex = yaml.findIndex((line,i) => i>exIndex && /^\s{4}Level:/.test(line));
		    let countVal = parseInt(yaml[countIndex].split(":")[1].trim());
		    countVal += delta;
		    if (countVal <= 0) {
		        yaml[countIndex] = "    count: 0";
		        yaml[levelIndex] = "    Level: false";
		    } else {
		        yaml[countIndex] = `    count: ${countVal}`;
		        yaml[levelIndex] = "    Level: true";
		    }
		    const updatedContent = content.replace(yamlRegex, `---\n${yaml.join("\n")}\n---`);
		    await app.vault.modify(file, updatedContent);
		}
		
		// Attach events
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
			const cs2 = window.getComputedStyle(panel);
			console.log("conditions panel active class:", panel.classList.contains('active'), "display:", cs2.display, "visibility:", cs2.visibility, "opacity:", cs2.opacity);
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
			const cs3 = window.getComputedStyle(notePanel);
			console.log("session panel active class:", notePanel.classList.contains('active'), "display:", cs3.display, "visibility:", cs3.visibility, "opacity:", cs3.opacity);
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


// ======================================================================================
//=============================================================         Wild Shape Helper
// ======================================================================================
console.log("Rendering: Wild Shape Helper");
if (hasDruid && druidLevel >= 2) {
	function getWildShapeRules(druidLevel) {
		if (druidLevel >= 8) {
			return { known: 8, maxCR: 1, allowFly: true };
		}
		if (druidLevel >= 4) {
			return { known: 6, maxCR: 0.5, allowFly: false };
		}
		if (druidLevel >= 2) {
			return { known: 4, maxCR: 0.25, allowFly: false };
		}
		return { known: 0, maxCR: 0, allowFly: false };
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

			const statblock = p.statblock ?? {};
			const speed = String(statblock.speed ?? "");
			const hasFly = /\bfly\s*\d+/i.test(speed);

			return {
			name: p.aliases?.[0] ?? p.file.name.replace(/-x\w+$/, ""),
			page: p,
			cr,
			hasFly
			};
		})
		.where(b =>
			b.cr <= rules.maxCR &&
			(rules.allowFly || !b.hasFly)
		)
		.sort(b => b.name);


	const file = app.workspace.getActiveFile();
	const savedWS = Array.isArray(dv.current()["wild-shape-options"])
	? dv.current()["wild-shape-options"]
	: [];

	const wrapper = dv.el("div", "", { cls: "wild-shape-wrapper" });

	wrapper.createEl("h4", { text: "Wild Shape Options" });
	wrapper.createEl("p", {
	text: `Choose ${rules.known} beast forms (Max CR ${rules.maxCR}${rules.allowFly ? ", Fly allowed" : ""})`
	});

	for (let i = 0; i < rules.known; i += 2) {
	const row = wrapper.createEl("div", { cls: "wild-shape-row" });

	renderWildShapeSlot(row, i);
	renderWildShapeSlot(row, i + 1);
	}
	function renderWildShapeSlot(row, index) {
		if (index >= rules.known) return;

		const slot = row.createEl("div", { cls: "wild-shape-slot" });

		const select = slot.createEl("select");
		select.createEl("option", { text: "-- Select Beast --", value: "" });

		beasts.forEach(b => {
			select.createEl("option", {
			text: `${b.name} (CR ${b.cr})`,
			value: b.name.toLowerCase()
			});
		});

		const link = slot.createEl("a", {
			cls: "internal-link",
			text: "—",
			href: "#"
		});

		// Restore saved choice
		if (savedWS[index]) {
			select.value = savedWS[index].toLowerCase();
			const found = beasts.find(b => b.name.toLowerCase() === savedWS[index].toLowerCase());
			if (found) {
			link.textContent = found.name;
			link.href = found.page.file.path;
			}
		}

		select.addEventListener("change", async e => {
			const value = e.target.value;
			const next = [...savedWS];
			next[index] = value || null;

			await app.fileManager.processFrontMatter(file, fm => {
			fm["wild-shape-options"] = next.filter(Boolean);
			});

			const beast = beasts.find(b => b.name.toLowerCase() === value);
			if (beast) {
			link.textContent = beast.name;
			link.href = beast.page.file.path;
			} else {
			link.textContent = "—";
			link.href = "#";
			}
		});
		}

}

