---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Vampirate Captain
---
# [Vampirate Captain](3. Mechanics\CLI\bestiary\undead/vampirate-captain-bam.md)
*Source: Boo's Astral Menagerie p. 63, Light of Xaryxis*  

How a crew of vampirates conducts itself depends entirely on the mood and disposition of the captain. The crew of one ship might behave like a murderous mob, while another might abide by an ancient code of chivalry. One captain might allow the crew of a plundered ship to live, while another might leave only flotsam and jetsam in the pirates' wake.

The captain is often accompanied by an undying companion, such as a crawling claw or a will-o'-wisp.

```statblock
"name": "Vampirate Captain (BAM)"
"size": "Medium"
"type": "undead"
"alignment": "typically  Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "10d8 + 40"
"modifier": !!int "3"
"stats":
  - !!int "15"
  - !!int "16"
  - !!int "18"
  - !!int "12"
  - !!int "13"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "constitution": !!int "7"
  - "wisdom": !!int "4"
  - "charisma": !!int "6"
"damage_vulnerabilities": "radiant"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 11"
"languages": "the languages it knew in life"
"cr": "6"
"traits":
  - "desc": "When the captain is reduced to 0 hit points, it explodes in a cloud of\
      \ ash. Any creature within 5 feet of it must succeed on a DC 15 Constitution\
      \ saving throw or take 16 (3d10) necrotic damage."
    "name": "Explode"
  - "desc": "The captain can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The captain doesn't require air or drink."
    "name": "Unusual Nature"
"actions":
  - "desc": "*Melee  or Ranged Spell Attack:* +6 to hit, reach 5 ft. or range 30\
      \ ft., one creature. *Hit:* 22 (4d10) necrotic damage. A Humanoid reduced\
      \ to 0 hit points by this attack dies and instantly transforms into a free-willed\
      \ shadow or vampirate (captain's choice) under the DM's control."
    "name": "Energy Drain"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 100/400 ft., one target. *Hit:*\
      \ 19 (3d10 + 3) piercing damage."
    "name": "Heavy Crossbow"
  - "desc": "A ship upon which the captain stands, along with all creatures and objects\
      \ aboard it, becomes [invisible](3.%20Mechanics/CLI/rules/conditions.md#Invisible)\
      \ to creatures not aboard the ship. The captain must concentrate on this magical\
      \ effect to maintain it (as if [concentrating](3.%20Mechanics/CLI/rules/conditions.md#Concentration)\
      \ on a spell), and it lasts for up to 1 hour. The effect ends if the captain\
      \ leaves the ship."
    "name": "Ship Invisibility (Recharges after a Short or Long Rest)"
"reactions":
  - "desc": "The captain halves the damage that it takes from an attack that hits\
      \ it. The captain must be able to see the attacker."
    "name": "Uncanny Dodge"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/vampirate-captain-bam.webp"
```
^statblock