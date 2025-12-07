---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/lox
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Vocath
---
# [Vocath](3. Mechanics\CLI\bestiary\npc/vocath-lox.md)
*Source: Light of Xaryxis p. 42*  

```statblock
"name": "Vocath (LoX)"
"size": "Large"
"type": "celestial"
"alignment": "typically  Lawful Neutral"
"ac": !!int "13"
"ac_class": "[mage armor](3.%20Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "15"
  - !!int "18"
  - !!int "16"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "7"
  - "wisdom": !!int "6"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Insight](3.%20Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+9"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Persuasion](3.%20Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+5"
"senses": "passive Perception 16"
"languages": "Common, Giant, telepathy 60 ft. (see also Mercane telepathy)"
"cr": "5"
"traits":
  - "desc": "Vocath can communicate telepathically with any other mercane it knows,\
      \ regardless of the distance between them."
    "name": "Mercane Telepathy"
"actions":
  - "desc": "Vocath makes three Psi-Imbued Blade attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage, and if the target is a creature, it must succeed\
      \ on a DC 15 Wisdom saving throw or be [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ of Vocath until the end of the target's next turn."
    "name": "Psi-Imbued Blade"
  - "desc": "Vocath casts one of the following spells, requiring no spell components\
      \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\n\
      **At will:** [detect magic](3.%20Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [light](3.%20Mechanics/CLI/spells/light-xphb.md)\n\n**1/day each:** [dimension\
      \ door](3.%20Mechanics/CLI/spells/dimension-door-xphb.md), [invisibility](3.%20Mechanics/CLI/spells/invisibility-xphb.md),\
      \ [mage armor](3.%20Mechanics/CLI/spells/mage-armor-xphb.md) (self only)"
    "name": "Spellcasting (Psionics)"
"source":
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/npc/token/vocath-lox.webp"
```
^statblock