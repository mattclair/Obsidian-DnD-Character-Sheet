---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/lox
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Flapjack
---
# [Flapjack](3. Mechanics\CLI\bestiary\npc/flapjack-lox.md)
*Source: Light of Xaryxis p. 13*  

One crew member stayed aboard the Moondancer while it was in port: a flumph named Flapjack, who serves as the ship's spelljammer.

```statblock
"name": "Flapjack (LoX)"
"size": "Small"
"type": "aberration"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "15"
  - !!int "10"
  - !!int "14"
  - !!int "14"
  - !!int "11"
"speed": "5 ft., fly 30 ft."
"skillsaves":
  - "name": "[Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+4"
  - "name": "[History](3.%20Mechanics/CLI/rules/skills.md#History)"
    "desc": "+4"
  - "name": "[Religion](3.%20Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+4"
"damage_vulnerabilities": "psychic"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "understands Undercommon but can't speak, telepathy 60 ft."
"cr": "1/8"
"traits":
  - "desc": "Flapjack can perceive the content of any telepathic communication used\
      \ within 60 feet of it, and it can't be [surprised](3.%20Mechanics/CLI/rules/conditions.md#Surprised)\
      \ by creatures with any form of telepathy."
    "name": "Advanced Telepathy"
  - "desc": "If Flapjack is knocked [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone),\
      \ roll a die. On an odd result, Flapjack lands upside-down and is [incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated).\
      \ At the end of each of its turns, Flapjack can make a DC 10 Dexterity saving\
      \ throw, righting itself and ending the [incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition if it succeeds."
    "name": "Prone Deficiency"
  - "desc": "Flapjack is immune to any effect that would sense its emotions or read\
      \ its thoughts, as well as all divination spells."
    "name": "Telepathic Shroud"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:*\
      \ 4 (1d4 + 2) piercing damage plus 2 (1d4) acid damage. At the end of each\
      \ of its turns, the target must make a DC 10 Constitution saving throw, taking\
      \ 2 (1d4) acid damage on a failure or ending the recurring acid damage on\
      \ a success. A [lesser restoration](3.%20Mechanics/CLI/spells/lesser-restoration-xphb.md)\
      \ spell cast on the target also ends the recurring acid damage."
    "name": "Tendrils"
  - "desc": "Each creature in a 15-foot cone originating from Flapjack must succeed\
      \ on a DC 10 Dexterity saving throw or be coated in a foul-smelling liquid.\
      \ A coated creature exudes a horrible stench for 1d4 hours. The coated creature\
      \ is [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned) as long as\
      \ the stench lasts, and other creatures are [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ while with in 5 feet of the coated creature. A creature can remove the stench\
      \ on itself by using a short rest to bathe in water, alcohol, or vinegar."
    "name": "Stench Spray (1/Day)"
  - "desc": "Flapjack casts one of the following spells, requiring no material components\
      \ and using Intelligence as the spellcasting ability (spell save DC 12):\n\n\
      **At will:** [mage hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md), [minor\
      \ illusion](3.%20Mechanics/CLI/spells/minor-illusion-xphb.md)\n\n**1/day each:**\
      \ [magic missile](3.%20Mechanics/CLI/spells/magic-missile-xphb.md), [unseen\
      \ servant](3.%20Mechanics/CLI/spells/unseen-servant-xphb.md)"
    "name": "Spellcasting"
"source":
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/npc/token/flapjack-lox.webp"
```
^statblock