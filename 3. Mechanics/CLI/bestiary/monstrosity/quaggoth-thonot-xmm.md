---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Quaggoth Thonot
---
# [Quaggoth Thonot](3. Mechanics\CLI\bestiary\monstrosity/quaggoth-thonot-xmm.md)
*Source: Monster Manual (2024) p. 251*  

Quaggoth thonots possess psionic abilities, which they use to give themselves an edge in combat and to coerce the service of other quaggoths.

## Quaggoths

*Unpredictable Subterranean Stalkers*

- **Habitat.** Underdark  
- **Treasure.** None  

Beastly hunters endemic to subterranean depths, quaggoths scrape harsh existences from the Underdark. While they can survive on bitter lichens and toxic fungi, they viciously attack anything they can make a meal of, from giant spiders to explorers. Quaggoths sometimes serve as muscle for Underdark-dwelling villains.

Quaggoths frequently collect in small bands led by the most fearsome group member. These bands are proud and quick to hold grudges. Anyone who harms a quaggoth—or who is suspected of doing so—earns the enmity of that quaggoth's band regardless of reason or fault. These grudges sometimes extend to whole communities rather than individuals. Generations of quaggoths might seek revenge against a settlement's inhabitants for decades-old slights. Only the leader of a quaggoth band can demand that a grudge ends.

```statblock
"name": "Quaggoth Thonot (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "12"
  - !!int "16"
  - !!int "6"
  - !!int "14"
  - !!int "7"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+5"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 12"
"languages": "Undercommon"
"cr": "3"
"traits":
  - "desc": "While [Bloodied](3.%20Mechanics/CLI/rules/conditions.md#Bloodied), the\
      \ quaggoth has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on attack rolls."
    "name": "Bloodied Fury"
"actions":
  - "desc": "The quaggoth makes two Claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 6 (1d6 + 3) Slashing\
      \ damage plus 5 (2d4) Psychic damage."
    "name": "Claw"
  - "desc": "The quaggoth casts one of the following spells, requiring no spell components\
      \ and using Wisdom as the spellcasting ability (spell save DC 12):\n\n**At will:**\
      \ [Mage Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md) (the hand is Invisible),\
      \ [Minor Illusion](3.%20Mechanics/CLI/spells/minor-illusion-xphb.md)\n\n**2/day:**\
      \ [Mind Spike](3.%20Mechanics/CLI/spells/mind-spike-xphb.md)"
    "name": "Spellcasting"
"reactions":
  - "desc": "The quaggoth casts [Feather Fall](3.%20Mechanics/CLI/spells/feather-fall-xphb.md)\
      \ or [Shield](3.%20Mechanics/CLI/spells/shield-xphb.md) in response to the spell's\
      \ trigger, requiring no spell components and using the same spellcasting ability\
      \ as Spellcasting.\n"
    "name": "Psionic Defense (3/Day)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/quaggoth-thonot-xmm.webp"
```
^statblock

## Environment

underdark