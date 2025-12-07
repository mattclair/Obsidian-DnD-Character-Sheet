---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Specter
---
# [Specter](3. Mechanics\CLI\bestiary\undead/specter-xmm.md)
*Source: Monster Manual (2024) p. 290. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Specter

*Spirit of Wrath and Servant of Death*

- **Habitat.** Underdark, Urban  
- **Treasure.** None  

Specters are bodiless, life-devouring spirits drawn to darkness and negative emotions. Having lost all connection to the beings they once were, these hateful spirits drain mortal essence to steal fleeting tastes of life and warmth.

Specters seek creatures and locations that exude evil and feed on the suffering they inspire. Roll on or choose a result from the Specter Haunts table to inspire where a specter lurks.

**Specter Haunts**

| dice: 1d8 | The Specter Lurks Near... |
|-----------|---------------------------|
| 1 | A community afflicted by curses, grudges, plagues, or tragedies. |
| 2 | An evil Artifact or a deadly magical device. |
| 3 | The lair of a Fiend or an Undead. |
| 4 | The place where a villain died or is buried. |
| 5 | A portal to the Lower Planes, Negative Plane, or Shadowfell. |
| 6 | The sanctuary of a necromancer or death cult. |
| 7 | A secluded monument binding wicked souls. |
| 8 | The site of a disaster or mass death. |
^specter-haunts

```statblock
"name": "Specter (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "2"
"stats":
  - !!int "1"
  - !!int "14"
  - !!int "11"
  - !!int "10"
  - !!int "10"
  - !!int "11"
"speed": "30 ft., fly 50 ft. (hover)"
"damage_resistances": "acid, bludgeoning, cold, fire, lightning, piercing, slashing,\
  \ thunder"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled),\
  \ [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned), [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained), [unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "understands Common plus one other language but can't speak"
"cr": "1"
"traits":
  - "desc": "The specter can move through other creatures and objects as if they were\
      \ [Difficult Terrain](3.%20Mechanics/CLI/rules/variant-rules/difficult-terrain-xphb.md).\
      \ It takes 5 (1d10) Force damage if it ends its turn inside an object."
    "name": "Incorporeal Movement"
  - "desc": "While in sunlight, the specter has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on ability checks and attack rolls."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 7 (2d6) Necrotic damage.\
      \ If the target is a creature, its [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by an amount equal to the damage taken."
    "name": "Life Drain"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/specter-xmm.webp"
```
^statblock

## Environment

underdark, urban