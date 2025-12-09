---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mind Flayer
---
# [Mind Flayer](3. Mechanics\CLI\bestiary\aberration/mind-flayer-xmm.md)
*Source: Monster Manual (2024) p. 214*  

A mind flayer's hunger for brains is outmeasured only by its thirst for dominance, and it embraces any plot that allows it to indulge both.

## Mind Flayers

*Brain-Eating Underdark Tyrants*

- **Habitat.** Underdark  
- **Treasure.** [Arcana](3.%20Mechanics/CLI/tables/random-magic-items-arcana.md)  

Scattered survivors of a world-ruining, multiversal empire, mind flayers lurk in secret conclaves hidden deep within Material Plane worlds. Within their alien sanctuaries, these wicked masterminds—also known as illithids—reshape the Underdark and its inhabitants to serve their unfathomable whims. Mind flayers are feared for their psionic powers, which allow them to stun and control other creatures, and for their horrific method of feeding: using their four slimy tentacles to extract the brains of their victims.

Mind flayers are infamous plotters and manipulators, concocting plans that reach beyond their subterranean realms. Aside from using their psionic powers to control others, mind flayers often experiment with their own bizarre life cycles, implanting other creatures with illithid young to create unnatural servants. Creatures such as grimlocks and intellect devourers result from mind flayers' biological tampering, while other Underdark-dwelling monsters—including kuo-toa, quaggoths, and troglodytes—often serve illithid masters. Githyanki and githzerai have a long adversarial history with mind flayers and bear the scars of illithid manipulation.

### Mind Flayer Colonies

Mind flayers work as lone schemers, in mysterious cabals, or as part of worlds-spanning illithid conspiracies. In groups, mind flayers work toward bizarre agendas organized by an elder brain—a massive, brain-like being with incredible psionic powers. Without such a leader, groups of mind flayers fall to self-destructive squabbling. Roll on or choose a result from the Mind Flayer Machinations table to inspire an illithid conclave's plots.

**Mind Flayer Machinations**

| dice: 1d6 | The Mind Flayer Colony Seeks To... |
|-----------|------------------------------------|
| 1 | Blot out the sun so their Underdark-dwelling servants can invade the surface. |
| 2 | Create a new monstrous fusion between mind flayers and a legendary monster. |
| 3 | Forge a psionic network uniting illithid colonies. |
| 4 | Replace world leaders with intellect devourers. |
| 5 | Restore a vessel to travel through Wildspace. |
| 6 | Sacrifice the mental energy of a planet's populace to take control of a githyanki bastion. |
^mind-flayer-machinations

```statblock
"name": "Mind Flayer (XMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"modifier": !!int "4"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "12"
  - !!int "19"
  - !!int "17"
  - !!int "17"
"speed": "30 ft., fly 15 ft. (hover)"
"saves":
  - "dexterity": !!int "4"
  - "intelligence": !!int "7"
  - "wisdom": !!int "6"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[Insight](3.%20Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+6"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_resistances": "psychic"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 16"
"languages": "Deep Speech, Undercommon; telepathy 120 ft."
"cr": "7"
"traits":
  - "desc": "The mind flayer has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 22 (4d8 + 4) Psychic\
      \ damage. If the target is a Medium or smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 14) from all the mind flayer's tentacles, and the target\
      \ has the [Stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned) condition\
      \ until the grapple ends."
    "name": "Tentacles"
  - "desc": "*Constitution Saving Throw:* DC 15, one creature that is [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the mind flayer's Tentacles. *Failure:* 55 (10d10) Piercing damage. *Success:*\
      \ Half damage. *Failure or Success:* If this damage reduces the target to 0\
      \ [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md), the\
      \ mind flayer kills it and devours its brain."
    "name": "Extract Brain"
  - "desc": "*Intelligence Saving Throw:* DC 15, each creature in a 60-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 31 (6d8 + 4) Psychic damage, and the target has the [Stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned)\
      \ condition until the end of the mind flayer's next turn. *Success:* Half damage\
      \ only."
    "name": "Mind Blast (Recharge 5-6)"
  - "desc": "The mind flayer casts one of the following spells, requiring no spell\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 15):\n\n**At will:** [Detect Thoughts](3.%20Mechanics/CLI/spells/detect-thoughts-xphb.md)\n\
      \n**1/day each:** [Dominate Monster](3.%20Mechanics/CLI/spells/dominate-monster-xphb.md),\
      \ [Plane Shift](3.%20Mechanics/CLI/spells/plane-shift-xphb.md) (self only)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/mind-flayer-xmm.webp"
```
^statblock

## Environment

underdark