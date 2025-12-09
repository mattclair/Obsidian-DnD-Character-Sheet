---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/lox
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/wizard
statblock: inline
statblock-link: "#^statblock"
aliases:
- Princess Xedalli
---
# [Princess Xedalli](3. Mechanics\CLI\bestiary\npc/princess-xedalli-lox.md)
*Source: Light of Xaryxis p. 60*  

```statblock
"name": "Princess Xedalli (LoX)"
"size": "Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"ac_class": "[elven chain](3.%20Mechanics/CLI/items/elven-chain-xdmg.md)"
"hp": !!int "103"
"hit_dice": "23d8"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "14"
  - !!int "10"
  - !!int "21"
  - !!int "18"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "8"
  - "wisdom": !!int "7"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+8"
  - "name": "[Deception](3.%20Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+7"
  - "name": "[Insight](3.%20Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+7"
  - "name": "[Persuasion](3.%20Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+7"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Celestial, Common, Draconic, Elvish"
"cr": "8"
"traits":
  - "desc": "Xedalli has advantage on saving throws it makes to avoid or end the [charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ condition on itself, and magic can't put it to sleep."
    "name": "Fey Ancestry"
  - "desc": "Xedalli wears a suit of [elven chain](3.%20Mechanics/CLI/items/elven-chain-xdmg.md)."
    "name": "Special Equipment"
  - "desc": "Xedalli doesn't require sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "Xedalli makes two Scimitar attacks and uses Radiant Beam (if available)."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage plus 10 (3d6) radiant damage."
    "name": "Scimitar"
  - "desc": "A magical beam of radiance flashes out from Xedalli's hand in a 5-foot-wide,\
      \ 60-foot-long line. Each creature in the line must make a DC 16 Constitution\
      \ saving throw, taking 18 (4d8) radiant damage on a failed save, or half as\
      \ much damage on a successful one."
    "name": "Radiant Beam (3/Day)"
  - "desc": "Xedalli casts one of the following spells, using Intelligence as the\
      \ spellcasting ability:\n\n**1/day each:** [fly](3.%20Mechanics/CLI/spells/fly-xphb.md),\
      \ [mislead](3.%20Mechanics/CLI/spells/mislead-xphb.md), [sending](3.%20Mechanics/CLI/spells/sending-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Xedalli magically teleports up to 30 feet, along with anything it is\
      \ wearing or carrying, to an unoccupied space it can see."
    "name": "Starlight Step (3/Day)"
  - "desc": "Xedalli has a 50 percent chance of magically summoning a [young solar\
      \ dragon](3.%20Mechanics/CLI/bestiary/dragon/young-solar-dragon-bam.md). A summoned\
      \ dragon appears in an unoccupied space that the summoner can see, acts on its\
      \ own initiative count, and is an ally of its summoner. It remains for 10 minutes,\
      \ until it or its summoner dies, or until its summoner dismisses it as an action."
    "name": "Summon Solar Dragon (1/Day)"
"source":
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/npc/token/princess-xedalli-lox.webp"
```
^statblock