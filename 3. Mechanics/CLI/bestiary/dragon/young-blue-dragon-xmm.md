---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon/chromatic
statblock: inline
statblock-link: "#^statblock"
aliases:
- Young Blue Dragon
---
# [Young Blue Dragon](3. Mechanics\CLI\bestiary\dragon/young-blue-dragon-xmm.md)
*Source: Monster Manual (2024) p. 48. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Young blue dragons seek to establish themselves as forces to be feared. Many claim isolated communities to rule over or ancient ruins where they might find magical paths to power. These blue dragons might temporarily cooperate with other dragons or powerful villains to gain followers and influence.

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
"name": "Young Blue Dragon (XMM)"
"size": "Large"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "152"
"hit_dice": "16d10 + 64"
"modifier": !!int "4"
"stats":
  - !!int "21"
  - !!int "10"
  - !!int "19"
  - !!int "14"
  - !!int "13"
  - !!int "17"
"speed": "40 ft., burrow 20 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "4"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+9"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_immunities": "lightning"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 30 ft., [darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 19"
"languages": "Common, Draconic"
"cr": "9"
"actions":
  - "desc": "The dragon makes three Rend attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +9, reach 10 ft. *Hit:* 12 (2d6 + 5) Slashing\
      \ damage plus 5 (1d10) Lightning damage."
    "name": "Rend"
  - "desc": "*Dexterity Saving Throw:* DC 16, each creature in a 60-foot-long, 5-foot-wide\
      \ [Line](3.%20Mechanics/CLI/rules/variant-rules/line-area-of-effect-xphb.md).\
      \ *Failure:* 55 (10d10) Lightning damage. *Success:* Half damage."
    "name": "Lightning Breath (Recharge 5-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/dragon/token/young-blue-dragon-xmm.webp"
```
^statblock

## Environment

coastal, desert