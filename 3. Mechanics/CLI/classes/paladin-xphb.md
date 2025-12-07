---
obsidianUIMode: preview
cssclasses:
- json5e-class
tags:
- ttrpg-cli/class/paladin
- ttrpg-cli/compendium/src/5e/xphb
aliases:
- Paladin
---
# Paladin
*Source: Player's Handbook (2024) p. 108. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='5'></th><th colspan='5'>Spell Slots per Spell Level</th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Channel Divinity</th><th class="value">Prepared Spells</th><th class="spellSlot">1st</th><th class="spellSlot">2nd</th><th class="spellSlot">3rd</th><th class="spellSlot">4th</th><th class="spellSlot">5th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Lay on Hands (Level 1)' class='internal-link'>Lay on Hands</a>, <a href='#Spellcasting (Level 1)' class='internal-link'>Spellcasting</a>, <a href='#Weapon Mastery (Level 1)' class='internal-link'>Weapon Mastery</a></td><td class="value">⏤</td><td class="value">2</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Fighting Style (Level 2)' class='internal-link'>Fighting Style</a>, <a href='#Paladin's Smite (Level 2)' class='internal-link'>Paladin's Smite</a></td><td class="value">⏤</td><td class="value">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Channel Divinity (Level 3)' class='internal-link'>Channel Divinity</a>, <a href='#Paladin Subclass (Level 3)' class='internal-link'>Paladin Subclass</a></td><td class="value">2</td><td class="value">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">2</td><td class="value">5</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Extra Attack (Level 5)' class='internal-link'>Extra Attack</a>, <a href='#Faithful Steed (Level 5)' class='internal-link'>Faithful Steed</a></td><td class="value">2</td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Aura of Protection (Level 6)' class='internal-link'>Aura of Protection</a></td><td class="value">2</td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Subclass Feature (Level 7)' class='internal-link'>Subclass Feature</a></td><td class="value">2</td><td class="value">7</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">2</td><td class="value">7</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Abjure Foes (Level 9)' class='internal-link'>Abjure Foes</a></td><td class="value">2</td><td class="value">9</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Aura of Courage (Level 10)' class='internal-link'>Aura of Courage</a></td><td class="value">2</td><td class="value">9</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Radiant Strikes (Level 11)' class='internal-link'>Radiant Strikes</a></td><td class="value">3</td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"></td><td class="value">3</td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Restoring Touch (Level 14)' class='internal-link'>Restoring Touch</a></td><td class="value">3</td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Subclass Feature (Level 15)' class='internal-link'>Subclass Feature</a></td><td class="value">3</td><td class="value">12</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">12</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"></td><td class="value">3</td><td class="value">14</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Aura Expansion (Level 18)' class='internal-link'>Aura Expansion</a></td><td class="value">3</td><td class="value">14</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Epic Boon (Level 19)' class='internal-link'>Epic Boon</a></td><td class="value">3</td><td class="value">15</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Subclass Feature (Level 20)' class='internal-link'>Subclass Feature</a></td><td class="value">3</td><td class="value">15</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d10 per Paladin level
- **Hit Points at First Level:** 10 + CON
- **Hit Points at Higher Levels:** add 6 OR 1d10 + CON  (minimum of 1)

## Starting Paladin

