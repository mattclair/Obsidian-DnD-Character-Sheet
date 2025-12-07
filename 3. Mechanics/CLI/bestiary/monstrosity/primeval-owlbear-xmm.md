---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Primeval Owlbear
---
# [Primeval Owlbear](3. Mechanics\CLI\bestiary\monstrosity/primeval-owlbear-xmm.md)
*Source: Monster Manual (2024) p. 234*  

Ancient forests and Feywild demesnes steeped in magic can give rise to particularly large and vicious owlbears. These primeval specimens can fly—albeit poorly—and emit thunderous screeches that can rattle foes and even tear them asunder.

## Owlbears

*Magically Perfected Predators*

- **Habitat.** Forest  
- **Treasure.** None  

Created long ago by misguided mages, owlbears combine keen avian eyes, thick feathers, and a tearing beak with a mighty bearlike frame. Despite their magical origins, owlbears have propagated and spread to wildernesses across the multiverse.

Owlbears dwell in distinctive dens. Roll on or choose a result from the Owlbear Den Features table to inspire an owlbear den's noteworthy traits.

**Owlbear Den Features**

| dice: 1d4 | An Owlbear Den Contains... |
|-----------|----------------------------|
| 1 | Evidence of previous occupants, like bandits, wolves, or dragons. |
| 2 | Heaps of regurgitated pellets studded with coins or other treasure. |
| 3 | A nest with `1d6` owlbear eggs. |
| 4 | Passages through the earth or hollow trees. |
^owlbear-den-features

```statblock
"name": "Primeval Owlbear (XMM)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "126"
"hit_dice": "12d12 + 48"
"modifier": !!int "5"
"stats":
  - !!int "22"
  - !!int "14"
  - !!int "19"
  - !!int "8"
  - !!int "15"
  - !!int "7"
"speed": "40 ft., climb 40 ft., fly 5 ft."
"saves":
  - "constitution": !!int "7"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+8"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 18"
"languages": ""
"cr": "7"
"traits":
  - "desc": "The owlbear has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The owlbear makes two Ravage attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +9, reach 5 ft. *Hit:* 15 (2d8 + 6) Slashing\
      \ damage. If the target is a Huge or smaller creature and the owlbear moved\
      \ 20+ feet straight toward it immediately before the hit, the target takes an\
      \ extra 9 (2d8) Slashing damage and has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Ravage"
  - "desc": "*Constitution Saving Throw:* DC 15, each creature in a 30-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the owlbear. *Failure:* 27 (6d8) Thunder damage, and the\
      \ target has the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition until the end of its next turn. *Success:* Half damage only."
    "name": "Screech (Recharge 5-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/primeval-owlbear-xmm.webp"
```
^statblock

## Environment

forest