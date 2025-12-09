---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Poltergeist
---
# [Poltergeist](3. Mechanics\CLI\bestiary\undead/poltergeist-xmm.md)
*Source: Monster Manual (2024) p. 246*  

## Poltergeist

*Malevolent or Mischievous Spirit*

- **Habitat.** Underdark, Urban  
- **Treasure.** Any  

Poltergeists are spirits that confuse and torment the living. While typically not visible, they sometimes appear as faded images of whoever they were in life. Some poltergeists don't realize they're dead and go through the motions of their past lives. Others are malicious beings or embodiments of fractured psyches that sow discord where they haunt.

Poltergeists telekinetically move objects in the places they lurk. Roll on or choose a result from the Poltergeist Activities table to inspire how a poltergeist menaces the living.

**Poltergeist Activities**

| dice: 1d8 | To Torment the Living, the Poltergeist... |
|-----------|-------------------------------------------|
| 1 | Keeps returning a discarded item. |
| 2 | Leaves footprints on vertical surfaces. |
| 3 | Makes noises like someone trapped in a wall. |
| 4 | Organizes a pack's contents across the floor. |
| 5 | Playfully puppets a corpse or doll. |
| 6 | Removes bedding while someone sleeps. |
| 7 | Sticks knives or weapons in the ceiling. |
| 8 | Uncannily stacks books, furniture, or utensils. |
^poltergeist-activities

```statblock
"name": "Poltergeist (XMM)"
"size": "Small or Medium"
"type": "undead"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "2"
"stats":
  - !!int "1"
  - !!int "14"
  - !!int "11"
  - !!int "10"
  - !!int "10"
  - !!int "14"
"speed": "5 ft., fly 50 ft. (hover)"
"damage_resistances": "acid, bludgeoning, cold, fire, lightning, piercing, slashing,\
  \ thunder"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled),\
  \ [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned), [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained), [unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Common plus one other language"
"cr": "2"
"traits":
  - "desc": "The poltergeist can move through other creatures and objects as if they\
      \ were [Difficult Terrain](3.%20Mechanics/CLI/rules/variant-rules/difficult-terrain-xphb.md).\
      \ It takes 5 (1d10) Force damage if it ends its turn inside an object."
    "name": "Incorporeal Movement"
"actions":
  - "desc": "The poltergeist makes one Object Slam attack and uses Telekinetic Thrust."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +4, reach 5 ft. or range 30 ft. *Hit:*\
      \ 7 (2d4 + 2) Bludgeoning damage."
    "name": "Object Slam"
  - "desc": "*Strength Saving Throw:* DC 12, one creature the poltergeist can see\
      \ within 30 feet. *Failure:* 9 (2d6 + 2) Force damage, and the target is pushed\
      \ up to 30 feet straight away from the poltergeist."
    "name": "Telekinetic Thrust"
"bonus_actions":
  - "desc": "The poltergeist gives itself the [Invisible](3.%20Mechanics/CLI/rules/conditions.md#Invisible)\
      \ condition or ends that condition on itself."
    "name": "Vanish"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/poltergeist-xmm.webp"
```
^statblock

## Environment

underdark, urban