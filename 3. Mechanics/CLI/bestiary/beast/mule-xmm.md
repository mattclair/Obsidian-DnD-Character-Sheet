---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mule
---
# [Mule](3. Mechanics\CLI\bestiary\beast/mule-xmm.md)
*Source: Monster Manual (2024) p. 365, Player's Handbook (2024) p. 353. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Mule (XMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "10"
  - !!int "13"
  - !!int "2"
  - !!int "10"
  - !!int "5"
"speed": "40 ft."
"saves":
  - "strength": !!int "4"
"senses": "passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
  - "desc": "The mule counts as one size larger for the purpose of determining its\
      \ carrying capacity."
    "name": "Beast of Burden"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 4 (1d4 + 2) Bludgeoning\
      \ damage."
    "name": "Hooves"
"source":
  - "XMM"
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/mule-xmm.webp"
```
^statblock

## Environment

desert, hill, urban