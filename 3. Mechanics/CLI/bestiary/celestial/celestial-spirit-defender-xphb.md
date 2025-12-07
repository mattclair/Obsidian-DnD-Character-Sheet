---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xphb
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Celestial Spirit (Defender)
---
# [Celestial Spirit (Defender)](3. Mechanics\CLI\bestiary\celestial/celestial-spirit-defender-xphb.md)
*Source: Player's Handbook (2024) p. 323*  

```statblock
"name": "Celestial Spirit (Defender) (XPHB)"
"size": "Large"
"type": "celestial"
"alignment": "Neutral"
"ac_class": "13 + the spell's level"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "16"
  - !!int "10"
  - !!int "14"
  - !!int "16"
"speed": "30 ft., fly 40 ft."
"damage_resistances": "radiant"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Celestial, understands the languages you know"
"actions":
  - "desc": "The spirit makes a number of attacks equal to half this spell's level\
      \ (round down)."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5\
      \ ft. *Hit:* 1d10 + 3 + the spell's level Radiant damage, and the spirit can\
      \ choose itself or another creature it can see within 10 feet of the target.\
      \ The chosen creature gains 1d10 Temporary Hit Points."
    "name": "Radiant Mace"
  - "desc": "The spirit touches another creature. The target regains Hit Points equal\
      \ to 2d8 + the spell's level."
    "name": "Healing Touch (1/Day)"
"source":
  - "XPHB"
```
^statblock