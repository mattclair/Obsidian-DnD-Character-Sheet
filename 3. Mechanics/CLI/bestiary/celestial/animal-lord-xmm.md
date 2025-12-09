---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/environment/beastlands
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Animal Lord
---
# [Animal Lord](3. Mechanics\CLI\bestiary\celestial/animal-lord-xmm.md)
*Source: Monster Manual (2024) p. 15*  

## Animal Lord

*Immortal Regent of the Wild*

- **Habitat.** Planar (Beastlands)  
- **Treasure.** [Relics](3.%20Mechanics/CLI/tables/random-magic-items-relics.md)  

Animal lords are the immortal spirits of legendary animals. They serve as the divine protectors of animals of their kind, and they appear as hybrids of humanoids and the animals they defend. They frequently change into giant, idealized versions of the animals they're associated with—albeit with glowing eyes. When contending with people, they sometimes appear as humanlike beings with subtle, animal-like features. No matter their appearance, animal lords exhibit the instincts and predilections of the animals they represent, tempered by their intellect and experience.

Most animal lords make their homes in the Beastlands, but they occasionally journey to the Feywild or other idyllic realms. They rarely travel to the Material Plane, making exceptions only when a world faces environmental disaster or droves of animals are otherwise in jeopardy.

Among the best-known animal lords are those that represent cats, hawks, lizards, and wolves, but animal lords exist for beasts of all types. Some animal lords even embody creatures that are rare or extinct on Material Plane worlds, like megafauna or dinosaurs. Using their divine might, animal lords can summon spectral animals, channel spiritual energy, and exhibit powers associated with one of three broad groups: foragers, hunters, or sages. These powers are tied to an animal lord's personality and traits associated with the creature it resembles. Roll on or choose results from the relevant Animal Lord Appearances table to inspire what creature an animal lord resembles.

> [!quote] A quote from Brother of Shadows, Cat Lord  
> 
> While I don't deny the compliment, I assure you, I'm more akin to a god than a "pretty kitty."

> [!quote] A quote from Wind and Moon, Wolf Lord  
> 
> You call yourself hunter, but your fear makes you smell like prey.

**Forager Animal Lord Appearances**

| dice: 1d10 | Bestial Shape |
|------------|---------------|
| 1 | Bear |
| 2 | Bee |
| 3 | Bison |
| 4 | Capybara |
| 5 | Carp |
| 6 | Rabbit |
| 7 | Rooster |
| 8 | Sloth |
| 9 | Stag |
| 10 | Vulture |
^forager-animal-lord-appearances

**Hunter Animal Lord Appearances**

| dice: 1d10 | Bestial Shape |
|------------|---------------|
| 1 | Alligator |
| 2 | Badger |
| 3 | Bat |
| 4 | Cat |
| 5 | Hawk |
| 6 | Mongoose |
| 7 | Praying mantis |
| 8 | Shark |
| 9 | Snake |
| 10 | Wolf |
^hunter-animal-lord-appearances

**Sage Animal Lord Appearances**

| dice: 1d10 | Bestial Shape |
|------------|---------------|
| 1 | Coyote |
| 2 | Crow |
| 3 | Elephant |
| 4 | Lizard |
| 5 | Mouse |
| 6 | Owl |
| 7 | Salmon |
| 8 | Spider |
| 9 | Turtle |
| 10 | Whale |
^sage-animal-lord-appearances

