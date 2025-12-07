---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/fire
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fire Elemental
---
# [Fire Elemental](3. Mechanics\CLI\bestiary\elemental/fire-elemental-xmm.md)
*Source: Monster Manual (2024) p. 118. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Fire Elemental

*Primal Spirit of Heat and Flame*

- **Habitat.** Desert, Planar (Elemental Plane of Fire)  
- **Treasure.** None  

Fire elementals arise when spirits of the Elemental Plane of Fire inhabit flames, burning cinders, and heated smoke. These beings are tangible despite largely being made of flames and particles, and they can uses their vague limbs to ignite foes and flammable materials. Fire elementals typically burn in shades of orange and red, but other colors are possible. Most on the Material Plane are summoned by magical means, or they might appear near rifts amid desert depths, volcanoes, wildfires, or magma flows that connect to their home plane.

Fire elementals might burn in distinctive ways. Roll on or choose a result from the Fire Elemental Compositions table to inspire a fire elemental's features.

**Fire Elemental Compositions**

| dice: 1d8 | The Fire Elemental's Body Features... |
|-----------|---------------------------------------|
| 1 | Colorful, superheated gases. |
| 2 | A column of diabolical or divine flame. |
| 3 | Crackling shapes that look like animals, fiends, skeletons, sprites, or other beings. |
| 4 | Flames that are predominantly white, blue, or a more unusual color. |
| 5 | The form of a calm or tormented humanoid. |
| 6 | Smoke that forms eerie shapes or symbols. |
| 7 | Soot that smells like cedar, cloves, incense, or burning meat. |
| 8 | Swirls of cinders and burning debris. |
^fire-elemental-compositions

> [!quote] A quote from Marrake the Incandescent, Ruler of Efreet  
> 
> All the elements bow to fire. The strongest earth melts. Water boils. Even air ignites. We are all souls of flame, and we know what it is to burn.


```statblock
"name": "Fire Elemental (XMM)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "17"
  - !!int "16"
  - !!int "6"
  - !!int "10"
  - !!int "7"
"speed": "50 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "fire, poison"
"condition_immunities": "[exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone), [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Primordial (Ignan)"
"cr": "5"
"traits":
  - "desc": "At the end of each of the elemental's turns, each creature in a 10-foot\
      \ [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the elemental takes 5 (1d10) Fire damage. Creatures and\
      \ flammable objects in the [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ start [burning](3.%20Mechanics/CLI/traps-hazards/burning-xphb.md)."
    "name": "Fire Aura"
  - "desc": "The elemental can move through a space as narrow as 1 inch without expending\
      \ extra movement to do so, and it can enter a creature's space and stop there.\
      \ The first time it enters a creature's space on a turn, that creature takes\
      \ 5 (1d10) Fire damage."
    "name": "Fire Form"
  - "desc": "The elemental sheds [Bright Light](3.%20Mechanics/CLI/rules/variant-rules/bright-light-xphb.md)\
      \ in a 30-foot radius and [Dim Light](3.%20Mechanics/CLI/rules/variant-rules/dim-light-xphb.md)\
      \ for an additional 30 feet."
    "name": "Illumination"
  - "desc": "The elemental takes 3 (1d6) Cold damage for every 5 feet the elemental\
      \ moves in water or for every gallon of water splashed on it."
    "name": "Water Susceptibility"
"actions":
  - "desc": "The elemental makes two Burn attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 10 (2d6 + 3) Fire damage.\
      \ If the target is a creature or a flammable object, it starts [burning](3.%20Mechanics/CLI/traps-hazards/burning-xphb.md)."
    "name": "Burn"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/elemental/token/fire-elemental-xmm.webp"
```
^statblock

## Environment

desert, planar, fire