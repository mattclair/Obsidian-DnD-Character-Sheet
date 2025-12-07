---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Aboleth
---
# [Aboleth](3. Mechanics\CLI\bestiary\aberration/aboleth-xmm.md)
*Source: Monster Manual (2024) p. 12. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Aboleth

*Ageless Alien Mastermind*

- **Habitat.** Underdark, Underwater  
- **Treasure.** [Relics](3.%20Mechanics/CLI/tables/random-magic-items-relics.md)  

In aquatic abysses, aboleths dream of dead empires and orchestrate plots that unfold across ages. These elusive, amphibious immortals physically and mentally overwhelm their victims and transform creatures with a slimy, aberrant infection, reshaping other beings to serve them beneath the waves.

Aboleths possess terrifying intellects and have alien mindsets. These creatures possess perfect memories of proto-worlds and incomprehensible dominions from the multiverse's earliest eons. Their secrets are innumerable and unfathomable. Aboleths lurk in places awash in primordial mysteries: the ruins of aquatic empires, hidden magical nexuses, or weak places between planes of existence. In these lairs, aboleths dream of epochs past, collect throngs of psychically dominated servants, consume the minds of unwitting victims, and prepare for their return to power.

Aboleths' alien goals and methods are often mysterious to other creatures. Roll on or choose a result from the Aboleth Schemes table to inspire an aboleth's schemes.

> [!quote] A quote from Evard  
> 
> The lies we call reason are fragile things, vulnerable and raw on the shores of eons. But in the dream-vaults of dread ancients roil seas of terrifying truth. Our age is an island, and the ebb of primordial tides avows the Stygian wave.

**Aboleth Schemes**

| dice: 1d6 | The Aboleth Seeks To... |
|-----------|-------------------------|
| 1 | Accomplish incomprehensible plans that lead it to act in seemingly random ways. |
| 2 | Learn more of the world by kidnapping people and consuming their minds. |
| 3 | Manipulate innocents into worshiping it as a god by using its telepathy from hiding. |
| 4 | Open a gate to the distant past or future, releasing an invasion from another time. |
| 5 | Rouse a dragon turtle, a kraken, or another sea monster to flood a coastal city. |
| 6 | Trick treasure hunters into recovering relics from its long-fallen empire. |
^aboleth-schemes

### Aboleth Lairs

Aboleths usually dwell in submerged ruins and caverns. They keep air-filled spaces for their terrestrial servants and to hold treasures that would be damaged by water.

```statblock
"name": "Aboleth (XMM)"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "150"
"hit_dice": "20d10 + 40"
"modifier": !!int "7"
"stats":
  - !!int "21"
  - !!int "9"
  - !!int "15"
  - !!int "18"
  - !!int "15"
  - !!int "18"
"speed": "10 ft., swim 40 ft."
"saves":
  - "dexterity": !!int "3"
  - "constitution": !!int "6"
  - "intelligence": !!int "8"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[History](3.%20Mechanics/CLI/rules/skills.md#History)"
    "desc": "+12"
  - "name": "[Perception](3.%20Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+10"
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 20"
"languages": "Deep Speech; telepathy 120 ft."
"cr": "10"
"traits":
  - "desc": "The aboleth can breathe air and water."
    "name": "Amphibious"
  - "desc": "If destroyed, the aboleth gains a new body in 5d10 days, reviving with\
      \ all its [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ in the Far Realm or another location chosen by the DM."
    "name": "Eldritch Restoration"
  - "desc": "If the aboleth fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
  - "desc": "While underwater, the aboleth is surrounded by mucus. *Constitution Saving\
      \ Throw:* DC 14, each creature in a 5-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the aboleth at the end of the aboleth's turn. *Failure:*\
      \ The target is cursed. Until the curse ends, the target's skin becomes slimy,\
      \ the target can breathe air and water, and it can't regain [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ unless it is underwater.\n\nWhile the cursed creature is outside a body of\
      \ water, the creature takes 6 (1d12) Acid damage at the end of every 10 minutes\
      \ unless moisture is applied to its skin before those minutes have passed."
    "name": "Mucus Cloud"
  - "desc": "If a creature the aboleth can see communicates telepathically with the\
      \ aboleth, the aboleth learns the creature's greatest desires."
    "name": "Probing Telepathy"
"actions":
  - "desc": "The aboleth makes two Tentacle attacks and uses either Consume Memories\
      \ or Dominate Mind if available."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +9, reach 15 ft. *Hit:* 12 (2d6 + 5) Bludgeoning\
      \ damage. If the target is a Large or smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 14) from one of four tentacles."
    "name": "Tentacle"
  - "desc": "*Intelligence Saving Throw:* DC 16, one creature within 30 feet that\
      \ is [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed) or [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the aboleth. *Failure:* 10 (3d6) Psychic damage. *Success:* Half damage.\
      \ *Failure or Success:* The aboleth gains the target's memories if the target\
      \ is a Humanoid and is reduced to 0 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)\
      \ by this action."
    "name": "Consume Memories"
  - "desc": "*Wisdom Saving Throw:* DC 16, one creature the aboleth can see within\
      \ 30 feet. *Failure:* The target has the [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ condition until the aboleth dies or is on a different plane of existence from\
      \ the target. While [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed),\
      \ the target acts as an ally to the aboleth and is under its control while within\
      \ 60 feet of it. In addition, the aboleth and the target can communicate telepathically\
      \ with each other over any distance.\n\nThe target repeats the save whenever\
      \ it takes damage as well as after every 24 hours it spends at least 1 mile\
      \ away from the aboleth, ending the effect on itself on a success."
    "name": "Dominate Mind (2/Day)"
"regional_effects":
  - "desc": "The region containing an aboleth's lair is warped by it, creating the\
      \ following effects:\n\n- **Foul Water.** Water sources within 1 mile of the\
      \ lair are supernaturally fouled. Creatures other than the aboleth and its allies\
      \ that drink such water must succeed on a DC 15 Constitution saving throw or\
      \ have the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned) condition\
      \ for 1 hour.  \n- **Psionic Projection.** While in its lair, the aboleth can\
      \ cast [Project Image](3.%20Mechanics/CLI/spells/project-image-xphb.md), requiring\
      \ no spell components and using Intelligence as the spellcasting ability (spell\
      \ save DC 16). When casting the spell this way, the spell's range is 1 mile,\
      \ and the aboleth can use its telepathy as if it were in the illusion's space.\
      \  \n\nIf the aboleth dies or moves its lair elsewhere, these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3 (4 in Lair). Immediately after\
  \ another creature's turn, the aboleth can expend a use to take one of the following\
  \ actions. The aboleth regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The aboleth makes one Tentacle attack."
    "name": "Lash"
  - "desc": "If the aboleth has at least one creature [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed)\
      \ or [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled), it uses Consume\
      \ Memories and regains 5 (1d10) [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md)."
    "name": "Psychic Drain"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/aberration/token/aboleth-xmm.webp"
```
^statblock

## Environment

underdark, underwater