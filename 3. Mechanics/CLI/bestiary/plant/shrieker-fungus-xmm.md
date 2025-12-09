---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Shrieker Fungus
---
# [Shrieker Fungus](3. Mechanics\CLI\bestiary\plant/shrieker-fungus-xmm.md)
*Source: Monster Manual (2024) p. 125. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

If exposed to light or otherwise disturbed, mushroom-like shriekers emit a high-pitched noise that gives them their name. This wailing might alert other creatures or attract predators.

## Fungi

*Deadly Spores and Predatory Polyps*

- **Habitat.** Underdark  
- **Treasure.** None  

The dank, sunless Underdark is a fertile breeding ground for weird and dangerous fungi.

```statblock
"name": "Shrieker Fungus (XMM)"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "5"
"hp": !!int "13"
"hit_dice": "3d8"
"modifier": !!int "-5"
"stats":
  - !!int "1"
  - !!int "1"
  - !!int "10"
  - !!int "1"
  - !!int "3"
  - !!int "1"
"speed": "5 ft."
"condition_immunities": "[blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded),\
  \ [charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed), [deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 30 ft., passive\
  \ Perception 6"
"languages": ""
"cr": "0"
"reactions":
  - "desc": "Trigger: A creature or a source of [Bright Light](3.%20Mechanics/CLI/rules/variant-rules/bright-light-xphb.md)\
      \ moves within 30 feet of the shrieker. _Response:_ The shrieker emits a shriek\
      \ audible within 300 feet of itself for 1 minute or until the shrieker dies."
    "name": "Shriek"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/plant/token/shrieker-fungus-xmm.webp"
```
^statblock

## Environment

underdark