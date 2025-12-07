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
- Fiendish Spirit (Demon)
---
# [Fiendish Spirit (Demon)](3. Mechanics\CLI\bestiary\fiend/fiendish-spirit-demon-xphb.md)
*Source: Player's Handbook (2024) p. 327*  

```statblock
"name": "Fiendish Spirit (Demon) (XPHB)"
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
"speed": "40 ft., climb 40 ft."
"damage_resistances": "fire"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Abyssal, Infernal, Telepathy 60 ft."
"traits":
  - "desc": "When the spirit drops to 0 Hit Points or the spell ends, the spirit explodes.\
      \ *Dexterity Saving Throw:* DC equals your spell save DC, each creature in a\
      \ 10-foot Emanation originating from the spirit. *Failure:* 2d10 plus this\
      \ spell's level Fire damage. *Success:* Half damage."
    "name": "Death Throes"
  - "desc": "The spirit has Advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The spirit makes a number of attacks equal to half this spell's level\
      \ (round down)."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5\
      \ ft. *Hit:* 1d12 + 3 + the spell's level Necrotic damage."
    "name": "Bite"
"source":
  - "XPHB"
```
^statblock