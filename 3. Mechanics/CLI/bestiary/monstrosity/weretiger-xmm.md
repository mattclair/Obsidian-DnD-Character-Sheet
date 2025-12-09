---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/monstrosity/lycanthrope
statblock: inline
statblock-link: "#^statblock"
aliases:
- Weretiger
---
# [Weretiger](3. Mechanics\CLI\bestiary\monstrosity/weretiger-xmm.md)
*Source: Monster Manual (2024) p. 326. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Weretiger

*Changed by the Power of the Tiger*

- **Habitat.** Desert, Forest, Grassland  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Weretigers shape-shift from humanoid forms into tigers or tiger-humanoid hybrids. Although they can transform at will or when their magical nature demands, many weretigers are nocturnal and transform into their bestial shapes at night. Some weretigers' transformations might also be tied to the crescent moon, seasons, or momentous events. Weretigers often view their abilities as a blessing or a family honor, and they use their shape-shifting abilities to defend something with historic importance. Roll on or choose a result from the Weretiger Wards table to inspire what a weretiger defends.

**Weretiger Wards**

| dice: 1d4 | The Weretiger Protects A... |
|-----------|-----------------------------|
| 1 | Legendary weapon or symbol of rulership. |
| 2 | Proving ground for prophesied heroes. |
| 3 | Rare species of magical plant or animal. |
| 4 | Sacred fountain with magical waters. |
^weretiger-wards

> [!quote] A quote from Delmair Rallyhorn, Weretiger  
> 
> I hunt evil like the great cat hunts its prey, but evil will not long yield to blade alone. It takes strength, honor, and sometimes a little more.


```statblock
"name": "Weretiger (XMM)"
"size": "Small or Medium"
"type": "monstrosity"
"subtype": "lycanthrope"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "15"
  - !!int "16"
  - !!int "10"
  - !!int "13"
  - !!int "11"
"speed": "30 ft., 40 ft. (tiger form only)"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": "Common (can't speak in tiger form)"
"cr": "4"
"actions":
  - "desc": "The weretiger makes two attacks, using Scratch or Longbow in any combination.\
      \ It can replace one attack with a Bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 12 (2d8 + 3) Piercing\
      \ damage. If the target is a Humanoid, it is subjected to the following effect.\
      \ *Constitution Saving Throw:* DC 13. *Failure:* The target is cursed. If the\
      \ cursed target drops to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md),\
      \ it instead becomes a Weretiger under the DM's control and has 10 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md).\
      \ *Success:* The target is immune to this weretiger's curse for 24 hours."
    "name": "Bite (Tiger or Hybrid Form Only)"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 10 (2d6 + 3) Slashing\
      \ damage."
    "name": "Scratch"
  - "desc": "*Ranged Attack Roll:* +4, range 150/600 ft. *Hit:* 11 (2d8 + 2) Piercing\
      \ damage."
    "name": "Longbow (Humanoid or Hybrid Form Only)"
"bonus_actions":
  - "desc": "The weretiger moves up to its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md)\
      \ without provoking [Opportunity Attacks](3.%20Mechanics/CLI/rules/actions.md#Opportunity%20Attack).\
      \ At the end of this movement, the weretiger can take the Hide action."
    "name": "Prowl (Tiger or Hybrid Form Only)"
  - "desc": "The weretiger shape-shifts into a Large tiger-humanoid hybrid or a Large\
      \ tiger, or it returns to its true humanoid form. Its game statistics, other\
      \ than its size, are the same in each form. Any equipment it is wearing or carrying\
      \ isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/weretiger-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland