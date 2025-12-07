---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Psurlon Ringer
---
# [Psurlon Ringer](3. Mechanics\CLI\bestiary\aberration/psurlon-ringer-bam.md)
*Source: Boo's Astral Menagerie p. 45, Light of Xaryxis*  

A psurlon can use magic to assume the form of a specific Medium Humanoid. First, the psurlon must consume the creature it wants to imitate. It then enters a psionic trance for 8 hours, at the end of which it takes on the appearance of the creature it ate. The psurlon gains that creature's memories and languages, but none of its class features or other abilities. The transformation is permanent and can be undone only by a wish spell. Despite appearances, the psurlon ringer is still an Aberration, and other psurlons recognize it for what it is.

```statblock
"name": "Psurlon Ringer (BAM)"
"size": "Medium"
"type": "aberration"
"alignment": "typically  Lawful Evil"
"ac": !!int "13"
"ac_class": "[mage armor](3.%20Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "31"
"hit_dice": "7d8"
"modifier": !!int "0"
"stats":
  - !!int "10"
  - !!int "11"
  - !!int "10"
  - !!int "17"
  - !!int "11"
  - !!int "7"
"speed": "30 ft."
"damage_resistances": "psychic"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)"
"senses": "passive Perception 10"
"languages": "Deep Speech plus the languages of the Humanoid it is imitating, telepathy\
  \ 120 ft."
"cr": "1"
"traits":
  - "desc": "Magic can't read the psurlon's thoughts or put the psurlon to sleep."
    "name": "Aberrant Mind"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +2 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 2 (1d4) piercing damage plus 4 (1d8) psychic damage."
    "name": "Dagger"
  - "desc": "The psurlon targets one creature it can see within 120 feet of itself.\
      \ The target must make a DC 13 Wisdom saving throw, taking 12 (3d8 + 3) psychic\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Psychic Crush"
  - "desc": "The psurlon casts one of the following spells, requiring no spell components\
      \ and using Intelligence as the spellcasting ability (spell save DC 13):\n\n\
      **2/day:** [mage armor](3.%20Mechanics/CLI/spells/mage-armor-xphb.md) (self\
      \ only)\n\n**1/day:** [suggestion](3.%20Mechanics/CLI/spells/suggestion-xphb.md)"
    "name": "Spellcasting (Psionics)"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/psurlon-ringer-bam.webp"
```
^statblock