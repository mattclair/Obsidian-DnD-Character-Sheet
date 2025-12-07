---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/monstrosity/lycanthrope
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wereboar
---
# [Wereboar](3. Mechanics\CLI\bestiary\monstrosity/wereboar-xmm.md)
*Source: Monster Manual (2024) p. 325. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Wereboar

*Changed by the Hunger of the Boar*

- **Habitat.** Forest, Grassland, Hill  
- **Treasure.** Individual  

Wereboars shape-shift from their humanoid forms into powerful boars or humanoid-boar hybrids. Many wereboars suffer their shape-shifting nature as a curse, with some involuntarily transforming any time they perform a greedy act or indulge their selfish nature.

```statblock
"name": "Wereboar (XMM)"
"size": "Small or Medium"
"type": "monstrosity"
"subtype": "lycanthrope"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "97"
"hit_dice": "15d8 + 30"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "10"
  - !!int "15"
  - !!int "10"
  - !!int "11"
  - !!int "8"
"speed": "30 ft., 40 ft. (boar form only)"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
"senses": "passive Perception 12"
"languages": "Common (can't speak in boar form)"
"cr": "4"
"actions":
  - "desc": "The wereboar makes two attacks, using Javelin or Tusk in any combination.\
      \ It can replace one attack with a Gore attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 12 (2d8 + 3) Piercing\
      \ damage. If the target is a Humanoid, it is subjected to the following effect.\
      \ *Constitution Saving Throw:* DC 12. *Failure:* The target is cursed. If the\
      \ cursed target drops to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md),\
      \ it instead becomes a Wereboar under the DM's control and has 10 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md).\
      \ *Success:* The target is immune to this wereboar's curse for 24 hours."
    "name": "Gore (Boar or Hybrid Form Only)"
  - "desc": "*Melee  or Ranged Attack Roll:* +5, reach 5 ft. or range 30/120 ft.\
      \ *Hit:* 13 (3d6 + 3) Piercing damage."
    "name": "Javelin (Humanoid or Hybrid Form Only)"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 10 (2d6 + 3) Piercing\
      \ damage. If the target is a Medium or smaller creature and the wereboar moved\
      \ 20+ feet straight toward it immediately before the hit, the target takes an\
      \ extra 7 (2d6) Piercing damage and has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Tusk (Boar or Hybrid Form Only)"
"bonus_actions":
  - "desc": "The wereboar shape-shifts into a Medium boar-humanoid hybrid or a Small\
      \ boar, or it returns to its true humanoid form. Its game statistics, other\
      \ than its size, are the same in each form. Any equipment it is wearing or carrying\
      \ isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/wereboar-xmm.webp"
```
^statblock

## Environment

forest, grassland, hill