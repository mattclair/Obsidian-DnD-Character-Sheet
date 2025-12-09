---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Megapede
---
# [Megapede](3. Mechanics\CLI\bestiary\monstrosity/megapede-bam.md)
*Source: Boo's Astral Menagerie p. 36, Light of Xaryxis*  

Megapedes are enormous centipedes that can be as much as 150 feet long, though most specimens top out at between 100 and 120 feet. Their dozens of legs are each 5 feet long and tipped with flexible claws, and they have fur-covered carapaces. A megapede that lives in a sandy environment often buries itself in the sand and waits for prey to wander nearby, but megapedes also nest in cavernous underground chambers.

A megapede's bite is poisonous. In addition, the creature has magical abilities that make it a superior predator. It can exude an invisible aura of life-draining energy, or it can fix its gaze on one creature and implant a psychic bomb in that creature's mind.

After a megapede lays eggs, it attaches the eggs to its body using sticky saliva and carries them on its back until the eggs hatch. Newly hatched megapedes grow to full size within weeks by consuming as much as they can, possibly including one another if food is scarce.

```statblock
"name": "Megapede (BAM)"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "175"
"hit_dice": "13d20 + 39"
"modifier": !!int "0"
"stats":
  - !!int "22"
  - !!int "10"
  - !!int "17"
  - !!int "1"
  - !!int "10"
  - !!int "3"
"speed": "40 ft., climb 40 ft."
"saves":
  - "constitution": !!int "7"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+8"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 18"
"languages": ""
"cr": "11"
"actions":
  - "desc": "The megapede makes one Bite attack and uses either Life Drain or Psychic\
      \ Bomb."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 20 ft., one target. *Hit:*\
      \ 22 (3d10 + 6) piercing damage plus 22 (5d8) poison damage."
    "name": "Bite"
  - "desc": "The megapede magically drains life energy from other creatures nearby.\
      \ Each creature within 15 feet of the megapede must make a DC 15 Constitution\
      \ saving throw, taking 16 (3d10) necrotic damage on a failed save, or half\
      \ as much damage on a successful one."
    "name": "Life Drain"
  - "desc": "The megapede targets one creature it can see within 60 feet of itself.\
      \ The target must make a DC 15 Wisdom saving throw. On a failed save, the target\
      \ takes 22 (5d8) psychic damage and is [incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ until the end of its next turn. On a successful save, the target takes half\
      \ as much damage and isn't [incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Psychic Bomb"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/megapede-bam.webp"
```
^statblock