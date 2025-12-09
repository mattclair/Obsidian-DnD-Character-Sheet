---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/environment/astral
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration/gith
statblock: inline
statblock-link: "#^statblock"
aliases:
- Githyanki Dracomancer
---
# [Githyanki Dracomancer](3. Mechanics\CLI\bestiary\aberration/githyanki-dracomancer-xmm.md)
*Source: Monster Manual (2024) p. 135*  

One of Gith's last deeds was to forge an alliance between the githyanki and the dragon god Tiamat. Ever since, the Dragon Queen's red dragon consort, Ephelomon, and his kind have been allies of the githyanki. Githyanki dracomancers uphold this pact and cultivate magic talents that complement the might of red dragons.

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
"name": "Githyanki Dracomancer (XMM)"
"size": "Medium"
"type": "aberration"
"subtype": "gith"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "255"
"hit_dice": "30d8 + 120"
"modifier": !!int "8"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "18"
  - !!int "20"
  - !!int "16"
  - !!int "18"
"speed": "30 ft., fly 30 ft. (hover)"
"saves":
  - "dexterity": !!int "8"
  - "constitution": !!int "9"
  - "intelligence": !!int "10"
  - "wisdom": !!int "8"
"skillsaves":
  - "name": "[Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+10"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+8"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 30 ft., passive\
  \ Perception 18"
"languages": "Common, Draconic, Gith"
"cr": "16"
"actions":
  - "desc": "The githyanki makes three Draconic Strike attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +10, reach 10 ft. or range 120 ft.\
      \ *Hit:* 12 (2d6 + 5) Slashing damage plus 17 (5d6) Fire damage, and the\
      \ target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition until the start of the githyanki's next turn."
    "name": "Draconic Strike"
  - "desc": "*Dexterity Saving Throw:* DC 18, each creature in a 90-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 27 (6d8) Fire damage plus 27 (6d8) Force damage. *Success:*\
      \ Half damage."
    "name": "Conjured Dragon's Breath (Recharge 5-6)"
  - "desc": "The githyanki casts one of the following spells, requiring no spell components\
      \ and using Intelligence as the spellcasting ability (spell save DC 18, +10\
      \ to hit with spell attacks):\n\n**At will:** [Mage Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md)\
      \ (the hand is Invisible)\n\n**2/day each:** [Nondetection](3.%20Mechanics/CLI/spells/nondetection-xphb.md)\
      \ (self only), [Plane Shift](3.%20Mechanics/CLI/spells/plane-shift-xphb.md),\
      \ [Tongues](3.%20Mechanics/CLI/spells/tongues-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The githyanki casts [Misty Step](3.%20Mechanics/CLI/spells/misty-step-xphb.md),\
      \ requiring no spell components and using the same spellcasting ability as Spellcasting.\n"
    "name": "Misty Step (3/Day)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/githyanki-dracomancer-xmm.webp"
```
^statblock

## Environment

planar, astral