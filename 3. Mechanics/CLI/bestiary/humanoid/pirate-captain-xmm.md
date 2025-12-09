---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Pirate Captain
---
# [Pirate Captain](3. Mechanics\CLI\bestiary\humanoid/pirate-captain-xmm.md)
*Source: Monster Manual (2024) p. 242. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Pirate captains command crews of pirates, dictating their destinations and targets. Captains cultivate fearsome and theatrical reputations, painting themselves as larger-than-life characters to terrorize their foes, ensure the obedience of their crews, and attract followers to their banner. Many have colorful nicknames inspired by signature traits and deeds.

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
"name": "Pirate Captain (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "84"
"hit_dice": "13d8 + 26"
"modifier": !!int "7"
"stats":
  - !!int "10"
  - !!int "18"
  - !!int "14"
  - !!int "10"
  - !!int "14"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "strength": !!int "3"
  - "dexterity": !!int "7"
  - "wisdom": !!int "5"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Acrobatics](3.%20Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+7"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"senses": "passive Perception 15"
"languages": "Common plus one other language"
"cr": "6"
"actions":
  - "desc": "The pirate makes three attacks, using Rapier or Pistol in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 13 (2d8 + 4) Piercing\
      \ damage, and the pirate has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on the next attack roll it makes before the end of this turn."
    "name": "Rapier"
  - "desc": "*Ranged Attack Roll:* +7, range 30/90 ft. *Hit:* 15 (2d10 + 4) Piercing\
      \ damage."
    "name": "Pistol"
"bonus_actions":
  - "desc": "*Wisdom Saving Throw:* DC 14, one creature the pirate can see within\
      \ 30 feet. *Failure:* The target has the [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ condition until the start of the pirate's next turn."
    "name": "Captain's Charm"
"reactions":
  - "desc": "Trigger: The pirate is hit by a melee attack roll while holding a weapon.\
      \ _Response:_ The pirate adds 3 to its AC against that attack, possibly causing\
      \ it to miss. On a miss, the pirate makes one Rapier attack against the triggering\
      \ creature if within range."
    "name": "Riposte"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/pirate-captain-xmm.webp"
```
^statblock

## Environment

any