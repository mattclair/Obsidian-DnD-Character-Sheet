---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/nine-hells
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- Lemure
---
# [Lemure](3. Mechanics\CLI\bestiary\fiend/lemure-xmm.md)
*Source: Monster Manual (2024) p. 194. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Lemures torment weaker creatures, but in the Nine Hells, few such beings exist. To avoid greater suffering, they obey the orders of more powerful devils.

## Lemures

*Devils of Agony and Despair*

- **Habitat.** Planar (Nine Hells)  
- **Treasure.** None  

The least of all devils, lemures arise from wicked souls, their mortal memories scoured away. Only vague limbs and anguished features jut from these slurries of infernal proto-matter.

```statblock
"name": "Lemure (XMM)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "9"
"hp": !!int "9"
"hit_dice": "2d8"
"modifier": !!int "-3"
"stats":
  - !!int "10"
  - !!int "5"
  - !!int "11"
  - !!int "1"
  - !!int "11"
  - !!int "3"
"speed": "20 ft."
"damage_resistances": "cold"
"damage_immunities": "fire, poison"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft. (unimpeded\
  \ by magical [Darkness](3.%20Mechanics/CLI/rules/variant-rules/darkness-xphb.md)),\
  \ passive Perception 10"
"languages": "understands Infernal but can't speak"
"cr": "0"
"traits":
  - "desc": "If the lemure dies in the Nine Hells, it revives with all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 days unless it is killed by a creature under the effects of a [Bless](3.%20Mechanics/CLI/spells/bless-xphb.md)\
      \ spell or its remains are sprinkled with Holy Water."
    "name": "Hellish Restoration"
"actions":
  - "desc": "*Melee Attack Roll:* +2, reach 5 ft. *Hit:* 2 (1d4) Poison damage."
    "name": "Vile Slime"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/lemure-xmm.webp"
```
^statblock

## Environment

planar, nine hells