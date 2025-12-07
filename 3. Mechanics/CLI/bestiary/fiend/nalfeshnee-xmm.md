---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Nalfeshnee
---
# [Nalfeshnee](3. Mechanics\CLI\bestiary\fiend/nalfeshnee-xmm.md)
*Source: Monster Manual (2024) p. 224. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Nalfeshnee

*Demon of Intimidation and Hopelessness*

- **Habitat.** Planar (Abyss)  
- **Treasure.** [Relics](3.%20Mechanics/CLI/tables/random-magic-items-relics.md)  

Nalfeshnees seek to dominate all they encounter. Hulking and grotesque, these demons combine misshapen, bestial features with ogre-like frames. Through both brute force and cunning, nalfeshnees compel cultists and weaker demons to serve them in the endless conflicts of the Abyss or in plots on the Material Plane.

Many nalfeshnees view themselves as prospective demon lords and seek to conquer realms of their own. They often use promises of fiendish magic or Abyssal alliances to tempt ambitious mortals into ruinous pacts. Should they run out of patience, nalfeshnees conjure visions of the Abyss and other nightmares to terrorize others into obeying.

> [!quote] A quote from Mordenkainen  
> 
> The Blood War—that ageless clash between devils and demons—helps ensure the balance of the multiverse. At times it makes unlikely allies, but never delude yourself into believing there's a lesser of two evil. I won't be thanking a demon for every day I'm spared a devil's lash.


```statblock
"name": "Nalfeshnee (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "184"
"hit_dice": "16d10 + 96"
"modifier": !!int "5"
"stats":
  - !!int "21"
  - !!int "10"
  - !!int "22"
  - !!int "19"
  - !!int "12"
  - !!int "15"
"speed": "20 ft., fly 30 ft."
"saves":
  - "constitution": !!int "11"
  - "intelligence": !!int "9"
  - "wisdom": !!int "6"
  - "charisma": !!int "7"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](3.%20Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive\
  \ Perception 11"
"languages": "Abyssal; telepathy 120 ft."
"cr": "13"
"traits":
  - "desc": "If the nalfeshnee dies outside the Abyss, its body dissolves into ichor,\
      \ and it gains a new body instantly, reviving with all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Abyss."
    "name": "Demonic Restoration"
  - "desc": "The nalfeshnee has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The nalfeshnee makes three Rend attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +10, reach 10 ft. *Hit:* 16 (2d10 + 5) Slashing\
      \ damage plus 11 (2d10) Force damage."
    "name": "Rend"
  - "desc": "The nalfeshnee teleports up to 120 feet to an unoccupied space it can\
      \ see."
    "name": "Teleport"
"bonus_actions":
  - "desc": "*Wisdom Saving Throw:* DC 15, each creature in a 15-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the nalfeshnee. *Failure:* 28 (8d6) Psychic damage, and\
      \ the target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition for 1 minute, until it takes damage, or until it ends its turn with\
      \ the nalfeshnee out of line of sight. *Success:* The target is immune to this\
      \ nalfeshnee's Horror Nimbus for 24 hours."
    "name": "Horror Nimbus (Recharge 5-6)"
"reactions":
  - "desc": "Trigger: Another creature the nalfeshnee can see ends its move within\
      \ 120 feet of the nalfeshnee. _Response:_ The nalfeshnee uses Teleport, but\
      \ its destination space must be within 10 feet of the triggering creature."
    "name": "Pursuit"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/nalfeshnee-xmm.webp"
```
^statblock

## Environment

planar, abyss