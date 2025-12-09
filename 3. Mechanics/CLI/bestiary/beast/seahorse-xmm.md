---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Seahorse
---
# [Seahorse](3. Mechanics\CLI\bestiary\beast/seahorse-xmm.md)
*Source: Monster Manual (2024) p. 369. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Seahorse (XMM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"modifier": !!int "1"
"stats":
  - !!int "1"
  - !!int "12"
  - !!int "8"
  - !!int "1"
  - !!int "10"
  - !!int "2"
"speed": "5 ft., swim 20 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "passive Perception 12"
"languages": ""
"cr": "0"
"traits":
  - "desc": "The seahorse can breathe only underwater."
    "name": "Water Breathing"
"actions":
  - "desc": "While underwater, the seahorse moves up to its [Swim Speed](3.%20Mechanics/CLI/rules/variant-rules/swim-speed-xphb.md)\
      \ without provoking [Opportunity Attacks](3.%20Mechanics/CLI/rules/actions.md#Opportunity%20Attack)."
    "name": "Bubble Dash"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/seahorse-xmm.webp"
```
^statblock

## Environment

underwater