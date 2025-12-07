---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Elk
---
# [Giant Elk](3. Mechanics\CLI\bestiary\celestial/giant-elk-xmm.md)
*Source: Monster Manual (2024) p. 356. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Giant Elk (XMM)"
"size": "Huge"
"type": "celestial"
"alignment": "Neutral Good"
"ac": !!int "14"
"hp": !!int "42"
"hit_dice": "5d12 + 10"
"modifier": !!int "6"
"stats":
  - !!int "19"
  - !!int "18"
  - !!int "14"
  - !!int "7"
  - !!int "14"
  - !!int "10"
"speed": "60 ft."
"saves":
  - "strength": !!int "6"
  - "dexterity": !!int "6"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "necrotic, radiant"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 90 ft., passive\
  \ Perception 14"
"languages": "Celestial; understands Common, Elvish, and Sylvan but can't speak them"
"cr": "2"
"actions":
  - "desc": "*Melee Attack Roll:* +6, reach 10 ft. *Hit:* 11 (2d6 + 4) Bludgeoning\
      \ damage plus 5 (2d4) Radiant damage. If the target is a Huge or smaller creature\
      \ and the elk moved 20+ feet straight toward it immediately before the hit,\
      \ the target takes an extra 5 (2d4) Bludgeoning damage and has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Ram"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/celestial/token/giant-elk-xmm.webp"
```
^statblock

## Environment

forest, grassland, hill