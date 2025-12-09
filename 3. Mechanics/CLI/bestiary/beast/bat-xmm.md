---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bat
---
# [Bat](3. Mechanics\CLI\bestiary\beast/bat-xmm.md)
*Source: Monster Manual (2024) p. 349, Player's Handbook (2024) p. 346. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Bat (XMM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"modifier": !!int "2"
"stats":
  - !!int "2"
  - !!int "15"
  - !!int "8"
  - !!int "2"
  - !!int "12"
  - !!int "4"
"speed": "5 ft., fly 30 ft."
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 11"
"languages": ""
"cr": "0"
"actions":
  - "desc": "*Melee Attack Roll:* +4 to hit, reach 5 ft. *Hit:* 1 Piercing damage."
    "name": "Bite"
"source":
  - "XMM"
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/bat-xmm.webp"
```
^statblock

## Environment

forest, mountain, underdark, urban