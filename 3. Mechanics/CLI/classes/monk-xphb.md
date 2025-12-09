---
obsidianUIMode: preview
cssclasses:
- json5e-class
tags:
- ttrpg-cli/class/monk
- ttrpg-cli/compendium/src/5e/xphb
aliases:
- Monk
---
# Monk
*Source: Player's Handbook (2024) p. 100. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='6'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Martial Arts</th><th class="value">Focus Points</th><th class="value">Unarmored Movement</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Martial Arts (Level 1)' class='internal-link'>Martial Arts</a>, <a href='#Unarmored Defense (Level 1)' class='internal-link'>Unarmored Defense</a></td><td class="value">1d6</td><td class="value">⏤</td><td class="value">+0</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Monk's Focus (Level 2)' class='internal-link'>Monk's Focus</a>, <a href='#Unarmored Movement (Level 2)' class='internal-link'>Unarmored Movement</a>, <a href='#Uncanny Metabolism (Level 2)' class='internal-link'>Uncanny Metabolism</a></td><td class="value">1d6</td><td class="value">2</td><td class="value">+10</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Deflect Attacks (Level 3)' class='internal-link'>Deflect Attacks</a>, <a href='#Monk Subclass (Level 3)' class='internal-link'>Monk Subclass</a></td><td class="value">1d6</td><td class="value">3</td><td class="value">+10</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a>, <a href='#Slow Fall (Level 4)' class='internal-link'>Slow Fall</a></td><td class="value">1d6</td><td class="value">4</td><td class="value">+10</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Extra Attack (Level 5)' class='internal-link'>Extra Attack</a>, <a href='#Stunning Strike (Level 5)' class='internal-link'>Stunning Strike</a></td><td class="value">1d8</td><td class="value">5</td><td class="value">+10</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Empowered Strikes (Level 6)' class='internal-link'>Empowered Strikes</a>, <a href='#Subclass Feature (Level 6)' class='internal-link'>Subclass Feature</a></td><td class="value">1d8</td><td class="value">6</td><td class="value">+15</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Evasion (Level 7)' class='internal-link'>Evasion</a></td><td class="value">1d8</td><td class="value">7</td><td class="value">+15</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">1d8</td><td class="value">8</td><td class="value">+15</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Acrobatic Movement (Level 9)' class='internal-link'>Acrobatic Movement</a></td><td class="value">1d8</td><td class="value">9</td><td class="value">+15</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Heightened Focus (Level 10)' class='internal-link'>Heightened Focus</a>, <a href='#Self-Restoration (Level 10)' class='internal-link'>Self-Restoration</a></td><td class="value">1d8</td><td class="value">10</td><td class="value">+20</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Subclass Feature (Level 11)' class='internal-link'>Subclass Feature</a></td><td class="value">1d10</td><td class="value">11</td><td class="value">+20</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">1d10</td><td class="value">12</td><td class="value">+20</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Deflect Energy (Level 13)' class='internal-link'>Deflect Energy</a></td><td class="value">1d10</td><td class="value">13</td><td class="value">+20</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Disciplined Survivor (Level 14)' class='internal-link'>Disciplined Survivor</a></td><td class="value">1d10</td><td class="value">14</td><td class="value">+25</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Perfect Focus (Level 15)' class='internal-link'>Perfect Focus</a></td><td class="value">1d10</td><td class="value">15</td><td class="value">+25</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">1d10</td><td class="value">16</td><td class="value">+25</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Subclass Feature (Level 17)' class='internal-link'>Subclass Feature</a></td><td class="value">1d12</td><td class="value">17</td><td class="value">+25</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Superior Defense (Level 18)' class='internal-link'>Superior Defense</a></td><td class="value">1d12</td><td class="value">18</td><td class="value">+30</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Epic Boon (Level 19)' class='internal-link'>Epic Boon</a></td><td class="value">1d12</td><td class="value">19</td><td class="value">+30</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Body and Mind (Level 20)' class='internal-link'>Body and Mind</a></td><td class="value">1d12</td><td class="value">20</td><td class="value">+30</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Monk level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON  (minimum of 1)

