---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Black Pudding
---
# [Black Pudding](3. Mechanics\CLI\bestiary\ooze/black-pudding-xmm.md)
*Source: Monster Manual (2024) p. 42. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Black Pudding

*Divisible, Corrosive Blob*

- **Habitat.** Underdark  
- **Treasure.** None  

Black puddings are shapeless masses of predatory cells. Once a pudding detects organic matter, it oozes toward its prey, dissolving living matter and various objects. If a black pudding is split by lightning or slashing attacks, it divides into two smaller, independent puddings.

Various supernatural conditions might bring black puddings into being. Roll on or choose a result from the Black Pudding Sources table to inspire a pudding's origins.

**Black Pudding Sources**

| dice: 1d6 | The Black Pudding Formed From... |
|-----------|----------------------------------|
| 1 | An ancient black dragon's acidic saliva. |
| 2 | The blood or extreme emotions of a foul deity. |
| 3 | Cosmic entropy or ruinous planar forces. |
| 4 | A curse that transformed a forgotten tyrant. |
| 5 | Forbidden or industrialized magic. |
| 6 | Necrotic material animated by aimless spirits. |
^black-pudding-sources

```statblock
"name": "Black Pudding (XMM)"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "7"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"modifier": !!int "-3"
"stats":
  - !!int "16"
  - !!int "5"
  - !!int "16"
  - !!int "1"
  - !!int "6"
  - !!int "1"
"speed": "20 ft., climb 20 ft."
"damage_immunities": "acid, cold, lightning, slashing"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), [grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled),\
  \ [prone](3.%20Mechanics/CLI/rules/conditions.md#Prone), [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 8"
"languages": ""
"cr": "4"
"traits":
  - "desc": "The pudding can move through a space as narrow as 1 inch without expending\
      \ extra movement to do so."
    "name": "Amorphous"
  - "desc": "A creature that hits the pudding with a melee attack roll takes 4 (1d8)\
      \ Acid damage. Nonmagical ammunition is destroyed immediately after hitting\
      \ the pudding and dealing any damage. Any nonmagical weapon takes a cumulative\
      \ -1 penalty to attack rolls immediately after dealing damage to the pudding\
      \ and coming into contact with it. The weapon is destroyed if the penalty reaches\
      \ -5. The penalty can be removed by casting the [Mending](3.%20Mechanics/CLI/spells/mending-xphb.md)\
      \ spell on the weapon.\n\nIn 1 minute, the pudding can eat through 2 feet of\
      \ nonmagical wood or metal."
    "name": "Corrosive Form"
  - "desc": "The pudding can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 10 ft. *Hit:* 17 (4d6 + 3) Acid damage.\
      \ Nonmagical armor worn by the target takes a -1 penalty to the AC it offers.\
      \ The armor is destroyed if the penalty reduces its AC to 10. The penalty can\
      \ be removed by casting the [Mending](3.%20Mechanics/CLI/spells/mending-xphb.md)\
      \ spell on the armor."
    "name": "Dissolving Pseudopod"
"reactions":
  - "desc": "Trigger: While the pudding is Large or Medium and has 10+ [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md),\
      \ it becomes [Bloodied](3.%20Mechanics/CLI/rules/conditions.md#Bloodied) or\
      \ is subjected to Lightning or Slashing damage. _Response:_ The pudding splits\
      \ into two new Black Puddings. Each new pudding is one size smaller than the\
      \ original pudding and acts on its [Initiative](3.%20Mechanics/CLI/rules/variant-rules/initiative-xphb.md).\
      \ The original pudding's [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ are divided evenly between the new puddings (round down)."
    "name": "Split"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/ooze/token/black-pudding-xmm.webp"
```
^statblock

## Environment

underdark