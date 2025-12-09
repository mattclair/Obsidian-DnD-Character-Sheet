---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/fire
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Salamander Fire Snake
---
# [Salamander Fire Snake](3. Mechanics\CLI\bestiary\elemental/salamander-fire-snake-xmm.md)
*Source: Monster Manual (2024) p. 266*  

Juvenile salamanders emerge from burning hot, two-foot-diameter eggs. Called fire snakes, these serpent-like creatures slither through the Plane of Fire and other intensely hot places. After consuming the proper fuels and exposing themselves to fiery extremes, fire snakes grow into salamanders.

## Salamanders

*Serpentine Artists of the Inferno*

- **Habitat.** Planar (Elemental Plane of Fire), Underdark  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Salamanders are serpentine denizens of the Elemental Plane of Fire. They believe that flames expose the purest forms of all things and delight in burning and melting things, seeing fleeting beauty and striking nuances in blazes consuming different fuels—ancient forests, artistic masterpieces, or living creatures. To salamanders, those that can't endure their flames are nothing but ashes in disguise. They harbor malice toward few creatures, but they consider creating remarkable flames more important than the pain and loss their fires cause.

Salamanders are typically content to dwell on the Elemental Plane of Fire, creating strange, temporary art amid the flames. Some travel to other planes of existence and worlds to experience the flames of other realms or create conflagrations of unprecedented scale.

> [!quote] A quote from Filiag Highthumbs  
> 
> The salamanders of the Elemental Plane of Fire delight in meeting visitors from other realms. For them, every stranger is a potential addition to their fiery artistry. Don't fall for their flattery, no matter how beautifully they say you'll burn.


```statblock
"name": "Salamander Fire Snake (XMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "27"
"hit_dice": "6d8"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "14"
  - !!int "11"
  - !!int "7"
  - !!int "10"
  - !!int "8"
"speed": "30 ft., climb 30 ft."
"damage_vulnerabilities": "cold"
"damage_immunities": "fire"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "understands Primordial but can't speak"
"cr": "1"
"traits":
  - "desc": "At the end of each of the salamander's turns, each creature of the salamander's\
      \ choice in a 5-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the salamander takes 3 (1d6) Fire damage."
    "name": "Fire Aura"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 6 (1d8 + 2) Piercing\
      \ damage plus 3 (1d6) Fire damage."
    "name": "Bite"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/elemental/token/salamander-fire-snake-xmm.webp"
```
^statblock

## Environment

planar, fire, underdark