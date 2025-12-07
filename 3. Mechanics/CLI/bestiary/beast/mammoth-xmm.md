---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mammoth
---
# [Mammoth](3. Mechanics\CLI\bestiary\beast/mammoth-xmm.md)
*Source: Monster Manual (2024) p. 365. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.%20Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.%20Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Mammoth (XMM)"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"modifier": !!int "2"
"stats":
  - !!int "24"
  - !!int "9"
  - !!int "21"
  - !!int "3"
  - !!int "11"
  - !!int "6"
"speed": "50 ft."
"saves":
  - "strength": !!int "10"
  - "constitution": !!int "8"
"senses": "passive Perception 10"
"languages": ""
"cr": "6"
"actions":
  - "desc": "The mammoth makes two Gore attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +10, reach 10 ft. *Hit:* 18 (2d10 + 7) Piercing\
      \ damage. If the target is a Huge or smaller creature and the mammoth moved\
      \ 20+ feet straight toward it immediately before the hit, the target has the\
      \ [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone) condition."
    "name": "Gore"
"bonus_actions":
  - "desc": "*Dexterity Saving Throw:* DC 18, one creature within 5 feet that has\
      \ the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone) condition. *Failure:*\
      \ 29 (4d10 + 7) Bludgeoning damage. *Success:* Half damage."
    "name": "Trample"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/beast/token/mammoth-xmm.webp"
```
^statblock

## Environment

arctic