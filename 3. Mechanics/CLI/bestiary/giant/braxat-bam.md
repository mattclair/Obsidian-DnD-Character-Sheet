---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Braxat
---
# [Braxat](3. Mechanics\CLI\bestiary\giant/braxat-bam.md)
*Source: Boo's Astral Menagerie p. 15, Light of Xaryxis*  

A braxat is a towering, warm-blooded carnivore with a thick, articulated shell covering its back, a squarish head topped with horny protrusions, and thick arms ending in large hands with opposable thumbs. The creature walks upright on two legs and speaks in a voice similar to that of a human.

Braxats hunt alone or in pairs, prowling deserts, dry canyons, desolate wastelands, and lonely asteroids in search of prey. Braxats also spew acid, though they tend to do so only as a last resort, since the acid dissolves and ruins the flesh they crave.

A braxat projects an invisible psychic barrier around itself that enhances its natural armor, and it can amplify this magical energy to create shields of rippling force that deflect incoming attacks and absorb magic missile spells.

```statblock
"name": "Braxat (BAM)"
"size": "Huge"
"type": "giant"
"alignment": "typically  Neutral"
"ac": !!int "18"
"ac_class": "natural armor, intellect fortress"
"hp": !!int "162"
"hit_dice": "13d12 + 78"
"modifier": !!int "-1"
"stats":
  - !!int "26"
  - !!int "8"
  - !!int "22"
  - !!int "14"
  - !!int "13"
  - !!int "7"
"speed": "40 ft."
"damage_immunities": "acid, psychic"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Common, Giant"
"cr": "9"
"traits":
  - "desc": "The braxat's AC includes its Intelligence modifier."
    "name": "Intellect Fortress"
"actions":
  - "desc": "The braxat makes two Greatclub attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +12 to hit, reach 10 ft., one target. *Hit:*\
      \ 21 (3d8 + 8) bludgeoning damage."
    "name": "Greatclub"
  - "desc": "The braxat exhales a 15-foot cone of acid. Each creature in the cone\
      \ must make a DC 18 Constitution saving throw, taking 26 (4d12) acid damage\
      \ on a failed save, or half as much damage on a successful one."
    "name": "Acid Breath (Recharge 6)"
  - "desc": "The braxat casts one of the following spells, requiring no spell components\
      \ and using Intelligence as the spellcasting ability (spell save DC 14):\n\n\
      **1/day each:** [compulsion](3.%20Mechanics/CLI/spells/compulsion-xphb.md),\
      \ [fear](3.%20Mechanics/CLI/spells/fear-xphb.md)"
    "name": "Spellcasting (Psionics)"
"reactions":
  - "desc": "When the braxat would be hit by an attack roll or a [magic missile](3.%20Mechanics/CLI/spells/magic-missile-xphb.md)\
      \ spell that originates from a source the braxat can see, the braxat can create\
      \ an [invisible](3.%20Mechanics/CLI/rules/conditions.md#Invisible) barrier of\
      \ magical force around itself that lasts until the start of its next turn. This\
      \ barrier gives the braxat a +5 bonus to AC, including against the triggering\
      \ attack, and prevents [magic missile](3.%20Mechanics/CLI/spells/magic-missile-xphb.md)\
      \ spells from damaging it."
    "name": "Psionic Shield (3/Day)"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/giant/token/braxat-bam.webp"
```
^statblock