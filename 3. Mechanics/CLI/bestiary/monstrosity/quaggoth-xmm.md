---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Quaggoth
---
# [Quaggoth](3. Mechanics\CLI\bestiary\monstrosity/quaggoth-xmm.md)
*Source: Monster Manual (2024) p. 251*  

For quaggoths, every fight means life or death. They battle with wild fury and do anything to survive.

## Quaggoths

*Unpredictable Subterranean Stalkers*

- **Habitat.** Underdark  
- **Treasure.** None  

Beastly hunters endemic to subterranean depths, quaggoths scrape harsh existences from the Underdark. While they can survive on bitter lichens and toxic fungi, they viciously attack anything they can make a meal of, from giant spiders to explorers. Quaggoths sometimes serve as muscle for Underdark-dwelling villains.

Quaggoths frequently collect in small bands led by the most fearsome group member. These bands are proud and quick to hold grudges. Anyone who harms a quaggoth—or who is suspected of doing so—earns the enmity of that quaggoth's band regardless of reason or fault. These grudges sometimes extend to whole communities rather than individuals. Generations of quaggoths might seek revenge against a settlement's inhabitants for decades-old slights. Only the leader of a quaggoth band can demand that a grudge ends.

```statblock
"name": "Quaggoth (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "12"
  - !!int "16"
  - !!int "6"
  - !!int "12"
  - !!int "7"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+5"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 11"
"languages": "Undercommon"
"cr": "2"
"traits":
  - "desc": "While [Bloodied](3.%20Mechanics/CLI/rules/conditions.md#Bloodied), the\
      \ quaggoth has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on attack rolls."
    "name": "Bloodied Fury"
"actions":
  - "desc": "The quaggoth makes two Claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 6 (1d6 + 3) Slashing\
      \ damage, or 13 (3d6 + 3) Slashing damage if the quaggoth is [Bloodied](3.%20Mechanics/CLI/rules/conditions.md#Bloodied)."
    "name": "Claw"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/quaggoth-xmm.webp"
```
^statblock

## Environment

underdark