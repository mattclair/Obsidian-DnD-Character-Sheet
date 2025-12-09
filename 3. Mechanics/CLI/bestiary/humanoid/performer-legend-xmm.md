---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Performer Legend
---
# [Performer Legend](3. Mechanics\CLI\bestiary\humanoid/performer-legend-xmm.md)
*Source: Monster Manual (2024) p. 237*  

Performer legends are celebrities known across nations, continents, or worlds. Their prestige might grant them access to the heights of society, or they might use their performances to manipulate audiences. Performer legends usually have signature traits or talents that set them apart from other entertainers, such as a distinct voice, incredible athleticism, or a unique manner of dress. They often travel with a retinue of other performers, guards, or noble patrons.

## Performers

*Artists and Entertainers*

- **Habitat.** Any  
- **Treasure.** [Implements](3.%20Mechanics/CLI/tables/random-magic-items-implements.md), Individual  

From royal courts to village squares, skilled entertainers hone their talents and delight audiences. Some travel far, sharing tales and demonstrating mysterious arts. Others serve in the courts and theaters of great nations, cultivating celebrity and navigating the whims of patrons. Many hone professional secrets and magical flourishes, striving to make their performances truly unforgettable.

Use the following list of entertainers and roles to inspire the performers in your adventures:

Acrobat

Actor

Aerialist

Animal trainer

Athlete

Burlesque artist

Busker

Circus performer

Comedian

Contortionist

Dancer

Daredevil

Jester

Juggler

Magician

Mentalist

Mime

Minstrel

Mourner

Oral historian

Poet

Puppeteer

Ritualist

Stage fighter

Storyteller

Throat singer

Town crier

Trick rider

Vocalist

Wrestler

> [!quote] A quote from Tindal, Carnival Barker  
> 
> Welcome, one! Welcome, all! Welcome to the short, and welcome to the tall! Welcome angels, welcome fiends, welcome to all from walks between! Welcome to the Carnival!


```statblock
"name": "Performer Legend (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "162"
"hit_dice": "25d8 + 50"
"modifier": !!int "9"
"stats":
  - !!int "12"
  - !!int "20"
  - !!int "14"
  - !!int "15"
  - !!int "16"
  - !!int "20"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "9"
  - "intelligence": !!int "6"
  - "wisdom": !!int "7"
  - "charisma": !!int "9"
"skillsaves":
  - "name": "[Acrobatics](3.%20Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+13"
  - "name": "[Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+5"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Performance](3.%20Mechanics/CLI/rules/skills.md#Performance)"
    "desc": "+13"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+9"
"senses": "passive Perception 17"
"languages": "Common plus two other languages"
"cr": "10"
"actions":
  - "desc": "The performer makes three Bejeweled Baton attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +9, reach 5 ft. *Hit:* 10 (2d4 + 5) Bludgeoning\
      \ damage plus 10 (3d6) Psychic damage."
    "name": "Bejeweled Baton"
  - "desc": "*Wisdom Saving Throw:* DC 17, each creature in a 20-foot-radius [Sphere](3.%20Mechanics/CLI/rules/variant-rules/sphere-area-of-effect-xphb.md)\
      \ centered on a point within 120 feet. *Failure:* 22 (4d8 + 4) Psychic damage,\
      \ and the target has the [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ or [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened) condition\
      \ (performer's choice) until the end of the performer's next turn. *Success:*\
      \ Half damage only."
    "name": "Majestic Song"
  - "desc": "The performer casts one of the following spells, requiring no Material\
      \ components and using Charisma as the spellcasting ability (spell save DC 17):\n\
      \n**At will:** [Mage Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md), [Minor\
      \ Illusion](3.%20Mechanics/CLI/spells/minor-illusion-xphb.md), [Prestidigitation](3.%20Mechanics/CLI/spells/prestidigitation-xphb.md)\n\
      \n**1/day each:** [Major Image](3.%20Mechanics/CLI/spells/major-image-xphb.md),\
      \ [Project Image](3.%20Mechanics/CLI/spells/project-image-xphb.md)"
    "name": "Spellcasting"
"reactions":
  - "desc": "Trigger: A creature hits the performer with an attack roll. _Response—\
      _*Wisdom Saving Throw:* DC 17, the triggering creature. *Failure:* The attack\
      \ roll misses the performer, and the target has the [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ condition until the end of the performer's next turn."
    "name": "Warding Charm"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/performer-legend-xmm.webp"
```
^statblock

## Environment

any