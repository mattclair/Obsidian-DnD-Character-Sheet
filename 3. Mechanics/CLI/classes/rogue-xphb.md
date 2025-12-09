---
obsidianUIMode: preview
cssclasses:
- json5e-class
tags:
- ttrpg-cli/class/rogue
- ttrpg-cli/compendium/src/5e/xphb
aliases:
- Rogue
---
# Rogue
*Source: Player's Handbook (2024) p. 128. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='4'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Sneak Attack</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Expertise (Level 1)' class='internal-link'>Expertise</a>, <a href='#Sneak Attack (Level 1)' class='internal-link'>Sneak Attack</a>, <a href='#Thieves' Cant (Level 1)' class='internal-link'>Thieves' Cant</a>, <a href='#Weapon Mastery (Level 1)' class='internal-link'>Weapon Mastery</a></td><td class="value">1d6</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Cunning Action (Level 2)' class='internal-link'>Cunning Action</a></td><td class="value">1d6</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Rogue Subclass (Level 3)' class='internal-link'>Rogue Subclass</a>, <a href='#Steady Aim (Level 3)' class='internal-link'>Steady Aim</a></td><td class="value">2d6</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">2d6</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Cunning Strike (Level 5)' class='internal-link'>Cunning Strike</a>, <a href='#Uncanny Dodge (Level 5)' class='internal-link'>Uncanny Dodge</a></td><td class="value">3d6</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Expertise (Level 6)' class='internal-link'>Expertise</a></td><td class="value">3d6</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Evasion (Level 7)' class='internal-link'>Evasion</a>, <a href='#Reliable Talent (Level 7)' class='internal-link'>Reliable Talent</a></td><td class="value">4d6</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4d6</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Subclass Feature (Level 9)' class='internal-link'>Subclass Feature</a></td><td class="value">5d6</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 10)' class='internal-link'>Ability Score Improvement</a></td><td class="value">5d6</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Improved Cunning Strike (Level 11)' class='internal-link'>Improved Cunning Strike</a></td><td class="value">6d6</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">6d6</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Subclass Feature (Level 13)' class='internal-link'>Subclass Feature</a></td><td class="value">7d6</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Devious Strikes (Level 14)' class='internal-link'>Devious Strikes</a></td><td class="value">7d6</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Slippery Mind (Level 15)' class='internal-link'>Slippery Mind</a></td><td class="value">8d6</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">8d6</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Subclass Feature (Level 17)' class='internal-link'>Subclass Feature</a></td><td class="value">9d6</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Elusive (Level 18)' class='internal-link'>Elusive</a></td><td class="value">9d6</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Epic Boon (Level 19)' class='internal-link'>Epic Boon</a></td><td class="value">10d6</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Stroke of Luck (Level 20)' class='internal-link'>Stroke of Luck</a></td><td class="value">10d6</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Rogue level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON  (minimum of 1)

## Starting Rogue

