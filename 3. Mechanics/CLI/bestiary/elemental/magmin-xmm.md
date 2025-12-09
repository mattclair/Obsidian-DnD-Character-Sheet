---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/fire
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Magmin
---
# [Magmin](3. Mechanics\CLI\bestiary\elemental/magmin-xmm.md)
*Source: Monster Manual (2024) p. 200. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Magmin

*Reckless Elemental Arsonist*

- **Habitat.** Planar (Elemental Plane of Fire)  
- **Treasure.** None  

Magmins divide all things into two categories: things that are on fire and things that should be on fire. With bodies of flame and magmatic rock, these halfling-size creatures delight in setting fires. They do so not out of malice but out of enthusiasm for primal fire. They don't consider that objects have value beyond kindling or that creatures can be harmed by flames. If such concepts are explained to them, they find the ideas difficult to grasp and don't remember them for long. Rather, they relish every opportunity to set flammable things alight, delighting in igniting paper, wooden structures, and explosives. Magmins are dangerous even in death, since they explode when they're destroyed, their flames igniting combustible materials nearby.

Magmins might be conjured by magic-users to harry foes or might escape the Elemental Plane of Fire through portals or rifts that lead to other realms. They're attracted to places of intense heat, such as volcanoes and rivers of magma. If they can't find such favored conditions, magmins eagerly burn structures or start wildfires to entertain themselves.

```statblock
"name": "Magmin (XMM)"
"size": "Small"
"type": "elemental"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"modifier": !!int "2"
"stats":
  - !!int "7"
  - !!int "15"
  - !!int "12"
  - !!int "8"
  - !!int "11"
  - !!int "10"
"speed": "30 ft."
"damage_immunities": "fire"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Primordial (Ignan)"
"cr": "1/2"
"traits":
  - "desc": "The magmin explodes when it dies. *Dexterity Saving Throw:* DC 11, each\
      \ creature in a 10-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the magmin. *Failure:* 7 (2d6) Fire damage. *Success:*\
      \ Half damage."
    "name": "Death Burst"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 7 (2d4 + 2) Fire damage.\
      \ If the target is a creature or a flammable object that isn't being worn or\
      \ carried, it starts [burning](3.%20Mechanics/CLI/traps-hazards/burning-xphb.md)."
    "name": "Touch"
"bonus_actions":
  - "desc": "The magmin sets itself ablaze or extinguishes its flames. While ablaze,\
      \ the magmin sheds [Bright Light](3.%20Mechanics/CLI/rules/variant-rules/bright-light-xphb.md)\
      \ in a 10-foot radius and [Dim Light](3.%20Mechanics/CLI/rules/variant-rules/dim-light-xphb.md)\
      \ for an additional 10 feet."
    "name": "Ignited Illumination"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/elemental/token/magmin-xmm.webp"
```
^statblock

## Environment

planar, fire