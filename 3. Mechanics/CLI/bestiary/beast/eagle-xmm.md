---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Eagle
---
# [Eagle](3. Mechanics\CLI\bestiary\beast/eagle-xmm.md)
*Source: Monster Manual (2024) p. 353. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Eagle (XMM)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "4"
"hit_dice": "1d6 + 1"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "15"
  - !!int "12"
  - !!int "2"
  - !!int "14"
  - !!int "7"
"speed": "10 ft., fly 60 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"senses": "passive Perception 16"
"languages": ""
"cr": "0"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 feet. *Hit:* 4 (1d4 + 2) Slashing\
      \ damage."
    "name": "Talons"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/eagle-xmm.webp"
```
^statblock

## Environment

coastal, grassland, hill, mountain