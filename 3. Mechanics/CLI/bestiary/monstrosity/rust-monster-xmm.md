---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Rust Monster
---
# [Rust Monster](3. Mechanics\CLI\bestiary\monstrosity/rust-monster-xmm.md)
*Source: Monster Manual (2024) p. 263. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Rust Monster

*Corrosive, Equipment-Eating Scavenger*

- **Habitat.** Underdark  
- **Treasure.** None  

Rust monsters roam the Underdark searching for ferrous metal. When they find this material—whether natural veins, subterranean structures, or creatures' equipment—these beetle-like scavengers rush to feed. Using their feathery antennae, rust monsters dissolve metals such as iron and steel into rusted scrap. They easily gnaw through this corroded metal using their mandibles. Rust monsters usually ignore creatures without metal equipment, but they defend themselves if attacked.

```statblock
"name": "Rust Monster (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "1"
"stats":
  - !!int "13"
  - !!int "12"
  - !!int "13"
  - !!int "2"
  - !!int "13"
  - !!int "6"
"speed": "40 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The rust monster can pinpoint the location of ferrous metal within 30\
      \ feet of itself."
    "name": "Iron Scent"
"actions":
  - "desc": "The rust monster makes one Bite attack and uses Antennae twice."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 5 (1d8 + 1) Piercing\
      \ damage."
    "name": "Bite"
  - "desc": "The rust monster targets one nonmagical metal object—armor or a weapon—\
      worn or carried by a creature within 5 feet of itself. *Dexterity Saving Throw:*\
      \ DC 11, the creature with the object. *Failure:* The object takes a -1 penalty\
      \ to the AC it offers (armor) or to its attack rolls (weapon). Armor is destroyed\
      \ if the penalty reduces its AC to 10, and a weapon is destroyed if its penalty\
      \ reaches -5. The penalty can be removed by casting the [Mending](3.%20Mechanics/CLI/spells/mending-xphb.md)\
      \ spell on the armor or weapon."
    "name": "Antennae"
  - "desc": "The rust monster touches a nonmagical metal object within 5 feet of itself\
      \ that isn't being worn or carried. The touch destroys a 1-foot [Cube](3.%20Mechanics/CLI/rules/variant-rules/cube-area-of-effect-xphb.md)\
      \ of the object."
    "name": "Destroy Metal"
"reactions":
  - "desc": "Trigger: An attack roll hits the rust monster. _Response:_ The rust monster\
      \ uses Antennae."
    "name": "Reflexive Antennae"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/rust-monster-xmm.webp"
```
^statblock

## Environment

underdark