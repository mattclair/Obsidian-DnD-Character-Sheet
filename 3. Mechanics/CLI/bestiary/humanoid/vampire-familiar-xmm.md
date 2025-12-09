---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Vampire Familiar
---
# [Vampire Familiar](3. Mechanics\CLI\bestiary\humanoid/vampire-familiar-xmm.md)
*Source: Monster Manual (2024) p. 314. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Vampire familiars are living people who serve vampires, either willingly or due to coercion by their deathless masters. They channel deathly energy through their weapons, incapacitating unsuspecting targets and leaving their victims as helpless prey for their vampire masters.

Many vampire familiars aspire to eventually become vampires, while others are magically charmed or serve as part of some terrible bargain. In each case, these vampire servants show signs of their vampiric corruption, such as corpse-like complexions, uncanny reflexes, and evidence of their masters' repeated feedings. A vampire familiar loses its supernatural abilities and returns to its original Humanoid state if its vampire master is destroyed.

## Vampires

*Blood-Sucking Lords of the Night*

- **Habitat.** Underdark, Urban  
- **Treasure.** Any  

Vampires disguise their accursed, immortal natures, passing as mortals to feed on the blood of the living. While the youngest vampires might be little more than bloodthirsty servants of their creators, the eldest possess incredible cunning and control over supernatural forces of the night.

Undead vampires lie dormant during the day, retreating to resting places hidden from foes and the sun's searing rays. Roll on or choose a result from the Vampire Resting Places table to inspire a vampire's grim sanctuary.

**Vampire Resting Places**

| dice: 1d6 | The Vampire's Resting Place Is... |
|-----------|-----------------------------------|
| 1 | Among the roots of a dead tree. |
| 2 | At the bottom of a stagnant pool. |
| 3 | A coffin filled with grave dirt. |
| 4 | A large pot full of blood or vinegar. |
| 5 | A space accessible only by shape-shifting. |
| 6 | Within a statue or suit of armor. |
^vampire-resting-places

### Vampire Lairs

Vampires and vampire umbral lords create sanctuaries apart from the living, whether hidden in cosmopolitan cities or sequestered in ruins where they dwelled in life.

> [!quote] A quote from Astarion, Vampire Spawn  
> 
> Darling, you are simply delicious...


```statblock
"name": "Vampire Familiar (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "5"
"stats":
  - !!int "17"
  - !!int "16"
  - !!int "15"
  - !!int "10"
  - !!int "10"
  - !!int "14"
"speed": "30 ft., climb 30 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "2"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Persuasion](3.%20Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+4"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"damage_resistances": "necrotic"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
  \ (except from its vampire master)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common plus one other language"
"cr": "3"
"traits":
  - "desc": "While the familiar and its vampire master are on the same plane of existence,\
      \ the vampire can communicate with the familiar telepathically, and the vampire\
      \ can perceive through the familiar's senses."
    "name": "Vampiric Connection"
"actions":
  - "desc": "The familiar makes two Umbral Dagger attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +5, reach 5 ft. or range 20/60 ft.\
      \ *Hit:* 5 (1d4 + 3) Piercing damage plus 7 (3d4) Necrotic damage. If the\
      \ target is reduced to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ by this attack, the target becomes [Stable](3.%20Mechanics/CLI/rules/variant-rules/stable-xphb.md)\
      \ but has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned) condition\
      \ for 1 hour. While it has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition, the target has the [Paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ condition."
    "name": "Umbral Dagger"
"bonus_actions":
  - "desc": "The familiar takes the Dash or Disengage action."
    "name": "Deathless Agility"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/vampire-familiar-xmm.webp"
```
^statblock

## Environment

underdark, urban