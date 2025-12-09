---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gray Scavver
---
# [Gray Scavver](3. Mechanics\CLI\bestiary\monstrosity/gray-scavver-bam.md)
*Source: Boo's Astral Menagerie p. 49, Light of Xaryxis*  

Gray scavvers are 6 feet long and travel in packs. The scent of blood sends them into a feeding frenzy, but wounding one usually weakens it enough to make it break off its attack.

```statblock
"name": "Gray Scavver (BAM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "13"
  - !!int "15"
  - !!int "1"
  - !!int "10"
  - !!int "1"
"speed": "0 ft., fly 40 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 10"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The scavver doesn't require air."
    "name": "Unusual Nature"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit (with advantage if the target is a\
      \ creature that is missing any hit points), reach 5 ft., one target. *Hit:*\
      \ 7 (1d8 + 3) piercing damage."
    "name": "Bite"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/gray-scavver-bam.webp"
```
^statblock