---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/fire
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Salamander
---
# [Salamander](3. Mechanics\CLI\bestiary\elemental/salamander-xmm.md)
*Source: Monster Manual (2024) p. 267. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Most salamanders are arrogant yet curious, seeking to create artful blazes or burn that which has never been burned. They eagerly explain their work to strangers before trying to determine how the strangers burn. Salamanders radiate intense heat, which is conducted by their blazing weapons.

## Salamanders

*Serpentine Artists of the Inferno*

- **Habitat.** Planar (Elemental Plane of Fire), Underdark  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

Salamanders are serpentine denizens of the Elemental Plane of Fire. They believe that flames expose the purest forms of all things and delight in burning and melting things, seeing fleeting beauty and striking nuances in blazes consuming different fuels—ancient forests, artistic masterpieces, or living creatures. To salamanders, those that can't endure their flames are nothing but ashes in disguise. They harbor malice toward few creatures, but they consider creating remarkable flames more important than the pain and loss their fires cause.

Salamanders are typically content to dwell on the Elemental Plane of Fire, creating strange, temporary art amid the flames. Some travel to other planes of existence and worlds to experience the flames of other realms or create conflagrations of unprecedented scale.

> [!quote] A quote from Filiag Highthumbs  
> 
> The salamanders of the Elemental Plane of Fire delight in meeting visitors from other realms. For them, every stranger is a potential addition to their fiery artistry. Don't fall for their flattery, no matter how beautifully they say you'll burn.


```statblock
"name": "Salamander (XMM)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "15"
  - !!int "11"
  - !!int "10"
  - !!int "12"
"speed": "30 ft., climb 30 ft."
"damage_vulnerabilities": "cold"
"damage_immunities": "fire"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Primordial (Ignan)"
"cr": "5"
"traits":
  - "desc": "At the end of each of the salamander's turns, each creature of the salamander's\
      \ choice in a 5-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the salamander takes 7 (2d6) Fire damage."
    "name": "Fire Aura"
"actions":
  - "desc": "The salamander makes two Flame Spear attacks. It can replace one attack\
      \ with a use of Constrict."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +7, reach 5 ft. or range 20/60 ft.\
      \ *Hit:* 13 (2d8 + 4) Piercing damage plus 7 (2d6) Fire damage. *Hit or\
      \ Miss:* The spear magically returns to the salamander's hand immediately after\
      \ a ranged attack."
    "name": "Flame Spear"
  - "desc": "*Strength Saving Throw:* DC 15, one Large or smaller creature the salamander\
      \ can see within 10 feet. *Failure:* 11 (2d6 + 4) Bludgeoning damage plus\
      \ 7 (2d6) Fire damage. The target has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 14), and it has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition until the grapple ends."
    "name": "Constrict"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/elemental/token/salamander-xmm.webp"
```
^statblock

## Environment

planar, fire, underdark