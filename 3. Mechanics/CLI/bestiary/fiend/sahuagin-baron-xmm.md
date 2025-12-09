---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Sahuagin Baron
---
# [Sahuagin Baron](3. Mechanics\CLI\bestiary\fiend/sahuagin-baron-xmm.md)
*Source: Monster Manual (2024) p. 265*  

During times of great conflict, Sekolah blesses particularly ruthless sahuagin warriors with increased size and an additional pair of arms, transforming them into sahuagin barons. These boons elevate the recipients' status among their kind, and they become champions or leaders. Sahuagin barons' blood is infused with profane magic capable of searing their enemies and making these foes irresistible targets for other Fiends.

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
"name": "Sahuagin Baron (XMM)"
"size": "Large"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "76"
"hit_dice": "9d10 + 27"
"modifier": !!int "5"
"stats":
  - !!int "19"
  - !!int "15"
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "17"
"speed": "30 ft., swim 50 ft."
"saves":
  - "dexterity": !!int "5"
  - "constitution": !!int "6"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"damage_resistances": "acid, cold"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 17"
"languages": "Sahuagin"
"cr": "5"
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
  - "desc": "The sahuagin makes three Trident attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +7, reach 5 ft. or range 20/60 ft.\
      \ *Hit:* 13 (2d8 + 4) Piercing damage."
    "name": "Trident"
"reactions":
  - "desc": "Trigger: The sahuagin takes Piercing or Slashing damage. _Response—_*Constitution\
      \ Saving Throw:* DC 14, each creature of the sahuagin's choice in a 5-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the sahuagin. *Failure:* 10 (3d6) Acid damage, and the\
      \ target is cursed until it finishes a [Short](3.%20Mechanics/CLI/rules/variant-rules/short-rest-xphb.md)\
      \ or [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).\
      \ While cursed, the target can't benefit from the [Invisible](3.%20Mechanics/CLI/rules/conditions.md#Invisible)\
      \ condition, its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ decreases by 10 feet, and all Fiends within 120 feet of the target can sense\
      \ its location regardless of interposing obstacles."
    "name": "Fiendish Blood"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/sahuagin-baron-xmm.webp"
```
^statblock

## Environment

coastal, underwater