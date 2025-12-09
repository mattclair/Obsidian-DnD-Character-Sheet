---
obsidianUIMode: preview
cssclasses:
- json5e-class
tags:
- ttrpg-cli/class/bard
- ttrpg-cli/compendium/src/5e/xphb
aliases:
- Bard
---
# Bard
*Source: Player's Handbook (2024) p. 58. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='6'></th><th colspan='9'>Spell Slots per Spell Level</th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Bardic Die</th><th class="value">Cantrips</th><th class="value">Prepared Spells</th><th class="spellSlot">1st</th><th class="spellSlot">2nd</th><th class="spellSlot">3rd</th><th class="spellSlot">4th</th><th class="spellSlot">5th</th><th class="spellSlot">6th</th><th class="spellSlot">7th</th><th class="spellSlot">8th</th><th class="spellSlot">9th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Bardic Inspiration (Level 1)' class='internal-link'>Bardic Inspiration</a>, <a href='#Spellcasting (Level 1)' class='internal-link'>Spellcasting</a></td><td class="value">1d6</td><td class="value">2</td><td class="value">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Expertise (Level 2)' class='internal-link'>Expertise</a>, <a href='#Jack of All Trades (Level 2)' class='internal-link'>Jack of All Trades</a></td><td class="value">1d6</td><td class="value">2</td><td class="value">5</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Bard Subclass (Level 3)' class='internal-link'>Bard Subclass</a></td><td class="value">1d6</td><td class="value">2</td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">1d6</td><td class="value">3</td><td class="value">7</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Font of Inspiration (Level 5)' class='internal-link'>Font of Inspiration</a></td><td class="value">1d8</td><td class="value">3</td><td class="value">9</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Subclass Feature (Level 6)' class='internal-link'>Subclass Feature</a></td><td class="value">1d8</td><td class="value">3</td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Countercharm (Level 7)' class='internal-link'>Countercharm</a></td><td class="value">1d8</td><td class="value">3</td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">1d8</td><td class="value">3</td><td class="value">12</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Expertise (Level 9)' class='internal-link'>Expertise</a></td><td class="value">1d8</td><td class="value">3</td><td class="value">14</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Magical Secrets (Level 10)' class='internal-link'>Magical Secrets</a></td><td class="value">1d10</td><td class="value">4</td><td class="value">15</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"></td><td class="value">1d10</td><td class="value">4</td><td class="value">16</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">1d10</td><td class="value">4</td><td class="value">16</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"></td><td class="value">1d10</td><td class="value">4</td><td class="value">17</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Subclass Feature (Level 14)' class='internal-link'>Subclass Feature</a></td><td class="value">1d10</td><td class="value">4</td><td class="value">17</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"></td><td class="value">1d12</td><td class="value">4</td><td class="value">18</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">1d12</td><td class="value">4</td><td class="value">18</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"></td><td class="value">1d12</td><td class="value">4</td><td class="value">19</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Superior Inspiration (Level 18)' class='internal-link'>Superior Inspiration</a></td><td class="value">1d12</td><td class="value">4</td><td class="value">20</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Epic Boon (Level 19)' class='internal-link'>Epic Boon</a></td><td class="value">1d12</td><td class="value">4</td><td class="value">21</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Words of Creation (Level 20)' class='internal-link'>Words of Creation</a></td><td class="value">1d12</td><td class="value">4</td><td class="value">22</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Bard level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON  (minimum of 1)

## Starting Bard

