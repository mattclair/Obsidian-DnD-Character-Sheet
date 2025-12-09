---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Abominable Yeti
---
# [Abominable Yeti](3. Mechanics\CLI\bestiary\monstrosity/abominable-yeti-xmm.md)
*Source: Monster Manual (2024) p. 340*  

Giants even among their own intimidating kind, abominable yetis are stronger and bloodthirstier than their kin. They claim whole regions as their hunting grounds, and they might track trespassers for days. On sighting prey, abominable yetis fling boulders of ice and snow before closing to finish foes. In addition to their icy claws and gaze, they can exhale a blast of arctic cold.

Abominable yetis dwell in frigid ruins or the deserted lairs of other monsters atop infamous peaks.

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
"name": "Abominable Yeti (XMM)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "137"
"hit_dice": "11d12 + 66"
"modifier": !!int "4"
"stats":
  - !!int "24"
  - !!int "10"
  - !!int "22"
  - !!int "9"
  - !!int "13"
  - !!int "9"
"speed": "40 ft., climb 40 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+9"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+8"
"damage_immunities": "cold"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 19"
"languages": "Yeti"
"cr": "9"
"traits":
  - "desc": "If the yeti takes Fire damage, it has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on attack rolls and ability checks until the end of its next turn."
    "name": "Fear of Fire"
"actions":
  - "desc": "The yeti can use its Chilling Gaze and makes two attacks, using Claw\
      \ or Ice Throw in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +11, reach 5 ft. *Hit:* 14 (2d6 + 7) Slashing\
      \ damage plus 7 (2d6) Cold damage."
    "name": "Claw"
  - "desc": "*Ranged Attack Roll:* +11, range 60/240 ft. *Hit:* 12 (2d4 + 7) Bludgeoning\
      \ damage plus 7 (2d6) Cold damage."
    "name": "Ice Throw"
  - "desc": "*Constitution Saving Throw:* DC 18, one creature the yeti can see within\
      \ 30 feet. *Failure:* 21 (6d6) Cold damage, and the target has the [Paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ condition until the start of the yeti's next turn unless the target has [Immunity](3.%20Mechanics/CLI/rules/variant-rules/immunity-xphb.md)\
      \ to Cold damage. *Success:* The target is immune to this yeti's Chilling Gaze\
      \ for 1 hour."
    "name": "Chilling Gaze"
  - "desc": "*Constitution Saving Throw:* DC 18, each creature in a 30-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 45 (10d8) Cold damage. *Success:* Half damage."
    "name": "Cold Breath (Recharge 6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/abominable-yeti-xmm.webp"
```
^statblock

## Environment

arctic