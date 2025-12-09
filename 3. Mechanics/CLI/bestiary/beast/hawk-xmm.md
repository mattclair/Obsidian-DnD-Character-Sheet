---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Hawk
---
# [Hawk](3. Mechanics\CLI\bestiary\beast/hawk-xmm.md)
*Source: Monster Manual (2024) p. 362, Player's Handbook (2024) p. 352. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Hawk (XMM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"modifier": !!int "3"
"stats":
  - !!int "5"
  - !!int "16"
  - !!int "8"
  - !!int "2"
  - !!int "14"
  - !!int "6"
"speed": "10 ft., fly 60 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"senses": "passive Perception 16"
"languages": ""
"cr": "0"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 1 Slashing damage."
    "name": "Talons"
"source":
  - "XMM"
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/hawk-xmm.webp"
```
^statblock

## Environment

arctic, coastal, forest, grassland, hill, mountain