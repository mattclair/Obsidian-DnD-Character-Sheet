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
- Fiendish Spirit (Devil)
---
# [Fiendish Spirit (Devil)](3. Mechanics\CLI\bestiary\fiend/fiendish-spirit-devil-xphb.md)
*Source: Player's Handbook (2024) p. 327*  

```statblock
"name": "Fiendish Spirit (Devil) (XPHB)"
"size": "Large"
"type": "fiend"
"alignment": "Neutral"
"ac_class": "12 + the spell's level"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "16"
  - !!int "15"
  - !!int "10"
  - !!int "10"
  - !!int "16"
"speed": "40 ft., fly 60 ft."
"damage_resistances": "fire"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Abyssal, Infernal, Telepathy 60 ft."
"traits":
  - "desc": "Magical Darkness doesn't impede the spirit's Darkvision."
    "name": "Devil's Sight"
  - "desc": "The spirit has Advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The spirit makes a number of attacks equal to half this spell's level\
      \ (round down)."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* Bonus equals your spell attack modifier,\
      \ reach 5 ft. or range 150 ft. *Hit:* 2d6 + 3 + the spell's level Fire damage."
    "name": "Fiery Strike"
"source":
  - "XPHB"
```
^statblock