---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/nine-hells
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- Barbed Devil
---
# [Barbed Devil](3. Mechanics\CLI\bestiary\fiend/barbed-devil-xmm.md)
*Source: Monster Manual (2024) p. 30. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Barbed Devil

*Devil of Greed and Obsession*

- **Habitat.** Planar (Nine Hells)  
- **Treasure.** Any  

Infernal collectors, barbed devils fanatically protect troves of treasure and scour the planes of existence for additions to their hoards. Also known as hamatulas among the ranks of the Nine Hells, these devils bedeck their barbed hides with their most prized possessions and trophies taken from those who failed to steal from them. When threatened, barbed devils strike with their thorny limbs and hurl infernal flame.

Barbed devils often serve as guards and accountants for ice devil generals, pit fiend warlords, archdevils, and similarly powerful villains. In return, barbed devils gain protection for their own collections. Many barbed devils also maintain networks of imps that search the planes for treasures of interest or usefully greedy mortals.

Barbed devils rarely collect anything as prosaic as coins and gems. Rather, they pride themselves on having the multiverse's greatest collection of one kind of thing—typically items of rare pedigree or emblems of power. Barbed devils refuse to steal what they covet; instead they strike bargains to claim both treasure and mortal souls.

```statblock
"name": "Barbed Devil (XMM)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "110"
"hit_dice": "13d8 + 52"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "17"
  - !!int "18"
  - !!int "12"
  - !!int "14"
  - !!int "14"
"speed": "30 ft., climb 30 ft."
"saves":
  - "strength": !!int "6"
  - "constitution": !!int "7"
  - "wisdom": !!int "5"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Deception](3.%20Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Insight](3.%20Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+5"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+8"
"damage_resistances": "cold"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft. (unimpeded\
  \ by magical [Darkness](3.%20Mechanics/CLI/rules/variant-rules/darkness-xphb.md)),\
  \ passive Perception 18"
"languages": "Infernal; telepathy 120 ft."
"cr": "5"
"traits":
  - "desc": "At the start of each of its turns, the devil deals 5 (1d10) Piercing\
      \ damage to any creature it is grappling or any creature grappling it."
    "name": "Barbed Hide"
  - "desc": "If the devil dies outside the Nine Hells, its body disappears in sulfurous\
      \ smoke, and it gains a new body instantly, reviving with all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Nine Hells."
    "name": "Diabolical Restoration"
  - "desc": "The devil has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The devil makes one Claws attack and one Tail attack, or it makes two\
      \ Hurl Flame attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 10 (2d6 + 3) Piercing\
      \ damage. If the target is a Large or smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 13) from both claws."
    "name": "Claws"
  - "desc": "*Melee Attack Roll:* +6, reach 10 ft. *Hit:* 14 (2d10 + 3) Slashing\
      \ damage."
    "name": "Tail"
  - "desc": "*Ranged Attack Roll:* +5, range 150 ft. *Hit:* 17 (5d6) Fire damage.\
      \ If the target is a flammable object that isn't being worn or carried, it starts\
      \ [burning](3.%20Mechanics/CLI/traps-hazards/burning-xphb.md)."
    "name": "Hurl Flame"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/barbed-devil-xmm.webp"
```
^statblock

## Environment

planar, nine hells