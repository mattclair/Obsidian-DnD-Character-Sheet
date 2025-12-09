---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Reef Shark
---
# [Reef Shark](3. Mechanics\CLI\bestiary\beast/reef-shark-xmm.md)
*Source: Monster Manual (2024) p. 368, Player's Handbook (2024) p. 356. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Reef Shark (XMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "15"
  - !!int "13"
  - !!int "1"
  - !!int "10"
  - !!int "4"
"speed": "5 ft., swim 30 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 30 ft., passive\
  \ Perception 12"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The shark has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the shark's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
  - "desc": "The shark can breathe only underwater."
    "name": "Water Breathing"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 7 (2d4 + 2) Piercing\
      \ damage."
    "name": "Bite"
"source":
  - "XMM"
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/reef-shark-xmm.webp"
```
^statblock

## Environment

underwater