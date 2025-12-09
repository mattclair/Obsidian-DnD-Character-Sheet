---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Spy
---
# [Spy](3. Mechanics\CLI\bestiary\humanoid/spy-xmm.md)
*Source: Monster Manual (2024) p. 295. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Spies use charm and deception to veil their true intentions. If forced into combat, they seek to end such conflicts quietly and decisively.

## Spies

*Infiltrators and Informants*

- **Habitat.** Any  
- **Treasure.** [Implements](3.%20Mechanics/CLI/tables/random-magic-items-implements.md), Individual  

Spies gather information and disseminate lies, manipulating people to gain the results the spies' patrons desire. They're trained to manipulate, infiltrate, and—when necessary—escape in a hurry. Many adopt disguises, aliases, or code names to maintain anonymity. Roll on or choose a result from the Spy Personas table to inspire a spy's disguise.

**Spy Personas**

| dice: 1d4 | The Spy Disguises Themself As... |
|-----------|----------------------------------|
| 1 | A bard or traveling performer. |
| 2 | A captive or servant of a monster or villain. |
| 3 | A dignitary or traveler from a distant land. |
| 4 | A visitor from a different time or world. |
^spy-personas

```statblock
"name": "Spy (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "6d8"
"modifier": !!int "4"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "10"
  - !!int "12"
  - !!int "14"
  - !!int "16"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Deception](3.%20Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Insight](3.%20Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+4"
  - "name": "[Investigation](3.%20Mechanics/CLI/rules/skills.md#Investigation)"
    "desc": "+5"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Sleight of Hand](3.%20Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+4"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"senses": "passive Perception 16"
"languages": "Common plus one other language"
"cr": "1"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 5 (1d6 + 2) Piercing\
      \ damage plus 7 (2d6) Poison damage."
    "name": "Shortsword"
  - "desc": "*Ranged Attack Roll:* +4, range 30/120 ft. *Hit:* 5 (1d6 + 2) Piercing\
      \ damage plus 7 (2d6) Poison damage."
    "name": "Hand Crossbow"
"bonus_actions":
  - "desc": "The spy takes the Dash, Disengage, or Hide action."
    "name": "Cunning Action"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/spy-xmm.webp"
```
^statblock

## Environment

any