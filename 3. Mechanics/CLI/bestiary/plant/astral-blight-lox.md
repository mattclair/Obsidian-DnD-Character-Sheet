---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/lox
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Astral Blight
---
# [Astral Blight](3. Mechanics\CLI\bestiary\plant/astral-blight-lox.md)
*Source: Light of Xaryxis p. 10*  

```statblock
"name": "Astral Blight (LoX)"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"modifier": !!int "-1"
"stats":
  - !!int "16"
  - !!int "8"
  - !!int "14"
  - !!int "6"
  - !!int "10"
  - !!int "3"
"speed": "10 ft."
"damage_resistances": "cold, radiant"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind\
  \ beyond this radius), passive Perception 10"
"languages": ""
"cr": "1"
"traits":
  - "desc": "While it has at least 1 hit point, the astral blight sheds dim light\
      \ in a 10-foot radius."
    "name": "Illumination"
  - "desc": "The blight doesn't require air or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The blight makes two Heat-Draining Vine attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 10 ft., one target. *Hit:*\
      \ 6 (1d6 + 3) radiant damage, and if the target is a Large or smaller creature,\
      \ it is [grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled) (escape\
      \ DC 13). Until this grapple ends, the target takes 3 (1d6) cold damage at\
      \ the start of each of its turns. The blight has two vines, each of which can\
      \ grapple one creature."
    "name": "Heat-Draining Vine"
"source":
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/plant/token/astral-blight-lox.webp"
```
^statblock