---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Remorhaz
---
# [Remorhaz](3. Mechanics\CLI\bestiary\monstrosity/remorhaz-xmm.md)
*Source: Monster Manual (2024) p. 258. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Full-grown remorhazes are single-minded ambush predators. They attempt to bite prey and trap it against their searing bodies, then swallow their meal whole. Remorhazes eat as much as they can, since they might go months without feeding.

## Remorhazes

*Super-Heated Arctic Arthropods*

- **Habitat.** Arctic  
- **Treasure.** None  

Remorhazes are centipede-like terrors that burrow through snow and ice to ambush smaller creatures that trespass in their frozen territories.

```statblock
"name": "Remorhaz (XMM)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "195"
"hit_dice": "17d12 + 85"
"modifier": !!int "5"
"stats":
  - !!int "24"
  - !!int "13"
  - !!int "21"
  - !!int "4"
  - !!int "10"
  - !!int "5"
"speed": "40 ft., burrow 30 ft."
"damage_immunities": "cold, fire"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., tremorsense\
  \ 60 ft., passive Perception 10"
"languages": ""
"cr": "11"
"traits":
  - "desc": "At the end of each of the remorhaz's turns, each creature in a 5-foot\
      \ [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the remorhaz takes 16 (3d10) Fire damage."
    "name": "Heat Aura"
"actions":
  - "desc": "*Melee Attack Roll:* +11, reach 10 ft. *Hit:* 18 (2d10 + 7) Piercing\
      \ damage plus 14 (4d6) Fire damage. If the target is a Large or smaller creature,\
      \ it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled) condition\
      \ (escape DC 17), and it has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition until the grapple ends."
    "name": "Bite"
"bonus_actions":
  - "desc": "*Strength Saving Throw:* DC 19, one Large or smaller creature [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the remorhaz (it can have up to two creatures swallowed at a time). *Failure:*\
      \ The target is swallowed by the remorhaz, and the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition ends. A swallowed creature has the [Blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded)\
      \ and [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) conditions,\
      \ it has [Total Cover](3.%20Mechanics/CLI/rules/variant-rules/cover-xphb.md)\
      \ against attacks and other effects outside the remorhaz, and it takes 10 (3d6)\
      \ Acid damage plus 10 (3d6) Fire damage at the start of each of the remorhaz's\
      \ turns.\n\nIf the remorhaz takes 30 damage or more on a single turn from a\
      \ creature inside it, the remorhaz must succeed on a DC 15 Constitution saving\
      \ throw at the end of that turn or regurgitate all swallowed creatures, each\
      \ of which falls in a space within 5 feet of the remorhaz and has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition. If the remorhaz dies, any swallowed creature no longer has the\
      \ [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) condition\
      \ and can escape from the corpse by using 15 feet of movement, exiting [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Swallow"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/remorhaz-xmm.webp"
```
^statblock

## Environment

arctic