---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Jackalwere
---
# [Jackalwere](3. Mechanics\CLI\bestiary\fiend/jackalwere-xmm.md)
*Source: Monster Manual (2024) p. 182*  

## Jackalwere

*Shape-Shifting Trickster of the Wilds*

- **Habitat.** Desert, Grassland  
- **Treasure.** [Implements](3.%20Mechanics/CLI/tables/random-magic-items-implements.md)  

Indistinguishable from jackals in their natural form, jackalweres shape-shift to deceive others. These shape-shifters can take three forms: a jackal, a human, or a monstrous hybrid of the two. Jackalweres are easily mistaken for werewolves, but jackalweres aren't supernaturally afflicted—their jackal forms are their natural state. Jackalweres also possess magical gazes capable of putting foes to sleep, allowing jackalweres to play their tricks unimpeded or get the upper hand over threats.

Jackalweres dwell in inhospitable wildernesses and pride themselves on their cleverness. They take offense at those who travel through their lands without leaving a gift of treasure or fresh game. Roll on or choose a result from the Jackalwere Tricks table to inspire how a jackalwere repays such slights.

**Jackalwere Tricks**

| dice: 1d4 | The Jackalwere Tricks Travelers By... |
|-----------|---------------------------------------|
| 1 | Guiding them into wildernesses, then abandoning them. |
| 2 | Mapping a shortcut through a monster's lair. |
| 3 | Putting them to sleep, then stealing mounts or supplies. |
| 4 | Sharing the location of hidden treasure, which turns out to be sunlight on sand or water. |
^jackalwere-tricks

```statblock
"name": "Jackalwere (XMM)"
"size": "Small"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "18"
"hit_dice": "4d6 + 4"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "15"
  - !!int "12"
  - !!int "13"
  - !!int "11"
  - !!int "10"
"speed": "40 ft."
"skillsaves":
  - "name": "[Deception](3.%20Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+4"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 90 ft., passive\
  \ Perception 14"
"languages": "Common"
"cr": "1/2"
"traits":
  - "desc": "The jackalwere has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the jackalwere's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "The jackalwere makes two Rend or Slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 5 (1d6 + 2) Piercing\
      \ damage."
    "name": "Rend (Jackal or Hybrid Form Only)"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 4 (1d4 + 2) Bludgeoning\
      \ damage."
    "name": "Slam (Human or Hybrid Form Only)"
  - "desc": "*Wisdom Saving Throw:* DC 10, one creature the jackalwere can see within\
      \ 30 feet (Constructs and Undead succeed automatically). *Failure:* The target\
      \ has the [Unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ condition for 10 minutes or until it takes damage or a creature within 5 feet\
      \ of it takes an action to wake it. *Success:* The target is immune to this\
      \ jackalwere's Sleep Gaze for 24 hours."
    "name": "Sleep Gaze (Recharge 5-6)"
"bonus_actions":
  - "desc": "The jackalwere shape-shifts into a Medium human or a Medium jackal-humanoid\
      \ hybrid, or it returns to its true form (that of a Small jackal). Other than\
      \ its size, its game statistics are the same in each form. Any equipment it\
      \ is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/jackalwere-xmm.webp"
```
^statblock

## Environment

desert, grassland