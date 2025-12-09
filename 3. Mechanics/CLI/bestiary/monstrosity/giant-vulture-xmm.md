---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Vulture
---
# [Giant Vulture](3. Mechanics\CLI\bestiary\monstrosity/giant-vulture-xmm.md)
*Source: Monster Manual (2024) p. 361. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Giant Vulture (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "10"
"hp": !!int "25"
"hit_dice": "3d10 + 9"
"modifier": !!int "0"
"stats":
  - !!int "15"
  - !!int "10"
  - !!int "16"
  - !!int "6"
  - !!int "12"
  - !!int "7"
"speed": "10 ft., fly 60 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
"damage_resistances": "necrotic"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "understands Common but can't speak"
"cr": "1"
"traits":
  - "desc": "The vulture has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the vulture's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 9 (2d6 + 2) Piercing\
      \ damage, and the target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the end of its next turn."
    "name": "Gouge"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/giant-vulture-xmm.webp"
```
^statblock

## Environment

desert, grassland, hill