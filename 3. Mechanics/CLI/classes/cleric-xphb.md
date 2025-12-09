---
obsidianUIMode: preview
cssclasses:
- json5e-class
tags:
- ttrpg-cli/class/cleric
- ttrpg-cli/compendium/src/5e/xphb
aliases:
- Cleric
---
# Cleric
*Source: Player's Handbook (2024) p. 68. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='6'></th><th colspan='9'>Spell Slots per Spell Level</th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Channel Divinity</th><th class="value">Cantrips</th><th class="value">Prepared Spells</th><th class="spellSlot">1st</th><th class="spellSlot">2nd</th><th class="spellSlot">3rd</th><th class="spellSlot">4th</th><th class="spellSlot">5th</th><th class="spellSlot">6th</th><th class="spellSlot">7th</th><th class="spellSlot">8th</th><th class="spellSlot">9th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Spellcasting (Level 1)' class='internal-link'>Spellcasting</a>, <a href='#Divine Order (Level 1)' class='internal-link'>Divine Order</a></td><td class="value">⏤</td><td class="value">3</td><td class="value">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Channel Divinity (Level 2)' class='internal-link'>Channel Divinity</a></td><td class="value">2</td><td class="value">3</td><td class="value">5</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Cleric Subclass (Level 3)' class='internal-link'>Cleric Subclass</a></td><td class="value">2</td><td class="value">3</td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">2</td><td class="value">4</td><td class="value">7</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Sear Undead (Level 5)' class='internal-link'>Sear Undead</a></td><td class="value">2</td><td class="value">4</td><td class="value">9</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Subclass Feature (Level 6)' class='internal-link'>Subclass Feature</a></td><td class="value">3</td><td class="value">4</td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Blessed Strikes (Level 7)' class='internal-link'>Blessed Strikes</a></td><td class="value">3</td><td class="value">4</td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">4</td><td class="value">12</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"></td><td class="value">3</td><td class="value">4</td><td class="value">14</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Divine Intervention (Level 10)' class='internal-link'>Divine Intervention</a></td><td class="value">3</td><td class="value">5</td><td class="value">15</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"></td><td class="value">3</td><td class="value">5</td><td class="value">16</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">5</td><td class="value">16</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"></td><td class="value">3</td><td class="value">5</td><td class="value">17</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Improved Blessed Strikes (Level 14)' class='internal-link'>Improved Blessed Strikes</a></td><td class="value">3</td><td class="value">5</td><td class="value">17</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"></td><td class="value">3</td><td class="value">5</td><td class="value">18</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">5</td><td class="value">18</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Subclass Feature (Level 17)' class='internal-link'>Subclass Feature</a></td><td class="value">3</td><td class="value">5</td><td class="value">19</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"></td><td class="value">4</td><td class="value">5</td><td class="value">20</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Epic Boon (Level 19)' class='internal-link'>Epic Boon</a></td><td class="value">4</td><td class="value">5</td><td class="value">21</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Greater Divine Intervention (Level 20)' class='internal-link'>Greater Divine Intervention</a></td><td class="value">4</td><td class="value">5</td><td class="value">22</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Cleric level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON  (minimum of 1)

## Starting Cleric

