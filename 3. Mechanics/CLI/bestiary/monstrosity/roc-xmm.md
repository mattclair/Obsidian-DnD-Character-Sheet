---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Roc
---
# [Roc](3. Mechanics\CLI\bestiary\monstrosity/roc-xmm.md)
*Source: Monster Manual (2024) p. 261. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Roc

*Avian of Unbelievable Size*

- **Habitat.** Arctic, Coastal, Desert, Hill, Mountain  
- **Treasure.** Any  

Birds of prey of fantastic scale, rocs hunt over vast territories and can snatch whole elephants, whales, or wagons in their talons. They then carry their prey back to their remote nests, journeys that can take days and cover hundreds of miles.

Rocs nest amid remote heights. Their nests are typically littered with treasure and uneaten prey. Roll on or choose an option from the Roc Nest Remnants table to inspire what's in a roc's nest.

**Roc Nest Remnants**

| dice: 1d6 | The Roc's Nest Holds... |
|-----------|-------------------------|
| 1 | The burial litter of a lost hero. |
| 2 | A caravan wagon full of trade goods. |
| 3 | A live elephant. |
| 4 | `1d4` eggs larger than adult humans. |
| 5 | Someone marooned in the nest. |
| 6 | A statue of a knight riding a rearing steed. |
^roc-nest-remnants

```statblock
"name": "Roc (XMM)"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "248"
"hit_dice": "16d20 + 80"
"modifier": !!int "8"
"stats":
  - !!int "28"
  - !!int "10"
  - !!int "20"
  - !!int "3"
  - !!int "10"
  - !!int "9"
"speed": "20 ft., fly 120 ft."
"saves":
  - "dexterity": !!int "4"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+8"
"senses": "passive Perception 18"
"languages": ""
"cr": "11"
"actions":
  - "desc": "The roc makes two Beak attacks. It can replace one attack with a Talons\
      \ attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +13, reach 10 ft. *Hit:* 28 (3d12 + 9) Piercing\
      \ damage."
    "name": "Beak"
  - "desc": "*Melee Attack Roll:* +13, reach 5 ft. *Hit:* 23 (4d6 + 9) Slashing\
      \ damage. If the target is a Huge or smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 19) from both talons, and it has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition until the grapple ends."
    "name": "Talons"
"bonus_actions":
  - "desc": "If the roc has a creature [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled),\
      \ the roc flies up to half its [Fly Speed](3.%20Mechanics/CLI/rules/variant-rules/fly-speed-xphb.md)\
      \ without provoking [Opportunity Attacks](3.%20Mechanics/CLI/rules/actions.md#Opportunity%20Attack)\
      \ and drops that creature."
    "name": "Swoop (Recharge 5-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/roc-xmm.webp"
```
^statblock

## Environment

arctic, coastal, desert, hill, mountain