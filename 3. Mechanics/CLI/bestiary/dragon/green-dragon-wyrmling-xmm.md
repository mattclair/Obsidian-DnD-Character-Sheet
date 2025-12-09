---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon/chromatic
statblock: inline
statblock-link: "#^statblock"
aliases:
- Green Dragon Wyrmling
---
# [Green Dragon Wyrmling](3. Mechanics\CLI\bestiary\dragon/green-dragon-wyrmling-xmm.md)
*Source: Monster Manual (2024) p. 152. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Green dragon wyrmlings often serve as pawns in older dragons' schemes. By spying on those dragons' agents, wyrmlings learn the art of manipulation. Once they've accumulated influence and lackeys, these wyrmlings depart to claim their own territories and pursue their sinister ambitions.

## Green Dragons

*Dragons of Deceit and Derision*

- **Habitat.** Forest  
- **Treasure.** [Arcana](3.%20Mechanics/CLI/tables/random-magic-items-arcana.md)  

From forbidden forest depths, green dragons whisper evils into the world and manipulate the lives of those who listen. Elusive, conniving, and egotistical, these chromatic dragons patiently prey on the fears of shorter-lived beings, corrupting and isolating them. Green dragons might lurk amid labyrinthine wildernesses for centuries without revealing themselves; even their most devoted followers might know them only as the voice of the woodlands or a whisper in their dreams.

Despite their might, most green dragons disdain physical violence, viewing combat as servants' work and preferring to trick foes into dangerous or exploitative scenarios. These dragons collect "baubles" that embody their webs of manipulation and serve as tools of extortion, such as compromising documents, family heirlooms, and sentimental treasures.

### Green Dragon Lairs

Green dragons lair in ancient forests, often shaping stands of massive trees into compounds of interwoven branches, hollow trunks, and caverns amid mighty roots. They might also dwell amid forested ruins, particularly the former homes of those they've conquered.

```statblock
"name": "Green Dragon Wyrmling (XMM)"
"size": "Medium"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "38"
"hit_dice": "7d8 + 7"
"modifier": !!int "3"
"stats":
  - !!int "15"
  - !!int "12"
  - !!int "13"
  - !!int "14"
  - !!int "11"
  - !!int "13"
"speed": "30 ft., fly 60 ft., swim 30 ft."
"saves":
  - "dexterity": !!int "3"
  - "wisdom": !!int "2"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 10 ft., [darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 60 ft., passive Perception 14"
"languages": "Draconic"
"cr": "2"
"traits":
  - "desc": "The dragon can breathe air and water."
    "name": "Amphibious"
"actions":
  - "desc": "The dragon makes two Rend attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 7 (1d10 + 2) Slashing\
      \ damage plus 3 (1d6) Poison damage."
    "name": "Rend"
  - "desc": "*Constitution Saving Throw:* DC 11, each creature in a 15-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 21 (6d6) Poison damage. *Success:* Half damage."
    "name": "Poison Breath (Recharge 5-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/dragon/token/green-dragon-wyrmling-xmm.webp"
```
^statblock

## Environment

forest