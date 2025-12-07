---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/limbo
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Green Slaad
---
# [Green Slaad](3. Mechanics\CLI\bestiary\aberration/green-slaad-xmm.md)
*Source: Monster Manual (2024) p. 286*  

Green slaadi come into being when the propagation methods of red or blue slaadi affect certain creatures capable of casting spells of level 3 or higher. Green slaadi are more intelligent than their blue and red brethren and often direct their kin to portals where gray slaadi have identified Humanoid communities ripe for invasion.

## Slaadi

*Chaos-Spawned Hordes of Limbo*

- **Habitat.** Planar (Limbo)  
- **Treasure.** Any  

Unpredictable slaadi devour and multiply across the Ever-Changing Chaos of Limbo. These toad-like, extraplanar beings embody the endless potentiality of their home plane of existence. While slaadi aren't inherently evil, their impulses are wild and often destructive. Many are driven to propagate through supernatural processes. Unfortunately, these processes typically are fatal for other creatures.

Slaadi have no formal society. Rather, strong slaadi dominate weaker ones. Blue and red slaadi rampage across Limbo and spill into other worlds at the direction of green slaadi. More powerful slaadi have connections to the Spawning Stone, a source of chaotic magic from which the first slaadi originated. The Spawning Stone is hidden deep within Limbo, and legends tie its origins to the modron overlord Primus or the ruinous slaad lords, such as Ssendam, the golden amoeboid terror, and Ygorl, the winged skeleton. These slaad lords and others plot to spread slaadi across the multiverse.

> [!note] Slaad Control Gems
> 
> A slaad born from the Spawning Stone has a magical control gem embedded in its head. If a creature claims the gem, the slaad has the [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed) condition and obeys the gem's bearer. The slaad ceases to be [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed) if it is harmed by the gem's bearer or the bearer's allies or if the gem is returned to the slaad. A [Greater Restoration](3.%20Mechanics/CLI/spells/greater-restoration-xphb.md) spell cast on a slaad destroys the gem, and the slaad ceases to be [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed).
> 
> One can obtain a slaad's control gem using a [Wish](3.%20Mechanics/CLI/spells/wish-xphb.md) or [Imprisonment](3.%20Mechanics/CLI/spells/imprisonment-xphb.md) spell. If the slaad fails its saving throw against [Imprisonment](3.%20Mechanics/CLI/spells/imprisonment-xphb.md), the caster gains the gem, and the slaad isn't imprisoned. An [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated) slaad's control gem can be removed by spending 1 minute and succeeding on a DC 20 Wisdom ([Medicine](3.%20Mechanics/CLI/rules/skills.md#Medicine)) check. Failing this check deals 22 (`4d10`) Piercing damage to the slaad.
^slaad-control-gems

> [!quote] A quote from Jebeel Sloom  
> 
> Fight a slaad and lose, the story's over. Fight a slaad and win, there's a thousand more standing in line just to prove they're tougher.


```statblock
"name": "Green Slaad (XMM)"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"hp": !!int "144"
"hit_dice": "17d10 + 51"
"modifier": !!int "5"
"stats":
  - !!int "16"
  - !!int "15"
  - !!int "16"
  - !!int "11"
  - !!int "8"
  - !!int "18"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+3"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 30 ft., [darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 60 ft., passive Perception 12"
"languages": "Common, Slaad; telepathy 60 ft."
"cr": "8"
"traits":
  - "desc": "The slaad has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The slaad regains 10 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ at the start of each of its turns if it has at least 1 [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)."
    "name": "Regeneration"
"actions":
  - "desc": "The slaad makes three Chaos Staff attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +7, reach 10 ft. or range 60 ft. *Hit:*\
      \ 8 (1d8 + 4) Force damage. Until the start of the slaad's next turn, the\
      \ target has a condition determined by rolling 1d4: on a 1, [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed);\
      \ on a 2, [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened); on\
      \ a 3, [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned); or on a\
      \ 4, [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Chaos Staff"
  - "desc": "The slaad casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 14, +6 to\
      \ hit with spell attacks):\n\n**At will:** [Detect Magic](3.%20Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [Detect Thoughts](3.%20Mechanics/CLI/spells/detect-thoughts-xphb.md), [Mage\
      \ Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md)\n\n**1/day each:** [Fireball](3.%20Mechanics/CLI/spells/fireball-xphb.md),\
      \ [Invisibility](3.%20Mechanics/CLI/spells/invisibility-xphb.md) (self only)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The slaad shape-shifts into a Small or Medium Humanoid, or it returns\
      \ to its true form. Other than its size, its game statistics are the same in\
      \ each form. Any equipment it is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/green-slaad-xmm.webp"
```
^statblock

## Environment

planar, limbo