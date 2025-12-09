---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Cat
---
# [Cat](3. Mechanics\CLI\bestiary\beast/cat-xmm.md)
*Source: Monster Manual (2024) p. 351, Player's Handbook (2024) p. 347. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Cat (XMM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "2"
"hit_dice": "1d4"
"modifier": !!int "2"
"stats":
  - !!int "3"
  - !!int "15"
  - !!int "10"
  - !!int "3"
  - !!int "12"
  - !!int "7"
"speed": "40 ft., climb 40 ft."
"saves":
  - "dexterity": !!int "4"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": ""
"cr": "0"
"traits":
  - "desc": "The cat's jump distance is determined using its Dexterity rather than\
      \ its Strength."
    "name": "Jumper"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 1 Slashing damage."
    "name": "Scratch"
"source":
  - "XMM"
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/cat-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland, urban