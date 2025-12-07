---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/lmop
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- Evil Mage
---
# [Evil Mage](3. Mechanics\CLI\bestiary\humanoid/evil-mage-lmop.md)
*Source: Lost Mine of Phandelver p. 57*  

Evil mages (such as Iarno Albrek and Hamun Kost) hunger for arcane power and dwell in isolated places, where they can perform terrible magical experiments without interference.

```statblock
"name": "Evil Mage (LMoP)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "11"
  - !!int "17"
  - !!int "12"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "5"
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[History](3.%20Mechanics/CLI/rules/skills.md#History)"
    "desc": "+5"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Dwarvish, Elvish"
"cr": "1"
"traits":
  - "desc": "The mage is a 4th-level spellcaster that uses Intelligence as its spellcasting\
      \ ability (spell save DC 13; +5 to hit with spell attacks). The mage knows\
      \ the following spells from the wizard's spell list:\n\n**Cantrips (at will):**\
      \ [light](3.%20Mechanics/CLI/spells/light-xphb.md), [mage hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [shocking grasp](3.%20Mechanics/CLI/spells/shocking-grasp-xphb.md)\n\n**1st\
      \ level (4 slots):** [charm person](3.%20Mechanics/CLI/spells/charm-person-xphb.md),\
      \ [magic missile](3.%20Mechanics/CLI/spells/magic-missile-xphb.md)\n\n**2nd\
      \ level (3 slots):** [hold person](3.%20Mechanics/CLI/spells/hold-person-xphb.md),\
      \ [misty step](3.%20Mechanics/CLI/spells/misty-step-xphb.md)"
    "name": "Spellcasting"
"actions":
  - "desc": "*Melee Weapon Attack:* +1 to hit, reach 5 ft., one target. *Hit:* 3\
      \ (1d8 - 1) bludgeoning damage."
    "name": "Quarterstaff"
"source":
  - "LMoP"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/evil-mage-lmop.webp"
```
^statblock