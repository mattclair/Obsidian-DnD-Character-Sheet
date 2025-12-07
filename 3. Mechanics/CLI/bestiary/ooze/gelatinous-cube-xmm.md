---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gelatinous Cube
---
# [Gelatinous Cube](3. Mechanics\CLI\bestiary\ooze/gelatinous-cube-xmm.md)
*Source: Monster Manual (2024) p. 129. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Gelatinous Cube

*Dungeon-Scouring Block of Ooze*

- **Habitat.** Underdark  
- **Treasure.** Any  

Quivering masses of acidic goo, gelatinous cubes wobble through narrow caverns and dungeons, engulfing anything in their paths. These Oozes are naturally transparent, making them difficult to see while they're stationary. Creatures and objects that become stuck within these slimes are gradually dissolved. Undigested detritus sometimes floats within a gelatinous cube, hinting at its past meals. Roll on or choose a result from the Gelatinous Cube Debris table to inspire a gelatinous cube's contents.

**Gelatinous Cube Debris**

| dice: 1d6 | Floating in the Gelatinous Cube Is A... |
|-----------|-----------------------------------------|
| 1 | Chest or recently trapped mimic. |
| 2 | Collection of bubbles or rocks resembling eyes. |
| 3 | Key to a nearby door or coffer. |
| 4 | Remarkable weapon in need of repair. |
| 5 | Skeleton belonging to a famous adventurer. |
| 6 | Tablet bearing a mysterious message. |
^gelatinous-cube-debris

```statblock
"name": "Gelatinous Cube (XMM)"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "6"
"hp": !!int "63"
"hit_dice": "6d10 + 30"
"modifier": !!int "-4"
"stats":
  - !!int "14"
  - !!int "3"
  - !!int "20"
  - !!int "1"
  - !!int "6"
  - !!int "1"
"speed": "15 ft."
"damage_immunities": "acid"
"condition_immunities": "[blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded),\
  \ [charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed), [deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 8"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The cube fills its entire space and is transparent. Other creatures can\
      \ enter that space, but a creature that does so is subjected to the cube's Engulf\
      \ and has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on the saving throw.\n\nCreatures inside the cube have [Total Cover](3.%20Mechanics/CLI/rules/variant-rules/cover-xphb.md),\
      \ and the cube can hold one Large creature or up to four Medium or Small creatures\
      \ inside itself at a time.\n\nAs an action, a creature within 5 feet of the\
      \ cube can pull a creature or an object out of the cube by succeeding on a DC\
      \ 12 Strength ([Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics)) check,\
      \ and the puller takes 10 (3d6) Acid damage."
    "name": "Ooze Cube"
  - "desc": "Even when the cube is in plain sight, a creature must succeed on a DC\
      \ 15 Wisdom ([Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)) check\
      \ to notice the cube if the creature hasn't witnessed the cube move or otherwise\
      \ act."
    "name": "Transparent"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 12 (3d6 + 2) Acid damage."
    "name": "Pseudopod"
  - "desc": "The cube moves up to its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ without provoking [Opportunity Attacks](3.%20Mechanics/CLI/rules/actions.md#Opportunity%20Attack).\
      \ The cube can move through the spaces of Large or smaller creatures if it has\
      \ room inside itself to contain them (see the Ooze [Cube](3.%20Mechanics/CLI/rules/variant-rules/cube-area-of-effect-xphb.md)\
      \ trait). *Dexterity Saving Throw:* DC 12, each creature whose space the cube\
      \ enters for the first time during this move. *Failure:* 10 (3d6) Acid damage,\
      \ and the target is engulfed. An engulfed target is suffocating, can't cast\
      \ spells with a Verbal component, has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition, and takes 10 (3d6) Acid damage at the start of each of the cube's\
      \ turns. When the cube moves, the engulfed target moves with it. An engulfed\
      \ target can try to escape by taking an action to make a DC 12 Strength ([Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics))\
      \ check. On a successful check, the target escapes and enters the nearest unoccupied\
      \ space. *Success:* Half damage, and the target moves to an unoccupied space\
      \ within 5 feet of the cube. If there is no unoccupied space, the target fails\
      \ the save instead."
    "name": "Engulf"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/ooze/token/gelatinous-cube-xmm.webp"
```
^statblock

## Environment

underdark