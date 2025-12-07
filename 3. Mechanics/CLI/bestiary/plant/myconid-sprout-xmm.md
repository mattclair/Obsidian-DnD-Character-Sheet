---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Myconid Sprout
---
# [Myconid Sprout](3. Mechanics\CLI\bestiary\plant/myconid-sprout-xmm.md)
*Source: Monster Manual (2024) p. 222*  

Myconid sprouts tend to their fungal homes and watch for trespassers.

## Myconids

*Keepers of the Spore*

- **Habitat.** Underdark  
- **Treasure.** Any  

Myconids dwell in remote Underdark reaches overgrown with molds and mushrooms. These ambulatory fungal creatures tend to their sanctuaries and avoid becoming embroiled in the conflicts of other creatures. They use specialized spores to communicate, to alert one another to danger, and to defend themselves. When myconids encounter others beings, they use mind-linking spores to allow nearby creatures to telepathically share thoughts. Nevertheless, myconids' goals remain mysterious to most non-fungal creatures.

```statblock
"name": "Myconid Sprout (XMM)"
"size": "Small"
"type": "plant"
"alignment": "Lawful Neutral"
"ac": !!int "10"
"hp": !!int "3"
"hit_dice": "1d6"
"modifier": !!int "0"
"stats":
  - !!int "8"
  - !!int "10"
  - !!int "10"
  - !!int "8"
  - !!int "11"
  - !!int "5"
"speed": "10 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 10"
"languages": "telepathy 240 ft."
"cr": "0"
"traits":
  - "desc": "While in sunlight, the myconid has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on [D20 Tests](3.%20Mechanics/CLI/rules/variant-rules/d20-test-xphb.md). The\
      \ myconid dies if it spends more than 1 hour in sunlight."
    "name": "Sun Sickness"
"actions":
  - "desc": "*Melee Attack Roll:* +1, reach 5 ft. *Hit:* 1 (1d4 - 1) Bludgeoning\
      \ damage plus 2 (1d4) Poison damage."
    "name": "Slam"
  - "desc": "The myconid expels spores in a 30-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from itself. Creatures in that area with an Intelligence score\
      \ of 2 or higher that aren't Constructs, Elementals, or Undead gain telepathy\
      \ with a range of 30 feet for 1 hour."
    "name": "Rapport Spores"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/plant/token/myconid-sprout-xmm.webp"
```
^statblock

## Environment

underdark