---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/upper
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Sphinx of Lore
---
# [Sphinx of Lore](3. Mechanics\CLI\bestiary\celestial/sphinx-of-lore-xmm.md)
*Source: Monster Manual (2024) p. 293. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Sphinxes of lore each know a great secret and protect it all costs. This truth might take the form of an ancient text, a magical puzzle, or a path to another world. These sphinxes might gain reputations as sages or oracles, but they typically dwell far from civilization.

## Sphinxes

*Collectors and Keepers of Secrets*

- **Habitat.** Desert, Planar (Upper Planes)  
- **Treasure.** [Arcana](3.%20Mechanics/CLI/tables/random-magic-items-arcana.md)  

Sphinxes protect the secrets of the multiverse. Formed from the spirits of sages and explorers, sphinxes know the power of truth and the importance of preserving it. They share their wisdom only with those who prove themselves wise or overcome tests of worthiness, such as riddles or battles with dangerous beasts. Through their existences, sphinxes might change form as they gain more nuanced understanding of cosmic enigmas.

### Sphinx Lairs

Sphinxes typically dwell in places that hold great knowledge or prophetic magic.

> [!quote]  
> 
> Round she is, yet flat as a board
> 
> Altar of the Lupine Lords
> 
> Jewel on black velvet, pearl in the sea
> 
> Unchanged but e'erchanging eternally

> [!note]
> Answer to the riddle of White Plume Mountain: The Moon.

```statblock
"name": "Sphinx of Lore (XMM)"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "170"
"hit_dice": "20d10 + 60"
"modifier": !!int "10"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "18"
  - !!int "18"
  - !!int "18"
"speed": "40 ft., fly 60 ft."
"skillsaves":
  - "name": "[Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+12"
  - "name": "[History](3.%20Mechanics/CLI/rules/skills.md#History)"
    "desc": "+12"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+8"
  - "name": "[Religion](3.%20Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+12"
"damage_resistances": "necrotic, radiant"
"damage_immunities": "psychic"
"condition_immunities": "[charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[truesight](3.%20Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive\
  \ Perception 18"
"languages": "Celestial, Common"
"cr": "11"
"traits":
  - "desc": "No magic can observe the sphinx remotely or detect its thoughts without\
      \ its permission. Wisdom ([Insight](3.%20Mechanics/CLI/rules/skills.md#Insight))\
      \ checks made to ascertain its intentions or sincerity are made with [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)."
    "name": "Inscrutable"
  - "desc": "If the sphinx fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions":
  - "desc": "The sphinx makes three Claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +8, reach 5 ft. *Hit:* 14 (3d6 + 4) Slashing\
      \ damage."
    "name": "Claw"
  - "desc": "*Wisdom Saving Throw:* DC 16, each enemy in a 300-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the sphinx. *Failure:* 35 (10d6) Psychic damage, and the\
      \ target has the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition until the start of the sphinx's next turn."
    "name": "Mind-Rending Roar (Recharge 5-6)"
  - "desc": "The sphinx casts one of the following spells, requiring no Material components\
      \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\n\
      **At will:** [Detect Magic](3.%20Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [Identify](3.%20Mechanics/CLI/spells/identify-xphb.md), [Mage Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [Minor Illusion](3.%20Mechanics/CLI/spells/minor-illusion-xphb.md), [Prestidigitation](3.%20Mechanics/CLI/spells/prestidigitation-xphb.md)\n\
      \n**1/day each:** [Dispel Magic](3.%20Mechanics/CLI/spells/dispel-magic-xphb.md),\
      \ [Legend Lore](3.%20Mechanics/CLI/spells/legend-lore-xphb.md), [Locate Object](3.%20Mechanics/CLI/spells/locate-object-xphb.md),\
      \ [Plane Shift](3.%20Mechanics/CLI/spells/plane-shift-xphb.md), [Remove Curse](3.%20Mechanics/CLI/spells/remove-curse-xphb.md),\
      \ [Tongues](3.%20Mechanics/CLI/spells/tongues-xphb.md)"
    "name": "Spellcasting"
"regional_effects":
  - "desc": "The region containing a sphinx of lore's or sphinx of valor's lair is\
      \ altered by its presence, creating the following effects:\n\n- **Distant Sight.**\
      \ While in its lair, the sphinx can cast [Clairvoyance](3.%20Mechanics/CLI/spells/clairvoyance-xphb.md),\
      \ requiring no spell components and using the same spellcasting ability as its\
      \ Spellcasting action. When cast this way, the spell's range is 1 mile.  \n\
      - **Infusion of Knowledge.** Whenever the sphinx or one of its allies takes\
      \ a [Study](3.%20Mechanics/CLI/rules/actions.md#Study) action while within 1\
      \ mile of the lair, it adds 1d6 to any ability check it makes for that action.\
      \  \n\nIf the sphinx dies or moves its lair elsewhere, these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3 (4 in Lair). Immediately after\
  \ another creature's turn, the sphinx of lore can expend a use to take one of the\
  \ following actions. The sphinx of lore regains all expended uses at the start of\
  \ each of its turns."
"legendary_actions":
  - "desc": "The sphinx can teleport up to 30 feet to an unoccupied space it can see,\
      \ and it makes one Claw attack."
    "name": "Arcane Prowl"
  - "desc": "*Constitution Saving Throw:* DC 16, one creature the sphinx can see within\
      \ 120 feet. *Failure:* The target gains 1 [Exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion)\
      \ level. While the target has any [Exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion)\
      \ levels, it appears 3d10 years older. *Failure or Success:* The sphinx can't\
      \ take this action again until the start of its next turn."
    "name": "Weight of Years"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/celestial/token/sphinx-of-lore-xmm.webp"
```
^statblock

## Environment

desert, planar, upper