---
obsidianUIMode: preview
cssclasses:
- json5e-class
tags:
- ttrpg-cli/class/sorcerer
- ttrpg-cli/compendium/src/5e/xphb
aliases:
- Sorcerer
---
# Sorcerer
*Source: Player's Handbook (2024) p. 138. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='6'></th><th colspan='9'>Spell Slots per Spell Level</th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Sorcery Points</th><th class="value">Cantrips</th><th class="value">Prepared Spells</th><th class="spellSlot">1st</th><th class="spellSlot">2nd</th><th class="spellSlot">3rd</th><th class="spellSlot">4th</th><th class="spellSlot">5th</th><th class="spellSlot">6th</th><th class="spellSlot">7th</th><th class="spellSlot">8th</th><th class="spellSlot">9th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Spellcasting (Level 1)' class='internal-link'>Spellcasting</a>, <a href='#Innate Sorcery (Level 1)' class='internal-link'>Innate Sorcery</a></td><td class="value">⏤</td><td class="value">4</td><td class="value">2</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Font of Magic (Level 2)' class='internal-link'>Font of Magic</a>, <a href='#Metamagic (Level 2)' class='internal-link'>Metamagic</a>, <a href='#Metamagic Options (Level 2)' class='internal-link'>Metamagic Options</a></td><td class="value">2</td><td class="value">4</td><td class="value">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Sorcerer Subclass (Level 3)' class='internal-link'>Sorcerer Subclass</a></td><td class="value">3</td><td class="value">4</td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">5</td><td class="value">7</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Sorcerous Restoration (Level 5)' class='internal-link'>Sorcerous Restoration</a></td><td class="value">5</td><td class="value">5</td><td class="value">9</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Subclass Feature (Level 6)' class='internal-link'>Subclass Feature</a></td><td class="value">6</td><td class="value">5</td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Sorcery Incarnate (Level 7)' class='internal-link'>Sorcery Incarnate</a></td><td class="value">7</td><td class="value">5</td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">8</td><td class="value">5</td><td class="value">12</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"></td><td class="value">9</td><td class="value">5</td><td class="value">14</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Metamagic (Level 10)' class='internal-link'>Metamagic</a></td><td class="value">10</td><td class="value">6</td><td class="value">15</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"></td><td class="value">11</td><td class="value">6</td><td class="value">16</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">12</td><td class="value">6</td><td class="value">16</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"></td><td class="value">13</td><td class="value">6</td><td class="value">17</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Subclass Feature (Level 14)' class='internal-link'>Subclass Feature</a></td><td class="value">14</td><td class="value">6</td><td class="value">17</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"></td><td class="value">15</td><td class="value">6</td><td class="value">18</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">16</td><td class="value">6</td><td class="value">18</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Metamagic (Level 17)' class='internal-link'>Metamagic</a></td><td class="value">17</td><td class="value">6</td><td class="value">19</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Subclass Feature (Level 18)' class='internal-link'>Subclass Feature</a></td><td class="value">18</td><td class="value">6</td><td class="value">20</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Epic Boon (Level 19)' class='internal-link'>Epic Boon</a></td><td class="value">19</td><td class="value">6</td><td class="value">21</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Arcane Apotheosis (Level 20)' class='internal-link'>Arcane Apotheosis</a></td><td class="value">20</td><td class="value">6</td><td class="value">22</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d6 per Sorcerer level
- **Hit Points at First Level:** 6 + CON
- **Hit Points at Higher Levels:** add 4 OR 1d6 + CON  (minimum of 1)

## Starting Sorcerer

