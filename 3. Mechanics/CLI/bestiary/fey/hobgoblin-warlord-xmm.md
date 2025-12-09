---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/acheron
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey/goblinoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Hobgoblin Warlord
---
# [Hobgoblin Warlord](3. Mechanics\CLI\bestiary\fey/hobgoblin-warlord-xmm.md)
*Source: Monster Manual (2024) p. 171*  

Hobgoblin warlords lead armies of hobgoblins and their allies, using their experience and strategic minds to command amid the ebb and flow of battle.

## Hobgoblins

*Conquerors of Every Horizon*

- **Habitat.** Desert, Forest, Grassland, Hill, Mountain, Planar (Acheron), Underdark  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md), Individual  

Hobgoblins embody the primal urge to grow and spread, expressing such drives by bending the world to their whims. Lone hobgoblins claim woodland territories and plunder the wilds. In groups, they form hierarchical, martial societies bent on conquering lands and stripping them of resources to serve their expansionist zeal.

Hobgoblins often subjugate animals, monsters, and destructive Fey—particularly goblins and bugbears—to serve their plans. Hobgoblins might ally with dragons, warlords, the servants of warlike gods, or other powerful creatures that promise them control of new territories. Should hobgoblins bring an entire land to heel, they seek new conquests, venturing across seas, into the Underdark, or to stars and planes of existence beyond.

Many hobgoblins serve the violent god Maglubiyet, whose hunger for conquest matches their own. Hobgoblin followers of Maglubiyet flourish in the Infinite Battlefield of Acheron, where they endlessly indulge their drive for domination. These war-obsessed hobgoblins employ elaborate tactics and strange weapons, which they sometimes unleash on worlds of the Material Plane.

### Hobgoblin Warfare

The drive to subjugate and pillage is part of hobgoblins' supernatural nature, though a few might repress their warlike tendencies or turn them to more useful ends. Roll on or choose a result from the Hobgoblin Strategies table to inspire how a hobgoblin carries out its conquest.

**Hobgoblin Strategies**

| dice: 1d6 | The Hobgoblin Works To... |
|-----------|---------------------------|
| 1 | Build a vessel to carry hobgoblin armies to new conquests. |
| 2 | Capture monsters and train them to fight. |
| 3 | Collapse a region into the Underdark so riches can be sifted from the ruins. |
| 4 | Construct a giant machine to strip resources. |
| 5 | Convince devils, dragons, or hobgoblins from Acheron to invade an enemy land. |
| 6 | Help shortsighted merchants undermine a government or despoil the environment. |
^hobgoblin-strategies

```statblock
"name": "Hobgoblin Warlord (XMM)"
"size": "Medium"
"type": "fey"
"subtype": "goblinoid"
"alignment": "Lawful Evil"
"ac": !!int "20"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "5"
"stats":
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "14"
  - !!int "11"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "5"
  - "intelligence": !!int "5"
  - "wisdom": !!int "3"
  - "charisma": !!int "5"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Common, Goblin"
"cr": "6"
"traits":
  - "desc": "While in a 30-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the hobgoblin, the hobgoblin and its allies have [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on attack rolls and saving throws, provided the hobgoblin doesn't have the\
      \ [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated) condition."
    "name": "Aura of Authority"
"actions":
  - "desc": "The hobgoblin makes three attacks, using Javelin or Longsword in any\
      \ combination."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +6, reach 5 ft. or range 30/120 ft.\
      \ *Hit:* 11 (2d6 + 4) Piercing damage, and the target's [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ decreases by 10 feet until the start of the hobgoblin's next turn."
    "name": "Javelin"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 12 (2d8 + 3) Slashing\
      \ damage."
    "name": "Longsword"
"reactions":
  - "desc": "Trigger: The hobgoblin is hit by a melee attack roll while holding a\
      \ weapon. _Response:_ The hobgoblin adds 3 to its AC against that attack, possibly\
      \ causing it to miss."
    "name": "Parry"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fey/token/hobgoblin-warlord-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland, hill, mountain, planar, acheron, underdark