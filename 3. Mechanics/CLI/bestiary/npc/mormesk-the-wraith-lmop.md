---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/lmop
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mormesk the Wraith
---
# [Mormesk the Wraith](3. Mechanics\CLI\bestiary\npc/mormesk-the-wraith-lmop.md)
*Source: Lost Mine of Phandelver p. 59*  

A wraith is the incorporeal remnant of a particularly hateful being. Most wraiths can transform those they have slain into spectral undead servitors. Mormesk chooses not to, preferring to let the dead stay dead.

```statblock
"name": "Mormesk the Wraith (LMoP)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"modifier": !!int "3"
"stats":
  - !!int "6"
  - !!int "16"
  - !!int "16"
  - !!int "12"
  - !!int "14"
  - !!int "15"
"speed": "0 ft., fly 60 ft."
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks that aren't silvered"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone), [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common, Infernal"
"cr": "3"
"traits":
  - "desc": "The wraith can move through an object or another creature, but can't\
      \ stop there."
    "name": "Incorporeal Movement"
  - "desc": "While in sunlight, the wraith has disadvantage on attack rolls and on\
      \ Wisdom ([Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one creature. *Hit:*\
      \ 16 (3d8 + 3) necrotic damage, and the target must succeed on a DC 13 Constitution\
      \ saving throw or its hit point maximum is reduced by an amount equal to the\
      \ damage taken. If this attack reduces the target's hit point maximum to 0,\
      \ the target dies. This reduction to the target's hit point maximum lasts until\
      \ the target finishes a long rest."
    "name": "Life Drain"
"source":
  - "LMoP"
"image": "3.%20Mechanics/CLI/bestiary/npc/token/mormesk-the-wraith-lmop.webp"
```
^statblock