- **Saving Throw Proficiencies**: Charisma, Wisdom
- **Skill Proficiencies**: *Choose 2:* [Athletics](3.%20Mechanics/CLI/rules/skills.md#Athletics), [Insight](3.%20Mechanics/CLI/rules/skills.md#Insight), [Intimidation](3.%20Mechanics/CLI/rules/skills.md#Intimidation), [Medicine](3.%20Mechanics/CLI/rules/skills.md#Medicine), [Persuasion](3.%20Mechanics/CLI/rules/skills.md#Persuasion), or [Religion](3.%20Mechanics/CLI/rules/skills.md#Religion)
- **Weapon Proficiencies**: Simple weapons and Martial weapons
- **Armor Training**: [Light armor](3.%20Mechanics/CLI/rules/item-types.md#Light%20Armor), [Medium armor](3.%20Mechanics/CLI/rules/item-types.md#Medium%20Armor), [Heavy armor](3.%20Mechanics/CLI/rules/item-types.md#Heavy%20Armor), and [Shields](3.%20Mechanics/CLI/items/shield-xphb.md)

**Starting Equipment:** *Choose A or B:* (A) [Chain Mail](3.%20Mechanics/CLI/items/chain-mail-xphb.md), [Shield](3.%20Mechanics/CLI/items/shield-xphb.md), [Longsword](3.%20Mechanics/CLI/items/longsword-xphb.md), 6 [Javelins](3.%20Mechanics/CLI/items/javelin-xphb.md), [Holy Symbol](3.%20Mechanics/CLI/items/holy-symbol-xphb.md), [Priest's Pack](3.%20Mechanics/CLI/items/priests-pack-xphb.md), and 9 GP; or (B) 150 GP

## Multiclassing Paladin

- **Weapon Proficiencies**: Martial weapons
- **Armor Training**: [Light armor](3.%20Mechanics/CLI/rules/item-types.md#Light%20Armor), [Medium armor](3.%20Mechanics/CLI/rules/item-types.md#Medium%20Armor), [Shields](3.%20Mechanics/CLI/items/shield-xphb.md)

## Paladin

Paladins are united by their oaths to stand against the forces of annihilation and corruption. Whether sworn before a god's altar, in a sacred glade before nature spirits, or in a moment of desperation and grief with the dead as the only witnesses, a Paladin's oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion.

Paladins train to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the injured, smite their foes, and protect the helpless and those who fight at their side.

Almost by definition, the life of a Paladin is an adventuring life, for every Paladin lives on the front lines of the cosmic struggle against annihilation. Fighters are rare enough among the ranks of a world's armies, but even fewer people can claim the calling of a Paladin. When they do receive the call, these blessed folk turn from their former occupations and take up arms and magic.

## Class Features

### Lay on Hands (Level 1)

Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md). With that pool, you can restore a total number of [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md) equal to five times your Paladin level.

As a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md), you can touch a creature (which could be yourself) and draw power from the pool of healing to restore a number of [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md) to that creature, up to the maximum amount remaining in the pool.

You can also expend 5 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md) from the pool of healing power to remove the [Poisoned](3.%20Mechanics/CLI/rules/conditions.md#Poisoned) condition from the creature; those points don't also restore [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md) to the creature.

### Spellcasting (Level 1)

You have learned to cast spells through prayer and meditation. See "chapter 7" for the rules on spellcasting. The information below details how you use those rules with Paladin spells, which appear in the Paladin spell list later in the class's description.

#### Spell Slots

The Paladin Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

#### Prepared Spells of Level 1+

You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Paladin spells. [Heroism](3.%20Mechanics/CLI/spells/heroism-xphb.md) and [Searing Smite](3.%20Mechanics/CLI/spells/searing-smite-xphb.md) are recommended.

The number of spells on your list increases as you gain Paladin levels, as shown in the Prepared Spells column of the Paladin Features table. Whenever that number increases, choose additional Paladin spells until the number of spells on your list matches the number in the Paladin Features table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 5 Paladin, your list of prepared spells can include six Paladin spells of level 1 or 2 in any combination.

If another Paladin feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Paladin spells for you.

#### Changing Your Prepared Spells

Whenever you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md), you can replace one spell on your list with another Paladin spell for which you have spell slots.

#### Spellcasting Ability

Charisma is your spellcasting ability for your Paladin spells.

#### Spellcasting Focus

You can use a [Holy Symbol](3.%20Mechanics/CLI/items/holy-symbol-xphb.md) as a [Spellcasting Focus](3.%20Mechanics/CLI/rules/variant-rules/spellcasting-focus-xphb.md) for your Paladin spells.

### Weapon Mastery (Level 1)

Your training with weapons allows you to use the [mastery properties](3.%20Mechanics/CLI/rules/variant-rules/weapon-mastery-properties-xphb.md) of two kinds of weapons of your choice with which you have proficiency, such as [Longswords](3.%20Mechanics/CLI/items/longsword-xphb.md) and [Javelins](3.%20Mechanics/CLI/items/javelin-xphb.md).

Whenever you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md), you can change the kinds of weapons you chose. For example, you could switch to using the [mastery properties](3.%20Mechanics/CLI/rules/variant-rules/weapon-mastery-properties-xphb.md) of [Halberds](3.%20Mechanics/CLI/items/halberd-xphb.md) and [Flails](3.%20Mechanics/CLI/items/flail-xphb.md).

### Fighting Style (Level 2)

You gain a Fighting Style feat of your choice. Instead of choosing one of those feats, you can choose the option below.

### Paladin's Smite (Level 2)

You always have the [Divine Smite](3.%20Mechanics/CLI/spells/divine-smite-xphb.md) spell prepared. In addition, you can cast it without expending a spell slot, but you must finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md) before you can cast it in this way again.

### Channel Divinity (Level 3)

You can channel divine energy directly from the Outer Planes, using it to fuel magical effects. You start with one such effect: Divine Sense, which is described below. Other Paladin features give additional Channel Divinity effect options. Each time you use this class's Channel Divinity, you choose which effect from this class to create.

You can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a [Short Rest](3.%20Mechanics/CLI/rules/variant-rules/short-rest-xphb.md), and you regain all expended uses when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md). You gain an additional use when you reach Paladin level 11.

If a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class's Spellcasting feature.

### Divine Sense (Level 3)

