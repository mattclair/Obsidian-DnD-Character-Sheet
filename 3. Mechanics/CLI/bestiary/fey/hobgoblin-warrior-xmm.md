---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
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
- Hobgoblin Warrior
---
# [Hobgoblin Warrior](3. Mechanics\CLI\bestiary\fey/hobgoblin-warrior-xmm.md)
*Source: Monster Manual (2024) p. 170. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Hobgoblin warriors might hunt and raid alone or with trained mastiffs, worgs, goblin gangs, or other allies. They employ simple tactics and exploit every advantage their allies provide. They willingly sacrifice companions in their pursuit of victory.

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
"name": "Hobgoblin Warrior (XMM)"
"size": "Medium"
"type": "fey"
"subtype": "goblinoid"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "12"
  - !!int "12"
  - !!int "10"
  - !!int "10"
  - !!int "9"
"speed": "30 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Common, Goblin"
"cr": "1/2"
"traits":
  - "desc": "The hobgoblin has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the hobgoblin's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 12 (2d10 + 1) Slashing\
      \ damage."
    "name": "Longsword"
  - "desc": "*Ranged Attack Roll:* +3, range 150/600 ft. *Hit:* 5 (1d8 + 1) Piercing\
      \ damage plus 7 (3d4) Poison damage."
    "name": "Longbow"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fey/token/hobgoblin-warrior-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland, hill, mountain, planar, acheron, underdark