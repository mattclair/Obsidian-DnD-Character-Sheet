---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Intellect Devourer
---
# [Intellect Devourer](3. Mechanics\CLI\bestiary\aberration/intellect-devourer-xmm.md)
*Source: Monster Manual (2024) p. 179*  

## Intellect Devourer

*Brain-Eating Body Thief*

- **Habitat.** Underdark  
- **Treasure.** None  

Intellect devourers serve their mind flayer creators by consuming other creatures' brains and puppetizing the mindless bodies. These quadrupedal brains seek to ambush sapient beings, then drain their thoughts until they're mindless. Then, if their victims are Humanoids, they enter the creatures' skulls. With access to the victims' knowledge and control of their bodies, intellect devourers use their perfect disguises to pass as the people they've replaced and further mind flayer plots.

> [!quote] A quote from Johana Grethe, Account of the Stormport Shock  
> 
> I know Durgan, and that wasn't Durgan. It was like something was wearing Durgan... like some sort of suit... a Durgan suit.


```statblock
"name": "Intellect Devourer (XMM)"
"size": "Tiny"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "28"
"hit_dice": "8d4 + 8"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "13"
  - !!int "14"
  - !!int "11"
  - !!int "10"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_resistances": "psychic"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 12"
"languages": "understands Deep Speech but can't speak; telepathy 60 ft."
"cr": "2"
"traits":
  - "desc": "The intellect devourer magically senses the location of any creature\
      \ within 300 feet of itself that has an Intelligence score of 3 or higher, regardless\
      \ of interposing barriers."
    "name": "Detect Intelligence"
"actions":
  - "desc": "The intellect devourer makes one Claw attack and uses Devour Intellect."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 7 (2d4 + 2) Slashing\
      \ damage."
    "name": "Claw"
  - "desc": "*Intelligence Saving Throw:* DC 12, one creature the intellect devourer\
      \ can see within 5 feet. *Failure:* 11 (2d10) Psychic damage, and the target\
      \ has the [Stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned) condition\
      \ until the end of the intellect devourer's next turn."
    "name": "Devour Intellect"
  - "desc": "*Intelligence Saving Throw:* DC 12, one Small or Medium creature within\
      \ 5 feet that has the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition, is a Humanoid or Beast, and has 10 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ or fewer. *Failure:* The intellect devourer possesses the target, consumes\
      \ its brain, and teleports inside its skull. While there, the intellect devourer\
      \ has [Total Cover](3.%20Mechanics/CLI/rules/variant-rules/cover-xphb.md) against\
      \ attacks and other effects originating outside its host. The intellect devourer\
      \ retains its Intelligence, Wisdom, and Charisma scores; its understanding of\
      \ Deep Speech; its telepathy; and its Detect Intelligence trait. It otherwise\
      \ adopts the target's game statistics. It knows everything the target knew,\
      \ including spells and languages.\n\nIf the host body dies, the intellect devourer\
      \ must leave it. The intellect devourer is also forced out if the target regains\
      \ its devoured brain by means of a [Wish](3.%20Mechanics/CLI/spells/wish-xphb.md)\
      \ spell. By spending 5 feet of its movement, the intellect devourer can voluntarily\
      \ leave the body, teleporting to the nearest unoccupied space within 5 feet\
      \ of it. The body then dies unless its brain is restored before the end of the\
      \ intellect devourer's next turn."
    "name": "Steal Body"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/intellect-devourer-xmm.webp"
```
^statblock

## Environment

underdark