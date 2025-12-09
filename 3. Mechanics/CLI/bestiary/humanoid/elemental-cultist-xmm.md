---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Elemental Cultist
---
# [Elemental Cultist](3. Mechanics\CLI\bestiary\humanoid/elemental-cultist-xmm.md)
*Source: Monster Manual (2024) p. 87*  

Elemental cultists harness destructive natural forces to cleanse the world of civilization or prove the dominance of one element over all others. Such cultists are aligned with Elemental monsters or wicked immortals such as the Princes of Elemental Evil or the Elder Elemental Eye.

## Cultists

*Doomsayers and Fanatics*

- **Habitat.** Any  
- **Treasure.** Individual, [Relics](3.%20Mechanics/CLI/tables/random-magic-items-relics.md)  

Cultists use magic and extreme measures to spread radical beliefs. Some privately pursue esoteric secrets, while others form shadowy cabals seeking to bring about terrifying ends. Cultists often follow obscure mystical traditions or obsess over interpretations of ancient prophecies. They might worship supernatural patrons—deities, otherworldly creatures, manipulative alien minds, or stranger forces. Roll on or choose a result from the Cultist Agendas table to inspire what a cultist seeks to achieve.

**Cultist Agendas**

| dice: 1d6 | The Cultist Strives To... |
|-----------|---------------------------|
| 1 | Bring about the end of a dominant order, an age, or the world. |
| 2 | Burn away the comfortable lies of reality, revealing forgotten or terrible truths. |
| 3 | Expand their faith though mind control or supernatural coercion. |
| 4 | Make global changes, like sinking the land or awakening volcanoes. |
| 5 | Remake life on a mass scale, altering other creatures' bodies or spiritual beings. |
| 6 | Summon their deity or its herald, weapon, or realm into their world. |
^cultist-agendas

### Occult Symbols

Cults often identify with symbols that exemplify their beliefs. Such symbols might mark objects important to the cult, as well as the dress and bodies of cultists themselves. These symbols might be broadly understandable, or they might have meaning only to cultists. Roll twice on or choose results from the Cult Symbols table to inspire a cult's icons.

**Cult Symbols**

| dice: 1d10 | The Symbol Is... | Depicted As... |
|------------|------------------|----------------|
| 1 | An alchemical sign | A calendar or map |
| 2 | An animal | A crest or as heraldry |
| 3 | A celestial body | An elaborate diagram |
| 4 | A deity's icon | A metaphorical image |
| 5 | An element | A mystical being |
| 6 | An eye | Part of an equation |
| 7 | A geometric shape | A repeating pattern |
| 8 | A letter or number | A series of scratches |
| 9 | Part of a monster | A simple pictogram |
| 10 | A skull | A weapon or tool |
^cult-symbols

### Cult Members

Cults often form hierarchies around a charismatic or domineering leader. While cult members might work independently, they take their orders from superiors with greater supernatural powers. 

### Types of Cultists

Cults can organize around any mystical tradition, but many serve supernatural beings. Cult members often have abilities tied to the forces they worship.

> [!quote] A quote from Rites of the Cult of Elemental Evil  
> 
> Dread Tharizdun, power of the Elder Elemental Eye and master of all destructive forces, I am the Champion of Elemental Evil and am ready to carry out your wishes.


```statblock
"name": "Elemental Cultist (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "12"
  - !!int "16"
  - !!int "14"
  - !!int "18"
  - !!int "12"
"speed": "30 ft."
"saves":
  - "constitution": !!int "6"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Religion](3.%20Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+5"
"senses": "passive Perception 17"
"languages": "Common, Primordial"
"cr": "8"
"actions":
  - "desc": "The cultist makes three attacks, using Elemental Flail or Elemental Claw\
      \ in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 25 (6d6 + 4) damage of\
      \ a type chosen by the cultist: Acid, Cold, Fire, Lightning, or Thunder."
    "name": "Elemental Flail"
  - "desc": "*Ranged Attack Roll:* +7, range 120 ft. *Hit:* 22 (4d10) damage of\
      \ a type chosen by the cultist: Acid, Cold, Fire, Lightning, or Thunder. If\
      \ the target is a Medium or smaller creature, the cultist moves the target up\
      \ to 10 feet straight toward or away from itself."
    "name": "Elemental Claw"
  - "desc": "The cultist casts one of the following spells, using Wisdom as the spellcasting\
      \ ability (spell save DC 15):\n\n**At will:** [Elementalism](3.%20Mechanics/CLI/spells/elementalism-xphb.md),\
      \ [Mage Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md)"
    "name": "Spellcasting"
"reactions":
  - "desc": "Trigger: The cultist takes Acid, Cold, Fire, Lightning, or Thunder damage.\
      \ _Response:_ The cultist gives itself [Resistance](3.%20Mechanics/CLI/rules/variant-rules/resistance-xphb.md)\
      \ to that instance of damage and gains 10 [Temporary Hit Points](3.%20Mechanics/CLI/rules/variant-rules/temporary-hit-points-xphb.md)."
    "name": "Elemental Absorption (1/Day)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/elemental-cultist-xmm.webp"
```
^statblock

## Environment

any