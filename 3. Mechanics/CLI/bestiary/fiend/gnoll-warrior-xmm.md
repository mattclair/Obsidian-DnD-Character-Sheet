---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gnoll Warrior
---
# [Gnoll Warrior](3. Mechanics\CLI\bestiary\fiend/gnoll-warrior-xmm.md)
*Source: Monster Manual (2024) p. 140. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Gnoll warriors crave endless slaughter but quickly grow bored with the prey they kill and the treasures they plunder. Nevertheless, they're enraged by the thought of anyone else having what's theirs, compelling them to ruin what they can't take with them.

## Gnolls

*Fiends in Feral Flesh*

- **Habitat.** Desert, Forest, Grassland, Hill  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md), Individual  

The first gnolls arose from hyenas that fed on flesh tainted by the Abyss. Their corruption and violence delighted the demon lord Yeenoghu, who encouraged their numbers and spread them across the multiverse. Ever since, gnolls have been the cackling servants of Yeenoghu, existing to cause ruin and to feast on what remains.

> [!quote] A quote from Iggwilv  
> 
> Yeenoghu claims gnolls not as his brood but as maggots purposefully released to infest a despised carcass. They are a pernicious rot the Beast of Butchery spreads across mortal worlds. Whatever they once were, they were remade and are now his.


```statblock
"name": "Gnoll Warrior (XMM)"
"size": "Medium"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "27"
"hit_dice": "6d8"
"modifier": !!int "1"
"stats":
  - !!int "14"
  - !!int "12"
  - !!int "11"
  - !!int "6"
  - !!int "10"
  - !!int "7"
"speed": "30 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Gnoll"
"cr": "1/2"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 5 (1d6 + 2) Piercing\
      \ damage."
    "name": "Rend"
  - "desc": "*Ranged Attack Roll:* +3, range 150/600 ft. *Hit:* 6 (1d10 + 1) Piercing\
      \ damage."
    "name": "Bone Bow"
"bonus_actions":
  - "desc": "Immediately after dealing damage to a creature that is already [Bloodied](3.%20Mechanics/CLI/rules/conditions.md#Bloodied),\
      \ the gnoll moves up to half its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md),\
      \ and it makes one Rend attack."
    "name": "Rampage (1/Day)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/gnoll-warrior-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland, hill