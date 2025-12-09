---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/astral
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration/gith
statblock: inline
statblock-link: "#^statblock"
aliases:
- Githyanki Warrior
---
# [Githyanki Warrior](3. Mechanics\CLI\bestiary\aberration/githyanki-warrior-xmm.md)
*Source: Monster Manual (2024) p. 134*  

Githyanki warriors use psionic abilities to augment their battle prowess.

## Githyanki

*Invaders from the Astral Plane*

- **Habitat.** Planar (Astral Plane)  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Githyanki were once an ordinary people, but the deeds of a vile mind flayer empire etched conflict on their being. Gaunt, humanlike creatures, githyanki have serrated ears and speckled skin ranging through shades of yellow, green, and brown. While some githyanki follow their own paths, many are influenced by a past that forever altered their fates.

### History of the Gith

Ages ago, a humanlike people were conquered by an empire of mind flayers. The illithids manipulated this forgotten people through untold horrors, forced evolution, and psychic reshaping. Eventually one named Gith rose from among the captives and led a rebellion against their oppressors. Gith's followers, who became known as the gith, defeated the mind flayers and shattered their vast empire.

The victory of the gith was short-lived. As Gith was forging her own burgeoning empire, a leader named Zerthimon challenged her. Zerthimon claimed Gith's drive for vengeance and new conquests was evidence of species-wide mental programming laid by the mind flayers, biological manipulation that condemned her people to continued servitude. This claim split the gith into Gith's followers, the githyanki (meaning "followers of Gith"), and Zerthimon's followers, the githzerai (meaning "those who spurn Gith"), and sparked an ongoing conflict.

When Gith perished, her adviser, Vlaakith, assumed rule of the githyanki. Vlaakith's line has continued to the githyanki's current ruler, Vlaakith the Lich-Queen. This undead tyrant compels her people to wage endless wars against mind flayers, githzerai, and any others that threaten githyanki supremacy.

```statblock
"name": "Githyanki Warrior (XMM)"
"size": "Medium"
"type": "aberration"
"subtype": "gith"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"modifier": !!int "4"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "12"
  - !!int "13"
  - !!int "13"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "constitution": !!int "3"
  - "intelligence": !!int "3"
  - "wisdom": !!int "3"
"senses": "passive Perception 11"
"languages": "Common, Gith"
"cr": "3"
"actions":
  - "desc": "The githyanki makes two Psi Blade attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 9 (2d6 + 2) Slashing\
      \ damage plus 7 (2d6) Psychic damage."
    "name": "Psi Blade"
  - "desc": "The githyanki casts one of the following spells, requiring no spell components\
      \ and using Intelligence as the spellcasting ability:\n\n**At will:** [Mage\
      \ Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md) (the hand is Invisible)\n\
      \n**2/day:** [Nondetection](3.%20Mechanics/CLI/spells/nondetection-xphb.md)\
      \ (self only)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The githyanki casts [Misty Step](3.%20Mechanics/CLI/spells/misty-step-xphb.md),\
      \ requiring no spell components and using the same spellcasting ability as Spellcasting.\n"
    "name": "Misty Step (2/Day)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/githyanki-warrior-xmm.webp"
```
^statblock

## Environment

planar, astral