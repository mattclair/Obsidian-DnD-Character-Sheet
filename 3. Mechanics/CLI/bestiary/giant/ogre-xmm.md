---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ogre
---
# [Ogre](3. Mechanics\CLI\bestiary\giant/ogre-xmm.md)
*Source: Monster Manual (2024) p. 231. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Ogres are 10-foot-tall brutes that overwhelm their foes and take what spoils they please. Ogre raiders ally with other evil forces in return for food, riches, and promises of battle.

## Ogres

*Raging Hulks and Hoarders*

- **Habitat.** Arctic, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Ogres are selfish raiders and hulking gluttons spawned of hateful supernatural forces. From dismal ruins and bleak hinterlands, they raid vulnerable communities and ambush travelers. Ogres covet food and treasure, and they spitefully destroy art, books, clockwork devices, and other delicate or lovingly made things. Occasionally they kidnap victims to eat later or, more rarely, performers who catch their interest.

Ogres trace their origins to wrathful deities such as Erythnul, Takhisis, and Vaprak. They magically emerge from the earth of lands corrupted by evil gods, sinister magic, or ancient curses. Some bear evidence of the places that spawned them, sporting rocky calluses, mossy growths, or frozen scars.

```statblock
"name": "Ogre (XMM)"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"modifier": !!int "-1"
"stats":
  - !!int "19"
  - !!int "8"
  - !!int "16"
  - !!int "5"
  - !!int "7"
  - !!int "7"
"speed": "40 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 8"
"languages": "Common, Giant"
"cr": "2"
"actions":
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 13 (2d8 + 4) Bludgeoning\
      \ damage."
    "name": "Greatclub"
  - "desc": "*Melee  or Ranged Attack Roll:* +6, reach 5 ft. or range 30/120 ft.\
      \ *Hit:* 11 (2d6 + 4) Piercing damage."
    "name": "Javelin"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/giant/token/ogre-xmm.webp"
```
^statblock

## Environment

arctic, desert, forest, grassland, hill, mountain, swamp, underdark