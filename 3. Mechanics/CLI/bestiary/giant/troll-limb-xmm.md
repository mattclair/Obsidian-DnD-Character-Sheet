---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Troll Limb
---
# [Troll Limb](3. Mechanics\CLI\bestiary\giant/troll-limb-xmm.md)
*Source: Monster Manual (2024) p. 310. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Troll

*Loathsome, Regenerating Lurker*

- **Habitat.** Arctic, Forest, Hill, Mountain, Swamp, Underdark  
- **Treasure.** None  

Trolls creep forth to prey on smaller creatures and drag captives back to festering lairs. These misshapen brutes can regenerate from wounds and regrow severed body parts—including their heads. A troll's severed limbs continue to move and attack. Unless they're burned by flames or acid, trolls can recover from egregious wounds and seek revenge on those who felled them.

Trolls typically hunt alone, but small groups occasionally cooperate to ambush prey or raid villages. Creatures such as hags and hill giants might convince trolls to work for them in exchange for disgusting meals.

```statblock
"name": "Troll Limb (XMM)"
"size": "Small"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "14"
"hit_dice": "4d6"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "12"
  - !!int "10"
  - !!int "1"
  - !!int "9"
  - !!int "1"
"speed": "20 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 9"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The limb regains 5 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ at the start of each of its turns. If the limb takes Acid or Fire damage,\
      \ this trait doesn't function on the limb's next turn. The limb dies only if\
      \ it starts its turn with 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ and doesn't regenerate."
    "name": "Regeneration"
  - "desc": "The limb uncannily has the same senses as a whole troll. If the limb\
      \ isn't destroyed within 24 hours, roll 1d12. On a 12, the limb turns into\
      \ a [Troll](3.%20Mechanics/CLI/bestiary/giant/troll-xmm.md). Otherwise, the\
      \ limb withers away."
    "name": "Troll Spawn"
"actions":
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 9 (2d4 + 4) Slashing\
      \ damage."
    "name": "Rend"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/giant/token/troll-limb-xmm.webp"
```
^statblock

## Environment

arctic, forest, hill, mountain, swamp, underdark