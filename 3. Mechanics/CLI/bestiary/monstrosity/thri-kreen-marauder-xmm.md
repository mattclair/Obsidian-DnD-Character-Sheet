---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Thri-kreen Marauder
---
# [Thri-kreen Marauder](3. Mechanics\CLI\bestiary\monstrosity/thri-kreen-marauder-xmm.md)
*Source: Monster Manual (2024) p. 306*  

Thri-kreen marauders employ weapons made of stone and bone, such as the spear-like gythka and throwing blades called chatkcha.

## Thri-kreen

*Mantid Psychics and Scavengers*

- **Habitat.** Desert, Grassland  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Thri-kreen are mantis-like wanderers who harness their innate camouflage and psychic abilities to survive. Different groups of thri-kreen have distinct carapaces, from the rocky shades of desert dwellers to the vibrant hues of those living in verdant lands. While their language has a distinctly insectile quality, thri-kreen often use telepathy to communicate, and groups can rapidly share a wealth of detailed information without making a sound.

> [!quote] A quote from Ka'Cha, Thri-kreen Knowledge Hunter  
> 
> I would tell you now the tale of the first Ka'Cha, the first thri-kreen who knew and taught the truth: that the clutch is all.


```statblock
"name": "Thri-kreen Marauder (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "15"
  - !!int "13"
  - !!int "8"
  - !!int "12"
  - !!int "7"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
  - "name": "[Survival](3.%20Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+3"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Thri-kreen; telepathy 60 ft."
"cr": "1"
"actions":
  - "desc": "The thri-kreen makes two attacks, using Gythka or Chatkcha in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 5 (1d8 + 1) Slashing\
      \ damage plus 2 (1d4) Poison damage."
    "name": "Gythka"
  - "desc": "*Ranged Attack Roll:* +4, range 30/120 ft. *Hit:* 5 (1d6 + 2) Slashing\
      \ damage."
    "name": "Chatkcha"
"bonus_actions":
  - "desc": "The thri-kreen jumps up to 15 feet by spending 5 feet of movement."
    "name": "Leap"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/thri-kreen-marauder-xmm.webp"
```
^statblock

## Environment

desert, grassland