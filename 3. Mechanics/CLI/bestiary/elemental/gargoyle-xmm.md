---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gargoyle
---
# [Gargoyle](3. Mechanics\CLI\bestiary\elemental/gargoyle-xmm.md)
*Source: Monster Manual (2024) p. 128. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Gargoyle

*Sculpted Sentinel Hidden in Plain Sight*

- **Habitat.** Underdark, Urban  
- **Treasure.** Any  

Gargoyles are sculptures inhabited by elemental spirits. Wings and magic allow their heavy stone bodies to fly, and they often perch where they can blend in amid ornate architecture, rock formations, or mundane statues. Gargoyles usually serve the magic-users who conjured them into their bodies, but if left to their own devices, they might play cruel pranks and steal treasures to hoard in lofty lairs.

Gargoyles have a variety of appearances. Roll on or choose a result from the Gargoyle Sculptures table to inspire how a gargoyle looks.

**Gargoyle Sculptures**

| dice: 1d6 | The Gargoyle Is Sculpted to Appear... |
|-----------|---------------------------------------|
| 1 | Cherubic with perpetually smiling features. |
| 2 | Crudely hewed or naturally formed. |
| 3 | Damaged or marred by mismatched pieces. |
| 4 | Dragon-like with polished stone scales. |
| 5 | Gothically fiendish with horns and a tail. |
| 6 | Useful, like an ornate podium or a pillar. |
^gargoyle-sculptures

### Gargoyle Ambushes

Gargoyles seek to ambush foes or creatures that trespass on their territories. With no biological needs and supernatural patience, these monsters might wait unmoving for months, revealing themselves only when conditions are perfect to attack. They tend to lurk where statuary seems commonplace or where terrain obscures the shape and color of their bodies. Roll on or choose a result from the Gargoyle Camouflage table to inspire where a gargoyle sets up an ambush.

**Gargoyle Camouflage**

| dice: 1d8 | The Gargoyle Conceals Itself Amid... |
|-----------|--------------------------------------|
| 1 | Burls and bark on a giant tree. |
| 2 | Monuments in a graveyard or memorial. |
| 3 | Outcroppings on a cliff or rock formation |
| 4 | The [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified) victims of a basilisk or medusa. |
| 5 | Reliefs on a sculpted gate or wall. |
| 6 | Rubble in a ruin or junkyard. |
| 7 | Stalactites or icicles on a cavern ceiling. |
| 8 | Statuary on a castle, mansion, or temple. |
^gargoyle-camouflage

> [!quote] A quote from Tiv, Scholar of the Elemental Planes  
> 
> Where evil passes in the Elemental Plane of Earth, it stains the rock and spoils the soil. Malice vanishes amid other elements, but in the dismal dark, the wicked shape it into nightmares.


```statblock
"name": "Gargoyle (XMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "11"
  - !!int "16"
  - !!int "6"
  - !!int "11"
  - !!int "7"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Primordial (Terran)"
"cr": "2"
"traits":
  - "desc": "The gargoyle doesn't provoke an Opportunity Attack when it flies out\
      \ of an enemy's reach."
    "name": "Flyby"
"actions":
  - "desc": "The gargoyle makes two Claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 7 (2d4 + 2) Slashing\
      \ damage."
    "name": "Claw"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/elemental/token/gargoyle-xmm.webp"
```
^statblock

## Environment

underdark, urban