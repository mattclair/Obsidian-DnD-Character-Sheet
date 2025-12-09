---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead/beholder
statblock: inline
statblock-link: "#^statblock"
aliases:
- Death Tyrant
---
# [Death Tyrant](3. Mechanics\CLI\bestiary\undead/death-tyrant-xmm.md)
*Source: Monster Manual (2024) p. 95*  

## Death Tyrant

*Beholder beyond Death*

- **Habitat.** Underdark  
- **Treasure.** Any  

A death tyrant is a beholder that pursues aberrant goals beyond its death. Ten magical singularities—all that remains of its magical eyes—orbit its floating, cyclopean skull, while the hateful gaze of its central eye socket stifles life and raises the dead.

Beholders typically transform into death tyrants over years when their dreams fixate on death, morbid apotheoses, or journeys to realms inhospitable to life. Some death tyrants rise from the corpses of slain beholders or result from exposure to strange magic or Underdark radiation. Sometimes beholders purposefully pursue this undead state, just as depraved magic-users pursue lichdom, although it is rare, as most beholders already believe themselves to be perfect beings.

No matter how death tyrants come into being, bizarre impulses drive their deathless existences. Their motivations tend to be extreme or beyond the reason of living creatures.

### Death Tyrant Lairs

Death tyrants often lurk deep in the Underdark, in the tunnel-mazes they occupied in life or in the lairs of enemy beholders they conquered. These lairs are devoid of life, as death tyrants change their servants into Undead horrors.

> [!quote] A quote from Journal of Jastus Hollowquill, explorer of Undermountain  
> 
> A cluster of tiny lights descended from a dark crevice in the ceiling. These motes cast an eerie glow on the great, alien skull that hung beneath them.


