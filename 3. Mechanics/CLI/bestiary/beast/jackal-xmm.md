---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Jackal
---
# [Jackal](3. Mechanics\CLI\bestiary\beast/jackal-xmm.md)
*Source: Monster Manual (2024) p. 364. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Jackal (XMM)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "3"
"hit_dice": "1d6"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "15"
  - !!int "11"
  - !!int "3"
  - !!int "12"
  - !!int "6"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 90 ft., passive\
  \ Perception 15"
"languages": ""
"cr": "0"
"actions":
  - "desc": "*Melee Attack Roll:* +1, reach 5 ft. *Hit:* 1 (1d4 - 1) Piercing\
      \ damage."
    "name": "Bite"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/jackal-xmm.webp"
```
^statblock

## Environment

desert, grassland