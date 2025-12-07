---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Roper
---
# [Roper](3. Mechanics\CLI\bestiary\aberration/roper-xmm.md)
*Source: Monster Manual (2024) p. 262. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Roper

*Tentacled Subterranean Trapper*

- **Habitat.** Underdark  
- **Treasure.** Any  

Camouflaged as rock formations, ropers are aberrant ambushers that lurk in wait for smaller creatures. These bizarre subterranean hunters extend their rubbery tentacles to explore and prod their surroundings, often reaching beyond their fields of vision. Should they encounter prey, these limbs ensnare victims and drag them close to ropers' toothy maws. If these tentacles are severed, ropers rapidly grow replacements.

Ropers can move, albeit slowly. Crawling on the sticky cilia that cover their undersides, ropers can climb walls and suspend themselves from ceilings. These hunters often position themselves in unexpected or treacherous locations, using their surroundings to weaken their prey. Roll on or choose a result from the Roper Hazards table to inspire what dangers ropers employ when ambushing prey.

**Roper Hazards**

| dice: 1d8 | The Roper Drags Prey Through... |
|-----------|---------------------------------|
| 1 | Areas that trigger traps. |
| 2 | Caverns filled with smoke or gas. |
| 3 | "dead magic zone" or [Wild Magic zones](3.%20Mechanics/CLI/traps-hazards/wild-magic-zone-xdmg.md). |
| 4 | The lair of a creature it is trying to bait out. |
| 5 | A nest of rats, insects, or other vermin. |
| 6 | Patches of brown mold* or green slime*. |
| 7 | Pools of magma or boiling water. |
| 8 | "razorvine" or similar dangerous plants. |
^roper-hazards

> [!quote]  
> 
> Rule 9: Never trust a stalagmite.


```statblock
"name": "Roper (XMM)"
"size": "Large"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "20"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"modifier": !!int "5"
"stats":
  - !!int "18"
  - !!int "8"
  - !!int "17"
  - !!int "7"
  - !!int "16"
  - !!int "6"
"speed": "10 ft., climb 20 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 16"
"languages": ""
"cr": "5"
"traits":
  - "desc": "The roper can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The roper makes two Tentacle attacks, uses Reel, and makes two Bite attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 17 (3d8 + 4) Piercing\
      \ damage."
    "name": "Bite"
  - "desc": "*Melee Attack Roll:* +7, reach 60 ft. *Hit:* The target has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 14) from one of six tentacles, and the target has the\
      \ [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned) condition until\
      \ the grapple ends.\n\nThe tentacle can be damaged, freeing a creature it has\
      \ [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled) when destroyed\
      \ (AC 20, HP 10, [Immunity](3.%20Mechanics/CLI/rules/variant-rules/immunity-xphb.md)\
      \ to Poison and Psychic damage). Damaging the tentacle deals no damage to the\
      \ roper, and a destroyed tentacle regrows at the start of the roper's next turn."
    "name": "Tentacle"
  - "desc": "The roper pulls each creature [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by it up to 30 feet straight toward it."
    "name": "Reel"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/roper-xmm.webp"
```
^statblock

## Environment

underdark