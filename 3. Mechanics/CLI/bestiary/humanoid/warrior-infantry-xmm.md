---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Warrior Infantry
---
# [Warrior Infantry](3. Mechanics\CLI\bestiary\humanoid/warrior-infantry-xmm.md)
*Source: Monster Manual (2024) p. 320. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Warrior infantry might be trainees or rank-and-file troops. They are skilled at contending with commonplace, nonmagical threats.

## Warriors

*Soldiers and Scrappers*

- **Habitat.** Any  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Warriors are professionals who make a living through their prowess in battle. They might be skilled in using a variety of tactics or trained to take advantage of unusual battlefields. Warriors often work together, whether in armies or in teams with deliberate goals.

Roll on or choose a result from the Warrior Roles table to inspire the creation of different sorts of warriors.

**Warrior Roles**

| dice: 1d10 | The Warrior Is... |
|------------|-------------------|
| 1 | A bodyguard who protects a noble. |
| 2 | A cavalry officer with an unusual steed. |
| 3 | A crusader who fights for a divine cause. |
| 4 | A duelist who claims to be unbeatable. |
| 5 | A gate guard who asks nonsensical questions. |
| 6 | A grizzled veteran who trains new recruits. |
| 7 | A hunter skilled at slaying specific monsters. |
| 8 | A retired general who is weary of battle. |
| 9 | A volunteer with a homemade weapon. |
| 10 | A young mercenary trying to prove their skill. |
^warrior-roles

> [!quote] A quote from Minsc, Hero of Baldur's Gate  
> 
> Make way, evil! I'm armed to the teeth and packing a hamster!


```statblock
"name": "Warrior Infantry (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "9"
"hit_dice": "2d8"
"modifier": !!int "0"
"stats":
  - !!int "13"
  - !!int "11"
  - !!int "11"
  - !!int "8"
  - !!int "11"
  - !!int "8"
"speed": "30 ft."
"senses": "passive Perception 10"
"languages": "Common"
"cr": "1/8"
"traits":
  - "desc": "The warrior has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the warrior's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "*Melee  or Ranged Attack Roll:* +3, reach 5 ft. or range 20/60 ft.\
      \ *Hit:* 4 (1d6 + 1) Piercing damage."
    "name": "Spear"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/warrior-infantry-xmm.webp"
```
^statblock

## Environment

any