- **Saving Throw Proficiencies**: Dexterity, Intelligence
- **Skill Proficiencies**: *Choose 4:* [Acrobatics](3.%20Mechanics/CLI/rules/skills.md#Acrobatics), [Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics), [Deception](3.%20Mechanics/CLI/rules/skills.md#Deception), [Insight](3.%20Mechanics/CLI/rules/skills.md#Insight), [Intimidation](3.%20Mechanics/CLI/rules/skills.md#Intimidation), [Investigation](3.%20Mechanics/CLI/rules/skills.md#Investigation), [Perception](3.%20Mechanics/CLI/rules/skills.md#Perception), [Persuasion](3.%20Mechanics/CLI/rules/skills.md#Persuasion), [Sleight of Hand](3.%20Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand), or [Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)
- **Weapon Proficiencies**: Simple weapons and Martial weapons that have the Finesse or Light property
- **Tool Proficiencies**: [Thieves' Tools](3.%20Mechanics/CLI/items/thieves-tools-xphb.md)
- **Armor Training**: [Light armor](3.%20Mechanics/CLI/rules/item-types.md#Light%20Armor)

**Starting Equipment:** *Choose A or B:* (A) [Leather Armor](3.%20Mechanics/CLI/items/leather-armor-xphb.md), 2 [Daggers](3.%20Mechanics/CLI/items/dagger-xphb.md), [Shortsword](3.%20Mechanics/CLI/items/shortsword-xphb.md), [Shortbow](3.%20Mechanics/CLI/items/shortbow-xphb.md), [20 Arrows](3.%20Mechanics/CLI/items/arrows-20-xphb.md), [Quiver](3.%20Mechanics/CLI/items/quiver-xphb.md), [Thieves' Tools](3.%20Mechanics/CLI/items/thieves-tools-xphb.md), [Burglar's Pack](3.%20Mechanics/CLI/items/burglars-pack-xphb.md), and 8 GP; or (B) 100 GP

## Multiclassing Rogue

- **Skill Proficiencies**: *Choose 1:* [Acrobatics](3.%20Mechanics/CLI/rules/skills.md#Acrobatics), [Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics), [Deception](3.%20Mechanics/CLI/rules/skills.md#Deception), [Insight](3.%20Mechanics/CLI/rules/skills.md#Insight), [Intimidation](3.%20Mechanics/CLI/rules/skills.md#Intimidation), [Investigation](3.%20Mechanics/CLI/rules/skills.md#Investigation), [Perception](3.%20Mechanics/CLI/rules/skills.md#Perception), [Persuasion](3.%20Mechanics/CLI/rules/skills.md#Persuasion), [Sleight of Hand](3.%20Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand), or [Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)
- **Tool Proficiencies**: [Thieves' Tools](3.%20Mechanics/CLI/items/thieves-tools-xphb.md)
- **Armor Training**: [Light armor](3.%20Mechanics/CLI/rules/item-types.md#Light%20Armor)

## Rogue

Rogues rely on cunning, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem. A few even learn magical tricks to supplement their other abilities. Many Rogues focus on stealth and deception, while others refine skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.

In combat, Rogues prioritize subtle strikes over brute strength. They would rather make one precise strike than wear an opponent down with a barrage of blows.

Some Rogues began their careers as criminals, while others used their cunning to fight crime. Whatever a Rogue's relation to the law, no common criminal or officer of the law can match the subtle brilliance of the greatest Rogues.

## Class Features

### Expertise (Level 1)

You gain [Expertise](3.%20Mechanics/CLI/rules/variant-rules/expertise-xphb.md) in two of your skill proficiencies of your choice. [Sleight of Hand](3.%20Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand) and [Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth) are recommended if you have proficiency in them.

At Rogue level 6, you gain [Expertise](3.%20Mechanics/CLI/rules/variant-rules/expertise-xphb.md) in two more of your skill proficiencies of your choice.

### Sneak Attack (Level 1)

You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra `1d6` damage to one creature you hit with an attack roll if you have [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md) on the roll and the attack uses a Finesse or a Ranged weapon. The extra damage's type is the same as the weapon's type.

You don't need [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md) on the attack roll if at least one of your allies is within 5 feet of the target, the ally doesn't have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated) condition, and you don't have [Disadvantage](3.%20Mechanics/CLI/rules/variant-rules/disadvantage-xphb.md) on the attack roll.

The extra damage increases as you gain Rogue levels, as shown in the Sneak Attack column of the Rogue Features table.

### Thieves' Cant (Level 1)

You picked up various languages in the communities where you plied your roguish talents. You know Thieves' Cant and one other language of your choice, which you choose from the language tables in "chapter 2".

### Weapon Mastery (Level 1)

Your training with weapons allows you to use the [mastery properties](3.%20Mechanics/CLI/rules/variant-rules/weapon-mastery-properties-xphb.md) of two kinds of weapons of your choice with which you have proficiency, such as [Daggers](3.%20Mechanics/CLI/items/dagger-xphb.md) and [Shortbows](3.%20Mechanics/CLI/items/shortbow-xphb.md).

Whenever you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md), you can change the kinds of weapons you chose. For example, you could switch to using the [mastery properties](3.%20Mechanics/CLI/rules/variant-rules/weapon-mastery-properties-xphb.md) of [Scimitars](3.%20Mechanics/CLI/items/scimitar-xphb.md) and [Shortswords](3.%20Mechanics/CLI/items/shortsword-xphb.md).

### Cunning Action (Level 2)

Your quick thinking and agility allow you to move and act quickly. On your turn, you can take one of the following actions as a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md): [Dash](3.%20Mechanics/CLI/rules/actions.md#Dash), [Disengage](3.%20Mechanics/CLI/rules/actions.md#Disengage), or [Hide](3.%20Mechanics/CLI/rules/actions.md#Hide).

### Rogue Subclass (Level 3)

You gain a Rogue subclass of your choice. A subclass is a specialization that grants you features at certain Rogue levels. For the rest of your career, you gain each of your subclass's features that are of your Rogue level or lower.

### Steady Aim (Level 3)

As a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md), you give yourself [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md) on your next attack roll on the current turn. You can use this feature only if you haven't moved during this turn, and after you use it, your [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md) is 0 until the end of the current turn.

### Ability Score Improvement (Level 4)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify. You gain this feature again at Rogue levels 8, 10, 12, and 16.

### Cunning Strike (Level 5)

You've developed cunning ways to use your Sneak Attack. When you deal Sneak Attack damage, you can add one of the following Cunning Strike effects. Each effect has a die cost, which is the number of Sneak Attack damage dice you must forgo to add the effect. You remove the die before rolling, and the effect occurs immediately after the attack's damage is dealt. For example, if you add the Poison effect, remove `1d6` from the Sneak Attack's damage before rolling.

If a Cunning Strike effect requires a saving throw, the DC equals 8 plus your Dexterity modifier and [Proficiency Bonus](3.%20Mechanics/CLI/rules/variant-rules/proficiency-xphb.md).

### Poison (Cost: 1d6) (Level 5)

You add a toxin to your strike, forcing the target to make a Constitution saving throw. On a failed save, the target has the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned) condition for 1 minute. At the end of each of its turns, the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned) target repeats the save, ending the effect on itself on a success.

To use this effect, you must have a [Poisoner's Kit](3.%20Mechanics/CLI/items/poisoners-kit-xphb.md) on your person.

### Trip (Cost: 1d6) (Level 5)

If the target is Large or smaller, it must succeed on a Dexterity saving throw or have the [Prone](3.%20Mechanics/CLI/rules/conditions.md#Prone) condition.

### Withdraw (Cost: 1d6) (Level 5)

Immediately after the attack, you move up to half your [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md) without provoking [Opportunity Attacks](3.%20Mechanics/CLI/rules/actions.md#Opportunity%20Attack).

### Uncanny Dodge (Level 5)

When an attacker that you can see hits you with an attack roll, you can take a [Reaction](3.%20Mechanics/CLI/rules/variant-rules/reaction-xphb.md) to halve the attack's damage against you (round down).

### Expertise (Level 6)

You gain [Expertise](3.%20Mechanics/CLI/rules/variant-rules/expertise-xphb.md) in two of your Skill Proficiencies of your choice.

### Evasion (Level 7)

You can nimbly dodge out of the way of certain dangers. When you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail. You can't use this feature if you have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated) condition.

### Reliable Talent (Level 7)

Whenever you make an ability check that uses one of your skill or tool proficiencies, you can treat a `d20` roll of 9 or lower as a 10.

### Ability Score Improvement (Level 8)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Subclass Feature (Level 9)

You gain a feature from your Rogue Subclass.

### Ability Score Improvement (Level 10)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Improved Cunning Strike (Level 11)

You can use up to two Cunning Strike effects when you deal Sneak Attack damage, paying the die cost for each effect.

### Ability Score Improvement (Level 12)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Subclass Feature (Level 13)

You gain a feature from your Rogue Subclass.

### Devious Strikes (Level 14)

You've practiced new ways to use your Sneak Attack deviously. The following effects are now among your Cunning Strike options.

### Daze (Cost: 2d6) (Level 14)

The target must succeed on a Constitution saving throw, or on its next turn, it can do only one of the following: move or take an action or a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md).

### Knock Out (Cost: 6d6) (Level 14)

The target must succeed on a Constitution saving throw, or it has the [Unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious) condition for 1 minute or until it takes any damage. The [Unconscious](3.%20Mechanics/CLI/rules/conditions.md#Unconscious) target repeats the save at the end of each of its turns, ending the effect on itself on a success.

### Obscure (Cost: 3d6) (Level 14)

The target must succeed on a Dexterity saving throw, or it has the [Blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded) condition until the end of its next turn.

### Slippery Mind (Level 15)

Your cunning mind is exceptionally difficult to control. You gain proficiency in Wisdom and Charisma saving throws.

### Ability Score Improvement (Level 16)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Subclass Feature (Level 17)

You gain a feature from your Rogue Subclass.

### Elusive (Level 18)

You're so evasive that attackers rarely gain the upper hand against you. No attack roll can have [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md) against you unless you have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated) condition.

### Epic Boon (Level 19)

You gain an Epic Boon feat or another feat of your choice for which you qualify. [Boon of the Night Spirit](3.%20Mechanics/CLI/feats/boon-of-the-night-spirit-xphb.md) is recommended.

### Stroke of Luck (Level 20)

You have a marvelous knack for succeeding when you need to. If you fail a [D20 Test](3.%20Mechanics/CLI/rules/variant-rules/d20-test-xphb.md), you can turn the roll into a 20.

Once you use this feature, you can't use it again until you finish a [Short](3.%20Mechanics/CLI/rules/variant-rules/short-rest-xphb.md) or [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).