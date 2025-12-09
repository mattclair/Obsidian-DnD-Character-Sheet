---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Drider
---
# [Drider](3. Mechanics\CLI\bestiary\monstrosity/drider-xmm.md)
*Source: Monster Manual (2024) p. 105. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Drider

*Spiderlike Underdark Hunter*

- **Habitat.** Forest, Underdark  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Driders combine the features of drow and giant spiders. The wicked god Lolth is fond of transforming her drow worshipers into driders, as either a blessing or a curse. These driders often become fanatical servants of their god, or they are overwhelmed by their transformation and live only to indulge their predatory arachnid instincts.

Driders also appear when whole communities are transformed by a wicked god's wrath or other magical means, or driders might be part of a world's natural population. Most dwell underground or in dense forests where they can make the most of their spiderlike traits. Driders with non-drow features are uncommon but possible. Roll on or choose a result from the Drider Metamorphoses table to inspire how supernatural driders come into being.

**Drider Metamorphoses**

| dice: 1d6 | The Drider Gained Its Form As... |
|-----------|----------------------------------|
| 1 | A blessing from a deity of assassins, dangerous wildernesses, or the Underdark. |
| 2 | A curse from a powerful hag, vengeful witch, or strange Artifact. |
| 3 | An experiment by an aboleth, a mind flayer, or another life-shaping magic-user. |
| 4 | A magical means of escaping disaster or some worse fate. |
| 5 | A mutation after exposure to chaotic planar energies or strange Underdark radiations. |
| 6 | A punishment from a spiteful god, like Lolth or the Queen of Air and Darkness. |
^drider-metamorphoses

```statblock
"name": "Drider (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"modifier": !!int "4"
"stats":
  - !!int "16"
  - !!int "19"
  - !!int "18"
  - !!int "13"
  - !!int "16"
  - !!int "12"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+10"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 16"
"languages": "Elvish, Undercommon"
"cr": "6"
"traits":
  - "desc": "The drider can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "While in sunlight, the drider has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on ability checks and attack rolls."
    "name": "Sunlight Sensitivity"
  - "desc": "The drider ignores movement restrictions caused by webs, and the drider\
      \ knows the location of any other creature in contact with the same web."
    "name": "Web Walker"
"actions":
  - "desc": "The drider makes three attacks, using Foreleg or Poison Burst in any\
      \ combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 10 ft. *Hit:* 13 (2d8 + 4) Piercing\
      \ damage."
    "name": "Foreleg"
  - "desc": "*Ranged Attack Roll:* +6, range 120 ft. *Hit:* 13 (3d6 + 3) Poison\
      \ damage."
    "name": "Poison Burst"
"bonus_actions":
  - "desc": "The drider casts [Darkness](3.%20Mechanics/CLI/spells/darkness-xphb.md),\
      \ [Faerie Fire](3.%20Mechanics/CLI/spells/faerie-fire-xphb.md), or [Web](3.%20Mechanics/CLI/spells/web-xphb.md),\
      \ requiring no Material components and using Wisdom as the spellcasting ability\
      \ (spell save DC 14).\n"
    "name": "Magic of the Spider Queen (Recharge 5-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/drider-xmm.webp"
```
^statblock

## Environment

forest, underdark