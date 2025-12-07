---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Darkmantle
---
# [Darkmantle](3. Mechanics\CLI\bestiary\aberration/darkmantle-xmm.md)
*Source: Monster Manual (2024) p. 90. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Darkmantle

*Ceiling-Clinging Ambush Predator*

- **Habitat.** Underdark  
- **Treasure.** None  

Unnatural subterranean hunters, darkmantles veil themselves in magical shadows and use their bizarre anatomies to disguise themselves as stalactites. When prey passes below, lurking darkmantles drop and unfurl their webbed tentacles, attempting to blind, suffocate, or crush their victims.

Darkmantles share similarities with piercers and ropers and often hunt near those monsters. Scholars have attempted to establish a shared origin or life cycle between those creatures, but their efforts are thwarted by those monsters' supernatural physiologies and deadly natures.

> [!quote] A quote from S. Wakeman, Underdark Explorer  
> 
> Just assume there's no such thing as a stalactite.


```statblock
"name": "Darkmantle (XMM)"
"size": "Small"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "13"
  - !!int "2"
  - !!int "10"
  - !!int "5"
"speed": "10 ft., fly 30 ft."
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 10"
"languages": ""
"cr": "1/2"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 6 (1d6 + 3) Bludgeoning\
      \ damage, and the darkmantle attaches to the target. If the target is a Medium\
      \ or smaller creature and the darkmantle had [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on the attack roll, it covers the target, which has the [Blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded)\
      \ condition and is suffocating while the darkmantle is attached in this way.\n\
      \nWhile attached to a target, the darkmantle can attack only the target but\
      \ has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on its attack rolls. Its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ becomes 0, it can't benefit from any bonus to its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md),\
      \ and it moves with the target.\n\nA creature can take an action to try to detach\
      \ the darkmantle from itself, doing so with a successful DC 13 Strength ([Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics))\
      \ check. On its turn, the darkmantle can detach itself by using 5 feet of movement."
    "name": "Crush"
  - "desc": "Magical [Darkness](3.%20Mechanics/CLI/rules/variant-rules/darkness-xphb.md)\
      \ fills a 15-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the darkmantle. This effect lasts while the darkmantle maintains\
      \ [Concentration](3.%20Mechanics/CLI/rules/conditions.md#Concentration) on it,\
      \ up to 10 minutes. Darkvision can't penetrate this area, and no light can illuminate\
      \ it."
    "name": "Darkness Aura (1/Day)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/darkmantle-xmm.webp"
```
^statblock

## Environment

underdark