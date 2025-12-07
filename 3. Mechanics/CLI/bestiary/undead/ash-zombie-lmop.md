---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/lmop
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ash Zombie
---
# [Ash Zombie](3. Mechanics\CLI\bestiary\undead/ash-zombie-lmop.md)
*Source: Lost Mine of Phandelver p. 31*  

From somewhere in the darkness, a gurgling moan is heard. A form lurches into view, dragging one foot as it raises bloated arms and broken hands. The zombie advances, driven to kill anyone too slow to escape its grasp.

## Ash Zombies

These zombies were created by the magical devastation when Mount Hotenow erupted thirty years ago. They use the zombie stat block, with the following additional trait.

### Ash Puff

The first time the zombie takes damage, any living creature within 5 feet of the zombie must succeed on a DC 10 Constitution saving throw or gain disadvantage on attack rolls, saving throws, and ability checks for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on it early with a successful save.

```statblock
"name": "Ash Zombie (LMoP)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "8"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"modifier": !!int "-2"
"stats":
  - !!int "13"
  - !!int "6"
  - !!int "16"
  - !!int "3"
  - !!int "6"
  - !!int "5"
"speed": "20 ft."
"saves":
  - "wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 8"
"languages": "understands all languages it spoke in life but can't speak"
"cr": "1/4"
"traits":
  - "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
      \ saving throw with a DC of 5+the damage taken, unless the damage is radiant\
      \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
    "name": "Undead Fortitude"
  - "desc": "The first time the zombie takes damage, any living creature within 5\
      \ feet of the zombie must succeed on a DC 10 Constitution saving throw or gain\
      \ disadvantage on attack rolls, saving throws, and ability checks for 1 minute.\
      \ A creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on it early with a successful save."
    "name": "Ash Puff"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d6 + 1) bludgeoning damage."
    "name": "Slam"
"source":
  - "LMoP"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/ash-zombie-lmop.webp"
```
^statblock