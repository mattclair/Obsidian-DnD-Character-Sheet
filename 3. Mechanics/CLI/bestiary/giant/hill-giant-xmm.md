---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Hill Giant
---
# [Hill Giant](3. Mechanics\CLI\bestiary\giant/hill-giant-xmm.md)
*Source: Monster Manual (2024) p. 168. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Hill Giant

*Giant of Crags and Valleys*

- **Habitat.** Hill  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Hill giants live among rugged bluffs and highlands. Standing three times the size of most humans, these giants exhibit skin and hair in a range of shades, including hues suggestive of the earth and mosses near their dwellings.

Among hidden valleys, pristine waterfalls, and game-filled slopes, hill giants usually find their needs met by nature's bounty. What the wilderness doesn't provide, hill giants make, crafting clothes, tools, and weapons from rocks, wood, and hides. When they encounter strangers, hill giants might be suspicious and protective of their territories, but some might be convinced to share their bounties with travelers willing to entertain them.

Disaster, invasion, or want might drive hill giants from their homes into other people's lands. Some displaced hill giants might steal what they need or seek revenge for their losses by causing ruin among smaller beings. Others might take up lives of raiding or serve other giants in return for protection.

```statblock
"name": "Hill Giant (XMM)"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "105"
"hit_dice": "10d12 + 40"
"modifier": !!int "2"
"stats":
  - !!int "21"
  - !!int "8"
  - !!int "19"
  - !!int "5"
  - !!int "9"
  - !!int "6"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
"senses": "passive Perception 12"
"languages": "Giant"
"cr": "5"
"actions":
  - "desc": "The giant makes two attacks, using Tree Club or Trash Lob in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +8, reach 10 ft. *Hit:* 18 (3d8 + 5) Bludgeoning\
      \ damage. If the target is a Large or smaller creature, it has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Tree Club"
  - "desc": "*Ranged Attack Roll:* +8, range 60/240 ft. *Hit:* 16 (2d10 + 5) Bludgeoning\
      \ damage, and the target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the end of its next turn."
    "name": "Trash Lob"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/giant/token/hill-giant-xmm.webp"
```
^statblock

## Environment

hill