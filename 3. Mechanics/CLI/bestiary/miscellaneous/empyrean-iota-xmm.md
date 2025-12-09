---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type//titan
statblock: inline
statblock-link: "#^statblock"
aliases:
- Empyrean Iota
---
# [Empyrean Iota](3. Mechanics\CLI\bestiary\miscellaneous/empyrean-iota-xmm.md)
*Source: Monster Manual (2024) p. 112*  

Empyrean iotas are the thoughts, memories, or indirect attentions of deities personified and given a measure of autonomy. Resembling floating glyphs, motes of color, icons of divinity, or stranger shapes, these beings are messengers of the gods and aides to those gods' servants. Iotas have their own knowledge and personalities, though they might know little more than the realms and wishes of their creators.

## Empyreans

*Scions of the Gods*

- **Habitat.** Any  
- **Treasure.** [Relics](3.%20Mechanics/CLI/tables/random-magic-items-relics.md)  

Empyreans are the spawn of deities. While not gods themselves, they possess divine influence and powers related to their divine parents. Some empyreans are near-demigods with fantastic might and the power to reshape mortal lives. Others are little more than divine thoughts or moments of immortal attention made manifest. Whether empyreans are idealized beings or vestiges of divinity, their appearances are influenced by their creators. Roll on or choose a result from the Empyrean Influences table to inspire what aspects of an empyrean's heritage manifest in its physical form.

**Empyrean Influences**

| dice: 1d6 | The Empyrean Has Features That Are... |
|-----------|---------------------------------------|
| 1 | Balanced, naturalistic, or suggestive of watching eyes. |
| 2 | Colorful, shadowy, or fluid or that vary depending on the viewer. |
| 3 | Comforting and gentle or that remind viewers of pleasant memories. |
| 4 | Disconnected parts, visible thoughts, or errant shapes. |
| 5 | Machinelike, stoic, symmetrical, or suggestive of judgment. |
| 6 | Morbid, menacing, or monstrous or that embody the viewer's fears. |
^empyrean-influences

> [!quote] A quote from Kopoha, Scion of Storms  
> 
> One day I might be the god of storms—mind countless followers, answer prayers, change whole worlds—but, until then, I do what I please.


```statblock
"name": "Empyrean Iota (XMM)"
"size": "Medium"
"subtype": "titan"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "2"
"stats":
  - !!int "1"
  - !!int "14"
  - !!int "10"
  - !!int "15"
  - !!int "16"
  - !!int "16"
"speed": "5 ft., fly 30 ft. (hover)"
"skillsaves":
  - "name": "[History](3.%20Mechanics/CLI/rules/skills.md#History)"
    "desc": "+4"
  - "name": "[Insight](3.%20Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+5"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[truesight](3.%20Mechanics/CLI/rules/senses.md#Truesight) 30 ft., passive\
  \ Perception 15"
"languages": "all"
"cr": "1"
"traits":
  - "desc": "The empyrean can move through other creatures and objects as if they\
      \ were [Difficult Terrain](3.%20Mechanics/CLI/rules/variant-rules/difficult-terrain-xphb.md).\
      \ It takes 5 (1d10) Force damage if it ends its turn inside an object."
    "name": "Incorporeal Movement"
  - "desc": "The empyrean has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee  or Ranged Attack Roll:* +5, reach 5 ft. or range 30 ft. *Hit:*\
      \ 7 (1d8 + 3) Necrotic or Radiant damage (empyrean's choice)."
    "name": "Otherworldly Strike"
  - "desc": "The empyrean casts one of the following spells, requiring no Material\
      \ components and using Wisdom as the spellcasting ability:\n\n**1/day each:**\
      \ [Bless](3.%20Mechanics/CLI/spells/bless-xphb.md), [Lesser Restoration](3.%20Mechanics/CLI/spells/lesser-restoration-xphb.md)\
      \ (as an action)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The empyrean casts [Healing Word](3.%20Mechanics/CLI/spells/healing-word-xphb.md),\
      \ using the same spellcasting ability as Spellcasting.\n"
    "name": "Healing Word (1/Day)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/miscellaneous/token/empyrean-iota-xmm.webp"
```
^statblock

## Environment

any