---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Guard
---
# [Guard](3. Mechanics\CLI\bestiary\humanoid/guard-xmm.md)
*Source: Monster Manual (2024) p. 162. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Guards are perceptive, but most have little martial training. They might be bouncers, lookouts, members of a city watch, or other keen-eyed warriors.

## Guards

*Sentries and Watch Members*

- **Habitat.** Any  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md), Individual  

Guards protect people, places, and things, either for pay or from a sense of duty. They might perform their duties vigilantly or distractedly. Some raise alarms at the first sign of danger and defend their charges with their lives. Others flee outright if their compensation doesn't match the danger they face.

> [!quote] A quote from Volothamp Geddarm, Legendary Explorer  
> 
> To distinguish between Waterdeep's different groups of guardians, keep this handy mnemonic in mind: the Guard guards the walls while the Watch watches all.


```statblock
"name": "Guard (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "16"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "1"
"stats":
  - !!int "13"
  - !!int "12"
  - !!int "12"
  - !!int "10"
  - !!int "11"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
"senses": "passive Perception 12"
"languages": "Common"
"cr": "1/8"
"actions":
  - "desc": "*Melee  or Ranged Attack Roll:* +3, reach 5 ft. or range 20/60 ft.\
      \ *Hit:* 4 (1d6 + 1) Piercing damage."
    "name": "Spear"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/guard-xmm.webp"
```
^statblock

## Environment

any