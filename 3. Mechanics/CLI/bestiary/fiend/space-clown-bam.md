---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Space Clown
---
# [Space Clown](3. Mechanics\CLI\bestiary\fiend/space-clown-bam.md)
*Source: Boo's Astral Menagerie p. 54, Light of Xaryxis*  

Space clowns are the inhabitants of a Wildspace system known as Clownspace. The humans who once inhabited the system's three ring-shaped worlds placed their faith in a god of revelry. Their worship ceremonies were centered on festivals and frivolity. Over time, the people's happiness hinged on the ever-increasing consumption of an elixir called Thrill Joy. Only after they became addicted did they discover that the priests of their faith had distilled the elixir from demonic ichor and the nectar of the bozo flower. Eventually, Thrill Joy transformed the faithful into fiendish creatures and "blessed" them with clown-like appearances.

Space clowns acquired their first spelljamming helms from dohwar merchants (see "[Dohwar](3.%20Mechanics/CLI/bestiary/fey/dohwar-bam.md)"). Subsequent visits to other Wildspace systems led to contact with a multitude of other folk. In the wake of these encounters, love and fear of clowns has spread to all corners of the multiverse, just as the space clowns have done themselves.

Marauding space clowns feed on Humanoid flesh. They travel through space in garishly decorated ships and sometimes take up residence on populated worlds, where they set up carnival tents to lure curious onlookers into their clutches. They are armed with colorfully painted ray guns that work only for them; these toys are harmless in the hands of anyone else.

```statblock
"name": "Space Clown (BAM)"
"size": "Medium"
"type": "fiend"
"alignment": "typically  Chaotic Evil"
"ac": !!int "13"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "16"
  - !!int "14"
  - !!int "11"
  - !!int "11"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[Acrobatics](3.%20Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+5"
  - "name": "[Performance](3.%20Mechanics/CLI/rules/skills.md#Performance)"
    "desc": "+5"
  - "name": "[Sleight of Hand](3.%20Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+5"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Abyssal, Common"
"cr": "2"
"traits":
  - "desc": "When the clown drops to 0 hit points, it pops like a balloon, releasing\
      \ a splash of putrid, corrosive ichor. Each creature within 5 feet of the clown\
      \ when it bursts must make a DC 12 Dexterity saving throw, taking 10 (3d6)\
      \ acid damage on a failed save, or half as much damage on a successful one."
    "name": "Dying Burst"
  - "desc": "The clown wears shoes that squeak when it walks. The squeaking can be\
      \ heard out to a range of 30 feet. The squeaking is silenced while the clown's\
      \ Phantasmal Form is in effect."
    "name": "Squeakers"
"actions":
  - "desc": "*Melee Spell Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 17\
      \ (4d6 + 3) lightning damage."
    "name": "Shock"
  - "desc": "*Ranged Spell Attack:* +5 to hit, range 120 ft., one creature. *Hit:*\
      \ 7 (2d6) psychic damage, and if the target is a Humanoid with an Intelligence\
      \ score of 3 or higher, it must make a DC 12 Wisdom saving throw. On a failed\
      \ save, the target perceives everything it sees or hears as hilariously funny\
      \ and is [incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ for 1 minute. The target can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Ray Gun"
  - "desc": "The clown casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability:\n\n**At will:** [friends](3.%20Mechanics/CLI/spells/friends-xphb.md),\
      \ [mage hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md), [prestidigitation](3.%20Mechanics/CLI/spells/prestidigitation-xphb.md)\n\
      \n**1/day each:** [mirror image](3.%20Mechanics/CLI/spells/mirror-image-xphb.md),\
      \ [spider climb](3.%20Mechanics/CLI/spells/spider-climb-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The clown veils itself and everything it is wearing and carrying in an\
      \ illusion that makes it look like some other creature of its size or smaller\
      \ (such as a child) or an object small enough to fit in the clown's space (such\
      \ as a floating balloon). Maintaining this effect requires the clown's [concentration](3.%20Mechanics/CLI/rules/conditions.md#Concentration)\
      \ (as if [concentrating](3.%20Mechanics/CLI/rules/conditions.md#Concentration)\
      \ on a spell), and the illusion fails to hold up to physical inspection. As\
      \ an action, a creature that can see the clown's illusory form can make a DC\
      \ 15 Wisdom ([Insight](3.%20Mechanics/CLI/rules/skills.md#Insight)) check, piercing\
      \ the illusion and discerning the clown's true form on a success."
    "name": "Phantasmal Form (3/Day)"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/space-clown-bam.webp"
```
^statblock