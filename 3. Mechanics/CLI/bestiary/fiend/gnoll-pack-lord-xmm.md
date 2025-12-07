---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gnoll Pack Lord
---
# [Gnoll Pack Lord](3. Mechanics\CLI\bestiary\fiend/gnoll-pack-lord-xmm.md)
*Source: Monster Manual (2024) p. 140*  

Rising above other gnolls with their viciousness and physical prowess, gnoll pack lords terrorize weaker gnolls into their service. These brutes drive other gnolls to acts of great violence, then claim the best of their servants' spoils.

## Gnolls

*Fiends in Feral Flesh*

- **Habitat.** Desert, Forest, Grassland, Hill  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md), Individual  

The first gnolls arose from hyenas that fed on flesh tainted by the Abyss. Their corruption and violence delighted the demon lord Yeenoghu, who encouraged their numbers and spread them across the multiverse. Ever since, gnolls have been the cackling servants of Yeenoghu, existing to cause ruin and to feast on what remains.

> [!quote] A quote from Iggwilv  
> 
> Yeenoghu claims gnolls not as his brood but as maggots purposefully released to infest a despised carcass. They are a pernicious rot the Beast of Butchery spreads across mortal worlds. Whatever they once were, they were remade and are now his.


```statblock
"name": "Gnoll Pack Lord (XMM)"
"size": "Medium"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"modifier": !!int "4"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "8"
  - !!int "11"
  - !!int "9"
"speed": "30 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Gnoll"
"cr": "2"
"actions":
  - "desc": "The gnoll makes two attacks, using Bone Whip or Bone Javelin in any combination,\
      \ and it uses Incite Rampage if available."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 10 ft. *Hit:* 8 (2d4 + 3) Slashing\
      \ damage."
    "name": "Bone Whip"
  - "desc": "*Ranged Attack Roll:* +5, range 30/120 ft. *Hit:* 7 (1d8 + 3) Piercing\
      \ damage."
    "name": "Bone Javelin"
  - "desc": "The gnoll targets another creature it can see within 60 feet of itself\
      \ that has the Rampage [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md).\
      \ The target can take a [Reaction](3.%20Mechanics/CLI/rules/variant-rules/reaction-xphb.md)\
      \ to make one melee attack."
    "name": "Incite Rampage (Recharge 5-6)"
"bonus_actions":
  - "desc": "Immediately after dealing damage to a creature that is already [Bloodied](3.%20Mechanics/CLI/rules/conditions.md#Bloodied),\
      \ the gnoll moves up to half its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md),\
      \ and it makes one Bone Whip attack."
    "name": "Rampage (2/Day)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/gnoll-pack-lord-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland, hill