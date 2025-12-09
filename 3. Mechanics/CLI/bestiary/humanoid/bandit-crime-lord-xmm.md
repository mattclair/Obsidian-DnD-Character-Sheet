---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bandit Crime Lord
---
# [Bandit Crime Lord](3. Mechanics\CLI\bestiary\humanoid/bandit-crime-lord-xmm.md)
*Source: Monster Manual (2024) p. 28*  

Bandit crime lords manipulate shadowy organizations and prioritize their own survival over any single lackey or plot.

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
"name": "Bandit Crime Lord (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "169"
"hit_dice": "26d8 + 52"
"modifier": !!int "9"
"stats":
  - !!int "10"
  - !!int "20"
  - !!int "14"
  - !!int "18"
  - !!int "14"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "9"
  - "constitution": !!int "6"
"skillsaves":
  - "name": "[Acrobatics](3.%20Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+9"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+10"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+13"
"senses": "passive Perception 20"
"languages": "Common, Thieves' cant"
"cr": "11"
"traits":
  - "desc": "If the bandit is subjected to an effect that allows it to make a Dexterity\
      \ saving throw to take only half damage, the bandit instead takes no damage\
      \ if it succeeds on the save and only half damage if it fails. It can't use\
      \ this trait if it has the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Evasion"
"actions":
  - "desc": "The bandit makes three attacks, using Scimitar or Pistol in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +9, reach 5 ft. *Hit:* 12 (2d6 + 5) Slashing\
      \ damage plus 14 (4d6) Poison damage."
    "name": "Scimitar"
  - "desc": "*Ranged Attack Roll:* +9, range 30/90 ft. *Hit:* 10 (1d10 + 5) Piercing\
      \ damage plus 14 (4d6) Poison damage."
    "name": "Pistol"
"bonus_actions":
  - "desc": "The bandit gives itself [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on the next attack roll it makes during the current turn. If that attack hits,\
      \ the target takes an extra 28 (8d6) Poison damage."
    "name": "Deadly Aim"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/bandit-crime-lord-xmm.webp"
```
^statblock

## Environment

any