---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/environment/water
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Water Elemental
---
# [Water Elemental](3. Mechanics\CLI\bestiary\elemental/water-elemental-xmm.md)
*Source: Monster Manual (2024) p. 322. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Water Elemental

*Primal Spirit of Waves and Tides*

- **Habitat.** Coastal, Planar (Elemental Plane of Water), Swamp, Underwater  
- **Treasure.** None  

Spirits of the Elemental Plane of Water form shapeless liquids into water elementals, aqueous beings with the might of surging waves. Water elementals are as mutable as liquid, allowing them to crash into foes and seep through narrow cracks. They can crush foes with limb-like geysers, or they might flood over creatures, submerging and drowning foes within their whirling forms. Water elementals often appear near nexuses of elemental power, such as aquatic abysses, magical springs, and whirlpools.

Water elementals' shapes are influenced by the liquid bodies in which they form. Roll on or choose a result from the Water Elemental Compositions table to inspire a water elemental's features.

**Water Elemental Compositions**

| dice: 1d4 | The Water Elemental's Body Features... |
|-----------|----------------------------------------|
| 1 | Chilling or near-boiling temperatures. |
| 2 | Energetic effervescence. |
| 3 | Muddy, polluted, or crystal-clear water. |
| 4 | Seaweed, tiny fish, or other sea life. |
^water-elemental-compositions

> [!quote] A quote from Kalbari, Mother of Foam, Ruler of Marids  
> 
> Water: greatest of the elements in might and form. A tsunami's torrent. A blizzard's claws. A parent's tears. What is not moved by water?


```statblock
"name": "Water Elemental (XMM)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "18"
  - !!int "5"
  - !!int "10"
  - !!int "8"
"speed": "30 ft., swim 90 ft."
"damage_resistances": "acid, fire"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone), [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Primordial (Aquan)"
"cr": "5"
"traits":
  - "desc": "If the elemental takes Cold damage, its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ decreases by 20 feet until the end of its next turn."
    "name": "Freeze"
  - "desc": "The elemental can enter an enemy's space and stop there. It can move\
      \ through a space as narrow as 1 inch without expending extra movement to do\
      \ so."
    "name": "Water Form"
"actions":
  - "desc": "The elemental makes two Slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 13 (2d8 + 4) Bludgeoning\
      \ damage. If the target is a Medium or smaller creature, it has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Slam"
  - "desc": "*Strength Saving Throw:* DC 15, each creature in the elemental's space.\
      \ *Failure:* 22 (4d8 + 4) Bludgeoning damage. If the target is a Large or\
      \ smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 14). Until the grapple ends, the target has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition, is suffocating unless it can breathe water, and takes 9 (2d8)\
      \ Bludgeoning damage at the start of each of the elemental's turns. The elemental\
      \ can grapple one Large creature or up to two Medium or smaller creatures at\
      \ a time with Whelm. As an action, a creature within 5 feet of the elemental\
      \ can pull a creature out of it by succeeding on a DC 14 Strength ([Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics))\
      \ check. *Success:* Half damage only."
    "name": "Whelm (Recharge 4-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/elemental/token/water-elemental-xmm.webp"
```
^statblock

## Environment

coastal, planar, water, swamp, underwater