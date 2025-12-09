---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Swarm of Ravens
---
# [Swarm of Ravens](3. Mechanics\CLI\bestiary\beast/swarm-of-ravens-xmm.md)
*Source: Monster Manual (2024) p. 371. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Swarm of Ravens (XMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "12"
  - !!int "5"
  - !!int "12"
  - !!int "6"
"speed": "10 ft., fly 50 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), [grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled),\
  \ [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone), [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "passive Perception 15"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny raven. The swarm\
      \ can't regain [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ or gain [Temporary Hit Points](3.%20Mechanics/CLI/rules/variant-rules/temporary-hit-points-xphb.md)."
    "name": "Swarm"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 5 (1d6 + 2) Piercing\
      \ damage, or 2 (1d4) Piercing damage if the swarm is [Bloodied](3.%20Mechanics/CLI/rules/conditions.md#Bloodied)."
    "name": "Beaks"
  - "desc": "*Wisdom Saving Throw:* DC 10, one creature in the swarm's space. *Failure:*\
      \ The target has the [Deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened)\
      \ condition until the start of the swarm's next turn. While [Deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened),\
      \ the target also has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on ability checks and attack rolls."
    "name": "Cacophony (Recharge 6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/swarm-of-ravens-xmm.webp"
```
^statblock

## Environment

hill, swamp, urban