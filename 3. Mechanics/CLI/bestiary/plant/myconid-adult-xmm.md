---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Myconid Adult
---
# [Myconid Adult](3. Mechanics\CLI\bestiary\plant/myconid-adult-xmm.md)
*Source: Monster Manual (2024) p. 223*  

Myconid adults defend their territories and other myconids from invaders.

## Myconids

*Keepers of the Spore*

- **Habitat.** Underdark  
- **Treasure.** Any  

Myconids dwell in remote Underdark reaches overgrown with molds and mushrooms. These ambulatory fungal creatures tend to their sanctuaries and avoid becoming embroiled in the conflicts of other creatures. They use specialized spores to communicate, to alert one another to danger, and to defend themselves. When myconids encounter others beings, they use mind-linking spores to allow nearby creatures to telepathically share thoughts. Nevertheless, myconids' goals remain mysterious to most non-fungal creatures.

```statblock
"name": "Myconid Adult (XMM)"
"size": "Medium"
"type": "plant"
"alignment": "Lawful Neutral"
"ac": !!int "12"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"modifier": !!int "0"
"stats":
  - !!int "10"
  - !!int "10"
  - !!int "12"
  - !!int "10"
  - !!int "13"
  - !!int "7"
"speed": "20 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 11"
"languages": "telepathy 240 ft."
"cr": "1/2"
"traits":
  - "desc": "While in sunlight, the myconid has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on [D20 Tests](3.%20Mechanics/CLI/rules/variant-rules/d20-test-xphb.md). The\
      \ myconid dies if it spends more than 1 hour in sunlight."
    "name": "Sun Sickness"
"actions":
  - "desc": "*Melee Attack Roll:* +2, reach 5 ft. *Hit:* 4 (1d8) Bludgeoning damage\
      \ plus 3 (1d6) Poison damage."
    "name": "Slam"
  - "desc": "*Constitution Saving Throw:* DC 11, one creature the myconid can see\
      \ within 10 feet. *Failure:* The target has the [Stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned)\
      \ condition and repeats the save at the end of each of its turns, ending the\
      \ effect on itself on a success. After 1 minute, it succeeds automatically."
    "name": "Pacifying Spores (1/Day)"
  - "desc": "The myconid expels spores in a 30-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from itself. Creatures in that area with an Intelligence score\
      \ of 2 or higher that aren't Constructs, Elementals, or Undead gain telepathy\
      \ with a range of 30 feet for 1 hour."
    "name": "Rapport Spores"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/plant/token/myconid-adult-xmm.webp"
```
^statblock

## Environment

underdark