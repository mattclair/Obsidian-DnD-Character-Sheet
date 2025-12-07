---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Pseudodragon
---
# [Pseudodragon](3. Mechanics\CLI\bestiary\dragon/pseudodragon-xmm.md)
*Source: Monster Manual (2024) p. 249, Player's Handbook (2024) p. 354. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Pseudodragon

*Fickle, Pint-Sized Dragon*

- **Habitat.** Coastal, Desert, Forest, Hill, Mountain, Urban  
- **Treasure.** [Arcana](3.%20Mechanics/CLI/tables/random-magic-items-arcana.md)  

Pseudodragons dwell in scenic wildernesses, preferably where life is easy and prey is small and slow. There they behave like contented wyrms, creating tiny lairs amid ancient trees and rugged cliffs. They fill these lairs with shiny rocks, colorful shells, and unattended treasures that catch their attention, and they guard these hoards fiercely.

Pseudodragons grow to the size of large house cats, and most have red-brown scales. Some have scales with other hues or patterns—markings distinct from those of their larger draconic cousins.

Many magic-users attempt to befriend pseudodragons, hoping to enlist them as familiars. The creatures' intellect and resistance to magic make them excellent companions, and they're considered status symbols in some spellcasting circles.

Many pseudodragons prefer the finer things in life. These diminutive dragons might be inclined to aid those who ply them with treats. Contrariwise, mages who don't properly pamper their pseudo dragon familiars might be abandoned without warning. Roll on or choose an option from the Pseudo dragon Treats table to inspire a pseudodragon's taste in gifts.

**Pseudodragon Treats**

| dice: 1d10 | The Pseudodragon Wants... |
|------------|---------------------------|
| 1 | Flamboyant accessories it can wear. |
| 2 | Mementos from a lost friend or master. |
| 3 | Outlandish delicacies—like axe beak-egg omelets or mammoth-milk cheese. |
| 4 | The possessions of a sibling, rival, or master. |
| 5 | Shiny gifts, from gems to abalone shells. |
| 6 | Soft bedding and stuffed toys. |
| 7 | A specific cook's signature dessert. |
| 8 | Time-consuming beauty treatments. |
| 9 | To hear a bedtime story or favorite song. |
| 10 | Trophies and important-sounding titles. |
^pseudodragon-treats

> [!quote] A quote from Jallarzi, Pseudodragon's Companion  
> 
> If you want to keep a pseudodragon happy, get used to thinking of yourself as its familiar.


```statblock
"name": "Pseudodragon (XMM)"
"size": "Tiny"
"type": "dragon"
"alignment": "Neutral Good"
"ac": !!int "14"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "15"
  - !!int "13"
  - !!int "10"
  - !!int "12"
  - !!int "10"
"speed": "15 ft., fly 60 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 10 ft., [darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 60 ft., passive Perception 15"
"languages": "understands Common and Draconic but can't speak"
"cr": "1/4"
"traits":
  - "desc": "The pseudodragon has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The pseudodragon makes two Bite attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 4 (1d4 + 2) Piercing\
      \ damage."
    "name": "Bite"
  - "desc": "*Constitution Saving Throw:* DC 12, one creature the pseudodragon can\
      \ see within 5 feet. *Failure:* 5 (2d4) Poison damage, and the target has\
      \ the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned) condition\
      \ for 1 hour. While [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
      \ the target also has the [Unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ condition, which ends early if the target takes damage or a creature within\
      \ 5 feet of it takes an action to wake it."
    "name": "Sting"
"source":
  - "XMM"
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/dragon/token/pseudodragon-xmm.webp"
```
^statblock

## Environment

coastal, desert, forest, hill, mountain, urban