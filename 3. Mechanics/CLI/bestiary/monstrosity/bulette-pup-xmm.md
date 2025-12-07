---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bulette Pup
---
# [Bulette Pup](3. Mechanics\CLI\bestiary\monstrosity/bulette-pup-xmm.md)
*Source: Monster Manual (2024) p. 63*  

Juvenile bulettes are known as pups. They travel in small groups, using their numbers to bring down larger foes. Their arrival frequently presages the appearance of an adult bulette.

## Bulettes

*Ravenous, Subsurface Land Sharks*

- **Habitat.** Grassland, Hill, Mountain  
- **Treasure.** None  

Also called "land sharks," bulettes are single-minded predators that burrow under, leap over, and burst through obstacles in pursuit of their quarry. They burrow rapidly just below ground. On sensing movement, they erupt from below, attempting to catch prey in their oversize maws.

```statblock
"name": "Bulette Pup (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"modifier": !!int "-1"
"stats":
  - !!int "16"
  - !!int "8"
  - !!int "17"
  - !!int "2"
  - !!int "10"
  - !!int "4"
"speed": "30 ft., burrow 20 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 30 ft., tremorsense\
  \ 60 ft., passive Perception 14"
"languages": ""
"cr": "2"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 14 (2d10 + 3) Piercing\
      \ damage."
    "name": "Bite"
"bonus_actions":
  - "desc": "The bulette jumps up to 30 feet by spending 10 feet of movement."
    "name": "Leap"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/bulette-pup-xmm.webp"
```
^statblock

## Environment

grassland, hill, mountain