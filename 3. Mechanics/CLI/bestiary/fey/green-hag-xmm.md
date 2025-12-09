---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Green Hag
---
# [Green Hag](3. Mechanics\CLI\bestiary\fey/green-hag-xmm.md)
*Source: Monster Manual (2024) p. 156. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Green Hag

*Foul Witch of the Wicked Wild*

- **Habitat.** Forest, Hill, Swamp  
- **Treasure.** [Arcana](3.%20Mechanics/CLI/tables/random-magic-items-arcana.md)  

Green hags work bitter magic to foul all that is beautiful and pure. Whether alone or in covens of other hags, these ancient witches call on eerie forces, spreading corruption and plotting doom for those who earn their ire. Green hags are adept deceivers, and they use illusions to cloak themselves in unassuming forms, hoping to tempt innocents into peril. These hags often spirit their victims back to surreal lairs where they hold captives prisoner or cook them into monstrous meals.

Green hags frequently know strange magic or forgotten secrets, such as the weaknesses of villains, the locations of lost treasures, or the ways to break curses. They might trade such knowledge for rare magic or symbolic treasures. Roll on or choose a result from the Green Hag Bargains table to inspire what a green hag charges for its secrets.

**Green Hag Bargains**

| dice: 1d6 | A Green Hag Trades Its Knowledge For... |
|-----------|-----------------------------------------|
| 1 | A bargainer's memories of a loved one. |
| 2 | The cauldron of a rival hag. |
| 3 | A favor to be redeemed when the hag wishes. |
| 4 | A flower from a hidden Feywild garden. |
| 5 | A gift given freely by a yugoloth. |
| 6 | A vial filled with a ruler's tears. |
^green-hag-bargains

```statblock
"name": "Green Hag (XMM)"
"size": "Medium"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "12"
  - !!int "16"
  - !!int "13"
  - !!int "14"
  - !!int "14"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "[Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[Deception](3.%20Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+4"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common, Elvish, Sylvan"
"cr": "3"
"traits":
  - "desc": "While within 30 feet of at least two hag allies, the hag can cast one\
      \ of the following spells, requiring no Material components, using the spell's\
      \ normal casting time, and using Intelligence as the spellcasting ability (spell\
      \ save DC 11): [Augury](3.%20Mechanics/CLI/spells/augury-xphb.md), [Find Familiar](3.%20Mechanics/CLI/spells/find-familiar-xphb.md),\
      \ [Identify](3.%20Mechanics/CLI/spells/identify-xphb.md), [Locate Object](3.%20Mechanics/CLI/spells/locate-object-xphb.md),\
      \ [Scrying](3.%20Mechanics/CLI/spells/scrying-xphb.md), or [Unseen Servant](3.%20Mechanics/CLI/spells/unseen-servant-xphb.md).\
      \ The hag must finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md)\
      \ before using this trait to cast that spell again.\n"
    "name": "Coven Magic"
  - "desc": "The hag can breathe air and water."
    "name": "Amphibious"
  - "desc": "The hag can mimic animal sounds and humanoid voices. A creature that\
      \ hears the sounds can tell they are imitations only with a successful DC 14\
      \ Wisdom ([Insight](3.%20Mechanics/CLI/rules/skills.md#Insight)) check."
    "name": "Mimicry"
"actions":
  - "desc": "The hag makes two Claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 8 (1d8 + 4) Slashing\
      \ damage plus 3 (1d6) Poison damage."
    "name": "Claw"
  - "desc": "The hag casts one of the following spells, requiring no Material components\
      \ and using Wisdom as the spellcasting ability (spell save DC 12, +4 to hit\
      \ with spell attacks):\n\n**At will:** [Dancing Lights](3.%20Mechanics/CLI/spells/dancing-lights-xphb.md),\
      \ [Disguise Self](3.%20Mechanics/CLI/spells/disguise-self-xphb.md) (24-hour\
      \ duration), [Invisibility](3.%20Mechanics/CLI/spells/invisibility-xphb.md)\
      \ (self only, and the hag leaves no tracks while Invisible), [Minor Illusion](3.%20Mechanics/CLI/spells/minor-illusion-xphb.md),\
      \ [Ray of Sickness](3.%20Mechanics/CLI/spells/ray-of-sickness-xphb.md) (level\
      \ 3 version)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/fey/token/green-hag-xmm.webp"
```
^statblock

## Environment

forest, hill, swamp