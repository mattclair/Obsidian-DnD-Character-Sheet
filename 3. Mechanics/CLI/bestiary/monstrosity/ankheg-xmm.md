---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ankheg
---
# [Ankheg](3. Mechanics\CLI\bestiary\monstrosity/ankheg-xmm.md)
*Source: Monster Manual (2024) p. 18. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Ankheg

*Burrowing Insectile Predator*

- **Habitat.** Forest, Grassland  
- **Treasure.** None  

Oversize insects, ankhegs burrow close to the surface, creating sprawling underground labyrinths. From these tunnels, they burst forth to dissolve and devour smaller creatures using their acid-dripping mandibles and sprays of digestive enzymes.

Ankhegs are the bane of farmers whose grazing livestock are easy prey for these monsters. Many ankhegs hunt alone, but those in places with ample food might collect in nests of several dozen and threaten whole towns. Ankheg nests can be challenging to wipe out unless the monsters' tunnels are cleared out and their eggs destroyed.

Ankheg tunnels are roughly cylindrical and are often littered with the remains of ankhegs' meals and subterranean treasures. Roll on or choose a result from the Ankheg Tunnel Discoveries table to inspire what might be found in an ankheg's tunnel.

> [!quote] A quote from Feil Jenkins, Sage of Kirwak  
> 
> Though they feed on things under the soil, ankhegs prefer live meat—your cattle, your dogs, or you.

**Ankheg Tunnel Discoveries**

| dice: 1d8 | Inside the Ankheg Tunnel Is... |
|-----------|--------------------------------|
| 1 | Another tunnel (either natural or of worked stone) that extends into the Underdark. |
| 2 | A buried ruin or grave exposed by the tunnel. |
| 3 | A cluster of `1d4` fresh ankheg eggs that can be broken and used as vials of Acid. |
| 4 | A dead ankheg and evidence of a deadlier subterranean predator. |
| 5 | A piece of ankheg carapace usable as a Shield. |
| 6 | A pouch with `2d6` GP near a puddle of acid. |
| 7 | A stray farm or woodland animal. |
| 8 | A viciously mauled scarecrow. |
^ankheg-tunnel-discoveries

```statblock
"name": "Ankheg (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "11"
  - !!int "14"
  - !!int "1"
  - !!int "13"
  - !!int "6"
"speed": "30 ft., burrow 10 ft."
"senses": "[darkvision](3.%20Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., tremorsense\
  \ 60 ft., passive Perception 11"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The ankheg can burrow through solid rock at half its [Burrow Speed](3.%20Mechanics/CLI/rules/variant-rules/burrow-speed-xphb.md)\
      \ and leaves a 10-foot-diameter tunnel in its wake."
    "name": "Tunneler"
"actions":
  - "desc": "*Melee Attack Roll:* +5 (with [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md)\
      \ if the target is [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the ankheg), reach 5 ft. *Hit:* 10 (2d6 + 3) Slashing damage plus 3 (1d6)\
      \ Acid damage. If the target is a Large or smaller creature, it has the [Grappled](3.%20Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition (escape DC 13)."
    "name": "Bite"
  - "desc": "*Dexterity Saving Throw:* DC 12, each creature in a 30-foot-long, 5-foot-wide\
      \ [Line](3.%20Mechanics/CLI/rules/variant-rules/line-area-of-effect-xphb.md).\
      \ *Failure:* 14 (4d6) Acid damage. *Success:* Half damage."
    "name": "Acid Spray (Recharge 6)"
"source":
  - "XMM"
"image": "3.%20Mechanics/CLI/bestiary/monstrosity/token/ankheg-xmm.webp"
```
^statblock

## Environment

forest, grassland