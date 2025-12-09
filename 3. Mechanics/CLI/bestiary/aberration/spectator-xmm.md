---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration/beholder
statblock: inline
statblock-link: "#^statblock"
aliases:
- Spectator
---
# [Spectator](3. Mechanics\CLI\bestiary\aberration/spectator-xmm.md)
*Source: Monster Manual (2024) p. 289*  

## Spectator

*Magic-Bound Beholder-Kin*

- **Habitat.** Underdark  
- **Treasure.** Any  

Invoking mysterious rites involving four beholder eyestalks, a spellcaster can mold aberrant dreams into a beholder-like guardian. Called a spectator, the being summoned by such a ritual resembles a beholder with five magical eyes—a central eye and four on stalks arrayed around the crown of the creature's spherical body.

A spectator serves its conjurer for 101 years by guarding something of the spellcaster's choice—typically a treasure or location. The spectator is a reliable guardian and allows only its summoner access to what it protects. A spectator might converse with other creatures, openly discussing its orders and the magic-user who conjured it, but it has no ambitions of its own and won't abandon its post. Should an intruder ignore its warnings, a spectator attempts to drive away the intruder with its magical eye rays.

At the end of its service, a spectator might discorporate back into nothingness or wander away, seeking to learn more of the multiverse.

```statblock
"name": "Spectator (XMM)"
"size": "Medium"
"type": "aberration"
"subtype": "beholder"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "14"
  - !!int "14"
  - !!int "13"
  - !!int "14"
  - !!int "11"
"speed": "5 ft., fly 30 ft. (hover)"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"condition_immunities": "[exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 16"
"languages": "Deep Speech, Undercommon; telepathy 120 ft."
"cr": "3"
"actions":
  - "desc": "The spectator uses Eye Rays twice."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 5 (1d6 + 2) Piercing\
      \ damage."
    "name": "Bite"
  - "desc": "The spectator randomly shoots one of the following magical rays at a\
      \ target it can see within 90 feet of itself (roll 1d4; reroll if the spectator\
      \ has already used that ray during this turn):\n\n- **1 Confusion Ray.** *Wisdom\
      \ Saving Throw:* DC 12. *Failure:* 5 (2d4) Psychic damage, and the target\
      \ can't take Reactions until the end of its next turn. On its next turn, the\
      \ target can't move, and it uses its action to make a melee or ranged attack\
      \ against a randomly determined creature within range. If the target can't attack,\
      \ it does nothing on that turn.  \n- **2 Paralyzing Ray.** *Constitution Saving\
      \ Throw:* DC 12. *Failure:* The target has the [Paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ condition and repeats the save at the end of each of its turns, ending the\
      \ effect on itself on a success. After 1 minute, it succeeds automatically.\
      \  \n- **3 Fear Ray.** *Wisdom Saving Throw:* DC 12. *Failure:* 5 (2d4) Psychic\
      \ damage, and the target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition until the end of its next turn.  \n- **4 Wounding Ray.** *Constitution\
      \ Saving Throw:* DC 12. *Failure:* 16 (3d10) Necrotic damage. *Success:* Half\
      \ damage.  "
    "name": "Eye Rays"
"reactions":
  - "desc": "Trigger: The spectator succeeds on a saving throw against a spell, or\
      \ a spell's attack roll misses it. _Response—_*Dexterity Saving Throw:* DC 12,\
      \ one creature the spectator can see within 120 feet. *Failure:* 10 (3d6)\
      \ Force damage."
    "name": "Spell Reflection"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/spectator-xmm.webp"
```
^statblock

## Environment

underdark