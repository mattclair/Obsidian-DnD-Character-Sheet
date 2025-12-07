---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Pirate
---
# [Pirate](3. Mechanics\CLI\bestiary\humanoid/pirate-xmm.md)
*Source: Monster Manual (2024) p. 241. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Along with being competent warriors, pirates are accomplished seafarers who know how to sail and maintain a ship. While some loyally follow their captains' orders, others place greed, superstition, or self-preservation over duty.

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
"name": "Pirate (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "5"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "12"
  - !!int "8"
  - !!int "12"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "5"
  - "charisma": !!int "4"
"senses": "passive Perception 11"
"languages": "Common plus one other language"
"cr": "1"
"actions":
  - "desc": "The pirate makes two Dagger attacks. It can replace one attack with a\
      \ use of Enthralling Panache."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +5, reach 5 ft. or range 20/60 ft.\
      \ *Hit:* 5 (1d4 + 3) Piercing damage."
    "name": "Dagger"
  - "desc": "*Wisdom Saving Throw:* DC 12, one creature the pirate can see within\
      \ 30 feet. *Failure:* The target has the [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ condition until the start of the pirate's next turn."
    "name": "Enthralling Panache"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/pirate-xmm.webp"
```
^statblock

## Environment

any