- **Saving Throw Proficiencies**: Charisma, Dexterity
- **Skill Proficiencies**: Choose 3 [skills](skills.md)
- **Weapon Proficiencies**: Simple weapons
- **Tool Proficiencies**: Choose three [Musical Instruments](musical-instrument-xphb.md)
- **Armor Training**: [Light armor](item-types.md#Light%20Armor)

**Starting Equipment:** *Choose A or B:* (A) [Leather Armor](leather-armor-xphb.md), 2 [Dagger](dagger-xphb.md), [Musical Instrument](musical-instrument-xphb.md) of your choice, [Entertainer's Pack](entertainers-pack-xphb.md), 19 GP; or (B) 90 GP

## Multiclassing Bard

- **Skill Proficiencies**: Choose 1 [skill](skills.md)
- **Tool Proficiencies**: Choose one [Musical Instrument](musical-instrument-xphb.md)
- **Armor Training**: [Light armor](item-types.md#Light%20Armor)

## Bard

Invoking magic through music, dance, and verse, Bards are expert at inspiring others, soothing hurts, disheartening foes, and creating illusions. Bards believe the multiverse was spoken into existence and that remnants of its Words of Creation still resound and glimmer on every plane of existence. Bardic magic attempts to harness those words, which transcend any language.

Anything can inspire a new song or tale, so Bards are fascinated by almost everything. They become masters of many things, including performing music, working magic, and making jests.

A Bard's life is spent traveling, gathering lore, telling stories, and living on the gratitude of audiences, much like any other entertainer. But Bards' depth of knowledge and mastery of magic sets them apart.

## Class Features

### Bardic Inspiration (Level 1)

You can supernaturally inspire others through words, music, or dance. This inspiration is represented by your Bardic Inspiration die, which is a `d6`.

#### Using Bardic Inspiration

As a [Bonus Action](bonus-action-xphb.md), you can inspire another creature within 60 feet of yourself who can see or hear you. That creature gains one of your Bardic Inspiration dice. A creature can have only one Bardic Inspiration die at a time.

Once within the next hour when the creature fails a [D20 Test](d20-test-xphb.md), the creature can roll the Bardic Inspiration die and add the number rolled to the `d20`, potentially turning the failure into a success. A Bardic Inspiration die is expended when it's rolled.

#### Number of Uses

You can confer a Bardic Inspiration die a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a [Long Rest](long-rest-xphb.md).

#### At Higher Levels

Your Bardic Inspiration die changes when you reach certain Bard levels, as shown in the Bardic Die column of the Bard Features table. The die becomes a `d8` at level 5, a `d10` at level 10, and a `d12` at level 15.

### Spellcasting (Level 1)

You have learned to cast spells through your bardic arts. See "chapter 7" for the rules on spellcasting. The information below details how you use those rules with Bard spells, which appear in the Bard spell list later in the class's description.

#### Cantrips

You know two cantrips of your choice from the Bard spell list. [Dancing Lights](dancing-lights-xphb.md) and [Vicious Mockery](vicious-mockery-xphb.md) are recommended.

Whenever you gain a Bard level, you can replace one of your cantrips with another cantrip of your choice from the Bard spell list.

When you reach Bard levels 4 and 10, you learn another cantrip of your choice from the Bard spell list, as shown in the Cantrips column of the Bard Features table.

#### Spell Slots

The Bard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a [Long Rest](long-rest-xphb.md).

#### Prepared Spells of Level 1+

You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Bard spell list. [Charm Person](charm-person-xphb.md), [Color Spray](color-spray-xphb.md), [Dissonant Whispers](dissonant-whispers-xphb.md), and [Healing Word](healing-word-xphb.md) are recommended.

The number of spells on your list increases as you gain Bard levels, as shown in the Prepared Spells column of the Bard Features table. Whenever that number increases, choose additional spells from the Bard spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Bard, your list of prepared spells can include six spells of levels 1 and 2 in any combination.

If another Bard feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Bard spells for you.

#### Changing Your Prepared Spells

Whenever you gain a Bard level, you can replace one spell on your list with another Bard spell for which you have spell slots.

#### Spellcasting Ability

Charisma is your spellcasting ability for your Bard spells.

#### Spellcasting Focus

You can use a [Musical Instrument](musical-instrument-xphb.md) as a [Spellcasting Focus](spellcasting-focus-xphb.md) for your Bard spells.

### Expertise (Level 2)

You gain [Expertise](expertise-xphb.md) in two of your skill proficiencies of your choice. [Performance](skills.md#Performance) and [Persuasion](skills.md#Persuasion) are recommended if you have proficiency in them.

At Bard level 9, you gain [Expertise](expertise-xphb.md) in two more of your skill proficiencies of your choice.

### Jack of All Trades (Level 2)

You can add half your [Proficiency Bonus](proficiency-xphb.md) (round down) to any ability check you make that uses a skill proficiency you lack and that doesn't otherwise use your [Proficiency Bonus](proficiency-xphb.md).

For example, if you make a Strength ([Athletics](skills.md#Athletics)) check and lack [Athletics](skills.md#Athletics) proficiency, you can add half your [Proficiency Bonus](proficiency-xphb.md) to the check.

> [!note] A Bard's Repertoire
> 
> Does your Bard beat a [drum](drum-xphb.md) while chanting the deeds of ancient heroes? Strum a [lute](lute-xphb.md) while crooning romantic tunes? Perform arias of stirring power? Recite dramatic monologues from classic tragedies? Use the rhythm of a folk dance to coordinate the movement of allies in battle? Compose naughty limericks?
> 
> When you play a Bard, consider the style of artistic performance you favor, the moods you might invoke, and the themes that inspire your own creations. Are your poems inspired by moments of natural beauty, or are they brooding reflections on loss? Do you prefer lofty hymns or rowdy tavern songs? Are you drawn to laments for the fallen or celebrations of joy? Do you dance merry jigs or perform elaborate interpretive choreography? Do you focus on one style of performance or strive to master them all?
^a-bards-repertoire

### Bard Subclass (Level 3)

You gain a Bard subclass of your choice. A subclass is a specialization that grants you features at certain Bard levels. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower.

### Ability Score Improvement (Level 4)

You gain the [Ability Score Improvement](ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify. You gain this feature again at Bard levels 8, 12, and 16.

### Font of Inspiration (Level 5)

You now regain all your expended uses of Bardic Inspiration when you finish a [Short](short-rest-xphb.md) or [Long Rest](long-rest-xphb.md).

In addition, you can expend a spell slot (no action required) to regain one expended use of Bardic Inspiration.

### Subclass Feature (Level 6)

You gain a feature from your Bard Subclass.

### Countercharm (Level 7)

You can use musical notes or words of power to disrupt mind-influencing effects. If you or a creature within 30 feet of you fails a saving throw against an effect that applies the [Charmed](conditions.md#Charmed) or [Frightened](conditions.md#Frightened) condition, you can take a [Reaction](reaction-xphb.md) to cause the save to be rerolled, and the new roll has [Advantage](advantage-xphb.md).

### Ability Score Improvement (Level 8)

You gain the [Ability Score Improvement](ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Expertise (Level 9)

You gain [Expertise](expertise-xphb.md) in two of your Skill Proficiencies of your choice.

### Magical Secrets (Level 10)

You've learned secrets from various magical traditions. Whenever you reach a Bard level (including this level) and the Prepared Spells number in the Bard Features table increases, you can choose any of your new prepared spells from the Bard, Cleric, Druid, and Wizard spell lists, and the chosen spells count as Bard spells for you (see a class's section for its spell list). In addition, whenever you replace a spell prepared for this class, you can replace it with a spell from those lists.

### Ability Score Improvement (Level 12)

You gain the [Ability Score Improvement](ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Subclass Feature (Level 14)

You gain a feature from your Bard Subclass.

### Ability Score Improvement (Level 16)

You gain the [Ability Score Improvement](ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Superior Inspiration (Level 18)

When you roll [Initiative](initiative-xphb.md), you regain expended uses of Bardic Inspiration until you have two if you have fewer than that.

### Epic Boon (Level 19)

You gain an Epic Boon feat or another feat of your choice for which you qualify. [Boon of Spell Recall](boon-of-spell-recall-xphb.md) is recommended.

### Words of Creation (Level 20)

You have mastered two of the Words of Creation: the words of life and death. You therefore always have the [Power Word Heal](power-word-heal-xphb.md) and [Power Word Kill](power-word-kill-xphb.md) spells prepared. When you cast either spell, you can target a second creature with it if that creature is within 10 feet of the first target.