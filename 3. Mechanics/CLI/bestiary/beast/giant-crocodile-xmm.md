---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Crocodile
---
# [Giant Crocodile](3. Mechanics\CLI\bestiary\beast/giant-crocodile-xmm.md)
*Source: Monster Manual (2024) p. 356. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Giant Crocodile (XMM)"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "85"
"hit_dice": "9d12 + 27"
"modifier": !!int "-1"
"stats":
  - !!int "21"
  - !!int "9"
  - !!int "17"
  - !!int "2"
  - !!int "10"
  - !!int "7"
"speed": "30 ft., swim 50 ft."
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
  - "desc": "The crocodile can hold its breath for 1 hour."
    "name": "Hold Breath"
"actions":
  - "desc": "The crocodile makes one Bite attack and one Tail attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +8, reach 5 ft. *Hit:* 21 (3d10 + 5) Piercing\
      \ damage. If the target is a Large or smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 15). While [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled),\
      \ the target has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition and can't be targeted by the crocodile's Tail."
    "name": "Bite"
  - "desc": "*Melee Attack Roll:* +8, reach 10 ft. *Hit:* 18 (3d8 + 5) Bludgeoning\
      \ damage. If the target is a Large or smaller creature, it has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Tail"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/giant-crocodile-xmm.webp"
```
^statblock

## Environment

coastal, swamp