---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Galeb Duhr
---
# [Galeb Duhr](3. Mechanics\CLI\bestiary\elemental/galeb-duhr-xmm.md)
*Source: Monster Manual (2024) p. 127*  

## Galeb Duhr

*Eyes and Ears of the Earth*

- **Habitat.** Hill, Mountain  
- **Treasure.** Any  

Beings of living rock, galeb duhr seek harmony with the earth and give voice to the vibrations of stone. Their rocky bodies have limbs and facial features accented by gems, ores, and other minerals found in the surrounding earth.

Galeb duhr are effectively immortal, with lifespans similar in length to mountains. They don't experience time or perceive danger as shorter-lived species do. Galeb duhr avoid danger by hiding from other creatures. When they do reveal themselves, they speak and act ponderously, but they often know much of the surrounding land and secrets within the earth. When motivated to action, galeb duhr slam into foes and animate nearby boulders to do the same.

Some mountain dwellers view galeb duhr as aloof allies and might entrust these long-lived beings with secrets or treasures for future generations. Others speak of galeb duhr songs, barely audible harmonizations by groups of galeb duhr that are said to influence earthquakes and volcanic eruptions.

```statblock
"name": "Galeb Duhr (XMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "16"
"hp": !!int "123"
"hit_dice": "13d8 + 65"
"modifier": !!int "2"
"stats":
  - !!int "20"
  - !!int "14"
  - !!int "20"
  - !!int "11"
  - !!int "12"
  - !!int "11"
"speed": "15 ft. (30 ft. when rolling, 60 ft. rolling downhill)"
"damage_immunities": "poison"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., tremorsense\
  \ 60 ft., passive Perception 11"
"languages": "Primordial (Terran)"
"cr": "6"
"actions":
  - "desc": "*Melee Attack Roll:* +8, reach 5 ft. *Hit:* 12 (2d6 + 5) Bludgeoning\
      \ damage. If the target is a Large or smaller creature and the galeb duhr moved\
      \ 20+ feet straight toward it immediately before the hit, the target takes an\
      \ extra 7 (2d6) Bludgeoning damage and has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Avalanche Slam"
  - "desc": "The galeb duhr magically animates one or two boulders it can see within\
      \ 60 feet of itself. Each boulder uses the Galeb Duhr stat block, except it\
      \ has Intelligence and Charisma scores of 1 and lacks this action. The boulder\
      \ takes its turn immediately after the galeb duhr on the same [Initiative](3.%20Mechanics/CLI/rules/variant-rules/initiative-xphb.md)\
      \ count, and it obeys the galeb duhr. A boulder remains animate for 1 minute\
      \ or until it or the galeb duhr dies."
    "name": "Animate Boulders (1/Day)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/elemental/token/galeb-duhr-xmm.webp"
```
^statblock

## Environment

hill, mountain