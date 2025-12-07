---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Seahorse
---
# [Giant Seahorse](3. Mechanics\CLI\bestiary\beast/giant-seahorse-xmm.md)
*Source: Monster Manual (2024) p. 359, Player's Handbook (2024) p. 350. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Giant Seahorse (XMM)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "16"
"hit_dice": "3d10"
"modifier": !!int "1"
"stats":
  - !!int "15"
  - !!int "12"
  - !!int "11"
  - !!int "2"
  - !!int "12"
  - !!int "5"
"speed": "5 ft., swim 40 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The seahorse can breathe only underwater."
    "name": "Water Breathing"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 9 (2d6 + 2) Bludgeoning\
      \ damage, or 11 (2d8 + 2) Bludgeoning damage if the seahorse moved 20+ feet\
      \ straight toward the target immediately before the hit."
    "name": "Ram"
"bonus_actions":
  - "desc": "While underwater, the seahorse moves up to half its [Swim Speed](3.%20Mechanics/CLI/rules/variant-rules/swim-speed-xphb.md)\
      \ without provoking [Opportunity Attacks](3.%20Mechanics/CLI/rules/actions.md#Opportunity%20Attack)."
    "name": "Bubble Dash"
"source":
  - "XMM"
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/giant-seahorse-xmm.webp"
```
^statblock

## Environment

underwater