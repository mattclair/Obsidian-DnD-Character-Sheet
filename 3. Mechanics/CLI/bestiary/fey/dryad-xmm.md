---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dryad
---
# [Dryad](3. Mechanics\CLI\bestiary\fey/dryad-xmm.md)
*Source: Monster Manual (2024) p. 107. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Dryad

*Tree-Bound Guardian of Nature*

- **Habitat.** Forest  
- **Treasure.** Any  

Guardians of the woodlands, dryads magically flit from tree to tree and from root to bough, harrying trespassers with tangling vines and thorns. Most of these elusive beings have a special connection with one plant or a natural sanctuary that they protect. Some also share physical similarities with the plants they're most connected to. Dryads might sicken or die if their plant or sanctuary is destroyed, recovering only if it is healed or magically replaced. Roll on or choose an option from the Dryad Sanctuaries table to inspire a dryad's bond.

**Dryad Sanctuaries**

| dice: 1d6 | The Dryad Dwells in and Protects... |
|-----------|-------------------------------------|
| 1 | An acres-large clonal colony—a stand of identical, interconnected trees. |
| 2 | A fortress-like tree, like a baobab or sequoia. |
| 3 | A living lock—a plant that seals evil below or blocks the path to a dungeon. |
| 4 | A lonely tree that stands atop a windswept mountain or amid a [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified) forest. |
| 5 | A plant with magic fruit or remarkable seeds. |
| 6 | A shambling mound or treant that the dryad lives in or around as a Fey symbiote. |
^dryad-sanctuaries

```statblock
"name": "Dryad (XMM)"
"size": "Medium"
"type": "fey"
"alignment": "Neutral"
"ac": !!int "16"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "1"
"stats":
  - !!int "10"
  - !!int "12"
  - !!int "11"
  - !!int "14"
  - !!int "15"
  - !!int "18"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Elvish, Sylvan"
"cr": "1"
"traits":
  - "desc": "The dryad has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The dryad can communicate with Beasts and Plants as if they shared a\
      \ language."
    "name": "Speak with Beasts and Plants"
"actions":
  - "desc": "The dryad makes one Vine Lash or Thorn Burst attack, and it can use Spellcasting\
      \ to cast [Charm Monster](3.%20Mechanics/CLI/spells/charm-monster-xphb.md)."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 10 ft. *Hit:* 8 (1d8 + 4) Slashing\
      \ damage."
    "name": "Vine Lash"
  - "desc": "*Ranged Attack Roll:* +6, range 60 ft. *Hit:* 7 (1d6 + 4) Piercing\
      \ damage."
    "name": "Thorn Burst"
  - "desc": "The dryad casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 14):\n\n**At\
      \ will:** [Animal Friendship](3.%20Mechanics/CLI/spells/animal-friendship-xphb.md),\
      \ [Charm Monster](3.%20Mechanics/CLI/spells/charm-monster-xphb.md) (lasts 24\
      \ hours; ends early if the dryad casts the spell again), [Druidcraft](3.%20Mechanics/CLI/spells/druidcraft-xphb.md)\n\
      \n**1/day each:** [Entangle](3.%20Mechanics/CLI/spells/entangle-xphb.md), [Pass\
      \ without Trace](3.%20Mechanics/CLI/spells/pass-without-trace-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "If within 5 feet of a Large or bigger tree, the dryad teleports to an\
      \ unoccupied space within 5 feet of a second Large or bigger tree that is within\
      \ 60 feet of the previous tree."
    "name": "Tree Stride"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fey/token/dryad-xmm.webp"
```
^statblock

## Environment

forest