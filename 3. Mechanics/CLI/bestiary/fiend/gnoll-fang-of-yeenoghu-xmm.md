---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gnoll Fang of Yeenoghu
---
# [Gnoll Fang of Yeenoghu](3. Mechanics\CLI\bestiary\fiend/gnoll-fang-of-yeenoghu-xmm.md)
*Source: Monster Manual (2024) p. 141*  

Gnolls possessed by demonic vestiges of the demon lord Yeenoghu, fangs of Yeenoghu direct the chaos of gnoll packs. Along the way, these fanatics seek grisly omens from Yeenoghu and strive to interpret the demon lord's vicious goals.

## Gnolls

*Fiends in Feral Flesh*

- **Habitat.** Desert, Forest, Grassland, Hill  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md), Individual  

The first gnolls arose from hyenas that fed on flesh tainted by the Abyss. Their corruption and violence delighted the demon lord Yeenoghu, who encouraged their numbers and spread them across the multiverse. Ever since, gnolls have been the cackling servants of Yeenoghu, existing to cause ruin and to feast on what remains.

> [!quote] A quote from Iggwilv  
> 
> Yeenoghu claims gnolls not as his brood but as maggots purposefully released to infest a despised carcass. They are a pernicious rot the Beast of Butchery spreads across mortal worlds. Whatever they once were, they were remade and are now his.


```statblock
"name": "Gnoll Fang of Yeenoghu (XMM)"
"size": "Medium"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"modifier": !!int "4"
"stats":
  - !!int "17"
  - !!int "15"
  - !!int "15"
  - !!int "10"
  - !!int "11"
  - !!int "13"
"speed": "30 ft."
"saves":
  - "constitution": !!int "4"
  - "wisdom": !!int "2"
  - "charisma": !!int "3"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Abyssal, Gnoll"
"cr": "4"
"actions":
  - "desc": "The gnoll makes one Bite attack and two Bone Flail attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 6 (1d6 + 3) Piercing\
      \ damage plus 7 (2d6) Poison damage, and the target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the start of the gnoll's next turn."
    "name": "Bite"
  - "desc": "*Melee Attack Roll:* +5, reach 10 ft. *Hit:* 7 (1d8 + 3) Piercing\
      \ damage."
    "name": "Bone Flail"
"bonus_actions":
  - "desc": "Immediately after dealing damage to a creature that is already [Bloodied](3.%20Mechanics/CLI/rules/conditions.md#Bloodied),\
      \ the gnoll moves up to half its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md),\
      \ and it makes one Bite attack."
    "name": "Rampage (2/Day)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/gnoll-fang-of-yeenoghu-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland, hill