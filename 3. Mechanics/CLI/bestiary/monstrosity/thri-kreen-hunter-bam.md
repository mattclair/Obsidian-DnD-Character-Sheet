---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Thri-kreen Hunter
---
# [Thri-kreen Hunter](3. Mechanics\CLI\bestiary\monstrosity/thri-kreen-hunter-bam.md)
*Source: Boo's Astral Menagerie p. 61, Light of Xaryxis*  

Thri-kreen hunters are skilled foragers and stalkers. A thri-kreen hunter encountered in Wildspace might be on the trail of a fugitive or leading a gang of pirates.

```statblock
"name": "Thri-kreen Hunter (BAM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "60"
"hit_dice": "11d8 + 11"
"modifier": !!int "3"
"stats":
  - !!int "15"
  - !!int "16"
  - !!int "13"
  - !!int "10"
  - !!int "14"
  - !!int "9"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
  - "name": "[Survival](3.%20Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+6"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "telepathy 60 ft., Thri-kreen"
"cr": "2"
"actions":
  - "desc": "The thri-kreen makes two Gythka or Chatkcha attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d8 + 2) slashing damage."
    "name": "Gythka"
  - "desc": "*Ranged Weapon Attack:* +5 to hit, range 30/120 ft., one target. *Hit:*\
      \ 6 (1d6 + 3) slashing damage."
    "name": "Chatkcha"
"bonus_actions":
  - "desc": "The thri-kreen changes the color of its carapace to match the color and\
      \ texture of its surroundings, gaining advantage on Dexterity ([Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks it makes to hide in those surroundings."
    "name": "Chameleon Carapace"
  - "desc": "The thri-kreen leaps up to 20 feet in any direction, provided its speed\
      \ isn't 0."
    "name": "Leap"
"reactions":
  - "desc": "The thri-kreen adds 2 to its AC against one melee attack that would hit\
      \ it. To do so, the thri-kreen must see the attacker and be wielding a melee\
      \ weapon."
    "name": "Parry"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/thri-kreen-hunter-bam.webp"
```
^statblock