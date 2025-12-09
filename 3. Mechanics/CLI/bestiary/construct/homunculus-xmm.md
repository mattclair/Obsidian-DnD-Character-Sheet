---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Homunculus
---
# [Homunculus](3. Mechanics\CLI\bestiary\construct/homunculus-xmm.md)
*Source: Monster Manual (2024) p. 172. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Homunculus

*Winged Servant Given Magical Life*

- **Habitat.** Any  
- **Treasure.** None  

A mage can create a cat-sized, obedient assistant called a homunculus through a ritual that uses the mage's blood. Each homunculus shares a telepathic bond with the mage who created it and loyally serves its creator. A homunculus is reduced to inert material if its creator dies.

A homunculus's appearance reflects its creator's tastes. Roll on or choose a result from the Homunculus Features table to inspire a homunculus's form.

**Homunculus Features**

| dice: 1d8 | The Homunculus Has Features That Are... |
|-----------|-----------------------------------------|
| 1 | Bat-like with tattered wings. |
| 2 | Made of soft metal and delicate gears. |
| 3 | Marked with its creator's symbol. |
| 4 | Similar to those of a winged humanoid. |
| 5 | Sprouting flowers and leaves. |
| 6 | Suggestive of its creator's appearance. |
| 7 | Underdeveloped and fleshy with beady eyes. |
| 8 | Woven and patchwork, like a well-loved toy. |
^homunculus-features

```statblock
"name": "Homunculus (XMM)"
"size": "Tiny"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "4"
"hit_dice": "1d4 + 2"
"modifier": !!int "2"
"stats":
  - !!int "4"
  - !!int "15"
  - !!int "14"
  - !!int "10"
  - !!int "10"
  - !!int "7"
"speed": "20 ft., fly 40 ft."
"saves":
  - "wisdom": !!int "2"
  - "charisma": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "understands Common plus one other language but can't speak"
"cr": "0"
"traits":
  - "desc": "While the homunculus is on the same plane of existence as its master,\
      \ the two of them can communicate telepathically with each other."
    "name": "Telepathic Bond"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 1 Piercing damage, and\
      \ the target is subjected to the following effect. *Constitution Saving Throw:*\
      \ DC 12. *Failure:* The target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the end of the homunculus's next turn. *By 5Th Failure:* The\
      \ target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition for 1 minute. While [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
      \ the target has the [Unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ condition, which ends early if the target takes any damage."
    "name": "Bite"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/construct/token/homunculus-xmm.webp"
```
^statblock

## Environment

any