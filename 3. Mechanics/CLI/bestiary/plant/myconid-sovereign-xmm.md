---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Myconid Sovereign
---
# [Myconid Sovereign](3. Mechanics\CLI\bestiary\plant/myconid-sovereign-xmm.md)
*Source: Monster Manual (2024) p. 223*  

Myconid sovereigns resemble towering myconid adults with elaborate fungal growths. They direct their lesser kin and see to the health and growth of vast fungal blooms.

## Myconids

*Keepers of the Spore*

- **Habitat.** Underdark  
- **Treasure.** Any  

Myconids dwell in remote Underdark reaches overgrown with molds and mushrooms. These ambulatory fungal creatures tend to their sanctuaries and avoid becoming embroiled in the conflicts of other creatures. They use specialized spores to communicate, to alert one another to danger, and to defend themselves. When myconids encounter others beings, they use mind-linking spores to allow nearby creatures to telepathically share thoughts. Nevertheless, myconids' goals remain mysterious to most non-fungal creatures.

```statblock
"name": "Myconid Sovereign (XMM)"
"size": "Large"
"type": "plant"
"alignment": "Lawful Neutral"
"ac": !!int "13"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"modifier": !!int "0"
"stats":
  - !!int "12"
  - !!int "10"
  - !!int "14"
  - !!int "13"
  - !!int "15"
  - !!int "10"
"speed": "30 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 12"
"languages": "telepathy 240 ft."
"cr": "2"
"traits":
  - "desc": "While in sunlight, the myconid has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on [D20 Tests](3.%20Mechanics/CLI/rules/variant-rules/d20-test-xphb.md). The\
      \ myconid dies if it spends more than 1 hour in sunlight."
    "name": "Sun Sickness"
"actions":
  - "desc": "The myconid makes one Slam attack and uses Pacifying Spores."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 6 (2d4 + 1) Bludgeoning\
      \ damage plus 5 (2d4) Poison damage."
    "name": "Slam"
  - "desc": "The myconid releases spores at a Medium or Small corpse within 5 feet\
      \ of it that wasn't a Construct or an Undead. In 24 hours, the corpse rises\
      \ as a [Myconid Spore Servant](3.%20Mechanics/CLI/bestiary/plant/myconid-spore-servant-xmm.md).\
      \ The corpse stays animate for 1d4 + 1 weeks or until destroyed, and it can't\
      \ be animated again in this way."
    "name": "Animating Spores (3/Day)"
  - "desc": "*Constitution Saving Throw:* DC 12, one creature the myconid can see\
      \ within 10 feet. *Failure:* The target has the [Stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned)\
      \ condition and repeats the save at the end of each of its turns, ending the\
      \ effect on itself on a success. After 1 minute, it succeeds automatically."
    "name": "Pacifying Spores"
  - "desc": "The myconid expels spores in a 30-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from itself. Creatures in that area with an Intelligence score\
      \ of 2 or higher that aren't Constructs, Elementals, or Undead gain telepathy\
      \ with a range of 30 feet for 1 hour."
    "name": "Rapport Spores"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/plant/token/myconid-sovereign-xmm.webp"
```
^statblock

## Environment

underdark