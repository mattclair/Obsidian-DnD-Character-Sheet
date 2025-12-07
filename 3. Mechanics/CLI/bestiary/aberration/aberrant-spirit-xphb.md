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
- Aberrant Spirit
---
# [Aberrant Spirit](3. Mechanics\CLI\bestiary\aberration/aberrant-spirit-xphb.md)
*Source: Player's Handbook (2024) p. 322*  

```statblock
"name": "Aberrant Spirit (XPHB)"
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
"speed": "30 ft., fly 30 ft. (hover; Beholderkin only)"
"damage_immunities": "psychic"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Deep Speech, understands the languages you know"
"traits":
  - "desc": "The spirit regains 5 Hit Points at the start of its turn if it has at\
      \ least 1 Hit Point."
    "name": "Regeneration (Slaad Only)"
  - "desc": "At the start of each of the spirit's turns, the spirit emits psionic\
      \ energy if it doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition. *Wisdom Saving Throw:* DC equals your spell save DC, each creature\
      \ (other than you) within 5 feet of the spirit. *Failure:* 2d6 Psychic damage."
    "name": "Whispering Aura (Mind Flayer Only)"
"actions":
  - "desc": "The spirit makes a number of attacks equal to half this spell's level\
      \ (round down)."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5\
      \ ft. *Hit:* 1d10 + 3 + the spell's level Slashing damage, and the target\
      \ can't regain Hit Points until the start of the spirit's next turn."
    "name": "Claw (Slaad Only)"
  - "desc": "*Ranged Attack Roll:* Bonus equals your spell attack modifier, range\
      \ 150 ft. *Hit:* 1d8 + 3 + the spell's level Psychic damage."
    "name": "Eye Ray (Beholderkin Only)"
  - "desc": "*Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5\
      \ ft. *Hit:* 1d8 + 3 + the spell's level Psychic damage."
    "name": "Psychic Slam (Mind Flayer Only)"
"source":
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/aberrant-spirit-xphb.webp"
```
^statblock