---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giff Shock Trooper
---
# [Giff Shock Trooper](3. Mechanics\CLI\bestiary\humanoid/giff-shock-trooper-bam.md)
*Source: Boo's Astral Menagerie p. 25, Light of Xaryxis*  

A giff shock trooper is trained to mount assaults on enemy strongholds. Each one is adept at softening up the enemy from a distance with firearms before charging into melee to mop up the foes that remain standing.

```statblock
"name": "Giff Shock Trooper (BAM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "[plate](3.%20Mechanics/CLI/items/plate-armor-xphb.md)"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"modifier": !!int "2"
"stats":
  - !!int "20"
  - !!int "14"
  - !!int "18"
  - !!int "11"
  - !!int "12"
  - !!int "13"
"speed": "30 ft., swim 30 ft."
"saves":
  - "strength": !!int "8"
  - "constitution": !!int "7"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Intimidation](3.%20Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+7"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"senses": "passive Perception 14"
"languages": "Common"
"cr": "6"
"traits":
  - "desc": "The giff's mastery of its weapons enables it to ignore the loading property\
      \ of any firearm."
    "name": "Firearms Knowledge"
  - "desc": "If the giff moves at least 20 feet in a straight line and ends within\
      \ 5 feet of a Large or smaller creature, that creature must succeed on a DC\
      \ 16 Strength saving throw or take 7 (2d6) bludgeoning damage and be knocked\
      \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Headfirst Charge"
  - "desc": "The giff deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The giff makes two Greatsword or Musket attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 15\
      \ (3d6 + 5) slashing damage."
    "name": "Greatsword"
  - "desc": "*Ranged Weapon Attack:* +5 to hit, range 40/120 ft., one target. *Hit:*\
      \ 15 (2d12 + 2) piercing damage."
    "name": "Musket"
  - "desc": "The giff lights a grapefruit-sized bomb and throws it at a point up to\
      \ 60 feet away, where it explodes. Each creature within a 10-foot-radius sphere\
      \ centered on that point must make a DC 15 Dexterity saving throw, taking 18\
      \ (4d8) thunder damage on a failed save, or half as much damage on a successful\
      \ one. After the giff throws the bomb, roll a d6; on a roll of 4 or lower,\
      \ the giff has no more bombs to throw."
    "name": "Thunder Bomb"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/giff-shock-trooper-bam.webp"
```
^statblock