---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Yeti
---
# [Yeti](3. Mechanics\CLI\bestiary\monstrosity/yeti-xmm.md)
*Source: Monster Manual (2024) p. 339*  

Yetis hunt alone or in small family groups. They avoid the settlements of other creatures but lurk near paths frequented by traders and herders to pick off unsuspecting prey. Yetis make their homes in icy caves near frozen peaks and at extremes where few dare travel.

## Yetis

*Chilling Stalkers of the Frozen Wilds*

- **Habitat.** Arctic  
- **Treasure.** Any  

Across alpine extremes and frozen frontiers, yetis hunt those that trespass in their territories. Reclusive and merciless, they resemble giant apes with pale fur and ram-like horns. Yetis easily blend in with snow and icy cliffs, revealing themselves with blood-chilling howls just before striking with their icy claws. In addition to their physical might, yetis can chill creatures with a look, freezing their foes in place, and they can conjure ice and hurl it at foes.

Due to yetis' elusiveness, folktales about yetis are more common than sightings. Whether a distant scream is the howl of an enraged yeti or just the wind, few can be certain. Nevertheless, many mountainous settlements burn bonfires to ward off yetis, taking advantage of these brutes' aversion to fire.

> [!quote] A quote from Kelesta Hawke of the Emerald Enclave  
> 
> In the yeti, I find no kinship, no understanding, no mercy. Theirs is not the might of the mountain or the magic of glacial wonders. Theirs is a world where harmony lies murdered and frozen.


```statblock
"name": "Yeti (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "51"
"hit_dice": "6d10 + 18"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "16"
  - !!int "8"
  - !!int "12"
  - !!int "7"
"speed": "40 ft., climb 40 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "cold"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": "Yeti"
"cr": "3"
"traits":
  - "desc": "If the yeti takes Fire damage, it has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on attack rolls and ability checks until the end of its next turn."
    "name": "Fear of Fire"
"actions":
  - "desc": "The yeti can use its Chilling Gaze and makes two attacks, using Claw\
      \ or Ice Throw in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 7 (1d6 + 4) Slashing\
      \ damage plus 3 (1d6) Cold damage."
    "name": "Claw"
  - "desc": "*Ranged Attack Roll:* +6, range 30/120 ft. *Hit:* 6 (1d4 + 4) Bludgeoning\
      \ damage plus 2 (1d4) Cold damage."
    "name": "Ice Throw"
  - "desc": "*Constitution Saving Throw:* DC 13, one creature the yeti can see within\
      \ 30 feet. *Failure:* 5 (2d4) Cold damage, and the target has the [Paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ condition until the start of the yeti's next turn unless the target has [Immunity](3.%20Mechanics/CLI/rules/variant-rules/immunity-xphb.md)\
      \ to Cold damage. *Success:* The target is immune to the Chilling Gaze of all\
      \ yetis (but not abominable yetis) for 1 hour."
    "name": "Chilling Gaze"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/yeti-xmm.webp"
```
^statblock

## Environment

arctic