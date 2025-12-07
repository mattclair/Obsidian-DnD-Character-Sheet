---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Needle Blight
---
# [Needle Blight](3. Mechanics\CLI\bestiary\plant/needle-blight-xmm.md)
*Source: Monster Manual (2024) p. 43*  

Needle blights have vaguely bipedal forms, with gaunt, misshapen limbs. Whether standing unnaturally still or lurching with their awkward gaits, these blights can't pass as either normal plants or woodland travelers. Once they spot foes, needle blights attack using their thorn-covered claws or by rapidly growing and flinging volleys of serrated, needlelike projectiles.

## Blights

*Plants Sprouted from Evil*

- **Habitat.** Forest  
- **Treasure.** None  

Blights are malicious plants that sprout from deep-rooted evil. Their gnarled forms twist with fearsome features suggestive of human limbs and vicious maws. Blights lurk in ambush amid mundane vegetation and lash out at non-Plant creatures. While blights can act independently, they're usually motivated by whatever sinister forces spawned them or by wicked creatures with control over nature. The magic that creates blights often affects other vegetation as well, causing brambles, vines, and gnarled trees to overwhelm roads and fields, choke wells and streams, and force animals from their natural habitat. This might make blights the first sign of an oncoming wave of corruption.

> [!quote] A quote from Belak the Outcast, Druid of the Twilight Grove  
> 
> It lives, though it looks dead. In an age long past, someone staked a vampire to the earth on this very spot. The wooden stake was yet green and took root. And so grew the Gulthias Tree, reverberating with primal power.


```statblock
"name": "Needle Blight (XMM)"
"size": "Medium"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"modifier": !!int "1"
"stats":
  - !!int "12"
  - !!int "12"
  - !!int "13"
  - !!int "4"
  - !!int "8"
  - !!int "3"
"speed": "30 ft."
"condition_immunities": "[deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 9"
"languages": "understands Common but can't speak"
"cr": "1/4"
"actions":
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 6 (2d4 + 1) Slashing\
      \ damage."
    "name": "Claw"
  - "desc": "*Ranged Attack Roll:* +3, range 30/60 ft. *Hit:* 6 (2d4 + 1) Piercing\
      \ damage."
    "name": "Needles"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/plant/token/needle-blight-xmm.webp"
```
^statblock

## Environment

forest