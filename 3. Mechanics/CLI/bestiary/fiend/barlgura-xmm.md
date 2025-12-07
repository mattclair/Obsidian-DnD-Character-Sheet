---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Barlgura
---
# [Barlgura](3. Mechanics\CLI\bestiary\fiend/barlgura-xmm.md)
*Source: Monster Manual (2024) p. 31*  

## Barlgura

*Demon of Instinct and Primal Violence*

- **Habitat.** Planar (Abyss)  
- **Treasure.** Any  

Barlguras are demons that embody brutality and killer instincts. They ruthlessly hunt creatures that enter their territories, whether such places are Abyssal wildernesses or locations where these demons have been conjured by wicked magic-users. Barlguras litter their territories with fiendish icons and terrifying evidence of their kills.

Barlguras cooperate with other demons, particularly other barlguras, so long as they have ample prey. Should a region be depleted of creatures to slaughter, these demons turn on one another in frays that can devastate vast expanses.

Barlguras vary in appearance, but all have powerful frames and hands capable of climbing swiftly and delivering crushing blows. If brute force isn't enough to overwhelm their foes, barlguras can use demonic magic to conjure terrifying illusions and grasping vines. Most barlguras resemble nightmarish apes, and some bear exaggerated versions of features of predators common to the lands the barlguras inhabit. Many embed trophies from past hunts in their demonic bodies.

```statblock
"name": "Barlgura (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "7"
  - !!int "14"
  - !!int "9"
"speed": "40 ft., climb 40 ft."
"saves":
  - "dexterity": !!int "5"
  - "constitution": !!int "6"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 30 ft., [darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 15"
"languages": "Abyssal; telepathy 120 ft."
"cr": "5"
"traits":
  - "desc": "If the barlgura dies outside the Abyss, its body dissolves into ichor,\
      \ and it gains a new body instantly, reviving with all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Abyss."
    "name": "Demonic Restoration"
"actions":
  - "desc": "The barlgura makes one Tormenting Bite attack and two Thrash attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 11 (2d6 + 4) Piercing\
      \ damage plus 13 (2d12) Psychic damage."
    "name": "Tormenting Bite"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 9 (1d10 + 4) Bludgeoning\
      \ damage. If the target is a Large or smaller creature, it has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Thrash"
  - "desc": "The barlgura casts one of the following spells, requiring no Material\
      \ components and using Wisdom as the spellcasting ability (spell save DC 13):\n\
      \n**2/day each:** [Disguise Self](3.%20Mechanics/CLI/spells/disguise-self-xphb.md),\
      \ [Invisibility](3.%20Mechanics/CLI/spells/invisibility-xphb.md) (self only)\n\
      \n**1/day each:** [Entangle](3.%20Mechanics/CLI/spells/entangle-xphb.md), [Phantasmal\
      \ Killer](3.%20Mechanics/CLI/spells/phantasmal-killer-xphb.md) (level 6 version)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The barlgura jumps up to 40 feet by spending 10 feet of movement."
    "name": "Leap"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/barlgura-xmm.webp"
```
^statblock

## Environment

planar, abyss