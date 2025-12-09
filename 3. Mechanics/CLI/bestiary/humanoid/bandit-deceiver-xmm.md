---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bandit Deceiver
---
# [Bandit Deceiver](3. Mechanics\CLI\bestiary\humanoid/bandit-deceiver-xmm.md)
*Source: Monster Manual (2024) p. 28*  

Bandit deceivers use magic to disguise their activities or create flashy distractions.

## Bandits

*Criminals and Scoundrels*

- **Habitat.** Any  
- **Treasure.** Any  

Bandits use the threat of violence to take what they want. Such criminals include gang members, desperadoes, and lawless mercenaries. Yet not all bandits are motivated by greed. Some are driven to lives of crime by unjust laws, desperation, or the threats of merciless leaders.

Roll on or choose a result from the Bandit Motivations table to determine the circumstances behind a bandit's crimes.

> [!quote] A quote from Jarlaxle  
> 
> I am he who rules the world, don't you know? One little piece at a time.

**Bandit Motivations**

| dice: 1d6 | The Bandit... |
|-----------|---------------|
| 1 | Fights only oppressors. |
| 2 | Is an ex-soldier who was discarded by their nation and now takes what they were promised. |
| 3 | Is in a gang that views nonmembers as foes. |
| 4 | Hesitantly serves a villainous leader. |
| 5 | Secretly works for a government or a regional ruler to sow chaos. |
| 6 | Takes what they need to survive. |
^bandit-motivations

```statblock
"name": "Bandit Deceiver (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "16"
"hp": !!int "130"
"hit_dice": "20d8 + 40"
"modifier": !!int "6"
"stats":
  - !!int "8"
  - !!int "16"
  - !!int "14"
  - !!int "17"
  - !!int "12"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "6"
  - "intelligence": !!int "6"
"skillsaves":
  - "name": "[Acrobatics](3.%20Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+6"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+9"
"senses": "passive Perception 14"
"languages": "Common, Thieves' cant"
"cr": "7"
"actions":
  - "desc": "The bandit makes three Dagger attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +6, reach 5 ft. or range 20/60 ft.\
      \ *Hit:* 8 (2d4 + 3) Piercing damage plus 10 (3d6) Poison damage."
    "name": "Dagger"
  - "desc": "*Constitution Saving Throw:* DC 14, each creature in a 10-foot-radius\
      \ [Sphere](3.%20Mechanics/CLI/rules/variant-rules/sphere-area-of-effect-xphb.md)\
      \ centered on a point the bandit can see within 120 feet. *Failure:* 13 (3d6\
      \ + 3) Radiant damage, and the target has the [Blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded)\
      \ condition until the start of the bandit's next turn. *Success:* Half damage\
      \ only."
    "name": "Blinding Flash (Recharge 4-6)"
  - "desc": "The bandit casts one of the following spells, using Intelligence as the\
      \ spellcasting ability (spell save DC 14):\n\n**At will:** [Disguise Self](3.%20Mechanics/CLI/spells/disguise-self-xphb.md),\
      \ [Mage Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md), [Minor Illusion](3.%20Mechanics/CLI/spells/minor-illusion-xphb.md)\n\
      \n**1/day each:** [Hold Person](3.%20Mechanics/CLI/spells/hold-person-xphb.md)\
      \ (level 4 version), [Mage Armor](3.%20Mechanics/CLI/spells/mage-armor-xphb.md)\
      \ (included in AC), [Major Image](3.%20Mechanics/CLI/spells/major-image-xphb.md)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/bandit-deceiver-xmm.webp"
```
^statblock

## Environment

any