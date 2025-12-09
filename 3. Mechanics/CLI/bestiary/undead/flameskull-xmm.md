---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Flameskull
---
# [Flameskull](3. Mechanics\CLI\bestiary\undead/flameskull-xmm.md)
*Source: Monster Manual (2024) p. 120*  

## Flameskull

*Skull Smoldering with Magical Obsession*

- **Habitat.** Underdark  
- **Treasure.** [Arcana](3.%20Mechanics/CLI/tables/random-magic-items-arcana.md)  

Flameskulls are flying skulls that blaze with magical fire and the half-remembered arcana of dead spellcasters. They rise from the remains of dead magic-users who were reanimated by sinister necromancers or whose magical pursuits drive them beyond death. Flameskulls might serve as guardians for their creators or pursue ambitions left unfulfilled in life. They lash out at foes with destructive spells and bursts of fire, wielding magic without the need for most components.

Flameskulls take various forms, from skulls with humanlike features to ones with fearsome or bestial alterations. Their flames vary in color and grow more intense when they're angry. Roll on or choose a result from the Flameskull Details table to inspire what makes a flameskull distinctive.

**Flameskull Details**

| dice: 1d6 | The Flameskull Features... |
|-----------|----------------------------|
| 1 | Arcane diagrams etched into it. |
| 2 | Flames like dramatic features, horns, or hair. |
| 3 | Fractured pieces that fly in unison. |
| 4 | An iron plate bolted over its mouth. |
| 5 | Lethal head trauma. |
| 6 | Mismatched animal teeth. |
^flameskull-details

> [!quote] A quote from Trenzia, Undermountain Flameskull  
> 
> I never cared for warmth. I never needed a body. My will is enough, and my work will be the legacy that makes my every sacrifice worthwhile!


```statblock
"name": "Flameskull (XMM)"
"size": "Tiny"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d4 + 18"
"modifier": !!int "3"
"stats":
  - !!int "1"
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "10"
  - !!int "11"
"speed": "5 ft., fly 40 ft. (hover)"
"skillsaves":
  - "name": "[Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
"damage_immunities": "fire, necrotic, poison"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common plus two other languages"
"cr": "4"
"traits":
  - "desc": "The flameskull sheds [Bright Light](3.%20Mechanics/CLI/rules/variant-rules/bright-light-xphb.md)\
      \ in a 15-foot radius and [Dim Light](3.%20Mechanics/CLI/rules/variant-rules/dim-light-xphb.md)\
      \ for an additional 15 feet."
    "name": "Illumination"
  - "desc": "The flameskull has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "If the flameskull is destroyed, it regains all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ in 1 hour unless Holy Water is sprinkled on its remains or the [Dispel Evil\
      \ and Good](3.%20Mechanics/CLI/spells/dispel-evil-and-good-xphb.md) spell is\
      \ cast on them."
    "name": "Undead Restoration"
"actions":
  - "desc": "The flameskull makes two Fire Ray attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +5, reach 5 ft. or range 60 ft. *Hit:*\
      \ 13 (3d6 + 3) Fire damage."
    "name": "Fire Ray"
  - "desc": "The flameskull casts one of the following spells, requiring no Somatic\
      \ or Material components and using Intelligence as the spellcasting ability\
      \ (spell save DC 13):\n\n**At will:** [Mage Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md)\n\
      \n**2/day:** [Magic Missile](3.%20Mechanics/CLI/spells/magic-missile-xphb.md)\
      \ (level 2 version)\n\n**1/day:** [Fireball](3.%20Mechanics/CLI/spells/fireball-xphb.md)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/flameskull-xmm.webp"
```
^statblock

## Environment

underdark