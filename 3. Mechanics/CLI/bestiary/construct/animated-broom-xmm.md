---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Animated Broom
---
# [Animated Broom](3. Mechanics\CLI\bestiary\construct/animated-broom-xmm.md)
*Source: Monster Manual (2024) p. 16*  

Animated brooms keep their surroundings tidy and defend them when necessary. Launching into the air, these brooms dart about, attacking foes from unexpected angles. Other flying objects, like animated tools or staffs, might also use this stat block.

## Animated Objects

*Mundane Objects Come to Life*

- **Habitat.** Urban  
- **Treasure.** None  

Magic can manipulate mundane items, compelling them to perform simple tasks. Such animate objects might be unassuming tools or decorations that can defend their creator. These objects follow simple instructions from whatever force or magic-user created them. If left unattended, they might defend an area for ages or repeat a task until they wear out.

Roll on or choose a result from the Animated Object Catalysts table to inspire what sort of magic motivates an ambulatory item.

> [!quote] A quote from Levity Quickstitch, Rogue  
> 
> Lyin' next to the chest were the bones of Cap'n Scornblade himself, still clutchin' his rusty sword. Imagine my surprise when the blade flew from his bony grasp! Still got the scar.

**Animated Object Catalysts**

| dice: 1d10 | The Object Was Animated By... |
|------------|-------------------------------|
| 1 | A Celestial or Fiend using the object to protect or torment a mortal. |
| 2 | A combination of magic and technology, such as alchemy or alien science. |
| 3 | The essence of someone transformed by a supernatural trickster. |
| 4 | Fey as part of their games or wiles. |
| 5 | Happenstance, with the item gaining a semblance of life after a hundred years of use. |
| 6 | A magic-user in need of a guardian or servant. |
| 7 | The song of a magical instrument. |
| 8 | A spirit possessing the object. |
| 9 | Wild magic, a spell that went awry, or a chaotic Artifact. |
| 10 | The will of a powerful psychic being. |
^animated-object-catalysts

```statblock
"name": "Animated Broom (XMM)"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "14"
"hit_dice": "4d6"
"modifier": !!int "5"
"stats":
  - !!int "10"
  - !!int "17"
  - !!int "10"
  - !!int "1"
  - !!int "5"
  - !!int "1"
"speed": "5 ft., fly 50 ft. (hover)"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 7"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The broom doesn't provoke an Opportunity Attack when it flies out of\
      \ an enemy's reach."
    "name": "Flyby"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 5 (1d4 + 3) Bludgeoning\
      \ damage."
    "name": "Slam"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/construct/token/animated-broom-xmm.webp"
```
^statblock

## Environment

urban