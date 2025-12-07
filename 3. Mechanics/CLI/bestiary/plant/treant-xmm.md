---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Treant
---
# [Treant](3. Mechanics\CLI\bestiary\plant/treant-xmm.md)
*Source: Monster Manual (2024) p. 308. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Treant

*Wise and Mighty Animate Tree*

- **Habitat.** Forest  
- **Treasure.** None  

Ancient inhabitants of the forest, treants are gigantic, animate trees with wizened faces. Most have lived for centuries and know secrets of the natural world. They avoid becoming embroiled in the conflicts of shorter-lived creatures, but they're protective of their forest homes. If roused to anger, treants can animate trees to aid them.

Treants defend and are shaped by secrets of the forest. Roll on or choose a result from the Treant Secrets table to inspire what mysteries a treant protects.

**Treant Secrets**

| dice: 1d6 | The Treant Is... |
|-----------|------------------|
| 1 | Blessed by a god and grows magic fruit. |
| 2 | Growing atop the entrance to a dungeon or portal to the Feywild. |
| 3 | Home to a community of pixies or sprites. |
| 4 | The last lore keeper of lost druidic knowledge. |
| 5 | Rooted on a hero's burial mound and animates trees that look like questing knights. |
| 6 | Scarred by a fire and holds the bones of the arsonist who started it in a hollow. |
^treant-secrets

```statblock
"name": "Treant (XMM)"
"size": "Huge"
"type": "plant"
"alignment": "Chaotic Good"
"ac": !!int "16"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"modifier": !!int "3"
"stats":
  - !!int "23"
  - !!int "8"
  - !!int "21"
  - !!int "12"
  - !!int "16"
  - !!int "12"
"speed": "30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"senses": "passive Perception 13"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "9"
"traits":
  - "desc": "The treant deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The treant makes two Slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +10, reach 5 ft. *Hit:* 16 (3d6 + 6) Bludgeoning\
      \ damage."
    "name": "Slam"
  - "desc": "*Ranged Attack Roll:* +10, range 180 ft. *Hit:* 28 (4d10 + 6) Piercing\
      \ damage."
    "name": "Hail of Bark"
  - "desc": "The treant magically animates up to two trees it can see within 60 feet\
      \ of itself. Each tree uses the Treant stat block, except it has Intelligence\
      \ and Charisma scores of 1, it can't speak, and it lacks this action. The tree\
      \ takes its turn immediately after the treant on the same [Initiative](3.%20Mechanics/CLI/rules/variant-rules/initiative-xphb.md)\
      \ count, and it obeys the treant. A tree remains animate for 1 day or until\
      \ it dies, the treant dies, or it is more than 120 feet from the treant. The\
      \ tree then takes root if possible."
    "name": "Animate Trees (1/Day)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/plant/token/treant-xmm.webp"
```
^statblock

## Environment

forest