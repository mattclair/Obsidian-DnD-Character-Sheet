---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Young Remorhaz
---
# [Young Remorhaz](3. Mechanics\CLI\bestiary\monstrosity/young-remorhaz-xmm.md)
*Source: Monster Manual (2024) p. 258*  

Young remorhazes scorch and consume any creatures they can chase down and overwhelm.

## Remorhazes

*Super-Heated Arctic Arthropods*

- **Habitat.** Arctic  
- **Treasure.** None  

Remorhazes are centipede-like terrors that burrow through snow and ice to ambush smaller creatures that trespass in their frozen territories.

```statblock
"name": "Young Remorhaz (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "17"
  - !!int "3"
  - !!int "10"
  - !!int "4"
"speed": "30 ft., burrow 20 ft."
"damage_immunities": "cold, fire"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., tremorsense\
  \ 60 ft., passive Perception 10"
"languages": ""
"cr": "5"
"traits":
  - "desc": "At the end of each of the remorhaz's turns, each creature in a 5-foot\
      \ [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the remorhaz takes 11 (2d10) Fire damage."
    "name": "Heat Aura"
"actions":
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 15 (2d10 + 4) Piercing\
      \ damage plus 13 (3d8) Fire damage."
    "name": "Bite"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/young-remorhaz-xmm.webp"
```
^statblock

## Environment

arctic