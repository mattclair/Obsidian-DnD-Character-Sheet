---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Autognome
---
# [Autognome](3. Mechanics\CLI\bestiary\construct/autognome-bam.md)
*Source: Boo's Astral Menagerie p. 13, Light of Xaryxis*  

An autognome is a mechanical gnome that resembles the rock gnome who created it, though it could never be mistaken for a gnome. Regardless of what its insides are made of, it has a metallic outer casing painted with gnomish features. It walks with a stiff gait, clanking, wheezing, whirring, and buzzing wherever it goes.

An autognome obeys its creator's commands when it is functioning properly, but a design flaw can cause an autognome to go rogue, forget its orders, and wander Wildspace doing anything except what it was designed for.

No two autognomes are necessarily made of the same materials; magic is what gives them their intelligence. Most autognomes are programmed to obey the following three directives: defend gnomes who are being attacked by non-gnomes, defend yourself if you are attacked, and protect infants and youngsters from harm. The last directive arose from the best intentions, but it doesn't distinguish between species; if an autognome sees a group of adults battling a lunar dragon wyrmling, for instance, it would come to the wyrmling's defense.

```statblock
"name": "Autognome (BAM)"
"size": "Small"
"type": "construct"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "39"
"hit_dice": "6d6 + 18"
"modifier": !!int "-2"
"stats":
  - !!int "13"
  - !!int "6"
  - !!int "16"
  - !!int "4"
  - !!int "11"
  - !!int "6"
"speed": "20 ft."
"saves":
  - "constitution": !!int "5"
  - "wisdom": !!int "2"
  - "charisma": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "[paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Common, Gnomish"
"cr": "2"
"traits":
  - "desc": "Whenever the autognome takes 15 damage or more from a single source and\
      \ isn't reduced to 0 hit points by that damage, roll a d20 to determine if\
      \ it suffers a malfunction:\n\n- **1-10 \"All Fine Here!\".** No malfunction\
      \ occurs.  \n- **11-12 \"My Mind Is Going. I Can Feel It.\".** The autognome\
      \ is [incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated) for\
      \ 1 minute.  \n- **13-14 \"You've Disarmed Me!\".** One of the autognome's arms\
      \ falls off, reducing the number of Shock attacks it can make by 1 until a creature\
      \ uses an action to reattach the arm.  \n- **15-16 \"Who Turned Out the Lights?\"\
      .** The autognome's head falls off and deactivates, causing the autognome to\
      \ be [blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded) and [deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened)\
      \ until a creature uses an action to reattach the head, which reactivates it.\
      \  \n- **17-20 \"Have a Magical Day!\".** The autognome explodes and is destroyed.\
      \ Each creature within 20 feet of the exploding autognome must make a DC 11\
      \ Dexterity saving throw, taking 22 (4d10) slashing damage on a failed save,\
      \ or half as much damage on a successful one.  \n- **Unusual Nature.** The autognome\
      \ doesn't require air, food, drink, or sleep.  "
    "name": "Malfunction"
"actions":
  - "desc": "The autognome makes two Shock attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +3 to hit, reach 5 ft. or range 60\
      \ ft., one target. *Hit:* 7 (2d6) lightning damage."
    "name": "Shock"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/construct/token/autognome-bam.webp"
```
^statblock