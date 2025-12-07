---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/nine-hells
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- Chain Devil
---
# [Chain Devil](3. Mechanics\CLI\bestiary\fiend/chain-devil-xmm.md)
*Source: Monster Manual (2024) p. 68. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Chain Devil

*Devil of Pain and Control*

- **Habitat.** Planar (Nine Hells)  
- **Treasure.** [Implements](3.%20Mechanics/CLI/tables/random-magic-items-implements.md)  

Also known as kytons, chain devils consider themselves morbid artisans who use deception, menace, and vicious metal to coerce prisoners into betraying themselves. Many serve powerful devils, wrenching secrets from imprisoned souls using deadly, animate chains. Left to their own devices, chain devils encourage ruthless individuals to pursue forbidden magic, leading their pupils down paths to the Nine Hells.

Along with psychological threats and physical harm, a chain devil uses its unnerving gaze to make its victims perceive their worst fear rather than the monster. Roll on or choose a result from the Chain Devil Masks table to inspire a chain devil's fearful appearance.

**Chain Devil Masks**

| dice: 1d4 | To a Viewer, the Chain Devil Looks Like... |
|-----------|--------------------------------------------|
| 1 | The corpse of a loved one. |
| 2 | A disapproving deity. |
| 3 | A harsh instructor or superior. |
| 4 | The viewer at their lowest point in life. |
^chain-devil-masks

```statblock
"name": "Chain Devil (XMM)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "85"
"hit_dice": "10d8 + 40"
"modifier": !!int "5"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "18"
  - !!int "11"
  - !!int "12"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "constitution": !!int "7"
  - "wisdom": !!int "4"
"damage_resistances": "bludgeoning, cold, piercing, slashing"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft. (unimpeded\
  \ by magical [Darkness](3.%20Mechanics/CLI/rules/variant-rules/darkness-xphb.md)),\
  \ passive Perception 11"
"languages": "Infernal; telepathy 120 ft."
"cr": "8"
"traits":
  - "desc": "If the devil dies outside the Nine Hells, its body disappears in sulfurous\
      \ smoke, and it gains a new body instantly, reviving with all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Nine Hells."
    "name": "Diabolical Restoration"
  - "desc": "The devil has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The devil makes two Chain attacks and uses Conjure Infernal Chain."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 10 ft. *Hit:* 11 (2d6 + 4) Slashing\
      \ damage. If the target is a Large or smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 14) from one of two chains, and it has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition until the grapple ends."
    "name": "Chain"
  - "desc": "The devil conjures a fiery chain to bind a creature. *Dexterity Saving\
      \ Throw:* DC 15, one creature the devil can see within 60 feet. *Failure:* 9\
      \ (2d4 + 4) Fire damage, and the target has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition until the end of the devil's next turn, at which point the chain\
      \ disappears. If the target is Large or smaller, the devil moves the target\
      \ up to 30 feet straight toward itself. *Success:* The chain disappears."
    "name": "Conjure Infernal Chain"
"reactions":
  - "desc": "Trigger: A creature the devil can see starts its turn within 30 feet\
      \ of the devil and can see the devil. _Response—_*Wisdom Saving Throw:* DC 15,\
      \ the triggering creature. *Failure:* The target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition until the end of its turn. *Success:* The target is immune to this\
      \ devil's Unnerving Gaze for 24 hours."
    "name": "Unnerving Gaze"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/chain-devil-xmm.webp"
```
^statblock

## Environment

planar, nine hells