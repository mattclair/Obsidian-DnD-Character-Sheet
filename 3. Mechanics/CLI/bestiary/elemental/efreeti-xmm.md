---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/fire
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental/genie
statblock: inline
statblock-link: "#^statblock"
aliases:
- Efreeti
---
# [Efreeti](3. Mechanics\CLI\bestiary\elemental/efreeti-xmm.md)
*Source: Monster Manual (2024) p. 109. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Efreeti

*Genie of Fire*

- **Habitat.** Desert, Planar (Elemental Plane of Fire)  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Efreet burn with the energy and unpredictability of fire. Their innate magic allows them to conjure flames from nothing and shape treasures within magical infernos. Many efreet have wicked reputations, as their fickle natures and love for dramatic conflagrations can be destructive. Other efreet delight in fire's beauty, be it the delicacy of a candle flame or the shared wonder of fireworks. These genies might aid mortals in exchange for treasures or the liberation of captive Elementals.

On many worlds, efreet dwell in sweltering deserts and volcanic regions. Those that make their homes on the Elemental Plane of Fire create incredible cities among seas of flame and molten minerals. Eclipsing all of these is the storied City of Brass, a gleaming metropolis that is one of the most wondrous cities in the multiverse. Here, magic tempers the plane's extreme heat, making the City of Brass a hub of trade between planes of existence.

> [!quote] A quote from Veyisvexvayn, Magma Mephit Herald  
> 
> Imagine seas of platinum and liquid flame, the Crimson Pillar with fires hot enough to sear the gods, and the infinite delights of the City of Brass. Now imagine what my master offers...


```statblock
"name": "Efreeti (XMM)"
"size": "Large"
"type": "elemental"
"subtype": "genie"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "212"
"hit_dice": "17d10 + 119"
"modifier": !!int "1"
"stats":
  - !!int "22"
  - !!int "12"
  - !!int "24"
  - !!int "16"
  - !!int "15"
  - !!int "19"
"speed": "40 ft., fly 60 ft. (hover)"
"saves":
  - "wisdom": !!int "6"
  - "charisma": !!int "8"
"damage_immunities": "fire"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 12"
"languages": "Primordial (Ignan)"
"cr": "11"
"traits":
  - "desc": "If the efreeti dies outside the Elemental Plane of Fire, its body dissolves\
      \ into ash, and it gains a new body in 1d4 days, reviving with all its [Hit\
      \ Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md) somewhere\
      \ on the Plane of Fire."
    "name": "Elemental Restoration"
  - "desc": "The efreeti has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The efreeti has a 30 percent chance of knowing the [Wish](3.%20Mechanics/CLI/spells/wish-xphb.md)\
      \ spell. If the efreeti knows it, the efreeti can cast it only on behalf of\
      \ a non-genie creature who communicates a wish in a way the efreeti can understand.\
      \ If the efreeti casts the spell for the creature, the efreeti suffers none\
      \ of the spell's stress. Once the efreeti has cast it three times, the efreeti\
      \ can't do so again for 365 days."
    "name": "Wishes"
"actions":
  - "desc": "The efreeti makes three attacks, using Heated Blade or Hurl Flame in\
      \ any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +10, reach 5 ft. *Hit:* 13 (2d6 + 6) Slashing\
      \ damage plus 13 (2d12) Fire damage."
    "name": "Heated Blade"
  - "desc": "*Ranged Attack Roll:* +8, range 120 ft. *Hit:* 24 (7d6) Fire damage."
    "name": "Hurl Flame"
  - "desc": "The efreeti casts one of the following spells, requiring no Material\
      \ components and using Charisma as the spellcasting ability (spell save DC 16):\n\
      \n**At will:** [Detect Magic](3.%20Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [Elementalism](3.%20Mechanics/CLI/spells/elementalism-xphb.md)\n\n**1/day\
      \ each:** [Gaseous Form](3.%20Mechanics/CLI/spells/gaseous-form-xphb.md), [Invisibility](3.%20Mechanics/CLI/spells/invisibility-xphb.md),\
      \ [Major Image](3.%20Mechanics/CLI/spells/major-image-xphb.md), [Plane Shift](3.%20Mechanics/CLI/spells/plane-shift-xphb.md),\
      \ [Tongues](3.%20Mechanics/CLI/spells/tongues-xphb.md), [Wall of Fire](3.%20Mechanics/CLI/spells/wall-of-fire-xphb.md)\
      \ (level 7 version)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/elemental/token/efreeti-xmm.webp"
```
^statblock

## Environment

desert, planar, fire