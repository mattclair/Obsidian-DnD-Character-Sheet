---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/air
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Aarakocra Skirmisher
---
# [Aarakocra Skirmisher](3. Mechanics\CLI\bestiary\elemental/aarakocra-skirmisher-xmm.md)
*Source: Monster Manual (2024) p. 10*  

Aarakocra skirmishers are adept at fighting aerial foes amid the clouds. They often attack land-bound threats with diving strikes from above.

## Aarakocra

*Winged Guardians of the Sky*

- **Habitat.** Mountain, Planar (Elemental Plane of Air)  
- **Treasure.** [Implements](3.%20Mechanics/CLI/tables/random-magic-items-implements.md), Individual  

Aarakocra are birdlike folk who soar the skies of countless worlds and the endless expanses of the Elemental Plane of Air. They often resemble avians common to the lands where they dwell; some resemble hawks or condors, while others appear similar to hummingbirds or archaeopteryxes. In many lands, aarakocra tell of their ancient heroics resisting the wicked Queen of Chaos alongside the mysterious Wind Dukes of Aaqa.

```statblock
"name": "Aarakocra Skirmisher (XMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "12"
  - !!int "11"
  - !!int "12"
  - !!int "11"
"speed": "20 ft., fly 50 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"senses": "passive Perception 15"
"languages": "Aarakocra, Primordial (Auran)"
"cr": "1/4"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 4 (1d4 + 2) Slashing\
      \ damage, or 9 (3d4 + 2) Slashing damage if the aarakocra moved 30+ feet straight\
      \ toward the target immediately before the hit."
    "name": "Talons"
  - "desc": "*Melee  or Ranged Attack Roll:* +4, reach 5 ft. or range 30/120 ft.\
      \ *Hit:* 5 (1d6 + 2) Piercing damage plus 2 (1d4) Thunder damage. *Hit or\
      \ Miss:* The javelin magically returns to the aarakocra's hand immediately after\
      \ a ranged attack."
    "name": "Wind Javelin"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/elemental/token/aarakocra-skirmisher-xmm.webp"
```
^statblock

## Environment

mountain, planar, air