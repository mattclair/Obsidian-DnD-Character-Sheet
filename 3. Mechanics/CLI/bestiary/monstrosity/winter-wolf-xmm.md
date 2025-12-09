---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Winter Wolf
---
# [Winter Wolf](3. Mechanics\CLI\bestiary\monstrosity/winter-wolf-xmm.md)
*Source: Monster Manual (2024) p. 334. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Winter Wolf

*Cold-hearted Pack Hunter*

- **Habitat.** Arctic  
- **Treasure.** None  

Winter wolves are horse-size, supernatural predators that prowl frigid wildernesses in deadly packs. With their great size and chilling breath, winter wolves pursue megafauna, arctic travelers, and any other creatures they catch on the tundra.

Winter wolves are more intelligent than natural wolves and can speak. Most are predominantly concerned with their next meal, and while they might converse with other creatures in exchange for food, few concern themselves with long-term bargains or keeping their word unless they have something to gain. Winter wolves often hunt alongside frost giants that indulge them with frequent hunts and reliable meals.

> [!quote] A quote from Koran, Winter Wolf  
> 
> Snowdrifts, driving hail, and wind fierce enough to strip the hairless skin off your bones—you lot have been through it all. But good news, there's a town full of warm hearths right over this rise.
> 
> You'll never reach it, but at least your last thoughts will be warm.


```statblock
"name": "Winter Wolf (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "14"
  - !!int "7"
  - !!int "12"
  - !!int "8"
"speed": "50 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "cold"
"senses": "passive Perception 15"
"languages": "Common, Giant"
"cr": "3"
"traits":
  - "desc": "The wolf has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the wolf's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 11 (2d6 + 4) Piercing\
      \ damage. If the target is a Large or smaller creature, it has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Bite"
  - "desc": "*Constitution Saving Throw:* DC 12, each creature in a 15-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 18 (4d8) Cold damage. *Success:* Half damage."
    "name": "Cold Breath (Recharge 5-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/winter-wolf-xmm.webp"
```
^statblock

## Environment

arctic