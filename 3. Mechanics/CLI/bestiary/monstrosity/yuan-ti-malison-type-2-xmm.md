---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Yuan-ti Malison (Type 2)
---
# [Yuan-ti Malison (Type 2)](3. Mechanics\CLI\bestiary\monstrosity/yuan-ti-malison-type-2-xmm.md)
*Source: Monster Manual (2024) p. 343*  

Malisons exhibit snakelike features that make them deadly in combat.

- **Type 2.** These malisons have human bodies, but they've replaced their arms with snakes.  

Malisons possesses deadly venom, which some manipulate into magical strikes. They can also shape-shift into snakes, helping them to position themselves for surprise attacks or to slither away with nary a trace.

## Yuan-ti

*Power-Hungry Serpentine Conspirators*

- **Habitat.** Desert, Forest, Swamp, Urban  
- **Treasure.** [Relics](3.%20Mechanics/CLI/tables/random-magic-items-relics.md)  

Exploiting pacts with sinister supernatural forces, yuan-ti bargain away their humanity for the lethality and predatory deviousness of serpents. From hidden bastions, they manipulate rulers and the wealthy, seeking to control the world. Many yuan-ti possess venomous magic, which often manifests as fangs or striking serpents.

Yuan-ti have humanlike forms with a variety of horrifying serpentine transformations. Some have a scattering of reptilian scales, while others are giants that are more snake than human. Typically, the more snakelike yuan-ti are, the greater esteem they hold among their kind.

Yuan-ti might gain their reptilian features through dangerous supernatural rites. Roll on or choose a result from the Yuan-ti Transformations table to inspire how yuan-ti obtain their serpentine aspects.

**Yuan-ti Transformations**

| dice: 1d6 | A Yuan-ti Gained Its Snake Features From... |
|-----------|---------------------------------------------|
| 1 | Bargaining parts of its soul to a pantheon of serpentine demigods. |
| 2 | A curse laid on its people in the distant past. |
| 3 | The dream-venom of Merrshaulk, a slumbering snake god. |
| 4 | Experiments by spirit nagas or other yuan-ti. |
| 5 | A ritual involving the skin of a fiendish snake. |
| 6 | Trials to excise its "weak" human parts. |
^yuan-ti-transformations

> [!quote] A quote from Last Message of Sorril Venil, Explorer of the Labyrinth of Madness  
> 
> Great magic, twisted and corrupted... Malice beyond reckoning... Flesh reshaped, becoming serpentine horrors...


```statblock
"name": "Yuan-ti Malison (Type 2) (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "14"
  - !!int "16"
  - !!int "12"
"speed": "30 ft., climb 30 ft. (snake form only)"
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4 (+6 while in snake form)"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Abyssal, Common, Draconic"
"cr": "3"
"traits":
  - "desc": "The yuan-ti has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The yuan-ti makes two Bite attacks, and it can use Spellcasting to cast\
      \ [Suggestion](3.%20Mechanics/CLI/spells/suggestion-xphb.md) if available."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 10 ft. *Hit:* 7 (1d8 + 3) Piercing\
      \ damage plus 7 (2d6) Poison damage."
    "name": "Bite"
  - "desc": "The yuan-ti casts one of the following spells, requiring no Material\
      \ components and using Wisdom as the spellcasting ability (spell save DC 13):\n\
      \n**At will:** [Animal Friendship](3.%20Mechanics/CLI/spells/animal-friendship-xphb.md)\
      \ (snakes only)\n\n**2/day:** [Suggestion](3.%20Mechanics/CLI/spells/suggestion-xphb.md)"
    "name": "Spellcasting (Yuan-ti Form Only)"
"bonus_actions":
  - "desc": "The yuan-ti shape-shifts into a Medium snake or returns to its true form.\
      \ If it dies, it stays in its current form. The yuan-ti's game statistics are\
      \ the same in each form, except where noted. Any equipment it is wearing or\
      \ carrying isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/yuan-ti-malison-type-2-xmm.webp"
```
^statblock

## Environment

desert, forest, swamp, urban