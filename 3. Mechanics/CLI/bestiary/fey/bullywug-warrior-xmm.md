---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bullywug Warrior
---
# [Bullywug Warrior](3. Mechanics\CLI\bestiary\fey/bullywug-warrior-xmm.md)
*Source: Monster Manual (2024) p. 64. Available in the Free Rules (2024)*  

Bullywug warriors are adept at moving through swamps and ambushing trespassers. They often work alongside packs of trained giant frogs.

## Bullywugs

*Amphibious Appreciators of Marsh and Muck*

- **Habitat.** Swamp  
- **Treasure.** [Implements](3.%20Mechanics/CLI/tables/random-magic-items-implements.md), Individual  

Fey embodiments of swamplands, bullywugs protect the murky wilds and consider themselves cosmically favored for that role. These human-size, toad- or frog-like creatures have close relationships with the creatures of the swamp.

```statblock
"name": "Bullywug Warrior (XMM)"
"size": "Medium"
"type": "fey"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "14"
  - !!int "13"
  - !!int "7"
  - !!int "10"
  - !!int "7"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "passive Perception 10"
"languages": "Bullywug, Common"
"cr": "1/4"
"traits":
  - "desc": "The bullywug can breathe air and water."
    "name": "Amphibious"
  - "desc": "The bullywug can communicate simple concepts to frogs and toads when\
      \ it speaks in Bullywug."
    "name": "Speak with Frogs and Toads"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 6 (1d8 + 2) Piercing\
      \ damage plus 2 (1d4) Poison damage."
    "name": "Insectile Rapier"
"bonus_actions":
  - "desc": "The bullywug can jump up to 30 feet by spending 10 feet of movement."
    "name": "Leap"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fey/token/bullywug-warrior-xmm.webp"
```
^statblock

## Environment

swamp