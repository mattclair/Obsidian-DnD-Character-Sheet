---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Neogi Pirate
---
# [Neogi Pirate](3. Mechanics\CLI\bestiary\aberration/neogi-pirate-bam.md)
*Source: Boo's Astral Menagerie p. 41, Light of Xaryxis*  

Neogi pirates are adult neogi that serve as crew members aboard nightspiders (see the *Astral Adventurer's Guide*) and other neogi-controlled vessels.

Neogi society makes no distinction between individuals, aside from the ability that a given creature has to control others, and they don't comprehend the emotional aspects of existence that humans and similar beings experience. To a neogi, hatred is as foreign a sensation as love, and showing loyalty in the absence of authority is foolishness.

Neogi pirates (and adult neogi in general) mark themselves and those they capture through the use of dyes, transformational magic, and other markings intended to signify rank, achievements, and the identity of the individual's leader. By these signs, neogi can identify each other's place in the hierarchy—and they must defer to those of higher station or risk harsh punishment.

```statblock
"name": "Neogi Pirate (BAM)"
"size": "Small"
"type": "aberration"
"alignment": "typically  Lawful Evil"
"ac": !!int "16"
"ac_class": "[breastplate](3.%20Mechanics/CLI/items/breastplate-xphb.md)"
"hp": !!int "33"
"hit_dice": "6d6 + 12"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "15"
  - !!int "14"
  - !!int "13"
  - !!int "12"
  - !!int "15"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Common, Deep Speech, Undercommon"
"cr": "3"
"traits":
  - "desc": "The neogi has advantage on saving throws against being [charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ or [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), and magic\
      \ can't put the neogi to sleep."
    "name": "Mental Fortitude"
  - "desc": "The neogi can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The neogi makes one Bite attack and two Claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) piercing damage plus 14 (4d6) poison damage, and the target\
      \ must succeed on a DC 12 Constitution saving throw or become [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute. A target can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) slashing damage."
    "name": "Claw"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/neogi-pirate-bam.webp"
```
^statblock