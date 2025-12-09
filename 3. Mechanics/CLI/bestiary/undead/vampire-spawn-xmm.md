---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Vampire Spawn
---
# [Vampire Spawn](3. Mechanics\CLI\bestiary\undead/vampire-spawn-xmm.md)
*Source: Monster Manual (2024) p. 315. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Vampire spawn are newly created vampires. They have yet to fully master their abilities, and many are consumed by their thirst for blood. Vampire spawn might serve more powerful vampires or pursue their own depraved agendas.

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
"name": "Vampire Spawn (XMM)"
"size": "Small or Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "16"
  - !!int "16"
  - !!int "11"
  - !!int "10"
  - !!int "12"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "6"
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_resistances": "necrotic"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Common plus one other language"
"cr": "5"
"traits":
  - "desc": "The vampire can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The vampire has these weaknesses:\n\n- **Forbiddance.** The vampire can't\
      \ enter a residence without an invitation from an occupant.  \n- **Running Water.**\
      \ The vampire takes 20 Acid damage if it ends its turn in running water.  \n\
      - **Stake to the Heart.** The vampire is destroyed if a weapon that deals Piercing\
      \ damage is driven into the vampire's heart while the vampire has the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition.  \n- **Sunlight.** The vampire takes 20 Radiant damage if it starts\
      \ its turn in sunlight. While in sunlight, it has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on attack rolls and ability checks.  "
    "name": "Vampire Weakness"
"actions":
  - "desc": "The vampire makes two Claw attacks and uses Bite."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 8 (2d4 + 3) Slashing\
      \ damage. If the target is a Medium or smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 13) from one of two claws."
    "name": "Claw"
  - "desc": "*Constitution Saving Throw:* DC 14, one creature within 5 feet that is\
      \ willing or that has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled),\
      \ [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated), or\
      \ [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) condition.\
      \ *Failure:* 5 (1d4 + 3) Piercing damage plus 10 (3d6) Necrotic damage.\
      \ The target's [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by an amount equal to the Necrotic damage taken, and the\
      \ vampire regains [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ equal to that amount."
    "name": "Bite"
"bonus_actions":
  - "desc": "The vampire takes the Dash or Disengage action."
    "name": "Deathless Agility"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/vampire-spawn-xmm.webp"
```
^statblock

## Environment

underdark, urban