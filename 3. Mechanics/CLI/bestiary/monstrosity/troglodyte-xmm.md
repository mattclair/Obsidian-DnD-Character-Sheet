---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Troglodyte
---
# [Troglodyte](3. Mechanics\CLI\bestiary\monstrosity/troglodyte-xmm.md)
*Source: Monster Manual (2024) p. 309*  

## Troglodyte

*Reeking Subterranean Hunter*

- **Habitat.** Underdark  
- **Treasure.** [Armaments](3.%20Mechanics/CLI/tables/random-magic-items-armaments.md)  

With features similar to those of pale cave lizards, troglodytes stalk the Underdark in an endless hunt for food. Troglodytes consume almost anything, including bones, giant insects, and other subterranean dwellers. They prey on subterranean communities and those near entrances to the Underdark, stealing livestock and kidnapping residents.

Troglodytes prefer to ambush prey and can change their scale color to blend in with their surroundings. They often climb along cavern walls or emerge from deep fissures to take their prey by surprise. Despite their stealthiness, these stalkers exude a distinctly repulsive stench. Descriptions of what troglodytes smell like span a spectrum as complex as it is vile. This reek nauseates many who smell it, but it can also warn of the presence of troglodytes before they strike.

> [!quote] A quote from Caarey Gelthik, Ghast  
> 
> Smells fine to me.


```statblock
"name": "Troglodyte (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "13"
"hit_dice": "2d8 + 4"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "10"
  - !!int "14"
  - !!int "6"
  - !!int "10"
  - !!int "6"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Troglodyte"
"cr": "1/4"
"traits":
  - "desc": "*Constitution Saving Throw:* DC 12, any creature (other than a troglodyte)\
      \ that starts its turn in a 5-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the troglodyte. *Failure:* The target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ condition until the start of its next turn. *Success:* The target is immune\
      \ to the Stench of all troglodytes for 1 hour."
    "name": "Stench"
  - "desc": "While in sunlight, the troglodyte has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md)\
      \ on ability checks and attack rolls."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 5 (1d6 + 2) Slashing\
      \ damage."
    "name": "Rend"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/troglodyte-xmm.webp"
```
^statblock

## Environment

underdark