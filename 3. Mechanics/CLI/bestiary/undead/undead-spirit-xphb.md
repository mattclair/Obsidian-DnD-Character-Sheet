---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xphb
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Undead Spirit
---
# [Undead Spirit](3. Mechanics\CLI\bestiary\undead/undead-spirit-xphb.md)
*Source: Player's Handbook (2024) p. 328*  

```statblock
"name": "Undead Spirit (XPHB)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral"
"ac_class": "11 + the spell's level"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "15"
  - !!int "4"
  - !!int "10"
  - !!int "9"
"speed": "30 ft., fly 40 ft. (hover; Ghostly only)"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "understands the languages you know"
"traits":
  - "desc": "*Constitution Saving Throw:* DC equals your spell save DC, any creature\
      \ (other than you) that starts its turn within a 5-foot Emanation originating\
      \ from the spirit. *Failure:* The creature has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the start of its next turn."
    "name": "Festering Aura (Putrid Only)"
  - "desc": "The spirit can move through other creatures and objects as if they were\
      \ Difficult Terrain. If it ends its turn inside an object, it is shunted to\
      \ the nearest unoccupied space and takes 1d10 Force damage for every 5 feet\
      \ traveled."
    "name": "Incorporeal Passage (Ghostly Only)"
"actions":
  - "desc": "The spirit makes a number of attacks equal to half this spell's level\
      \ (round down)."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5\
      \ ft. *Hit:* 1d8 + 3 + the spell's level Necrotic damage, and the target has\
      \ the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened) condition\
      \ until the end of its next turn."
    "name": "Deathly Touch (Ghostly Only)"
  - "desc": "*Ranged Attack Roll:* Bonus equals your spell attack modifier, range\
      \ 150 ft. *Hit:* 2d4 + 3 + the spell's level Necrotic damage."
    "name": "Grave Bolt (Skeletal Only)"
  - "desc": "*Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5\
      \ ft. *Hit:* 1d6 + 3 + the spell's level Slashing damage. If the target has\
      \ the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned) condition,\
      \ it has the [Paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed) condition\
      \ until the end of its next turn."
    "name": "Rotting Claw (Putrid Only)"
"source":
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/undead-spirit-xphb.webp"
```
^statblock