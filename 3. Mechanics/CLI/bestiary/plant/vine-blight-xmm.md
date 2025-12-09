---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Vine Blight
---
# [Vine Blight](3. Mechanics\CLI\bestiary\plant/vine-blight-xmm.md)
*Source: Monster Manual (2024) p. 44*  

Vine blights resemble humans wrapped in vines common to the areas in which they grow, from hairy ivy vines to flowering kudzu. They can cause plants to burst from the ground around themselves and entangle nearby foes.

Unlike most other blights, vine blights can speak. They do so rarely, typically only to convey messages from their masters or to repeat the words of their victims in rasping voices.

## Blights

*Plants Sprouted from Evil*

- **Habitat.** Forest  
- **Treasure.** None  

Blights are malicious plants that sprout from deep-rooted evil. Their gnarled forms twist with fearsome features suggestive of human limbs and vicious maws. Blights lurk in ambush amid mundane vegetation and lash out at non-Plant creatures. While blights can act independently, they're usually motivated by whatever sinister forces spawned them or by wicked creatures with control over nature. The magic that creates blights often affects other vegetation as well, causing brambles, vines, and gnarled trees to overwhelm roads and fields, choke wells and streams, and force animals from their natural habitat. This might make blights the first sign of an oncoming wave of corruption.

> [!quote] A quote from Belak the Outcast, Druid of the Twilight Grove  
> 
> It lives, though it looks dead. In an age long past, someone staked a vampire to the earth on this very spot. The wooden stake was yet green and took root. And so grew the Gulthias Tree, reverberating with primal power.


```statblock
"name": "Vine Blight (XMM)"
"size": "Medium"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"modifier": !!int "-1"
"stats":
  - !!int "15"
  - !!int "8"
  - !!int "14"
  - !!int "5"
  - !!int "10"
  - !!int "3"
"speed": "20 ft."
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+1"
"condition_immunities": "[deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 10"
"languages": "Common"
"cr": "1/2"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 10 ft. *Hit:* 6 (1d8 + 2) Bludgeoning\
      \ damage. If the target is a Large or smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 12). Until the grapple ends, the target takes 4 (1d8)\
      \ Bludgeoning damage at the start of each of its turns, and the blight can't\
      \ make Constricting Vine attacks."
    "name": "Constricting Vine"
  - "desc": "The blight casts the [Entangle](3.%20Mechanics/CLI/spells/entangle-xphb.md)\
      \ spell, using Constitution as the spellcasting ability (spell save DC 12).\n"
    "name": "Entangling Plants (Recharge 5-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/plant/token/vine-blight-xmm.webp"
```
^statblock

## Environment

forest