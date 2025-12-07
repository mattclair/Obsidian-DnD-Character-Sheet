---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Warhorse Skeleton
---
# [Warhorse Skeleton](3. Mechanics\CLI\bestiary\undead/warhorse-skeleton-xmm.md)
*Source: Monster Manual (2024) p. 282. Available in the <span title='Systems Reference Document (5.2)'>SRD</span>*  

Warhorse skeletons are obedient, supernatural steeds bearing the rotted remains of the barding they wore in life. They're often ridden by the corpses of their former riders.

## Skeletons

*Ossified Evil*

- **Habitat.** Planar (Shadowfell), Underdark, Urban  
- **Treasure.** None  

Skeletons rise at the summons of necromancers and foul spirits. Whether they're the remains of the ancient dead or fresh bones bound to morbid ambitions, they commit deathless work for whatever forces reanimated them, often serving as guardians, soldiers, or laborers. In rare cases, skeletons are reanimated but given no particular direction. Roll on or choose a result from the Skeleton Pantomimes table to inspire how undirected skeletons behave.

**Skeleton Pantomimes**

| dice: 1d6 | Left to Its Own Devices, the Skeleton... |
|-----------|------------------------------------------|
| 1 | Delivers meal salvers or ages-old correspondence to the crypt of its dead master. |
| 2 | Endlessly trains in battle with other skeletons, despite being hacked to animate splinters. |
| 3 | Mimics ways it entertained itself in life, such as acting, dancing, or reading. |
| 4 | Performs a familiar task, such as cleaning, cooking, mining, or praying. |
| 5 | Repeats its final moments of life. |
| 6 | Stands guard at the post it protected in life. |
^skeleton-pantomimes

```statblock
"name": "Warhorse Skeleton (XMM)"
"size": "Large"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "3d10 + 6"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "12"
  - !!int "15"
  - !!int "2"
  - !!int "8"
  - !!int "5"
"speed": "60 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 9"
"languages": ""
"cr": "1/2"
"actions":
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 7 (1d6 + 4) Bludgeoning\
      \ damage. If the target is a Large or smaller creature and the skeleton moved\
      \ 20+ feet straight toward it immediately before the hit, the target has the\
      \ [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone) condition."
    "name": "Hooves"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/undead/token/warhorse-skeleton-xmm.webp"
```
^statblock

## Environment

planar, shadowfell, underdark, urban