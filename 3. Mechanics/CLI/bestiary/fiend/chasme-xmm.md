---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Chasme
---
# [Chasme](3. Mechanics\CLI\bestiary\fiend/chasme-xmm.md)
*Source: Monster Manual (2024) p. 69*  

## Chasme

*Demon of Betrayal and Sycophancy*

- **Habitat.** Planar (Abyss)  
- **Treasure.** [Relics](3.%20Mechanics/CLI/tables/random-magic-items-relics.md)  

Flying forth from the Abyss, chasmes resemble horse-size flies. They incapacitate foes by producing a mind-numbing droning, then use their proboscises to drain victims of life. In the Abyss, most chasmes obsequiously serve more powerful demons and search for captives to press into demonic hordes.

```statblock
"name": "Chasme (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d10 + 12"
"modifier": !!int "5"
"stats":
  - !!int "15"
  - !!int "15"
  - !!int "12"
  - !!int "11"
  - !!int "14"
  - !!int "10"
"speed": "20 ft., fly 60 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 10 ft., [darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 15"
"languages": "Abyssal; telepathy 120 ft."
"cr": "6"
"traits":
  - "desc": "If the chasme dies outside the Abyss, its body dissolves into ichor,\
      \ and it gains a new body instantly, reviving with all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Abyss."
    "name": "Demonic Restoration"
  - "desc": "The chasme has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The chasme can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 16 (4d6 + 2) Piercing\
      \ damage plus 21 (6d6) Necrotic damage. If the target is a creature, its [Hit\
      \ Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md) maximum\
      \ decreases by an amount equal to the Necrotic damage taken."
    "name": "Proboscis"
"bonus_actions":
  - "desc": "*Constitution Saving Throw:* DC 12, each creature in a 30-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the chasme (demons automatically succeed on this save). *Failure:*\
      \ The target has the [Unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ condition and repeats the save at the end of each of its turns. The target\
      \ succeeds automatically after 10 minutes or if it takes damage or a creature\
      \ within 5 feet of it takes an action to empty a flask of Holy Water on it.\
      \ *Success:* The target is immune to this chasme's Drone for 24 hours."
    "name": "Drone"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/chasme-xmm.webp"
```
^statblock

## Environment

planar, abyss