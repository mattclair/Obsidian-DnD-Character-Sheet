---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Thri-kreen Mystic
---
# [Thri-kreen Mystic](3. Mechanics\CLI\bestiary\monstrosity/thri-kreen-mystic-bam.md)
*Source: Boo's Astral Menagerie p. 61, Light of Xaryxis*  

Thri-kreen mystics use psionics to navigate difficult terrain in Wildspace, turn invisible, and drain life from their prey. They often serve as spelljammers aboard thri-kreen ships.

```statblock
"name": "Thri-kreen Mystic (BAM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "15"
  - !!int "13"
  - !!int "12"
  - !!int "16"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
  - "name": "[Survival](3.%20Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+6"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 16"
"languages": "telepathy 60 ft., Thri-kreen"
"cr": "5"
"actions":
  - "desc": "The thri-kreen makes two Gythka attacks or four Psychic Bolt attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d8 + 1) slashing damage."
    "name": "Gythka"
  - "desc": "*Ranged Spell Attack:* +6 to hit, range 60 ft., one creature. *Hit:*\
      \ 6 (1d6 + 3) psychic damage."
    "name": "Psychic Bolt"
  - "desc": "The thri-kreen targets one creature it can see within 30 feet of itself.\
      \ The target must make a DC 14 Constitution saving throw, taking 32 (5d12)\
      \ necrotic damage on a failed save, or half as much damage on a successful one.\
      \ The thri-kreen regains hit points equal to the damage dealt."
    "name": "Drain Vitality (Recharges after a Short or Long Rest)"
  - "desc": "The thri-kreen casts one of the following spells, requiring no spell\
      \ components and using Wisdom as the spellcasting ability:\n\n**At will:** [levitate](3.%20Mechanics/CLI/spells/levitate-xphb.md)\
      \ (self only), [mage hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md) (the\
      \ hand is invisible)\n\n**1/day each:** [freedom of movement](3.%20Mechanics/CLI/spells/freedom-of-movement-xphb.md)\
      \ (self only), [invisibility](3.%20Mechanics/CLI/spells/invisibility-xphb.md)\
      \ (self only)"
    "name": "Spellcasting (Psionics)"
"bonus_actions":
  - "desc": "The thri-kreen changes the color of its carapace to match the color and\
      \ texture of its surroundings, gaining advantage on Dexterity ([Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks it makes to hide in those surroundings."
    "name": "Chameleon Carapace"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/thri-kreen-mystic-bam.webp"
```
^statblock