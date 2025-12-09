---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Crab
---
# [Giant Crab](3. Mechanics\CLI\bestiary\beast/giant-crab-xmm.md)
*Source: Monster Manual (2024) p. 356, Player's Handbook (2024) p. 350. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Giant Crab (XMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "13"
"hit_dice": "3d8"
"modifier": !!int "1"
"stats":
  - !!int "13"
  - !!int "13"
  - !!int "11"
  - !!int "1"
  - !!int "9"
  - !!int "3"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 30 ft., passive\
  \ Perception 9"
"languages": ""
"cr": "1/8"
"traits":
  - "desc": "The crab can breathe air and water."
    "name": "Amphibious"
"actions":
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 4 (1d6 + 1) Bludgeoning\
      \ damage. If the target is a Medium or smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 11) from one of two claws."
    "name": "Claw"
"source":
  - "XMM"
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/giant-crab-xmm.webp"
```
^statblock

## Environment

coastal, underwater