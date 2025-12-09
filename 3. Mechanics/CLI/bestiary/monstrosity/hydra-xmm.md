---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Hydra
---
# [Hydra](3. Mechanics\CLI\bestiary\monstrosity/hydra-xmm.md)
*Source: Monster Manual (2024) p. 175. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Hydra

*Multiheaded Serpent of Legend*

- **Habitat.** Coastal, Swamp  
- **Treasure.** Any  

Hydras are storied hero slayers with vicious, serpentine heads and infamous regenerative powers. Endlessly hungry, they devour any creatures they catch. Hydras that deplete an area of prey often go into a lengthy torpor until new prey arrives.

Most hydras have five heads, but some mature or battle-tested hydras have more. Such elder hydras might become local legends, known for their battles with heroes or for the riches lost in their domains.

While many hydras claim their own territories, wicked deities might use them to guard treasures or magical sites. Roll on or choose a result from the Hydra Lairs table to inspire why a hydra lurks where it does.

**Hydra Lairs**

| dice: 1d4 | The Hydra Lurks Where It Does To... |
|-----------|-------------------------------------|
| 1 | Ensure none claim the weapon of a fallen hero. |
| 2 | Defend the home of a wise but sinister oracle. |
| 3 | Guard a magical herb that blooms once a year. |
| 4 | Protect a font of poison that pollutes a river. |
^hydra-lairs

```statblock
"name": "Hydra (XMM)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "184"
"hit_dice": "16d12 + 80"
"modifier": !!int "4"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "20"
  - !!int "2"
  - !!int "10"
  - !!int "7"
"speed": "40 ft., swim 40 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"condition_immunities": "[blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded),\
  \ [charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed), [deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), [stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned),\
  \ [unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 16"
"languages": ""
"cr": "8"
"traits":
  - "desc": "The hydra can hold its breath for 1 hour."
    "name": "Hold Breath"
  - "desc": "The hydra has five heads. Whenever the hydra takes 25 damage or more\
      \ on a single turn, one of its heads dies. The hydra dies if all its heads are\
      \ dead. At the end of each of its turns when it has at least one living head,\
      \ the hydra grows two heads for each of its heads that died since its last turn,\
      \ unless it has taken Fire damage since its last turn. The hydra regains 20\
      \ [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md) when\
      \ it grows new heads."
    "name": "Multiple Heads"
  - "desc": "For each head the hydra has beyond one, it gets an extra [Reaction](3.%20Mechanics/CLI/rules/variant-rules/reaction-xphb.md)\
      \ that can be used only for [Opportunity Attacks](3.%20Mechanics/CLI/rules/actions.md#Opportunity%20Attack)."
    "name": "Reactive Heads"
"actions":
  - "desc": "The hydra makes as many Bite attacks as it has heads."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +8, reach 10 ft. *Hit:* 10 (1d10 + 5) Piercing\
      \ damage."
    "name": "Bite"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/hydra-xmm.webp"
```
^statblock

## Environment

coastal, swamp