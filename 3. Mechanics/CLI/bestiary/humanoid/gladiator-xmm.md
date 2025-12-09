---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gladiator
---
# [Gladiator](3. Mechanics\CLI\bestiary\humanoid/gladiator-xmm.md)
*Source: Monster Manual (2024) p. 139. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Gladiator

*Competitor and Prizefighter*

- **Habitat.** Any  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md), Individual  

Gladiators are professional fighters who pit themselves against one another, monsters, and other challenges to entertain audiences. While some compete merely to survive, others love the thrill of performing—and all gladiators know the importance of theatrics in keeping audiences excited. Roll on or choose an option from the Gladiator Theatrics table to inspire the unique flourishes a gladiator uses when competing.

**Gladiator Theatrics**

| dice: 1d6 | During a Competition, the Gladiator... |
|-----------|----------------------------------------|
| 1 | Dedicates their impending victory to a deity, ruler, beloved noble, or member of the crowd. |
| 2 | Dresses in a monster-themed mask and cape. |
| 3 | Judges whether their foe fights honorably. |
| 4 | Leads the crowd in a rousing theme song. |
| 5 | Seeks to claim a trophy from a foe. |
| 6 | Takes advice from the crowd, omens, or a pet. |
^gladiator-theatrics

```statblock
"name": "Gladiator (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "16"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "5"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "10"
  - !!int "12"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "strength": !!int "7"
  - "dexterity": !!int "5"
  - "constitution": !!int "6"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+10"
  - "name": "[Performance](3.%20Mechanics/CLI/rules/skills.md#Performance)"
    "desc": "+5"
"senses": "passive Perception 11"
"languages": "Common"
"cr": "5"
"actions":
  - "desc": "The gladiator makes three Spear attacks. It can replace one attack with\
      \ a use of Shield Bash."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +7, reach 5 ft. or range 20/60 ft.\
      \ *Hit:* 11 (2d6 + 4) Piercing damage."
    "name": "Spear"
  - "desc": "*Strength Saving Throw:* DC 15, one creature within 5 feet that the gladiator\
      \ can see. *Failure:* 9 (2d4 + 4) Bludgeoning damage. If the target is a Medium\
      \ or smaller creature, it has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Shield Bash"
"reactions":
  - "desc": "Trigger: The gladiator is hit by a melee attack roll while holding a\
      \ weapon. _Response:_ The gladiator adds 3 to its AC against that attack, possibly\
      \ causing it to miss."
    "name": "Parry"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/gladiator-xmm.webp"
```
^statblock

## Environment

any