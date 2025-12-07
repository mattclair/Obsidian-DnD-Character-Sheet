---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gulthias Blight
---
# [Gulthias Blight](3. Mechanics\CLI\bestiary\plant/gulthias-blight-xmm.md)
*Source: Monster Manual (2024) p. 45*  

Ancient plants twisted by evil, Gulthias blights feed on blood and despoil the surrounding land, often giving rise to subservient blights. These cursed plants take their name from the story of their creation; the first of their kind was a tree that grew from the stake piercing the heart of the vampire Gulthias. These blights consider all creatures either servants or fertilizer for the blights' corruption.

## Blights

*Plants Sprouted from Evil*

- **Habitat.** Forest  
- **Treasure.** None  

Blights are malicious plants that sprout from deep-rooted evil. Their gnarled forms twist with fearsome features suggestive of human limbs and vicious maws. Blights lurk in ambush amid mundane vegetation and lash out at non-Plant creatures. While blights can act independently, they're usually motivated by whatever sinister forces spawned them or by wicked creatures with control over nature. The magic that creates blights often affects other vegetation as well, causing brambles, vines, and gnarled trees to overwhelm roads and fields, choke wells and streams, and force animals from their natural habitat. This might make blights the first sign of an oncoming wave of corruption.

> [!quote] A quote from Belak the Outcast, Druid of the Twilight Grove  
> 
> It lives, though it looks dead. In an age long past, someone staked a vampire to the earth on this very spot. The wooden stake was yet green and took root. And so grew the Gulthias Tree, reverberating with primal power.


```statblock
"name": "Gulthias Blight (XMM)"
"size": "Gargantuan"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "20"
"hp": !!int "264"
"hit_dice": "16d20 + 96"
"modifier": !!int "5"
"stats":
  - !!int "25"
  - !!int "10"
  - !!int "22"
  - !!int "10"
  - !!int "18"
  - !!int "12"
"speed": "50 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+9"
"damage_resistances": "fire, necrotic"
"condition_immunities": "[deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened)"
"senses": "[blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) 120 ft., passive\
  \ Perception 19"
"languages": "Common, Druidic"
"cr": "16"
"traits":
  - "desc": "When it finishes a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md),\
      \ the blight expels 1d6 seeds into unoccupied spaces on the ground within\
      \ 30 feet of itself. After 24 hours, the seeds become creatures under the blight's\
      \ control. Roll 1d8 for each seed to determine the creature it becomes: on\
      \ 1-4, [Twig Blight](3.%20Mechanics/CLI/bestiary/plant/twig-blight-xmm.md);\
      \ on 5-6, [Needle Blight](3.%20Mechanics/CLI/bestiary/plant/needle-blight-xmm.md);\
      \ on 7-8, [Vine Blight](3.%20Mechanics/CLI/bestiary/plant/vine-blight-xmm.md)."
    "name": "Blight Seeds"
"actions":
  - "desc": "The blight makes two attacks, using Slam or Thorn Volley in any combination.\
      \ It also uses Life-Draining Root."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +12, reach 10 ft. *Hit:* 25 (4d8 + 7) Bludgeoning\
      \ damage."
    "name": "Slam"
  - "desc": "*Ranged Attack Roll:* +12, range 60/180 ft. *Hit:* 20 (3d8 + 7) Piercing\
      \ damage."
    "name": "Thorn Volley"
  - "desc": "*Constitution Saving Throw:* DC 20, one Huge or smaller creature the\
      \ blight can see within 30 feet. *Failure:* 14 (2d6 + 7) Necrotic damage,\
      \ and the target has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 17) from one of six roots. Until the grapple ends, the\
      \ target has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition and takes 14 (4d6) Necrotic damage at the start of each of its\
      \ turns. The target's [Hit Point](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by an amount equal to the Necrotic damage taken, and the\
      \ blight regains [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ equal to that amount."
    "name": "Life-Draining Root"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/plant/token/gulthias-blight-xmm.webp"
```
^statblock

## Environment

forest