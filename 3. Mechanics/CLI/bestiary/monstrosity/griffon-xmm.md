---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Griffon
---
# [Griffon](3. Mechanics\CLI\bestiary\monstrosity/griffon-xmm.md)
*Source: Monster Manual (2024) p. 159. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Griffon

*Majestic Hunter of Land and Sky*

- **Habitat.** Arctic, Coastal, Grassland, Hill, Mountain  
- **Treasure.** None  

Griffons combine the features of raptors and big cats—most commonly eagles and lions—and possess the precision and ferocity of such predators. Rarer breeds of griffons have the features of condors and panthers, while others resemble hawks and tigers. Regardless of their appearances, griffons are often associated with royalty and are widely called the Masters of Animals.

Countless tales surround griffons. Roll on or choose a result from the Griffon Tales table to inspire stories about them.

**Griffon Tales**

| dice: 1d6 | Legends Claim That Griffons... |
|-----------|--------------------------------|
| 1 | Attack anything in the skies near their lairs. |
| 2 | Curse their killers. Those who slay a griffon face the enmity of all animals. |
| 3 | Lay eggs with remarkable healing properties. |
| 4 | Prefer the taste of horses over all other prey. |
| 5 | Serve the first creature they see after hatching. |
| 6 | Won't attack those with royal blood. |
^griffon-tales

> [!quote] A quote from Sildar Hallwinter, retired member of the Waterdeep Griffon Cavalry  
> 
> People think we flew high over the city to avoid weather vanes and laundry lines and whatnot. Truth is, if the griffons smelled how much horse meat trotted just below, folks would have worse than joy-flying mages and stirges to worry about!


```statblock
"name": "Griffon (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "2"
  - !!int "13"
  - !!int "8"
"speed": "30 ft., fly 80 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": ""
"cr": "2"
"actions":
  - "desc": "The griffon makes two Rend attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 8 (1d8 + 4) Piercing\
      \ damage. If the target is a Medium or smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 14) from both of the griffon's front claws."
    "name": "Rend"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/griffon-xmm.webp"
```
^statblock

## Environment

arctic, coastal, grassland, hill, mountain