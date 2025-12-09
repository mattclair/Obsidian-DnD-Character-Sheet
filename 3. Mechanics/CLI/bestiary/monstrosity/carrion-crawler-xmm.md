---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Carrion Crawler
---
# [Carrion Crawler](3. Mechanics\CLI\bestiary\monstrosity/carrion-crawler-xmm.md)
*Source: Monster Manual (2024) p. 66. Available in the Free Rules (2024)*  

## Carrion Crawler

*Catacomb-Scouring Necrophage*

- **Habitat.** Underdark, Urban  
- **Treasure.** None  

Ravenous corpse eaters, carrion crawlers gravitate toward places of slaughter and decay. In such charnel environs, they feast on the dead with no qualms about their meals' origins or freshness.

Carrion crawlers have segmented bodies like gigantic cutworms. From beneath their multipart maws protrude eight thin, lashing tentacles. Creatures struck by these tentacles risk being [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed) and consumed.

Carrion crawlers scour sewers, battlefields, necropolises, and fetid wildernesses for corpses, clinging to ceilings to ambush smaller prey and to avoid competing hunters. They're drawn to light and the scent of blood, recognizing them as signs of food.

These scavengers avoid ingesting inorganic material. Crypts with funeral armors sucked clean of their corpses and eerily pristine catacombs are signs of infestation by carrion crawlers.

```statblock
"name": "Carrion Crawler (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "51"
"hit_dice": "6d10 + 18"
"modifier": !!int "1"
"stats":
  - !!int "14"
  - !!int "13"
  - !!int "16"
  - !!int "1"
  - !!int "12"
  - !!int "5"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The carrion crawler can climb difficult surfaces, including along ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The carrion crawler uses Paralyzing Tentacles and makes one Bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 7 (2d4 + 2) Piercing\
      \ damage plus 3 (1d6) Poison damage."
    "name": "Bite"
  - "desc": "*Constitution Saving Throw:* DC 12, one creature the carrion crawler\
      \ can see within 10 feet. *Failure:* The target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition and repeats the save at the end of each of its turns, ending the\
      \ effect on itself on a success. After 1 minute, it succeeds automatically.\
      \ While [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned), the target\
      \ has the [Paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed) condition."
    "name": "Paralyzing Tentacles"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/carrion-crawler-xmm.webp"
```
^statblock

## Environment

underdark, urban