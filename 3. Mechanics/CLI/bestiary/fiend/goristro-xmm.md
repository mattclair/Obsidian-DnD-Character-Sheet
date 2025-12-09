---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Goristro
---
# [Goristro](3. Mechanics\CLI\bestiary\fiend/goristro-xmm.md)
*Source: Monster Manual (2024) p. 150*  

## Goristro

*Demon of Disaster*

- **Habitat.** Planar (Abyss)  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Terrifying in scale and overwhelming power, goristros are giant demons capable of bringing cities to ruin. These demons embody senseless anarchy and nihilistic destruction, and they take special offense at creatures or structures that rival them in size. Castles, towers, giants, and beasts of war are all common victims of these monsters' wrath.

Goristros resemble hunched, primeval minotaurs bearing the scars of Abyssal wars or wounds from mighty war machines. Their appearance reflects that of their creator, Baphomet, the demon lord worshiped by many evil minotaurs. Goristros stalk Baphomet's Abyssal realm, known as the Endless Maze, and pulp any non-demons they encounter in that massive, magical labyrinth.

> [!quote] A quote from Mellagorus the Pit Fiend  
> 
> Plot and strategize, bait and scheme, but hubris is no armor against ruin incarnate, and greater beings than you have fallen under the onslaught of the Abyss.


```statblock
"name": "Goristro (XMM)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "310"
"hit_dice": "23d12 + 161"
"modifier": !!int "6"
"stats":
  - !!int "25"
  - !!int "11"
  - !!int "25"
  - !!int "6"
  - !!int "13"
  - !!int "14"
"speed": "50 ft."
"saves":
  - "strength": !!int "13"
  - "dexterity": !!int "6"
  - "constitution": !!int "13"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Survival](3.%20Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+7"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 17"
"languages": "Abyssal"
"cr": "17"
"traits":
  - "desc": "If the goristro dies outside the Abyss, its body dissolves into ichor,\
      \ and it gains a new body instantly, reviving with all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Abyss."
    "name": "Demonic Restoration"
  - "desc": "The goristro has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The goristro deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The goristro makes one Brutal Gore attack and two Slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +13, reach 10 ft. *Hit:* 40 (6d10 + 7) Piercing\
      \ damage. If the target is a Huge or smaller creature, it is pushed up to 20\
      \ feet straight away from the goristro and has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Brutal Gore"
  - "desc": "*Melee Attack Roll:* +13, reach 10 ft. *Hit:* 29 (4d10 + 7) Bludgeoning\
      \ damage."
    "name": "Slam"
"bonus_actions":
  - "desc": "The goristro moves up to half its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ straight toward an enemy it can see."
    "name": "Charge"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/goristro-xmm.webp"
```
^statblock

## Environment

planar, abyss