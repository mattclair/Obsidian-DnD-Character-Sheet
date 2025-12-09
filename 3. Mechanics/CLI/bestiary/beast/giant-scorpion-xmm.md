---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Scorpion
---
# [Giant Scorpion](3. Mechanics\CLI\bestiary\beast/giant-scorpion-xmm.md)
*Source: Monster Manual (2024) p. 359. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Giant Scorpion (XMM)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "52"
"hit_dice": "7d10 + 14"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "13"
  - !!int "15"
  - !!int "1"
  - !!int "9"
  - !!int "3"
"speed": "40 ft."
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 9"
"languages": ""
"cr": "3"
"actions":
  - "desc": "The scorpion makes two Claw attacks and one Sting attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 6 (1d6 + 3) Bludgeoning\
      \ damage. If the target is a Large or smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 13) from one of two claws."
    "name": "Claw"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 7 (1d8 + 3) Piercing\
      \ damage plus 11 (2d10) Poison damage."
    "name": "Sting"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/giant-scorpion-xmm.webp"
```
^statblock

## Environment

desert