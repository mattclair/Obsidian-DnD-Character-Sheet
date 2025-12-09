---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/lower
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Nightmare
---
# [Nightmare](3. Mechanics\CLI\bestiary\fiend/nightmare-xmm.md)
*Source: Monster Manual (2024) p. 226. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Nightmare

*Dread Steed of the Lower Planes*

- **Habitat.** Planar (Lower Planes)  
- **Treasure.** None  

Nightmares resemble horses with flaming manes, burning hooves, and smoldering eyes. They terrorize weaker creatures and often ally with denizens of the Lower Planes in committing evil acts. These supernatural horses can innately travel between the Ethereal Plane and the Material Plane, and many know the locations of portals to the Lower Planes, the Shadowfell, and other sinister realms.

Nightmares' speed, resilience, and ability to gallop between planes of existence make them steeds coveted by evildoers. Roll on or choose a result from the Nightmare Riders table to inspire what might employ a nightmare steed.

**Nightmare Riders**

| dice: 1d6 | The Nightmare Carries... |
|-----------|--------------------------|
| 1 | The champion or messenger of an evil deity. |
| 2 | A group of joyriding imps or quasits. |
| 3 | An innocent soul trapped on the wild Fiend. |
| 4 | A lore-hunting mage, cultist, or lich. |
| 5 | A night hag herding larvae between planes. |
| 6 | A wicked cavalier, such as a death knight, an erinyes, an incubus, or a vampire. |
^nightmare-riders

```statblock
"name": "Nightmare (XMM)"
"size": "Large"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "10"
  - !!int "13"
  - !!int "15"
"speed": "60 ft., fly 90 ft. (hover)"
"damage_immunities": "fire"
"senses": "passive Perception 11"
"languages": "understands Abyssal, Common, and Infernal but can't speak"
"cr": "3"
"traits":
  - "desc": "The nightmare can grant [Resistance](3.%20Mechanics/CLI/rules/variant-rules/resistance-xphb.md)\
      \ to Fire damage to a rider while it is on the nightmare."
    "name": "Confer Fire Resistance"
  - "desc": "The nightmare sheds [Bright Light](3.%20Mechanics/CLI/rules/variant-rules/bright-light-xphb.md)\
      \ in a 10-foot radius and [Dim Light](3.%20Mechanics/CLI/rules/variant-rules/dim-light-xphb.md)\
      \ for an additional 10 feet."
    "name": "Illumination"
"actions":
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 13 (2d8 + 4) Bludgeoning\
      \ damage plus 10 (3d6) Fire damage."
    "name": "Hooves"
  - "desc": "The nightmare and up to three willing creatures within 5 feet of it teleport\
      \ to the Ethereal Plane from the Material Plane or vice versa."
    "name": "Ethereal Stride"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fiend/token/nightmare-xmm.webp"
```
^statblock

## Environment

planar, lower