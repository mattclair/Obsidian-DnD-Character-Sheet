---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Helmed Horror
---
# [Helmed Horror](3. Mechanics\CLI\bestiary\construct/helmed-horror-xmm.md)
*Source: Monster Manual (2024) p. 166*  

## Helmed Horror

*Armor with a Warrior's Purpose*

- **Habitat.** Any  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Helmed horrors are suits of armor animated by magic. Rather than being unreasoning automatons, these armored shells possess the guile of soldiers and resilience against destructive magic. While their name suggests sinister intentions, these creatures serve their creators loyally. Helmed horrors are also sometimes called doom guards or spirit armors. Most show no evidence of a personality, but exceptions exist.

Helmed horrors might perform any number of assignments. Roll on or choose a result from the Helmed Horror Directives table to inspire what tasks helmed horrors perform.

**Helmed Horror Directives**

| dice: 1d6 | The Helmed Horror Follows Commands To... |
|-----------|------------------------------------------|
| 1 | Carry its master's palanquin through the air. |
| 2 | Defend a remarkable treasure or piece of armor by incorporating the item into its being. |
| 3 | Imitate a dead or imprisoned hero by using their armor and weapons. |
| 4 | Perform as a laborer or servant. |
| 5 | Serve in a legion formed from the armors of a land's ancient defenders. |
| 6 | Stand sentry in a gallery of mundane armors. |
^helmed-horror-directives

```statblock
"name": "Helmed Horror (XMM)"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"modifier": !!int "3"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "16"
  - !!int "10"
  - !!int "10"
  - !!int "10"
"speed": "30 ft., fly 30 ft. (hover)"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded),\
  \ [charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed), [deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned), [stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 14"
"languages": "understands Common plus one other language but can't speak"
"cr": "4"
"traits":
  - "desc": "The helmed horror has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The helmed horror is immune to three spells chosen by its creator. Typical\
      \ choices include [Heat Metal](3.%20Mechanics/CLI/spells/heat-metal-xphb.md),\
      \ [Lightning Bolt](3.%20Mechanics/CLI/spells/lightning-bolt-xphb.md), and [Magic\
      \ Missile](3.%20Mechanics/CLI/spells/magic-missile-xphb.md)."
    "name": "Spell Immunity"
"actions":
  - "desc": "The helmed horror makes two Arcane Sword attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 8 (1d8 + 4) Slashing\
      \ damage plus 5 (1d10) Force damage."
    "name": "Arcane Sword"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/construct/token/helmed-horror-xmm.webp"
```
^statblock

## Environment

any