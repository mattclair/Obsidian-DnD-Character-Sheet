---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fire Giant
---
# [Fire Giant](3. Mechanics\CLI\bestiary\giant/fire-giant-xmm.md)
*Source: Monster Manual (2024) p. 119. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Fire Giant

*Giant of the Smoldering Depths*

- **Habitat.** Mountain, Underdark  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Fire giants inhabit the hollow vaults and molten rivers of mountainous depths. There, they use subterranean heat and riches to craft wonders, from titanic weapons of war to delicate works of art.

Fire giants have broad frames, skin tones in a variety of rocklike shades, and hair like flame.

Most fire giants dwell in volcanically active mountains or cavernous depths that house their fortress-forges. Evil fire giants tend to be martially minded, and they craft mighty arms to conquer their neighbors and seize valuable resources. More temperate fire giants trade their works for what they need, and they might share the ancient techniques of Giant artisans with other craftspeople. In either case, fire giants are prone to undertaking ambitious designs, and they rarely appreciate interruptions in their titanic workshops.

```statblock
"name": "Fire Giant (XMM)"
"size": "Huge"
"type": "giant"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "162"
"hit_dice": "13d12 + 78"
"modifier": !!int "3"
"stats":
  - !!int "25"
  - !!int "9"
  - !!int "23"
  - !!int "10"
  - !!int "14"
  - !!int "13"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "3"
  - "constitution": !!int "10"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+11"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"damage_immunities": "fire"
"senses": "passive Perception 16"
"languages": "Giant"
"cr": "9"
"actions":
  - "desc": "The giant makes two attacks, using Flame Sword or Hammer Throw in any\
      \ combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +11, reach 10 ft. *Hit:* 21 (4d6 + 7) Slashing\
      \ damage plus 10 (3d6) Fire damage."
    "name": "Flame Sword"
  - "desc": "*Ranged Attack Roll:* +11, range 60/240 ft. *Hit:* 23 (3d10 + 7)\
      \ Bludgeoning damage plus 4 (1d8) Fire damage, and the target is pushed up\
      \ to 15 feet straight away from the giant and has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on the next attack roll it makes before the end of its next turn."
    "name": "Hammer Throw"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/giant/token/fire-giant-xmm.webp"
```
^statblock

## Environment

mountain, underdark