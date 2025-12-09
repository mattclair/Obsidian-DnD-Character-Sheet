---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Yochlol
---
# [Yochlol](3. Mechanics\CLI\bestiary\fiend/yochlol-xmm.md)
*Source: Monster Manual (2024) p. 341*  

## Yochlol

*Demon of Depraved Will*

- **Habitat.** Planar (Abyss)  
- **Treasure.** None  

Yochlols embody the pernicious will and infectious philosophies of the Abyss. In their rarely seen true forms, these noxious manipulators appear as ever-shifting masses of dripping tentacles and toxic flesh crowned by a single baleful eye. More often, though, yochlols take the form of spiders or zealous cultists. They use manipulative magic and dangerous rhetoric to spread demonic cults, corrupt the righteous, and further the plots of their fiendish overlords. They relish coercing the unwitting into furthering demonic plots and turning mortals against one another.

Most yochlols serve Lolth. The Demon Queen of Spiders claims all yochlols as minions and orders any yochlols that disagree destroyed. In rare cases, yochlols might serve other demon lords, particularly manipulative or changeable ones like Graz'zt, Juiblex, and Zuggtmoy.

Despite their service to demon lords, yochlols harbor their own vicious whims and ambitions. They might claim to speak for their overlords to further their own ambitions or seek to reveal rivals' selfish goals to gain standing with their demonic masters.

```statblock
"name": "Yochlol (XMM)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "153"
"hit_dice": "18d8 + 72"
"modifier": !!int "8"
"stats":
  - !!int "15"
  - !!int "19"
  - !!int "18"
  - !!int "13"
  - !!int "15"
  - !!int "17"
"speed": "30 ft., climb 30 ft."
"saves":
  - "dexterity": !!int "8"
  - "intelligence": !!int "5"
  - "wisdom": !!int "6"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Deception](3.%20Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+11"
  - "name": "[Insight](3.%20Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+6"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 12"
"languages": "Abyssal, Elvish, Undercommon"
"cr": "10"
"traits":
  - "desc": "If the yochlol dies outside the Abyss, its body dissolves, and it gains\
      \ a new body instantly, reviving with all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ in the Abyss."
    "name": "Demonic Restoration"
  - "desc": "The yochlol has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The yochlol can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The yochlol ignores movement restrictions caused by webs."
    "name": "Web Walker"
"actions":
  - "desc": "The yochlol makes two Caustic Lash attacks, and it can use Spellcasting\
      \ to cast [Web](3.%20Mechanics/CLI/spells/web-xphb.md) or [Dominate Person](3.%20Mechanics/CLI/spells/dominate-person-xphb.md)\
      \ if available."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +8, reach 10 ft. or range 120 ft. *Hit:*\
      \ 25 (6d6 + 4) Acid damage."
    "name": "Caustic Lash"
  - "desc": "The yochlol casts one of the following spells, requiring no Material\
      \ components and using Charisma as the spellcasting ability (spell save DC 15):\n\
      \n**At will:** [Detect Thoughts](3.%20Mechanics/CLI/spells/detect-thoughts-xphb.md),\
      \ [Gaseous Form](3.%20Mechanics/CLI/spells/gaseous-form-xphb.md) (self only),\
      \ [Web](3.%20Mechanics/CLI/spells/web-xphb.md)\n\n**1/day:** [Dominate Person](3.%20Mechanics/CLI/spells/dominate-person-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The yochlol shape-shifts into a Medium Humanoid or a Medium spider or\
      \ back into its true form. Its game statistics are the same in each form. Any\
      \ equipment it is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
"reactions":
  - "desc": "Trigger: The yochlol is hit by an attack roll. _Response:_ The yochlol\
      \ halves the attack's damage to itself (round down), and it teleports to an\
      \ unoccupied space it can see within 30 feet of itself. *Constitution Saving\
      \ Throw:* DC 15, each creature within 5 feet of the yochlol's destination space.\
      \ *Failure:* The target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the end of its next turn. While [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
      \ it has the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Toxic Escape"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/yochlol-xmm.webp"
```
^statblock

## Environment

planar, abyss