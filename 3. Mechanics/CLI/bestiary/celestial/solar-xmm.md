---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/upper
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial/angel
statblock: inline
statblock-link: "#^statblock"
aliases:
- Solar
---
# [Solar](3. Mechanics\CLI\bestiary\celestial/solar-xmm.md)
*Source: Monster Manual (2024) p. 288. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Solar

*Angelic Protector of the Multiverse*

- **Habitat.** Planar (Upper Planes)  
- **Treasure.** Any  

Solars stand as the final line of defense between unspeakable evils and the order of the multiverse. They are the servants of just deities and ageless forces of good. Their interests span the planes, but they rarely intervene in conflicts on the worlds of the Material Plane. When they act, they lead vast angelic hosts and wield holy weapons capable of laying low the wickedest Fiends.

Solars can resurrect the dead and often use that power to enlist mortal aid. They bestow grand, new purposes on those they return to life. Solars don't enforce these destinies, but they trust in the potential of mortals to achieve great things.

```statblock
"name": "Solar (XMM)"
"size": "Large"
"type": "celestial"
"subtype": "angel"
"alignment": "Lawful Good"
"ac": !!int "21"
"hp": !!int "297"
"hit_dice": "22d10 + 176"
"modifier": !!int "20"
"stats":
  - !!int "26"
  - !!int "22"
  - !!int "26"
  - !!int "25"
  - !!int "25"
  - !!int "30"
"speed": "50 ft., fly 150 ft. (hover)"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+14"
"damage_immunities": "poison, radiant"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion), [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](3.%20Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive\
  \ Perception 24"
"languages": "all; telepathy 120 ft."
"cr": "21"
"traits":
  - "desc": "The solar knows if it hears a lie."
    "name": "Divine Awareness"
  - "desc": "If the solar dies outside Mount Celestia, its body disappears, and it\
      \ gains a new body instantly, reviving with all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ somewhere in Mount Celestia."
    "name": "Exalted Restoration"
  - "desc": "If the solar fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day)"
  - "desc": "The solar has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The solar makes two Flying Sword attacks. It can replace one attack with\
      \ a use of Slaying Bow."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +15, reach 10 ft. or range 120 ft.\
      \ *Hit:* 22 (4d6 + 8) Slashing damage plus 36 (8d8) Radiant damage. *Hit\
      \ or Miss:* The sword magically returns to the solar's hand or hovers within\
      \ 5 feet of the solar immediately after a ranged attack."
    "name": "Flying Sword"
  - "desc": "*Dexterity Saving Throw:* DC 21, one creature the solar can see within\
      \ 600 feet. *Failure:* If the creature has 100 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ or fewer, it dies. It otherwise takes 24 (4d8 + 6) Piercing damage plus\
      \ 36 (8d8) Radiant damage."
    "name": "Slaying Bow"
  - "desc": "The solar casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 25):\n\n**At\
      \ will:** [Detect Evil and Good](3.%20Mechanics/CLI/spells/detect-evil-and-good-xphb.md)\n\
      \n**1/day each:** [Commune](3.%20Mechanics/CLI/spells/commune-xphb.md), [Control\
      \ Weather](3.%20Mechanics/CLI/spells/control-weather-xphb.md), [Dispel Evil\
      \ and Good](3.%20Mechanics/CLI/spells/dispel-evil-and-good-xphb.md), [Resurrection](3.%20Mechanics/CLI/spells/resurrection-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The solar casts [Cure Wounds](3.%20Mechanics/CLI/spells/cure-wounds-xphb.md)\
      \ (level 2 version), [Lesser Restoration](3.%20Mechanics/CLI/spells/lesser-restoration-xphb.md),\
      \ or [Remove Curse](3.%20Mechanics/CLI/spells/remove-curse-xphb.md), using the\
      \ same spellcasting ability as Spellcasting.\n"
    "name": "Divine Aid (3/Day)"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the solar can expend a use to take one of the following actions. The solar\
  \ regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "*Constitution Saving Throw:* DC 25, one creature the solar can see within\
      \ 120 feet. *Failure:* The target has the [Blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded)\
      \ condition for 1 minute. *Failure or Success:* The solar can't take this action\
      \ again until the start of its next turn."
    "name": "Blinding Gaze"
  - "desc": "The solar teleports up to 60 feet to an unoccupied space it can see.\
      \ *Dexterity Saving Throw:* DC 25, each creature in a 10-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the solar at its destination space. *Failure:* 11 (2d10)\
      \ Radiant damage. *Success:* Half damage."
    "name": "Radiant Teleport"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/celestial/token/solar-xmm.webp"
```
^statblock

## Environment

planar, upper