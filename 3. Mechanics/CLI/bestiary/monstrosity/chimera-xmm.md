---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Chimera
---
# [Chimera](3. Mechanics\CLI\bestiary\monstrosity/chimera-xmm.md)
*Source: Monster Manual (2024) p. 70. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Chimera

*Multiheaded Ravager*

- **Habitat.** Grassland, Hill, Mountain  
- **Treasure.** Any  

Violent and unpredictable, chimeras combine the deadliest traits of lions, rams, and red dragons. With their fearsome claws, crushing horns, and fiery breath, chimeras are tempests of ferocity, driven by their three heads' conflicting instincts. Their heads agree on little but their desires to feed and to drive competitors from the rugged territories where these monsters make their lairs. When they spot prey, chimeras typically strafe foes with their fire breath before landing to attack with their fangs, horns, and claws.

Owing to their draconic instincts, chimeras are greedy creatures that hoard treasures within cavernous lairs. They're undiscerning about what they collect, gathering shiny objects alongside trophies and bones from their recent kills. Brave souls seeking to distract or temporarily appease a chimera can do so by offering it treasure and food.

```statblock
"name": "Chimera (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "11"
  - !!int "19"
  - !!int "3"
  - !!int "14"
  - !!int "10"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+8"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 18"
"languages": "understands Draconic but can't speak"
"cr": "6"
"actions":
  - "desc": "The chimera makes one Ram attack, one Bite attack, and one Claw attack.\
      \ It can replace the Claw attack with a use of Fire Breath if available."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 11 (2d6 + 4) Piercing\
      \ damage, or 18 (4d6 + 4) Piercing damage if the chimera had [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ on the attack roll."
    "name": "Bite"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 7 (1d6 + 4) Slashing\
      \ damage."
    "name": "Claw"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 10 (1d12 + 4) Bludgeoning\
      \ damage. If the target is a Medium or smaller creature, it has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition."
    "name": "Ram"
  - "desc": "*Dexterity Saving Throw:* DC 15, each creature in a 15-foot [Cone](3.%20Mechanics/CLI/rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 31 (7d8) Fire damage. *Success:* Half damage."
    "name": "Fire Breath (Recharge 5-6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/chimera-xmm.webp"
```
^statblock

## Environment

grassland, hill, mountain