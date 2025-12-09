---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xphb
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Aberrant Spirit (Star Spawn)
---
# [Aberrant Spirit (Star Spawn)](3. Mechanics\CLI\bestiary\aberration/aberrant-spirit-star-spawn-xphb.md)
*Source: Player's Handbook (2024) p. 322*  

```statblock
"name": "Aberrant Spirit (Star Spawn) (XPHB)"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral"
"ac_class": "11 + the spell's level"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "15"
  - !!int "16"
  - !!int "10"
  - !!int "6"
"speed": "30 ft."
"damage_immunities": "psychic"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Deep Speech, understands the languages you know"
"traits":
  - "desc": "At the start of each of the spirit's turns, the spirit emits psionic\
      \ energy if it doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition. *Wisdom Saving Throw:* DC equals your spell save DC, each creature\
      \ (other than you) within 5 feet of the spirit. *Failure:* 2d6 Psychic damage."
    "name": "Whispering Aura"
"actions":
  - "desc": "The spirit makes a number of attacks equal to half this spell's level\
      \ (round down)."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5\
      \ ft. *Hit:* 1d8 + 3 + the spell's level Psychic damage."
    "name": "Psychic Slam"
"source":
  - "XPHB"
```
^statblock