---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Twig Blight
---
# [Twig Blight](3. Mechanics\CLI\bestiary\plant/twig-blight-xmm.md)
*Source: Monster Manual (2024) p. 43*  

Resembling bundles of sticks or dead brush, twig blights easily blend in among deadwood, flotsam, and the wood piles common in many rural settings. Groups of them are often found near river crossings, forgotten wells, or natural campsites, where they ambush those who let down their guard.

## Blights

*Plants Sprouted from Evil*

- **Habitat.** Forest  
- **Treasure.** None  

Blights are malicious plants that sprout from deep-rooted evil. Their gnarled forms twist with fearsome features suggestive of human limbs and vicious maws. Blights lurk in ambush amid mundane vegetation and lash out at non-Plant creatures. While blights can act independently, they're usually motivated by whatever sinister forces spawned them or by wicked creatures with control over nature. The magic that creates blights often affects other vegetation as well, causing brambles, vines, and gnarled trees to overwhelm roads and fields, choke wells and streams, and force animals from their natural habitat. This might make blights the first sign of an oncoming wave of corruption.

> [!quote] A quote from Belak the Outcast, Druid of the Twilight Grove  
> 
> It lives, though it looks dead. In an age long past, someone staked a vampire to the earth on this very spot. The wooden stake was yet green and took root. And so grew the Gulthias Tree, reverberating with primal power.


```statblock
"name": "Twig Blight (XMM)"
"size": "Small"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "7"
"hit_dice": "2d6"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "11"
  - !!int "4"
  - !!int "8"
  - !!int "3"
"speed": "20 ft."
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_vulnerabilities": "fire"
"condition_immunities": "[deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 9"
"languages": "understands Common but can't speak"
"cr": "1/8"
"traits":
  - "desc": "The blight has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the blight's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 4 (1d4 + 2) Slashing\
      \ damage."
    "name": "Claw"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/plant/token/twig-blight-xmm.webp"
```
^statblock

## Environment

forest