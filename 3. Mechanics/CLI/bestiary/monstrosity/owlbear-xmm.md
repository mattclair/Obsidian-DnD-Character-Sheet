---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Owlbear
---
# [Owlbear](3. Mechanics\CLI\bestiary\monstrosity/owlbear-xmm.md)
*Source: Monster Manual (2024) p. 234. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Owlbears are tenacious hunters that might track prey over miles and rarely give up their hunts.

## Owlbears

*Magically Perfected Predators*

- **Habitat.** Forest  
- **Treasure.** None  

Created long ago by misguided mages, owlbears combine keen avian eyes, thick feathers, and a tearing beak with a mighty bearlike frame. Despite their magical origins, owlbears have propagated and spread to wildernesses across the multiverse.

Owlbears dwell in distinctive dens. Roll on or choose a result from the Owlbear Den Features table to inspire an owlbear den's noteworthy traits.

**Owlbear Den Features**

| dice: 1d4 | An Owlbear Den Contains... |
|-----------|----------------------------|
| 1 | Evidence of previous occupants, like bandits, wolves, or dragons. |
| 2 | Heaps of regurgitated pellets studded with coins or other treasure. |
| 3 | A nest with `1d6` owlbear eggs. |
| 4 | Passages through the earth or hollow trees. |
^owlbear-den-features

```statblock
"name": "Owlbear (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "17"
  - !!int "3"
  - !!int "12"
  - !!int "7"
"speed": "40 ft., climb 40 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": ""
"cr": "3"
"actions":
  - "desc": "The owlbear makes two Rend attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 14 (2d8 + 5) Slashing\
      \ damage."
    "name": "Rend"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/owlbear-xmm.webp"
```
^statblock

## Environment

forest