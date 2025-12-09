---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xphb
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Insect
---
# [Giant Insect](3. Mechanics\CLI\bestiary\beast/giant-insect-xphb.md)
*Source: Player's Handbook (2024) p. 279. Available in the <span title='Systems Reference Document (5.2)'>SRD</span>*  

```statblock
"name": "Giant Insect (XPHB)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac_class": "11 + the spell's level"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "13"
  - !!int "15"
  - !!int "4"
  - !!int "14"
  - !!int "3"
"speed": "40 ft., climb 40 ft., fly 40 ft. (Wasp only)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "understands the languages you know"
"traits":
  - "desc": "The insect can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The insect makes a number of attacks equal to half this spell's level\
      \ (round down)."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* Bonus equals your spell attack modifier, reach 10\
      \ ft. *Hit:* 1d6 + 3 + the spell's level Piercing damage plus 1d4 Poison\
      \ damage."
    "name": "Poison Jab"
  - "desc": "*Ranged Attack Roll:* Bonus equals your spell attack modifier, range\
      \ 60 ft. *Hit:* 1d10 + 3 + the spell's level Bludgeoning damage, and the target's\
      \ Speed is reduced to 0 until the start of the insect's next turn."
    "name": "Web Bolt (Spider Only)"
"bonus_actions":
  - "desc": "*Constitution Saving Throw:* Your spell save DC, one creature the insect\
      \ can see within 10 feet. *Failure:* The target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the start of the insect's next turn."
    "name": "Venomous Spew (Centipede Only)"
"source":
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/giant-insect-xphb.webp"
```
^statblock