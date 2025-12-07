---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ettercap
---
# [Ettercap](3. Mechanics\CLI\bestiary\monstrosity/ettercap-xmm.md)
*Source: Monster Manual (2024) p. 115. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Ettercap

*Venomous Arachnid Abductor*

- **Habitat.** Forest  
- **Treasure.** [Implements](3.%20Mechanics/CLI/tables/random-magic-items-implements.md)  

Spiderlike hunters, ettercaps lurk in forested depths and seek prey to drag into their web-choked lairs. These vicious predators have arachnid features and hunched, bipedal frames, and they're notorious for their venomous bites and ability to shoot out webs to entrap their victims. Ettercaps often hunt in small groups alongside giant spiders and mundane spider swarms.

Ettercaps frequently overhunt their environment. Left unchecked, ettercaps might fill whole woodlands with their webs and the cocooned remains of past meals, which puts ettercaps in conflict with Fey. Spiteful ettercaps go out of their way to torment and feed on Fey; they prefer to menace those smaller than themselves, like pixies and sprites. They rarely devour other sapient creatures swiftly, preferring to cocoon their captives and terrorize them for days.

Ettercaps avoid fire, which can quickly burn through their webs and the dead trees where they make their homes.

```statblock
"name": "Ettercap (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "15"
  - !!int "13"
  - !!int "7"
  - !!int "12"
  - !!int "8"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
  - "name": "[Survival](3.%20Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+3"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The ettercap can climb difficult surfaces, including along ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The ettercap ignores movement restrictions caused by webs, and the ettercap\
      \ knows the location of any other creature in contact with the same web."
    "name": "Web Walker"
"actions":
  - "desc": "The ettercap makes one Bite attack and one Claw attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 5 (1d6 + 2) Piercing\
      \ damage plus 2 (1d4) Poison damage, and the target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the start of the ettercap's next turn."
    "name": "Bite"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 7 (2d4 + 2) Slashing\
      \ damage."
    "name": "Claw"
  - "desc": "*Dexterity Saving Throw:* DC 12, one Large or smaller creature the ettercap\
      \ can see within 30 feet. *Failure:* The target has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition until the web is destroyed (AC 10; HP 5; [Vulnerability](3.%20Mechanics/CLI/rules/variant-rules/vulnerability-xphb.md)\
      \ to Fire damage; [Immunity](3.%20Mechanics/CLI/rules/variant-rules/immunity-xphb.md)\
      \ to Bludgeoning, Poison, and Psychic damage)."
    "name": "Web Strand (Recharge 5-6)"
"bonus_actions":
  - "desc": "The ettercap pulls one creature within 30 feet of itself that is [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by its Web Strand up to 25 feet straight toward itself."
    "name": "Reel"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/ettercap-xmm.webp"
```
^statblock

## Environment

forest