---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Hezrou
---
# [Hezrou](3. Mechanics\CLI\bestiary\fiend/hezrou-xmm.md)
*Source: Monster Manual (2024) p. 167. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Hezrou

*Demon of Obscenity and Outrage*

- **Habitat.** Planar (Abyss)  
- **Treasure.** Any  

Hezrous compose the bulk of many demonic hordes. In croaking, reeking throngs, these ogre-size brutes seek to crush and consume foes. Their oozing hides are manifestations of embodied evils. Every few moments, patches of their slimy skins erupt with grotesque transformations such as rows of mismatched fangs, fungal growths, or half-formed features. These unsettling manifestations emerge, then roil away.

Hezrous serve more powerful demons, such as nalfeshnees and mariliths. They take the abuse and intimidation of these deadlier demons and pass it on to droves of weaker dretches and manes. This predictable brutality makes hezrous useful links in the chaotic structure of a demonic horde.

When on the Material Plane or otherwise left to their own devices, hezrous recklessly indulge in destructive, short-sighted rampages. Only magic and threats from more powerful masters can curb these demons' outrages and compel hezrous to pursue greater plots. Powerful spellcasters often use sinister coercions, spells like [Magic Circle](3.%20Mechanics/CLI/spells/magic-circle-xphb.md) and [Planar Binding](3.%20Mechanics/CLI/spells/planar-binding-xphb.md), or other magic to force hezrous to serve them. Roll on or choose a result from the Demonic Undertakings table to inspire how a magic-user might employ a hezrou or similar demon.

**Demonic Undertakings**

| dice: 1d6 | The Demon Is Compelled To... |
|-----------|------------------------------|
| 1 | Break open a vault and steal what's within. |
| 2 | Defile a place using blasphemous symbols and demonic gore. |
| 3 | Fetch or otherwise provide materials for a profane ritual. |
| 4 | Guard a site and slay anyone who comes near. |
| 5 | Hunt down a foe, destroying everything barring the demon's path. |
| 6 | Intimidate someone into following orders. |
^demonic-undertakings

```statblock
"name": "Hezrou (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"modifier": !!int "6"
"stats":
  - !!int "19"
  - !!int "17"
  - !!int "20"
  - !!int "5"
  - !!int "12"
  - !!int "13"
"speed": "30 ft."
"saves":
  - "strength": !!int "7"
  - "constitution": !!int "8"
  - "wisdom": !!int "4"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 11"
"languages": "Abyssal; telepathy 120 ft."
"cr": "8"
"traits":
  - "desc": "If the hezrou dies outside the Abyss, its body dissolves into ichor,\
      \ and it gains a new body instantly, reviving with all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Abyss."
    "name": "Demonic Restoration"
  - "desc": "The hezrou has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "*Constitution Saving Throw:* DC 16, any creature that starts its turn\
      \ in a 10-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the hezrou. *Failure:* The target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the start of its next turn."
    "name": "Stench"
"actions":
  - "desc": "The hezrou makes three Rend attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 6 (1d4 + 4) Slashing\
      \ damage plus 9 (2d8) Poison damage."
    "name": "Rend"
"bonus_actions":
  - "desc": "The hezrou jumps up to 30 feet by spending 10 feet of movement."
    "name": "Leap"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/hezrou-xmm.webp"
```
^statblock

## Environment

planar, abyss