---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Brown Scavver
---
# [Brown Scavver](3. Mechanics\CLI\bestiary\monstrosity/brown-scavver-bam.md)
*Source: Boo's Astral Menagerie p. 49, Light of Xaryxis*  

Brown scavvers are 10 feet long and range in color from sun-dappled brownish gold to dark umber. It takes them days to digest a meal, during which time they attack only in self-defense.

A brown scavver likes to swallow its prey whole. The creature's stomach is filled with poisonous gas, which kills off anything that survives being swallowed.

```statblock
"name": "Brown Scavver (BAM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "51"
"hit_dice": "6d10 + 18"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "17"
  - !!int "1"
  - !!int "10"
  - !!int "1"
"speed": "0 ft., fly 40 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 10"
"languages": ""
"cr": "4"
"traits":
  - "desc": "The scavver doesn't require air."
    "name": "Unusual Nature"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) piercing damage. If the target is a Medium or smaller creature,\
      \ it must succeed on a DC 13 Dexterity saving throw or be swallowed by the scavver.\
      \ The scavver can have one creature swallowed at a time.\n\nA swallowed creature\
      \ is [blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded) and [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained),\
      \ has total cover against attacks and other effects outside the scavver, and\
      \ takes 13 (3d8) poison damage at the start of each of the scavver's turns\
      \ from the poisonous gas in the scavver's gullet.\n\nIf the scavver takes 15\
      \ damage or more on a single turn from a creature inside it, the scavver must\
      \ succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate\
      \ the swallowed creature, which falls [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ in a space within 10 feet of the scavver. If the scavver dies, a swallowed\
      \ creature is no longer [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by it and can escape from the corpse by using 10 feet of movement, exiting\
      \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Swallowing Bite"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/brown-scavver-bam.webp"
```
^statblock