---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Vampire
---
# [Vampire](3. Mechanics\CLI\bestiary\undead/vampire-xmm.md)
*Source: Monster Manual (2024) p. 317. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Vampires are terrifying hunters and manipulators. They use their powers to shape-shift and bend other creatures' wills as they terrorize and feed on populations over generations.

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
"name": "Vampire (XMM)"
"size": "Small or Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "195"
"hit_dice": "23d8 + 92"
"modifier": !!int "14"
"stats":
  - !!int "18"
  - !!int "18"
  - !!int "18"
  - !!int "17"
  - !!int "15"
  - !!int "18"
"speed": "40 ft., climb 40 ft."
"saves":
  - "dexterity": !!int "9"
  - "constitution": !!int "9"
  - "wisdom": !!int "7"
  - "charisma": !!int "9"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+9"
"damage_resistances": "necrotic"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 17"
"languages": "Common plus two other languages"
"cr": "13"
"traits":
  - "desc": "If the vampire fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
  - "desc": "If the vampire drops to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ outside its resting place, the vampire uses Shape-Shift to become mist (no\
      \ action required). If it can't use Shape-Shift, it is destroyed.\n\nWhile it\
      \ has 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ in mist form, it can't return to its vampire form, and it must reach its resting\
      \ place within 2 hours or be destroyed. Once in its resting place, it returns\
      \ to its vampire form and has the [Paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ condition until it regains any [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md),\
      \ and it regains 1 [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ after spending 1 hour there."
    "name": "Misty Escape"
  - "desc": "The vampire can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The vampire has these weaknesses:\n\n- **Forbiddance.** The vampire can't\
      \ enter a residence without an invitation from an occupant.  \n- **Running Water.**\
      \ The vampire takes 20 Acid damage if it ends its turn in running water.  \n\
      - **Stake to the Heart.** If a weapon that deals Piercing damage is driven into\
      \ the vampire's heart while the vampire has the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition in its resting place, the vampire has the [Paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ condition until the weapon is removed.  \n- **Sunlight.** The vampire takes\
      \ 20 Radiant damage if it starts its turn in sunlight. While in sunlight, it\
      \ has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on attack rolls and ability checks.  "
    "name": "Vampire Weakness"
"actions":
  - "desc": "The vampire makes two Grave Strike attacks and uses Bite."
    "name": "Multiattack (Vampire Form Only)"
  - "desc": "*Melee Attack Roll:* +9, reach 5 ft. *Hit:* 8 (1d8 + 4) Bludgeoning\
      \ damage plus 7 (2d6) Necrotic damage. If the target is a Large or smaller\
      \ creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 14) from one of two hands."
    "name": "Grave Strike (Vampire Form Only)"
  - "desc": "*Constitution Saving Throw:* DC 17, one creature within 5 feet that is\
      \ willing or that has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled),\
      \ [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated), or\
      \ [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) condition.\
      \ *Failure:* 6 (1d4 + 4) Piercing damage plus 13 (3d8) Necrotic damage.\
      \ The target's [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by an amount equal to the Necrotic damage taken, and the\
      \ vampire regains [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ equal to that amount. A Humanoid reduced to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ by this damage and then buried rises the following sunset as a [Vampire Spawn](3.%20Mechanics/CLI/bestiary/undead/vampire-spawn-xmm.md)\
      \ under the vampire's control."
    "name": "Bite (Bat or Vampire Form Only)"
"bonus_actions":
  - "desc": "If the vampire isn't in sunlight or running water, it shape-shifts into\
      \ a Tiny bat ([Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ 5 ft., [Fly Speed](3.%20Mechanics/CLI/rules/variant-rules/fly-speed-xphb.md)\
      \ 30 ft.) or a Medium cloud of mist ([Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ 5 ft., [Fly Speed](3.%20Mechanics/CLI/rules/variant-rules/fly-speed-xphb.md)\
      \ 20 ft. [hover]), or it returns to its vampire form. Anything it is wearing\
      \ transforms with it.\n\nWhile in bat form, the vampire can't speak. Its game\
      \ statistics, other than its size and [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md),\
      \ are unchanged.\n\nWhile in mist form, the vampire can't take any actions,\
      \ speak, or manipulate objects. It is weightless and can enter an enemy's space\
      \ and stop there. If air can pass through a space, the mist can do so, but it\
      \ can't pass through liquid. It has [Resistance](3.%20Mechanics/CLI/rules/variant-rules/resistance-xphb.md)\
      \ to all damage, except the damage it takes from sunlight."
    "name": "Shape-Shift"
  - "desc": "The vampire casts [Charm Person](3.%20Mechanics/CLI/spells/charm-person-xphb.md),\
      \ requiring no spell components and using Charisma as the spellcasting ability\
      \ (spell save DC 17), and the duration is 24 hours. The Charmed target is a\
      \ willing recipient of the vampire's Bite, the damage of which doesn't end the\
      \ spell. When the spell ends, the target is unaware it was Charmed by the vampire.\n"
    "name": "Charm (Recharge 5-6)"
"regional_effects":
  - "desc": "The region containing a vampire's lair is warped by its presence, creating\
      \ the following effects:\n\n- **Children of the Night.** The vampire exerts\
      \ influence over the animals in its domain. From dusk until dawn, Medium or\
      \ smaller Beasts have the [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ condition while within 1 mile of the lair.  \n- **Looming Shadows.** Shadows\
      \ within 1 mile of the lair seem to move as if alive. Any creature (excluding\
      \ the vampire and its allies) that finishes a [Short Rest](3.%20Mechanics/CLI/rules/variant-rules/short-rest-xphb.md)\
      \ while within 1 mile of the lair must succeed on a DC 15 Wisdom saving throw\
      \ or gain no benefit from that rest.  \n- **Mists.** The area within 1 mile\
      \ of the lair is [Lightly Obscured](3.%20Mechanics/CLI/rules/variant-rules/lightly-obscured-xphb.md)\
      \ by a persistent, creeping fog. The vampire and any creatures of its choice\
      \ are unaffected by the fog.  \n\nIf the vampire dies or moves its lair elsewhere,\
      \ these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3 (4 in Lair). Immediately after\
  \ another creature's turn, the vampire can expend a use to take one of the following\
  \ actions. The vampire regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The vampire moves up to half its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md),\
      \ and it makes one Grave Strike attack."
    "name": "Deathless Strike"
  - "desc": "The vampire casts [Command](3.%20Mechanics/CLI/spells/command-xphb.md),\
      \ requiring no spell components and using Charisma as the spellcasting ability\
      \ (spell save DC 17). The vampire can't take this action again until the start\
      \ of its next turn.\n"
    "name": "Beguile"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/vampire-xmm.webp"
```
^statblock

## Environment

underdark, urban