- **Saving Throw Proficiencies**: Charisma, Constitution
- **Skill Proficiencies**: *Choose 2:* [Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana), [Deception](3.%20Mechanics/CLI/rules/skills.md#Deception), [Insight](3.%20Mechanics/CLI/rules/skills.md#Insight), [Intimidation](3.%20Mechanics/CLI/rules/skills.md#Intimidation), [Persuasion](3.%20Mechanics/CLI/rules/skills.md#Persuasion), or [Religion](3.%20Mechanics/CLI/rules/skills.md#Religion)
- **Weapon Proficiencies**: Simple weapons

**Starting Equipment:** *Choose A or B:* (A) [Spear](3.%20Mechanics/CLI/items/spear-xphb.md), 2 [Daggers](3.%20Mechanics/CLI/items/dagger-xphb.md), [Arcane Focus](3.%20Mechanics/CLI/items/arcane-focus-xphb.md) ([crystal](3.%20Mechanics/CLI/items/crystal-xphb.md)), [Dungeoneer's Pack](3.%20Mechanics/CLI/items/dungeoneers-pack-xphb.md), and 28 GP; or (B) 50 GP


## Sorcerer

Sorcerers wield innate magic that is stamped into their being. Some Sorcerers can't name the origin of their power, while others trace it to strange events in their personal or family history. The blessing of a dragon or a dryad at a baby's birth or the strike of lightning from a clear sky might spark a Sorcerer's gift. So too might the gift of a deity, exposure to the strange magic of another plane of existence, or a glimpse into the inner workings of reality. Whatever the origin, the result is an indelible mark on the Sorcerer, a churning magic that can be passed down through generations.

Sorcerers don't learn magic; the raw, roiling power of magic is part of them. The essential art of a Sorcerer is learning to harness and channel that innate magic, allowing the Sorcerer to discover new and staggering ways to unleash their power. As Sorcerers master their innate magic, they grow more attuned to its origin, developing distinct powers that reflect its source.

Sorcerers are rare. Some family lines produce exactly one Sorcerer in every generation, but most of the time, the talents of sorcery appear as a fluke. People who have this magical power soon discover that it doesn't like to stay quiet. A Sorcerer's magic wants to be wielded.

## Class Features

### Spellcasting (Level 1)

Drawing from your innate magic, you can cast spells. See "chapter 7" for the rules on spellcasting. The information below details how you use those rules with Sorcerer spells, which appear in the Sorcerer spell list later in the class's description.

#### Cantrips

You know four Sorcerer cantrips of your choice. [Light](3.%20Mechanics/CLI/spells/light-xphb.md), [Prestidigitation](3.%20Mechanics/CLI/spells/prestidigitation-xphb.md), [Shocking Grasp](3.%20Mechanics/CLI/spells/shocking-grasp-xphb.md), and [Sorcerous Burst](3.%20Mechanics/CLI/spells/sorcerous-burst-xphb.md) are recommended. Whenever you gain a Sorcerer level, you can replace one of your cantrips from this feature with another Sorcerer cantrip of your choice.

When you reach Sorcerer levels 4 and 10, you learn another Sorcerer cantrip of your choice, as shown in the Cantrips column of the Sorcerer Features table.

#### Spell Slots

The Sorcerer Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

#### Prepared Spells of Level 1+

You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Sorcerer spells. [Burning Hands](3.%20Mechanics/CLI/spells/burning-hands-xphb.md) and [Detect Magic](3.%20Mechanics/CLI/spells/detect-magic-xphb.md) are recommended.

The number of spells on your list increases as you gain Sorcerer levels, as shown in the Prepared Spells column of the Sorcerer Features table. Whenever that number increases, choose additional Sorcerer spells until the number of spells on your list matches the number in the Sorcerer Features table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Sorcerer, your list of prepared spells can include six Sorcerer spells of level 1 or 2 in any combination.

If another Sorcerer feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Sorcerer spells for you.

#### Changing Your Prepared Spells

Whenever you gain a Sorcerer level, you can replace one spell on your list with another Sorcerer spell for which you have spell slots.

#### Spellcasting Ability

Charisma is your spellcasting ability for your Sorcerer spells.

#### Spellcasting Focus

You can use an [Arcane Focus](3.%20Mechanics/CLI/items/arcane-focus-xphb.md) as a [Spellcasting Focus](3.%20Mechanics/CLI/rules/variant-rules/spellcasting-focus-xphb.md) for your Sorcerer spells.

### Innate Sorcery (Level 1)

An event in your past left an indelible mark on you, infusing you with simmering magic. As a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md), you can unleash that magic for 1 minute, during which you gain the following benefits:

- The spell save DC of your Sorcerer spells increases by 1.  
- You have [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md) on the attack rolls of Sorcerer spells you cast.  

You can use this feature twice, and you regain all expended uses of it when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

### Font of Magic (Level 2)

You can tap into the wellspring of magic within yourself. This wellspring is represented by Sorcery Points, which allow you to create a variety of magical effects.

You have 2 Sorcery Points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer Features table. You can't have more Sorcery Points than the number shown in the table for your level. You regain all expended Sorcery Points when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

You can use your Sorcery Points to fuel the options below, along with other features, such as Metamagic, that use those points.

#### Converting Spell Slots to Sorcery Points

You can expend a spell slot to gain a number of Sorcery Points equal to the slot's level (no action required).

#### Creating Spell Slots

As a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md), you can transform unexpended Sorcery Points into one spell slot. The Creating Spell Slots table shows the cost of creating a spell slot of a given level, and it lists the minimum Sorcerer level you must be to create a slot. You can create a spell slot no higher than level 5.

