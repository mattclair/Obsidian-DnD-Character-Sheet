---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Aartuk Starhorror
---
# [Aartuk Starhorror](3. Mechanics\CLI\bestiary\plant/aartuk-starhorror-bam.md)
*Source: Boo's Astral Menagerie p. 9, Light of Xaryxis*  

Aartuks are intelligent plant creatures that live to wage war. Beholders destroyed their original home world and scattered the survivors across the Material Plane. These survivors formed small nomadic cells.

Aartuk cells can be found throughout Wildspace, including aboard spelljamming ships whose former crews were either murdered or forcibly ejected by a band of aartuks.

An aartuk's body is shaped like a five-pointed star and is covered with thick, flexible bark. The tips of its branch-like extremities end in suction cups that allow the creature to climb on vertical surfaces and along ceilings. Each suction cup houses three retractable pseudopods that are used to manipulate small objects.

The head of an aartuk surmounts a 6-foot-tall stalk that can be extruded from the center of the star. The head contains the aartuk's sensory organs, including a long tongue that the creature uses as a weapon.

An aartuk's preferred method of attack is to shoot forth its gooey tongue and use it to drag enemies toward the center of its body so that it can batter them with its powerful branches. It can also spit pellets of radiant energy.

The Aartuk language is made up of rustling sounds, snaps, pops, and hisses. It has no written form.

```statblock
"name": "Aartuk Starhorror (BAM)"
"size": "Medium"
"type": "plant"
"alignment": "typically  Lawful Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "0"
"stats":
  - !!int "12"
  - !!int "10"
  - !!int "14"
  - !!int "13"
  - !!int "16"
  - !!int "10"
"speed": "20 ft., climb 20 ft."
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Aartuk"
"cr": "2"
"traits":
  - "desc": "The aartuk can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The aartuk makes two Branch attacks, two Radiant Pellet attacks, or one\
      \ of each."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 10 ft., one target. *Hit:*\
      \ 8 (2d6 + 1) bludgeoning damage."
    "name": "Branch"
  - "desc": "*Ranged Spell Attack:* +2 to hit, range 60 ft., one target. *Hit:*\
      \ 7 (3d4) radiant damage."
    "name": "Radiant Pellet"
  - "desc": "The aartuk casts one of the following spells, requiring no spell components\
      \ and using Wisdom as the spellcasting ability:\n\n**1/day each:** [revivify](3.%20Mechanics/CLI/spells/revivify-xphb.md),\
      \ [speak with plants](3.%20Mechanics/CLI/spells/speak-with-plants-xphb.md)"
    "name": "Spellcasting (Psionics)"
"bonus_actions":
  - "desc": "The aartuk magically ends the [charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ and [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened) conditions\
      \ on itself and each creature of its choice that it can see within 30 feet of\
      \ itself."
    "name": "Rally the Troops (1/Day)"
  - "desc": "The aartuk tries to use its gooey tongue to snare one Medium or smaller\
      \ creature it can see within 30 feet of itself. The target must make a DC 12\
      \ Dexterity saving throw. On a failed save, the target is [grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the tongue (escape DC 11) and pulled up to 25 feet toward the aartuk. The\
      \ tongue can grapple one creature at a time."
    "name": "Tongue (Recharge 6)"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/plant/token/aartuk-starhorror-bam.webp"
```
^statblock