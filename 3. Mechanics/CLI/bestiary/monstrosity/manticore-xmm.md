---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Manticore
---
# [Manticore](3. Mechanics\CLI\bestiary\monstrosity/manticore-xmm.md)
*Source: Monster Manual (2024) p. 202. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Manticore

*Winged, Leonine People-Eater*

- **Habitat.** Arctic, Coastal, Grassland, Hill, Mountain  
- **Treasure.** Any  

With lion-like claws, leathery wings, and broad jaws filled with rows of sharp teeth, manticores ambush travelers from above and devour them. Manticores crave the taste of humans, but lacking their favored prey, they eagerly consume other peoples and livestock.

Manticores have tails bristling with detachable spikes. These monsters launch their tail spikes at their prey, skewering those on the ground or knocking flying creatures from the air.

Despite their ravenous tendencies, manticores enjoy speaking with those they're about to devour. Sometimes they make agreements with their prey. Roll on or choose a result from the Manticore Negotiations table to inspire what a manticore might offer in exchange for a more tempting meal.

**Manticore Negotiations**

| dice: 1d8 | The Manticore Agrees To... |
|-----------|----------------------------|
| 1 | Attack a particular foe. |
| 2 | Create a distraction. |
| 3 | Give up a captive or corpse. |
| 4 | Let a group navigate its territory unharmed. |
| 5 | Let someone pretend to slay it in battle. |
| 6 | Scare or threaten someone. |
| 7 | Serve a creature as a steed until the sun sets. |
| 8 | Try to locate something from its vantage point in the sky. |
^manticore-negotiations

```statblock
"name": "Manticore (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"modifier": !!int "3"
"stats":
  - !!int "17"
  - !!int "16"
  - !!int "17"
  - !!int "7"
  - !!int "12"
  - !!int "8"
"speed": "30 ft., fly 50 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Common"
"cr": "3"
"actions":
  - "desc": "The manticore makes three attacks, using Rend or Tail Spike in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 7 (1d8 + 3) Slashing\
      \ damage."
    "name": "Rend"
  - "desc": "*Ranged Attack Roll:* +5, range 100/200 ft. *Hit:* 7 (1d8 + 3) Piercing\
      \ damage."
    "name": "Tail Spike"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/manticore-xmm.webp"
```
^statblock

## Environment

arctic, coastal, grassland, hill, mountain