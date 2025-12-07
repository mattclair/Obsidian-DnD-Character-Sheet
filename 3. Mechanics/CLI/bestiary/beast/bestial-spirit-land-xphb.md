---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xphb
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bestial Spirit (Land)
---
# [Bestial Spirit (Land)](3. Mechanics\CLI\bestiary\beast/bestial-spirit-land-xphb.md)
*Source: Player's Handbook (2024) p. 323*  

```statblock
"name": "Bestial Spirit (Land) (XPHB)"
"size": "Small"
"type": "beast"
"alignment": "Neutral"
"ac_class": "11 + the spell's level"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "16"
  - !!int "4"
  - !!int "14"
  - !!int "5"
"speed": "30 ft., climb 30 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "understands the languages you know"
"traits":
  - "desc": "The spirit has Advantage on an attack roll against a creature if at least\
      \ one of the spirit's allies is within 5 feet of the creature and the ally doesn't\
      \ have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "The spirit makes a number of Rend attacks equal to half this spell's\
      \ level (round down)."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5\
      \ ft. *Hit:* 1d8 + 4 + the spell's level Piercing damage."
    "name": "Rend"
"source":
  - "XPHB"
```
^statblock