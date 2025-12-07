---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Nothic
---
# [Nothic](3. Mechanics\CLI\bestiary\aberration/nothic-xmm.md)
*Source: Monster Manual (2024) p. 228. Available in the Free Rules (2024)*  

## Nothic

*Witness to the Weird*

- **Habitat.** Underdark  
- **Treasure.** [Arcana](3.%20Mechanics/CLI/tables/random-magic-items-arcana.md)  

Consumed by their thirst for forbidden knowledge, nothics are cursed lore seekers transformed by secrets never meant to be known. The bodies of these former scholars are warped into otherworldly shapes, each with a head dominated by a gigantic, unblinking eye. Nothics remember nothing of their past lives and care only for their endless pursuit of hidden mysteries and uncanny truths. They seek revelations amid the rubble of forgotten ruins, and they use their supernatural sight to pierce magical deceptions, rot the flesh of enemies, and steal the secrets of those who interrupt their investigations.

Some nothics seek to end the curse that warped them into their bizarre forms, but many are unaware of—or uninterested in—their transformation.

> [!quote]  
> 
> Deeper. Deeper and Deeper. Deeper and creeper. Creeping they come. Up from the place that isn't a place. They come to feed. Feed on what I know. So I hide. I hide away. Away in the secret dark. Secret and dark, like all that I know I shouldn't know!


```statblock
"name": "Nothic (XMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "16"
  - !!int "16"
  - !!int "13"
  - !!int "10"
  - !!int "8"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+3"
  - "name": "[Insight](3.%20Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+4"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "[truesight](3.%20Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive\
  \ Perception 14"
"languages": "Undercommon"
"cr": "2"
"actions":
  - "desc": "The nothic makes two Claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 8 (1d10 + 3) Slashing\
      \ damage."
    "name": "Claw"
  - "desc": "*Constitution Saving Throw:* DC 13, one creature the nothic can see within\
      \ 120 feet. *Failure:* 17 (5d6) Necrotic damage. *Success:* Half damage."
    "name": "Rotting Gaze"
"bonus_actions":
  - "desc": "*Wisdom Saving Throw:* DC 14, one creature the nothic can see within\
      \ 120 feet. *Failure:* The nothic magically learns one fact or secret about\
      \ the target."
    "name": "Weird Insight (Recharge 6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/nothic-xmm.webp"
```
^statblock

## Environment

underdark