---
obsidianUIMode: preview
cssclasses:
- json5e-class
tags:
- ttrpg-cli/class/warlock
- ttrpg-cli/compendium/src/5e/xphb
aliases:
- Warlock
---
# Warlock
*Source: Player's Handbook (2024) p. 152. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='8'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value"><a href="3.%20Mechanics/CLI/lists/list-optfeaturetype-ei.md">Invocations</a></th><th class="value">Cantrips</th><th class="value">Prepared Spells</th><th class="value">Spell Slots</th><th class="value">Slot Level</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Eldritch Invocations (Level 1)' class='internal-link'>Eldritch Invocations</a>, <a href='#Pact Magic (Level 1)' class='internal-link'>Pact Magic</a>, <a href='#Eldritch Invocation Options (Level 1)' class='internal-link'>Eldritch Invocation Options</a></td><td class="value">1</td><td class="value">2</td><td class="value">2</td><td class="value">1</td><td class="value">1</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Magical Cunning (Level 2)' class='internal-link'>Magical Cunning</a></td><td class="value">3</td><td class="value">2</td><td class="value">3</td><td class="value">2</td><td class="value">1</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Warlock Subclass (Level 3)' class='internal-link'>Warlock Subclass</a></td><td class="value">3</td><td class="value">2</td><td class="value">4</td><td class="value">2</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">3</td><td class="value">5</td><td class="value">2</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"></td><td class="value">5</td><td class="value">3</td><td class="value">6</td><td class="value">2</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Subclass Feature (Level 6)' class='internal-link'>Subclass Feature</a></td><td class="value">5</td><td class="value">3</td><td class="value">7</td><td class="value">2</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"></td><td class="value">6</td><td class="value">3</td><td class="value">8</td><td class="value">2</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">6</td><td class="value">3</td><td class="value">9</td><td class="value">2</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Contact Patron (Level 9)' class='internal-link'>Contact Patron</a></td><td class="value">7</td><td class="value">3</td><td class="value">10</td><td class="value">2</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Subclass Feature (Level 10)' class='internal-link'>Subclass Feature</a></td><td class="value">7</td><td class="value">4</td><td class="value">10</td><td class="value">2</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Mystic Arcanum (Level 11)' class='internal-link'>Mystic Arcanum</a></td><td class="value">7</td><td class="value">4</td><td class="value">11</td><td class="value">3</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">8</td><td class="value">4</td><td class="value">11</td><td class="value">3</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Mystic Arcanum (Level 13)' class='internal-link'>Mystic Arcanum</a></td><td class="value">8</td><td class="value">4</td><td class="value">12</td><td class="value">3</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Subclass Feature (Level 14)' class='internal-link'>Subclass Feature</a></td><td class="value">8</td><td class="value">4</td><td class="value">12</td><td class="value">3</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Mystic Arcanum (Level 15)' class='internal-link'>Mystic Arcanum</a></td><td class="value">9</td><td class="value">4</td><td class="value">13</td><td class="value">3</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">9</td><td class="value">4</td><td class="value">13</td><td class="value">3</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Mystic Arcanum (Level 17)' class='internal-link'>Mystic Arcanum</a></td><td class="value">9</td><td class="value">4</td><td class="value">14</td><td class="value">4</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"></td><td class="value">10</td><td class="value">4</td><td class="value">14</td><td class="value">4</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Epic Boon (Level 19)' class='internal-link'>Epic Boon</a></td><td class="value">10</td><td class="value">4</td><td class="value">15</td><td class="value">4</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Eldritch Master (Level 20)' class='internal-link'>Eldritch Master</a></td><td class="value">10</td><td class="value">4</td><td class="value">15</td><td class="value">4</td><td class="value">5</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Warlock level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON  (minimum of 1)

## Starting Warlock

