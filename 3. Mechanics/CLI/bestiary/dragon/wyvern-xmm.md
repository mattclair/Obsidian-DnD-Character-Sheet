---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wyvern
---
# [Wyvern](3. Mechanics\CLI\bestiary\dragon/wyvern-xmm.md)
*Source: Monster Manual (2024) p. 337. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Wyvern

*Draconic Hunter with a Venomous Sting*

- **Habitat.** Hill, Mountain  
- **Treasure.** Any  

Opportunistic predators, wyverns are draconic ambushers that strike from above. These territorial hunters attack with their fangs and stinger-tipped tails. Wyvern stingers drip with deadly venom, a painful toxin feared by monster hunters and coveted by alchemists.

Wyverns are aggressive and claim sizable territories around the mountains, crags, and ruins where they dwell. Despite their considerable strength, they're opportunistic hunters that target unwitting livestock and groups of encamped travelers. Wyverns usually land only to finish off creatures they've weakened with their poison and strafing attacks. Creatures that fight back or take flight might deter wyverns, convincing them to search for easier prey.

Once wyverns overpower a quarry, they carry it to their cavernous lairs to either consume it in safety or trap it to eat later. Most wyverns don't hoard treasure, but their lairs are littered with the possessions of past victims. It isn't uncommon for wyverns to carry off chests, carts, or small boats along with their prey.

```statblock
"name": "Wyvern (XMM)"
"size": "Large"
"type": "dragon"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "10"
  - !!int "16"
  - !!int "5"
  - !!int "12"
  - !!int "6"
"speed": "30 ft., fly 80 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 14"
"languages": ""
"cr": "6"
"actions":
  - "desc": "The wyvern makes one Bite attack and one Sting attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 13 (2d8 + 4) Piercing\
      \ damage."
    "name": "Bite"
  - "desc": "*Melee Attack Roll:* +7, reach 10 ft. *Hit:* 11 (2d6 + 4) Piercing\
      \ damage plus 24 (7d6) Poison damage, and the target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the start of the wyvern's next turn."
    "name": "Sting"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/dragon/token/wyvern-xmm.webp"
```
^statblock

## Environment

hill, mountain