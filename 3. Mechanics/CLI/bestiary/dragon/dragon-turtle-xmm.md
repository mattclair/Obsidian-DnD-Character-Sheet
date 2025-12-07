---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dragon Turtle
---
# [Dragon Turtle](3. Mechanics\CLI\bestiary\dragon/dragon-turtle-xmm.md)
*Source: Monster Manual (2024) p. 103. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Dragon Turtle

*Ancient Ruler of Undersea Realms*

- **Habitat.** Coastal, Underwater  
- **Treasure.** Any  

Dragon turtles are mighty creatures with shells large enough to be mistaken for islands and jaws capable of snapping ships like twigs. While some of these aquatic dragons contentedly slumber in the depths, others jealously guard vast territories with their scalding breath and lay claim to anything that sinks into the depths or sails on the waves. Occasionally these dragons agree to aid pirates, aquatic peoples, or oceanic religions in return for contributions to their sunken treasure hoards.

Many dragon turtles live in secluded lairs or ruins deep underwater, and they might not be spotted by surface dwellers for generations. Like both their namesakes, dragon turtles can have exceptionally long lives. Some recall the wonders of ages past or remarkable individuals that passed through their realms long ago. Such dragon turtles might be convinced to share their tales or provide guidance through their territories in exchange for treasures they've never glimpsed on the ocean floor.

```statblock
"name": "Dragon Turtle (XMM)"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "356"
"hit_dice": "23d20 + 115"
"modifier": !!int "6"
"stats":
  - !!int "25"
  - !!int "10"
  - !!int "20"
  - !!int "10"
  - !!int "12"
  - !!int "12"
"speed": "20 ft., swim 50 ft."
"saves":
  - "constitution": !!int "11"
  - "wisdom": !!int "7"
"damage_resistances": "fire"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 11"
"languages": "Draconic, Primordial (Aquan)"
"cr": "17"
"traits":
  - "desc": "The dragon can breathe air and water."
    "name": "Amphibious"
"actions":
  - "desc": "The dragon makes three Bite attacks. It can replace one attack with a\
      \ Tail attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +13, reach 15 ft. *Hit:* 23 (3d10 + 7) Piercing\
      \ damage plus 7 (2d6) Fire damage. Being underwater doesn't grant [Resistance](3.%20Mechanics/CLI/rules/variant-rules/resistance-xphb.md)\
      \ to this Fire damage."
    "name": "Bite"
  - "desc": "*Melee Attack Roll:* +13, reach 15 ft. *Hit:* 18 (2d10 + 7) Bludgeoning\
      \ damage. If the target is a Huge or smaller creature, it has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Tail"
  - "desc": "*Constitution Saving Throw:* DC 19, each creature in a 60-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 56 (16d6) Fire damage. *Success:* Half damage. *Failure or Success:*\
      \ Being underwater doesn't grant [Resistance](3.%20Mechanics/CLI/rules/variant-rules/resistance-xphb.md)\
      \ to this Fire damage."
    "name": "Steam Breath (Recharge 5-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/dragon/token/dragon-turtle-xmm.webp"
```
^statblock

## Environment

coastal, underwater