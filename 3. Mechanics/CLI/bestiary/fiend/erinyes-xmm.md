---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/nine-hells
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- Erinyes
---
# [Erinyes](3. Mechanics\CLI\bestiary\fiend/erinyes-xmm.md)
*Source: Monster Manual (2024) p. 114. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Erinyes

*Devil of Vengeance and Righteous Wrath*

- **Habitat.** Planar (Nine Hells)  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Erinyes, also known as furies, are winged devils clad in fiendish armor. These fallen angels exact a merciless form of divine justice, hunting down oath breakers and dragging the rightfully damned to the Nine Hells in the grip of their magical ropes. Few ever glimpse what lies within these devils' armored exteriors, and erinyes ensure that those who do can never speak of what they've seen.

Erinyes often serve archdevils and guard the order of the Nine Hells against trespassers and escapees. Although they're prone to wrathful outbursts, erinyes cooperate well with other devils. They sometimes hunt in trios with other erinyes, forging infamous reputations for themselves.

When not in the service of a diabolical master, erinyes hunt wicked souls. They pursue quarries relentlessly, across the multiverse and for ages if need be. While they might be summoned to serve evil magic-users, erinyes also listen for oaths and curses sworn in their names. In rare cases, wronged mortals who call out with just rage might be heard by an erinyes who appears to take vengeance on their behalf. Once erinyes are so summoned, they won't leave without claiming the soul of either their quarry or the mortal who summoned them.

```statblock
"name": "Erinyes (XMM)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "178"
"hit_dice": "21d8 + 84"
"modifier": !!int "7"
"stats":
  - !!int "18"
  - !!int "16"
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "18"
"speed": "30 ft., fly 60 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "8"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Persuasion](3.%20Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+8"
"damage_resistances": "cold"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](3.%20Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive\
  \ Perception 16"
"languages": "Infernal; telepathy 120 ft."
"cr": "12"
"traits":
  - "desc": "If the erinyes dies outside the Nine Hells, its body disappears in sulfurous\
      \ smoke, and it gains a new body instantly, reviving with all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Nine Hells."
    "name": "Diabolical Restoration"
  - "desc": "The erinyes has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The erinyes has a magic rope. While bearing it, the erinyes can use the\
      \ Entangling Rope action. The rope has AC 20, HP 90, and [Immunity](3.%20Mechanics/CLI/rules/variant-rules/immunity-xphb.md)\
      \ to Poison and Psychic damage. The rope turns to dust if reduced to 0 [Hit\
      \ Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md), if it\
      \ is 5+ feet away from the erinyes for 1 hour or more, or if the erinyes dies.\
      \ If the rope is damaged or destroyed, the erinyes can fully restore it when\
      \ finishing a [Short](3.%20Mechanics/CLI/rules/variant-rules/short-rest-xphb.md)\
      \ or [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md)."
    "name": "Magic Rope"
"actions":
  - "desc": "The erinyes makes three Withering Sword attacks and can use Entangling\
      \ Rope."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +8, reach 5 ft. *Hit:* 13 (2d8 + 4) Slashing\
      \ damage plus 11 (2d10) Necrotic damage."
    "name": "Withering Sword"
  - "desc": "*Strength Saving Throw:* DC 16, one creature the erinyes can see within\
      \ 120 feet. *Failure:* 14 (4d6) Force damage, and the target has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition until the rope is destroyed, the erinyes uses a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md)\
      \ to release the target, or the erinyes uses Entangling Rope again."
    "name": "Entangling Rope (Requires Magic Rope)"
"reactions":
  - "desc": "Trigger: The erinyes is hit by a melee attack roll while holding a weapon.\
      \ _Response:_ The erinyes adds 4 to its AC against that attack, possibly causing\
      \ it to miss."
    "name": "Parry"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/erinyes-xmm.webp"
```
^statblock

## Environment

planar, nine hells