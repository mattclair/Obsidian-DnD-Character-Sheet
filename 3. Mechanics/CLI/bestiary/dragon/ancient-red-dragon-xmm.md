---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/24
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon/chromatic
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ancient Red Dragon
---
# [Ancient Red Dragon](3. Mechanics\CLI\bestiary\dragon/ancient-red-dragon-xmm.md)
*Source: Monster Manual (2024) p. 256. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Ancient red dragons number among the most feared and destructive beings in the multiverse. Few can withstand the wrath of an ancient red dragon that turns its mind toward devastation. These dragons' greed matches their ruinous potential, and they collect vast hoards studded with storied treasures and magic items. Their lairs frequently tap into volcanic depths and might pierce other planes of existence, bringing servants from the Elemental Plane of Fire or the Lower Planes into their service.

## Red Dragons

*Dragons of Greed and Devastation*

- **Habitat.** Hill, Mountain  
- **Treasure.** Any  

Red dragons take whatever they desire and burn to ash anything that stands in their way. These chromatic dragons endlessly desire more—more magic, territory, treasure, or whatever else inflames their cruel ambitions.

Red dragons make their lairs amid perilous cliffs and volcanoes. Within, they amass and fiercely protect hoards of treasure, and many have perfect recall of the hoards' contents and the locations of all they've collected. Should anything go missing, red dragons fly into rages. They don't rest until their treasures are returned and the thieves have burned.

Red dragons believe themselves to be the greatest of all dragons and, by extension, the greatest of all creatures. To them, pillaging and conquering are their right—treasures can find no more honored place than in their hoards, and other creatures are privileged to serve them.

### Red Dragon Lairs

Red dragons make their lairs in smoldering, unapproachable places such as volcanic mountains, burning wastelands, and ruins they've stolen from other creatures.

```statblock
"name": "Ancient Red Dragon (XMM)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Chaotic Evil"
"ac": !!int "22"
"hp": !!int "507"
"hit_dice": "26d20 + 234"
"modifier": !!int "14"
"stats":
  - !!int "30"
  - !!int "10"
  - !!int "29"
  - !!int "18"
  - !!int "15"
  - !!int "27"
"speed": "40 ft., climb 40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "7"
  - "wisdom": !!int "9"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+16"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"damage_immunities": "fire"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., [darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 26"
"languages": "Common, Draconic"
"cr": "24"
"traits":
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day, or 5/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of Spellcasting to cast [Scorching Ray](3.%20Mechanics/CLI/spells/scorching-ray-xphb.md)\
      \ (level 3 version)."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +17, reach 15 ft. *Hit:* 19 (2d8 + 10) Slashing\
      \ damage plus 10 (3d6) Fire damage."
    "name": "Rend"
  - "desc": "*Dexterity Saving Throw:* DC 24, each creature in a 90-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 91 (26d6) Fire damage. *Success:* Half damage."
    "name": "Fire Breath (Recharge 5-6)"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 23, +15 to\
      \ hit with spell attacks):\n\n**At will:** [Command](3.%20Mechanics/CLI/spells/command-xphb.md)\
      \ (level 2 version), [Detect Magic](3.%20Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [Scorching Ray](3.%20Mechanics/CLI/spells/scorching-ray-xphb.md) (level 3\
      \ version)\n\n**1/day each:** [Fireball](3.%20Mechanics/CLI/spells/fireball-xphb.md)\
      \ (level 6 version), [Scrying](3.%20Mechanics/CLI/spells/scrying-xphb.md)"
    "name": "Spellcasting"
"regional_effects":
  - "desc": "The region containing an adult or ancient red dragon's lair is warped\
      \ by its presence, creating the following effects:\n\n- **Burning Heat.** The\
      \ area within 1 mile of the lair is an area of extreme heat. A burning creature\
      \ or object takes an additional 1d4 Fire damage at the start of each of its\
      \ turns.  \n- **Smoldering Haze.** The area within 1 mile of the lair is [Lightly\
      \ Obscured](3.%20Mechanics/CLI/rules/variant-rules/lightly-obscured-xphb.md)\
      \ with clouds of ash. Whenever a creature other than the dragon or one of its\
      \ allies finishes a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md)\
      \ in that area, that creature must succeed on a DC 15 Constitution saving throw\
      \ or have the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned) condition\
      \ for 1 hour.  \n\nIf the dragon dies or moves its lair elsewhere, these effects\
      \ end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3 (4 in Lair). Immediately after\
  \ another creature's turn, the dragon can expend a use to take one of the following\
  \ actions. The dragon regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The dragon uses Spellcasting to cast [Command](3.%20Mechanics/CLI/spells/command-xphb.md)\
      \ (level 2 version). The dragon can't take this action again until the start\
      \ of its next turn."
    "name": "Commanding Presence"
  - "desc": "The dragon uses Spellcasting to cast [Scorching Ray](3.%20Mechanics/CLI/spells/scorching-ray-xphb.md)\
      \ (level 3 version). The dragon can't take this action again until the start\
      \ of its next turn."
    "name": "Fiery Rays"
  - "desc": "The dragon moves up to half its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md),\
      \ and it makes one Rend attack."
    "name": "Pounce"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/dragon/token/ancient-red-dragon-xmm.webp"
```
^statblock

## Environment

hill, mountain