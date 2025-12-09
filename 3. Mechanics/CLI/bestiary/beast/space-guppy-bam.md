---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Space Guppy
---
# [Space Guppy](3. Mechanics\CLI\bestiary\beast/space-guppy-bam.md)
*Source: Boo's Astral Menagerie p. 55, Light of Xaryxis*  

Space guppies are 2- to 3-foot-long, fish-like creatures that glide through Wildspace and the Astral Sea. Chwinga astronauts, sprites, and other Tiny creatures occasionally use space guppies as mounts.

```statblock
"name": "Space Guppy (BAM)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "3"
"hit_dice": "1d6"
"modifier": !!int "3"
"stats":
  - !!int "3"
  - !!int "16"
  - !!int "10"
  - !!int "1"
  - !!int "10"
  - !!int "1"
"speed": "0 ft., fly 30 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": ""
"cr": "0"
"traits":
  - "desc": "If it has at least 1 hit point, the guppy can generate an air envelope\
      \ around itself when in a vacuum. This air envelope can sustain the guppy and\
      \ one other Tiny creature in its space indefinitely."
    "name": "Air Envelope"
  - "desc": "The guppy doesn't provoke opportunity attacks when it flies out of an\
      \ enemy's reach."
    "name": "Flyby"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 1\
      \ bludgeoning damage."
    "name": "Tail Slap"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/space-guppy-bam.webp"
```
^statblock