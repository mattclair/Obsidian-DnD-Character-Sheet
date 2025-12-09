---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Flesh Golem
---
# [Flesh Golem](3. Mechanics\CLI\bestiary\construct/flesh-golem-xmm.md)
*Source: Monster Manual (2024) p. 121. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Flesh Golem

*Dead Flesh Given New Life*

- **Habitat.** Any  
- **Treasure.** [Arcana](3.%20Mechanics/CLI/tables/random-magic-items-arcana.md)  

Flesh golems are roughly human-shaped collections of body parts bound together by misused magic or strange science. They serve their reckless creators, but many possess disjointed memories and instincts from their component parts. If wounded, these golems might go berserk and vent their confusion on anything in their sight, including their creators.

Flesh golems appear in varied forms. Roll on or choose a result from the Flesh Golem Characteristics table to inspire a flesh golem's features.

**Flesh Golem Characteristics**

| dice: 1d6 | The Flesh Golem Has... |
|-----------|------------------------|
| 1 | Animal parts among its humanlike pieces. |
| 2 | A disguise of makeup and heavy clothing. |
| 3 | Missing parts and exposed insides. |
| 4 | Parts serving unintended roles, like a body composed of dozens of hands. |
| 5 | Perfect features accented by beautiful stitching. |
| 6 | Visible mechanisms, bellows, and engines. |
^flesh-golem-characteristics

> [!quote] A quote from Viktra Mordenheim, Darklord of Lamordia  
> 
> The barrier between the mortal and the divine lies shattered—open is the mold for new gods. It was I who invaded the divine. Not with a spear but with a stitch. Not with my heresies but with my heart.


```statblock
"name": "Flesh Golem (XMM)"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "9"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"modifier": !!int "-1"
"stats":
  - !!int "19"
  - !!int "9"
  - !!int "18"
  - !!int "6"
  - !!int "10"
  - !!int "5"
"speed": "30 ft."
"damage_immunities": "lightning, poison"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "understands Common plus one other language but can't speak"
"cr": "5"
"traits":
  - "desc": "If the golem takes Fire damage, it has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on attack rolls and ability checks until the end of its next turn."
    "name": "Aversion to Fire"
  - "desc": "Whenever the golem starts its turn [Bloodied](3.%20Mechanics/CLI/rules/conditions.md#Bloodied),\
      \ roll 1d6. On a 6, the golem goes berserk. On each of its turns while berserk,\
      \ the golem attacks the nearest creature it can see. If no creature is near\
      \ enough to move to and attack, the golem attacks an object. Once the golem\
      \ goes berserk, it remains so until it is destroyed or it is no longer [Bloodied](3.%20Mechanics/CLI/rules/conditions.md#Bloodied).\n\
      \nThe golem's creator, if within 60 feet of the berserk golem, can try to calm\
      \ it by taking an action to make a DC 15 Charisma ([Persuasion](3.%20Mechanics/CLI/rules/skills.md#Persuasion))\
      \ check; the golem must be able to hear its creator. If this check succeeds,\
      \ the golem ceases being berserk until the start of its next turn, at which\
      \ point it resumes rolling for the Berserk trait again if it is still [Bloodied](3.%20Mechanics/CLI/rules/conditions.md#Bloodied)."
    "name": "Berserk"
  - "desc": "The golem can't shape-shift."
    "name": "Immutable Form"
  - "desc": "Whenever the golem is subjected to Lightning damage, it regains a number\
      \ of [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ equal to the Lightning damage dealt."
    "name": "Lightning Absorption"
  - "desc": "The golem has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The golem makes two Slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 13 (2d8 + 4) Bludgeoning\
      \ damage plus 4 (1d8) Lightning damage."
    "name": "Slam"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/construct/token/flesh-golem-xmm.webp"
```
^statblock

## Environment

any