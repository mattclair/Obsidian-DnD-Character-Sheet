---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity/lizardfolk
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ssurran Poisoner
---
# [Ssurran Poisoner](3. Mechanics\CLI\bestiary\monstrosity/ssurran-poisoner-bam.md)
*Source: Boo's Astral Menagerie p. 58, Light of Xaryxis*  

Ssurran poisoners coat their weapons with toxin and hurl bombs that release poisonous gas.

```statblock
"name": "Ssurran Poisoner (BAM)"
"size": "Medium"
"type": "monstrosity"
"subtype": "lizardfolk"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "natural armor, [shield](3.%20Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"modifier": !!int "1"
"stats":
  - !!int "13"
  - !!int "12"
  - !!int "13"
  - !!int "12"
  - !!int "12"
  - !!int "7"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
  - "name": "[Survival](3.%20Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+3"
"senses": "passive Perception 13"
"languages": "Draconic"
"cr": "1/2"
"traits":
  - "desc": "The ssurran can hold its breath for 15 minutes."
    "name": "Hold Breath"
"actions":
  - "desc": "The ssurran makes two Claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d6 + 1) slashing damage."
    "name": "Claw"
  - "desc": "*Melee  or Ranged Weapon Attack:* +3 to hit, reach 5 ft. or range 30/120\
      \ ft., one target. *Hit:* 4 (1d6 + 1) piercing damage plus 4 (1d8) poison\
      \ damage."
    "name": "Javelin"
  - "desc": "The ssurran throws a tangerine-sized bomb at a point up to 60 feet away,\
      \ where it explodes, releasing a 10-foot-radius sphere of poisonous gas that\
      \ disperses quickly. Each creature in the sphere must make a DC 11 Constitution\
      \ saving throw, taking 10 (3d6) poison damage on a failed save, or half as\
      \ much damage on a successful one. After the ssurran throws a bomb, roll a d6;\
      \ on a roll of 4 or lower, the ssurran has no more bombs to throw."
    "name": "Poison Bomb"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/ssurran-poisoner-bam.webp"
```
^statblock