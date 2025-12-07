---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Umber Hulk
---
# [Umber Hulk](3. Mechanics\CLI\bestiary\monstrosity/umber-hulk-xmm.md)
*Source: Monster Manual (2024) p. 312*  

## Umber Hulk

*Burrowing Brute from Below*

- **Habitat.** Underdark  
- **Treasure.** None  

Lumbering, carapace-armored bipeds, umber hulks burrow through the Underdark, feeding on anything they can crush in their mighty mandibles. These tenacious hunters sense movement through the surrounding earth, then burst through cavern walls to surprise their prey. Those ambushed by umber hulks risk meeting the gaze of the monsters' eerie, multifaceted eyes, which can cause others to act irrationally and even lash out at their allies.

Umber hulks typically lurk in tunnels they've burrowed alongside other passages. When they detect creatures moving, they burst through the rock walls between the passages to attack. While these monsters can communicate with one other, they usually hunt alone and avoid each other's territories. Umber hulks focus on finding food and crushing intruders. They have little interest in allying with other creatures, but manipulative inhabitants of the Underdark, such as beholders and mind flayers, sometimes compel umber hulks to serve them.

```statblock
"name": "Umber Hulk (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"modifier": !!int "4"
"stats":
  - !!int "20"
  - !!int "13"
  - !!int "16"
  - !!int "9"
  - !!int "10"
  - !!int "10"
"speed": "30 ft., burrow 20 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., tremorsense\
  \ 60 ft., passive Perception 10"
"languages": "Umber Hulk"
"cr": "5"
"traits":
  - "desc": "The umber hulk can burrow through solid rock at half its [Burrow Speed](3.%20Mechanics/CLI/rules/variant-rules/burrow-speed-xphb.md)\
      \ and leaves a 10-foot-diameter tunnel in its wake."
    "name": "Tunneler"
"actions":
  - "desc": "The umber hulk makes three Rend attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +8, reach 10 ft. *Hit:* 12 (2d6 + 5) Slashing\
      \ damage."
    "name": "Rend"
"bonus_actions":
  - "desc": "*Wisdom Saving Throw:* DC 14, each creature in a 30-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* The target can't take Reactions until the start of the umber hulk's\
      \ next turn, and the target rolls 1d8 to determine what it does on its next\
      \ turn:\n\n- **1-4.** The target does nothing.  \n- **5-6.** The target takes\
      \ no action or [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md)\
      \ and uses all its movement to move in a random direction.  \n- **7-8.** The\
      \ target makes a melee attack against a random creature within its reach or\
      \ does nothing if it can't make such an attack.  "
    "name": "Confusing Gaze (Recharge 5-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/umber-hulk-xmm.webp"
```
^statblock

## Environment

underdark