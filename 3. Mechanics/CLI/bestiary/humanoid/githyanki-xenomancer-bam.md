---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/druid
- ttrpg-cli/monster/type/humanoid/gith
statblock: inline
statblock-link: "#^statblock"
aliases:
- Githyanki Xenomancer
---
# [Githyanki Xenomancer](3. Mechanics\CLI\bestiary\humanoid/githyanki-xenomancer-bam.md)
*Source: Boo's Astral Menagerie p. 27, Light of Xaryxis*  

A githyanki xenomancer travels to the farthest reaches of Wildspace and the Astral Sea, even visiting worlds of the Material Plane from time to time, to study and catalog creatures it has never encountered before. Friendly contact with sapient creatures can bring the xenomancer's diplomatic skills to the forefront, while hostile contact becomes a test of the xenomancer's survival skills.

Sometimes a xenomancer's research requires that a specimen be captured and imprisoned (to study its behavior) or killed and dissected (to study or harvest its insides). Many xenomancers prefer to do this work in their laboratories on the Astral Plane.

```statblock
"name": "Githyanki Xenomancer (BAM)"
"size": "Medium"
"type": "humanoid"
"subtype": "druid, gith"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "157"
"hit_dice": "21d8 + 63"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "17"
  - !!int "15"
  - !!int "18"
  - !!int "13"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "8"
  - "constitution": !!int "7"
  - "wisdom": !!int "8"
"skillsaves":
  - "name": "[Animal Handling](3.%20Mechanics/CLI/rules/skills.md#Animal%20Handling)"
    "desc": "+8"
  - "name": "[Nature](3.%20Mechanics/CLI/rules/skills.md#Nature)"
    "desc": "+6"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+8"
  - "name": "[Survival](3.%20Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+8"
"senses": "passive Perception 18"
"languages": "Gith plus any four languages"
"cr": "9"
"actions":
  - "desc": "The githyanki makes three Staff attacks, three Telekinetic Bolt attacks,\
      \ or a combination thereof."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage when used\
      \ with two hands, plus 14 (4d6) psychic damage."
    "name": "Staff"
  - "desc": "*Ranged Spell Attack:* +8 to hit, range 60 ft., one target. *Hit:*\
      \ 20 (3d10 + 4) force damage."
    "name": "Telekinetic Bolt"
  - "desc": "The githyanki casts one of the following spells, requiring no spell components\
      \ and using Wisdom as the spellcasting ability (spell save DC 16):\n\n**At will:**\
      \ [druidcraft](3.%20Mechanics/CLI/spells/druidcraft-xphb.md), [light](3.%20Mechanics/CLI/spells/light-xphb.md),\
      \ [mage hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md) (the hand is invisible)\n\
      \n**2/day each:** [invisibility](3.%20Mechanics/CLI/spells/invisibility-xphb.md)\
      \ (self only), [pass without trace](3.%20Mechanics/CLI/spells/pass-without-trace-xphb.md)\
      \ (self only)\n\n**1/day each:** [dominate monster](3.%20Mechanics/CLI/spells/dominate-monster-xphb.md),\
      \ [forcecage](3.%20Mechanics/CLI/spells/forcecage-xphb.md), [plane shift](3.%20Mechanics/CLI/spells/plane-shift-xphb.md),\
      \ [telekinesis](3.%20Mechanics/CLI/spells/telekinesis-xphb.md)"
    "name": "Spellcasting (Psionics)"
"bonus_actions":
  - "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
      \ up to 30 feet to an unoccupied space it can see."
    "name": "Astral Step (Recharge 4-6)"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/githyanki-xenomancer-bam.webp"
```
^statblock