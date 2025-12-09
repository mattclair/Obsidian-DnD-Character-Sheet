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
- Bandit
---
# [Bandit](3. Mechanics\CLI\bestiary\humanoid/bandit-xmm.md)
*Source: Monster Manual (2024) p. 27. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Bandits are inexperienced ne'er-do-wells who typically follow the orders of higher-ranking bandits.

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
"name": "Bandit (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "12"
  - !!int "10"
  - !!int "10"
  - !!int "10"
"speed": "30 ft."
"senses": "passive Perception 10"
"languages": "Common, Thieves' cant"
"cr": "1/8"
"actions":
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 4 (1d6 + 1) Slashing\
      \ damage."
    "name": "Scimitar"
  - "desc": "*Ranged Attack Roll:* +3, range 80/320 ft. *Hit:* 5 (1d8 + 1) Piercing\
      \ damage."
    "name": "Light Crossbow"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/bandit-xmm.webp"
```
^statblock

## Environment

any