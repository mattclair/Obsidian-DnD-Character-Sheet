---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wight
---
# [Wight](3. Mechanics\CLI\bestiary\undead/wight-xmm.md)
*Source: Monster Manual (2024) p. 332. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Wight

*Life-Leeching Corpse Warrior*

- **Habitat.** Desert, Planar (Shadowfell), Swamp, Underdark, Urban  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Wights are the withered corpses of relentless warriors whose wickedness sustains them beyond death. Unlike mere zombies, they retain the memories and evil agendas they harbored in life.

After dying and returning from the grave, a wight continues its villainous ways, but it is now driven by a hunger for life. A wight drains living essence through its attacks. Humanoids slain by a wight's life-sapping grip reanimate a day later and serve the wight as obedient zombies.

Wights might return from the dead for a multitude of sinister reasons. Roll on or choose a result from the Wight Motives table to inspire why a wight plagues the living.

**Wight Motives**

| dice: 1d8 | The Wight Returned from the Dead To... |
|-----------|----------------------------------------|
| 1 | Challenge anyone who passes near its grave on a certain cursed night. |
| 2 | Conquer the land it believes it should rule. |
| 3 | Continue the crimes it was executed for. |
| 4 | Follow the foul master it served in life. |
| 5 | Honor an oath it left unfulfilled in life. |
| 6 | Obey the cult or deity that gave it unlife. |
| 7 | Prove it was the greatest warrior to ever live. |
| 8 | Seek its stolen heart or other treasure. |
^wight-motives

```statblock
"name": "Wight (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"modifier": !!int "4"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "16"
  - !!int "10"
  - !!int "13"
  - !!int "15"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Common plus one other language"
"cr": "3"
"traits":
  - "desc": "While in sunlight, the wight has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on ability checks and attack rolls."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The wight makes two attacks, using Necrotic Sword or Necrotic Bow in\
      \ any combination. It can replace one attack with a use of Life Drain."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 6 (1d8 + 2) Slashing\
      \ damage plus 4 (1d8) Necrotic damage."
    "name": "Necrotic Sword"
  - "desc": "*Ranged Attack Roll:* +4, range 150/600 ft. *Hit:* 6 (1d8 + 2) Piercing\
      \ damage plus 4 (1d8) Necrotic damage."
    "name": "Necrotic Bow"
  - "desc": "*Constitution Saving Throw:* DC 13, one creature within 5 feet. *Failure:*\
      \ 6 (1d8 + 2) Necrotic damage, and the target's [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by an amount equal to the damage taken.\n\nA Humanoid slain\
      \ by this attack rises 24 hours later as a [Zombie](3.%20Mechanics/CLI/bestiary/undead/zombie-xmm.md)\
      \ under the wight's control, unless the Humanoid is restored to life or its\
      \ body is destroyed. The wight can have no more than twelve zombies under its\
      \ control at a time."
    "name": "Life Drain"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/wight-xmm.webp"
```
^statblock

## Environment

desert, planar, shadowfell, swamp, underdark, urban