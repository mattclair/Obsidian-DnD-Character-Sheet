---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/acheron
- ttrpg-cli/monster/environment/feywild
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey/goblinoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Goblin Minion
---
# [Goblin Minion](3. Mechanics\CLI\bestiary\fey/goblin-minion-xmm.md)
*Source: Monster Manual (2024) p. 142. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Goblin minions enjoy participating in the disruptive schemes of clever leaders but are quick to flee when confronted by their comeuppance.

## Goblins

*Wild Tricksters and Troublemakers*

- **Habitat.** Forest, Grassland, Hill, Planar (Acheron), Planar (Feywild), Underdark  
- **Treasure.** [Implements](3.%20Mechanics/CLI/tables/random-magic-items-implements.md), Individual  

Goblins are Feywild embodiments of recklessness and ruin. They delight in wreckage—the louder, the more energetic, and the more convoluted, the better. Goblin raids are often as much opportunities to enjoy setting fires and tormenting livestock as they are parts of more disruptive plots.

Goblins obey those who accomplish the wildest plans. Such leaders might be goblin raid masterminds, bombastic magic-users, or those capable of making the loudest noises. Hobgoblins and forceful humanoids might also command ornery groups of goblins, directing their destructiveness toward banditry, sabotage, or war.

The deity Maglubiyet claims to be the god of goblins, hobgoblins, and bugbears, and on the Infinite Battlefield of Acheron, the deity commands innumerable goblinoid legions. In ages long past, Maglubiyet witnessed the destructive propensity of goblinoids and relocated a population of them from the Feywild to his realm on the Outer Planes. Since then, hordes of these more martial-minded goblins have flourished, with some finding their ways to Material Plane worlds. These vicious invaders seek to sow ruin in preparation for their god's conquest.

> [!quote] A quote from Approximate translation from Goblin to Common: "Hey, rube!"  
> 
> Bree-yark!


```statblock
"name": "Goblin Minion (XMM)"
"size": "Small"
"type": "fey"
"subtype": "goblinoid"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "15"
  - !!int "10"
  - !!int "10"
  - !!int "8"
  - !!int "8"
"speed": "30 ft."
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 9"
"languages": "Common, Goblin"
"cr": "1/8"
"actions":
  - "desc": "*Melee  or Ranged Attack Roll:* +4, reach 5 ft. or range 20/60 ft.\
      \ *Hit:* 4 (1d4 + 2) Piercing damage."
    "name": "Dagger"
"bonus_actions":
  - "desc": "The goblin takes the Disengage or Hide action."
    "name": "Nimble Escape"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fey/token/goblin-minion-xmm.webp"
```
^statblock

## Environment

forest, grassland, hill, planar, acheron, planar, feywild, underdark