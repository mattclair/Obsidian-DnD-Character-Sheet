---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Death Dog
---
# [Death Dog](3. Mechanics\CLI\bestiary\monstrosity/death-dog-xmm.md)
*Source: Monster Manual (2024) p. 91. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Death Dog

*Two-Headed Spreader of Disease*

- **Habitat.** Desert  
- **Treasure.** None  

Death dogs are plagues on the arid lands they inhabit. These vicious, two-headed canines ambush creatures they perceive as weaker than themselves, favoring the wounded or infirm. They attack recklessly, infecting as many creatures as possible with their diseased jaws. If driven off, death dogs linger close to their victims, letting infection weaken their prey before they attack again.

Legends tie death dogs to malicious death gods, the underworld, and cursed rulers. These stories are based on the malady death dogs spread. Roll on or choose a result from the Death Dog Malady Symptoms table to inspire symptoms spread by a death dog's bite. These symptoms are cosmetic and don't alter the effects of the death dog's Bite action. The symptoms vanish when a creature no longer has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned) condition from a death dog's Bite.

> [!quote] A quote from Tablet Fragment  
> 
> And his sorrows will stalk your land like hungry dogs until the seas turn to sand and the sun burns to cinders.

**Death Dog Malady Symptoms**

| dice: 1d6 | The Death Dog's Malady Causes... |
|-----------|----------------------------------|
| 1 | Marks from canine jaws to appear on the victim's body, as if they were still being mauled. |
| 2 | The victim's body to wither, as if constantly exposed to desert heat. |
| 3 | The victim to be distracted by distant howling or vague whispers only they can hear. |
| 4 | The victim's flesh to rot like a corpse. |
| 5 | The victim to itch, as if they had fleas or sand beneath their skin. |
| 6 | Wicked symbols to gradually appear on and spread across the victim's body. |
^death-dog-malady-symptoms

```statblock
"name": "Death Dog (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "14"
  - !!int "3"
  - !!int "13"
  - !!int "6"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"condition_immunities": "[blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded),\
  \ [charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed), [deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), [stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned),\
  \ [unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 15"
"languages": ""
"cr": "1"
"actions":
  - "desc": "The death dog makes two Bite attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 4 (1d4 + 2) Piercing\
      \ damage. If the target is a creature, it is subjected to the following effect.\
      \ *Constitution Saving Throw:* DC 12. *1St Failure:* The target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition. While [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned),\
      \ the target's [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ maximum doesn't return to normal when finishing a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md),\
      \ and it repeats the save every 24 hours that elapse, ending the effect on itself\
      \ on a success. Subsequent Failures: The [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ target's [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by 5 (1d10)."
    "name": "Bite"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/death-dog-xmm.webp"
```
^statblock

## Environment

desert