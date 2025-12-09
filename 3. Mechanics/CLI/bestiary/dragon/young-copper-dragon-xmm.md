---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon/metallic
statblock: inline
statblock-link: "#^statblock"
aliases:
- Young Copper Dragon
---
# [Young Copper Dragon](3. Mechanics\CLI\bestiary\dragon/young-copper-dragon-xmm.md)
*Source: Monster Manual (2024) p. 78. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Young copper dragons forge strong connections with a community or group of friends while flitting from one artistic fixation to the next.

## Copper Dragons

*Dragons of Curiosity and Community*

- **Habitat.** Hill  
- **Treasure.** [Arcana](3.%20Mechanics/CLI/tables/random-magic-items-arcana.md)  

Relentlessly friendly and curious, most copper dragons view the world as a place of endless wonder and possibility. These gregarious dragons are fonts of patience, hospitality, and humor, and they seek to improve the lives—or, at least, the mood—of those they interact with. If forced to fight to defend themselves or their friends, these dragons favor using their slowing breath and physical attacks to subdue antagonists. Only in cases of extreme peril or emotion do they use their deadly acid breath.

Copper dragons typically live in caverns amid picturesque hills and rock formations—particularly those that are prominent landmarks. These dragons collect gifts, though they have little interest in treasure without meaning, no matter how valuable it is. To them, thoughtfully given presents and the feelings or memories they symbolize are more important than masterpieces or magical relics.

### Copper Dragon Lairs

Copper dragons typically inhabit multi-chamber caves and renovated ruins.

```statblock
"name": "Young Copper Dragon (XMM)"
"size": "Large"
"type": "dragon"
"subtype": "metallic"
"alignment": "Chaotic Good"
"ac": !!int "17"
"hp": !!int "119"
"hit_dice": "14d10 + 42"
"modifier": !!int "4"
"stats":
  - !!int "19"
  - !!int "12"
  - !!int "17"
  - !!int "16"
  - !!int "13"
  - !!int "15"
"speed": "40 ft., climb 40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "4"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Deception](3.%20Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_immunities": "acid"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 30 ft., [darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 17"
"languages": "Common, Draconic"
"cr": "7"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of Slowing Breath."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 10 ft. *Hit:* 15 (2d10 + 4) Slashing\
      \ damage."
    "name": "Rend"
  - "desc": "*Dexterity Saving Throw:* DC 14, each creature in a 40-foot-long, 5-foot-wide\
      \ [Line](3.%20Mechanics/CLI/rules/variant-rules/line-area-of-effect-xphb.md).\
      \ *Failure:* 40 (9d8) Acid damage. *Success:* Half damage."
    "name": "Acid Breath (Recharge 5-6)"
  - "desc": "*Constitution Saving Throw:* DC 14, each creature in a 30-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* The target can't take Reactions; its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ is halved; and it can take either an action or a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md)\
      \ on its turn, not both. This effect lasts until the end of its next turn."
    "name": "Slowing Breath"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/dragon/token/young-copper-dragon-xmm.webp"
```
^statblock

## Environment

hill