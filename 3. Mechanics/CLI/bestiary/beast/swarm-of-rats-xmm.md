---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Swarm of Rats
---
# [Swarm of Rats](3. Mechanics\CLI\bestiary\beast/swarm-of-rats-xmm.md)
*Source: Monster Manual (2024) p. 370. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Swarm of Rats (XMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "14"
"hit_dice": "4d8 - 4"
"modifier": !!int "0"
"stats":
  - !!int "9"
  - !!int "11"
  - !!int "9"
  - !!int "2"
  - !!int "10"
  - !!int "3"
"speed": "30 ft., climb 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), [grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled),\
  \ [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone), [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 30 ft., passive\
  \ Perception 10"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny rat. The swarm\
      \ can't regain [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ or gain [Temporary Hit Points](3.%20Mechanics/CLI/rules/variant-rules/temporary-hit-points-xphb.md)."
    "name": "Swarm"
"actions":
  - "desc": "*Melee Attack Roll:* +2, reach 5 ft. *Hit:* 5 (2d4) Piercing damage,\
      \ or 2 (1d4) Piercing damage if the swarm is [Bloodied](3.%20Mechanics/CLI/rules/conditions.md#Bloodied)."
    "name": "Bites"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/swarm-of-rats-xmm.webp"
```
^statblock

## Environment

forest, swamp, underdark, urban