As a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md), you can open your awareness to detect Celestials, Fiends, and Undead. For the next 10 minutes or until you have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated) condition, you know the location of any creature of those types within 60 feet of yourself, and you know its creature type. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the [Hallow](3.%20Mechanics/CLI/spells/hallow-xphb.md) spell.

### Paladin Subclass (Level 3)

You gain a Paladin subclass of your choice. A subclass is a specialization that grants you features at certain Paladin levels. For the rest of your career, you gain each of your subclass's features that are of your Paladin level or lower.

> [!note] Breaking Your Oath
> 
> A Paladin tries to hold to the highest standards of conduct, but even the most dedicated are fallible. Sometimes a Paladin transgresses their oath.
> 
> A Paladin who has broken a vow typically seeks absolution, spending an all-night vigil as a sign of penitence or undertaking a fast. After a rite of forgiveness, the Paladin starts fresh.
> 
> If your Paladin unrepentantly violates their oath, talk to your DM. Your Paladin should probably take a more appropriate subclass or even abandon the class and adopt another one.
^breaking-your-oath

### Ability Score Improvement (Level 4)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify. You gain this feature again at Paladin levels 8, 12, and 16.

### Extra Attack (Level 5)

You can attack twice instead of once whenever you take the [Attack](3.%20Mechanics/CLI/rules/actions.md#Attack) action on your turn.

### Faithful Steed (Level 5)

You can call on the aid of an otherworldly steed. You always have the [Find Steed](3.%20Mechanics/CLI/spells/find-steed-xphb.md) spell prepared.

You can also cast the spell once without expending a spell slot, and you regain the ability to do so when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

### Aura of Protection (Level 6)

You radiate a protective, unseeable aura in a 10-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md) that originates from you. The aura is inactive while you have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated) condition.

You and your allies in the aura gain a bonus to saving throws equal to your Charisma modifier (minimum bonus of +1).

If another Paladin is present, a creature can benefit from only one Aura of Protection at a time; the creature chooses which aura while in them.

### Subclass Feature (Level 7)

You gain a feature from your Paladin Subclass.

### Ability Score Improvement (Level 8)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) Feat or another feat of your choice for which you qualify.

### Abjure Foes (Level 9)

As a [Magic](3.%20Mechanics/CLI/rules/actions.md#Magic) action, you can expend one use of this class's Channel Divinity to overwhelm foes with awe. As you present your [Holy Symbol](3.%20Mechanics/CLI/items/holy-symbol-xphb.md) or weapon, you can target a number of creatures equal to your Charisma modifier (minimum of one creature) that you can see within 60 feet of yourself. Each target must succeed on a Wisdom saving throw or have the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened) condition for 1 minute or until it takes any damage. While [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened) in this way, a target can do only one of the following on its turns: move, take an action, or take a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md).

### Aura of Courage (Level 10)

You and your allies have [Immunity](3.%20Mechanics/CLI/rules/variant-rules/immunity-xphb.md) to the [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened) condition while in your Aura of Protection. If a [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened) ally enters the aura, that condition has no effect on that ally while there.

### Radiant Strikes (Level 11)

Your strikes now carry supernatural power. When you hit a target with an attack roll using a Melee weapon or an [Unarmed Strike](3.%20Mechanics/CLI/rules/variant-rules/unarmed-strike-xphb.md), the target takes an extra `1d8` Radiant damage.

### Ability Score Improvement (Level 12)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) Feat or another feat of your choice for which you qualify.

### Restoring Touch (Level 14)

When you use Lay On Hands on a creature, you can also remove one or more of the following conditions from the creature: [Blinded](3.%20Mechanics/CLI/rules/conditions.md#Blinded), [Charmed](3.%20Mechanics/CLI/rules/conditions.md#Charmed), [Deafened](3.%20Mechanics/CLI/rules/conditions.md#Deafened), [Frightened](3.%20Mechanics/CLI/rules/conditions.md#Frightened), [Paralyzed](3.%20Mechanics/CLI/rules/conditions.md#Paralyzed), or [Stunned](3.%20Mechanics/CLI/rules/conditions.md#Stunned). You must expend 5 [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md) from the healing pool of Lay On Hands for each of these conditions you remove; those points don't also restore [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md) to the creature.

### Subclass Feature (Level 15)

You gain a feature from your Paladin Subclass.

### Ability Score Improvement (Level 16)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) Feat or another feat of your choice for which you qualify.

### Aura Expansion (Level 18)

Your Aura of Protection is now a 30-foot [Emanation](3.%20Mechanics/CLI/rules/variant-rules/emanation-area-of-effect-xphb.md).

### Epic Boon (Level 19)

You gain an Epic Boon feat or another feat of your choice for which you qualify. [Boon of Truesight](3.%20Mechanics/CLI/feats/boon-of-truesight-xphb.md) is recommended.

### Subclass Feature (Level 20)

You gain a feature from your Paladin Subclass.