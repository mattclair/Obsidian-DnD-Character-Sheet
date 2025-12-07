---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Guard Captain
---
# [Guard Captain](3. Mechanics\CLI\bestiary\humanoid/guard-captain-xmm.md)
*Source: Monster Manual (2024) p. 162. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Guard captains often have ample professional experience. They might be accomplished bodyguards, protectors of magic treasures, veteran watch members, or similar wardens.

## Guards

*Sentries and Watch Members*

- **Habitat.** Any  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md), Individual  

Guards protect people, places, and things, either for pay or from a sense of duty. They might perform their duties vigilantly or distractedly. Some raise alarms at the first sign of danger and defend their charges with their lives. Others flee outright if their compensation doesn't match the danger they face.

> [!quote] A quote from Volothamp Geddarm, Legendary Explorer  
> 
> To distinguish between Waterdeep's different groups of guardians, keep this handy mnemonic in mind: the Guard guards the walls while the Watch watches all.


```statblock
"name": "Guard Captain (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "16"
  - !!int "12"
  - !!int "14"
  - !!int "13"
"speed": "30 ft."
"skillsaves":
  - "name": "[Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+6"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"senses": "passive Perception 14"
"languages": "Common"
"cr": "4"
"actions":
  - "desc": "The guard makes two attacks, using Javelin or Longsword in any combination."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +6, reach 5 ft. or range 30/120 ft.\
      \ *Hit:* 14 (3d6 + 4) Piercing damage."
    "name": "Javelin"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 15 (2d10 + 4) Slashing\
      \ damage."
    "name": "Longsword"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/guard-captain-xmm.webp"
```
^statblock

## Environment

any