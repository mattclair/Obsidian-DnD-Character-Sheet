---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/environment/nine-hells
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- Pit Fiend
---
# [Pit Fiend](3. Mechanics\CLI\bestiary\fiend/pit-fiend-xmm.md)
*Source: Monster Manual (2024) p. 243. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Pit Fiend

*Devil of Domination*

- **Habitat.** Planar (Nine Hells)  
- **Treasure.** [Relics](3.%20Mechanics/CLI/tables/random-magic-items-relics.md)  

Masterminds of the Nine Hells and generals of infernal legions, pit fiends seek conquests across the planes of existence. More than warmongers, these diabolical tyrants concoct intricate plots that play out among fiendish battlefields, infernal politics, and mortal conspiracies.

Pit fiends are the nobility of the Nine Hells, and many rule Lower Planar fiefdoms, doomed mortal worlds, and other infernal redoubts. Most serve archdevils of the Nine Hells as they pursue their own ambitions. Ranks of lesser devils obey pit fiends, but these cunning tyrants remain on guard against betrayal from their servants.

Smoldering with the evil of the Nine Hells, pit fiends strike fear in creatures with their mere presence. Despite their size and incredible physical and magical might, pit fiends are as likely to try to corrupt foes as they are to destroy them outright. Pit fiends' arrogance can lead them to underestimate mortal foes—a failing that can lead to their downfall.

```statblock
"name": "Pit Fiend (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "21"
"hp": !!int "337"
"hit_dice": "27d10 + 189"
"modifier": !!int "14"
"stats":
  - !!int "26"
  - !!int "14"
  - !!int "24"
  - !!int "22"
  - !!int "18"
  - !!int "24"
"speed": "30 ft., fly 60 ft."
"saves":
  - "dexterity": !!int "8"
  - "wisdom": !!int "10"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+10"
  - "name": "[Persuasion](3.%20Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+19"
"damage_resistances": "cold"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](3.%20Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive\
  \ Perception 20"
"languages": "Infernal; telepathy 120 ft."
"cr": "20"
"traits":
  - "desc": "If the pit fiend dies outside the Nine Hells, its body disappears in\
      \ sulfurous smoke, and it gains a new body instantly, reviving with all its\
      \ [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md) somewhere\
      \ in the Nine Hells."
    "name": "Diabolical Restoration"
  - "desc": "The pit fiend emanates an aura in a 20-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ while it doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition. *Wisdom Saving Throw:* DC 21, any enemy that starts its turn in\
      \ the aura. *Failure:* The target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition until the start of its next turn. *Success:* The target is immune\
      \ to this pit fiend's aura for 24 hours."
    "name": "Fear Aura"
  - "desc": "If the pit fiend fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day)"
  - "desc": "The pit fiend has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The pit fiend makes one Bite attack, two Devilish Claw attacks, and one\
      \ Fiery Mace attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +14, reach 10 ft. *Hit:* 18 (3d6 + 8) Piercing\
      \ damage. If the target is a creature, it must make the following saving throw.\
      \ *Constitution Saving Throw:* DC 21. *Failure:* The target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition. While [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
      \ the target can't regain [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ and takes 21 (6d6) Poison damage at the start of each of its turns, and\
      \ it repeats the save at the end of each of its turns, ending the effect on\
      \ itself on a success. After 1 minute, it succeeds automatically."
    "name": "Bite"
  - "desc": "*Melee Attack Roll:* +14, reach 10 ft. *Hit:* 26 (4d8 + 8) Necrotic\
      \ damage."
    "name": "Devilish Claw"
  - "desc": "*Melee Attack Roll:* +14, reach 10 ft. *Hit:* 22 (4d6 + 8) Force\
      \ damage plus 21 (6d6) Fire damage."
    "name": "Fiery Mace"
  - "desc": "The pit fiend casts [Fireball](3.%20Mechanics/CLI/spells/fireball-xphb.md)\
      \ (level 5 version) twice, requiring no Material components and using Charisma\
      \ as the spellcasting ability (spell save DC 21). It can replace one [Fireball](3.%20Mechanics/CLI/spells/fireball-xphb.md)\
      \ with [Hold Monster](3.%20Mechanics/CLI/spells/hold-monster-xphb.md) (level\
      \ 7 version) or [Wall of Fire](3.%20Mechanics/CLI/spells/wall-of-fire-xphb.md).\n"
    "name": "Hellfire Spellcasting (Recharge 4-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/pit-fiend-xmm.webp"
```
^statblock

## Environment

planar, nine hells