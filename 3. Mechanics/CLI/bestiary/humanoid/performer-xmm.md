---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Performer
---
# [Performer](3. Mechanics\CLI\bestiary\humanoid/performer-xmm.md)
*Source: Monster Manual (2024) p. 236*  

Common performers include traveling storytellers, tavern musicians, local entertainers, and chorus members performing with veteran artists. These performers might be self-taught or in the early years of formal training. Most have a modest level of celebrity and two or three instruments or talents at which they excel.

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
"name": "Performer (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "12"
  - !!int "13"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "5"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Acrobatics](3.%20Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+5"
  - "name": "[Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+3"
  - "name": "[Performance](3.%20Mechanics/CLI/rules/skills.md#Performance)"
    "desc": "+7"
"senses": "passive Perception 12"
"languages": "Common plus one other language"
"cr": "1/2"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 6 (1d6 + 3) Piercing\
      \ damage."
    "name": "Shortsword"
"reactions":
  - "desc": "Trigger: The performer is hit by an attack roll. _Response:_ The performer\
      \ halves the damage (round down) it takes from that attack."
    "name": "Uncanny Dodge"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/performer-xmm.webp"
```
^statblock

## Environment

any