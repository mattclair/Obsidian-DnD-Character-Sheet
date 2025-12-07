---
obsidianUIMode: preview
cssclasses:
- json5e-class
tags:
- ttrpg-cli/compendium/src/5e/xphb
- ttrpg-cli/subclass/rogue/arcane-trickster
aliases:
- Arcane Trickster
---
# Arcane Trickster
*[Rogue](rogue-xphb.md): Rogue Subclass*  
*Source: Player's Handbook (2024) p. 132*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='4'></th><th colspan='4'>Spell Slots per Spell Level</th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Prepared Spells</th><th class="spellSlot">1st</th><th class="spellSlot">2nd</th><th class="spellSlot">3rd</th><th class="spellSlot">4th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"></td><td class="value">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"></td><td class="value">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Arcane Trickster (Level 3)' class='internal-link'>Arcane Trickster</a></td><td class="value">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"></td><td class="value">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"></td><td class="value">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"></td><td class="value">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"></td><td class="value">5</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"></td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Magical Ambush (Level 9)' class='internal-link'>Magical Ambush</a></td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"></td><td class="value">7</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"></td><td class="value">8</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"></td><td class="value">8</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Versatile Trickster (Level 13)' class='internal-link'>Versatile Trickster</a></td><td class="value">9</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"></td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"></td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"></td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Spell Thief (Level 17)' class='internal-link'>Spell Thief</a></td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"></td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"></td><td class="value">12</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"></td><td class="value">13</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> </tbody></table>

^class-progression


## Class Features

### Arcane Trickster (Level 3)

*Enhance Stealth with Arcane Spells*

Some Rogues enhance their fine-honed skills of stealth and agility with spells, learning magical tricks to aid them in their trade. Some Arcane Tricksters use their talents as pickpockets and burglars, while others are pranksters.

### Spellcasting (Level 3)

You have learned to cast spells. See "chapter 7" for the rules on spellcasting. The information below details how you use those rules as an Arcane Trickster.

#### Cantrips

You know three cantrips: [Mage Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md) and two other cantrips of your choice from the Wizard spell list (see that class's section for its list). [Mind Sliver](3.%20Mechanics/CLI/spells/mind-sliver-xphb.md) and [Minor Illusion](3.%20Mechanics/CLI/spells/minor-illusion-xphb.md) are recommended.

Whenever you gain a Rogue level, you can replace one of your cantrips, except [Mage Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md), with another Wizard cantrip of your choice.

When you reach Rogue level 10, you learn another Wizard cantrip of your choice.

#### Spell Slots

The Arcane Trickster Spellcasting table shows how many spell slots you have to cast your level 1+ spells. You regain all expended spell slots when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

#### Prepared Spells of 1st+ Level

You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose three level 1 Wizard spells. [Charm Person](3.%20Mechanics/CLI/spells/charm-person-xphb.md), [Disguise Self](3.%20Mechanics/CLI/spells/disguise-self-xphb.md), and [Fog Cloud](3.%20Mechanics/CLI/spells/fog-cloud-xphb.md) are recommended.

The number of spells on your list increases as you gain Rogue levels, as shown in the Prepared Spells column of the Arcane Trickster Spellcasting table. Whenever that number increases, choose additional Wizard spells until the number of spells on your list matches the number in the Arcane Trickster Spellcasting table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 7 Rogue, your list of prepared spells can include five Wizard spells of level 1 or 2 in any combination.

#### Changing Your Prepared Spells

Whenever you gain a Rogue level, you can replace one spell on your list with another Wizard spell for which you have spell slots.

#### Spellcasting Ability

Intelligence is your spellcasting ability for your Wizard spells.

#### Spellcasting Focus

You can use an [Arcane Focus](3.%20Mechanics/CLI/items/arcane-focus-xphb.md) as a [Spellcasting Focus](3.%20Mechanics/CLI/rules/variant-rules/spellcasting-focus-xphb.md) for your Wizard spells.

### Mage Hand Legerdemain (Level 3)

When you cast [Mage Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md), you can cast it as a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md), and you can make the spectral hand [Invisible](3.%20Mechanics/CLI/rules/conditions.md#Invisible). You can control the hand as a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md), and through it, you can make Dexterity ([Sleight of Hand](3.%20Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand)) checks.

### Magical Ambush (Level 9)

If you have the [Invisible](3.%20Mechanics/CLI/rules/conditions.md#Invisible) condition when you cast a spell on a creature, it has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md) on any saving throw it makes against the spell on the same turn.

### Versatile Trickster (Level 13)

You gain the ability to distract targets with your [Mage Hand](3.%20Mechanics/CLI/spells/mage-hand-xphb.md). When you use the Trip option of your Cunning Strike on a creature, you can also use that option on another creature within 5 feet of the spectral hand.

### Spell Thief (Level 17)

You gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster.

Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can take a [Reaction](3.%20Mechanics/CLI/rules/variant-rules/reaction-xphb.md) to force the creature to make an Intelligence saving throw. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least level 1 and of a level you can cast (it doesn't need to be a Wizard spell). For the next 8 hours, you have the spell prepared. The creature can't cast it until the 8 hours have passed.

Once you steal a spell with this feature, you can't use this feature again until you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).