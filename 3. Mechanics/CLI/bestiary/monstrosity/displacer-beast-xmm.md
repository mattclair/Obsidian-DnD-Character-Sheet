---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Displacer Beast
---
# [Displacer Beast](3. Mechanics\CLI\bestiary\monstrosity/displacer-beast-xmm.md)
*Source: Monster Manual (2024) p. 98*  

## Displacer Beast

*Deceptive Feline Stalker*

- **Habitat.** Forest  
- **Treasure.** None  

A displacer beast resembles a gaunt, six-legged panther with a barbed tentacle sprouting from each of its shoulders. This predator uses innate magic to displace light so it appears to be several feet away from its actual location.

Displacer beasts hunt not just to feed but because they enjoy killing. Once displacer beasts begin stalking prey, they can't be deterred until either they or their quarry is slain. While displacer beasts commonly inhabit dense forests, they might pursue travelers across great distances and even into cities or dungeons. More cunning than mere animals, these predators might set ambushes or lie hidden for days to bring down their prey.

Displacer beasts sometimes pursue prey through portals to other planes of existence. As a result, these predators can be found across the multiverse, particularly on the worlds of the Material Plane, in the Shadowfell, and in the Feywild. These restless hunters can destroy a land's natural balance and drive other creatures to extinction. As a result, many druid circles and Fey view displacer beasts as deadly threats.

> [!quote] A quote from Jen-Ahb, Naturalist and Displacer Beast Survivor  
> 
> The murderous fury of a displacer beast is fit only for nightmares, of which I've been haunted since narrowly escaping one's ambush. I'm certain that beast stalks me still.


```statblock
"name": "Displacer Beast (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "76"
"hit_dice": "9d10 + 27"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "6"
  - !!int "12"
  - !!int "8"
"speed": "40 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "understands Sylvan but can't speak"
"cr": "3"
"traits":
  - "desc": "If the displacer beast is subjected to an effect that allows it to make\
      \ a saving throw to take only half damage, it instead takes no damage if it\
      \ succeeds on the save and half damage if it fails. It can't use this trait\
      \ if it has the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Avoidance"
  - "desc": "Attack rolls against the displacer beast have [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md),\
      \ since it projects an illusion that makes it appear to be near its actual location.\
      \ This trait is suppressed while the displacer beast has the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Displacement"
"actions":
  - "desc": "The displacer beast makes one Rend attack and one Tentacle attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 5 feet. *Hit:* 9 (1d10 + 4) Slashing\
      \ damage. If target is a Large or smaller creature, it has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Rend"
  - "desc": "*Melee Attack Roll:* +6, reach 10 feet. *Hit:* 11 (2d6 + 4) Piercing\
      \ damage."
    "name": "Tentacle"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/displacer-beast-xmm.webp"
```
^statblock

## Environment

forest