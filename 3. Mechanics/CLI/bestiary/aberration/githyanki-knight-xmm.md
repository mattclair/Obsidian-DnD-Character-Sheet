---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/astral
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration/gith
statblock: inline
statblock-link: "#^statblock"
aliases:
- Githyanki Knight
---
# [Githyanki Knight](3. Mechanics\CLI\bestiary\aberration/githyanki-knight-xmm.md)
*Source: Monster Manual (2024) p. 135*  

Githyanki knights wield silver blades to slay magic-users who use the [Astral Projection](3.%20Mechanics/CLI/spells/astral-projection-xphb.md) spell to intrude on githyanki territories on the Astral Plane. These silver blades are sacred to the githyanki. Non-githyanki who claim these weapons often find themselves hunted by wrathful githyanki knights.

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
"name": "Githyanki Knight (XMM)"
"size": "Medium"
"type": "aberration"
"subtype": "gith"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"modifier": !!int "5"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "15"
  - !!int "14"
  - !!int "14"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "constitution": !!int "5"
  - "intelligence": !!int "5"
  - "wisdom": !!int "5"
"senses": "passive Perception 12"
"languages": "Common, Gith"
"cr": "8"
"actions":
  - "desc": "The githyanki makes three Silver Sword attacks. It can replace one attack\
      \ with a use of Spellcasting to cast [Telekinesis](3.%20Mechanics/CLI/spells/telekinesis-xphb.md)\
      \ if available."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 10 (2d6 + 3) Slashing\
      \ damage plus 14 (4d6) Psychic damage. Critical *Hit:* If the target is in\
      \ an astral body (as with the [Astral Projection](3.%20Mechanics/CLI/spells/astral-projection-xphb.md)\
      \ spell), the githyanki can cut the silvery cord that tethers the target to\
      \ its material body instead of dealing damage."
    "name": "Silver Sword"
  - "desc": "The githyanki casts one of the following spells, requiring no spell components\
      \ and using Intelligence as the spellcasting ability (spell save DC 13):\n\n\
      **At will:** [Mage Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md) (the hand\
      \ is Invisible)\n\n**2/day each:** [Nondetection](3.%20Mechanics/CLI/spells/nondetection-xphb.md)\
      \ (self only), [Tongues](3.%20Mechanics/CLI/spells/tongues-xphb.md)\n\n**1/day\
      \ each:** [Plane Shift](3.%20Mechanics/CLI/spells/plane-shift-xphb.md), [Telekinesis](3.%20Mechanics/CLI/spells/telekinesis-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The githyanki casts [Misty Step](3.%20Mechanics/CLI/spells/misty-step-xphb.md),\
      \ requiring no spell components and using the same spellcasting ability as Spellcasting.\n"
    "name": "Misty Step (2/Day)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/githyanki-knight-xmm.webp"
```
^statblock

## Environment

planar, astral