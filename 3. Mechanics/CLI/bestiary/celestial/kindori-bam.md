---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Kindori
---
# [Kindori](3. Mechanics\CLI\bestiary\celestial/kindori-bam.md)
*Source: Boo's Astral Menagerie p. 31, Light of Xaryxis*  

A kindori lacks a noticeable mouth. The leading edge of its body is dotted with small eyes that can emit bright beams of light, which the creature uses to blind predators before making its escape. Kindori communicate with one another over long distances by sending flashes of light from their eyes and draw their nourishment from the light of suns and stars.

A kindori is large enough to have its own gravity plane and air envelope, enabling smaller creatures to live and travel on its body. Mosses, molds, and other parasitic organisms grow on its surface, which in turn attract predators to clean them off. A kindori might have scavvers feeding on these parasites, which it doesn't mind. An extremely old or sick kindori can be identified by the overgrowth of vines and vegetation on it.

The bones and cartilage of a dead kindori do not deteriorate after parasites devour the creature's flesh. A kindori skeleton can be transformed into a spelljamming ship by placing a spelljamming helm inside it.

Kindori are peaceful creatures but have many natural enemies, including lunar dragons, solar dragons, and various peoples that inhabit Wildspace.

```statblock
"name": "Kindori (BAM)"
"size": "Gargantuan"
"type": "celestial"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "202"
"hit_dice": "15d20 + 45"
"modifier": !!int "-2"
"stats":
  - !!int "25"
  - !!int "7"
  - !!int "17"
  - !!int "6"
  - !!int "14"
  - !!int "7"
"speed": "0 ft., fly 60 ft. (hover)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 12"
"languages": ""
"cr": "7"
"traits":
  - "desc": "The kindori doesn't require food, drink, or air."
    "name": "Unusual Nature"
"actions":
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one target. *Hit:*\
      \ 23 (3d10 + 7) bludgeoning damage."
    "name": "Tail"
"bonus_actions":
  - "desc": "The kindori emits bright light in a 120-foot cone. Each creature in the\
      \ cone must succeed on a DC 14 Wisdom saving throw or be [blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Flashing Eyes (Recharge 6)"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/celestial/token/kindori-bam.webp"
```
^statblock