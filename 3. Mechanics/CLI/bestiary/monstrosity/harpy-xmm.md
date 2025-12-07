---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Harpy
---
# [Harpy](3. Mechanics\CLI\bestiary\monstrosity/harpy-xmm.md)
*Source: Monster Manual (2024) p. 164. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Harpy

*Winged Voice of Doom*

- **Habitat.** Coastal, Forest, Hill, Mountain  
- **Treasure.** Any  

Hate-filled creatures, harpies strive to cause pain and bring an end to love and life. These monsters combine humanlike features with the talons and wings of avian scavengers. Their notorious songs compel listeners to follow them, heedless of danger. Creatures captivated by a harpy's song frequently meet their deaths on harpies' vicious claws or amid natural perils.

Harpies dwell in remote, dismal places tainted by tragedy and despair. Some tales claim harpies offended the gods and were transformed as a punishment; harpies might also be the descendants of such cursed souls.

Every harpy sings a distinct song. While some songs are said to be heartbreaking in their beauty, others are wretched squawking and compel only the magically enthralled.

```statblock
"name": "Harpy (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "38"
"hit_dice": "7d8 + 7"
"modifier": !!int "1"
"stats":
  - !!int "12"
  - !!int "13"
  - !!int "12"
  - !!int "7"
  - !!int "10"
  - !!int "13"
"speed": "20 ft., fly 40 ft."
"senses": "passive Perception 10"
"languages": "Common"
"cr": "1"
"actions":
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 6 (2d4 + 1) Slashing\
      \ damage."
    "name": "Claw"
  - "desc": "The harpy sings a magical melody, which lasts until the harpy's [Concentration](3.%20Mechanics/CLI/rules/conditions.md#Concentration)\
      \ ends on it. *Wisdom Saving Throw:* DC 11, each Humanoid and Giant in a 300-foot\
      \ [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the harpy when the song starts. *Failure:* The target has\
      \ the [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed) condition until\
      \ the song ends and repeats the save at the end of each of its turns. While\
      \ [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed), the target has\
      \ the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition and ignores the Luring Song of other harpies. If the target is more\
      \ than 5 feet from the harpy, the target moves on its turn toward the harpy\
      \ by the most direct route, trying to get within 5 feet of the harpy. It doesn't\
      \ avoid [Opportunity Attacks](3.%20Mechanics/CLI/rules/actions.md#Opportunity%20Attack);\
      \ however, before moving into damaging terrain (such as lava or a pit) and whenever\
      \ it takes damage from a source other than the harpy, the target repeats the\
      \ save. *Success:* The target is immune to this harpy's Luring Song for 24 hours."
    "name": "Luring Song"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/harpy-xmm.webp"
```
^statblock

## Environment

coastal, forest, hill, mountain