## Starting Monk

- **Saving Throw Proficiencies**: Dexterity, Strength
- **Skill Proficiencies**: *Choose 2:* [Acrobatics](3.%20Mechanics/CLI/rules/skills.md#Acrobatics), [Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics), [History](3.%20Mechanics/CLI/rules/skills.md#History), [Insight](3.%20Mechanics/CLI/rules/skills.md#Insight), [Religion](3.%20Mechanics/CLI/rules/skills.md#Religion), or [Stealth](3.%20Mechanics/CLI/rules/skills.md#Stealth)
- **Weapon Proficiencies**: Simple weapons and Martial weapons that have the Light property
- **Tool Proficiencies**: Choose one type of [Artisan's Tools](3.%20Mechanics/CLI/items/artisans-tools-xphb.md) or [Musical Instrument](3.%20Mechanics/CLI/items/musical-instrument-xphb.md)

**Starting Equipment:** *Choose A or B:* (A) [Spear](3.%20Mechanics/CLI/items/spear-xphb.md), 5 [Daggers](3.%20Mechanics/CLI/items/dagger-xphb.md), [Artisan's Tools](3.%20Mechanics/CLI/items/artisans-tools-xphb.md) or [Musical Instrument](3.%20Mechanics/CLI/items/musical-instrument-xphb.md) chosen for the tool proficiency above, [Explorer's Pack](3.%20Mechanics/CLI/items/explorers-pack-xphb.md), and 11 GP; or (B) 50 GP


## Monk

Monks use rigorous combat training and mental discipline to align themselves with the multiverse and focus their internal reservoirs of power. Different Monks conceptualize this power in various ways: as breath, energy, life force, essence, or self, for example. Whether channeled as a striking display of martial prowess or as a subtler manifestation of defense and speed, this power infuses all that a Monk does.

Monks focus their internal power to create extraordinary, even supernatural, effects. They channel uncanny speed and strength into their attacks, with or without the use of weapons. In a Monk's hands, even the most basic weapons can become sophisticated implements of combat mastery.

Many Monks find that a structured life of ascetic withdrawal helps them cultivate the physical and mental focus they need to harness their power. Other Monks believe that immersing themselves in the vibrant confusion of life helps to fuel their determination and discipline.

Monks generally view adventures as tests of their physical and mental development. They are driven by a desire to accomplish a greater mission than merely slaying monsters and plundering treasure; they strive to turn themselves into living weapons.

## Class Features

### Martial Arts (Level 1)

Your practice of martial arts gives you mastery of combat styles that use your [Unarmed Strike](3.%20Mechanics/CLI/rules/variant-rules/unarmed-strike-xphb.md) and Monk weapons, which are the following:

- Simple Melee Weapons  
- Martial Melee Weapons that have the Light property  

You gain the following benefits while you are unarmed or wielding only Monk weapons and you aren't wearing armor or wielding a [Shield](3.%20Mechanics/CLI/items/shield-xphb.md).

### Bonus Unarmed Strike (Level 1)

You can make an [Unarmed Strike](3.%20Mechanics/CLI/rules/variant-rules/unarmed-strike-xphb.md) as a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md).

### Martial Arts Die (Level 1)

You can roll `1d6` in place of the normal damage of your [Unarmed Strike](3.%20Mechanics/CLI/rules/variant-rules/unarmed-strike-xphb.md) or Monk weapons. This die changes as you gain Monk levels, as shown in the Martial Arts column of the Monk Features table.

### Dexterous Attacks (Level 1)

You can use your Dexterity modifier instead of your Strength modifier for the attack and damage rolls of your Unarmed Strikes and Monk weapons. In addition, when you use the Grapple or Shove option of your [Unarmed Strike](3.%20Mechanics/CLI/rules/variant-rules/unarmed-strike-xphb.md), you can use your Dexterity modifier instead of your Strength modifier to determine the save DC.

### Unarmored Defense (Level 1)

While you aren't wearing armor or wielding a [Shield](3.%20Mechanics/CLI/items/shield-xphb.md), your base [Armor Class](3.%20Mechanics/CLI/rules/variant-rules/armor-class-xphb.md) equals 10 plus your Dexterity and Wisdom modifiers.

### Monk's Focus (Level 2)

Your focus and martial training allow you to harness a well of extraordinary energy within yourself. This energy is represented by Focus Points. Your Monk level determines the number of points you have, as shown in the Focus Points column of the Monk Features table.

You can expend these points to enhance or fuel certain Monk features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind, each of which is detailed below.

When you expend a Focus Point, it is unavailable until you finish a [Short](3.%20Mechanics/CLI/rules/variant-rules/short-rest-xphb.md) or [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md), at the end of which you regain all your expended points.

Some features that use Focus Points require your target to make a saving throw. The save DC equals 8 plus your Wisdom modifier and [Proficiency Bonus](3.%20Mechanics/CLI/rules/variant-rules/proficiency-xphb.md).

### Flurry of Blows (Level 2)

You can expend 1 Focus Point to make two Unarmed Strikes as a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md).

