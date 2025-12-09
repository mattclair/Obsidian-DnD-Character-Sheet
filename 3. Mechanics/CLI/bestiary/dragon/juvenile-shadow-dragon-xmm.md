---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Juvenile Shadow Dragon
---
# [Juvenile Shadow Dragon](3. Mechanics\CLI\bestiary\dragon/juvenile-shadow-dragon-xmm.md)
*Source: Monster Manual (2024) p. 275*  

## Shadow Dragons

*Dragon Corrupted by Darkness*

- **Habitat.** Planar (Shadowfell), Underdark  
- **Treasure.** Any  

Shadow dragons haunt forgotten, lightless places. While they might have once been other types of dragons, the influence of planar forces, negative energy, or sinister magic has stripped them of their former color or luster. In place of any former breath weapon, shadow dragons exhale caliginous gouts that saps life from everything it touches. Those slain by a shadow dragon's breath rise as shades obedient to the shadow dragon's will.

Shadow dragons typically dwell in the Underdark, particularly in areas with connections to the Shadowfell or other tenebrous realms. In some cases, they might lurk in dark, corrupted reaches of the regions they preferred before transforming into shadow dragons. Overgrown swamps, sepulchral desert ruins, and ash-choked volcanoes make natural lairs for shadow dragons.

Like many other dragons, shadow dragons collect hoards. Their tastes tend to be morbid—collecting coins from ruined empires and their victims' skulls.

### Shadow Dragon Lairs

Shadow dragons lair in places of darkness and despair, such as accursed ruins, the depths of the Underdark, or the Shadowfell.

> [!quote] A quote from Challenge Tempting Victims to the Lair of the Shadow Dragon Aurgloroasa  
> 
> If ye truly be adventurers of lore, seek the great shadowy wyrm who lairs beneath the Peaks of Thunder and return in triumph bearing aloft her fabled Eye of Shadow.


```statblock
"name": "Juvenile Shadow Dragon (XMM)"
"size": "Medium"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"modifier": !!int "4"
"stats":
  - !!int "17"
  - !!int "14"
  - !!int "17"
  - !!int "12"
  - !!int "11"
  - !!int "15"
"speed": "30 ft., climb 30 ft., fly 60 ft."
"saves":
  - "dexterity": !!int "4"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_resistances": "See Living Shadow"
"damage_immunities": "necrotic"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 10 ft., [darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 60 ft., passive Perception 14"
"languages": "Common, Draconic"
"cr": "4"
"traits":
  - "desc": "While in [Dim Light](3.%20Mechanics/CLI/rules/variant-rules/dim-light-xphb.md)\
      \ or [Darkness](3.%20Mechanics/CLI/rules/variant-rules/darkness-xphb.md), the\
      \ dragon has [Resistance](3.%20Mechanics/CLI/rules/variant-rules/resistance-xphb.md)\
      \ to damage that isn't Force, Psychic, or Radiant."
    "name": "Living Shadow"
  - "desc": "While in sunlight, the dragon has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on ability checks and attack rolls."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The dragon makes two Rend attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 10 ft. *Hit:* 7 (1d8 + 3) Slashing\
      \ damage plus 3 (1d6) Necrotic damage."
    "name": "Rend"
  - "desc": "*Dexterity Saving Throw:* DC 13, each creature in a 30-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 17 (5d6) Necrotic damage. *Success:* Half damage. *Failure or\
      \ Success:* A Humanoid reduced to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ by this damage dies, and a [Shadow](3.%20Mechanics/CLI/bestiary/undead/shadow-xmm.md)\
      \ rises from its corpse. The shadow is under the dragon's control and shares\
      \ the dragon's [Initiative](3.%20Mechanics/CLI/rules/variant-rules/initiative-xphb.md)\
      \ count but acts immediately after the dragon."
    "name": "Shadow Breath (Recharge 5-6)"
"bonus_actions":
  - "desc": "While in [Dim Light](3.%20Mechanics/CLI/rules/variant-rules/dim-light-xphb.md)\
      \ or [Darkness](3.%20Mechanics/CLI/rules/variant-rules/darkness-xphb.md), the\
      \ dragon takes the Hide action."
    "name": "Shadow Stealth"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/dragon/token/juvenile-shadow-dragon-xmm.webp"
```
^statblock

## Environment

planar, shadowfell, underdark