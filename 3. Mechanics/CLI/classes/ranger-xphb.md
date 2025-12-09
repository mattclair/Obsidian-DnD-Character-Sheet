---
obsidianUIMode: preview
cssclasses:
- json5e-class
tags:
- ttrpg-cli/class/ranger
- ttrpg-cli/compendium/src/5e/xphb
aliases:
- Ranger
---
# Ranger
*Source: Player's Handbook (2024) p. 118. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='5'></th><th colspan='5'>Spell Slots per Spell Level</th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Favored Enemy</th><th class="value">Prepared Spells</th><th class="spellSlot">1st</th><th class="spellSlot">2nd</th><th class="spellSlot">3rd</th><th class="spellSlot">4th</th><th class="spellSlot">5th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Spellcasting (Level 1)' class='internal-link'>Spellcasting</a>, <a href='#Favored Enemy (Level 1)' class='internal-link'>Favored Enemy</a>, <a href='#Weapon Mastery (Level 1)' class='internal-link'>Weapon Mastery</a></td><td class="value">2</td><td class="value">2</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Deft Explorer (Level 2)' class='internal-link'>Deft Explorer</a>, <a href='#Fighting Style (Level 2)' class='internal-link'>Fighting Style</a></td><td class="value">2</td><td class="value">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Ranger Subclass (Level 3)' class='internal-link'>Ranger Subclass</a></td><td class="value">2</td><td class="value">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">2</td><td class="value">5</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Extra Attack (Level 5)' class='internal-link'>Extra Attack</a></td><td class="value">3</td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Roving (Level 6)' class='internal-link'>Roving</a></td><td class="value">3</td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Subclass Feature (Level 7)' class='internal-link'>Subclass Feature</a></td><td class="value">3</td><td class="value">7</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">7</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Expertise (Level 9)' class='internal-link'>Expertise</a></td><td class="value">4</td><td class="value">9</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Tireless (Level 10)' class='internal-link'>Tireless</a></td><td class="value">4</td><td class="value">9</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Subclass Feature (Level 11)' class='internal-link'>Subclass Feature</a></td><td class="value">4</td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Relentless Hunter (Level 13)' class='internal-link'>Relentless Hunter</a></td><td class="value">5</td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Nature's Veil (Level 14)' class='internal-link'>Nature's Veil</a></td><td class="value">5</td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Subclass Feature (Level 15)' class='internal-link'>Subclass Feature</a></td><td class="value">5</td><td class="value">12</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">5</td><td class="value">12</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Precise Hunter (Level 17)' class='internal-link'>Precise Hunter</a></td><td class="value">6</td><td class="value">14</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Feral Senses (Level 18)' class='internal-link'>Feral Senses</a></td><td class="value">6</td><td class="value">14</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Epic Boon (Level 19)' class='internal-link'>Epic Boon</a></td><td class="value">6</td><td class="value">15</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Foe Slayer (Level 20)' class='internal-link'>Foe Slayer</a></td><td class="value">6</td><td class="value">15</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d10 per Ranger level
- **Hit Points at First Level:** 10 + CON
- **Hit Points at Higher Levels:** add 6 OR 1d10 + CON  (minimum of 1)

## Starting Ranger

