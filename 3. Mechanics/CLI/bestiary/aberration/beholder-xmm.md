---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Beholder
---
# [Beholder](3. Mechanics\CLI\bestiary\aberration/beholder-xmm.md)
*Source: Monster Manual (2024) p. 36*  

## Beholder

*Infamous Many-Eyed Tyrant*

- **Habitat.** Underdark  
- **Treasure.** [Arcana](3.%20Mechanics/CLI/tables/random-magic-items-arcana.md)  

Beholders—also known as eye tyrants—number among the most notorious inhabitants of the Underdark. Few creatures in the multiverse are as loathed and feared as these maniacal horrors.

A beholder's distinctive, globular body is dominated by an oversize maw and a gigantic central eye. Ten stalks ending in smaller eyes crown its form. From each of these eleven eyes, a beholder can unleash a different magic power. The central eye can deactivate magic, while the smaller eyes emit rays that inflict various dooms—such as petrifying creatures, disintegrating them, slaying them outright, or other effects.

Beholders possess utterly alien minds. Most exhibit paranoid, narcissistic, and megalomaniacal tendencies, and they act on agendas beyond human reasoning. While some keep to themselves, others force weaker creatures into their service. Still others cultivate grand ambitions, creating networks of minions to manipulate groups, settlements, and whole nations in the Underdark and sometimes the surface world.

Few creatures loathe beholders more than other beholders. Every beholder views itself as the physical and intellectual pinnacle of its species. To them, all other beholders are aberrant rivals to be dominated or destroyed. Conflicts between beholders can last for decades and lay waste to vast subterranean realms.

Beholders are a particular threat to adventurers because both gravitate toward mysterious ruins and sites of great magic. Many beholders collect the magic items and [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified) bodies of heroes they've defeated, displaying them as trophies.

### Beholder Lairs

Beholders lurk in cavern complexes they've carved using their eye rays deep in the Underdark or in lairs created for them by their servants.

