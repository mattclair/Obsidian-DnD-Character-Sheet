---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bone Naga
---
# [Bone Naga](3. Mechanics\CLI\bestiary\undead/bone-naga-xmm.md)
*Source: Monster Manual (2024) p. 53*  

## Bone Naga

*Deathless Serpentine Mind Bender*

- **Habitat.** Underdark  
- **Treasure.** [Relics](3.%20Mechanics/CLI/tables/random-magic-items-relics.md)  

Nagas are immortal but not invincible, and powerful magic can end their lives. Bone nagas are skeletal terrors raised from the remains of magically slain nagas or nagas that were killed but that hadn't yet rejuvenated. They are granted unlife through rituals practiced by cultists, yuan-ti, and morbid spirit nagas. These Undead nagas possess magical abilities similar to those they had in life, along with an eerie gaze that can beguile other creatures.

Bone nagas typically obey those who resurrected them, serving their creators as tireless guards and sharing the lore they collected in life. Undeath disrupts the perfect memory bone nagas enjoyed while alive, leaving them with gaps in their memories or details scrambled into puzzle-like jumbles.

In rare cases, bone nagas continue to pursue the goals they had while alive instead of serving other creatures. Most free-willed bone nagas are evil beings raised from spirit naga remains, but in unusual instances, bone nagas created from guardian nagas continue good, albeit confused, existences.

```statblock
"name": "Bone Naga (XMM)"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "65"
"hit_dice": "10d10 + 10"
"modifier": !!int "3"
"stats":
  - !!int "15"
  - !!int "16"
  - !!int "12"
  - !!int "16"
  - !!int "15"
  - !!int "15"
"speed": "40 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common plus one other language"
"cr": "4"
"actions":
  - "desc": "The naga makes two Bite attacks. It can replace any attack with a use\
      \ of Serpentine Gaze."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 10 ft. *Hit:* 10 (2d6 + 3) Piercing\
      \ damage plus 7 (2d6) Necrotic damage."
    "name": "Bite"
  - "desc": "*Wisdom Saving Throw:* DC 13, one creature the naga can see within 60\
      \ feet. *Failure:* 13 (3d6 + 3) Psychic damage, and the target has the [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ condition until the start of the naga's next turn."
    "name": "Serpentine Gaze"
  - "desc": "The naga casts one of the following spells, requiring no Material components\
      \ and using Intelligence as the spellcasting ability (spell save DC 13):\n\n\
      **At will:** [Mage Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md), [Thaumaturgy](3.%20Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\
      \n**1/day each:** [Command](3.%20Mechanics/CLI/spells/command-xphb.md), [Detect\
      \ Thoughts](3.%20Mechanics/CLI/spells/detect-thoughts-xphb.md), [Lightning Bolt](3.%20Mechanics/CLI/spells/lightning-bolt-xphb.md)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/bone-naga-xmm.webp"
```
^statblock

## Environment

underdark