- **Saving Throw Proficiencies**: Dexterity, Strength
- **Skill Proficiencies**: *Choose 3:* [Animal Handling](3.%20Mechanics/CLI/rules/skills.md#Animal%20Handling), [Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics), [Insight](3.%20Mechanics/CLI/rules/skills.md#Insight), [Investigation](3.%20Mechanics/CLI/rules/skills.md#Investigation), [Nature](3.%20Mechanics/CLI/rules/skills.md#Nature), [Perception](3.%20Mechanics/CLI/rules/skills.md#Perception), [Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth), or [Survival](3.%20Mechanics/CLI/rules/skills.md#Survival)
- **Weapon Proficiencies**: Simple weapons and Martial weapons
- **Armor Training**: [Light armor](3.%20Mechanics/CLI/rules/item-types.md#Light%20Armor), [Medium armor](3.%20Mechanics/CLI/rules/item-types.md#Medium%20Armor), and [Shields](3.%20Mechanics/CLI/items/shield-xphb.md)

**Starting Equipment:** *Choose A or B:* (A) [Studded Leather Armor](3.%20Mechanics/CLI/items/studded-leather-armor-xphb.md), [Scimitar](3.%20Mechanics/CLI/items/scimitar-xphb.md), [Shortsword](3.%20Mechanics/CLI/items/shortsword-xphb.md), [Longbow](3.%20Mechanics/CLI/items/longbow-xphb.md), [20 Arrows](3.%20Mechanics/CLI/items/arrows-20-xphb.md), [Quiver](3.%20Mechanics/CLI/items/quiver-xphb.md), [Druidic Focus](3.%20Mechanics/CLI/items/druidic-focus-xphb.md) ([sprig of mistletoe](3.%20Mechanics/CLI/items/sprig-of-mistletoe-xphb.md)), [Explorer's Pack](3.%20Mechanics/CLI/items/explorers-pack-xphb.md), and 7 GP; or (B) 150 GP

## Multiclassing Ranger

- **Skill Proficiencies**: *Choose 1:* [Animal Handling](3.%20Mechanics/CLI/rules/skills.md#Animal%20Handling), [Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics), [Insight](3.%20Mechanics/CLI/rules/skills.md#Insight), [Investigation](3.%20Mechanics/CLI/rules/skills.md#Investigation), [Nature](3.%20Mechanics/CLI/rules/skills.md#Nature), [Perception](3.%20Mechanics/CLI/rules/skills.md#Perception), [Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth), or [Survival](3.%20Mechanics/CLI/rules/skills.md#Survival)
- **Weapon Proficiencies**: Martial weapons
- **Armor Training**: [Light armor](3.%20Mechanics/CLI/rules/item-types.md#Light%20Armor), [Medium armor](3.%20Mechanics/CLI/rules/item-types.md#Medium%20Armor), [Shields](3.%20Mechanics/CLI/items/shield-xphb.md)

## Ranger

Far from bustling cities, amid the trees of trackless forests and across wide plains, Rangers keep their unending watch in the wilderness. Rangers learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble.

Thanks to their connection with nature, Rangers can also cast spells that harness primal powers of the wilderness. A Ranger's talents and magic are honed with deadly focus to protect the world from the ravages of monsters and tyrants.

## Class Features

### Spellcasting (Level 1)

You have learned to channel the magical essence of nature to cast spells. See "chapter 7" for the rules on spellcasting. The information below details how you use those rules with Ranger spells, which appear in the Ranger spell list later in the class's description.

#### Spell Slots

The Ranger Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

#### Prepared Spells of Level 1+

You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Ranger spells. [Cure Wounds](3.%20Mechanics/CLI/spells/cure-wounds-xphb.md) and [Ensnaring Strike](3.%20Mechanics/CLI/spells/ensnaring-strike-xphb.md) are recommended.

The number of spells on your list increases as you gain Ranger levels, as shown in the Prepared Spells column of the Ranger Features table. Whenever that number increases, choose additional Ranger spells until the number of spells on your list matches the number in the Ranger Features table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 5 Ranger, your list of prepared spells can include six Ranger spells of level 1 or 2 in any combination.

If another Ranger feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Ranger spells for you.

#### Changing Your Prepared Spells

Whenever you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md), you can replace one spell on your list with another Ranger spell for which you have spell slots.

#### Spellcasting Ability

Wisdom is your spellcasting ability for your Ranger spells.

#### Spellcasting Focus

You can use a [Druidic Focus](3.%20Mechanics/CLI/items/druidic-focus-xphb.md) as a [Spellcasting Focus](3.%20Mechanics/CLI/rules/variant-rules/spellcasting-focus-xphb.md) for your Ranger spells.

### Favored Enemy (Level 1)

You always have the [Hunter's Mark](3.%20Mechanics/CLI/spells/hunters-mark-xphb.md) spell prepared. You can cast it twice without expending a spell slot, and you regain all expended uses of this ability when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

The number of times you can cast the spell without a spell slot increases when you reach certain Ranger levels, as shown in the Favored Enemy column of the Ranger Features table.

### Weapon Mastery (Level 1)

Your training with weapons allows you to use the [mastery properties](3.%20Mechanics/CLI/rules/variant-rules/weapon-mastery-properties-xphb.md) of two kinds of weapons of your choice with which you have proficiency, such as [Longbows](3.%20Mechanics/CLI/items/longbow-xphb.md) and [Shortswords](3.%20Mechanics/CLI/items/shortsword-xphb.md).

Whenever you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md), you can change the kinds of weapons you chose. For example, you could switch to using the [mastery properties](3.%20Mechanics/CLI/rules/variant-rules/weapon-mastery-properties-xphb.md) of [Scimitars](3.%20Mechanics/CLI/items/scimitar-xphb.md) and [Longswords](3.%20Mechanics/CLI/items/longsword-xphb.md).

### Deft Explorer (Level 2)

Thanks to your travels, you gain the following benefits.

#### Expertise

Choose one of your skill proficiencies with which you lack [Expertise](3.%20Mechanics/CLI/rules/variant-rules/expertise-xphb.md). You gain [Expertise](3.%20Mechanics/CLI/rules/variant-rules/expertise-xphb.md) in that skill.

#### Languages

You know two languages of your choice from the language tables in "chapter 2".

### Fighting Style (Level 2)

You gain a Fighting Style feat of your choice. Instead of choosing one of those feats, you can choose the option below.

### Ranger Subclass (Level 3)

You gain a Ranger subclass of your choice. A subclass is a specialization that grants you features at certain Ranger levels. For the rest of your career, you gain each of your subclass's features that are of your Ranger level or lower.

### Ability Score Improvement (Level 4)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify. You gain this feature again at Ranger levels 8, 12, and 16.

### Extra Attack (Level 5)

You can attack twice instead of once whenever you take the [Attack](3.%20Mechanics/CLI/rules/actions.md#Attack) action on your turn.

### Roving (Level 6)

Your [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md) increases by 10 feet while you aren't wearing Heavy armor. You also have a [Climb Speed](3.%20Mechanics/CLI/rules/variant-rules/climb-speed-xphb.md) and a [Swim Speed](3.%20Mechanics/CLI/rules/variant-rules/swim-speed-xphb.md) equal to your [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md).

### Subclass Feature (Level 7)

You gain a feature from your Ranger Subclass.

### Ability Score Improvement (Level 8)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Expertise (Level 9)

Choose two of your skill proficiencies with which you lack [Expertise](3.%20Mechanics/CLI/rules/variant-rules/expertise-xphb.md). You gain [Expertise](3.%20Mechanics/CLI/rules/variant-rules/expertise-xphb.md) in those skills.

### Tireless (Level 10)

Primal forces now help fuel you on your journeys, granting you the following benefits.

#### Temporary Hit Points

As a [Magic](3.%20Mechanics/CLI/rules/actions.md#Magic) action, you can give yourself a number of [Temporary Hit Points](3.%20Mechanics/CLI/rules/variant-rules/temporary-hit-points-xphb.md) equal to `1d8` plus your Wisdom modifier (minimum of 1). You can use this action a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

#### Decrease Exhaustion

Whenever you finish a [Short Rest](3.%20Mechanics/CLI/rules/variant-rules/short-rest-xphb.md), your [Exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion) level, if any, decreases by 1.

### Subclass Feature (Level 11)

You gain a feature from your Ranger Subclass.

### Ability Score Improvement (Level 12)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Relentless Hunter (Level 13)

Taking damage can't break your [Concentration](3.%20Mechanics/CLI/rules/conditions.md#Concentration) on Hunter's Mark.

### Nature's Veil (Level 14)

You invoke spirits of nature to magically hide yourself. As a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md), you can give yourself the [Invisible](3.%20Mechanics/CLI/rules/conditions.md#Invisible) condition until the end of your next turn.

You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

### Subclass Feature (Level 15)

You gain a feature from your Ranger Subclass.

### Ability Score Improvement (Level 16)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Precise Hunter (Level 17)

You have [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md) on attack rolls against the creature currently marked by your Hunter's Mark.

### Feral Senses (Level 18)

Your connection to the forces of nature grants you [Blindsight](3.%20Mechanics/CLI/rules/senses.md#Blindsight) with a range of 30 feet.

### Epic Boon (Level 19)

You gain an Epic Boon feat or another feat of your choice for which you qualify. [Boon of Dimensional Travel](3.%20Mechanics/CLI/feats/boon-of-dimensional-travel-xphb.md) is recommended.

### Foe Slayer (Level 20)

The damage die of your Hunter's Mark is a `d10` rather than a `d6`.