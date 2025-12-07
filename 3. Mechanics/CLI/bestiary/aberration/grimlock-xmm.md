---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Grimlock
---
# [Grimlock](3. Mechanics\CLI\bestiary\aberration/grimlock-xmm.md)
*Source: Monster Manual (2024) p. 160. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Grimlock

*Puppet of the Mind Flayer Menace*

- **Habitat.** Underdark  
- **Treasure.** None  

Grimlocks are victims of biological manipulation by mind flayers. To create grimlocks, illithids capture Humanoids, expose them to strange forms of Underdark radiation, and implant new directives into their brains. The process of creating a grimlock rends the creature's mind such that no semblance of the individual's former personality remains.

Grimlocks have shallow depressions rather than eyes. A sixth sense allows grimlocks to perceive their surroundings. Psychic energies from their transformations linger in grimlocks' bodies, and they channel these eerie forces into their attacks.

Roll on or choose a result from the Grimlock Tasks table to inspire how grimlocks serve illithids.

**Grimlock Tasks**

| dice: 1d4 | The Grimlock Serves Mind Flayers By... |
|-----------|----------------------------------------|
| 1 | Carving caves to serve as illithid outposts. |
| 2 | Hiding the threat of mind flayers beneath fake, purposefully crude dwellings. |
| 3 | Pretending to be helpful and luring travelers into false senses of security. |
| 4 | Raiding surface communities and tempting other creatures to pursue it into illithid traps. |
^grimlock-tasks

> [!quote] A quote from Aljayera, Underdark Seer  
> 
> We thought we'd discovered a new people living deeper than we believed possible. The truth was something far worse.


```statblock
"name": "Grimlock (XMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "12"
  - !!int "9"
  - !!int "8"
  - !!int "6"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+5"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 30 ft., passive\
  \ Perception 13"
"languages": ""
"cr": "1/4"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 6 (1d6 + 3) Bludgeoning\
      \ damage plus 2 (1d4) Psychic damage."
    "name": "Bone Cudgel"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/grimlock-xmm.webp"
```
^statblock

## Environment

underdark