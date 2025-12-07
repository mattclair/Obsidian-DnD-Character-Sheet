---
obsidianUIMode: preview
cssclasses:
- json5e-class
tags:
- ttrpg-cli/compendium/src/5e/xphb
- ttrpg-cli/subclass/fighter/eldritch-knight
aliases:
- Eldritch Knight
---
# Eldritch Knight
*[Fighter](fighter-xphb.md): Fighter Subclass*  
*Source: Player's Handbook (2024) p. 96*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='4'></th><th colspan='4'>Spell Slots per Spell Level</th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Spells Prepared</th><th class="spellSlot">1st</th><th class="spellSlot">2nd</th><th class="spellSlot">3rd</th><th class="spellSlot">4th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"></td><td class="value">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"></td><td class="value">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Eldritch Knight (Level 3)' class='internal-link'>Eldritch Knight</a></td><td class="value">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"></td><td class="value">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"></td><td class="value">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"></td><td class="value">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#War Magic (Level 7)' class='internal-link'>War Magic</a></td><td class="value">5</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"></td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"></td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Eldritch Strike (Level 10)' class='internal-link'>Eldritch Strike</a></td><td class="value">7</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"></td><td class="value">8</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"></td><td class="value">8</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"></td><td class="value">9</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"></td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Arcane Charge (Level 15)' class='internal-link'>Arcane Charge</a></td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"></td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"></td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Improved War Magic (Level 18)' class='internal-link'>Improved War Magic</a></td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"></td><td class="value">12</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"></td><td class="value">13</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> </tbody></table>

^class-progression


## Class Features

### Eldritch Knight (Level 3)

*Support Combat Skills with Arcane Magic*

Eldritch Knights combine the martial mastery common to all Fighters with a careful study of magic. Their spells both complement and extend their combat skills, providing additional protection to shore up their armor and also allowing them to engage many foes at once with explosive magic.

### Spellcasting (Level 3)

You have learned to cast spells. See "chapter 7" for the rules on spellcasting. The information below details how you use those rules as an Eldritch Knight.

#### Cantrips

You know two cantrips of your choice from the Wizard spell list (see that class's section for its list). [Ray of Frost](3.%20Mechanics/CLI/spells/ray-of-frost-xphb.md) and [Shocking Grasp](3.%20Mechanics/CLI/spells/shocking-grasp-xphb.md) are recommended. Whenever you gain a Fighter level, you can replace one of these cantrips with another cantrip of your choice from the Wizard spell list.

When you reach Fighter level 10, you learn another Wizard cantrip of your choice.

#### Spell Slots

The Eldritch Knight Spellcasting table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

#### Prepared Spells of Level 1+

You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose three level 1 spells from the Wizard spell list. [Burning Hands](3.%20Mechanics/CLI/spells/burning-hands-xphb.md), [Jump](3.%20Mechanics/CLI/spells/jump-xphb.md), and [Shield](3.%20Mechanics/CLI/spells/shield-xphb.md) are recommended.

The number of spells on your list increases as you gain Fighter levels, as shown in the Prepared Spells column of the Eldritch Knight Spellcasting table. Whenever that number increases, choose additional spells from the Wizard spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 7 Fighter, your list of prepared spells can include five Wizard spells of levels 1 and 2 in any combination.

#### Changing your Prepared Spells

Whenever you gain a Fighter level, you can replace one spell on your list with another Wizard spell for which you have spell slots.

#### Spellcasting Ability

Intelligence is your spellcasting ability for your Wizard spells.

#### Spellcasting Focus

You can use an [Arcane Focus](3.%20Mechanics/CLI/items/arcane-focus-xphb.md) as a [Spellcasting Focus](3.%20Mechanics/CLI/rules/variant-rules/spellcasting-focus-xphb.md) for your Wizard spells.

### War Bond (Level 3)

You learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour, which can be done during a [Short Rest](3.%20Mechanics/CLI/rules/variant-rules/short-rest-xphb.md). The weapon must be within your reach throughout the ritual, at the conclusion of which you touch the weapon and forge the bond. The bond fails if another Fighter is bonded to the weapon or if the weapon is a magic item to which someone else is attuned.

Once you have bonded a weapon to yourself, you can't be disarmed of that weapon unless you have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated) condition. If it is on the same plane of existence, you can summon that weapon as a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md), causing it to teleport instantly to your hand.

You can have up to two bonded weapons, but you can summon only one at a time with a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md). If you attempt to bond with a third weapon, you must break the bond with one of the other two.

### War Magic (Level 7)

When you take the [Attack](3.%20Mechanics/CLI/rules/actions.md#Attack) action on your turn, you can replace one of the attacks with a casting of one of your Wizard cantrips that has a casting time of an action.

### Eldritch Strike (Level 10)

You learn how to make your weapon strikes undercut a creature's ability to withstand your spells. When you hit a creature with an attack using a weapon, that creature has [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md) on the next saving throw it makes against a spell you cast before the end of your next turn.

### Arcane Charge (Level 15)

When you use your Action Surge, you can teleport up to 30 feet to an unoccupied space you can see. You can teleport before or after the additional action.

### Improved War Magic (Level 18)

When you take the [Attack](3.%20Mechanics/CLI/rules/actions.md#Attack) action on your turn, you can replace two of the attacks with a casting of one of your level 1 or level 2 Wizard spells that has a casting time of an action.