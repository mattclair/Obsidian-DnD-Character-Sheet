---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Merrow
---
# [Merrow](3. Mechanics\CLI\bestiary\monstrosity/merrow-xmm.md)
*Source: Monster Manual (2024) p. 210. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Merrow

*Ogreish Undersea Abductor*

- **Habitat.** Coastal, Underwater  
- **Treasure.** Any  

Vicious aquatic hunters, merrow combine the features of ogres with those of primeval, predatory fish. They lurk in coastal waters, hoping to snare unsuspecting prey by bursting from the water and grabbing their quarry or by skewering victims with deadly harpoons. These hunters then drag land dwellers back to dismal undersea lairs. Merrow often keep prisoners in their larders as future meals.

Merrow raid coastal settlements and merfolk communities to steal weapons and treasure. This leads to conflicts between merfolk and merrow, but it also provokes misunderstandings with surface dwellers who blame merfolk for merrow attacks.

> [!quote] A quote from Leomund  
> 
> Sages trace merrows' origins to aquatic ogres, depraved merfolk, and worse. Such broad theories reveal little about these monsters but overmuch of the dread lurking beyond our certain shores.


```statblock
"name": "Merrow (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "15"
  - !!int "8"
  - !!int "10"
  - !!int "9"
"speed": "10 ft., swim 40 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Abyssal, Primordial (Aquan)"
"cr": "2"
"traits":
  - "desc": "The merrow can breathe air and water."
    "name": "Amphibious"
"actions":
  - "desc": "The merrow makes two attacks, using Bite, Claw, or Harpoon in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 6 (1d4 + 4) Piercing\
      \ damage, and the target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the end of the merrow's next turn."
    "name": "Bite"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 9 (2d4 + 4) Slashing\
      \ damage."
    "name": "Claw"
  - "desc": "*Melee  or Ranged Attack Roll:* +6, reach 5 ft. or range 20/60 ft.\
      \ *Hit:* 11 (2d6 + 4) Piercing damage. If the target is a Large or smaller\
      \ creature, the merrow pulls the target up to 15 feet straight toward itself."
    "name": "Harpoon"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/merrow-xmm.webp"
```
^statblock

## Environment

coastal, underwater