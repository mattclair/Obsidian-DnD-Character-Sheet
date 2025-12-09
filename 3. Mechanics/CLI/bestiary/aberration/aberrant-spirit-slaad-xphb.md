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
- Aberrant Spirit (Slaad)
---
# [Aberrant Spirit (Slaad)](3. Mechanics\CLI\bestiary\aberration/aberrant-spirit-slaad-xphb.md)
*Source: Player's Handbook (2024) p. 322*  

```statblock
"name": "Aberrant Spirit (Slaad) (XPHB)"
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
  - "desc": "The spirit regains 5 Hit Points at the start of its turn if it has at\
      \ least 1 Hit Point."
    "name": "Regeneration"
"actions":
  - "desc": "The spirit makes a number of attacks equal to half this spell's level\
      \ (round down)."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5\
      \ ft. *Hit:* 1d10 + 3 + the spell's level Slashing damage, and the target\
      \ can't regain Hit Points until the start of the spirit's next turn."
    "name": "Claw"
"source":
  - "XPHB"
```
^statblock