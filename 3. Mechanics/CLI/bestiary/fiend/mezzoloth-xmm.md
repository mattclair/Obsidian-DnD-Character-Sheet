---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/gehenna
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/yugoloth
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mezzoloth
---
# [Mezzoloth](3. Mechanics\CLI\bestiary\fiend/mezzoloth-xmm.md)
*Source: Monster Manual (2024) p. 211*  

## Mezzoloth

*Yugoloth of Tenacity and Want*

- **Habitat.** Planar (Gehenna)  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Mezzoloths are insectile yugoloths that seek power and souls in the service of fiendish lords. These greedy, violent yugoloths are more direct than most of their scheming brethren, but what they lack in guile they make up for in persistence and numbers.

Mezzoloths typically form mercenary bands with others of their kind. These forces serve more powerful yugoloths, other fiends, sinister mages, or anyone who provides them with tempting rewards. Mezzoloths obediently adhere to the bargains they strike, potentially serving their patrons for centuries, but once those terms expire, yesterday's client could become today's target. Roll on or choose a result from the Mezzoloth Payments table to inspire a mezzoloth's price for its services.

**Mezzoloth Payments**

| dice: 1d6 | The Mezzoloth Agrees to Serve For... |
|-----------|--------------------------------------|
| 1 | Access to a planar portal. |
| 2 | Information valued by its true master. |
| 3 | A lair where it can bring others of its kind. |
| 4 | Magic weapons or armor. |
| 5 | The right to loot holy sites in places it conquers. |
| 6 | Souls, whether as larvae or captured spirits. |
^mezzoloth-payments

```statblock
"name": "Mezzoloth (XMM)"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"modifier": !!int "3"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "16"
  - !!int "7"
  - !!int "14"
  - !!int "10"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "acid, poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., [darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 60 ft., passive Perception 15"
"languages": "Abyssal, Infernal; telepathy 60 ft."
"cr": "5"
"traits":
  - "desc": "If the mezzoloth dies outside Gehenna, its body dissolves into ichor,\
      \ and it gains a new body instantly, reviving with all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ somewhere in Gehenna."
    "name": "Fiendish Restoration"
  - "desc": "The mezzoloth has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The mezzoloth makes two attacks, using Claws or Mercurial Trident in\
      \ any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 9 (2d4 + 4) Slashing\
      \ damage. If the target is a Large or smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 14) from two of four claws, and it has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition until the grapple ends."
    "name": "Claws"
  - "desc": "*Melee  or Ranged Attack Roll:* +7, reach 5 ft. or range 20/60 ft.\
      \ *Hit:* 8 (1d8 + 4) Piercing damage plus 10 (3d6) Force damage. *Hit or\
      \ Miss:* The trident magically returns to the mezzoloth's claw immediately after\
      \ a ranged attack."
    "name": "Mercurial Trident"
  - "desc": "The mezzoloth casts one of the following spells, requiring no Material\
      \ components and using Wisdom as the spellcasting ability (spell save DC 13):\n\
      \n**1/day each:** [Cloudkill](3.%20Mechanics/CLI/spells/cloudkill-xphb.md),\
      \ [Darkness](3.%20Mechanics/CLI/spells/darkness-xphb.md), [Dispel Magic](3.%20Mechanics/CLI/spells/dispel-magic-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The mezzoloth teleports up to 60 feet to an unoccupied space it can see.\
      \ It can teleport one creature it is grappling to an unoccupied space within\
      \ 5 feet of its destination space."
    "name": "Teleport (Recharge 5-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/mezzoloth-xmm.webp"
```
^statblock

## Environment

planar, gehenna