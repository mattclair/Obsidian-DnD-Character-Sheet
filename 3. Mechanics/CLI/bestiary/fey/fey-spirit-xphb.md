---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xphb
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fey Spirit
---
# [Fey Spirit](3. Mechanics\CLI\bestiary\fey/fey-spirit-xphb.md)
*Source: Player's Handbook (2024) p. 326*  

```statblock
"name": "Fey Spirit (XPHB)"
"size": "Small"
"type": "fey"
"alignment": "Neutral"
"ac_class": "12 + the spell's level"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "16"
  - !!int "14"
  - !!int "14"
  - !!int "11"
  - !!int "16"
"speed": "30 ft., fly 30 ft."
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Sylvan, understands the languages you know"
"actions":
  - "desc": "The spirit makes a number of Fey Blade attacks equal to half this spell's\
      \ level (round down)."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5\
      \ ft. *Hit:* 2d6 + 3 + the spell's level Force damage."
    "name": "Fey Blade"
"bonus_actions":
  - "desc": "The spirit magically teleports up to 30 feet to an unoccupied space it\
      \ can see. Then one of the following effects occurs, based on the spirit's chosen\
      \ mood:\n\n- **Fuming.** The spirit has Advantage on the next attack roll it\
      \ makes before the end of this turn.  \n- **Mirthful.** *Wisdom Saving Throw:*\
      \ DC equals your spell save DC, one creature the spirit can see within 10 feet\
      \ of itself. *Failure:* The target is [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ by you and the spirit for 1 minute or until the target takes any damage. \
      \ \n- **Tricksy.** The spirit fills a 10-foot Cube within 5 feet of it with\
      \ magical Darkness, which lasts until the end of its next turn.  "
    "name": "Fey Step"
"source":
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/fey/token/fey-spirit-xphb.webp"
```
^statblock