```statblock
"name": "Beholder (XMM)"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "190"
"hit_dice": "20d10 + 80"
"modifier": !!int "12"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "18"
  - !!int "17"
  - !!int "15"
  - !!int "17"
"speed": "5 ft., fly 40 ft. (hover)"
"saves":
  - "constitution": !!int "9"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+12"
"condition_immunities": "[prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 22"
"languages": "Deep Speech, Undercommon"
"cr": "13"
"traits":
  - "desc": "If the beholder fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions":
  - "desc": "The beholder uses Eye Rays three times."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +8, reach 5 ft. *Hit:* 13 (3d6 + 3) Piercing\
      \ damage."
    "name": "Bite"
  - "desc": "The beholder randomly shoots one of the following magical rays at a target\
      \ it can see within 120 feet of itself (roll 1d10; reroll if the beholder\
      \ has already used that ray during this turn):\n\n- **1 Charm Ray.** *Wisdom\
      \ Saving Throw:* DC 16. *Failure:* 13 (3d8) Psychic damage, and the target\
      \ has the [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed) condition\
      \ for 1 hour or until it takes damage. *Success:* Half damage only.  \n- **2\
      \ Paralyzing Ray.** *Constitution Saving Throw:* DC 16. *Failure:* The target\
      \ has the [Paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed) condition\
      \ and repeats the save at the end of each of its turns, ending the effect on\
      \ itself on a success. After 1 minute, it succeeds automatically.  \n- **3 Fear\
      \ Ray.** *Wisdom Saving Throw:* DC 16. *Failure:* 14 (4d6) Psychic damage,\
      \ and the target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition until the end of its next turn. *Success:* Half damage only.  \n\
      - **4 Slowing Ray.** *Constitution Saving Throw:* DC 16. *Failure:* 18 (4d8)\
      \ Necrotic damage. Until the end of the target's next turn, the target's [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ is halved; the target can't take Reactions; and it can take either an action\
      \ or a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md)\
      \ on its turn, not both. *Success:* Half damage only.  \n- **5 Enervation Ray.**\
      \ *Constitution Saving Throw:* DC 16. *Failure:* 13 (3d8) Poison damage, and\
      \ the target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the end of its next turn. While [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
      \ the target can't regain [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md).\
      \ *Success:* Half damage only.  \n- **6 Telekinetic Ray.** *Strength Saving\
      \ Throw:* DC 16 (the target succeeds automatically if it is Gargantuan). *Failure:*\
      \ The beholder moves the target up to 30 feet in any direction. The target has\
      \ the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) condition\
      \ until the start of the beholder's next turn or until the beholder has the\
      \ [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated) condition.\
      \ The beholder can also exert fine control on objects with this ray, such as\
      \ manipulating a tool or opening a door or container.  \n- **7 Sleep Ray.**\
      \ *Wisdom Saving Throw:* DC 16 (the target succeeds automatically if it is a\
      \ Construct or an Undead). *Failure:* The target has the [Unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ condition for 1 minute. The condition ends if the target takes damage or a\
      \ creature within 5 feet of it takes an action to wake it.  \n- **8 Petrification\
      \ Ray.** *Constitution Saving Throw:* DC 16. *1St Failure:* The target has the\
      \ [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) condition\
      \ and repeats the save at the end of its next turn if it is still [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained),\
      \ ending the effect on itself on a success. *2Nd Failure:* The target has the\
      \ [Petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified) condition instead\
      \ of the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) condition.\
      \  \n- **9 Disintegration Ray.** *Dexterity Saving Throw:* DC 16. *Failure:*\
      \ 36 (8d8) Force damage. If the target is a nonmagical object or a creation\
      \ of magical force, a 10-foot [Cube](3.%20Mechanics/CLI/rules/variant-rules/cube-area-of-effect-xphb.md)\
      \ of it disintegrates into dust. *Success:* Half damage. *Failure or Success:*\
      \ If the target is a creature and this damage reduces it to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md),\
      \ it disintegrates into dust.  \n- **10 Death Ray.** *Dexterity Saving Throw:*\
      \ DC 16. *Failure:* 55 (10d10) Necrotic damage. *Success:* Half damage. *Failure\
      \ or Success:* The target dies if the ray reduces it to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md).\
      \  "
    "name": "Eye Rays"
"bonus_actions":
  - "desc": "The beholder's central eye emits an antimagic wave in a 150-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ Until the start of the beholder's next turn, that area acts as an [Antimagic\
      \ Field](3.%20Mechanics/CLI/spells/antimagic-field-xphb.md) spell, and that\
      \ area works against the beholder's own Eye Rays."
    "name": "Antimagic Cone"
"regional_effects":
  - "desc": "The region containing a beholder's lair is twisted by its presence, creating\
      \ the following effects:\n\n- **Scopophobia.** Creatures within 1 mile of the\
      \ lair feel as if they're being watched. Any creature (excluding the beholder\
      \ and its allies) that finishes a [Short Rest](3.%20Mechanics/CLI/rules/variant-rules/short-rest-xphb.md)\
      \ while within 1 mile of the lair must succeed on a DC 13 Wisdom saving throw\
      \ or gain no benefit from that rest.  \n- **Warping Terrain.** Minor warps in\
      \ reality occur near the lair; any creature (excluding the beholder) within\
      \ 1 mile of the lair that makes a [D20 Test](3.%20Mechanics/CLI/rules/variant-rules/d20-test-xphb.md)\
      \ and rolls a 1 has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition.  \n\nIf the beholder dies or moves its lair elsewhere, these effects\
      \ end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3 (4 in Lair). Immediately after\
  \ another creature's turn, the beholder can expend a use to take one of the following\
  \ actions. The beholder regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The beholder makes two Bite attacks."
    "name": "Chomp"
  - "desc": "The beholder uses Eye Rays."
    "name": "Glare"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/beholder-xmm.webp"
```
^statblock

## Environment

underdark