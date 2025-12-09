---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Hyena
---
# [Hyena](3. Mechanics\CLI\bestiary\beast/hyena-xmm.md)
*Source: Monster Manual (2024) p. 363. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Hyena (XMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "5"
"hit_dice": "1d8 + 1"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "13"
  - !!int "12"
  - !!int "2"
  - !!int "12"
  - !!int "5"
"speed": "50 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": ""
"cr": "0"
"traits":
  - "desc": "The hyena has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the hyena's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "*Melee Attack Roll:* +2, reach 5 ft. *Hit:* 3 (1d6) Piercing damage."
    "name": "Bite"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/hyena-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland, hill