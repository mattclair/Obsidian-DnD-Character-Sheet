---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/lox
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Big Momma
---
# [Big Momma](3. Mechanics\CLI\bestiary\npc/big-momma-lox.md)
*Source: Light of Xaryxis p. 29*  

```statblock
"name": "Big Momma (LoX)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "157"
"hit_dice": "15d12 + 60"
"modifier": !!int "3"
"stats":
  - !!int "22"
  - !!int "16"
  - !!int "19"
  - !!int "4"
  - !!int "13"
  - !!int "5"
"speed": "0 ft., fly 40 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+11"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 15"
"languages": ""
"cr": "11"
"traits":
  - "desc": "Big Momma doesn't require air."
    "name": "Unusual Nature"
"actions":
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:*\
      \ 45 (6d12 + 6) piercing damage. If the target is a Large or smaller creature,\
      \ it must succeed on a DC 16 Dexterity saving throw or be swallowed by Big Momma.\
      \ Big Momma can have one creature swallowed at a time.\n\nA swallowed creature\
      \ is [blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded) and [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained),\
      \ has total cover against attacks and other effects outside Big Momma, and takes\
      \ 11 (2d10) acid damage at the start of each of Big Momma's turns from the\
      \ digestive juices in Big Momma's gullet.\n\nIf Big Momma takes 25 damage or\
      \ more on a single turn from a creature inside it, Big Momma must succeed on\
      \ a DC 20 Constitution saving throw at the end of that turn or regurgitate the\
      \ swallowed creature, which falls [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ in a space within 10 feet of Big Momma. If Big Momma dies, a swallowed creature\
      \ is no longer [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by it and can escape from the corpse by using 10 feet of movement, exiting\
      \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Swallowing Bite"
"bonus_actions":
  - "desc": "Big Momma's eye emits an [invisible](3.%20Mechanics/CLI/rules/conditions.md#Invisible),\
      \ magical ray that targets one creature Big Momma can see within 60 feet of\
      \ itself. The target must succeed on a DC 16 Wisdom saving throw or be [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ of Big Momma until the start of Big Momma's next turn."
    "name": "Ray of Fear (Recharge 4-6)"
"source":
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/npc/token/big-momma-lox.webp"
```
^statblock