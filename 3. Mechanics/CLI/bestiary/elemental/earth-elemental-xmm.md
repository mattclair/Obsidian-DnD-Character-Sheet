---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/earth
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Earth Elemental
---
# [Earth Elemental](3. Mechanics\CLI\bestiary\elemental/earth-elemental-xmm.md)
*Source: Monster Manual (2024) p. 108. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Earth Elemental

*Primal Spirit of Soil and Stone*

- **Habitat.** Mountain, Planar (Elemental Plane of Earth), Underdark  
- **Treasure.** None  

Primal spirits from the Elemental Plane of Earth merge with rocks and minerals to form earth elementals. These beings possess powerful limbs and coarse features, sometimes studded with ore, gems, crystals, colorful striations, or living plants. On the Material Plane, earth elementals often serve those who conjure them, or they appear in regions influenced by their home plane, such as crystalline nodes, energetic fault lines, or veins of magical ore. Earth elementals effortlessly move through stone and can bring ruin to whole structures with their mighty fists.

Earth elementals are typically made of more than dirt. While an elemental's composition doesn't change its statistics or have monetary value, it makes each elemental distinct. Roll on or choose a result from the Earth Elemental Compositions table to inspire an earth elemental's features.

**Earth Elemental Compositions**

| dice: 1d8 | The Earth Elemental's Body Features... |
|-----------|----------------------------------------|
| 1 | Colorful mineral formations. |
| 2 | Cooled magma in melted heaps. |
| 3 | Grass, moss, or plant roots. |
| 4 | Heaps of peat or decaying matter. |
| 5 | Mounds of sand studded with shells. |
| 6 | Rubble or pieces of a ruined structure. |
| 7 | Striking striations or bands of color. |
| 8 | Veins of iron or other ore. |
^earth-elemental-compositions

> [!quote] A quote from Kabril the Perfect Compass, Ruler of Dao  
> 
> The foundations of our homes, the strength of our weapons, the vaults of our greatest secrets—earth is nothing less than the grip of reality itself. It is the mightiest element. This cannot be denied.


```statblock
"name": "Earth Elemental (XMM)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "147"
"hit_dice": "14d10 + 70"
"modifier": !!int "-1"
"stats":
  - !!int "20"
  - !!int "8"
  - !!int "20"
  - !!int "5"
  - !!int "10"
  - !!int "5"
"speed": "30 ft., burrow 30 ft."
"damage_vulnerabilities": "thunder"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned), [unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., tremorsense\
  \ 60 ft., passive Perception 10"
"languages": "Primordial (Terran)"
"cr": "5"
"traits":
  - "desc": "The elemental can burrow through nonmagical, unworked earth and stone.\
      \ While doing so, the elemental doesn't disturb the material it moves through."
    "name": "Earth Glide"
  - "desc": "The elemental deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The elemental makes two attacks, using Slam or Rock Launch in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +8, reach 10 ft. *Hit:* 14 (2d8 + 5) Bludgeoning\
      \ damage."
    "name": "Slam"
  - "desc": "*Ranged Attack Roll:* +8, range 60 ft. *Hit:* 8 (1d6 + 5) Bludgeoning\
      \ damage. If the target is a Large or smaller creature, it has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Rock Launch"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/elemental/token/earth-elemental-xmm.webp"
```
^statblock

## Environment

mountain, planar, earth, underdark