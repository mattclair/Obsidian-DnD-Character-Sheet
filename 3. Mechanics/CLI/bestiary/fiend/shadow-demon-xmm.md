---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Shadow Demon
---
# [Shadow Demon](3. Mechanics\CLI\bestiary\fiend/shadow-demon-xmm.md)
*Source: Monster Manual (2024) p. 273*  

## Shadow Demon

*Vestige of Evil*

- **Habitat.** Planar (Abyss)  
- **Treasure.** None  

Shadow demons form when exceptionally wicked demons are destroyed and prevented from reconstituting their physical forms in the Abyss. This might occur due to divine intervention, when a demon is destroyed in the Abyss, or under more unusual circumstances. Shadow demons are the incorporeal remnants of these destroyed demons' evil. They usually vaguely resemble their former shapes, but some take purposefully deceptive shapes. Many lurk in dark places or venture out only at night to hide their true forms from those they manipulate.

Shadow demons seek ways to regain their former might and take revenge on those who destroyed them. They often ingratiate themselves with more powerful demons or mortal spellcasters, bargaining with and coercing others into restoring them to power. Many try to claim or corrupt souls to restore their fiendish forms, while some shadow demons seek wicked relics or nexuses of profane magic. It typically takes shadow demons centuries to recover their demonic power, if they ever do.

Particularly powerful demons might return as multiple shadow demons after being defeated. These fiendish entities each think they're the true manifestation of their past self and hunt one another to recover their power.

In rare cases, Fiends other than demons might adopt forms similar to shadow demons.

> [!quote] A quote from Tarsheva Longreach, Planar Traveler  
> 
> There are three rules to endings. First, good always wins. Second, evil always returns. Third, the first rule isn't always true.


```statblock
"name": "Shadow Demon (XMM)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"modifier": !!int "3"
"stats":
  - !!int "1"
  - !!int "17"
  - !!int "12"
  - !!int "14"
  - !!int "13"
  - !!int "14"
"speed": "30 ft., fly 30 ft. (hover)"
"saves":
  - "dexterity": !!int "5"
  - "charisma": !!int "4"
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"damage_vulnerabilities": "radiant"
"damage_resistances": "acid, bludgeoning, cold, fire, lightning, piercing, slashing,\
  \ thunder"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone), [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 11"
"languages": "Abyssal; telepathy 120 ft."
"cr": "4"
"traits":
  - "desc": "If the demon dies outside the Abyss, its body dissolves into ichor, and\
      \ it gains a new body instantly, reviving with all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Abyss."
    "name": "Demonic Restoration"
  - "desc": "The demon can move through other creatures and objects as if they were\
      \ [Difficult Terrain](3.%20Mechanics/CLI/rules/variant-rules/difficult-terrain-xphb.md).\
      \ It takes 5 (1d10) Force damage if it ends its turn inside an object."
    "name": "Incorporeal Movement"
  - "desc": "While in [Bright Light](3.%20Mechanics/CLI/rules/variant-rules/bright-light-xphb.md),\
      \ the demon has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on ability checks and attack rolls."
    "name": "Light Sensitivity"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 16 (3d8 + 3) Psychic\
      \ damage."
    "name": "Umbral Claw"
"bonus_actions":
  - "desc": "While in [Dim Light](3.%20Mechanics/CLI/rules/variant-rules/dim-light-xphb.md)\
      \ or [Darkness](3.%20Mechanics/CLI/rules/variant-rules/darkness-xphb.md), the\
      \ demon takes the Hide action."
    "name": "Shadow Stealth"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/shadow-demon-xmm.webp"
```
^statblock

## Environment

planar, abyss