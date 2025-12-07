---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/air
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Air Elemental
---
# [Air Elemental](3. Mechanics\CLI\bestiary\elemental/air-elemental-xmm.md)
*Source: Monster Manual (2024) p. 13. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Air Elemental

*Primal Spirit of Wind and Storm*

- **Habitat.** Desert, Mountain, Planar (Elemental Plane of Air)  
- **Treasure.** None  

Energetic spirits from the Elemental Plane of Air, air elementals gather clouds and winds into ever-changing bodies with indistinct limbs and vague features. Beyond their home plane, these elementals might serve magic-users who conjure them, or they might congregate around nexuses of unbridled planar energy, such as wind-scoured mountain peaks or endless storms. In battle, air elementals batter enemies with powerful gusts or transform into whirlwinds to fling away foes.

Air elementals often have distinctive compositions. Roll on or choose a result from the Air Elemental Compositions table to inspire the elemental's appearance.

> [!quote] A quote from Husam, Son of the Breezes, Ruler of Djinn  
> 
> What can withstand the storm's scream? The lightning's spear? The want of sweet breath? Air is the mightiest of elements—respect its power.

**Air Elemental Compositions**

| dice: 1d6 | The Air Elemental's Body Features... |
|-----------|--------------------------------------|
| 1 | Cumulus or cirrus clouds. |
| 2 | A mixture of vibrantly colored gases. |
| 3 | A pungent, sour-looking miasma |
| 4 | Shifting cloud clusters that resemble animals and simple shapes. |
| 5 | Sinister features obscured in a misty mass. |
| 6 | Swirling storm clouds. |
^air-elemental-compositions

```statblock
"name": "Air Elemental (XMM)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"modifier": !!int "5"
"stats":
  - !!int "14"
  - !!int "20"
  - !!int "14"
  - !!int "6"
  - !!int "10"
  - !!int "6"
"speed": "10 ft., fly 90 ft. (hover)"
"damage_resistances": "bludgeoning, lightning, piercing, slashing"
"damage_immunities": "poison, thunder"
"condition_immunities": "[exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone), [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Primordial (Auran)"
"cr": "5"
"traits":
  - "desc": "The elemental can enter a creature's space and stop there. It can move\
      \ through a space as narrow as 1 inch without expending extra movement to do\
      \ so."
    "name": "Air Form"
"actions":
  - "desc": "The elemental makes two Thunderous Slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +8, reach 10 ft. *Hit:* 14 (2d8 + 5) Thunder\
      \ damage."
    "name": "Thunderous Slam"
  - "desc": "*Strength Saving Throw:* DC 13, one Medium or smaller creature in the\
      \ elemental's space. *Failure:* 24 (4d10 + 2) Thunder damage, and the target\
      \ is pushed up to 20 feet straight away from the elemental and has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition. *Success:* Half damage only."
    "name": "Whirlwind (Recharge 4-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/elemental/token/air-elemental-xmm.webp"
```
^statblock

## Environment

desert, mountain, planar, air