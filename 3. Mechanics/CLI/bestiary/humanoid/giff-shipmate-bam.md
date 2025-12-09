---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giff Shipmate
---
# [Giff Shipmate](3. Mechanics\CLI\bestiary\humanoid/giff-shipmate-bam.md)
*Source: Boo's Astral Menagerie p. 24, Light of Xaryxis*  

Giff shipmates, who make up the bulk of the crew on most giff vessels, are disciplined sailors.

```statblock
"name": "Giff Shipmate (BAM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "17"
  - !!int "11"
  - !!int "12"
  - !!int "12"
"speed": "30 ft., swim 30 ft."
"senses": "passive Perception 11"
"languages": "Common"
"cr": "3"
"traits":
  - "desc": "The giff's mastery of its weapons enables it to ignore the loading property\
      \ of any firearm."
    "name": "Firearms Knowledge"
  - "desc": "On the deck of a ship, the giff has advantage on ability checks and saving\
      \ throws made against effects that would knock it [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ or shove it overboard."
    "name": "Steady as She Goes"
"actions":
  - "desc": "The giff makes two Longsword or Musket attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with\
      \ two hands."
    "name": "Longsword"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 40/120 ft., one target. *Hit:*\
      \ 8 (1d12 + 2) piercing damage."
    "name": "Musket"
  - "desc": "The giff throws a grenade up to 60 feet, and the grenade explodes in\
      \ a 20-foot-radius sphere. Each creature in that area must make a DC 15 Dexterity\
      \ saving throw, taking 17 (5d6) force damage on a failed save, or half as\
      \ much damage on a successful one. After the giff throws the grenade, roll a\
      \ d6; on a roll of 4 or lower, the giff has no more grenades to throw."
    "name": "Force Grenade"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/giff-shipmate-bam.webp"
```
^statblock