---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast/dinosaur
statblock: inline
statblock-link: "#^statblock"
aliases:
- Triceratops
---
# [Triceratops](3. Mechanics\CLI\bestiary\beast/triceratops-xmm.md)
*Source: Monster Manual (2024) p. 372. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Triceratops (XMM)"
"size": "Huge"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "114"
"hit_dice": "12d12 + 36"
"modifier": !!int "-1"
"stats":
  - !!int "22"
  - !!int "9"
  - !!int "17"
  - !!int "2"
  - !!int "11"
  - !!int "5"
"speed": "50 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"actions":
  - "desc": "The triceratops makes two Gore attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +9, reach 5 ft. *Hit:* 19 (2d12 + 6) Piercing\
      \ damage. If the target is Huge or smaller and the triceratops moved 20+ feet\
      \ straight toward it immediately before the hit, the target takes an extra 9\
      \ (2d8) Piercing damage and has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Gore"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/triceratops-xmm.webp"
```
^statblock

## Environment

grassland