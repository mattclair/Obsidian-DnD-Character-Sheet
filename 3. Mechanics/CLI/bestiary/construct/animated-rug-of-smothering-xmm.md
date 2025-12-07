---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Animated Rug of Smothering
---
# [Animated Rug of Smothering](3. Mechanics\CLI\bestiary\construct/animated-rug-of-smothering-xmm.md)
*Source: Monster Manual (2024) p. 17. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Animated rugs of smothering might attack any creature that steps on them, or they might be passed off as superficially similar magic items, such as Carpets of Flying, and attack those who speak a supposed command word. Deadly tapestries, furs, and similar items also use this stat block.

## Animated Objects

*Mundane Objects Come to Life*

- **Habitat.** Urban  
- **Treasure.** None  

Magic can manipulate mundane items, compelling them to perform simple tasks. Such animate objects might be unassuming tools or decorations that can defend their creator. These objects follow simple instructions from whatever force or magic-user created them. If left unattended, they might defend an area for ages or repeat a task until they wear out.

Roll on or choose a result from the Animated Object Catalysts table to inspire what sort of magic motivates an ambulatory item.

> [!quote] A quote from Levity Quickstitch, Rogue  
> 
> Lyin' next to the chest were the bones of Cap'n Scornblade himself, still clutchin' his rusty sword. Imagine my surprise when the blade flew from his bony grasp! Still got the scar.

**Animated Object Catalysts**

| dice: 1d10 | The Object Was Animated By... |
|------------|-------------------------------|
| 1 | A Celestial or Fiend using the object to protect or torment a mortal. |
| 2 | A combination of magic and technology, such as alchemy or alien science. |
| 3 | The essence of someone transformed by a supernatural trickster. |
| 4 | Fey as part of their games or wiles. |
| 5 | Happenstance, with the item gaining a semblance of life after a hundred years of use. |
| 6 | A magic-user in need of a guardian or servant. |
| 7 | The song of a magical instrument. |
| 8 | A spirit possessing the object. |
| 9 | Wild magic, a spell that went awry, or a chaotic Artifact. |
| 10 | The will of a powerful psychic being. |
^animated-object-catalysts

```statblock
"name": "Animated Rug of Smothering (XMM)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "5d10"
"modifier": !!int "4"
"stats":
  - !!int "17"
  - !!int "14"
  - !!int "10"
  - !!int "1"
  - !!int "3"
  - !!int "1"
"speed": "10 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 6"
"languages": ""
"cr": "2"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 10 (2d6 + 3) Bludgeoning\
      \ damage. If the target is a Medium or smaller creature, the rug can give it\
      \ the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled) condition\
      \ (escape DC 13) instead of dealing damage. Until the grapple ends, the target\
      \ has the [Blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded) and [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ conditions, is suffocating, and takes 10 (2d6 + 3) Bludgeoning damage at\
      \ the start of each of its turns. The rug can smother only one creature at a\
      \ time.\n\nWhile grappling the target, the rug can't take this action, the rug\
      \ halves the damage it takes (round down), and the target takes the same amount\
      \ of damage."
    "name": "Smother"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/construct/token/animated-rug-of-smothering-xmm.webp"
```
^statblock

## Environment

urban