---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/lower
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Succubus
---
# [Succubus](3. Mechanics\CLI\bestiary\fiend/succubus-xmm.md)
*Source: Monster Manual (2024) p. 303. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Succubus

*Life-Draining Seducer*

- **Habitat.** Planar (Lower Planes), Urban  
- **Treasure.** [Implements](3.%20Mechanics/CLI/tables/random-magic-items-implements.md)  

Succubi prey on mortals physically and exploit their waking desires. They relish corrupting virtuous souls and the pain an individual's downfall can cause. Once their targets are at their lowest, succubi slay their victims with their essence-draining kiss.

Through fiendish rites, succubi can transform into incubi to manipulate their prey in dreams as well as the waking world. They can also change shape to torment their victims. These tempters can dominate Humanoids, but they usually do so to reinforce their manipulations or defend themselves rather than controlling others outright. Roll on or choose a result from the Succubus Temptations table to inspire how a succubus toys with its victims.

**Succubus Temptations**

| dice: 1d6 | The Succubus Manipulates Its Target By... |
|-----------|-------------------------------------------|
| 1 | Adopting the form of a lost loved one. |
| 2 | Charming someone close to its target. |
| 3 | Isolating them from their loved ones. |
| 4 | Manipulating events to bring surprise fortune. |
| 5 | Posing as a flattering underling. |
| 6 | Taking the form of one in need of protection. |
^succubus-temptations

```statblock
"name": "Succubus (XMM)"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"modifier": !!int "3"
"stats":
  - !!int "8"
  - !!int "17"
  - !!int "13"
  - !!int "15"
  - !!int "12"
  - !!int "20"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  - "name": "[Deception](3.%20Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+9"
  - "name": "[Insight](3.%20Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+5"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Persuasion](3.%20Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+9"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"damage_resistances": "cold, fire, poison, psychic"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": "Abyssal, Common, Infernal; telepathy 60 ft."
"cr": "4"
"traits":
  - "desc": "When the succubus finishes a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md),\
      \ it can shape-shift into an [Incubus](3.%20Mechanics/CLI/bestiary/fiend/incubus-xmm.md),\
      \ using that stat block instead of this one."
    "name": "Incubus Form"
"actions":
  - "desc": "The succubus makes one Fiendish Touch attack and uses Charm or Draining\
      \ Kiss."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 16 (2d10 + 5) Psychic\
      \ damage."
    "name": "Fiendish Touch"
  - "desc": "The succubus casts [Dominate Person](3.%20Mechanics/CLI/spells/dominate-person-xphb.md)\
      \ (level 8 version), requiring no spell components and using Charisma as the\
      \ spellcasting ability (spell save DC 15)."
    "name": "Charm"
  - "desc": "*Constitution Saving Throw:* DC 15, one creature [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ by the succubus within 5 feet. *Failure:* 13 (3d8) Psychic damage. *Success:*\
      \ Half damage. *Failure or Success:* The target's [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by an amount equal to the damage taken."
    "name": "Draining Kiss"
"bonus_actions":
  - "desc": "The succubus shape-shifts to resemble a Medium or Small Humanoid or back\
      \ into its true form. Its game statistics are the same in each form, except\
      \ its [Fly Speed](3.%20Mechanics/CLI/rules/variant-rules/fly-speed-xphb.md)\
      \ is available only in its true form. Any equipment it's wearing or carrying\
      \ isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/succubus-xmm.webp"
```
^statblock

## Environment

planar, lower, urban