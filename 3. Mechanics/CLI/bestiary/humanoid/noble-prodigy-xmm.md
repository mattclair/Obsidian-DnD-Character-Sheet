---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Noble Prodigy
---
# [Noble Prodigy](3. Mechanics\CLI\bestiary\humanoid/noble-prodigy-xmm.md)
*Source: Monster Manual (2024) p. 227*  

Noble prodigies trace their lineage to a legendary hero, a demigod, a dragon, or some other ancestor that grants them magical prowess. Among some nobles, the source of a prodigy's magic might be a family secret.

## Nobles

*Royals and Rich Folk*

- **Habitat.** Any  
- **Treasure.** Individual  

Nobles encompass a variety of people with social influence. They might be rulers, wealthy merchants, callous bureaucrats, or the idle elite.

```statblock
"name": "Noble Prodigy (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "16"
"hp": !!int "148"
"hit_dice": "27d8 + 27"
"modifier": !!int "7"
"stats":
  - !!int "8"
  - !!int "16"
  - !!int "12"
  - !!int "15"
  - !!int "14"
  - !!int "19"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "5"
  - "wisdom": !!int "6"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Persuasion](3.%20Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+8"
"senses": "passive Perception 16"
"languages": "Common plus two other languages"
"cr": "10"
"actions":
  - "desc": "The noble makes three Beguiling Strike attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +8, reach 5 ft. or range 60 ft. *Hit:*\
      \ 18 (4d6 + 4) Psychic damage, and the target has the [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ condition until the start of the noble's next turn."
    "name": "Beguiling Strike"
  - "desc": "The noble casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 16):\n\n**At\
      \ will:** [Mage Armor](3.%20Mechanics/CLI/spells/mage-armor-xphb.md) (included\
      \ in AC), [Mage Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md), [Minor Illusion](3.%20Mechanics/CLI/spells/minor-illusion-xphb.md)\n\
      \n**1/day each:** [Befuddlement](3.%20Mechanics/CLI/spells/befuddlement-xphb.md),\
      \ [Detect Thoughts](3.%20Mechanics/CLI/spells/detect-thoughts-xphb.md), [Fly](3.%20Mechanics/CLI/spells/fly-xphb.md),\
      \ [Scrying](3.%20Mechanics/CLI/spells/scrying-xphb.md), [Shatter](3.%20Mechanics/CLI/spells/shatter-xphb.md)\
      \ (level 7 version)"
    "name": "Spellcasting"
"reactions":
  - "desc": "The noble casts [Shield](3.%20Mechanics/CLI/spells/shield-xphb.md) in\
      \ response to that spell's trigger, using the same spellcasting ability as Spellcasting.\n"
    "name": "Shield (2/Day)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/noble-prodigy-xmm.webp"
```
^statblock

## Environment

any