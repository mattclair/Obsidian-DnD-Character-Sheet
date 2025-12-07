---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Esthetic
---
# [Esthetic](3. Mechanics\CLI\bestiary\aberration/esthetic-bam.md)
*Source: Boo's Astral Menagerie p. 20, Light of Xaryxis*  

An esthetic is a biological, symbiotic creation of a reigar. It is essentially an organic ship with only the barest hint of awareness. Without its reigar to guide it, an esthetic becomes a nearly mindless entity with an instinct for self-preservation.

Reigar use their esthetics as spelljamming warships. When a hostile reigar in its esthetic encounters another spacefaring vessel, it uses a magical vibration to disable the ship's spelljamming helm. The reigar then commands the esthetic to grapple members of the ship's crew and dissolve their flesh with its acid-secreting tentacles.

Each esthetic is unique in appearance. One might be bilaterally symmetrical (two matching halves, like a humanoid body along its vertical axis), radially symmetrical (like a starfish), or have no definable shape. From a distance, an esthetic is easily mistaken for a giant, space-dwelling jellyfish or cephalopod. Its outer shell is made of bioluminescent resin.

An esthetic contains enough interior space to comfortably accommodate its reigar host and up to six Medium passengers. Access is gained through a hatch that the reigar (and no one else) can open or close with a touch.

An esthetic can survive indefinitely on the Astral Plane, provided its creator is alive. If the esthetic's creator dies, the esthetic sickens over a period of `1d12` days and then expires.

```statblock
"name": "Esthetic (BAM)"
"size": "Gargantuan"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "217"
"hit_dice": "14d20 + 70"
"modifier": !!int "-1"
"stats":
  - !!int "24"
  - !!int "8"
  - !!int "20"
  - !!int "1"
  - !!int "10"
  - !!int "1"
"speed": "0 ft., fly 60 ft. (hover)"
"damage_immunities": "acid"
"condition_immunities": "[blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded),\
  \ [charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed), [deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified), [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 300 ft. (blind\
  \ beyond this radius), passive Perception 12"
"languages": ""
"cr": "12"
"traits":
  - "desc": "While it has at least 1 hit point, the esthetic sheds bright light in\
      \ a 30-foot radius and dim light for an additional 30 feet, and its interior\
      \ compartments are dimly lit."
    "name": "Bioluminescence"
  - "desc": "The esthetic has the properties of a spelljamming helm (see the Astral\
      \ Adventurer's Guide), but only its reigar creator can attune to it."
    "name": "Spelljamming"
  - "desc": "The esthetic doesn't require air, food, or drink."
    "name": "Unusual Nature"
"actions":
  - "desc": "The esthetic makes two Tentacle attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +11 to hit, reach 30 ft., one target. *Hit:*\
      \ 17 (3d6 + 7) force damage, and if the target is a creature, it is [grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 17). Until this grapple ends, the creature takes 18 (4d8) acid\
      \ damage at the start of each of its turns, and the esthetic can't use this\
      \ tentacle against other targets. The esthetic has 1d4 × 2 tentacles, each\
      \ of which can grapple one target."
    "name": "Tentacle"
"bonus_actions":
  - "desc": "The esthetic targets one spelljamming ship within 300 feet of itself,\
      \ magically suppressing the properties of the ship's spelljamming helm for 2d10\
      \ days. If the ship has more than one helm aboard it, randomly determine which\
      \ helm is affected. A creature attuned to that helm can choose to make a DC\
      \ 17 Charisma saving throw. On a failed save, the creature takes 42 (12d6)\
      \ psychic damage, and the helm is suppressed for 2d10 hours instead of 2d10\
      \ days. On a successful save, the creature takes half as much damage, and the\
      \ helm is suppressed for 2d10 minutes instead of 2d10 days."
    "name": "Jammerscream (Recharge 6)"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/esthetic-bam.webp"
```
^statblock