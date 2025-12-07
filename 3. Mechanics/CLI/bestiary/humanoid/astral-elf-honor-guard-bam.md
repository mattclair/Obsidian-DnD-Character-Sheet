---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Astral Elf Honor Guard
---
# [Astral Elf Honor Guard](3. Mechanics\CLI\bestiary\humanoid/astral-elf-honor-guard-bam.md)
*Source: Boo's Astral Menagerie p. 12, Light of Xaryxis*  

The safety of important individuals and locations is entrusted to astral elf honor guards, highly trained warriors who are more than capable of holding their own in combat.

## Astral Elves

Long ago, some elves ventured to the Astral Plane to be closer to their gods. There, they ceased to age and could exist indefinitely without sustenance.

Astral elves were among the first creatures to dwell in the Silver Void. As other explorers have reached for the stars, astral elves have had to reckon with violent neighbors and strange visitors. Over the eons, astral elves have clashed with numerous invaders, including psurlons, mind flayers, and githyanki. When dealing with others, astral elves customarily cover their faces with ornate visors, becoming faceless extensions of their gods. Their fierce devotion to the pantheon of elven deities is repaid with divine power. For example, the gods invest astral elf warriors with the power to channel the radiant energy of starlight through their weapons, just as they empower astral elf leaders with the ability to cast spells and summon solar dragons.

Astral elves ply the Astral Sea and Wildspace in ships of their own design. These ships are fashioned from crystals harvested from Wildspace systems and bound together with an organic, plant-based material that hardens like ceramic. The elves sculpt these substances in various configurations to create star moths (see the *Astral Adventurer's Guide*) and other vessels. The elves also reshape the petrified bodies of dead gods found adrift in the Silver Void, transforming them into floating cities and citadels.

Although the Silver Void is their home, astral elves often venture into Wildspace systems and place their ships and citadels in orbit around stars. Astral elves do this for several reasons. Proximity to a star allows the astral elves to forge pacts with solar dragons and to collect starlight, which the elves use to grow crystals and repair their ships. Most important, astral elves use their time outside the Deep Astral to replenish their numbers by having and raising children.

Many astral elves are thousands (in some cases tens of thousands) of years old. Whatever their disposition, their longevity gives astral elves a perspective on time that few other kinds of creatures can appreciate. Whether they choose to live in quiet contemplation or strike out to explore the far reaches of the multiverse, astral elves tend to see events happening elsewhere as having little or no meaning to them.

> [!note] Astral Elves of Xaryxis
> 
> The adventure,*Light of Xaryxis*features an amoral astral elf society called the Xaryxian Empire. This empire is based in Xaryxispace, a Wildspace system illuminated by an enormous radiant sun named Xaryxis.
^astral-elves-of-xaryxis

```statblock
"name": "Astral Elf Honor Guard (BAM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "[half plate](3.%20Mechanics/CLI/items/half-plate-armor-xphb.md)"
"hp": !!int "93"
"hit_dice": "17d8 + 17"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "15"
  - !!int "12"
  - !!int "17"
  - !!int "16"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "6"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Intimidation](3.%20Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+6"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Survival](3.%20Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+6"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 16"
"languages": "Celestial, Common, Elvish"
"cr": "5"
"traits":
  - "desc": "The elf has advantage on saving throws it makes to avoid or end the [charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ condition on itself, and magic can't put it to sleep."
    "name": "Fey Ancestry"
  - "desc": "The elf doesn't require sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The elf makes two Longsword or Radiant Ray attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d8 + 2) slashing damage, or 13 (2d10 + 2) slashing damage when used\
      \ with two hands, plus 10 (3d6) radiant damage."
    "name": "Longsword"
  - "desc": "*Ranged Spell Attack:* +6 to hit, range 120 ft., one target. *Hit:*\
      \ 22 (4d10) radiant damage."
    "name": "Radiant Ray"
"source":
  - "BAM"
  - "LoX"
"image": "3.%20Mechanics/CLI/bestiary/humanoid/token/astral-elf-honor-guard-bam.webp"
```
^statblock