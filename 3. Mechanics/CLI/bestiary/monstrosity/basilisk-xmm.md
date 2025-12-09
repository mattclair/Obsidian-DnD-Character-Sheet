---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Basilisk
---
# [Basilisk](3. Mechanics\CLI\bestiary\monstrosity/basilisk-xmm.md)
*Source: Monster Manual (2024) p. 32. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Basilisk

*Reptilian Guardian with a Petrifying Gaze*

- **Habitat.** Mountain, Underdark  
- **Treasure.** Any  

Basilisks are ponderous predators with eight clawed legs, crystalline spines, and mighty jaws. Rather than chasing prey, they use their supernatural gaze to turn creatures to stone and then consume these victims at their leisure. While basilisks are most comfortable in subterranean lairs, many are captured and kept by unscrupulous folk seeking guardians for their treasures.

The remains of [Petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified) creatures litter the area where a basilisk hunts. These might be mundane creatures or more unusual beings that had dire encounters with a basilisk. Roll on or choose a result from the [Petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified) Basilisk Victims table to inspire the statues that might appear in a basilisk's hunting grounds. There is a 50 percent chance that any of these statues are missing limbs or broken into pieces.

> [!quote] A quote from X the Mystic's  
> 
> Rule 4: No one carves statues of frightened warriors. If you see one, keep your eyes closed and your ears open.

**Petrified Basilisk Victims**

| dice: 1d8 | A Basilisk Used Its Gaze to Petrify... |
|-----------|----------------------------------------|
| 1 | An adventurer with an ornate key hanging around their neck. |
| 2 | Animals like bats, bears, deer, or goats. |
| 3 | A climber clinging to a stalactite. |
| 4 | Itself using a large mirror or shiny surface. |
| 5 | A mimic disguised as a chest full of treasure. |
| 6 | A monster such as an umber hulk or a troglodyte. |
| 7 | Someone caught in a comic pose or making a regrettable face. |
| 8 | A victim now being used as a nest for insects or other vermin. |
^petrified-basilisk-victims

```statblock
"name": "Basilisk (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "-1"
"stats":
  - !!int "16"
  - !!int "8"
  - !!int "15"
  - !!int "2"
  - !!int "8"
  - !!int "7"
"speed": "20 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 9"
"languages": ""
"cr": "3"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 10 (2d6 + 3) Piercing\
      \ damage plus 7 (2d6) Poison damage."
    "name": "Bite"
"bonus_actions":
  - "desc": "*Constitution Saving Throw:* DC 12, each creature in a 30-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ If the basilisk sees its reflection within the [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md),\
      \ the basilisk must make this save. *1St Failure:* The target has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition and repeats the save at the end of its next turn if it is still\
      \ [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained), ending the\
      \ effect on itself on a success. *2Nd Failure:* The target has the [Petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified)\
      \ condition instead of the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition."
    "name": "Petrifying Gaze (Recharge 4-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/basilisk-xmm.webp"
```
^statblock

## Environment

mountain, underdark