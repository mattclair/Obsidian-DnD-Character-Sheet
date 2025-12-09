---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Stone Golem
---
# [Stone Golem](3. Mechanics\CLI\bestiary\construct/stone-golem-xmm.md)
*Source: Monster Manual (2024) p. 301. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Stone Golem

*Guardian of the Storied and Sacred*

- **Habitat.** Any  
- **Treasure.** None  

Stone golems take varied forms, such as weathered carvings of ancient deities, lifelike sculptures of heroes, or any other shape their makers imagine. No matter their design or the rock from which they're crafted, these golems are strengthened by the magic that animates them, allowing them to follow their creators' orders for centuries.

Stone golems are typically created to protect places of significance to a group, such as a monument to an important event, a leader's tomb, or a faith's sanctuary. Roll on or choose a result from the Stone Golem Orders table to inspire the commands a stone golem follows.

**Stone Golem Orders**

| dice: 1d6 | The Stone Golem Follows Orders To... |
|-----------|--------------------------------------|
| 1 | Allow only those wearing ritual garb to pass. |
| 2 | Cast [Slow](3.%20Mechanics/CLI/spells/slow-xphb.md) on and aid in apprehending anyone who touches a city's prized relic. |
| 3 | Destroy a dam or bridge at the command of one bearing a ruler's medallion of office. |
| 4 | Obey whoever places a missing crest in its chest, then deactivate for a year. |
| 5 | Reveal a hidden passage to those who recite a leader's final words. |
| 6 | Watch for and do battle with the type of monster that slew the hero it resembles. |
^stone-golem-orders

> [!quote]  
> 
> Exercise discernment when deciding the golem's appearance, as your creation is likely to long outlive its model.


```statblock
"name": "Stone Golem (XMM)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "220"
"hit_dice": "21d10 + 105"
"modifier": !!int "3"
"stats":
  - !!int "22"
  - !!int "9"
  - !!int "20"
  - !!int "3"
  - !!int "11"
  - !!int "1"
"speed": "30 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 10"
"languages": "understands Common plus two other languages but can't speak"
"cr": "10"
"traits":
  - "desc": "The golem can't shape-shift."
    "name": "Immutable Form"
  - "desc": "The golem has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The golem makes two attacks, using Slam or Force Bolt in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +10, reach 5 ft. *Hit:* 15 (2d8 + 6) Bludgeoning\
      \ damage plus 9 (2d8) Force damage."
    "name": "Slam"
  - "desc": "*Ranged Attack Roll:* +9, range 120 ft. *Hit:* 22 (4d10) Force damage."
    "name": "Force Bolt"
"bonus_actions":
  - "desc": "The golem casts the [Slow](3.%20Mechanics/CLI/spells/slow-xphb.md) spell,\
      \ requiring no spell components and using Constitution as the spellcasting ability\
      \ (spell save DC 17).\n"
    "name": "Slow (Recharge 5-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/construct/token/stone-golem-xmm.webp"
```
^statblock

## Environment

any