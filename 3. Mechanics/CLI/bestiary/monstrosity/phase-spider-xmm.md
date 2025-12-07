---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/ethereal
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Phase Spider
---
# [Phase Spider](3. Mechanics\CLI\bestiary\monstrosity/phase-spider-xmm.md)
*Source: Monster Manual (2024) p. 239. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Phase Spider

*Plane-Shifting Arachnid Ambusher*

- **Habitat.** Desert, Forest, Grassland, Hill, Planar (Ethereal Plane), Underdark, Urban  
- **Treasure.** Any  

Phase spiders appear out of nowhere to attack, then vanish just as swiftly. These horse-size, magical arachnids are endemic to the Ethereal Plane. From vaporous lairs, they peer through the Border Ethereal into the Material Plane. When they detect prey, phase spiders draw close and then shift or "phase" to the Material Plane to attack. They shift between planes of existence and attack from unexpected directions until they overcome their prey or are forced to retreat.

Phase spiders are more intelligent than mundane spiders, but most are cowards. They usually flee if they're outnumbered by creatures capable of seeing them on the Ethereal Plane or pursuing them there. They make exceptions for ghosts and similar spirits, which phase spiders gain sustenance from and pursue as favored prey.

> [!quote] A quote from Marcus Wands, Doubtful Authority  
> 
> Some sages say you unknowingly occupy the same ethereally coterminous point as a phase spider an average of four times each year.


```statblock
"name": "Phase Spider (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "7d10 + 7"
"modifier": !!int "3"
"stats":
  - !!int "15"
  - !!int "16"
  - !!int "12"
  - !!int "6"
  - !!int "10"
  - !!int "6"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": ""
"cr": "3"
"traits":
  - "desc": "The spider can see 60 feet into the Ethereal Plane while on the Material\
      \ Plane and vice versa."
    "name": "Ethereal Sight"
  - "desc": "The spider can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The spider ignores movement restrictions caused by webs, and the spider\
      \ knows the location of any other creature in contact with the same web."
    "name": "Web Walker"
"actions":
  - "desc": "The spider makes two Bite attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 8 (1d10 + 3) Piercing\
      \ damage plus 9 (2d8) Poison damage. If this damage reduces the target to\
      \ 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md),\
      \ the target becomes [Stable](3.%20Mechanics/CLI/rules/variant-rules/stable-xphb.md),\
      \ and it has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition for 1 hour. While [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
      \ the target also has the [Paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ condition."
    "name": "Bite"
"bonus_actions":
  - "desc": "The spider teleports from the Material Plane to the Ethereal Plane or\
      \ vice versa."
    "name": "Ethereal Jaunt"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/phase-spider-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland, hill, planar, ethereal, underdark, urban