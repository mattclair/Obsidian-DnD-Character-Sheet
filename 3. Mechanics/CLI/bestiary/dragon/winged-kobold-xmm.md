---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Winged Kobold
---
# [Winged Kobold](3. Mechanics\CLI\bestiary\dragon/winged-kobold-xmm.md)
*Source: Monster Manual (2024) p. 185*  

Some kobolds are born with wings. Called urds by others of their kind, these kobolds are thought to be blessed by a dragon or Tiamat, the Dragon Queen. Despite their favored status, winged kobolds are as cowardly as their brethren and use their flight mostly to keep out of reach of their foes.

## Kobolds

*Tricksters and Servants to Chromatic Dragons*

- **Habitat.** Arctic, Coastal, Desert, Forest, Hill, Mountain, Swamp, Underdark, Urban  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Cowardly cousins to chromatic dragons, kobolds serve draconic overlords as warriors and servants. These scrappy menaces mimic the behaviors of their dragon masters. Though their small stature and recklessness make kobolds poor imitators of dragons, what they lack in ferocity they make up for in zeal and ingenuity. They are especially adept at creating traps and setting ambushes.

Kobolds' scales resemble those of chromatic dragons that live near their warrens. Rarely, kobolds possess features evocative of metallic dragons or other dragon-like creatures.

```statblock
"name": "Winged Kobold (XMM)"
"size": "Small"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "10"
"hit_dice": "4d6 - 4"
"modifier": !!int "3"
"stats":
  - !!int "7"
  - !!int "16"
  - !!int "9"
  - !!int "8"
  - !!int "7"
  - !!int "8"
"speed": "30 ft., fly 30 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 8"
"languages": "Common, Draconic"
"cr": "1/4"
"traits":
  - "desc": "The kobold has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the kobold's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
  - "desc": "While in sunlight, the kobold has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on ability checks and attack rolls."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 6 (1d6 + 3) Piercing\
      \ damage."
    "name": "Dragon-Tooth Blade"
  - "desc": "*Ranged Attack Roll:* +5, range 30 ft. *Hit:* 6 (1d6 + 3) damage\
      \ of a type chosen by the kobold: Acid, Cold, Fire, Lightning, or Poison."
    "name": "Chromatic Spittle"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/dragon/token/winged-kobold-xmm.webp"
```
^statblock

## Environment

arctic, coastal, desert, forest, hill, mountain, swamp, underdark, urban