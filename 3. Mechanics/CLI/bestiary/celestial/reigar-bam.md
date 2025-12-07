---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Reigar
---
# [Reigar](3. Mechanics\CLI\bestiary\celestial/reigar-bam.md)
*Source: Boo's Astral Menagerie p. 47, Light of Xaryxis*  

Reigar were once cephalopods similar to octopi. They inhabited the stormy seas of Ysgard until the gods of that plane transformed them. They have bioluminescent freckles and the ability to change the coloration of their skin. A glory (or halo) surrounds each of them. This magical display is a cloud of twinkling, glittering motes that changes color randomly and repels attacks.

Gifted with audacious hearts, reigar emerged from the Ysgardian seas to test their mettle on land. When the endless battles there grew tiresome, some reigar ventured to the Astral Sea and Wildspace in search of glory. Many are driven by artistic pursuits, but each reigar has their own notion of what constitutes art. For some, warfare is the highest form of artistic endeavor. Other reigar create art of a more benign nature.

Reigar wander Wildspace and the Astral Sea in search of artistic inspiration, traveling in symbiotic organic ships that they create (see "Esthetic"). Each reigar possesses a magic item called a talarith, which the reigar created and to which they alone can attune. If this object is lost or destroyed, it takes `1d10 + 20` days for the reigar to craft another one.

```statblock
"name": "Reigar (BAM)"
"size": "Medium"
"type": "celestial"
"alignment": "typically  Chaotic Neutral"
"ac": !!int "19"
"ac_class": "glory"
"hp": !!int "82"
"hit_dice": "15d8 + 15"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "12"
  - !!int "19"
  - !!int "16"
  - !!int "24"
"speed": "30 ft., swim 30 ft."
"saves":
  - "dexterity": !!int "5"
  - "constitution": !!int "4"
  - "wisdom": !!int "6"
  - "charisma": !!int "10"
"skillsaves":
  - "name": "[Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[History](3.%20Mechanics/CLI/rules/skills.md#History)"
    "desc": "+7"
  - "name": "[Performance](3.%20Mechanics/CLI/rules/skills.md#Performance)"
    "desc": "+10"
  - "name": "[Persuasion](3.%20Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+10"
"senses": "passive Perception 13"
"languages": "Celestial, Common, Deep Speech, Draconic"
"cr": "8"
"traits":
  - "desc": "The reigar's Armor Class includes its Charisma modifier."
    "name": "Glory"
  - "desc": "The reigar can hold its breath for 1 hour."
    "name": "Hold Breath"
  - "desc": "The reigar wears a talarith."
    "name": "Special Equipment"
"actions":
  - "desc": "The reigar makes two Trident attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +7 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing\
      \ damage if used with two hands to make a melee attack, plus 3 (1d6) force\
      \ damage if the reigar is wearing its talarith."
    "name": "Trident"
  - "desc": "*Ranged Spell Attack:* +10 to hit, range 90 ft., one target. *Hit:*\
      \ 22 (5d8) damage of a type chosen by the reigar from the following list:\
      \ cold, fire, lightning, or radiant."
    "name": "Chromatic Bolt"
  - "desc": "Using its talarith, the reigar summons a duplicate of itself. The duplicate\
      \ obeys the reigar's commands and uses the reigar's statistics, except it is\
      \ an unaligned Construct that doesn't have a talarith of its own. The duplicate\
      \ takes its turn immediately after the reigar. It vanishes after 1 hour or when\
      \ it is reduced to 0 hit points."
    "name": "Summon Duplicate (Recharges after a Short or Long Rest)"
  - "desc": "The reigar casts one of the following spells, requiring no spell components\
      \ and using Charisma as the spellcasting ability (spell save DC 18):\n\n**At\
      \ will:** [light](3.%20Mechanics/CLI/spells/light-xphb.md), [mage hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [prestidigitation](3.%20Mechanics/CLI/spells/prestidigitation-xphb.md)\n\n\
      **2/day each:** [dimension door](3.%20Mechanics/CLI/spells/dimension-door-xphb.md),\
      \ [phantasmal force](3.%20Mechanics/CLI/spells/phantasmal-force-xphb.md)\n\n\
      **1/day each:** [mass suggestion](3.%20Mechanics/CLI/spells/mass-suggestion-xphb.md),\
      \ [sending](3.%20Mechanics/CLI/spells/sending-xphb.md)"
    "name": "Spellcasting (Psionics)"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/celestial/token/reigar-bam.webp"
```
^statblock