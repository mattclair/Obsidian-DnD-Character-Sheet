---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon/metallic
statblock: inline
statblock-link: "#^statblock"
aliases:
- Copper Dragon Wyrmling
---
# [Copper Dragon Wyrmling](3. Mechanics\CLI\bestiary\dragon/copper-dragon-wyrmling-xmm.md)
*Source: Monster Manual (2024) p. 78. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Copper dragon wyrmlings venture into the world seeking to make friends and discover wonders. They sometimes get into trouble, but those who help them can become their friends for life.

## Copper Dragons

*Dragons of Curiosity and Community*

- **Habitat.** Hill  
- **Treasure.** [Arcana](3.%20Mechanics/CLI/tables/random-magic-items-arcana.md)  

Relentlessly friendly and curious, most copper dragons view the world as a place of endless wonder and possibility. These gregarious dragons are fonts of patience, hospitality, and humor, and they seek to improve the lives—or, at least, the mood—of those they interact with. If forced to fight to defend themselves or their friends, these dragons favor using their slowing breath and physical attacks to subdue antagonists. Only in cases of extreme peril or emotion do they use their deadly acid breath.

Copper dragons typically live in caverns amid picturesque hills and rock formations—particularly those that are prominent landmarks. These dragons collect gifts, though they have little interest in treasure without meaning, no matter how valuable it is. To them, thoughtfully given presents and the feelings or memories they symbolize are more important than masterpieces or magical relics.

### Copper Dragon Lairs

Copper dragons typically inhabit multi-chamber caves and renovated ruins.

```statblock
"name": "Copper Dragon Wyrmling (XMM)"
"size": "Medium"
"type": "dragon"
"subtype": "metallic"
"alignment": "Chaotic Good"
"ac": !!int "16"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"modifier": !!int "3"
"stats":
  - !!int "15"
  - !!int "12"
  - !!int "13"
  - !!int "14"
  - !!int "11"
  - !!int "13"
"speed": "30 ft., climb 30 ft., fly 60 ft."
"saves":
  - "dexterity": !!int "3"
  - "wisdom": !!int "2"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"damage_immunities": "acid"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 10 ft., [darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 60 ft., passive Perception 14"
"languages": "Draconic"
"cr": "1"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 7 (1d10 + 2) Slashing\
      \ damage."
    "name": "Rend"
  - "desc": "*Dexterity Saving Throw:* DC 11, each creature in a 20-foot-long, 5-foot-wide\
      \ [Line](3.%20Mechanics/CLI/rules/variant-rules/line-area-of-effect-xphb.md).\
      \ *Failure:* 18 (4d8) Acid damage. *Success:* Half damage."
    "name": "Acid Breath (Recharge 5-6)"
  - "desc": "*Constitution Saving Throw:* DC 11, each creature in a 15-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* The target can't take Reactions; its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ is halved; and it can take either an action or a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md)\
      \ on its turn, not both. This effect lasts until the end of its next turn."
    "name": "Slowing Breath"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/dragon/token/copper-dragon-wyrmling-xmm.webp"
```
^statblock

## Environment

hill