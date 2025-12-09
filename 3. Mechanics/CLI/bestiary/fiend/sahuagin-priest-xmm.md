---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Sahuagin Priest
---
# [Sahuagin Priest](3. Mechanics\CLI\bestiary\fiend/sahuagin-priest-xmm.md)
*Source: Monster Manual (2024) p. 265*  

Sahuagin priests serve the will of Sekolah or other fiendish masters. They direct and support other sahuagin, and they consider every combatant that falls in battle—whether enemy or ally—a sacrifice to their fierce deities.

## Sahuagin

*Ravagers from Beneath the Waves*

- **Habitat.** Coastal, Underwater  
- **Treasure.** Any  

Sahuagin are fiendish terrors that prey on creatures above and below the water. Called "sea devils" by residents of coastal communities, sahuagin are ruthless raiders. They ransack ships, fishing villages, and undersea communities to slake their bloodthirst, claim treasure, and make sacrifices to their vicious deity—the sharklike god Sekolah.

Sahuagin constantly war on any peoples living near their territory. Merfolk and other aquatic folk bear the brunt of these attacks, but sahuagin also hunt air-breathers who sail over or swim through the waters the sea devils claim. Sahuagin often attack alongside sharks, which they can telepathically command.

> [!quote] A quote from Tiguran Maremrynd  
> 
> When a sahuagin comes at you, it doesn't seem to be living until it bites you. Then the thing's black eyes turn red as hellfire and the waves foam crimson. Then comes the screaming.


```statblock
"name": "Sahuagin Priest (XMM)"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "38"
"hit_dice": "7d8 + 7"
"modifier": !!int "0"
"stats":
  - !!int "13"
  - !!int "11"
  - !!int "12"
  - !!int "12"
  - !!int "14"
  - !!int "13"
"speed": "30 ft., swim 40 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Religion](3.%20Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+3"
"damage_resistances": "acid, cold"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 16"
"languages": "Sahuagin"
"cr": "2"
"traits":
  - "desc": "The sahuagin has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on attack rolls against any creature that doesn't have all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)."
    "name": "Blood Frenzy"
  - "desc": "The sahuagin can breathe air and water, but it must be submerged at least\
      \ once every 4 hours to avoid suffocating outside water."
    "name": "Limited Amphibiousness"
  - "desc": "The sahuagin can magically control sharks within 120 feet of itself,\
      \ using a special telepathy."
    "name": "Shark Telepathy"
"actions":
  - "desc": "The sahuagin makes two Spectral Jaws attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +4, reach 5 ft. or range 120 ft. *Hit:*\
      \ 11 (2d8 + 2) Force damage."
    "name": "Spectral Jaws"
  - "desc": "The sahuagin casts one of the following spells, requiring no Material\
      \ components and using Wisdom as the spellcasting ability (spell save DC 12):\n\
      \n**At will:** [Thaumaturgy](3.%20Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\
      \n**2/day each:** [Hold Person](3.%20Mechanics/CLI/spells/hold-person-xphb.md),\
      \ [Tongues](3.%20Mechanics/CLI/spells/tongues-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The sahuagin casts [Bless](3.%20Mechanics/CLI/spells/bless-xphb.md) or\
      \ [Healing Word](3.%20Mechanics/CLI/spells/healing-word-xphb.md), using the\
      \ same spellcasting ability as Spellcasting.\n"
    "name": "Fiendish Aid (2/Day)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/sahuagin-priest-xmm.webp"
```
^statblock

## Environment

coastal, underwater