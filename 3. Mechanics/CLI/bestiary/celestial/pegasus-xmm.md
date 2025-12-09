---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/upper
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Pegasus
---
# [Pegasus](3. Mechanics\CLI\bestiary\celestial/pegasus-xmm.md)
*Source: Monster Manual (2024) p. 235. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Pegasus

*Elusive Winged Steed*

- **Habitat.** Forest, Grassland, Hill, Planar (Upper Planes)  
- **Treasure.** None  

Winged, sapient horses of noble bearing, pegasi are as majestic as they are elusive. Most avoid the affairs of other creatures, preferring to dwell amid idyllic pastures or floating islands, or on other planes of existence. Others serve deities of the Feywild and Upper Planes, aiding heroes in need. In rare cases, pegasi might befriend virtuous people and serve as their companions and steeds.

Pegasi are hunted by servants of evil, leading many of these winged steeds to flee strangers on sight. Roll on or choose a result from the Pegasus Offerings table to inspire how one might show their good intentions to a wary pegasus.

**Pegasus Offerings**

| dice: 1d4 | A Pegasus Won't Flee Someone... |
|-----------|---------------------------------|
| 1 | Bearing the gear of a hero the pegasus aided. |
| 2 | Offering magical fruit or holy spring water. |
| 3 | Singing a song in Celestial, Druidic, or Sylvan. |
| 4 | Wearing the garb of an ancient heroic order. |
^pegasus-offerings

> [!quote] A quote from Yolande, Queen of Celene  
> 
> Pegasi are the cherished steeds of our creator, Corellon. To see one is a blessing, but to ride one proves nothing less than the love of the gods.


```statblock
"name": "Pegasus (XMM)"
"size": "Large"
"type": "celestial"
"alignment": "Chaotic Good"
"ac": !!int "12"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "10"
  - !!int "15"
  - !!int "13"
"speed": "60 ft., fly 90 ft."
"saves":
  - "dexterity": !!int "4"
  - "constitution": !!int "5"
  - "wisdom": !!int "4"
  - "charisma": !!int "3"
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"senses": "passive Perception 16"
"languages": "understands Celestial, Common, Elvish, and Sylvan but can't speak"
"cr": "2"
"actions":
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 7 (1d6 + 4) Bludgeoning\
      \ damage plus 5 (2d4) Radiant damage."
    "name": "Hooves"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/celestial/token/pegasus-xmm.webp"
```
^statblock

## Environment

forest, grassland, hill, planar, upper