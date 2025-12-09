---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/feywild
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Worg
---
# [Worg](3. Mechanics\CLI\bestiary\fey/worg-xmm.md)
*Source: Monster Manual (2024) p. 335. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Packs of worgs roam harsh frontiers and cursed lands. They sometimes conspire with goblinoids and gnolls and might serve them as mounts.

## Worgs

*Malicious Lupine Ravagers*

- **Habitat.** Forest, Grassland, Hill, Planar (Feywild)  
- **Treasure.** None  

Sometimes mistaken at first for giant wolves, worgs are vicious hunters. These sapient predators can speak and often taunt their prey, enjoying the taste of fear in their meals.

```statblock
"name": "Worg (XMM)"
"size": "Large"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "13"
  - !!int "13"
  - !!int "7"
  - !!int "11"
  - !!int "8"
"speed": "50 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Goblin, Worg"
"cr": "1/2"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 7 (1d8 + 3) Piercing\
      \ damage, and the next attack roll made against the target before the start\
      \ of the worg's next turn has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)."
    "name": "Bite"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fey/token/worg-xmm.webp"
```
^statblock

## Environment

forest, grassland, hill, planar, feywild