### Patient Defense (Level 2)

You can take the [Disengage](3.%20Mechanics/CLI/rules/actions.md#Disengage) action as a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md). Alternatively, you can expend 1 Focus Point to take both the [Disengage](3.%20Mechanics/CLI/rules/actions.md#Disengage) and the [Dodge](3.%20Mechanics/CLI/rules/actions.md#Dodge) actions as a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md).

### Step of the Wind (Level 2)

You can take the [Dash](3.%20Mechanics/CLI/rules/actions.md#Dash) action as a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md). Alternatively, you can expend 1 Focus Point to take both the [Disengage](3.%20Mechanics/CLI/rules/actions.md#Disengage) and [Dash](3.%20Mechanics/CLI/rules/actions.md#Dash) actions as a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md), and your jump distance is doubled for the turn.

### Unarmored Movement (Level 2)

Your speed increases by 10 feet while you aren't wearing armor or wielding a [Shield](3.%20Mechanics/CLI/items/shield-xphb.md). This bonus increases when you reach certain Monk levels, as shown on the Monk Features table.

### Uncanny Metabolism (Level 2)

When you roll [Initiative](3.%20Mechanics/CLI/rules/variant-rules/initiative-xphb.md), you can regain all expended Focus Points. When you do so, roll your Martial Arts die, and regain a number of [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md) equal to your Monk level plus the number rolled.

Once you use this feature, you can't use it again until you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

### Deflect Attacks (Level 3)

When an attack roll hits you and its damage includes Bludgeoning, Piercing, or Slashing damage, you can take a [Reaction](3.%20Mechanics/CLI/rules/variant-rules/reaction-xphb.md) to reduce the attack's total damage against you. The reduction equals `1d10` plus your Dexterity modifier and Monk level.

If you reduce the damage to 0, you can expend 1 Focus Point to redirect some of the attack's force. If you do so, choose a creature you can see within 5 feet of yourself if the attack was a melee attack or a creature you can see within 60 feet of yourself that isn't behind [Total Cover](3.%20Mechanics/CLI/rules/variant-rules/cover-xphb.md) if the attack was a ranged attack. That creature must succeed on a Dexterity saving throw or take damage equal to two rolls of your Martial Arts die plus your Dexterity modifier. The damage is the same type dealt by the attack.

### Monk Subclass (Level 3)

You gain a Monk subclass of your choice. A subclass is a specialization that grants you features at certain Monk levels. For the rest of your career, you gain each of your subclass's features that are of your Monk level or lower.

### Ability Score Improvement (Level 4)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify. You gain this feature again at Monk levels 8, 12, and 16.

### Slow Fall (Level 4)

You can take a [Reaction](3.%20Mechanics/CLI/rules/variant-rules/reaction-xphb.md) when you fall to reduce any damage you take from the fall by an amount equal to five times your Monk level.

### Extra Attack (Level 5)

You can attack twice instead of once whenever you take the [Attack](3.%20Mechanics/CLI/rules/actions.md#Attack) action on your turn.

### Stunning Strike (Level 5)

Once per turn when you hit a creature with a Monk weapon or an [Unarmed Strike](3.%20Mechanics/CLI/rules/variant-rules/unarmed-strike-xphb.md), you can expend 1 Focus Point to attempt a stunning strike. The target must make a Constitution saving throw. On a failed save, the target has the [Stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned) condition until the start of your next turn. On a successful save, the target's [Speed](3.%20Mechanics/CLI/rules/variant-rules/speed-xphb.md) is halved until the start of your next turn, and the next attack roll made against the target before then has [Advantage](3.%20Mechanics/CLI/rules/variant-rules/advantage-xphb.md).

### Empowered Strikes (Level 6)

Whenever you deal damage with your [Unarmed Strike](3.%20Mechanics/CLI/rules/variant-rules/unarmed-strike-xphb.md), it can deal your choice of Force damage or its normal damage type.

### Subclass Feature (Level 6)

You gain a feature from your Monk subclass.

### Evasion (Level 7)

When you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail.

You don't benefit from this feature if you have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated) condition.

### Ability Score Improvement (Level 8)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Acrobatic Movement (Level 9)

While you aren't wearing armor or wielding a [Shield](3.%20Mechanics/CLI/items/shield-xphb.md), you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the movement.

### Heightened Focus (Level 10)

Your Flurry of Blows, Patient Defense, and Step of the Wind gain the following benefits.

#### Flurry of Blows

You can expend 1 Focus Point to use Flurry of Blows and make three Unarmed Strikes with it instead of two.

#### Patient Defense

When you expend a Focus Point to use Patient Defense, you gain a number of [Temporary Hit Points](3.%20Mechanics/CLI/rules/variant-rules/temporary-hit-points-xphb.md) equal to two rolls of your Martial Arts die.

#### Step of the Wind

When you expend a Focus Point to use Step of the Wind, you can choose a willing creature within 5 feet of yourself that is Large or smaller. You move the creature with you until the end of your turn. The creature's movement doesn't provoke [Opportunity Attacks](3.%20Mechanics/CLI/rules/actions.md#Opportunity%20Attack).

### Self-Restoration (Level 10)

Through sheer force of will, you can remove one of the following conditions from yourself at the end of each of your turns: [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed), [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), or [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned).

In addition, forgoing food and drink doesn't give you levels of [Exhaustion](3.%20Mechanics/CLI/rules/conditions.md#Exhaustion).

### Subclass Feature (Level 11)

You gain a feature from your Monk subclass.

### Ability Score Improvement (Level 12)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Deflect Energy (Level 13)

You can now use your Deflect Attacks feature against attacks that deal any damage type, not just Bludgeoning, Piercing, or Slashing.

### Disciplined Survivor (Level 14)

Your physical and mental discipline grant you proficiency in all saving throws.

Additionally, whenever you make a saving throw and fail, you can expend 1 Focus Point to reroll it, and you must use the new roll.

### Perfect Focus (Level 15)

When you roll [Initiative](3.%20Mechanics/CLI/rules/variant-rules/initiative-xphb.md) and don't use Uncanny Metabolism, you regain expended Focus Points until you have 4 if you have 3 or fewer.

### Ability Score Improvement (Level 16)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify.

### Subclass Feature (Level 17)

You gain a feature from your Monk subclass.

### Superior Defense (Level 18)

At the start of your turn, you can expend 3 Focus Points to bolster yourself against harm for 1 minute or until you have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated) condition. During that time, you have [Resistance](3.%20Mechanics/CLI/rules/variant-rules/resistance-xphb.md) to all damage except Force damage.

### Epic Boon (Level 19)

You gain an Epic Boon feat or another feat of your choice for which you qualify. [Boon of Irresistible Offense](3.%20Mechanics/CLI/feats/boon-of-irresistible-offense-xphb.md) is recommended.

### Body and Mind (Level 20)

You have developed your body and mind to new heights. Your Dexterity and Wisdom scores increase by 4, to a maximum of 25.