```statblock
"name": "Death Tyrant (XMM)"
"size": "Large"
"type": "undead"
"subtype": "beholder"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "195"
"hit_dice": "26d10 + 52"
"modifier": !!int "12"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "19"
  - !!int "15"
  - !!int "19"
"speed": "5 ft., fly 40 ft. (hover)"
"saves":
  - "constitution": !!int "7"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+12"
"damage_immunities": "poison"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 22"
"languages": "Deep Speech, Undercommon"
"cr": "14"
"traits":
  - "desc": "If the death tyrant fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions":
  - "desc": "The death tyrant uses Eye Rays three times."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +9, reach 5 feet. *Hit:* 13 (2d8 + 4) Piercing\
      \ damage."
    "name": "Bite"
  - "desc": "The death tyrant randomly shoots one of the following magical rays at\
      \ a target it can see within 120 feet of itself (roll 1d10; reroll if the\
      \ death tyrant has already used that ray during this turn):\n\n- **1 Charm Ray.**\
      \ *Wisdom Saving Throw:* DC 17. *Failure:* 13 (3d8) Psychic damage, and the\
      \ target has the [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed) condition\
      \ for 1 hour or until it takes damage. *Success:* Half damage only.  \n- **2\
      \ Paralyzing Ray.** *Constitution Saving Throw:* DC 17. *Failure:* The target\
      \ has the [Paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed) condition\
      \ and repeats the save at the end of each of its turns, ending the effect on\
      \ itself on a success. After 1 minute, it succeeds automatically.  \n- **3 Fear\
      \ Ray.** *Wisdom Saving Throw:* DC 17. *Failure:* 10 (3d6) Psychic damage,\
      \ and the target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition until the end of its next turn. *Success:* Half damage only.  \n\
      - **4 Slowing Ray.** *Constitution Saving Throw:* DC 17. *Failure:* 18 (4d8)\
      \ Necrotic damage. Until the end of the target's next turn, the target can't\
      \ take Reactions; its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ is halved; and it can take either an action or a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md)\
      \ on its turn, not both. *Success:* Half damage only.  \n- **5 Enervation Ray.**\
      \ *Constitution Saving Throw:* DC 17. *Failure:* 16 (3d10) Poison damage,\
      \ and the target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the end of its next turn. While [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
      \ the target can't regain [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md).\
      \ *Success:* Half damage only.  \n- **6 Telekinetic Ray.** *Strength Saving\
      \ Throw:* DC 17 (the target succeeds automatically if it is Gargantuan). *Failure:*\
      \ The death tyrant moves the target up to 30 feet in any direction. The target\
      \ has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) condition\
      \ until the start of the death tyrant's next turn or until the death tyrant\
      \ has the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition. The death tyrant can also exert fine control on objects with this\
      \ ray, such as manipulating a tool or opening a door or container.  \n- **7\
      \ Sleep Ray.** *Wisdom Saving Throw:* DC 17 (the target succeeds automatically\
      \ if it is a Construct or an Undead). *Failure:* The target has the [Unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ condition for 1 minute. The condition ends if the target takes damage or a\
      \ creature within 5 feet of it takes an action to wake it.  \n- **8 Petrification\
      \ Ray.** *Constitution Saving Throw:* DC 17. *1St Failure:* The target has the\
      \ [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) condition\
      \ and repeats the save at the end of its next turn if it is still [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained),\
      \ ending the effect on itself on a success. *2Nd Failure:* The target has the\
      \ [Petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified) condition instead\
      \ of the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) condition.\
      \  \n- **9 Disintegration Ray.** *Dexterity Saving Throw:* DC 17. *Failure:*\
      \ 36 (8d8) Force damage. If the target is a nonmagical object or a creation\
      \ of magical force, a 10-foot [Cube](3.%20Mechanics/CLI/rules/variant-rules/cube-area-of-effect-xphb.md)\
      \ of it disintegrates into dust. *Success:* Half damage. *Failure or Success:*\
      \ If the target is a creature and this damage reduces it to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md),\
      \ it disintegrates into dust.  \n- **10 Death Ray.** *Dexterity Saving Throw:*\
      \ DC 17. *Failure:* 55 (10d10) Necrotic damage. *Success:* Half damage. *Failure\
      \ or Success:* The target dies if the ray reduces it to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md).\
      \  "
    "name": "Eye Rays"
"bonus_actions":
  - "desc": "The death tyrant's central eye emits an imperceptible, magical wave of\
      \ negative energy in a 150-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ Creatures in that area can't regain [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ until the start of the death tyrant's next turn. An intact Humanoid corpse\
      \ there instantly rises as a [Zombie](3.%20Mechanics/CLI/bestiary/undead/zombie-xmm.md)\
      \ under the death tyrant's control and takes its turn immediately after the\
      \ death tyrant on the same initiative count."
    "name": "Negative Energy Cone"
"regional_effects":
  - "desc": "The region containing a death tyrant's lair is warped by its presence,\
      \ creating the following effects:\n\n- **Negative Energy Suffusion.** Whenever\
      \ a creature within 1 mile of the lair regains [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ from a spell, it subtracts 1d10 from the number of [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ regained.  \n- **Scopophobia.** Creatures within 1 mile of the lair feel as\
      \ if they're being watched. Any creature (excluding the death tyrant and its\
      \ allies) that finishes a [Short Rest](3.%20Mechanics/CLI/rules/variant-rules/short-rest-xphb.md)\
      \ while within 1 mile of the lair must succeed on a DC 15 Wisdom saving throw\
      \ or gain no benefit from that rest.  \n\nIf the death tyrant dies or moves\
      \ its lair elsewhere, these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3 (4 in Lair). Immediately after\
  \ another creature's turn, the death tyrant can expend a use to take one of the\
  \ following actions. The death tyrant regains all expended uses at the start of\
  \ each of its turns."
"legendary_actions":
  - "desc": "The death tyrant makes two Bite attacks."
    "name": "Chomp"
  - "desc": "The death tyrant uses Eye Rays."
    "name": "Glare"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/death-tyrant-xmm.webp"
```
^statblock

## Environment

underdark