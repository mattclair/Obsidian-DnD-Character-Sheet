---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Glabrezu
---
# [Glabrezu](3. Mechanics\CLI\bestiary\fiend/glabrezu-xmm.md)
*Source: Monster Manual (2024) p. 138. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Glabrezu

*Demon of Delusion and Entrapment*

- **Habitat.** Planar (Abyss)  
- **Treasure.** [Relics](3.%20Mechanics/CLI/tables/random-magic-items-relics.md)  

Glabrezus embody delusion and predatory guile. These cunning demons know the most effective traps are those that individuals devise for themselves. Despite having massive claws and overwhelming physicality, glabrezus excel at using flattery and misdirection to coerce victims into isolating themselves and harming others.

In the Abyss, glabrezus act as lone hunters or deceitful advisers to greater demons. Glabrezus seek routes to the Material Plane and relish being summoned by magic-users. They eagerly serve mortals while tempting them to betray their allies and indulge in hubristic fantasies. A glabrezu strives to murder its summoner once the magic-user has committed irredeemable misdeeds and the mortal's soul is surely condemned to the Abyss.

> [!quote] A quote from Gerrzog, Glabrezu of the Infinite Staircase  
> 
> Your companion's life, or what you've journeyed through infinity in search of! Make your choice.


```statblock
"name": "Glabrezu (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"modifier": !!int "6"
"stats":
  - !!int "20"
  - !!int "15"
  - !!int "21"
  - !!int "19"
  - !!int "17"
  - !!int "16"
"speed": "40 ft."
"saves":
  - "strength": !!int "9"
  - "constitution": !!int "9"
  - "wisdom": !!int "7"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Deception](3.%20Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+7"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](3.%20Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive\
  \ Perception 17"
"languages": "Abyssal; telepathy 120 ft."
"cr": "9"
"traits":
  - "desc": "If the glabrezu dies outside the Abyss, its body dissolves into ichor,\
      \ and it gains a new body instantly, reviving with all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Abyss."
    "name": "Demonic Restoration"
  - "desc": "The glabrezu has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The glabrezu makes two Pincer attacks and uses Pummel or Spellcasting."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +9, reach 10 ft. *Hit:* 16 (2d10 + 5) Slashing\
      \ damage. If the target is a Medium or smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 15) from one of two pincers."
    "name": "Pincer"
  - "desc": "*Dexterity Saving Throw:* DC 17, one creature [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the glabrezu. *Failure:* 15 (3d6 + 5) Bludgeoning damage. *Success:*\
      \ Half damage."
    "name": "Pummel"
  - "desc": "The glabrezu casts one of the following spells, requiring no Material\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 16):\n\n**At will:** [Darkness](3.%20Mechanics/CLI/spells/darkness-xphb.md),\
      \ [Detect Magic](3.%20Mechanics/CLI/spells/detect-magic-xphb.md), [Dispel Magic](3.%20Mechanics/CLI/spells/dispel-magic-xphb.md)\n\
      \n**1/day each:** [Confusion](3.%20Mechanics/CLI/spells/confusion-xphb.md),\
      \ [Fly](3.%20Mechanics/CLI/spells/fly-xphb.md), [Power Word Stun](3.%20Mechanics/CLI/spells/power-word-stun-xphb.md)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/glabrezu-xmm.webp"
```
^statblock

## Environment

planar, abyss