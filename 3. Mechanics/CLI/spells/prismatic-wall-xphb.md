---
obsidianUIMode: preview
cssclasses:
- json5e-spell
tags:
- ttrpg-cli/compendium/src/5e/xphb
- ttrpg-cli/spell/class/bard
- ttrpg-cli/spell/class/wizard
- ttrpg-cli/spell/level/9th-level
- ttrpg-cli/spell/school/abjuration
- ttrpg-cli/spell/subclass/abjurer
classes:
- Bard
- Wizard
- Wizard (Abjurer)
aliases:
- Prismatic Wall
---
# Prismatic Wall
*9th-level, Abjuration*  


- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S
- **Duration:** 10 minutes

A shimmering, multicolored plane of light forms a vertical opaque wall—up to 90 feet long, 30 feet high, and 1 inch thick—centered on a point within range. Alternatively, you shape the wall into a globe up to 30 feet in diameter centered on a point within range. The wall lasts for the duration. If you position the wall in a space occupied by a creature, the spell ends instantly without effect.

The wall sheds [Bright Light](3.%20Mechanics/CLI/rules/variant-rules/bright-light-xphb.md) within 100 feet and [Dim Light](3.%20Mechanics/CLI/rules/variant-rules/dim-light-xphb.md) for an additional 100 feet. You and creatures you designate when you cast the spell can pass through and be near the wall without harm. If another creature that can see the wall moves within 20 feet of it or starts its turn there, the creature must succeed on a Constitution saving throw or have the [Blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded) condition for 1 minute.

The wall consists of seven layers, each with a different color. When a creature reaches into or passes through the wall, it does so one layer at a time through all the layers. Each layer forces the creature to make a Dexterity saving throw or be affected by that layer's properties as described in the Prismatic Layers table.

The wall, which has AC 10, can be destroyed one layer at a time, in order from red to violet, by means specific to each layer. If a layer is destroyed, it is gone for the duration. [Antimagic Field](3.%20Mechanics/CLI/spells/antimagic-field-xphb.md) has no effect on the wall, and [Dispel Magic](3.%20Mechanics/CLI/spells/dispel-magic-xphb.md) can affect only the violet layer.

**Prismatic Layers**

| Order | Effects |
|-------|---------|
| 1 | **Red.** *Failed Save:* `12d6` Fire damage. *Successful Save:* Half as much damage. *Additional Effects*: Nonmagical ranged attacks can't pass through this layer, which is destroyed if it takes at least 25 Cold damage. |
| 2 | **Orange.** *Failed Save:* `12d6` Acid damage. *Successful Save:* Half as much damage. *Additional Effects:* Magical ranged attacks can't pass through this layer, which is destroyed by a strong wind (such as the one created by [Gust of Wind](3.%20Mechanics/CLI/spells/gust-of-wind-xphb.md)). |
| 3 | **Yellow.** *Failed Save:* `12d6` Lightning damage. *Successful Save:* Half as much damage. *Additional Effects:* The layer is destroyed if it takes at least 60 Force damage. |
| 4 | **Green.** *Failed Save:* `12d6` Poison damage. *Successful Save:* Half as much damage. *Additional Effects:* A [Passwall](3.%20Mechanics/CLI/spells/passwall-xphb.md) spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer. |
| 5 | **Blue.** *Failed Save:* `12d6` Cold damage. *Successful Save:* Half as much damage. *Additional Effects:* The layer is destroyed if it takes at least 25 Fire damage. |
| 6 | **Indigo.** *Failed Save:* The target has the [Restrained](3.%20Mechanics/CLI/rules/conditions.md#Restrained) condition and makes a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the condition ends. If it fails three times, it has the [Petrified](3.%20Mechanics/CLI/rules/conditions.md#Petrified) condition until it is freed by an effect like the [Greater Restoration](3.%20Mechanics/CLI/spells/greater-restoration-xphb.md) spell. The successes and failures needn't be consecutive; keep track of both until the target collects three of a kind. *Additional Effects:* Spells can't be cast through this layer, which is destroyed by [Bright Light](3.%20Mechanics/CLI/rules/variant-rules/bright-light-xphb.md) shed by the [Daylight](3.%20Mechanics/CLI/spells/daylight-xphb.md) spell. |
| 7 | **Violet.** *Failed Save:* The target has the [Blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded) condition and makes a Wisdom saving throw at the start of your next turn. On a successful save, the condition ends. On a failed save, the condition ends, and the creature teleports to another plane of existence (DM's choice). *Additional Effects:* This layer is destroyed by [Dispel Magic](3.%20Mechanics/CLI/spells/dispel-magic-xphb.md). |
^prismatic-layers

**Classes**: [Bard](3.%20Mechanics/CLI/lists/list-spells-classes-bard.md); [Wizard (Abjurer)](3.%20Mechanics/CLI/lists/list-spells-classes-abjurer-xphb.md "subclass=XPHB;class=XPHB"); [Wizard](3.%20Mechanics/CLI/lists/list-spells-classes-wizard.md)

*Source: Player's Handbook (2024) p. 308. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*