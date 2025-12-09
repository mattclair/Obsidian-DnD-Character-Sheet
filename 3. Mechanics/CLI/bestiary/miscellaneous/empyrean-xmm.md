---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/23
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type//titan
statblock: inline
statblock-link: "#^statblock"
aliases:
- Empyrean
---
# [Empyrean](3. Mechanics\CLI\bestiary\miscellaneous/empyrean-xmm.md)
*Source: Monster Manual (2024) p. 113*  

Inheritors of divine might, empyreans are idealized, human-shaped beings of godly power. These beings might have relationships with their creators akin to those of parents and their children, royalty and their servants, inventors and their creations, or other bonds. Empyreans' existences are fundamentally influenced by their patrons and their connection to the heavenly deities of the Upper Planes or the fiendish deities of the Lower Planes. Nevertheless, empyreans have free will.

Celestial empyreans are typically noble beings who quest to prove themselves worthy of their divine pedigree. Many work in the service of their parents or support those gods' causes and champions. Fiendish empyreans are usually dreadful, self-serving villains who seek to claim their parents' power. Some forge unholy armies or rule over hidden realms in mockery of true gods, while others might seek to escape their accursed families.

## Empyreans

*Scions of the Gods*

- **Habitat.** Any  
- **Treasure.** [Relics](3.%20Mechanics/CLI/tables/random-magic-items-relics.md)  

Empyreans are the spawn of deities. While not gods themselves, they possess divine influence and powers related to their divine parents. Some empyreans are near-demigods with fantastic might and the power to reshape mortal lives. Others are little more than divine thoughts or moments of immortal attention made manifest. Whether empyreans are idealized beings or vestiges of divinity, their appearances are influenced by their creators. Roll on or choose a result from the Empyrean Influences table to inspire what aspects of an empyrean's heritage manifest in its physical form.

**Empyrean Influences**

| dice: 1d6 | The Empyrean Has Features That Are... |
|-----------|---------------------------------------|
| 1 | Balanced, naturalistic, or suggestive of watching eyes. |
| 2 | Colorful, shadowy, or fluid or that vary depending on the viewer. |
| 3 | Comforting and gentle or that remind viewers of pleasant memories. |
| 4 | Disconnected parts, visible thoughts, or errant shapes. |
| 5 | Machinelike, stoic, symmetrical, or suggestive of judgment. |
| 6 | Morbid, menacing, or monstrous or that embody the viewer's fears. |
^empyrean-influences

> [!quote] A quote from Kopoha, Scion of Storms  
> 
> One day I might be the god of storms—mind countless followers, answer prayers, change whole worlds—but, until then, I do what I please.


```statblock
"name": "Empyrean (XMM)"
"size": "Huge"
"subtype": "titan"
"alignment": "Neutral"
"ac": !!int "22"
"hp": !!int "346"
"hit_dice": "21d12 + 210"
"modifier": !!int "19"
"stats":
  - !!int "30"
  - !!int "21"
  - !!int "30"
  - !!int "21"
  - !!int "22"
  - !!int "27"
"speed": "50 ft., fly 50 ft. (hover), swim 50 ft."
"saves":
  - "strength": !!int "17"
  - "wisdom": !!int "13"
"skillsaves":
  - "name": "[Insight](3.%20Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+13"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+13"
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "necrotic, radiant"
"senses": "[truesight](3.%20Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive\
  \ Perception 23"
"languages": "all"
"cr": "23"
"traits":
  - "desc": "If the empyrean fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day)"
  - "desc": "The empyrean has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The empyrean makes two attacks, using Sacred Weapon or Divine Ray in\
      \ any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +17, reach 10 ft. *Hit:* 31 (6d6 + 10) Force\
      \ damage, and the target has the [Stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned)\
      \ condition until the start of the empyrean's next turn. The target can choose\
      \ not to be [Stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned), in which\
      \ case it takes an extra 21 Force damage that bypasses [Resistance](3.%20Mechanics/CLI/rules/variant-rules/resistance-xphb.md)\
      \ or [Immunity](3.%20Mechanics/CLI/rules/variant-rules/immunity-xphb.md)."
    "name": "Sacred Weapon"
  - "desc": "*Ranged Attack Roll:* +15, range 600 ft. *Hit:* 35 (6d8 + 8) Necrotic\
      \ or Radiant damage (empyrean's choice)."
    "name": "Divine Ray"
  - "desc": "The empyrean casts one of the following spells, requiring no Material\
      \ components and using Charisma as the spellcasting ability (spell save DC 23):\n\
      \n**At will:** [Calm Emotions](3.%20Mechanics/CLI/spells/calm-emotions-xphb.md),\
      \ [Greater Restoration](3.%20Mechanics/CLI/spells/greater-restoration-xphb.md),\
      \ [Pass without Trace](3.%20Mechanics/CLI/spells/pass-without-trace-xphb.md),\
      \ [Water Breathing](3.%20Mechanics/CLI/spells/water-breathing-xphb.md)\n\n**1/day\
      \ each:** [Commune](3.%20Mechanics/CLI/spells/commune-xphb.md), [Dispel Evil\
      \ and Good](3.%20Mechanics/CLI/spells/dispel-evil-and-good-xphb.md), [Plane\
      \ Shift](3.%20Mechanics/CLI/spells/plane-shift-xphb.md)"
    "name": "Spellcasting"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the empyrean can expend a use to take one of the following actions. The\
  \ empyrean regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The empyrean gains 10 [Temporary Hit Points](3.%20Mechanics/CLI/rules/variant-rules/temporary-hit-points-xphb.md),\
      \ and the empyrean and each ally within 30 feet of it gain [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on [D20 Tests](3.%20Mechanics/CLI/rules/variant-rules/d20-test-xphb.md) until\
      \ the end of the empyrean's next turn. The empyrean can't take this action again\
      \ until the start of its next turn."
    "name": "Bolster"
  - "desc": "*Constitution Saving Throw:* DC 23, each creature in a 30-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the empyrean. *Failure:* 27 (6d8) Force damage, and the\
      \ target has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone) condition.\
      \ *Success:* Half damage only. *Failure or Success:* The empyrean can't take\
      \ this action again until the start of its next turn."
    "name": "Shockwave of Glory"
  - "desc": "The empyrean makes one Divine Ray attack."
    "name": "Smite"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/miscellaneous/token/empyrean-xmm.webp"
```
^statblock

## Environment

any