- **Saving Throw Proficiencies**: Charisma, Wisdom
- **Skill Proficiencies**: *Choose 2:* [History](skills.md#History), [Insight](skills.md#Insight), [Medicine](skills.md#Medicine), [Persuasion](skills.md#Persuasion), or [Religion](skills.md#Religion)
- **Weapon Proficiencies**: Simple weapons
- **Armor Training**: [Light armor](item-types.md#Light%20Armor), [Medium armor](item-types.md#Medium%20Armor), and [Shields](3.%20Mechanics/CLI/items/shield-xphb.md)

**Starting Equipment:** *Choose A or B:* (A) [Chain Shirt](chain-shirt-xphb.md), [Shield](3.%20Mechanics/CLI/items/shield-xphb.md), [Mace](mace-xphb.md), [Holy Symbol](holy-symbol-xphb.md), [Priest's Pack](priests-pack-xphb.md), 7 GP; or (B) 110 GP

## Multiclassing Cleric

- **Armor Training**: [Light armor](item-types.md#Light%20Armor), [Medium armor](item-types.md#Medium%20Armor), [Shields](3.%20Mechanics/CLI/items/shield-xphb.md)

## Cleric

Clerics draw power from the realms of the gods and harness it to work miracles. Blessed by a deity, a pantheon, or another immortal entity, a Cleric can reach out to the divine magic of the Outer Planes—where gods dwell—and channel it to bolster people and battle foes.

Because their power is a divine gift, Clerics typically associate themselves with temples dedicated to the deity or other immortal force that unlocked their magic. Harnessing divine magic doesn't rely on specific training, yet Clerics might learn prayers and rites that help them draw on power from the Outer Planes.

Not every member of a temple or shrine is a Cleric. Some priests are called to a simple life of temple service, carrying out their devotion through prayer and rituals, not through magic. Many mortals claim to speak for the gods, but few can marshal the power of those gods the way a Cleric can.

## Class Features

### Spellcasting (Level 1)

You have learned to cast spells through prayer and meditation. See "chapter 7" for the rules on spellcasting. The information below details how you use those rules with Cleric spells, which appear on the Cleric spell list later in the class's description.

#### Cantrips

You know three cantrips of your choice from the Cleric spell list. [Guidance](guidance-xphb.md), [Sacred Flame](sacred-flame-xphb.md), and [Thaumaturgy](thaumaturgy-xphb.md) are recommended.

Whenever you gain a Cleric level, you can replace one of your cantrips with another cantrip of your choice from the Cleric spell list.

When you reach Cleric levels 4 and 10, you learn another cantrip of your choice from the Cleric spell list, as shown in the Cantrips column of the Cleric Features table.

#### Spell Slots

The Cleric Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a [Long Rest](long-rest-xphb.md).

#### Prepared Spells of Level 1+

You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Cleric spell list. [Bless](bless-xphb.md), [Cure Wounds](cure-wounds-xphb.md), [Guiding Bolt](guiding-bolt-xphb.md), and [Shield of Faith](shield-of-faith-xphb.md) are recommended.

The number of spells on your list increases as you gain Cleric levels, as shown in the Prepared Spells column of the Cleric Features table. Whenever that number increases, choose additional spells from the Cleric spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Cleric, your list of prepared spells can include six spells of levels 1 and 2 in any combination.

If another Cleric feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Cleric spells for you.

#### Changing Your Prepared Spells

Whenever you finish a [Long Rest](long-rest-xphb.md), you can change your list of prepared spells, replacing any of the spells there with other Cleric spells for which you have spell slots.

#### Spellcasting Ability

Wisdom is your spellcasting ability for your Cleric spells.

#### Spellcasting Focus

You can use a [Holy Symbol](holy-symbol-xphb.md) as a [Spellcasting Focus](spellcasting-focus-xphb.md) for your Cleric spells.

### Divine Order (Level 1)

You have dedicated yourself to one of the following sacred roles of your choice.

- **Protector**  

    Trained for battle, you gain proficiency with Martial weapons and training with Heavy armor.  

- **Thaumaturge**  

    You know one extra cantrip from the Cleric spell list. In addition, your mystical connection to the divine gives you a bonus to your Intelligence ([Arcana](skills.md#Arcana) or [Religion](skills.md#Religion)) checks. The bonus equals your Wisdom modifier (minimum of +1).  

### Channel Divinity (Level 2)

You can channel divine energy directly from the Outer Planes to fuel magical effects. You start with two such effects: Divine Spark and Turn Undead, each of which is described below. Each time you use this class's Channel Divinity, choose which Channel Divinity effect from this class to create. You gain additional effect options at higher Cleric levels.

You can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a [Short Rest](short-rest-xphb.md), and you regain all expended uses when you finish a [Long Rest](long-rest-xphb.md). You gain additional uses when you reach certain Cleric levels, as shown in the Channel Divinity column of the Cleric Features table.

If a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class's Spellcasting feature.

### Divine Spark (Level 2)

As a [Magic](actions.md#Magic) action, you point your [Holy Symbol](holy-symbol-xphb.md) at another creature you can see within 30 feet of yourself and focus divine energy at it. Roll `1d8` and add your Wisdom modifier. You either restore [Hit Points](hit-points-xphb.md) to the creature equal to that total or force the creature to make a Constitution saving throw. On a failed save, the creature takes Necrotic or Radiant damage (your choice) equal to that total. On a successful save, the creature takes half as much damage (round down).

You roll an additional `d8` when you reach Cleric levels 7 (`2d8`), 13 (`3d8`), and 18 (`4d8`).

### Turn Undead (Level 2)

As a [Magic](actions.md#Magic) action, you present your [Holy Symbol](holy-symbol-xphb.md) and censure Undead creatures. Each Undead of your choice within 30 feet of you must make a Wisdom saving throw. If the creature fails its save, it has the [Frightened](conditions.md#Frightened) and [Incapacitated](conditions.md#Incapacitated) conditions for 1 minute. For that duration, it tries to move as far from you as it can on its turns. This effect ends early on the creature if it takes any damage, if you have the [Incapacitated](conditions.md#Incapacitated) condition, or if you die.

### Cleric Subclass (Level 3)

You gain a Cleric subclass of your choice. A subclass is a specialization that grants you features at certain Cleric levels. For the rest of your career, you gain each of your subclass's features that are of your Cleric level or lower.

### Ability Score Improvement (Level 4)

You gain the [Ability Score Improvement](ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify. You gain this feature again at Cleric levels 8, 12, and 16.

### Sear Undead (Level 5)

Whenever you use Turn Undead, you can roll a number of d8s equal to your Wisdom modifier (minimum of `1d8`) and add the rolls together. Each Undead that fails its saving throw against that use of Turn Undead takes Radiant damage equal to the roll's total. This damage doesn't end the turn effect.

### Subclass Feature (Level 6)

You gain a feature from your Cleric Subclass.

### Blessed Strikes (Level 7)

Divine power infuses you in battle. You gain one of the following options of your choice (if you get either option from a Cleric subclass in an older book, use only the option you choose for this feature).

### Divine Strike (Level 7)

Once on each of your turns when you hit a creature with an attack roll using a weapon, you can cause the target to take an extra `1d8` Necrotic or Radiant damage (your choice).

### Potent Spellcasting (Level 7)

Add your Wisdom modifier to the damage you deal with any Cleric cantrip.

### Ability Score Improvement (Level 8)

You gain the [Ability Score Improvement](ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Divine Intervention (Level 10)

You can call on your deity or pantheon to intervene on your behalf. As a [Magic](actions.md#Magic) action, choose any Cleric spell of level 5 or lower that doesn't require a [Reaction](reaction-xphb.md) to cast. As part of the same action, you cast that spell without expending a spell slot or needing Material components. You can't use this feature again until you finish a [Long Rest](long-rest-xphb.md).

### Ability Score Improvement (Level 12)

You gain the [Ability Score Improvement](ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Improved Blessed Strikes (Level 14)

The option you chose for Blessed Strikes grows more powerful.

#### Divine Strike

The extra damage of your Divine Strike increases to `2d8`.

#### Potent Spellcasting

When you cast a Cleric cantrip and deal damage to a creature with it, you can give vitality to yourself or another creature within 60 feet of yourself, granting a number of [Temporary Hit Points](temporary-hit-points-xphb.md) equal to twice your Wisdom modifier.

### Ability Score Improvement (Level 16)

You gain the [Ability Score Improvement](ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Subclass Feature (Level 17)

You gain a feature from your Cleric Subclass.

### Epic Boon (Level 19)

You gain an Epic Boon feat or another feat of your choice for which you qualify. [Boon of Fate](boon-of-fate-xphb.md) is recommended.

### Greater Divine Intervention (Level 20)

You can call on even more powerful divine intervention. When you use your Divine Intervention feature, you can choose [Wish](wish-xphb.md) when you select a spell. If you do so, you can't use Divine Intervention again until you finish `2d4` Long Rests.