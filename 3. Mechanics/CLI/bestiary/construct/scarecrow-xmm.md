---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Scarecrow
---
# [Scarecrow](3. Mechanics\CLI\bestiary\construct/scarecrow-xmm.md)
*Source: Monster Manual (2024) p. 269*  

## Scarecrow

*Servant of Superstition*

- **Habitat.** Grassland  
- **Treasure.** None  

Spirits of vengeance bound to crude frames, scarecrows arise from folk magic, the prayers of desperate commoners, or possession by spirits that died with violent work left undone. Scarecrows might serve those who created them or might defend a place, family, or community from threats—whether physical or to their way of life.

Although scarecrows take their name from rural effigies, they might take varied patchwork forms. Roll on or choose a result from the Scarecrow Frames table to inspire a scarecrow's appearance.

**Scarecrow Frames**

| dice: 1d8 | The Scarecrow Is Made From... |
|-----------|-------------------------------|
| 1 | Animal furs, bones, horns, and claws. |
| 2 | Beehives or wasp nests over a wicker frame. |
| 3 | A carved pumpkin atop a body of thick vines. |
| 4 | Nets, flotsam, grapnels, and fishing tackle. |
| 5 | Oversize stuffed animal or mannequin parts. |
| 6 | Rusty armor and torture devices. |
| 7 | A sackcloth head atop straw-stuffed clothes. |
| 8 | Wedding clothes that were never worn. |
^scarecrow-frames

```statblock
"name": "Scarecrow (XMM)"
"size": "Medium"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "6d8"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "13"
  - !!int "11"
  - !!int "10"
  - !!int "10"
  - !!int "13"
"speed": "30 ft."
"damage_vulnerabilities": "fire"
"damage_immunities": "poison"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned), [unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Common plus one other language"
"cr": "1"
"actions":
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 6 (2d4 + 1) Slashing\
      \ damage, and the target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition until the end of the scarecrow's next turn."
    "name": "Fearsome Claw"
  - "desc": "*Wisdom Saving Throw:* DC 11, one creature the scarecrow can see within\
      \ 30 feet. *Failure:* The target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition until the end of the scarecrow's next turn. While [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened),\
      \ the target has the [Paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ condition."
    "name": "Terrifying Glare"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/construct/token/scarecrow-xmm.webp"
```
^statblock

## Environment

grassland