---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/23
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon/chromatic
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ancient Blue Dragon
---
# [Ancient Blue Dragon](3. Mechanics\CLI\bestiary\dragon/ancient-blue-dragon-xmm.md)
*Source: Monster Manual (2024) p. 50. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Ancient blue dragons think beyond dominating groups of short-lived servants. Instead, they seek to claim their places above other dragons and their world's most powerful inhabitants. If world domination seems too tedious or cliché, these dragons might seek to seize control of extraplanar realms, multi-world empires, or forces of reality—like life, storms, or time itself.

## Blue Dragons

*Dragons of Tyranny and Tempests*

- **Habitat.** Desert  
- **Treasure.** [Relics](3.%20Mechanics/CLI/tables/random-magic-items-relics.md)  

Arrogant and imperious, blue dragons are chromatic dragons that crave control and collect followers like other dragons hoard treasure. They seek to transform their territories into empires, domains to be feared by nations.

Blue dragons have sharp features with piercing horns and scales that range from sapphire to the shades of stormy skies. They dwell in deserts and badlands, particularly regions with dramatic spires from whose tops they might see for miles. They seek lairs near sites of symbolic power, such as the abandoned fortresses of giants, the colossi of fallen empires, or monuments raised by their followers.

Regalia of rulership and artistic masterpieces fill blue dragons' hoards. These dragons have no interest in treasures that are common or flawed, preferring one-of-a-kind gemstones, the crowns of fallen royals, and magic items capable of spreading the dragons' influence.

### Blue Dragon Lairs

Blue dragons dwell in arid lands. Their lairs might be death traps meant to entomb invaders or ostentatious fortresses where they plot domination.

```statblock
"name": "Ancient Blue Dragon (XMM)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Lawful Evil"
"ac": !!int "22"
"hp": !!int "481"
"hit_dice": "26d20 + 208"
"modifier": !!int "14"
"stats":
  - !!int "29"
  - !!int "10"
  - !!int "27"
  - !!int "18"
  - !!int "17"
  - !!int "25"
"speed": "40 ft., burrow 40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "7"
  - "wisdom": !!int "10"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+17"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"damage_immunities": "lightning"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., [darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 27"
"languages": "Common, Draconic"
"cr": "23"
"traits":
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day, or 5/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of Spellcasting to cast [Shatter](3.%20Mechanics/CLI/spells/shatter-xphb.md)\
      \ (level 3 version)."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +16, reach 15 ft. *Hit:* 18 (2d8 + 9) Slashing\
      \ damage plus 11 (2d10) Lightning damage."
    "name": "Rend"
  - "desc": "*Dexterity Saving Throw:* DC 23, each creature in a 120-foot-long, 10-foot-wide\
      \ [Line](3.%20Mechanics/CLI/rules/variant-rules/line-area-of-effect-xphb.md).\
      \ *Failure:* 88 (16d10) Lightning damage. *Success:* Half damage."
    "name": "Lightning Breath (Recharge 5-6)"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 22):\n\n**At\
      \ will:** [Detect Magic](3.%20Mechanics/CLI/spells/detect-magic-xphb.md), [Invisibility](3.%20Mechanics/CLI/spells/invisibility-xphb.md),\
      \ [Mage Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md), [Shatter](3.%20Mechanics/CLI/spells/shatter-xphb.md)\
      \ (level 3 version)\n\n**1/day each:** [Scrying](3.%20Mechanics/CLI/spells/scrying-xphb.md),\
      \ [Sending](3.%20Mechanics/CLI/spells/sending-xphb.md)"
    "name": "Spellcasting"
"regional_effects":
  - "desc": "The region containing an adult or ancient blue dragon's lair is changed\
      \ by its presence, creating the following effects:\n\n- **Sinkholes.** Sinkholes\
      \ form more frequently in the area within 1 mile of the lair. Whenever a creature\
      \ in that area other than the dragon and its allies finishes a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md),\
      \ roll 1d20. On a 1, a sinkhole opens beneath the creature, and the creature\
      \ must succeed on a DC 15 Dexterity saving throw or fall 2d4 × 10 feet into\
      \ the sinkhole.  \n- **Spiteful Storms.** Dust devils and thunderstorms rage\
      \ within 1 mile of the lair. The area is [Lightly Obscured](3.%20Mechanics/CLI/rules/variant-rules/lightly-obscured-xphb.md).\
      \  \n\nIf the dragon dies or moves its lair elsewhere, these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3 (4 in Lair). Immediately after\
  \ another creature's turn, the dragon can expend a use to take one of the following\
  \ actions. The dragon regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The dragon uses Spellcasting to cast [Invisibility](3.%20Mechanics/CLI/spells/invisibility-xphb.md)\
      \ on itself, and it can fly up to half its [Fly Speed](3.%20Mechanics/CLI/rules/variant-rules/fly-speed-xphb.md).\
      \ The dragon can't take this action again until the start of its next turn."
    "name": "Cloaked Flight"
  - "desc": "The dragon uses Spellcasting to cast [Shatter](3.%20Mechanics/CLI/spells/shatter-xphb.md)\
      \ (level 3 version). The dragon can't take this action again until the start\
      \ of its next turn."
    "name": "Sonic Boom"
  - "desc": "The dragon makes one Rend attack."
    "name": "Tail Swipe"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/dragon/token/ancient-blue-dragon-xmm.webp"
```
^statblock

## Environment

coastal, desert