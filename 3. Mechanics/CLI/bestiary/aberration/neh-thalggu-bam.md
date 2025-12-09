---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Neh-thalggu
---
# [Neh-thalggu](3. Mechanics\CLI\bestiary\aberration/neh-thalggu-bam.md)
*Source: Boo's Astral Menagerie p. 39, Light of Xaryxis*  

Known throughout the multiverse as brain collectors, neh-thalggu consume the brains of Humanoids and use them as receptacles to enhance their magical abilities.

Neh-thalggu are born in the nightmarish Far Realm, but they spread across the Astral Plane and find their way onto the various worlds of the Material Plane, where brains are much more abundant. A neh-thalggu has a bulbous body and six legs resembling those of a crustacean. Four bulging eyes and a tooth-filled maw dominate its hideous visage. Behind and above these features, one or more lumps protrude from its body, each one containing a brain the neh-thalggu has consumed.

After a neh-thalggu kills a victim, it uses its pincers to cut open the victim's head and remove the brain. It then swallows the brain whole. The collected brain is stored inside one of several pockets in the neh-thalggu's head. Once it has collected twelve brains in this fashion, it is overcome by an urge to return to the Far Realm and begins devoting all its energy to finding a way home.

In an encounter with a neh-thalggu, roll a `d12` to determine how many brains it has already collected.

```statblock
"name": "Neh-thalggu (BAM)"
"size": "Large"
"type": "aberration"
"alignment": "typically  Chaotic Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"modifier": !!int "-1"
"stats":
  - !!int "15"
  - !!int "8"
  - !!int "18"
  - !!int "12"
  - !!int "11"
  - !!int "7"
"speed": "40 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 10"
"languages": "Deep Speech; see also Brain Dump"
"cr": "4"
"traits":
  - "desc": "Whenever the neh-thalggu consumes a brain, it gains the magical ability\
      \ to speak and understand languages known by the brain's previous owner."
    "name": "Brain Dump"
  - "desc": "The neh-thalggu doesn't require air."
    "name": "Unusual Nature"
"actions":
  - "desc": "The neh-thalggu makes one Bite attack and two Claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d8 + 2) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one [incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ Humanoid. *Hit:* 35 (10d6) piercing damage. If this damage reduces the target\
      \ to 0 hit points, the neh-thalggu kills the target by extracting and consuming\
      \ its brain."
    "name": "Extract Brain"
  - "desc": "The neh-thalggu magically emits psychic energy at one Humanoid it can\
      \ see within 10 feet of itself. The target must make a DC 14 Wisdom saving throw.\
      \ On a failed save, the target takes 9 (2d8) psychic damage and is [incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ until the end of its next turn. On a successful save, the target takes half\
      \ as much damage and isn't [incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Mind Blast (Recharge 5-6)"
  - "desc": "The neh-thalggu casts one of the following spells, requiring no spell\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 11). It must have consumed the requisite number of brains to cast the spell,\
      \ as indicated:\n\n**1/day each:** [arms of Hadar](3.%20Mechanics/CLI/spells/arms-of-hadar-xphb.md)\
      \ (1 brain), [detect magic](3.%20Mechanics/CLI/spells/detect-magic-xphb.md)\
      \ (2 brains), [magic missile](3.%20Mechanics/CLI/spells/magic-missile-xphb.md)\
      \ (3 brains), [Tenser's floating disk](3.%20Mechanics/CLI/spells/tensers-floating-disk-xphb.md)\
      \ (4 brains), [darkness](3.%20Mechanics/CLI/spells/darkness-xphb.md) (5 brains),\
      \ [hold person](3.%20Mechanics/CLI/spells/hold-person-xphb.md) (6 brains), [invisibility](3.%20Mechanics/CLI/spells/invisibility-xphb.md)\
      \ (7 brains), [spider climb](3.%20Mechanics/CLI/spells/spider-climb-xphb.md)\
      \ (8 brains), [fear](3.%20Mechanics/CLI/spells/fear-xphb.md) (9 brains), [hypnotic\
      \ pattern](3.%20Mechanics/CLI/spells/hypnotic-pattern-xphb.md) (10 brains),\
      \ [major image](3.%20Mechanics/CLI/spells/major-image-xphb.md) (11 brains),\
      \ [stinking cloud](3.%20Mechanics/CLI/spells/stinking-cloud-xphb.md) (12 brains)"
    "name": "Spellcasting (Psionics)"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/neh-thalggu-bam.webp"
```
^statblock