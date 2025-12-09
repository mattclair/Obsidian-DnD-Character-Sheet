---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Boar
---
# [Boar](3. Mechanics\CLI\bestiary\beast/boar-xmm.md)
*Source: Monster Manual (2024) p. 350, Player's Handbook (2024) p. 347. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Boar (XMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "13"
"hit_dice": "2d8 + 4"
"modifier": !!int "0"
"stats":
  - !!int "13"
  - !!int "11"
  - !!int "14"
  - !!int "2"
  - !!int "9"
  - !!int "5"
"speed": "40 ft."
"senses": "passive Perception 9"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "While [Bloodied](3.%20Mechanics/CLI/rules/conditions.md#Bloodied), the\
      \ boar has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on attack rolls."
    "name": "Bloodied Fury"
"actions":
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 4 (1d6 + 1) Piercing\
      \ damage. If the target is a Medium or smaller creature and the boar moved 20+\
      \ feet straight toward it immediately before the hit, the target takes an extra\
      \ 3 (1d6) Piercing damage and has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Gore"
"source":
  - "XMM"
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/boar-xmm.webp"
```
^statblock

## Environment

forest, grassland, hill