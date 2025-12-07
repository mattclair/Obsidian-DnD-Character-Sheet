---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Oni
---
# [Oni](3. Mechanics\CLI\bestiary\fiend/oni-xmm.md)
*Source: Monster Manual (2024) p. 232. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Oni

*Wickedness Drawn to the Wicked*

- **Habitat.** Forest, Urban  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Oni are elusive entities that inhabit dark forests and other wildernesses. By shape-shifting into the form of an innocent or moving invisibly, oni encroach on communities and lonely roads. They frequently harass people of faith, testing the limits of their piousness, or torment selfish people, punishing them for their wickedness. Wise communities often have guardian statues, annual rituals, or local superstitions meant to keep oni at bay. In rare cases, an oni might gradually befriend such communities and protect them from other threats for generations.

Oni torment villages that don't pay them or other supernatural forces respect. Roll on or choose a result from the Oni Troubles table to inspire how an oni menaces such communities.

**Oni Troubles**

| dice: 1d4 | The Oni Torments People By... |
|-----------|-------------------------------|
| 1 | Charming people to perform nasty tricks. |
| 2 | Claiming a bridge, gate, shrine, or trail and trying to eat anyone who comes near. |
| 3 | Luring other monsters to the settlement. |
| 4 | Playing drums that keep everyone awake. |
^oni-troubles

```statblock
"name": "Oni (XMM)"
"size": "Large"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "119"
"hit_dice": "14d10 + 42"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "11"
  - !!int "16"
  - !!int "14"
  - !!int "12"
  - !!int "15"
"speed": "30 ft., fly 30 ft. (hover)"
"saves":
  - "dexterity": !!int "3"
  - "constitution": !!int "6"
  - "wisdom": !!int "4"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[Deception](3.%20Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+8"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "cold"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common, Giant"
"cr": "7"
"traits":
  - "desc": "The oni regains 10 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ at the start of each of its turns if it has at least 1 [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)."
    "name": "Regeneration"
"actions":
  - "desc": "The oni makes two Claw or Nightmare Ray attacks. It can replace one attack\
      \ with a use of Spellcasting."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 10 ft. *Hit:* 10 (1d12 + 4) Slashing\
      \ damage plus 9 (2d8) Necrotic damage."
    "name": "Claw"
  - "desc": "*Ranged Attack Roll:* +5, range 60 ft. *Hit:* 9 (2d6 + 2) Psychic\
      \ damage, and the target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition until the start of the oni's next turn."
    "name": "Nightmare Ray"
  - "desc": "The oni shape-shifts into a Small or Medium Humanoid or a Large Giant,\
      \ or it returns to its true form. Other than its size, its game statistics are\
      \ the same in each form. Any equipment it is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
  - "desc": "The oni casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 13):\n\n**1/day\
      \ each:** [Charm Person](3.%20Mechanics/CLI/spells/charm-person-xphb.md) (level\
      \ 2 version), [Darkness](3.%20Mechanics/CLI/spells/darkness-xphb.md), [Gaseous\
      \ Form](3.%20Mechanics/CLI/spells/gaseous-form-xphb.md), [Sleep](3.%20Mechanics/CLI/spells/sleep-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The oni casts [Invisibility](3.%20Mechanics/CLI/spells/invisibility-xphb.md)\
      \ on itself, requiring no spell components and using the same spellcasting ability\
      \ as Spellcasting.\n"
    "name": "Invisibility"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/oni-xmm.webp"
```
^statblock

## Environment

forest, urban