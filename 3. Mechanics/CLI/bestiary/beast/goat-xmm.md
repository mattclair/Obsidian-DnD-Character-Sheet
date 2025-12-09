---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Goat
---
# [Goat](3. Mechanics\CLI\bestiary\beast/goat-xmm.md)
*Source: Monster Manual (2024) p. 362, Player's Handbook (2024) p. 351. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Goat (XMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"modifier": !!int "0"
"stats":
  - !!int "11"
  - !!int "10"
  - !!int "11"
  - !!int "2"
  - !!int "10"
  - !!int "5"
"speed": "40 ft., climb 30 ft."
"saves":
  - "strength": !!int "2"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": ""
"cr": "0"
"actions":
  - "desc": "*Melee Attack Roll:* +2, reach 5 ft. *Hit:* 1 Bludgeoning damage, or\
      \ 2 (1d4) Bludgeoning damage if the goat moved 20+ feet straight toward the\
      \ target immediately before the hit."
    "name": "Ram"
"source":
  - "XMM"
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/goat-xmm.webp"
```
^statblock

## Environment

grassland, hill, mountain, urban