---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Yuan-ti Abomination
---
# [Yuan-ti Abomination](3. Mechanics\CLI\bestiary\monstrosity/yuan-ti-abomination-xmm.md)
*Source: Monster Manual (2024) p. 345*  

Yuan-ti abominations have traded away nearly all evidence of their humanity, coming to resemble giant, upright serpents with scaly arms and hands. In battle, they relish opportunities to crush foes in their powerful coils or strike with their venomous fangs. These abominations can also shape-shift into snakes. In these forms, abominations are indistinguishable from normal serpents.

The true threat of yuan-ti abominations stems not from their physical might but from their cunning. These masterminds often lead cult-like cells of other yuan-ti and direct them in enacting elaborate conspiracies. Abominations avoid jeopardizing themselves, typically scheming from hidden bastions where they're protected by yuan-ti and serpent guardians. These cold-hearted leaders have a unique understanding of the supernatural forces that grant yuan-ti their powers, and they usually have insidious magical traps and contingencies at their disposal.

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
"name": "Yuan-ti Abomination (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"modifier": !!int "6"
"stats":
  - !!int "19"
  - !!int "16"
  - !!int "17"
  - !!int "17"
  - !!int "18"
  - !!int "15"
"speed": "40 ft., climb 30 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 17"
"languages": "Abyssal, Common, Draconic"
"cr": "7"
"traits":
  - "desc": "The yuan-ti has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The yuan-ti makes two Bite attacks, and it can use Spellcasting to cast\
      \ [Suggestion](3.%20Mechanics/CLI/spells/suggestion-xphb.md) if available."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 11 (2d6 + 4) Piercing\
      \ damage plus 10 (3d6) Poison damage."
    "name": "Bite"
  - "desc": "*Strength Saving Throw:* DC 15, one Large or smaller creature within\
      \ 5 feet. *Failure:* 28 (7d6 + 4) Bludgeoning damage. The target has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 14), and it has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition until the grapple ends. *Success:* Half damage only."
    "name": "Constrict"
  - "desc": "*Constitution Saving Throw:* DC 14, each creature in a 30-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 21 (6d6) Poison damage, and the target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the end of the yuan-ti's next turn. While [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
      \ the target has the [Blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded)\
      \ condition. *Success:* Half damage only."
    "name": "Poison Spray (Recharge 5-6)"
  - "desc": "The yuan-ti casts one of the following spells, requiring no Material\
      \ components and using Wisdom as the spellcasting ability (spell save DC 15):\n\
      \n**At will:** [Animal Friendship](3.%20Mechanics/CLI/spells/animal-friendship-xphb.md)\
      \ (snakes only)\n\n**3/day:** [Suggestion](3.%20Mechanics/CLI/spells/suggestion-xphb.md)"
    "name": "Spellcasting (Yuan-ti Form Only)"
"bonus_actions":
  - "desc": "The yuan-ti shape-shifts into a Large snake or returns to its true form.\
      \ If it dies, it stays in its current form. The yuan-ti's game statistics are\
      \ the same in each form, except where noted. Any equipment it is wearing or\
      \ carrying isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/yuan-ti-abomination-xmm.webp"
```
^statblock

## Environment

desert, forest, swamp, urban