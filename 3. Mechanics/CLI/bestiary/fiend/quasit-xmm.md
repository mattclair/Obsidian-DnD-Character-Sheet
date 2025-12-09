---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Quasit
---
# [Quasit](3. Mechanics\CLI\bestiary\fiend/quasit-xmm.md)
*Source: Monster Manual (2024) p. 252, Player's Handbook (2024) p. 355. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Quasit

*Demon of Discord and Disorder*

- **Habitat.** Planar (Abyss)  
- **Treasure.** None  

Tirelessly destructive, quasits sow discord through nasty pranks, sabotage, and ambushes. These tiny demons use chaos and violence to terrorize others. By shape-shifting into harmless but ill-omened creatures or by turning [invisible](3.%20Mechanics/CLI/rules/conditions.md#Invisible), quasits sneak into places where they spy for villainous masters or set vicious traps. Quasits delight in hiding in dark places and—when least expected—bursting forth to slash foes with their [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned) claws.

Quasits are usually overlooked and underestimated by other demons. This drives them to prove themselves through cruel acts or by seeking paths to the Material Plane. Among mortals, quasits sow senseless chaos, and they might find kindred evil spirits among violent cultists and magic-users.

> [!quote] A quote from Otto the Bard  
> 
> A thing doesn't need to be big to be gut-flippingly dreadful. Just think of all the folks who're squeamish around spiders. Now imagine a spider as big as a cat and that wants to steal your tongue.


```statblock
"name": "Quasit (XMM)"
"size": "Tiny"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "25"
"hit_dice": "10d4"
"modifier": !!int "3"
"stats":
  - !!int "5"
  - !!int "17"
  - !!int "10"
  - !!int "7"
  - !!int "10"
  - !!int "10"
"speed": "40 ft."
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 10"
"languages": "Abyssal, Common"
"cr": "1"
"traits":
  - "desc": "The quasit has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 5 (1d4 + 3) Slashing\
      \ damage, and the target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the start of the quasit's next turn."
    "name": "Rend"
  - "desc": "*Wisdom Saving Throw:* DC 10, one creature within 20 feet. *Failure:*\
      \ The target has the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition. At the end of each of its turns, the target repeats the save, ending\
      \ the effect on itself on a success. After 1 minute, it succeeds automatically."
    "name": "Scare (1/Day)"
  - "desc": "The quasit shape-shifts to resemble a bat ([Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ 10 ft., Fly 40 ft.), a centipede (40 ft., Climb 40 ft.), or a toad (40 ft.,\
      \ Swim 40 ft.), or it returns to its true form. Its game statistics are the\
      \ same in each form, except for its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md).\
      \ Any equipment it is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
  - "desc": "The quasit casts [Invisibility](3.%20Mechanics/CLI/spells/invisibility-xphb.md)\
      \ on itself, requiring no spell components and using Charisma as the spellcasting\
      \ ability.\n"
    "name": "Invisibility"
"source":
  - "XMM"
  - "XPHB"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/quasit-xmm.webp"
```
^statblock

## Environment

planar, abyss