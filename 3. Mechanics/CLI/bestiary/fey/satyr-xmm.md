---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/feywild
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Satyr
---
# [Satyr](3. Mechanics\CLI\bestiary\fey/satyr-xmm.md)
*Source: Monster Manual (2024) p. 268. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Satyrs enjoy demonstrating their physicality through contests, evicting party poopers, and defending Fey realms.

## Satyrs

*Horned and Hoofed Revelers*

- **Habitat.** Forest, Planar (Feywild)  
- **Treasure.** [Implements](3.%20Mechanics/CLI/tables/random-magic-items-implements.md)  

Satyrs embody the untamed joys of the wilderness. They indulge in sprees of merrymaking—eating, drinking, performing, fighting, and frolicking.

```statblock
"name": "Satyr (XMM)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"hp": !!int "31"
"hit_dice": "7d8"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "11"
  - !!int "12"
  - !!int "10"
  - !!int "14"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Performance](3.%20Mechanics/CLI/rules/skills.md#Performance)"
    "desc": "+6"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "passive Perception 12"
"languages": "Common, Elvish, Sylvan"
"cr": "1/2"
"traits":
  - "desc": "The satyr has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 5 (1d4 + 3) Bludgeoning\
      \ damage. If the target is a Medium or smaller creature, the satyr pushes the\
      \ target up to 10 feet straight away from itself."
    "name": "Hooves"
  - "desc": "*Wisdom Saving Throw:* DC 12, one creature the satyr can see within 90\
      \ feet. *Failure:* 5 (1d6 + 2) Psychic damage."
    "name": "Mockery"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fey/token/satyr-xmm.webp"
```
^statblock

## Environment

forest, planar, feywild