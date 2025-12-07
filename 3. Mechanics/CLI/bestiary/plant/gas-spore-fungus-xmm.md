---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gas Spore Fungus
---
# [Gas Spore Fungus](3. Mechanics\CLI\bestiary\plant/gas-spore-fungus-xmm.md)
*Source: Monster Manual (2024) p. 125*  

Gas spores are floating, orbicular fungi with rhizome growths and protuberances that resemble the stalks and eyes of beholders. If destroyed, a gas spore explodes in a poisonous burst that can infect creatures and slay them in hours. Infected corpses spawn more gas spores that grow to full size in a matter of days.

## Fungi

*Deadly Spores and Predatory Polyps*

- **Habitat.** Underdark  
- **Treasure.** None  

The dank, sunless Underdark is a fertile breeding ground for weird and dangerous fungi.

```statblock
"name": "Gas Spore Fungus (XMM)"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "13"
"hit_dice": "9d10 - 36"
"modifier": !!int "-5"
"stats":
  - !!int "5"
  - !!int "1"
  - !!int "3"
  - !!int "1"
  - !!int "1"
  - !!int "1"
"speed": "5 ft., fly 10 ft. (hover)"
"damage_immunities": "poison"
"condition_immunities": "[blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded),\
  \ [charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed), [deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned), [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 30 ft., passive\
  \ Perception 5"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The gas spore bursts when it dies. *Constitution Saving Throw:* DC 10,\
      \ each creature in a 20-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the gas spore. *Failure:* The target takes 10 (3d6) Poison\
      \ damage and has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition for 1d12 hours. Unless the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition is removed, the target dies at the end of that time and sprouts\
      \ 2d4 Tiny Gas Spore Fungi (each with 1 [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)).\
      \ After 2d6 days, they become Large and have 13 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)."
    "name": "Death Burst"
"actions":
  - "desc": "*Melee Attack Roll:* +0, reach 5 ft. *Hit:* 3 (1d6) Poison damage,\
      \ and the target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the end of its next turn."
    "name": "Tendril"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/plant/token/gas-spore-fungus-xmm.webp"
```
^statblock

## Environment

underdark