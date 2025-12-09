---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/unknown
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dracolich
---
# [Dracolich](3. Mechanics\CLI\bestiary\undead/dracolich-xmm.md)
*Source: Monster Manual (2024) p. 102*  

## Dracolich

*Draconic Tyrant Reborn*

- **Habitat.** Any  
- **Treasure.** Any  

The vilest dragons seek to escape the grip of death, employing ageless secrets and blasphemous magic to become horrors called dracoliches. These deathless dragons bind their spirits to gems and magically animate their rotting corpses. Eventually becoming skeletal horrors, dracoliches continue the centuries-spanning plots they pursued in life, seek revenge on those that brought them low, and strive toward vicious goals they couldn't indulge in life.

Dracoliches combine the corrupt immortality of the undead with the legendary power of dragons. A dracolich retains a breath weapon, but it is a chilling necrotic blast. These terrors gradually sicken the land near their lairs and attract sinister followers—usually other undead or cultists seeking to revel in their terrible might. Living dragons of all types loathe and seek to destroy dracoliches, viewing them as distortions of draconic magic.

There are untold profane routes by which a dragon might become a dracolich. However one is created, a dracolich chooses a gem that becomes the anchor for its spirit and binds the deathless dragon to the world. So long as a dracolich is on the same plane of existence as its soul gem, the dracolich can survive the destruction of its physical body. Its spirit retreats into the gem if the dracolich's body is destroyed, and the monster might one day regain its terrifying form. Dracoliches often sequester their soul gems within meaningful treasure from their hoard or in unassuming baubles. Roll on or choose a result from the Dracolich Soul Gem Vessels table to inspire what holds a dracolich's soul gem.

**Dracolich Soul Gem Vessels**

| dice: 1d10 | A Dracolich's Soul Gem Is Hidden In... |
|------------|----------------------------------------|
| 1 | Another dragon's treasure hoard. |
| 2 | The body of a servant or an ancestor. |
| 3 | The core of a dracolich's melted hoard. |
| 4 | A corrupted dragon egg. |
| 5 | A dragon horn a hero took as a trophy. |
| 6 | A nation's royal or religious treasure. |
| 7 | A powerful magic item. |
| 8 | A source of magical wonders, such as a giant tree or mystical pool. |
| 9 | The vault of an archdevil, a wicked god, or another extraplanar villain. |
| 10 | The weapon that slew the dracolich. |
^dracolich-soul-gem-vessels

### Dracolich Lairs

A dracolich lurks in a corrupted version of the lair it had in life.

> [!quote] A quote from Sammaster the Fallen's translation of The Chronicle of Years to Come  
> 
> And naught will be left save shattered thrones with no rulers. But the dead dragons shall rule the world entire...


```statblock
"name": "Dracolich (XMM)"
"size": "Unknown"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "20"
"hp": !!int "225"
"hit_dice": "18d12 + 108"
"modifier": !!int "12"
"stats":
  - !!int "25"
  - !!int "10"
  - !!int "23"
  - !!int "19"
  - !!int "15"
  - !!int "21"
"speed": "40 ft., burrow 30 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "6"
  - "wisdom": !!int "8"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+14"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., [darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 24"
"languages": "Common, Draconic"
"cr": "17"
"traits":
  - "desc": "If the dracolich fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
  - "desc": "Creatures within 60 feet of the dracolich can't regain [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)."
    "name": "Life Suppression"
  - "desc": "The dracolich has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The dracolich has a magical gem. If the dracolich is destroyed while\
      \ the gem is on the same plane of existence as it, the dracolich gains a new\
      \ body in 1d20 days, regaining all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ and appearing within 5 feet of the gem.\n\nThe gem is a Tiny object that has\
      \ AC 20; HP 50; and [Immunity](3.%20Mechanics/CLI/rules/variant-rules/immunity-xphb.md)\
      \ to Necrotic, Poison, and Psychic damage. The gem regains all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ at the end of every turn, but it turns to dust if reduced to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md).\
      \ If the gem is destroyed, the dracolich can create a new one by completing\
      \ an 8-hour ritual using a gem worth 1,000+ GP and by expending 5,000 GP, which\
      \ the ritual consumes."
    "name": "Soul Gem"
"actions":
  - "desc": "The dracolich makes three Rend attacks. It can replace one attack with\
      \ a use of Spellcasting to cast [Ray of Sickness](3.%20Mechanics/CLI/spells/ray-of-sickness-xphb.md)\
      \ (level 2 version)."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +13, reach 10 ft. *Hit:* 18 (2d10 + 7) Slashing\
      \ damage plus 4 (1d8) Necrotic damage."
    "name": "Rend"
  - "desc": "*Constitution Saving Throw:* DC 20, each creature in a 60-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 52 (8d12) Necrotic damage. *Success:* Half damage."
    "name": "Necrotic Breath (Recharge 5-6)"
  - "desc": "The dracolich casts one of the following spells, requiring no Material\
      \ components and using Charisma as the spellcasting ability (spell save DC 19,\
      \ +11 to hit with spell attacks):\n\n**At will:** [Detect Magic](3.%20Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [Ray of Sickness](3.%20Mechanics/CLI/spells/ray-of-sickness-xphb.md) (level\
      \ 2 version)\n\n**1/day each:** [Create Undead](3.%20Mechanics/CLI/spells/create-undead-xphb.md)\
      \ (level 8 version), [Finger of Death](3.%20Mechanics/CLI/spells/finger-of-death-xphb.md)"
    "name": "Spellcasting"
"regional_effects":
  - "desc": "The region containing a dracolich's lair is warped by its presence, creating\
      \ the following effects:\n\n- **Sapping Mist.** The area within 1 mile of the\
      \ lair is [Lightly Obscured](3.%20Mechanics/CLI/rules/variant-rules/lightly-obscured-xphb.md)\
      \ by pale fog. Whenever a creature other than the dracolich or one of its allies\
      \ finishes a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md)\
      \ in that area, it must succeed on a DC 15 Constitution saving throw or gain\
      \ 1 [Exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion) level. \
      \ \n- **Soul Drain.** Creatures within 1 mile of the lair have [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on Death Saving Throws.  \n\nIf the dracolich is destroyed or moves its lair\
      \ elsewhere, these effects end immediately. The effects resume if the dracolich\
      \ gains a new body (see its Soul Gem trait)."
    "name": ""
"legendary_description": "Legendary Action Uses: 3 (4 in Lair). Immediately after\
  \ another creature's turn, the dracolich can expend a use to take one of the following\
  \ actions. The dracolich regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The dracolich moves up to half its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md),\
      \ and it makes one Rend attack."
    "name": "Pounce"
  - "desc": "The dracolich uses Spellcasting to cast [Ray of Sickness](3.%20Mechanics/CLI/spells/ray-of-sickness-xphb.md)\
      \ (level 2 version). The dracolich can't take this action again until the start\
      \ of its next turn."
    "name": "Sickening Ray"
  - "desc": "*Wisdom Saving Throw:* DC 19, each creature in a 30-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the dracolich. *Failure:* 11 (2d10) Psychic damage, and\
      \ the target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition until the end of its next turn. *Failure or Success:* The dracolich\
      \ can't take this action again until the start of its next turn."
    "name": "Terrifying Presence"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/dracolich-xmm.webp"
```
^statblock

## Environment

any