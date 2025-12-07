---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Pirate Admiral
---
# [Pirate Admiral](3. Mechanics\CLI\bestiary\humanoid/pirate-admiral-xmm.md)
*Source: Monster Manual (2024) p. 242*  

Pirate admirals command whole pirate fleets. They undertake audacious ventures, such as challenging the navies of coastal nations, hunting legendary sea creatures, or carving out their own pirate kingdoms. Pirate admirals might launch their fleets from hidden fortresses where they hoard their treasure—or keep maps to where they've hidden their riches. Some pirate admirals ally with the followers of oceanic deities, underwater dwellers, and sea monsters, as well as their fellow scalawags.

## Pirates

*Freebooters and Fortune Hunters*

- **Habitat.** Any  
- **Treasure.** Individual, [Implements](3.%20Mechanics/CLI/tables/random-magic-items-implements.md)  

The term "pirate" encompasses a broad range of seafarers, including vicious sea rovers, dogged privateers, cursed treasure hunters, and others who seek riches and fame on the seas.

Pirates might be allies, foes, wild cards, or some combination thereof. While they are the bane of merchants and coastal communities, they know secrets of the sea and how to avoid aquatic threats. More unusual pirates set their sights beyond the waves, using airships, spelljamming vessels, plane-shifting craft, or stranger vehicles to explore and raid incredible realms.

### Pirate Flags

To terrify opponents and spread their reputations, pirate crews fly distinctive flags. Roll twice on or choose results from the Pirate Flags table to inspire what flag a pirate crew sails under.

**Pirate Flags**

| dice: 1d8 | The Flag Shows A... | With... |
|-----------|---------------------|---------|
| 1 | Buccaneer | A captain's hat |
| 2 | Dragon | Crossbones |
| 3 | Fiend | Crossed blades |
| 4 | Goat | An eye patch |
| 5 | Kraken | Lightning bolts |
| 6 | Merfolk | A mug of ale |
| 7 | Skull | A tattoo |
| 8 | Whale | A treasure chest |
^pirate-flags

```statblock
"name": "Pirate Admiral (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "182"
"hit_dice": "28d8 + 56"
"modifier": !!int "10"
"stats":
  - !!int "14"
  - !!int "22"
  - !!int "14"
  - !!int "12"
  - !!int "14"
  - !!int "19"
"speed": "30 ft."
"saves":
  - "strength": !!int "6"
  - "dexterity": !!int "10"
  - "wisdom": !!int "6"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Acrobatics](3.%20Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+10"
  - "name": "[Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+6"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"senses": "passive Perception 16"
"languages": "Common plus one other language"
"cr": "12"
"actions":
  - "desc": "The pirate makes three attacks, using Scimitar or Pistol in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +10, reach 5 ft. *Hit:* 16 (3d6 + 6) Slashing\
      \ damage plus 7 (2d6) Poison damage, and the target suffers one of the following\
      \ effects of the pirate's choice:\n\n- **Awestruck.** The target has the [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ condition until the start of the pirate's next turn.  \n- **Poison.** The\
      \ target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the start of the pirate's next turn.  "
    "name": "Scimitar"
  - "desc": "*Ranged Attack Roll:* +10, range 30/90 ft. *Hit:* 28 (4d10 + 6) Piercing\
      \ damage."
    "name": "Pistol"
"bonus_actions":
  - "desc": "The pirate chooses up to three other creatures it can see within 30 feet.\
      \ Until the start of the pirate's next turn, the targets have [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on attack rolls and saving throws."
    "name": "Rally (1/Day)"
"reactions":
  - "desc": "Trigger: The pirate is hit by a melee attack roll while holding a weapon.\
      \ _Response:_ The pirate adds 4 to its AC against melee attack rolls (including\
      \ the triggering attack) until the start of its next turn, possibly causing\
      \ the attacks to miss."
    "name": "Defensive Stance"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/pirate-admiral-xmm.webp"
```
^statblock

## Environment

any