```statblock
"name": "Animal Lord (XMM)"
"size": "Medium"
"type": "celestial"
"alignment": "Neutral"
"ac": !!int "19"
"hp": !!int "323"
"hit_dice": "34d8 + 170"
"modifier": !!int "19"
"stats":
  - !!int "24"
  - !!int "25"
  - !!int "20"
  - !!int "19"
  - !!int "23"
  - !!int "22"
"speed": "60 ft., fly 60 ft. (hover), swim 60 ft."
"saves":
  - "constitution": !!int "11"
  - "wisdom": !!int "12"
"skillsaves":
  - "name": "[Acrobatics](3.%20Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+13"
  - "name": "[Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+13"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+18"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+13"
"damage_resistances": "cold, fire, necrotic, psychic, radiant"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), [stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[truesight](3.%20Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive\
  \ Perception 28"
"languages": "all"
"cr": "20"
"traits":
  - "desc": "An animal lord represents a Forager, Hunter, or Sage (DM's choice), which\
      \ determines certain traits in this stat block."
    "name": "Animal Lordship"
  - "desc": "If the animal lord fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day)"
  - "desc": "*Wisdom Saving Throw:* DC 20, any enemy that starts its turn in a 30-foot\
      \ [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the animal lord. *Failure:* The target suffers one of the\
      \ following effects:\n\n- **Captivated (Forager Only).** The target has the\
      \ [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed) condition until\
      \ the end of its next turn. While [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
      \ the target has the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition.  \n- **Fearful (Hunter Only).** The target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition until the end of its next turn.  \n- **Mired (Sage Only).** The\
      \ target takes 10 (3d6) Psychic damage, and the target is magically bewildered\
      \ until the end of its next turn. While bewildered, the target subtracts 1d4\
      \ from its saving throws.  "
    "name": "Lordly Presence"
  - "desc": "The animal lord has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The animal lord makes two attacks, using Rend or Radiant Ray in any combination,\
      \ and uses Animal Spirit."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +13, reach 5 ft. *Hit:* 14 (2d6 + 7) Slashing\
      \ damage plus 7 (2d6) Force damage."
    "name": "Rend"
  - "desc": "*Ranged Attack Roll:* +12, range 120 ft. *Hit:* 20 (4d6 + 6) Radiant\
      \ damage."
    "name": "Radiant Ray"
  - "desc": "The animal lord conjures an animal spirit that strikes at a creature\
      \ and then disappears. *Dexterity Saving Throw:* DC 20, one creature the animal\
      \ lord can see within 120 feet. *Failure:* 28 (4d10 + 6) Radiant damage. *Success:*\
      \ Half damage. *Failure or Success:* One of the following effects occurs:\n\n\
      - **Fortify (Forager Only).** The animal lord gains 20 [Temporary Hit Points](3.%20Mechanics/CLI/rules/variant-rules/temporary-hit-points-xphb.md).\
      \  \n- **Marked as Prey (Hunter Only).** The animal lord has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on attack rolls against the target until the start of the animal lord's next\
      \ turn.  \n- **Pesky Swarm (Sage Only).** The target has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on attack rolls and ability checks until the end of its next turn.  "
    "name": "Animal Spirit"
  - "desc": "The animal lord casts one of the following spells, requiring no Material\
      \ components and using Wisdom as the spellcasting ability (spell save DC 20):\n\
      \n**At will:** [Animal Friendship](3.%20Mechanics/CLI/spells/animal-friendship-xphb.md),\
      \ [Animal Messenger](3.%20Mechanics/CLI/spells/animal-messenger-xphb.md), [Speak\
      \ with Animals](3.%20Mechanics/CLI/spells/speak-with-animals-xphb.md)\n\n**2/day\
      \ each:** [Awaken](3.%20Mechanics/CLI/spells/awaken-xphb.md), [Greater Restoration](3.%20Mechanics/CLI/spells/greater-restoration-xphb.md)\n\
      \n**1/day each:** [Animal Shapes](3.%20Mechanics/CLI/spells/animal-shapes-xphb.md),\
      \ [Sunburst](3.%20Mechanics/CLI/spells/sunburst-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The animal lord shape-shifts into a Huge or smaller version of the animal\
      \ it represents or a Medium or Small Humanoid, or it returns to its true form.\
      \ Its game statistics, other than its size, are the same in each form. Any equipment\
      \ it is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the animal lord can expend a use to take one of the following actions. The\
  \ animal lord regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The animal lord moves up to its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ without provoking [Opportunity Attacks](3.%20Mechanics/CLI/rules/actions.md#Opportunity%20Attack),\
      \ and it makes one Rend attack."
    "name": "Feral Strike"
  - "desc": "The animal lord makes one Radiant Ray attack."
    "name": "Radiant Strike"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/celestial/token/animal-lord-xmm.webp"
```
^statblock

## Environment

planar, beastlands