---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/feywild
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Blink Dog
---
# [Blink Dog](3. Mechanics\CLI\bestiary\fey/blink-dog-xmm.md)
*Source: Monster Manual (2024) p. 46. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Blink Dog

*Elusive Feywild Canine*

- **Habitat.** Forest, Planar (Feywild)  
- **Treasure.** None  

Blink dogs glimmer with a magic that allows them to teleport, "blinking" from one spot to another. These dogs use this power to chase prey, baffle foes, and express joy. They're frequently found among Feywild folk, such as centaurs and pixies—often as members of rollicking hunts between worlds.

```statblock
"name": "Blink Dog (XMM)"
"size": "Medium"
"type": "fey"
"alignment": "Lawful Good"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "17"
  - !!int "12"
  - !!int "10"
  - !!int "13"
  - !!int "11"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": "understands Elvish and Sylvan but can't speak them"
"cr": "1/4"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 5 (1d4 + 3) Piercing\
      \ damage."
    "name": "Bite"
"bonus_actions":
  - "desc": "The dog teleports up to 40 feet to an unoccupied space it can see."
    "name": "Teleport (Recharge 4-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fey/token/blink-dog-xmm.webp"
```
^statblock

## Environment

forest, planar, feywild