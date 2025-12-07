---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/feywild
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey/goblinoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bugbear Stalker
---
# [Bugbear Stalker](3. Mechanics\CLI\bestiary\fey/bugbear-stalker-xmm.md)
*Source: Monster Manual (2024) p. 62. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Bugbear stalkers frequently take their victims hostage, relishing opportunities to imprison and terrorize other creatures.

## Bugbears

*Lurking Goblinoid Brutes*

- **Habitat.** Forest, Grassland, Planar (Feywild), Underdark  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md), Individual  

Bugbears embody fear of the wilds and the menace of natural places. They're notoriously stealthy, and foes that venture into their territories often vanish without a trace.

```statblock
"name": "Bugbear Stalker (XMM)"
"size": "Medium"
"type": "fey"
"subtype": "goblinoid"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "14"
  - !!int "14"
  - !!int "11"
  - !!int "12"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "constitution": !!int "4"
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
  - "name": "[Survival](3.%20Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+3"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Common, Goblin"
"cr": "3"
"traits":
  - "desc": "The bugbear needn't spend extra movement to move a creature it is grappling."
    "name": "Abduct"
"actions":
  - "desc": "The bugbear makes two Javelin or Morningstar attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +5, reach 10 ft. or range 30/120 ft.\
      \ *Hit:* 13 (3d6 + 3) Piercing damage."
    "name": "Javelin"
  - "desc": "*Melee Attack Roll:* +5 (with [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ if the target is [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the bugbear), reach 10 ft. *Hit:* 12 (2d8 + 3) Piercing damage."
    "name": "Morningstar"
"bonus_actions":
  - "desc": "*Dexterity Saving Throw:* DC 13, one Medium or smaller creature the bugbear\
      \ can see within 10 feet. *Failure:* The target has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 13)."
    "name": "Quick Grapple"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fey/token/bugbear-stalker-xmm.webp"
```
^statblock

## Environment

forest, grassland, planar, feywild, underdark