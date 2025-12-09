---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/earth
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Xorn
---
# [Xorn](3. Mechanics\CLI\bestiary\elemental/xorn-xmm.md)
*Source: Monster Manual (2024) p. 338. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Xorn

*Treasure-Devouring Glutton*

- **Habitat.** Underdark, Planar (Elemental Plane of Earth)  
- **Treasure.** Any  

On the Elemental Plane of Earth, xorn roam in search of meals they consider delicacies: gems, crystals, and veins of precious metals. For xorn, the Elemental Plane of Earth presents an endless buffet. Those that find their way to the Material Plane discover that most worlds are culinary wastelands. These xorn scour subterranean depths, consuming whatever sparse gems and ores they find. This might bring them into conflict with miners or others who hide their treasures underground.

Xorn have three eyes, three arms, and three legs arranged around their trilaterally symmetrical frames. At the top of their bodies is a toothy maw that's equally capable of crushing minerals and dangerous creatures. Xorn move through the earth magically, leaving no tunnel or sign of their passage.

Rapt gourmands, xorn focus on their next meals. They care little for living creatures and avoid harming them when possible. They know others also covet the earth's treasures, and they're not above bargaining for their meals. Xorn might share their knowledge of the Underdark in exchange for snacks of gems, coins, or magical metals. If starving or angered, xorn might try to forcibly take their meals.

Roll on or choose a result from the Xorn Delicacies table to inspire a xorn's favorite fare.

**Xorn Delicacies**

| dice: 1d8 | The Xorn Craves... |
|-----------|--------------------|
| 1 | Adamantine or mithral. |
| 2 | Coins minted by a long-dead empire. |
| 3 | Fossils or petrified wood. |
| 4 | A gem that's part of a magic item. |
| 5 | The keystone of a great arch or bridge. |
| 6 | Parts of a galeb duhr or stone golem. |
| 7 | A piece of a meteor or moon. |
| 8 | The stone crowning a mountain peak. |
^xorn-delicacies

```statblock
"name": "Xorn (XMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "19"
"hp": !!int "84"
"hit_dice": "8d8 + 48"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "10"
  - !!int "22"
  - !!int "11"
  - !!int "10"
  - !!int "11"
"speed": "20 ft., burrow 20 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_immunities": "poison"
"condition_immunities": "[paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., tremorsense\
  \ 60 ft., passive Perception 16"
"languages": "Primordial (Terran)"
"cr": "5"
"traits":
  - "desc": "The xorn can burrow through nonmagical, unworked earth and stone. While\
      \ doing so, the xorn doesn't disturb the material it moves through."
    "name": "Earth Glide"
  - "desc": "The xorn can pinpoint the location of precious metals and stones within\
      \ 60 feet of itself."
    "name": "Treasure Sense"
"actions":
  - "desc": "The xorn makes one Bite attack and three Claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 17 (4d6 + 3) Piercing\
      \ damage."
    "name": "Bite"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 8 (1d10 + 3) Slashing\
      \ damage."
    "name": "Claw"
"bonus_actions":
  - "desc": "The xorn moves up to its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ or [Burrow Speed](3.%20Mechanics/CLI/rules/variant-rules/burrow-speed-xphb.md)\
      \ straight toward an enemy it can sense."
    "name": "Charge"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/elemental/token/xorn-xmm.webp"
```
^statblock

## Environment

planar, earth, underdark