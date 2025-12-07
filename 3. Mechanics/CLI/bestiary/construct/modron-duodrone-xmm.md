---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/mechanus
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Modron Duodrone
---
# [Modron Duodrone](3. Mechanics\CLI\bestiary\construct/modron-duodrone-xmm.md)
*Source: Monster Manual (2024) p. 217*  

Duodrones can perform two tasks at once and often oversee monodrone work groups. They are slightly more skeptical of strangers than monodrones are.

## Modrons

*Mechanized Caretakers of Multiversal Law*

- **Habitat.** Planar (Mechanus)  
- **Treasure.** None  

Beings of magic and machinery, modrons embody absolute law. These inhabitants of the clockwork plane of Mechanus tend to the incredible mechanisms of their orderly home and oppose chaotic forces across the multiverse.

Modrons are parts of a vast hierarchy, spanning from quirky monodrones to the leader of their kind, the godlike Primus. Every modron carries out tasks assigned to it by higher-ranking modrons, doing so without question. Generally, modrons communicate only with other modrons of their own rank or the ranks immediately above and below them. Those more than one rank away tend to be either too advanced or too simple for them to understand.

Modrons excel at tasks that require patience and precision, but they have little understanding of non-literal concepts such as art or humor. They have no egos; they have only their work and the certainty that multiversal law depends on their efficacy.

In rare cases, a modron goes rogue and develops its own will. In these cases, other modrons are sent to recover or destroy their malfunctioning kin.

### Modron Marches

Whether in service to lawful deities or as part of the Great Modron March, modrons travel from Mechanus to spread their vision of law to other planes of existence. Roll on or choose a result from the Modron Operations table to inspire what effort leads a group of modrons to other realms.

**Modron Operations**

| dice: 1d8 | The Modrons Work To... |
|-----------|------------------------|
| 1 | Create a clockwork outpost to monitor the balance of obscure planar forces. |
| 2 | Ensure neither side gains the upper hand in a conflict between good and evil. |
| 3 | Excavate a portal to another plane. |
| 4 | Find a lost contingent of modrons. |
| 5 | Reactivate a titanic but lost modron device. |
| 6 | Remove a forest, mountain, or city before the arrival of a modron procession. |
| 7 | Seal off a planar rift or wild magic zone. |
| 8 | Wage war with demons, slaadi, or chaotic Fey. |
^modron-operations

> [!quote] A quote from A planar explorer learning modrons have no sense of humor  
> 
> The guide swore "beep boop" meant "hello, friend." I don't know why they're after us!


```statblock
"name": "Modron Duodrone (XMM)"
"size": "Medium"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "15"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "13"
  - !!int "12"
  - !!int "6"
  - !!int "10"
  - !!int "7"
"speed": "30 ft."
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)"
"senses": "[truesight](3.%20Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive\
  \ Perception 10"
"languages": "Modron"
"cr": "1/4"
"traits":
  - "desc": "If the modron dies, it disintegrates into dust, leaving behind anything\
      \ it was wearing or carrying."
    "name": "Disintegration"
"actions":
  - "desc": "The modron makes two Clockwork Blade attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +3, reach 5 ft. or range 30 ft. *Hit:*\
      \ 4 (1d6 + 1) Force damage. *Hit or Miss:* The blade magically returns to\
      \ the modron's hand immediately after a ranged attack."
    "name": "Clockwork Blade"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/construct/token/modron-duodrone-xmm.webp"
```
^statblock

## Environment

planar, mechanus