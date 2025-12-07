---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/upper
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Sphinx of Wonder
---
# [Sphinx of Wonder](3. Mechanics\CLI\bestiary\celestial/sphinx-of-wonder-xmm.md)
*Source: Monster Manual (2024) p. 291, Player's Handbook (2024) p. 357. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

A sphinx of wonder is brightly feathered and the size of a lion cub. One comes into being every time a unique idea is conceived on the Material Plane. Each sphinx of wonder is fascinated by a particular type of story or field of study, and it learns all it can about that topic. It bears a unique sigil on its forehead that suggests the type of knowledge that fascinates it. Sometimes, a sphinx of wonder forms a bond with a mortal scholar and aids them in their research.

## Sphinxes

*Collectors and Keepers of Secrets*

- **Habitat.** Desert, Planar (Upper Planes)  
- **Treasure.** [Arcana](3.%20Mechanics/CLI/tables/random-magic-items-arcana.md)  

Sphinxes protect the secrets of the multiverse. Formed from the spirits of sages and explorers, sphinxes know the power of truth and the importance of preserving it. They share their wisdom only with those who prove themselves wise or overcome tests of worthiness, such as riddles or battles with dangerous beasts. Through their existences, sphinxes might change form as they gain more nuanced understanding of cosmic enigmas.

### Sphinx Lairs

Sphinxes typically dwell in places that hold great knowledge or prophetic magic.

> [!quote]  
> 
> Round she is, yet flat as a board
> 
> Altar of the Lupine Lords
> 
> Jewel on black velvet, pearl in the sea
> 
> Unchanged but e'erchanging eternally

> [!note]
> Answer to the riddle of White Plume Mountain: The Moon.

```statblock
"name": "Sphinx of Wonder (XMM)"
"size": "Tiny"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "13"
"hp": !!int "24"
"hit_dice": "7d4 + 7"
"modifier": !!int "3"
"stats":
  - !!int "6"
  - !!int "17"
  - !!int "13"
  - !!int "15"
  - !!int "12"
  - !!int "11"
"speed": "20 ft., fly 40 ft."
"skillsaves":
  - "name": "[Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+4"
  - "name": "[Religion](3.%20Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+4"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "necrotic, psychic, radiant"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Celestial, Common"
"cr": "1"
"traits":
  - "desc": "The sphinx has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 5 (1d4 + 3) Slashing\
      \ damage plus 7 (2d6) Radiant damage."
    "name": "Rend"
"reactions":
  - "desc": "Trigger: The sphinx or another creature within 30 feet makes an ability\
      \ check or a saving throw. _Response:_ The sphinx adds 2 to the roll."
    "name": "Burst of Ingenuity (2/Day)"
"source":
  - "XMM"
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/celestial/token/sphinx-of-wonder-xmm.webp"
```
^statblock

## Environment

desert, planar, upper