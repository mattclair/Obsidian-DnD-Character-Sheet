---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xphb
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Otherworldly Steed (Fey)
---
# [Otherworldly Steed (Fey)](3. Mechanics\CLI\bestiary\fey/otherworldly-steed-fey-xphb.md)
*Source: Player's Handbook (2024) p. 273*  

```statblock
"name": "Otherworldly Steed (Fey) (XPHB)"
"size": "Large"
"type": "fey"
"alignment": "Neutral"
"ac_class": "10 + 1 per spell level"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "12"
  - !!int "14"
  - !!int "6"
  - !!int "12"
  - !!int "8"
"speed": "60 ft., fly 60 ft. (requires level 4+ spell)"
"senses": "passive Perception 11"
"languages": "telepathy 1 mile (works only with you)"
"traits":
  - "desc": "When you regain Hit Points from a level 1+ spell, the steed regains the\
      \ same number of Hit Points if you're within 5 feet of it."
    "name": "Life Bond"
"actions":
  - "desc": "*Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5\
      \ ft. *Hit:* 1d8 + the spell's level Psychic damage."
    "name": "Otherworldly Slam"
"bonus_actions":
  - "desc": "The steed teleports, along with its rider, to an unoccupied space of\
      \ your choice up to 60 feet away from itself."
    "name": "Fey Step (Recharges after a Long Rest)"
"source":
  - "XPHB"
```
^statblock