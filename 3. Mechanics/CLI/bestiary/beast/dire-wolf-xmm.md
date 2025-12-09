---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dire Wolf
---
# [Dire Wolf](3. Mechanics\CLI\bestiary\beast/dire-wolf-xmm.md)
*Source: Monster Manual (2024) p. 352, Player's Handbook (2024) p. 348. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Dire Wolf (XMM)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "22"
"hit_dice": "3d10 + 6"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "15"
  - !!int "15"
  - !!int "3"
  - !!int "12"
  - !!int "7"
"speed": "50 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The wolf has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the wolf's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 8 (1d10 + 3) Piercing\
      \ damage. If the target is a Large or smaller creature, it has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Bite"
"source":
  - "XMM"
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/dire-wolf-xmm.webp"
```
^statblock

## Environment

forest, hill