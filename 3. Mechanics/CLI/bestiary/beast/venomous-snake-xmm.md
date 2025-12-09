---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Venomous Snake
---
# [Venomous Snake](3. Mechanics\CLI\bestiary\beast/venomous-snake-xmm.md)
*Source: Monster Manual (2024) p. 372, Player's Handbook (2024) p. 358. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Venomous Snake (XMM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "5"
"hit_dice": "2d4"
"modifier": !!int "2"
"stats":
  - !!int "2"
  - !!int "15"
  - !!int "11"
  - !!int "1"
  - !!int "10"
  - !!int "3"
"speed": "30 ft., swim 30 ft."
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 10 ft., passive\
  \ Perception 10"
"languages": ""
"cr": "1/8"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 4 (1d4 + 2) Piercing\
      \ damage plus 3 (1d6) Poison damage."
    "name": "Bite"
"source":
  - "XMM"
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/venomous-snake-xmm.webp"
```
^statblock

## Environment

coastal, desert, forest, grassland, hill, swamp