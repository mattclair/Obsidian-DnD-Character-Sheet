---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/feywild
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Satyr Revelmaster
---
# [Satyr Revelmaster](3. Mechanics\CLI\bestiary\fey/satyr-revelmaster-xmm.md)
*Source: Monster Manual (2024) p. 268*  

Satyr revelmasters use magical music to change the moods of other creatures. They do so to keep their celebrations exciting and to ward off foes.

## Satyrs

*Horned and Hoofed Revelers*

- **Habitat.** Forest, Planar (Feywild)  
- **Treasure.** [Implements](3.%20Mechanics/CLI/tables/random-magic-items-implements.md)  

Satyrs embody the untamed joys of the wilderness. They indulge in sprees of merrymaking—eating, drinking, performing, fighting, and frolicking.

```statblock
"name": "Satyr Revelmaster (XMM)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"hp": !!int "82"
"hit_dice": "15d8 + 15"
"modifier": !!int "7"
"stats":
  - !!int "12"
  - !!int "18"
  - !!int "12"
  - !!int "12"
  - !!int "14"
  - !!int "17"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "7"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Acrobatics](3.%20Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+7"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Performance](3.%20Mechanics/CLI/rules/skills.md#Performance)"
    "desc": "+9"
"senses": "passive Perception 15"
"languages": "Common, Elvish, Sylvan"
"cr": "6"
"traits":
  - "desc": "The satyr has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The satyr makes three Prance attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 13 (2d8 + 4) Bludgeoning\
      \ damage, and the target has the [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ condition until the start of the satyr's next turn."
    "name": "Prance"
  - "desc": "The satyr conjures a charming or frightening song. *Wisdom Saving Throw:*\
      \ DC 14, each enemy in a 60-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the satyr. *Failure:* The target is subjected to the song's\
      \ effect:\n\n- **Charming.** The target has the [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ condition for 1 minute. While [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
      \ the target has the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition and uses all its movement to dance in place. The effect ends on\
      \ the target if it takes any damage.  \n- **Frightening.** 10 (2d6 + 3) Psychic\
      \ damage, and the target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition for 1 minute. If the target ends its turn out of line of sight from\
      \ the satyr, the condition ends on it.  "
    "name": "Fey Melody (Recharge 4-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fey/token/satyr-revelmaster-xmm.webp"
```
^statblock

## Environment

forest, planar, feywild