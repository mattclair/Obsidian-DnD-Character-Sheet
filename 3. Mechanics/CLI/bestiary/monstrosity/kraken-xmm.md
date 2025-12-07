---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/23
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/monstrosity/titan
statblock: inline
statblock-link: "#^statblock"
aliases:
- Kraken
---
# [Kraken](3. Mechanics\CLI\bestiary\monstrosity/kraken-xmm.md)
*Source: Monster Manual (2024) p. 187. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Kraken

*Leviathan of Legend*

- **Habitat.** Underwater  
- **Treasure.** Any  

Ancient weapons of the gods, krakens slumber in the deepest oceanic abysses, awaiting their time to rise and dominate the world. These massive, many-tentacled horrors combine overwhelming physical might with formidable cunning. Their powerful limbs shatter ships and topple spires, and they use their control over storms to rain down lightning on their foes.

Krakens usually have little interest in mortal affairs. These terrors were created by the gods to wage war in ages long forgotten. Since that era, most krakens have vanished beneath the waves to slumber until the gods call on them again. Some krakens serve divine masters still, protecting deep sea treasures or entire oceans. Others have forsaken their divine creators and pursue their own agendas, manipulating forces beneath the sea and beyond.

Krakens rarely appear on the surface, but when they do, they herald times of change and doom. When roused to action, these titans directly attack coastal cities or whole armadas. Kraken onslaughts persist until their wrath is sated, their divine patrons are appeased, or their egos are placated by valuable offerings. Roll on or choose a result from the Kraken Attacks table to inspire what ruin a kraken might unleash.

**Kraken Attacks**

| dice: 1d8 | The Enraged Kraken... |
|-----------|-----------------------|
| 1 | Abducts the vessel of a leader or another important community member. |
| 2 | Attacks a community from below using flooded ruins, hidden aquifers, or sewers. |
| 3 | Breaks a lighthouse or seaside tower, carrying it and the occupants to a secret island. |
| 4 | Calls down lightning on any ship that enters its aquatic territory. |
| 5 | Carries ships to an inescapable sargassum. |
| 6 | Dams a river or cuts off a city's sea access. |
| 7 | Devours all sea life near a fishing community, threatening it with ruin. |
| 8 | Masterminds an invasion from the sea by merfolk, sahuagin, or storm giants. |
^kraken-attacks

### Kraken Lairs

Kraken lairs tend to be sunken temples, eldritch ritual sites, or primeval places of divine power. They might lie deep beneath bodies of fresh or salt water, and they often connect to labyrinths of flooded subterranean tunnels or networks of magical portals.

> [!quote] A quote from Malfeore Serrang  
> 
> A kraken dreams of casting its tentacles into the heavens and strangling that which birthed it, and when its dream exceeds its reach, it settles for the occasional passing ship.


```statblock
"name": "Kraken (XMM)"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "481"
"hit_dice": "26d20 + 208"
"modifier": !!int "14"
"stats":
  - !!int "30"
  - !!int "11"
  - !!int "26"
  - !!int "22"
  - !!int "18"
  - !!int "20"
"speed": "30 ft., swim 120 ft."
"saves":
  - "strength": !!int "17"
  - "dexterity": !!int "7"
  - "constitution": !!int "15"
  - "wisdom": !!int "11"
"skillsaves":
  - "name": "[History](3.%20Mechanics/CLI/rules/skills.md#History)"
    "desc": "+13"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+11"
"damage_immunities": "cold, lightning"
"condition_immunities": "[frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[truesight](3.%20Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive\
  \ Perception 21"
"languages": "understands Abyssal, Celestial, Infernal, and Primordial but can't speak;\
  \ telepathy 120 ft."
"cr": "23"
"traits":
  - "desc": "The kraken can breathe air and water."
    "name": "Amphibious"
  - "desc": "If the kraken fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day, or 5/Day in Lair)"
  - "desc": "The kraken deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The kraken makes two Tentacle attacks and uses Fling, Lightning Strike,\
      \ or Swallow."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +17, reach 30 ft. *Hit:* 24 (4d6 + 10) Bludgeoning\
      \ damage. The target has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 20) from one of ten tentacles, and it has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition until the grapple ends."
    "name": "Tentacle"
  - "desc": "The kraken throws a Large or smaller creature [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by it to a space it can see within 60 feet of itself that isn't in the air.\
      \ *Dexterity Saving Throw:* DC 25, the creature thrown and each creature in\
      \ the destination space. *Failure:* 18 (4d8) Bludgeoning damage, and the target\
      \ has the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone) condition. *Success:*\
      \ Half damage only."
    "name": "Fling"
  - "desc": "*Dexterity Saving Throw:* DC 23, one creature the kraken can see within\
      \ 120 feet. *Failure:* 33 (6d10) Lightning damage. *Success:* Half damage."
    "name": "Lightning Strike"
  - "desc": "*Dexterity Saving Throw:* DC 25, one creature [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the kraken (it can have up to four creatures swallowed at a time). *Failure:*\
      \ 23 (3d8 + 10) Piercing damage. If the target is Large or smaller, it is\
      \ swallowed and no longer [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled).\
      \ A swallowed creature has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition, has [Total Cover](3.%20Mechanics/CLI/rules/variant-rules/cover-xphb.md)\
      \ against attacks and other effects outside the kraken, and takes 24 (7d6)\
      \ Acid damage at the start of each of its turns.\n\nIf the kraken takes 50 damage\
      \ or more on a single turn from a creature inside it, the kraken must succeed\
      \ on a DC 25 Constitution saving throw at the end of that turn or regurgitate\
      \ all swallowed creatures, each of which falls in a space within 10 feet of\
      \ the kraken with the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)\
      \ condition. If the kraken dies, any swallowed creature no longer has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition and can escape from the corpse using 15 feet of movement, exiting\
      \ [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Swallow"
"regional_effects":
  - "desc": "The region containing a kraken's lair is twisted by its presence, creating\
      \ the following effects:\n\n- **Ocean Tyrant.** The kraken exerts its dominance\
      \ over animals in its domain. All Beasts within 1 mile of the lair have the\
      \ [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed) condition while\
      \ in that area.  \n- **Sea and Storms.** While in its lair, the kraken can cast\
      \ [Control Weather](3.%20Mechanics/CLI/spells/control-weather-xphb.md), requiring\
      \ no spell components and using Intelligence as the spellcasting ability.  \n\
      \nIf the kraken dies or moves its lair elsewhere, these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3 (4 in Lair). Immediately after\
  \ another creature's turn, the kraken can expend a use to take one of the following\
  \ actions. The kraken regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The kraken uses Lightning Strike."
    "name": "Storm Bolt"
  - "desc": "*Constitution Saving Throw:* DC 23, each creature in a 15-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the kraken while it is underwater. *Failure:* The target\
      \ has the [Blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded) and [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ conditions until the end of the kraken's next turn. The kraken then moves\
      \ up to its [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md). *Failure\
      \ or Success:* The kraken can't take this action again until the start of its\
      \ next turn."
    "name": "Toxic Ink"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/kraken-xmm.webp"
```
^statblock

## Environment

underwater