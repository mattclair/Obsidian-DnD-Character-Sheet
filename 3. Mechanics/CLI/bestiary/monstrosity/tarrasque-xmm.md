---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/30
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/monstrosity/titan
statblock: inline
statblock-link: "#^statblock"
aliases:
- Tarrasque
---
# [Tarrasque](3. Mechanics\CLI\bestiary\monstrosity/tarrasque-xmm.md)
*Source: Monster Manual (2024) p. 305. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Tarrasque

*The Shape of Calamity*

- **Habitat.** Urban  
- **Treasure.** None  

Among the most devastating creatures in existence, the tarrasque is an engine of catastrophe and a ruiner of nations. A terror of massive size and overwhelming might, this primeval destroyer survives from the earliest epochs of the Material Plane, when it served as a weapon of immortal forces. Since then, the tarrasque has slumbered in secret, rising every few ages to usher in eras of destruction.

The tarrasque is a bipedal, prehistoric Monstrosity that stands over seventy feet tall. Bristling with horns and spikes, its spiny carapace deflects harm and can reflect magical attacks.

The tarrasque is a creature of tireless rage. It lashes out at any creature that catches its attention, thrashing with claws and its mighty tail while swallowing smaller beings whole. It seems to take instinctual offense at the works of lesser beings, venting its rage at buildings, bridges, ships, and monuments. The larger a structure or foe is, the greater the tarrasque's wrath.

It is a mystery what—if anything—calms the tarrasque, but eventually it returns to its slumber, leaving the world irrevocably changed. While the tarrasque might be halted by incredible opposition, its threat can never be wiped from the multiverse. Whenever the tarrasque is defeated, another tarrasque awakes somewhere else on the Material Plane.

Few things survive the tarrasque's rampages, and reports of the monster's devastation are often contradictory, incomplete, or beyond belief. In cases where it leaves no survivors, its calamities might initially be blamed on evil dragons or magical disasters, but the tarrasque frequently leaves behind some unmistakable indication of its passage. Roll on or choose a result from the Tarrasque Evidence table to inspire what marks the monster's rampages.

**Tarrasque Evidence**

| dice: 1d4 | Amid Destruction, the Tarrasque Leaves... |
|-----------|-------------------------------------------|
| 1 | Evidence of a magic spell reflected back on its caster, like Ice Knife or Melf's Acid Arrow. |
| 2 | Massive footprints or claw marks. |
| 3 | A russet scale the size of a knight's shield. |
| 4 | A shattered mountain or diverted river. |
^tarrasque-evidence

```statblock
"name": "Tarrasque (XMM)"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Unaligned"
"ac": !!int "25"
"hp": !!int "697"
"hit_dice": "34d20 + 340"
"modifier": !!int "18"
"stats":
  - !!int "30"
  - !!int "11"
  - !!int "30"
  - !!int "3"
  - !!int "11"
  - !!int "11"
"speed": "60 ft., burrow 40 ft., climb 60 ft."
"saves":
  - "dexterity": !!int "9"
  - "intelligence": !!int "5"
  - "wisdom": !!int "9"
  - "charisma": !!int "9"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+9"
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "fire, poison"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened), [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed), [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 120 ft., passive\
  \ Perception 19"
"languages": ""
"cr": "30"
"traits":
  - "desc": "If the tarrasque fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (6/Day)"
  - "desc": "The tarrasque has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "If the tarrasque is targeted by a [Magic Missile](3.%20Mechanics/CLI/spells/magic-missile-xphb.md)\
      \ spell or a spell that requires a ranged attack roll, roll 1d6. On a 1-5,\
      \ the tarrasque is unaffected. On a 6, the tarrasque is unaffected and reflects\
      \ the spell, turning the caster into the target."
    "name": "Reflective Carapace"
  - "desc": "The tarrasque deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The tarrasque makes one Bite attack and three other attacks, using Claw\
      \ or Tail in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +19, reach 15 ft. *Hit:* 36 (4d12 + 10) Piercing\
      \ damage, and the target has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 20). Until the grapple ends, the target has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition and can't teleport."
    "name": "Bite"
  - "desc": "*Melee Attack Roll:* +19, reach 15 ft. *Hit:* 28 (4d8 + 10) Slashing\
      \ damage."
    "name": "Claw"
  - "desc": "*Melee Attack Roll:* +19, reach 30 ft. *Hit:* 23 (3d8 + 10) Bludgeoning\
      \ damage. If the target is a Huge or smaller creature, it has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Tail"
  - "desc": "*Constitution Saving Throw:* DC 27, each creature and each object that\
      \ isn't being worn or carried in a 150-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 78 (12d12) Thunder damage, and the target has the [Deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened)\
      \ and [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened) conditions\
      \ until the end of its next turn. *Success:* Half damage only."
    "name": "Thunderous Bellow (Recharge 5-6)"
"bonus_actions":
  - "desc": "*Strength Saving Throw:* DC 27, one Large or smaller creature [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the tarrasque (it can have up to six creatures swallowed at a time). *Failure:*\
      \ The target is swallowed, and the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition ends. A swallowed creature has the [Blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded)\
      \ and [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) conditions\
      \ and can't teleport, it has [Total Cover](3.%20Mechanics/CLI/rules/variant-rules/cover-xphb.md)\
      \ against attacks and other effects outside the tarrasque, and it takes 56 (16d6)\
      \ Acid damage at the start of each of the tarrasque's turns.\n\nIf the tarrasque\
      \ takes 60 damage or more on a single turn from a creature inside it, the tarrasque\
      \ must succeed on a DC 20 Constitution saving throw at the end of that turn\
      \ or regurgitate all swallowed creatures, each of which falls in a space within\
      \ 10 feet of the tarrasque and has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition. If the tarrasque dies, any swallowed creature no longer has the\
      \ [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) condition\
      \ and can escape from the corpse using 20 feet of movement, exiting [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Swallow"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the tarrasque can expend a use to take one of the following actions. The\
  \ tarrasque regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The tarrasque moves up to half its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md),\
      \ and it makes one Claw or Tail attack."
    "name": "Onslaught"
  - "desc": "The tarrasque moves up to its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md).\
      \ At the end of this movement, the tarrasque creates an instantaneous shock\
      \ wave in a 60-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from itself. Creatures in that area lose [Concentration](3.%20Mechanics/CLI/rules/conditions.md#Concentration)\
      \ and, if Medium or smaller, have the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition. The tarrasque can't take this action again until the start of its\
      \ next turn."
    "name": "World-Shaking Movement"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/tarrasque-xmm.webp"
```
^statblock

## Environment

urban