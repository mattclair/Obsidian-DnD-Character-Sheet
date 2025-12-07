---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/monstrosity/lycanthrope
statblock: inline
statblock-link: "#^statblock"
aliases:
- Werebear
---
# [Werebear](3. Mechanics\CLI\bestiary\monstrosity/werebear-xmm.md)
*Source: Monster Manual (2024) p. 324. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Werebear

*Changed by the Might of the Bear*

- **Habitat.** Arctic, Forest, Hill  
- **Treasure.** [Relics](3.%20Mechanics/CLI/tables/random-magic-items-relics.md)  

When threatened or compelled by magic, werebears shape-shift from their humanoid forms into mighty bears or hybrids of those two forms. They scare off or sabotage those who threaten the wilds, and they frequently aid Fey, druids, or spirits of the wilderness, as many owe their magical nature to such forces. Werebears take the shape of bears common to the regions in which they dwell, with brown and polar bear forms being common.

```statblock
"name": "Werebear (XMM)"
"size": "Small or Medium"
"type": "monstrosity"
"subtype": "lycanthrope"
"alignment": "Neutral Good"
"ac": !!int "15"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"modifier": !!int "3"
"stats":
  - !!int "19"
  - !!int "10"
  - !!int "17"
  - !!int "11"
  - !!int "12"
  - !!int "12"
"speed": "30 ft., 40 ft. (bear form only), climb 30 ft. (bear form only)"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 17"
"languages": "Common (can't speak in bear form)"
"cr": "5"
"actions":
  - "desc": "The werebear makes two attacks, using Handaxe or Rend in any combination.\
      \ It can replace one attack with a Bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 17 (2d12 + 4) Piercing\
      \ damage. If the target is a Humanoid, it is subjected to the following effect.\
      \ *Constitution Saving Throw:* DC 14. *Failure:* The target is cursed. If the\
      \ cursed target drops to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md),\
      \ it instead becomes a Werebear under the DM's control and has 10 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md).\
      \ *Success:* The target is immune to this werebear's curse for 24 hours."
    "name": "Bite (Bear or Hybrid Form Only)"
  - "desc": "*Melee  or Ranged Attack Roll:* +7, reach 5 ft or range 20/60 ft. *Hit:*\
      \ 14 (3d6 + 4) Slashing damage."
    "name": "Handaxe (Humanoid or Hybrid Form Only)"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 13 (2d8 + 4) Slashing\
      \ damage."
    "name": "Rend (Bear or Hybrid Form Only)"
"bonus_actions":
  - "desc": "The werebear shape-shifts into a Large bear-humanoid hybrid form or a\
      \ Large bear, or it returns to its true humanoid form. Its game statistics,\
      \ other than its size, are the same in each form. Any equipment it is wearing\
      \ or carrying isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/werebear-xmm.webp"
```
^statblock

## Environment

arctic, forest, hill