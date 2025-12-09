---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Frog
---
# [Giant Frog](3. Mechanics\CLI\bestiary\beast/giant-frog-xmm.md)
*Source: Monster Manual (2024) p. 357. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Giant Frog (XMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "18"
"hit_dice": "4d8"
"modifier": !!int "1"
"stats":
  - !!int "12"
  - !!int "13"
  - !!int "11"
  - !!int "2"
  - !!int "10"
  - !!int "3"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 30 ft., passive\
  \ Perception 12"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The frog can breathe air and water."
    "name": "Amphibious"
  - "desc": "The frog's [Long Jump](3.%20Mechanics/CLI/rules/variant-rules/long-jump-xphb.md)\
      \ is up to 20 feet and its [High Jump](3.%20Mechanics/CLI/rules/variant-rules/high-jump-xphb.md)\
      \ is up to 10 feet with or without a running start."
    "name": "Standing Leap"
"actions":
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 5 (1d6 + 2) Piercing\
      \ damage. If the target is a Medium or smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 11)."
    "name": "Bite"
  - "desc": "The frog swallows a Small or smaller target it is grappling. While swallowed,\
      \ the target isn't [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ but has the [Blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded) and\
      \ [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) conditions,\
      \ and it has [Total Cover](3.%20Mechanics/CLI/rules/variant-rules/cover-xphb.md)\
      \ against attacks and other effects outside the frog. While swallowing the target,\
      \ the frog can't use Bite, and if the frog dies, the swallowed target is no\
      \ longer [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) and\
      \ can escape from the corpse using 5 feet of movement, exiting with the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition.\n\nAt the end of the frog's next turn, the swallowed target takes\
      \ 5 (2d4) Acid damage. If that damage doesn't kill it, the frog disgorges\
      \ it, causing it to exit [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Swallow"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/giant-frog-xmm.webp"
```
^statblock

## Environment

forest, swamp