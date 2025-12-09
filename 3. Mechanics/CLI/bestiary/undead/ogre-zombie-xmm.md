---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ogre Zombie
---
# [Ogre Zombie](3. Mechanics\CLI\bestiary\undead/ogre-zombie-xmm.md)
*Source: Monster Manual (2024) p. 346. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Ogre zombies serve as tireless labor and undying weapons of war. These massive zombies possess the size and strength to break through barriers that repel smaller zombies.

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
"name": "Ogre Zombie (XMM)"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "8"
"hp": !!int "85"
"hit_dice": "9d10 + 36"
"modifier": !!int "-2"
"stats":
  - !!int "19"
  - !!int "6"
  - !!int "18"
  - !!int "3"
  - !!int "6"
  - !!int "5"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 8"
"languages": "understands Common and Giant but can't speak"
"cr": "2"
"traits":
  - "desc": "If damage reduces the zombie to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md),\
      \ it makes a Constitution saving throw (DC 5 plus the damage taken) unless the\
      \ damage is Radiant or from a [Critical Hit](3.%20Mechanics/CLI/rules/variant-rules/critical-hit-xphb.md).\
      \ On a successful save, the zombie drops to 1 [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ instead."
    "name": "Undead Fortitude"
"actions":
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 13 (2d8 + 4) Bludgeoning\
      \ damage."
    "name": "Slam"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/ogre-zombie-xmm.webp"
```
^statblock

## Environment

planar, shadowfell, underdark, urban