- **Saving Throw Proficiencies**: Charisma, Wisdom
- **Skill Proficiencies**: *Choose 2:* [Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana), [Deception](3.%20Mechanics/CLI/rules/skills.md#Deception), [History](3.%20Mechanics/CLI/rules/skills.md#History), [Intimidation](3.%20Mechanics/CLI/rules/skills.md#Intimidation), [Investigation](3.%20Mechanics/CLI/rules/skills.md#Investigation), [Nature](3.%20Mechanics/CLI/rules/skills.md#Nature), or [Religion](3.%20Mechanics/CLI/rules/skills.md#Religion)
- **Weapon Proficiencies**: Simple weapons
- **Armor Training**: [Light armor](3.%20Mechanics/CLI/rules/item-types.md#Light%20Armor)

**Starting Equipment:** *Choose A or B:* (A) [Leather Armor](3.%20Mechanics/CLI/items/leather-armor-xphb.md), [Sickle](3.%20Mechanics/CLI/items/sickle-xphb.md), 2 [Daggers](3.%20Mechanics/CLI/items/dagger-xphb.md), [Arcane Focus](3.%20Mechanics/CLI/items/arcane-focus-xphb.md) ([orb](3.%20Mechanics/CLI/items/orb-xphb.md)), [Book](3.%20Mechanics/CLI/items/book-xphb.md) (occult lore), [Scholar's Pack](3.%20Mechanics/CLI/items/scholars-pack-xphb.md), and 15 GP; or (B) 100 GP

## Multiclassing Warlock

- **Armor Training**: [Light armor](3.%20Mechanics/CLI/rules/item-types.md#Light%20Armor)

## Warlock

Warlocks quest for knowledge that lies hidden in the fabric of the multiverse. They often begin their search for magical power by delving into tomes of forbidden lore, dabbling in invocations meant to attract the power of extraplanar beings, or seeking places of power where the influence of these beings can be felt. In no time, each Warlock is drawn into a binding pact with a powerful patron. Drawing on the ancient knowledge of beings such as angels, archfey, demons, devils, hags, and alien entities of the Far Realm, Warlocks piece together arcane secrets to bolster their own power.

Warlocks view their patrons as resources, as means to the end of achieving magical power. Some Warlocks respect, revere, or even love their patrons; some serve their patrons grudgingly; and some seek to undermine their patrons even as they wield the power their patrons have given them.

Once a pact is made, a Warlock's thirst for knowledge and power can't be slaked with mere study. Most Warlocks spend their days pursuing greater power and deeper knowledge, which typically means some kind of adventure.

## Class Features

### Eldritch Invocations (Level 1)

You have unearthed Eldritch Invocations, pieces of forbidden knowledge that imbue you with an abiding magical ability or other lessons. You gain one invocation of your choice, such as Pact of the Tome. Invocations are described in the "Eldritch Invocation Options^[Optional features from [Eldritch Invocation](3.%20Mechanics/CLI/lists/list-optfeaturetype-ei.md); defined in Player's Handbook (2024)]" section later in this class's description.

#### Prerequisites

If an invocation has a prerequisite, you must meet it to learn that invocation. For example, if an invocation requires you to be a level 5+ Warlock, you can select the invocation once you reach Warlock level 5.

#### Replacing and Gaining Invocations

Whenever you gain a Warlock level, you can replace one of your invocations with another one for which you qualify. You can't replace an invocation if it's a prerequisite for another invocation that you have.

When you gain certain Warlock levels, you gain more invocations of your choice, as shown in the Invocations column of the Warlock Features table.

You can't pick the same invocation more than once unless its description says otherwise.

### Pact Magic (Level 1)

Through occult ceremony, you have formed a pact with a mysterious entity to gain magical powers. The entity is a voice in the shadows—its identity unclear—but its boon to you is concrete: the ability to cast spells. See "chapter 7" for the rules on spellcasting. The information below details how you use those rules with Warlock spells, which appear in the Warlock spell list later in the class's description.

#### Cantrips

You know two Warlock cantrips of your choice. [Eldritch Blast](3.%20Mechanics/CLI/spells/eldritch-blast-xphb.md) and [Prestidigitation](3.%20Mechanics/CLI/spells/prestidigitation-xphb.md) are recommended. Whenever you gain a Warlock level, you can replace one of your cantrips from this feature with another Warlock cantrip of your choice.

When you reach Warlock levels 4 and 10, you learn another Warlock cantrip of your choice, as shown in the Cantrips column of the Warlock Features table.

#### Spell Slots

The Warlock Features table shows how many spell slots you have to cast your Warlock spells of levels 1–5. The table also shows the level of those slots, all of which are the same level. You regain all expended Pact Magic spell slots when you finish a [Short](3.%20Mechanics/CLI/rules/variant-rules/short-rest-xphb.md) or [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

For example, when you're a level 5 Warlock, you have two level 3 spell slots. To cast the level 1 spell [Witch Bolt](3.%20Mechanics/CLI/spells/witch-bolt-xphb.md), you must spend one of those slots, and you cast it as a level 3 spell.

#### Prepared Spells of Level 1+

You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Warlock spells. [Charm Person](3.%20Mechanics/CLI/spells/charm-person-xphb.md) and [Hex](3.%20Mechanics/CLI/spells/hex-xphb.md) are recommended.

The number of spells on your list increases as you gain Warlock levels, as shown in the Prepared Spells column of the Warlock Features table. Whenever that number increases, choose additional Warlock spells until the number of spells on your list matches the number in the table. The chosen spells must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach level 6, for example, you learn a new Warlock spell, which can be of levels 1–3.

If another Warlock feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Warlock spells for you.

#### Changing Your Prepared Spells

Whenever you gain a Warlock level, you can replace one spell on your list with another Warlock spell of an eligible level.

#### Spellcasting Ability

Charisma is the spellcasting ability for your Warlock spells.

#### Spellcasting Focus

You can use an [Arcane Focus](3.%20Mechanics/CLI/items/arcane-focus-xphb.md) as a [Spellcasting Focus](3.%20Mechanics/CLI/rules/variant-rules/spellcasting-focus-xphb.md) for your Warlock spells.

### Eldritch Invocation Options (Level 1)

Eldritch Invocation options appear in alphabetical order.

### Magical Cunning (Level 2)

You can perform an esoteric rite for 1 minute. At the end of it, you regain expended Pact Magic spell slots but no more than a number equal to half your maximum (round up). Once you use this feature, you can't do so again until you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

### Warlock Subclass (Level 3)

You gain a Warlock subclass of your choice. A subclass is a specialization that grants you features at certain Warlock levels. For the rest of your career, you gain each of your subclass's features that are of your Warlock level or lower.

### Ability Score Improvement (Level 4)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify. You gain this feature again at Warlock levels 8, 12, and 16.

### Subclass Feature (Level 6)

You gain a feature from your Warlock subclass.

### Ability Score Improvement (Level 8)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) Feat or another feat of your choice for which you qualify.

### Contact Patron (Level 9)

In the past, you usually contacted your patron through intermediaries. Now you can communicate directly; you always have the [Contact Other Plane](3.%20Mechanics/CLI/spells/contact-other-plane-xphb.md) spell prepared. With this feature, you can cast the spell without expending a spell slot to contact your patron, and you automatically succeed on the spell's saving throw.

Once you cast the spell with this feature, you can't do so in this way again until you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

### Subclass Feature (Level 10)

You gain a feature from your Warlock subclass.

### Mystic Arcanum (Level 11)

Your patron grants you a magical secret called an arcanum. Choose one level 6 Warlock spell as this arcanum.

You can cast your arcanum spell once without expending a spell slot, and you must finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md) before you can cast it in this way again.

As shown in the Warlock Features table, you gain another Warlock spell of your choice that can be cast in this way when you reach Warlock levels 13 (level 7 spell), 15 (level 8 spell), and 17 (level 9 spell). You regain all uses of your Mystic Arcanum when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

Whenever you gain a Warlock level, you can replace one of your arcanum spells with another Warlock spell of the same level.

### Ability Score Improvement (Level 12)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) Feat or another feat of your choice for which you qualify.

### Mystic Arcanum (Level 13)

You gain a level 7 Warlock Spell of your choice.

### Subclass Feature (Level 14)

You gain a feature from your Warlock subclass.

### Mystic Arcanum (Level 15)

You gain a level 8 Warlock Spell of your choice.

### Ability Score Improvement (Level 16)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) Feat or another feat of your choice for which you qualify.

### Mystic Arcanum (Level 17)

You gain a level 9 Warlock Spell of your choice.

### Epic Boon (Level 19)

You gain an Epic Boon feat or another feat of your choice for which you qualify. [Boon of Fate](3.%20Mechanics/CLI/feats/boon-of-fate-xphb.md) is recommended.

### Eldritch Master (Level 20)

When you use your Magical Cunning feature, you regain all your expended Pact Magic spell slots.

## Optional Features

> [!example]- Optional Features: Eldritch Invocation
> ![Eldritch Invocation](3.%20Mechanics/CLI/lists/list-optfeaturetype-ei.md#Eldritch%20Invocation)
^list-optfeature-ei