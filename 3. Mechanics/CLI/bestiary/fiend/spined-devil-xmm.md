---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/nine-hells
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- Spined Devil
---
# [Spined Devil](3. Mechanics\CLI\bestiary\fiend/spined-devil-xmm.md)
*Source: Monster Manual (2024) p. 296*  

## Spined Devil

*Devil of Intrusion and Suspicion*

- **Habitat.** Planar (Nine Hells)  
- **Treasure.** None  

Spined devils, also known as spinagons, lurk in the shadows of the Lower Planes, seeking secrets for their infernal lords. They prefer to attack from the air, flinging wicked barbs while staying out of reach of foes. Spined devils collect information to gain leverage over mortals or to entice powerful devils. Roll on or choose a result from the Spined Devil Intelligence table to inspire what information a spined devil seeks or already possesses.

**Spined Devil Intelligence**

| dice: 1d6 | The Spined Devil Covets Information About... |
|-----------|----------------------------------------------|
| 1 | Artifacts, their locations, and their owners. |
| 2 | Betrayals by infernal allies or other devils. |
| 3 | Crimes or deceptions by influential leaders. |
| 4 | The identities of incognito individuals. |
| 5 | The movements of extraplanar armies. |
| 6 | Prophecies or secrets hidden by gods. |
^spined-devil-intelligence

```statblock
"name": "Spined Devil (XMM)"
"size": "Small"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "45"
"hit_dice": "10d6 + 10"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "12"
  - !!int "11"
  - !!int "14"
  - !!int "8"
"speed": "20 ft., fly 40 ft."
"damage_resistances": "cold"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft. (unimpeded\
  \ by magical [Darkness](3.%20Mechanics/CLI/rules/variant-rules/darkness-xphb.md)),\
  \ passive Perception 12"
"languages": "Infernal; telepathy 120 ft."
"cr": "2"
"traits":
  - "desc": "The devil doesn't provoke an Opportunity Attack when it flies out of\
      \ an enemy's reach."
    "name": "Flyby"
  - "desc": "The devil has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The devil makes two attacks, using Infernal Fork and Tail Spine in any\
      \ combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 5 (1d6 + 2) Piercing\
      \ damage plus 3 (1d6) Fire damage."
    "name": "Infernal Fork"
  - "desc": "*Ranged Attack Roll:* +4, range 20/80 ft. *Hit:* 4 (1d4 + 2) Piercing\
      \ damage plus 3 (1d6) Fire damage."
    "name": "Tail Spine"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/spined-devil-xmm.webp"
```
^statblock

## Environment

planar, nine hells