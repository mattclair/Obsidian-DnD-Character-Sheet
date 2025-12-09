---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Psychic Gray Ooze
---
# [Psychic Gray Ooze](3. Mechanics\CLI\bestiary\ooze/psychic-gray-ooze-xmm.md)
*Source: Monster Manual (2024) p. 151. Available in the <span title='Systems Reference Document (5.2)'>SRD</span>*  

Psychic gray oozes exhibit violent psionic abilities. These oozes sometimes result from failed attempts to summon or create creatures linked to the Elemental Plane of Earth, like gargoyles or homunculi.

## Gray Oozes

*Hungry Slimes and Magical Failures*

- **Habitat.** Underdark  
- **Treasure.** None  

Gray oozes are predatory, corrosive slimes that blend in with stony surroundings.

```statblock
"name": "Psychic Gray Ooze (XMM)"
"size": "Medium"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "9"
"hp": !!int "37"
"hit_dice": "5d8 + 15"
"modifier": !!int "-1"
"stats":
  - !!int "12"
  - !!int "8"
  - !!int "16"
  - !!int "10"
  - !!int "6"
  - !!int "2"
"speed": "10 ft., climb 10 ft."
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"damage_resistances": "acid, cold, fire, psychic"
"condition_immunities": "[blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded),\
  \ [charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed), [deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled), [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 8"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The ooze can move through a space as narrow as 1 inch without expending\
      \ extra movement to do so."
    "name": "Amorphous"
"actions":
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 11 (3d6 + 1) Acid damage,\
      \ and the target has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on Intelligence saving throws until the end of the ooze's next turn."
    "name": "Pseudopod"
  - "desc": "*Intelligence Saving Throw:* DC 10, one creature the ooze can see within\
      \ 60 feet. *Failure:* 13 (3d8) Psychic damage."
    "name": "Psychic Crush"
"reactions":
  - "desc": "Trigger: The ooze fails a saving throw against a spell or another magical\
      \ effect created by a creature. _Response:_ The triggering creature takes 3\
      \ (1d6) Psychic damage."
    "name": "Mind Corrosion"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/ooze/token/psychic-gray-ooze-xmm.webp"
```
^statblock

## Environment

underdark