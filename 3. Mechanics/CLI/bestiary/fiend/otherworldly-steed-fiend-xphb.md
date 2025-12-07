---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xphb
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Otherworldly Steed (Fiend)
---
# [Otherworldly Steed (Fiend)](3. Mechanics\CLI\bestiary\fiend/otherworldly-steed-fiend-xphb.md)
*Source: Player's Handbook (2024) p. 273*  

```statblock
"name": "Otherworldly Steed (Fiend) (XPHB)"
"size": "Large"
"type": "fiend"
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
      \ ft. *Hit:* 1d8 + the spell's level Necrotic damage."
    "name": "Otherworldly Slam"
"bonus_actions":
  - "desc": "*Wisdom Saving Throw:* DC equals your spell save DC, one creature within\
      \ 60 feet the steed can see. *Failure:* The target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition until the end of your next turn."
    "name": "Fell Glare (Recharges after a Long Rest)"
"source":
  - "XPHB"
```
^statblock