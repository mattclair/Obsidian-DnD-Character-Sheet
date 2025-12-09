---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Zombie
---
# [Zombie](3. Mechanics\CLI\bestiary\undead/zombie-xmm.md)
*Source: Monster Manual (2024) p. 346, Player's Handbook (2024) p. 359. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Humanoid zombies usually serve as guardians, servants, or soldiers for evil magic-users. In rare cases, foul magic might result in widespread reanimation of the dead, unleashing hordes of zombies to terrorize the living.

## Zombies

*Relentless Reanimated Corpses*

- **Habitat.** Planar (Shadowfell), Underdark, Urban  
- **Treasure.** None  

Zombies are unthinking, reanimated corpses, often gruesomely marred by decay and lethal traumas. They serve whatever supernatural force animates them—typically evil necromancers or fiendish spirits. Zombies are relentless, merciless, and resilient, and their dead flesh can carry on even after suffering grievous wounds. While they can follow simple orders, they rely on primal drives rather than thought. They fulfill commands by working tirelessly or battering through foes, but they are easily stymied by barriers or unexpected circumstances.

Zombies are usually created from Humanoid corpses, but the remains of other creatures can also become zombies. Such monstrous zombies might possess the strength they had in life or a measure of their supernatural abilities, but they employ such abilities haphazardly at best.

> [!quote] A quote from Account of the Night of the Walking Dead  
> 
> Then, by a spectacular crack of lightning, the figures came into view, moving slowly toward the village. Over driving winds a voice cried out, "The dead come for Marais d'Tarascon! An army of the walking dead!"


```statblock
"name": "Zombie (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "8"
"hp": !!int "15"
"hit_dice": "2d8 + 6"
"modifier": !!int "-2"
"stats":
  - !!int "13"
  - !!int "6"
  - !!int "16"
  - !!int "3"
  - !!int "6"
  - !!int "5"
"speed": "20 ft."
"saves":
  - "wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 8"
"languages": "understands Common plus one other language but can't speak"
"cr": "1/4"
"traits":
  - "desc": "If damage reduces the zombie to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md),\
      \ it makes a Constitution saving throw (DC 5 plus the damage taken) unless the\
      \ damage is Radiant or from a [Critical Hit](3.%20Mechanics/CLI/rules/variant-rules/critical-hit-xphb.md).\
      \ On a successful save, the zombie drops to 1 [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ instead."
    "name": "Undead Fortitude"
"actions":
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 5 (1d8 + 1) Bludgeoning\
      \ damage."
    "name": "Slam"
"source":
  - "XMM"
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/zombie-xmm.webp"
```
^statblock

## Environment

planar, shadowfell, underdark, urban