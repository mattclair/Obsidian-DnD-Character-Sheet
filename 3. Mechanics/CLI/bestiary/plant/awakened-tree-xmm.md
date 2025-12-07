---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Awakened Tree
---
# [Awakened Tree](3. Mechanics\CLI\bestiary\plant/awakened-tree-xmm.md)
*Source: Monster Manual (2024) p. 23. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Some awakened trees stand in still, meditative states for long periods, making them easy to mistake for normal plants, while others patrol regions of natural power. Awakened trees are sometimes brought to life by influences from the Feywild, which make them colorful and endlessly blooming, or by Shadowfell energy, which covers them with grotesque burls or makes them look lifeless.

## Awakened Plants

*Vegetation Given Magical Life*

- **Habitat.** Forest  
- **Treasure.** None  

Magic can invest plants with mobility, sapience, and even a voice. Spells such as [Awaken](3.%20Mechanics/CLI/spells/awaken-xphb.md) or the influence of other planes of existence might bring mundane vegetation to life, while other remarkable plants might naturally have these features.

> [!quote] A quote from Rivergleam, Pixie  
> 
> Just because we protect the forest doesn't mean it's defenseless.


```statblock
"name": "Awakened Tree (XMM)"
"size": "Huge"
"type": "plant"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "59"
"hit_dice": "7d12 + 14"
"modifier": !!int "-2"
"stats":
  - !!int "19"
  - !!int "6"
  - !!int "15"
  - !!int "10"
  - !!int "10"
  - !!int "7"
"speed": "20 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"senses": "passive Perception 10"
"languages": "Common plus one other language"
"cr": "2"
"actions":
  - "desc": "*Melee Attack Roll:* +6, reach 10 ft. *Hit:* 13 (2d8 + 4) Bludgeoning\
      \ damage."
    "name": "Slam"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/plant/token/awakened-tree-xmm.webp"
```
^statblock

## Environment

forest