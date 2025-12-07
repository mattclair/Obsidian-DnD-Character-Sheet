---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Beholder Zombie
---
# [Beholder Zombie](3. Mechanics\CLI\bestiary\undead/beholder-zombie-xmm.md)
*Source: Monster Manual (2024) p. 347*  

Zombies animated from the corpses of beholders retain some use of those monsters' magical eyestalks. These hovering corpses rely on their magic to destroy impediments and paralyze foes, allowing them to savage foes with their rotting maws.

Magic-using beholders typically raise these abominations from the corpses of defeated rivals.

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
"name": "Beholder Zombie (XMM)"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"modifier": !!int "-1"
"stats":
  - !!int "14"
  - !!int "8"
  - !!int "16"
  - !!int "3"
  - !!int "8"
  - !!int "5"
"speed": "5 ft., fly 20 ft. (hover)"
"saves":
  - "wisdom": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned), [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 9"
"languages": "understands Deep Speech and Undercommon but can't speak"
"cr": "5"
"traits":
  - "desc": "If damage reduces the zombie to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md),\
      \ it makes a Constitution saving throw (DC 5 plus the damage taken) unless the\
      \ damage is Radiant or from a [Critical Hit](3.%20Mechanics/CLI/rules/variant-rules/critical-hit-xphb.md).\
      \ On a successful save, the zombie drops to 1 [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ instead."
    "name": "Undead Fortitude"
"actions":
  - "desc": "The zombie uses Eye Rays twice."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 16 (4d6 + 2) Piercing\
      \ damage."
    "name": "Bite"
  - "desc": "The zombie randomly shoots one of the following magical rays at a target\
      \ it can see within 120 feet of itself (roll 1d4; reroll if the zombie has\
      \ already used that ray during this turn):\n\n- **1 Paralyzing Ray.** *Constitution\
      \ Saving Throw:* DC 14. *Failure:* The target has the [Paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ condition and repeats the save at the end of each of its turns, ending the\
      \ effect on itself on a success. After 1 minute, it succeeds automatically.\
      \  \n- **2 Fear Ray.** *Wisdom Saving Throw:* DC 14. *Failure:* 13 (3d8) Psychic\
      \ damage, and the target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition until the end of its next turn.  \n- **3 Enervation Ray.** *Constitution\
      \ Saving Throw:* DC 14. *Failure:* 10 (3d6) Necrotic damage, and the target\
      \ has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned) condition\
      \ until the end of its next turn. While [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
      \ the target can't regain [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md).\
      \ *Success:* Half damage only.  \n- **4 Disintegration Ray.** *Dexterity Saving\
      \ Throw:* DC 14. *Failure:* 27 (5d10) Force damage. If the target is a nonmagical\
      \ object or a creation of magical force, a 10-foot [Cube](3.%20Mechanics/CLI/rules/variant-rules/cube-area-of-effect-xphb.md)\
      \ of it disintegrates into dust. *Success:* Half damage. *Failure or Success:*\
      \ If the target is a creature and this damage reduces it to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md),\
      \ it disintegrates into dust.  "
    "name": "Eye Rays"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/beholder-zombie-xmm.webp"
```
^statblock

## Environment

planar, shadowfell, underdark, urban