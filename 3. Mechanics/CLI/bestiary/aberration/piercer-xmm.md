---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Piercer
---
# [Piercer](3. Mechanics\CLI\bestiary\aberration/piercer-xmm.md)
*Source: Monster Manual (2024) p. 240*  

## Piercer

*Aberrant Counterfeit Stalactite*

- **Habitat.** Underdark  
- **Treasure.** Individual  

Piercers resemble stalactites, but each has a toothy maw and a single eye. They hang from cavern ceilings along routes frequented by denizens of the Underdark. Piercers might lurk for months at a time, waiting for any creature of their approximate size to pass underneath. When potential meals move below, piercers release their grip and plummet, intent on impaling prey in a single strike. If they're successful, piercers consume their meals and then slowly climb to a new ambush position. If they miss or fail to slay their targets, piercers attempt to squirm away, but they're easily dispatched by creatures aware of their presence.

Piercers are the larval form of ropers. Young piercers seek to move as far from ropers as they can to avoid ropers' undiscerning hunger. Many piercers migrate vast distances through the Underdark, often to caverns or buried ruins near the surface.

> [!quote]  
> 
> Rule 8: Never trust a stalactite


```statblock
"name": "Piercer (XMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "13"
  - !!int "16"
  - !!int "1"
  - !!int "7"
  - !!int "3"
"speed": "5 ft., climb 15 ft."
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 30 ft., [darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 60 ft., passive Perception 8"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The piercer can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 5 (1d8 + 1) Piercing\
      \ damage."
    "name": "Bite"
  - "desc": "The piercer falls. *Dexterity Saving Throw:* DC 11, one creature directly\
      \ underneath the piercer. *Failure:* 10 (3d6) Piercing damage. *Failure or\
      \ Success:* The piercer reduces any damage it takes from the fall by 20."
    "name": "Drop"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/piercer-xmm.webp"
```
^statblock

## Environment

underdark