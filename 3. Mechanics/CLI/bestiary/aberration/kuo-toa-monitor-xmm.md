---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Kuo-toa Monitor
---
# [Kuo-toa Monitor](3. Mechanics\CLI\bestiary\aberration/kuo-toa-monitor-xmm.md)
*Source: Monster Manual (2024) p. 190*  

Kuo-toa monitors control the day-to-day life of weaker kuo-toa, directing their work and worship. They also train beasts or monsters in the kuo-toa's service—such as chuuls or giant crabs—and command them in battle. Archpriests bless monitors with the power to control their underlings and to subdue foes with electricity channeled through their bizarre whips.

## Kuo-toa

*Fishlike Fanatics of the Deep*

- **Habitat.** Coastal, Underdark  
- **Treasure.** [Relics](3.%20Mechanics/CLI/tables/random-magic-items-relics.md)  

Kuo-toa have slimy, humanoid bodies and the heads of goggle-eyed deep-sea fish. They claim they once dominated whole worlds, their empires spanning land and sea under the blessings of piscine gods. The kuo-toa can't say what disaster brought their glorious civilization to an end, but elves, humans, mind flayers, and the kuo-toan gods bear the brunt of their blame. From the lands and seas of the surface, the kuo-toa retreated into cavernous trenches and Underdark seas. In these hidden realms, kuo-toa brood over all they've lost and forgotten, nursing plots to avenge themselves for slights that might never have occurred.

Kuo-toa hate the civilizations of the surface and the Underdark, believing themselves to be victims of age-old slights and ongoing conspiracies. Kuo-toa undertake contrived plots to propel themselves to dominance, often kidnapping people to learn their secrets or making dubious sacrifices to bizarre gods. To facilitate such plots, kuo-toa try to capture creatures alive using nets or strange weapons. Drow, dwarves, and gnomes dwelling in the Underdark, as well as surface communities near submerged subterranean passages, are frequent targets for kuo-toa raids and other plots.

Kuo-toa frequently serve depraved masterminds such as aboleths and krakens. Such kuo-toa believe these powerful creatures are avatars of kuo-toan deities or gods in their own right. Kuo-toa might temporarily ally with other evil creatures, but these alliances shift as kuo-toa leaders interpret omens from their unpredictable deities.

### Kuo-toa Deities

Kuo-toa ever seek to placate their inscrutable deities. However, few kuo-toa can agree on the identities of their gods, and little consistency exists between kuo-toa communities. Only Blibdoolpoolp the Sea Mother, a figure with a human body but the head and claws of a crayfish, sees broad worship.

Lacking information about what their other gods look like, kuo-toa priests invent new forms for them, creating divine idols with whatever objects are at hand. But whether these kuo-toa priests draw power from belief or delusion, aberrant talent, or a stranger supernatural source, some power answers their petitions. Roll twice on or choose results from the Kuo-toa Deity Features table to inspire how kuo-toa represent a deity.

**Kuo-toa Deity Features**

| dice: 1d10 | The Deity's Head Is Like A... | The Deity's Body Is Like A... |
|------------|-------------------------------|-------------------------------|
| 1 | Barnacle | Hermit crab |
| 2 | Crab claw | Jellyfish |
| 3 | Hagfish | Kuo-toa |
| 4 | Moray eel | Mantis shrimp |
| 5 | Sea anemone | Merfolk |
| 6 | Shark | Plesiosaurus |
| 7 | Sunfish | Sea cucumber |
| 8 | Tentacle | Ship's figurehead |
| 9 | Treasure chest | Squid |
| 10 | Viperfish | Whale |
^kuo-toa-deity-features

### Kuo-toa Sanctuaries

Kuo-toa typically organize their communities around sites they believe to be important to their deities. These might be structures or series of caverns, and most feature both air-filled and submerged chambers. Important places within these sites suggest the rituals of kuo-toa faiths, the demands of kuo-toa deities, or the whims of omen-seeking archpriests. As with kuo-toa deities, the features of these locations vary between communities. Roll on or choose a result from the Kuo-toa Ritual Sites table to inspire features and suggest adventures within a kuo-toa community.

**Kuo-toa Ritual Sites**

| dice: 1d8 | The Kuo-toa Community Features... |
|-----------|-----------------------------------|
| 1 | An arena scattered with weapons made from crustacean shells. |
| 2 | A gallery of hibernating chuuls. |
| 3 | A garden of mussels and tide pool creatures that whisper secrets. |
| 4 | A hidden shrine with a patchwork depiction of a new kuo-toa deity. |
| 5 | The lavish chamber of an animal or monster said to be prophetic, lucky, or literate. |
| 6 | A pool filled with jellyfish, eels, or fish roe that glow in organized patterns. |
| 7 | A punishment chamber exposed to the light of the surface. |
| 8 | A towering statue of a kuo-toa deity. |
^kuo-toa-ritual-sites

> [!quote] A quote from Tak Merakin, Harbor Master of the Styes  
> 
> When the Corpse Moon rises and the Chum-Tide washes in, up rise the Gogglers from their pits beneath the waves. Burbling and noisome they come, fishing night's shores as we do dawn's waves.


```statblock
"name": "Kuo-toa Monitor (XMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "14"
  - !!int "12"
  - !!int "14"
  - !!int "11"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Religion](3.%20Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+3"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., [truesight](3.%20Mechanics/CLI/rules/senses.md#Truesight)\
  \ 30 ft., passive Perception 16"
"languages": "Undercommon"
"cr": "3"
"traits":
  - "desc": "The kuo-toa can breathe air and water."
    "name": "Amphibious"
  - "desc": "While in sunlight, the kuo-toa has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on ability checks and attack rolls."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The kuo-toa makes two Bone Whip attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 10 ft. *Hit:* 6 (1d6 + 3) Slashing\
      \ damage plus 7 (2d6) Lightning damage, and the target can't make [Opportunity\
      \ Attacks](3.%20Mechanics/CLI/rules/actions.md#Opportunity%20Attack) until the\
      \ start of the kuo-toa's next turn."
    "name": "Bone Whip"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/kuo-toa-monitor-xmm.webp"
```
^statblock

## Environment

coastal, underdark