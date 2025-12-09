---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Knight
---
# [Knight](3. Mechanics\CLI\bestiary\humanoid/knight-xmm.md)
*Source: Monster Manual (2024) p. 184. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Knights frequently lead troops in combat or work in units that dominate the battlefield. They're often attended by squires, who might be less skilled soldiers or commoners.

## Knights

*Battle Masters and Heroic Wanderers*

- **Habitat.** Any  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md), Individual  

Knights are skilled warriors trained for war and tested in battle. Many serve the rulers of a realm, a religion, or an order devoted to a cause.

```statblock
"name": "Knight (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "11"
  - !!int "14"
  - !!int "11"
  - !!int "11"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "constitution": !!int "4"
  - "wisdom": !!int "2"
"condition_immunities": "[frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "passive Perception 10"
"languages": "Common plus one other language"
"cr": "3"
"actions":
  - "desc": "The knight makes two attacks, using Greatsword or Heavy Crossbow in any\
      \ combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 10 (2d6 + 3) Slashing\
      \ damage plus 4 (1d8) Radiant damage."
    "name": "Greatsword"
  - "desc": "*Ranged Attack Roll:* +2, range 100/400 ft. *Hit:* 11 (2d10) Piercing\
      \ damage plus 4 (1d8) Radiant damage."
    "name": "Heavy Crossbow"
"reactions":
  - "desc": "Trigger: The knight is hit by a melee attack roll while holding a weapon.\
      \ _Response:_ The knight adds 2 to its AC against that attack, possibly causing\
      \ it to miss."
    "name": "Parry"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/knight-xmm.webp"
```
^statblock

## Environment

any