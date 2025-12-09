---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Hook Horror
---
# [Hook Horror](3. Mechanics\CLI\bestiary\monstrosity/hook-horror-xmm.md)
*Source: Monster Manual (2024) p. 173*  

## Hook Horror

*Echo-Stalking Underdark Hunter*

- **Habitat.** Underdark  
- **Treasure.** None  

Hook horrors are beaked predators whose forelimbs end in massive, hook-like claws. They flourish in the cavernous mazes of the Underdark, with its miles-deep trenches and stalactite forests suspended over empty darkness, where they barrel through caves and swing across cavern ceilings.

Hook horrors feed opportunistically on plants, fungi, and any creatures that come close enough to hook. To perceive their surroundings, hook horrors echolocate via a range of noises, from banging on rocks and their own bodies to vocalizations that sound like strange squawks, screams, or clicks. Only hook horrors know the meaning of these noises, but many people who explore the Underdark or live near deep-reaching caves have sought the sources of such sounds only to fall victim to hungry hook horrors.

```statblock
"name": "Hook Horror (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "15"
  - !!int "6"
  - !!int "12"
  - !!int "7"
"speed": "30 ft., climb 30 ft."
"saves":
  - "constitution": !!int "4"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., [darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 15"
"languages": "Hook Horror"
"cr": "3"
"actions":
  - "desc": "The hook horror makes two Hook attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 10 ft. *Hit:* 11 (2d6 + 4) Piercing\
      \ damage. If the target is a Large or smaller creature, the hook horror moves\
      \ the target 5 feet straight toward or away from itself."
    "name": "Hook"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/hook-horror-xmm.webp"
```
^statblock

## Environment

underdark