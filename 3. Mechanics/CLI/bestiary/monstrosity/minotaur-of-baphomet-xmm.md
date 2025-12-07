---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Minotaur of Baphomet
---
# [Minotaur of Baphomet](3. Mechanics\CLI\bestiary\monstrosity/minotaur-of-baphomet-xmm.md)
*Source: Monster Manual (2024) p. 215. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Minotaur of Baphomet

*Berserker of the Demon Lord of Beasts*

- **Habitat.** Underdark  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Baphomet, Demon Lord of Beasts, claims to have created minotaurs and demands their worship. While most minotaurs live free of the demon lord's bonds, those that serve him become minotaurs of Baphomet. These brutes resemble the hulking, horned demon lord more than others of their kind, and they wreak havoc in that foul immortal's name. Rarely, non-minotaurs cursed by magic-users or spiteful deities might transform into these monsters.

Minotaurs of Baphomet often dwell in mazes, leading their allies to hidden destinations and stalking trespassers. Roll on or choose a result from the Minotaur Mazes table to inspire the shape of a minotaur's dwelling.

**Minotaur Mazes**

| dice: 1d4 | The Minotaur of Baphomet Lurks In... |
|-----------|--------------------------------------|
| 1 | A multilevel mine or sewer. |
| 2 | Multiple mazes connected by magic portals. |
| 3 | A poisonous swamp with labyrinthine paths. |
| 4 | The ruins of a buried palace or temple. |
^minotaur-mazes

```statblock
"name": "Minotaur of Baphomet (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "16"
  - !!int "6"
  - !!int "16"
  - !!int "9"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Survival](3.%20Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+7"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 17"
"languages": "Abyssal"
"cr": "3"
"actions":
  - "desc": "*Melee Attack Roll:* +6, reach 10 ft. *Hit:* 10 (1d12 + 4) Slashing\
      \ damage plus 10 (3d6) Necrotic damage."
    "name": "Abyssal Glaive"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 18 (4d6 + 4) Piercing\
      \ damage. If the target is a Large or smaller creature and the minotaur moved\
      \ 10+ feet straight toward it immediately before the hit, the target takes an\
      \ extra 10 (3d6) Piercing damage and has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Gore (Recharge 5-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/minotaur-of-baphomet-xmm.webp"
```
^statblock

## Environment

underdark