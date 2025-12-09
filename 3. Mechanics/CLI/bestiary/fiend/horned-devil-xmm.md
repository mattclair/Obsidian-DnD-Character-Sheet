---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/nine-hells
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- Horned Devil
---
# [Horned Devil](3. Mechanics\CLI\bestiary\fiend/horned-devil-xmm.md)
*Source: Monster Manual (2024) p. 174. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Horned Devil

*Devil of Hatred and Subjugation*

- **Habitat.** Planar (Nine Hells)  
- **Treasure.** [Relics](3.%20Mechanics/CLI/tables/random-magic-items-relics.md)  

Horned devils, also known as cornugons or malebranche, are infernal warriors that exact the will of diabolical generals and lead other devils in battle. Their bodies and weapons are forged in the Nine Hells, and they torment their foes with diabolical flames and pernicious wounds.

```statblock
"name": "Horned Devil (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "199"
"hit_dice": "19d10 + 95"
"modifier": !!int "7"
"stats":
  - !!int "22"
  - !!int "17"
  - !!int "21"
  - !!int "12"
  - !!int "16"
  - !!int "18"
"speed": "30 ft., fly 60 ft."
"saves":
  - "strength": !!int "10"
  - "dexterity": !!int "7"
  - "wisdom": !!int "7"
  - "charisma": !!int "8"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 150 ft. (unimpeded\
  \ by magical [Darkness](3.%20Mechanics/CLI/rules/variant-rules/darkness-xphb.md)),\
  \ passive Perception 13"
"languages": "Infernal; telepathy 120 ft."
"cr": "11"
"traits":
  - "desc": "If the devil dies outside the Nine Hells, its body disappears in sulfurous\
      \ smoke, and it gains a new body instantly, reviving with all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Nine Hells."
    "name": "Diabolical Restoration"
  - "desc": "The devil has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The devil makes three attacks, using Searing Fork or Hurl Flame in any\
      \ combination. It can replace one attack with a use of Infernal Tail."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +10, reach 10 ft. *Hit:* 15 (2d8 + 6) Piercing\
      \ damage plus 9 (2d8) Fire damage."
    "name": "Searing Fork"
  - "desc": "*Ranged Attack Roll:* +8, range 150 ft. *Hit:* 26 (5d8 + 4) Fire\
      \ damage. If the target is a flammable object that isn't being worn or carried,\
      \ it starts [burning](3.%20Mechanics/CLI/traps-hazards/burning-xphb.md)."
    "name": "Hurl Flame"
  - "desc": "*Dexterity Saving Throw:* DC 17, one creature the devil can see within\
      \ 10 feet. *Failure:* 10 (1d8 + 6) Necrotic damage, and the target receives\
      \ an infernal wound if it doesn't have one. While wounded, the target loses\
      \ 10 (3d6) [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ at the start of each of its turns. The wound closes after 1 minute, after\
      \ a spell restores [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ to the target, or after the target or a creature within 5 feet of it takes\
      \ an action to stanch the wound, doing so by succeeding on a DC 17 Wisdom ([Medicine](3.%20Mechanics/CLI/rules/skills.md#Medicine))\
      \ check."
    "name": "Infernal Tail"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/horned-devil-xmm.webp"
```
^statblock

## Environment

planar, nine hells