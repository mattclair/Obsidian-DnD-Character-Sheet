---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Tough Boss
---
# [Tough Boss](3. Mechanics\CLI\bestiary\humanoid/tough-boss-xmm.md)
*Source: Monster Manual (2024) p. 307. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Tough bosses leverage their street smarts, brawling prowess, and reputation to compel others to follow their demands.

## Toughs

*Brawlers and Bullies*

- **Habitat.** Any  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Bodyguards, belligerents, and laborers, toughs rely on their physical strength to intimidate foes. They might be brawny criminals, rowdy tavern goers, seasoned workers, or anyone who uses their muscle to get what they want.

> [!quote]  
> 
> There are two answers to every question: ours, and the wrong one.


```statblock
"name": "Tough Boss (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "16"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "11"
  - !!int "10"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "strength": !!int "5"
  - "constitution": !!int "5"
  - "charisma": !!int "2"
"senses": "passive Perception 10"
"languages": "Common plus one other language"
"cr": "4"
"traits":
  - "desc": "The tough has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the tough's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "The tough makes two attacks, using Warhammer or Heavy Crossbow in any\
      \ combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 12 (2d8 + 3) Bludgeoning\
      \ damage. If the target is a Large or smaller creature, the tough pushes the\
      \ target up to 10 feet straight away from itself."
    "name": "Warhammer"
  - "desc": "*Ranged Attack Roll:* +4, range 100/400 ft. *Hit:* 13 (2d10 + 2)\
      \ Piercing damage."
    "name": "Heavy Crossbow"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/tough-boss-xmm.webp"
```
^statblock

## Environment

any