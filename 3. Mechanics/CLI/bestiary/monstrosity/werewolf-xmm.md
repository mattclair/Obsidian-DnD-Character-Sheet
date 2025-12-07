---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/monstrosity/lycanthrope
statblock: inline
statblock-link: "#^statblock"
aliases:
- Werewolf
---
# [Werewolf](3. Mechanics\CLI\bestiary\monstrosity/werewolf-xmm.md)
*Source: Monster Manual (2024) p. 327. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Werewolf

*Changed by the Ferocity of the Wolf*

- **Habitat.** Forest, Hill  
- **Treasure.** Any  

Werewolves change from their humanoid forms into fierce wolves or wolf-humanoid hybrids. Werewolves can shape-shift voluntarily, but many can't resist transforming during the nights of a full moon.

```statblock
"name": "Werewolf (XMM)"
"size": "Small or Medium"
"type": "monstrosity"
"subtype": "lycanthrope"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"modifier": !!int "4"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "14"
  - !!int "10"
  - !!int "11"
  - !!int "10"
"speed": "30 ft., 40 ft. (wolf form only)"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common (can't speak in wolf form)"
"cr": "3"
"traits":
  - "desc": "The werewolf has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the werewolf's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "The werewolf makes two attacks, using Scratch or Longbow in any combination.\
      \ It can replace one attack with a Bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 12 (2d8 + 3) Piercing\
      \ damage. If the target is a Humanoid, it is subjected to the following effect.\
      \ *Constitution Saving Throw:* DC 12. *Failure:* The target is cursed. If the\
      \ cursed target drops to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md),\
      \ it instead becomes a Werewolf under the DM's control and has 10 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md).\
      \ *Success:* The target is immune to this werewolf's curse for 24 hours."
    "name": "Bite (Wolf or Hybrid Form Only)"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 10 (2d6 + 3) Slashing\
      \ damage."
    "name": "Scratch"
  - "desc": "*Ranged Attack Roll:* +4, range 150/600 ft. *Hit:* 11 (2d8 + 2) Piercing\
      \ damage."
    "name": "Longbow (Humanoid or Hybrid Form Only)"
"bonus_actions":
  - "desc": "The werewolf shape-shifts into a Large wolf-humanoid hybrid or a Medium\
      \ wolf, or it returns to its true humanoid form. Its game statistics, other\
      \ than its size, are the same in each form. Any equipment it is wearing or carrying\
      \ isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/werewolf-xmm.webp"
```
^statblock

## Environment

forest, hill