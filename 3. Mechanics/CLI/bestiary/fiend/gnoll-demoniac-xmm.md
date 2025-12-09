---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gnoll Demoniac
---
# [Gnoll Demoniac](3. Mechanics\CLI\bestiary\fiend/gnoll-demoniac-xmm.md)
*Source: Monster Manual (2024) p. 141*  

Gnoll demoniacs are berserkers that arise from gnolls who've ritualistically fed on flesh corrupted by the Abyss. Now embodying the ruinous hunger of Yeenoghu, these gnolls throw themselves into battle, heedless of odds or their own survival. Rampaging demoniacs even devour other gnolls in their wild frenzies.

## Gnolls

*Fiends in Feral Flesh*

- **Habitat.** Desert, Forest, Grassland, Hill  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md), Individual  

The first gnolls arose from hyenas that fed on flesh tainted by the Abyss. Their corruption and violence delighted the demon lord Yeenoghu, who encouraged their numbers and spread them across the multiverse. Ever since, gnolls have been the cackling servants of Yeenoghu, existing to cause ruin and to feast on what remains.

> [!quote] A quote from Iggwilv  
> 
> Yeenoghu claims gnolls not as his brood but as maggots purposefully released to infest a despised carcass. They are a pernicious rot the Beast of Butchery spreads across mortal worlds. Whatever they once were, they were remade and are now his.


```statblock
"name": "Gnoll Demoniac (XMM)"
"size": "Medium"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"modifier": !!int "4"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "17"
  - !!int "14"
  - !!int "15"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "strength": !!int "6"
  - "constitution": !!int "6"
  - "wisdom": !!int "5"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": "Abyssal, Common, Gnoll"
"cr": "8"
"actions":
  - "desc": "The gnoll makes two Abyssal Strike attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +6, reach 5 ft. or range 60 ft. *Hit:*\
      \ 20 (5d6 + 3) Poison damage."
    "name": "Abyssal Strike"
  - "desc": "The gnoll conjures a 30-foot [Cube](3.%20Mechanics/CLI/rules/variant-rules/cube-area-of-effect-xphb.md)\
      \ of magical [Darkness](3.%20Mechanics/CLI/rules/variant-rules/darkness-xphb.md)\
      \ originating from a point it can see within 60 feet, which lasts for 1 minute\
      \ or until the gnoll's [Concentration](3.%20Mechanics/CLI/rules/conditions.md#Concentration)\
      \ ends on it. This area is [Difficult Terrain](3.%20Mechanics/CLI/rules/variant-rules/difficult-terrain-xphb.md).\
      \ *Dexterity Saving Throw:* DC 14, any creature that starts its turn in this\
      \ area or enters it for the first time on a turn. *Failure:* 28 (8d6) Necrotic\
      \ damage, and the gnoll or a creature of its choice it can see gains 10 [Temporary\
      \ Hit Points](3.%20Mechanics/CLI/rules/variant-rules/temporary-hit-points-xphb.md).\
      \ *Success:* Half damage only."
    "name": "Hunger of Yeenoghu (Recharge 5-6)"
"bonus_actions":
  - "desc": "Immediately after dealing damage to a creature that is already [Bloodied](3.%20Mechanics/CLI/rules/conditions.md#Bloodied),\
      \ the gnoll moves up to half its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md),\
      \ and it makes one Abyssal Strike attack."
    "name": "Rampage (2/Day)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/gnoll-demoniac-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland, hill