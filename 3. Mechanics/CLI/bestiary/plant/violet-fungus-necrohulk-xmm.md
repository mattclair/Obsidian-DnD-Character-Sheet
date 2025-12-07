---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Violet Fungus Necrohulk
---
# [Violet Fungus Necrohulk](3. Mechanics\CLI\bestiary\plant/violet-fungus-necrohulk-xmm.md)
*Source: Monster Manual (2024) p. 126*  

A violet fungus necrohulk forms when a violet fungus colony infests and animates an ample heap of decay. This necrohulk attacks prey and spreads fungal spores for the colony.

## Fungi

*Deadly Spores and Predatory Polyps*

- **Habitat.** Underdark  
- **Treasure.** None  

The dank, sunless Underdark is a fertile breeding ground for weird and dangerous fungi.

```statblock
"name": "Violet Fungus Necrohulk (XMM)"
"size": "Large"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"modifier": !!int "4"
"stats":
  - !!int "19"
  - !!int "12"
  - !!int "18"
  - !!int "7"
  - !!int "14"
  - !!int "10"
"speed": "40 ft."
"damage_immunities": "necrotic, poison"
"condition_immunities": "[blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded),\
  \ [charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed), [deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 12"
"languages": ""
"cr": "7"
"actions":
  - "desc": "The necrohulk makes two Rotting Slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 10 ft. *Hit:* 9 (1d10 + 4) Bludgeoning\
      \ damage plus 7 (2d6) Necrotic damage."
    "name": "Rotting Slam"
  - "desc": "*Constitution Saving Throw:* DC 15, each creature in a 20-foot-radius\
      \ [Sphere](3.%20Mechanics/CLI/rules/variant-rules/sphere-area-of-effect-xphb.md)\
      \ centered on a point the necrohulk can see within 60 feet. *Failure:* 28 (8d6)\
      \ Necrotic damage, and the target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the start of the necrohulk's next turn. While [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
      \ the target can't regain [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md).\
      \ *Success:* Half damage only."
    "name": "Spore Bomb (Recharge 5-6)"
"bonus_actions":
  - "desc": "*Strength Saving Throw:* DC 15, one Medium or Small creature the necrohulk\
      \ can see within 5 feet. *Failure:* The target is pulled into the necrohulk's\
      \ space and becomes grafted to its body. The necrohulk can have only one target\
      \ grafted at a time.\n\nWhile grafted, the target has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition and [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on Constitution saving throws. When the necrohulk moves, the grafted target\
      \ moves with it. If the target dies while grafted, its body is destroyed, and\
      \ the necrohulk regains 10 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md).\n\
      \nThe grafted target or a creature within 5 feet of the necrohulk can take an\
      \ action to make a DC 15 Strength ([Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics))\
      \ check. On a successful check, the target is no longer grafted and moves to\
      \ an unoccupied space within 5 feet of the necrohulk."
    "name": "Absorb Body"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/plant/token/violet-fungus-necrohulk-xmm.webp"
```
^statblock

## Environment

underdark