---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/air
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental/genie
statblock: inline
statblock-link: "#^statblock"
aliases:
- Djinni
---
# [Djinni](3. Mechanics\CLI\bestiary\elemental/djinni-xmm.md)
*Source: Monster Manual (2024) p. 99. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Djinni

*Genie of the Air*

- **Habitat.** Coastal, Planar (Elemental Plane of Air)  
- **Treasure.** [Arcana](3.%20Mechanics/CLI/tables/random-magic-items-arcana.md)  

As genies of wind and skies, djinn personify freedom and might. They can control wind and travel as swiftly as a breeze. They might be as serene as drifting clouds or as tempestuous as storms, but most djinn relish their freedom and desire to discover the wonders of the multiverse. Djinn often know many stories, and they might share such lore with those who offer their own exciting stories in trade.

While many djinn create airy palaces on stormy coasts or high in the clouds, untold numbers dwell on the Elemental Plane of Air. In floating cities, djinn collect tales and experiences from across the planes of existence, sharing them in fabulous forums, libraries, and theaters. The greatest of these cities is the Citadel of Ice and Steel, in which wind-sculpted towers contain a city-size trove of incredible knowledge and treasures that defy belief.

```statblock
"name": "Djinni (XMM)"
"size": "Large"
"type": "elemental"
"subtype": "genie"
"alignment": "Chaotic Good"
"ac": !!int "17"
"hp": !!int "218"
"hit_dice": "19d10 + 114"
"modifier": !!int "2"
"stats":
  - !!int "21"
  - !!int "15"
  - !!int "22"
  - !!int "15"
  - !!int "16"
  - !!int "20"
"speed": "30 ft., fly 90 ft. (hover)"
"saves":
  - "dexterity": !!int "6"
  - "wisdom": !!int "7"
"damage_immunities": "lightning, thunder"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 13"
"languages": "Primordial (Auran)"
"cr": "11"
"traits":
  - "desc": "If the djinni dies outside the Elemental Plane of Air, its body dissolves\
      \ into mist, and it gains a new body in 1d4 days, reviving with all its [Hit\
      \ Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md) somewhere\
      \ on the Plane of Air."
    "name": "Elemental Restoration"
  - "desc": "The djinni has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The djinni has a 30 percent chance of knowing the [Wish](3.%20Mechanics/CLI/spells/wish-xphb.md)\
      \ spell. If the djinni knows it, the djinni can cast it only on behalf of a\
      \ non-genie creature who communicates a wish in a way the djinni can understand.\
      \ If the djinni casts the spell for the creature, the djinni suffers none of\
      \ the spell's stress. Once the djinni has cast it three times, the djinni can't\
      \ do so again for 365 days."
    "name": "Wishes"
"actions":
  - "desc": "The djinni makes three attacks, using Storm Blade or Storm Bolt in any\
      \ combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +9, reach 5 feet. *Hit:* 12 (2d6 + 5) Slashing\
      \ damage plus 7 (2d6) Lightning damage."
    "name": "Storm Blade"
  - "desc": "*Ranged Attack Roll:* +9, range 120 feet. *Hit:* 13 (3d8) Thunder\
      \ damage. If the target is a Large or smaller creature, it has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Storm Bolt"
  - "desc": "The djinni conjures a whirlwind at a point it can see within 120 feet.\
      \ The whirlwind fills a 20-foot-radius, 60-foot-high [Cylinder](3.%20Mechanics/CLI/rules/variant-rules/cylinder-area-of-effect-xphb.md)\
      \ centered on that point. The whirlwind lasts until the djinni's [Concentration](3.%20Mechanics/CLI/rules/conditions.md#Concentration)\
      \ on it ends. The djinni can move the whirlwind up to 20 feet at the start of\
      \ each of its turns.\n\nWhenever the whirlwind enters a creature's space or\
      \ a creature enters the whirlwind, that creature is subjected to the following\
      \ effect. *Strength Saving Throw:* DC 17 (a creature makes this save only once\
      \ per turn, and the djinni is unaffected). *Failure:* While in the whirlwind,\
      \ the target has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition and moves with the whirlwind. At the start of each of its turns,\
      \ the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) target\
      \ takes 21 (6d6) Thunder damage. At the end of each of its turns, the target\
      \ repeats the save, ending the effect on itself on a success."
    "name": "Create Whirlwind"
  - "desc": "The djinni casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 17):\n\n**At\
      \ will:** [Detect Evil and Good](3.%20Mechanics/CLI/spells/detect-evil-and-good-xphb.md),\
      \ [Detect Magic](3.%20Mechanics/CLI/spells/detect-magic-xphb.md)\n\n**2/day\
      \ each:** [Create Food and Water](3.%20Mechanics/CLI/spells/create-food-and-water-xphb.md)\
      \ (can create wine instead of water), [Tongues](3.%20Mechanics/CLI/spells/tongues-xphb.md),\
      \ [Wind Walk](3.%20Mechanics/CLI/spells/wind-walk-xphb.md)\n\n**1/day each:**\
      \ [Creation](3.%20Mechanics/CLI/spells/creation-xphb.md), [Gaseous Form](3.%20Mechanics/CLI/spells/gaseous-form-xphb.md),\
      \ [Invisibility](3.%20Mechanics/CLI/spells/invisibility-xphb.md), [Major Image](3.%20Mechanics/CLI/spells/major-image-xphb.md),\
      \ [Plane Shift](3.%20Mechanics/CLI/spells/plane-shift-xphb.md)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/elemental/token/djinni-xmm.webp"
```
^statblock

## Environment

coastal, planar, air