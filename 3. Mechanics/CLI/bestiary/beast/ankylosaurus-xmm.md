---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast/dinosaur
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ankylosaurus
---
# [Ankylosaurus](3. Mechanics\CLI\bestiary\beast/ankylosaurus-xmm.md)
*Source: Monster Manual (2024) p. 348. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Ankylosaurus (XMM)"
"size": "Huge"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "68"
"hit_dice": "8d12 + 16"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "11"
  - !!int "15"
  - !!int "2"
  - !!int "12"
  - !!int "5"
"speed": "30 ft."
"saves":
  - "strength": !!int "6"
"senses": "passive Perception 11"
"languages": ""
"cr": "3"
"actions":
  - "desc": "The ankylosaurus makes two Tail attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 10 ft. *Hit:* 9 (1d10 + 4) Bludgeoning\
      \ damage. If the target is a Huge or smaller creature, it has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Tail"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/ankylosaurus-xmm.webp"
```
^statblock

## Environment

grassland