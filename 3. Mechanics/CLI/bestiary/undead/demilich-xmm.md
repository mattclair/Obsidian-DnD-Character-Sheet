---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/18
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Demilich
---
# [Demilich](3. Mechanics\CLI\bestiary\undead/demilich-xmm.md)
*Source: Monster Manual (2024) p. 96*  

## Demilich

*What Lies beyond Lichdom*

- **Habitat.** Any  
- **Treasure.** [Arcana](3.%20Mechanics/CLI/tables/random-magic-items-arcana.md)  

A demilich is a skull harboring the remnants of a lich's wicked essence. If the burden of immortality overwhelms a lich, its consciousness turns inward as its body rots away. But if its remains are disturbed, a demilich rises. Demiliches usually appear as skulls adorned with gems or arcane sigils.

### Demilich Lairs

Demiliches jealously guard their deathtrap-laden sanctums. The most notorious of these is the Tomb of Horrors, lair of the infamous Acererak.

```statblock
"name": "Demilich (XMM)"
"size": "Tiny"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "20"
"hp": !!int "180"
"hit_dice": "72d4"
"modifier": !!int "17"
"stats":
  - !!int "1"
  - !!int "20"
  - !!int "10"
  - !!int "20"
  - !!int "17"
  - !!int "20"
"speed": "5 ft., fly 30 ft. (hover)"
"saves":
  - "constitution": !!int "6"
  - "intelligence": !!int "11"
  - "wisdom": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "necrotic, poison, psychic"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone), [stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[truesight](3.%20Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive\
  \ Perception 13"
"languages": ""
"cr": "18"
"traits":
  - "desc": "If the demilich fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
  - "desc": "If the demilich is destroyed, it reforms and regains all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 days unless a [Wish](3.%20Mechanics/CLI/spells/wish-xphb.md) spell\
      \ is cast on its remains."
    "name": "Undead Restoration"
"actions":
  - "desc": "The demilich makes three Necrotic Burst attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +11, reach 5 ft. or range 120 ft. *Hit:*\
      \ 24 (7d6) Necrotic damage."
    "name": "Necrotic Burst"
  - "desc": "*Constitution Saving Throw:* DC 19, each creature in a 30-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the demilich. *Failure:* 70 (20d6) Psychic damage. *Failure\
      \ or Success:* The target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition until the start of the demilich's next turn."
    "name": "Howl (Recharge 5-6)"
"regional_effects":
  - "desc": "The region containing a demilich's lair is twisted by its presence, creating\
      \ the following effects:\n\n- **Enervating Domain.** Whenever a creature other\
      \ than the demilich or one of its allies finishes a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md)\
      \ within 1 mile of the lair, the creature must succeed on a DC 20 Constitution\
      \ saving throw or have its [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ maximum reduced by 1d4. This reduction lasts until the creature finishes\
      \ a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md) outside\
      \ that area.  \n- **Travel Ward.** Creatures can't use teleportation or planar\
      \ travel to enter or exit the lair.  \n\nIf the demilich dies or moves its lair\
      \ elsewhere, these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3 (4 in Lair). Immediately after\
  \ another creature's turn, the demilich can expend a use to take one of the following\
  \ actions. The demilich regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "*Constitution Saving Throw:* DC 19, one creature the demilich can see\
      \ within 120 feet. *Failure:* The target's [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by 14 (4d6). *Failure or Success:* The demilich can't\
      \ take this action again until the start of its next turn."
    "name": "Energy Drain"
  - "desc": "The demilich flies up to its [Fly Speed](3.%20Mechanics/CLI/rules/variant-rules/fly-speed-xphb.md),\
      \ shedding grave dust. Each creature within 5 feet of the demilich as it moves\
      \ is targeted once by the following effect. *Constitution Saving Throw:* DC\
      \ 19. *Failure:* The target has the [Blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded)\
      \ condition until the end of the demilich's next turn. *Failure or Success:*\
      \ The demilich can't take this action again until the start of its next turn."
    "name": "Grave-Dust Flight"
  - "desc": "The demilich makes one Necrotic Burst attack."
    "name": "Necrosis"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/demilich-xmm.webp"
```
^statblock

## Environment

any