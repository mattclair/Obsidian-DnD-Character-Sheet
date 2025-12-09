---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bullywug Bog Sage
---
# [Bullywug Bog Sage](3. Mechanics\CLI\bestiary\fey/bullywug-bog-sage-xmm.md)
*Source: Monster Manual (2024) p. 64. Available in the Free Rules (2024)*  

Bullywug bog sages channel the magic of the swamp to sicken foes and speak with plants.

## Bullywugs

*Amphibious Appreciators of Marsh and Muck*

- **Habitat.** Swamp  
- **Treasure.** [Implements](3.%20Mechanics/CLI/tables/random-magic-items-implements.md), Individual  

Fey embodiments of swamplands, bullywugs protect the murky wilds and consider themselves cosmically favored for that role. These human-size, toad- or frog-like creatures have close relationships with the creatures of the swamp.

```statblock
"name": "Bullywug Bog Sage (XMM)"
"size": "Medium"
"type": "fey"
"alignment": "Neutral"
"ac": !!int "16"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "3"
"stats":
  - !!int "8"
  - !!int "16"
  - !!int "14"
  - !!int "10"
  - !!int "16"
  - !!int "12"
"speed": "30 ft., swim 30 ft."
"saves":
  - "constitution": !!int "4"
  - "wisdom": !!int "5"
  - "charisma": !!int "3"
"skillsaves":
  - "name": "[Nature](3.%20Mechanics/CLI/rules/skills.md#Nature)"
    "desc": "+4"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "passive Perception 13"
"languages": "Bullywug, Common"
"cr": "4"
"traits":
  - "desc": "The bullywug can breathe air and water."
    "name": "Amphibious"
  - "desc": "The bullywug can communicate simple concepts to frogs and toads when\
      \ it speaks in Bullywug."
    "name": "Speak with Frogs and Toads"
"actions":
  - "desc": "The bullywug makes two Bog Staff attacks. It can replace any attack with\
      \ a use of Spellcasting to cast [Ray of Sickness](3.%20Mechanics/CLI/spells/ray-of-sickness-xphb.md)."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 7 (1d8 + 3) Bludgeoning\
      \ damage plus 10 (3d6) Poison damage."
    "name": "Bog Staff"
  - "desc": "The bullywug casts one of the following spells, using Wisdom as the spellcasting\
      \ ability (spell save DC 13, +5 to hit with spell attacks):\n\n**At will:**\
      \ [Dancing Lights](3.%20Mechanics/CLI/spells/dancing-lights-xphb.md), [Druidcraft](3.%20Mechanics/CLI/spells/druidcraft-xphb.md),\
      \ [Ray of Sickness](3.%20Mechanics/CLI/spells/ray-of-sickness-xphb.md)\n\n**1/day\
      \ each:** [Speak with Plants](3.%20Mechanics/CLI/spells/speak-with-plants-xphb.md),\
      \ [Vitriolic Sphere](3.%20Mechanics/CLI/spells/vitriolic-sphere-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The bullywug can jump up to 30 feet by spending 10 feet of movement."
    "name": "Leap"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fey/token/bullywug-bog-sage-xmm.webp"
```
^statblock

## Environment

swamp