Any spell slot you create with this feature vanishes when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

**Creating Spell Slots**

| Spell Slot Level | Sorcery Point Cost | Min. Sorcerer Level |
|------------------|--------------------|---------------------|
| 1 | 2 | 2 |
| 2 | 3 | 3 |
| 3 | 5 | 5 |
| 4 | 6 | 7 |
| 5 | 7 | 9 |
^creating-spell-slots

### Metamagic (Level 2)

Because your magic flows from within, you can alter your spells to suit your needs; you gain two Metamagic options of your choice from "Metamagic Options^[Optional features from [Metamagic](3.%20Mechanics/CLI/lists/list-optfeaturetype-mm.md); defined in Player's Handbook (2024)]" later in this class's description. You use the chosen options to temporarily modify spells you cast. To use an option, you must spend the number of Sorcery Points that it costs.

You can use only one Metamagic option on a spell when you cast it unless otherwise noted in one of those options.

Whenever you gain a Sorcerer level, you can replace one of your Metamagic options with one you don't know. You gain two more options at Sorcerer level 10 and two more at Sorcerer level 17.

### Metamagic Options (Level 2)

The following options are available to your Metamagic feature. The options are presented in alphabetical order.

### Sorcerer Subclass (Level 3)

You gain a Sorcerer subclass of your choice. A subclass is a specialization that grants you features at certain Sorcerer levels. For the rest of your career, you gain each of your subclass's features that are of your Sorcerer level or lower.

### Ability Score Improvement (Level 4)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify. You gain this feature again at Sorcerer levels 8, 12, and 16.

### Sorcerous Restoration (Level 5)

When you finish a [Short Rest](3.%20Mechanics/CLI/rules/variant-rules/short-rest-xphb.md), you can regain expended Sorcery Points, but no more than a number equal to half your Sorcerer level (round down). Once you use this feature, you can't do so again until you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

### Subclass Feature (Level 6)

You gain a feature from your Sorcerer subclass.

### Sorcery Incarnate (Level 7)

If you have no uses of Innate Sorcery left, you can use it if you spend 2 Sorcery Points when you take the [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md) to activate it.

In addition, while your Innate Sorcery feature is active, you can use up to two of your [Metamagic options](3.%20Mechanics/CLI/lists/list-optfeaturetype-mm.md) on each spell you cast.

### Ability Score Improvement (Level 8)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Metamagic (Level 10)

Because your magic flows from within you, you can alter your spells to suit your needs; you gain two Metamagic options of your choice from the "Metamagic Options^[Optional features from [Metamagic](3.%20Mechanics/CLI/lists/list-optfeaturetype-mm.md); defined in Player's Handbook (2024)]" section later in this class's description.

You can use only one Metamagic option on a spell when you cast it, unless otherwise noted in one of those options.

Whenever you gain a Sorcerer level, you can replace one of your Metamagic options with one you don't know.

### Ability Score Improvement (Level 12)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Subclass Feature (Level 14)

You gain a feature from your Sorcerer subclass.

### Ability Score Improvement (Level 16)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Metamagic (Level 17)

Because your magic flows from within you, you can alter your spells to suit your needs; you gain two Metamagic options of your choice from the "Metamagic Options^[Optional features from [Metamagic](3.%20Mechanics/CLI/lists/list-optfeaturetype-mm.md); defined in Player's Handbook (2024)]" section later in this class's description.

You can use only one Metamagic option on a spell when you cast it, unless otherwise noted in one of those options.

Whenever you gain a Sorcerer level, you can replace one of your Metamagic options with one you don't know.

### Subclass Feature (Level 18)

You gain a feature from your Sorcerer subclass.

### Epic Boon (Level 19)

You gain an Epic Boon feat or another feat of your choice for which you qualify. [Boon of Dimensional Travel](3.%20Mechanics/CLI/feats/boon-of-dimensional-travel-xphb.md) is recommended.

### Arcane Apotheosis (Level 20)

While your Innate Sorcery feature is active, you can use one Metamagic option on each of your turns without spending Sorcery Points on it.

## Optional Features

> [!example]- Optional Features: Metamagic
> ![Metamagic](3.%20Mechanics/CLI/lists/list-optfeaturetype-mm.md#Metamagic)
^list-optfeature-mm