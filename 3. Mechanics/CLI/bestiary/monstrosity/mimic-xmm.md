---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mimic
---
# [Mimic](3. Mechanics\CLI\bestiary\monstrosity/mimic-xmm.md)
*Source: Monster Manual (2024) p. 212. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Mimic

*Shape-Shifter Disguised as an Unassuming Object*

- **Habitat.** Underdark, Urban  
- **Treasure.** Any  

In their natural forms, mimics are little more than roaming stomachs, their blobby bodies covered with alien eyes and teeth. They can alter their color, texture, and dimensions to duplicate inanimate objects of their approximate size. Mimics use their disguises as both camouflage and bait. Once victims draw close, mimics strike, lashing out with their sticky pseudopods and toothy mouths. After consuming victims, mimics usually relocate, change form, and await their next meal.

Use the following list to inspire mimics' shapes:

Altar

Bell

Boulder

Cauldron

Chair

Chandelier

Chest

Cot

Door

Floor mat

Giant gemstone

Gravestone

Heap of leaves

Keg

Ladder

Lectern

Mannequin

Mirror

Obelisk

Oversize cake

Panel of levers

Pile of bones

Potted plant

Row of books

Sarcophagus

Sculpture

Ship's wheel

Sign

Stalagmite

Stump

Table

Tapestry

Taxidermy

Throne

Topiary

Weapon rack

```statblock
"name": "Mimic (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"modifier": !!int "3"
"stats":
  - !!int "17"
  - !!int "12"
  - !!int "15"
  - !!int "5"
  - !!int "13"
  - !!int "8"
"speed": "20 ft."
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "acid"
"condition_immunities": "[prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The mimic adheres to anything that touches it. A Huge or smaller creature\
      \ adhered to the mimic has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 13). Ability checks made to escape this grapple have\
      \ [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)."
    "name": "Adhesive (Object Form Only)"
"actions":
  - "desc": "*Melee Attack Roll:* +5 (with [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ if the target is [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the mimic), reach 5 ft. *Hit:* 7 (1d8 + 3) Piercing damage—or 12 (2d8\
      \ + 3) Piercing damage if the target is [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the mimic—plus 4 (1d8) Acid damage."
    "name": "Bite"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 7 (1d8 + 3) Bludgeoning\
      \ damage plus 4 (1d8) Acid damage. If the target is a Large or smaller creature,\
      \ it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled) condition\
      \ (escape DC 13). Ability checks made to escape this grapple have [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)."
    "name": "Pseudopod"
"bonus_actions":
  - "desc": "The mimic shape-shifts to resemble a Medium or Small object while retaining\
      \ its game statistics, or it returns to its true blob form. Any equipment it\
      \ is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/mimic-xmm.webp"
```
^statblock

## Environment

underdark, urban