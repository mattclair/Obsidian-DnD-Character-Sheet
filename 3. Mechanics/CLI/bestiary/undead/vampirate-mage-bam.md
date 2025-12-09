---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Vampirate Mage
---
# [Vampirate Mage](3. Mechanics\CLI\bestiary\undead/vampirate-mage-bam.md)
*Source: Boo's Astral Menagerie p. 63, Light of Xaryxis*  

A ship of vampirates needs a spellcaster to operate the spelljamming helm. A vampirate mage rarely, if ever, leaves the helm.

```statblock
"name": "Vampirate Mage (BAM)"
"size": "Medium"
"type": "undead"
"alignment": "typically  Lawful Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "68"
"hit_dice": "8d8 + 32"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "14"
  - !!int "18"
  - !!int "13"
  - !!int "14"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "5"
  - "charisma": !!int "5"
"damage_vulnerabilities": "radiant"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 12"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
  - "desc": "When the mage is reduced to 0 hit points, it explodes in a cloud of ash.\
      \ Any creature within 5 feet of it must succeed on a DC 14 Constitution saving\
      \ throw or take 11 (2d10) necrotic damage."
    "name": "Explode"
  - "desc": "The mage can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The mage doesn't require air or drink."
    "name": "Unusual Nature"
"actions":
  - "desc": "The mage makes two Ray of Cold attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Spell Attack:* +5 to hit, reach 5 ft. or range 30\
      \ ft., one creature. *Hit:* 22 (4d10) necrotic damage. A Humanoid reduced\
      \ to 0 hit points by this attack dies and instantly transforms into a free-willed\
      \ shadow under the DM's control."
    "name": "Energy Drain"
  - "desc": "*Ranged Spell Attack:* +5 to hit, range 120 ft., one target. *Hit:*\
      \ 11 (2d8 + 2) cold damage."
    "name": "Ray of Cold"
  - "desc": "The mage casts one of the following spells, using Charisma as the spellcasting\
      \ ability (spell save DC 13):\n\n**At will:** [mage hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [message](3.%20Mechanics/CLI/spells/message-xphb.md)\n\n**1/day:** [darkness](3.%20Mechanics/CLI/spells/darkness-xphb.md),\
      \ [dimension door](3.%20Mechanics/CLI/spells/dimension-door-xphb.md), [fly](3.%20Mechanics/CLI/spells/fly-xphb.md),\
      \ [hypnotic pattern](3.%20Mechanics/CLI/spells/hypnotic-pattern-xphb.md)"
    "name": "Spellcasting"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/vampirate-mage-bam.webp"
```
^statblock