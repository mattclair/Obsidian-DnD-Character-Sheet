---
obsidianUIMode: preview
cssclasses:
- json5e-class
tags:
- ttrpg-cli/class/druid
- ttrpg-cli/compendium/src/5e/xphb
aliases:
- Druid
---
# Druid
*Source: Player's Handbook (2024) p. 78. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='6'></th><th colspan='9'>Spell Slots per Spell Level</th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Wild Shape</th><th class="value">Cantrips</th><th class="value">Prepared Spells</th><th class="spellSlot">1st</th><th class="spellSlot">2nd</th><th class="spellSlot">3rd</th><th class="spellSlot">4th</th><th class="spellSlot">5th</th><th class="spellSlot">6th</th><th class="spellSlot">7th</th><th class="spellSlot">8th</th><th class="spellSlot">9th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Druidic (Level 1)' class='internal-link'>Druidic</a>, <a href='#Primal Order (Level 1)' class='internal-link'>Primal Order</a>, <a href='#Spellcasting (Level 1)' class='internal-link'>Spellcasting</a></td><td class="value">⏤</td><td class="value">2</td><td class="value">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Wild Companion (Level 2)' class='internal-link'>Wild Companion</a>, <a href='#Wild Shape (Level 2)' class='internal-link'>Wild Shape</a></td><td class="value">2</td><td class="value">2</td><td class="value">5</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Druid Subclass (Level 3)' class='internal-link'>Druid Subclass</a></td><td class="value">2</td><td class="value">2</td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">2</td><td class="value">3</td><td class="value">7</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Wild Resurgence (Level 5)' class='internal-link'>Wild Resurgence</a></td><td class="value">2</td><td class="value">3</td><td class="value">9</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Subclass Feature (Level 6)' class='internal-link'>Subclass Feature</a></td><td class="value">3</td><td class="value">3</td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Elemental Fury (Level 7)' class='internal-link'>Elemental Fury</a></td><td class="value">3</td><td class="value">3</td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">3</td><td class="value">12</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"></td><td class="value">3</td><td class="value">3</td><td class="value">14</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Subclass Feature (Level 10)' class='internal-link'>Subclass Feature</a></td><td class="value">3</td><td class="value">4</td><td class="value">15</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"></td><td class="value">3</td><td class="value">4</td><td class="value">16</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">4</td><td class="value">16</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"></td><td class="value">3</td><td class="value">4</td><td class="value">17</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Subclass Feature (Level 14)' class='internal-link'>Subclass Feature</a></td><td class="value">3</td><td class="value">4</td><td class="value">17</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Improved Elemental Fury (Level 15)' class='internal-link'>Improved Elemental Fury</a></td><td class="value">3</td><td class="value">4</td><td class="value">18</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">4</td><td class="value">18</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"></td><td class="value">4</td><td class="value">4</td><td class="value">19</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Beast Spells (Level 18)' class='internal-link'>Beast Spells</a></td><td class="value">4</td><td class="value">4</td><td class="value">20</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Epic Boon (Level 19)' class='internal-link'>Epic Boon</a></td><td class="value">4</td><td class="value">4</td><td class="value">21</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Archdruid (Level 20)' class='internal-link'>Archdruid</a></td><td class="value">4</td><td class="value">4</td><td class="value">22</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Druid level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON  (minimum of 1)

## Starting Druid

- **Saving Throw Proficiencies**: Intelligence, Wisdom
- **Skill Proficiencies**: *Choose 2:* [Animal Handling](3.%20Mechanics/CLI/rules/skills.md#Animal%20Handling), [Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana), [Insight](3.%20Mechanics/CLI/rules/skills.md#Insight), [Medicine](3.%20Mechanics/CLI/rules/skills.md#Medicine), [Nature](3.%20Mechanics/CLI/rules/skills.md#Nature), [Perception](3.%20Mechanics/CLI/rules/skills.md#Perception), [Religion](3.%20Mechanics/CLI/rules/skills.md#Religion), or [Survival](3.%20Mechanics/CLI/rules/skills.md#Survival)
- **Weapon Proficiencies**: Simple weapons
- **Tool Proficiencies**: [Herbalism Kit](3.%20Mechanics/CLI/items/herbalism-kit-xphb.md)
- **Armor Training**: [Light armor](3.%20Mechanics/CLI/rules/item-types.md#Light%20Armor) and [Shields](3.%20Mechanics/CLI/items/shield-xphb.md)

**Starting Equipment:** *Choose A or B:* (A) [Leather Armor](3.%20Mechanics/CLI/items/leather-armor-xphb.md), [Shield](3.%20Mechanics/CLI/items/shield-xphb.md), [Sickle](3.%20Mechanics/CLI/items/sickle-xphb.md), [Druidic Focus (Quarterstaff)](3.%20Mechanics/CLI/items/druidic-focus-xphb.md), [Explorer's Pack](3.%20Mechanics/CLI/items/explorers-pack-xphb.md), [Herbalism kit](3.%20Mechanics/CLI/items/herbalism-kit-xphb.md), 9 GP; or (B) 50 GP

## Multiclassing Druid

- **Armor Training**: [Light armor](3.%20Mechanics/CLI/rules/item-types.md#Light%20Armor), [Shields](3.%20Mechanics/CLI/items/shield-xphb.md)

## Druid

Druids belong to ancient orders that call on the forces of nature. Harnessing the magic of animals, plants, and the four elements, Druids heal, transform into animals, and wield elemental destruction.

Revering nature above all, individual Druids gain their magic from nature, a nature deity, or both, and they typically unite with other Druids to perform rites that mark the passage of the seasons and other natural cycles.

Druids are concerned with the delicate ecological balance that sustains plant and animal life and with the need for people to live in harmony with nature. Druids often guard sacred sites or watch over regions of unspoiled nature, but when a significant danger arises, Druids take a more active role as adventurers who combat the threat.

## Class Features

### Druidic (Level 1)

You know Druidic, the secret language of Druids. While learning this ancient tongue, you also unlocked the magic of communicating with animals; you always have the [Speak with Animals](3.%20Mechanics/CLI/spells/speak-with-animals-xphb.md) spell prepared.

You can use Druidic to leave hidden messages. You and others who know Druidic automatically spot such a message. Others spot the message's presence with a successful DC 15 Intelligence ([Investigation](3.%20Mechanics/CLI/rules/skills.md#Investigation)) check but can't decipher it without magic.

### Primal Order (Level 1)

You have dedicated yourself to one of the following sacred roles of your choice.

- **Magician**  

    You know one extra cantrip from the Druid spell list. In addition, your mystical connection to nature gives you a bonus to your Intelligence ([Arcana](3.%20Mechanics/CLI/rules/skills.md#Arcana) or [Nature](3.%20Mechanics/CLI/rules/skills.md#Nature)) checks. The bonus equals your Wisdom modifier (minimum bonus of +1).  

- **Warden**  

    Trained for battle, you gain proficiency with Martial weapons and training with Medium armor.  

### Spellcasting (Level 1)

You have learned to cast spells through studying the mystical forces of nature. See "chapter 7" for the rules on spellcasting. The information below details how you use those rules with Druid spells, which appear on the Druid spell list later in the class's description.

#### Cantrips

You know two cantrips of your choice from the Druid spell list. [Druidcraft](3.%20Mechanics/CLI/spells/druidcraft-xphb.md) and [Produce Flame](3.%20Mechanics/CLI/spells/produce-flame-xphb.md) are recommended.

Whenever you gain a Druid level, you can replace one of your cantrips with another cantrip of your choice from the Druid spell list.

When you reach Druid levels 4 and 10, you learn another cantrip of your choice from the Druid spell list, as shown in the Cantrips column of the Druid Features table.

#### Spell Slots

The Druid Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

#### Prepared Spells of Level 1+

You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Druid spell list. [Animal Friendship](3.%20Mechanics/CLI/spells/animal-friendship-xphb.md), [Cure Wounds](3.%20Mechanics/CLI/spells/cure-wounds-xphb.md), [Faerie Fire](3.%20Mechanics/CLI/spells/faerie-fire-xphb.md), and [Thunderwave](3.%20Mechanics/CLI/spells/thunderwave-xphb.md) are recommended.

The number of spells on your list increases as you gain Druid levels, as shown in the Prepared Spells column of the Druid Features table. Whenever that number increases, choose additional spells from the Druid spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Druid, your list of prepared spells can include six spells of levels 1 and 2 in any combination.

If another Druid feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Druid spells for you.

#### Changing Your Prepared Spells

Whenever you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md), you can change your list of prepared spells, replacing any of the spells with other Druid spells for which you have spell slots.

#### Spellcasting Ability

Wisdom is your spellcasting ability for your Druid spells.

#### Spellcasting Focus

You can use a [Druidic Focus](3.%20Mechanics/CLI/items/druidic-focus-xphb.md) as a [Spellcasting Focus](3.%20Mechanics/CLI/rules/variant-rules/spellcasting-focus-xphb.md) for your Druid spells.

### Wild Companion (Level 2)

You can summon a nature spirit that assumes an animal form to aid you. As a [Magic](3.%20Mechanics/CLI/rules/actions.md#Magic) action, you can expend a spell slot or a use of Wild Shape to cast the [Find Familiar](3.%20Mechanics/CLI/spells/find-familiar-xphb.md) spell without Material components.

When you cast the spell in this way, the familiar is Fey and disappears when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

### Wild Shape (Level 2)

The power of nature allows you to assume the form of an animal. As a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md), you shape-shift into a Beast form that you have learned for this feature (see "Known Forms" below). You stay in that form for a number of hours equal to half your Druid level or until you use Wild Shape again, have the [Incapacitated](3.%20Mechanics/CLI/rules/conditions.md#Incapacitated) condition, or die. You can also leave the form early as a [Bonus Action](3.%20Mechanics/CLI/rules/variant-rules/bonus-action-xphb.md).

#### Number of Uses

You can use Wild Shape twice. You regain one expended use when you finish a [Short Rest](3.%20Mechanics/CLI/rules/variant-rules/short-rest-xphb.md), and you regain all expended uses when you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

You gain additional uses when you reach certain Druid levels, as shown in the Wild Shape column of the Druid Features table.

#### Known Forms

You know four Beast forms for this feature, chosen from among Beast stat blocks that have a maximum [Challenge Rating](3.%20Mechanics/CLI/rules/variant-rules/challenge-rating-xphb.md) of 1/4 and that lack a [Fly Speed](3.%20Mechanics/CLI/rules/variant-rules/fly-speed-xphb.md) (see appendix B for stat block options). The [Rat](3.%20Mechanics/CLI/bestiary/beast/rat-xmm.md), [Riding Horse](3.%20Mechanics/CLI/bestiary/beast/riding-horse-xmm.md), [Spider](3.%20Mechanics/CLI/bestiary/beast/spider-xmm.md), and [Wolf](3.%20Mechanics/CLI/bestiary/beast/wolf-xmm.md) are recommended. Whenever you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md), you can replace one of your known forms with another eligible form.

When you reach certain Druid levels, your number of known forms and the maximum [Challenge Rating](3.%20Mechanics/CLI/rules/variant-rules/challenge-rating-xphb.md) for those forms increases, as shown in the Beast Shapes table. In addition, starting at level 8, you can adopt a form that has a [Fly Speed](3.%20Mechanics/CLI/rules/variant-rules/fly-speed-xphb.md).

When choosing known forms, you may look in the "Monster Manual" or elsewhere for eligible Beasts if the Dungeon Master permits you to do so.

**Beast Shapes**

| Druid Level | Known Forms | Max CR | Fly Speed |
|-------------|-------------|--------|-----------|
| 2 | 4 | 1/4 | No |
| 4 | 6 | 1/2 | No |
| 8 | 8 | 1 | Yes |
^beast-shapes

#### Rules While Transformed

While in a form, you retain your personality, memories, and ability to speak, and the following rules apply:

- **Temporary Hit Points.** When you assume a Wild Shape form, you gain a number of [Temporary Hit Points](3.%20Mechanics/CLI/rules/variant-rules/temporary-hit-points-xphb.md) equal to your Druid level.  
- **Game Statistics.** Your game statistics are replaced by the Beast's stat block, but you retain your creature type; [Hit Points](3.%20Mechanics/CLI/rules/variant-rules/hit-points-xphb.md); [Hit Point Dice](3.%20Mechanics/CLI/rules/variant-rules/hit-point-dice-xphb.md); Intelligence, Wisdom, and Charisma scores; class features; languages; and feats. You also retain your skill and saving throw proficiencies and use your [Proficiency Bonus](3.%20Mechanics/CLI/rules/variant-rules/proficiency-xphb.md) for them, in addition to gaining the proficiencies of the creature. If a skill or saving throw modifier in the Beast's stat block is higher than yours, use the one in the stat block.  
- **No Spellcasting.** You can't cast spells, but shape-shifting doesn't break your [Concentration](3.%20Mechanics/CLI/rules/conditions.md#Concentration) or otherwise interfere with a spell you've already cast.  
- **Objects.** Your ability to handle objects is determined by the form's limbs rather than your own. In addition, you choose whether your equipment falls in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it's practical for the new form to wear a piece of equipment based on the creature's size and shape. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with the form. Equipment that merges with the form has no effect while you're in that form.  

### Druid Subclass (Level 3)

You gain a Druid subclass of your choice. A subclass is a specialization that grants you features at certain Druid levels. For the rest of your career, you gain each of your subclass's features that are of your Druid level or lower.

### Ability Score Improvement (Level 4)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) feat or another feat of your choice for which you qualify. You gain this feature again at Druid levels 8, 12, and 16.

### Wild Resurgence (Level 5)

Once on each of your turns, if you have no uses of Wild Shape left, you can give yourself one use by expending a spell slot (no action required).

In addition, you can expend one use of Wild Shape (no action required) to give yourself a level 1 spell slot, but you can't do so again until you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

### Subclass Feature (Level 6)

You gain a feature from your Druid Subclass.

### Elemental Fury (Level 7)

The might of the elements flows through you. You gain one of the following options of your choice.

### Potent Spellcasting (Level 7)

Add your Wisdom modifier to the damage you deal with any Druid cantrip.

### Primal Strike (Level 7)

Once on each of your turns when you hit a creature with an attack roll using a weapon or a Beast form's attack in Wild Shape, you can cause the target to take an extra `1d8` Cold, Fire, Lightning, or Thunder damage (choose when you hit).

### Ability Score Improvement (Level 8)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) Feat or another feat of your choice for which you qualify.

### Subclass Feature (Level 10)

You gain a feature from your Druid Subclass.

### Ability Score Improvement (Level 12)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) Feat or another feat of your choice for which you qualify.

### Subclass Feature (Level 14)

You gain a feature from your Druid Subclass.

### Improved Elemental Fury (Level 15)

The option you chose for Elemental Fury grows more powerful, as detailed below.

#### Potent Spellcasting

When you cast a Druid cantrip with a range of 10 feet or greater, the spell's range increases by 300 feet.

#### Primal Strike

The extra damage of your Primal Strike increases to `2d8`.

### Ability Score Improvement (Level 16)

You gain the [Ability Score Improvement](3.%20Mechanics/CLI/feats/ability-score-improvement-xphb.md) Feat or another feat of your choice for which you qualify.

### Beast Spells (Level 18)

While using Wild Shape, you can cast spells in Beast form, except for any spell that has a Material component with a cost specified or that consumes its Material component.

### Epic Boon (Level 19)

You gain an Epic Boon feat or another feat of your choice for which you qualify. [Boon of Dimensional Travel](3.%20Mechanics/CLI/feats/boon-of-dimensional-travel-xphb.md) is recommended.

### Archdruid (Level 20)

The vitality of nature constantly blooms within you, granting you the following benefits.

#### Evergreen Wild Shape

Whenever you roll [Initiative](3.%20Mechanics/CLI/rules/variant-rules/initiative-xphb.md) and have no uses of Wild Shape left, you regain one expended use of it.

#### Nature Magician

You can convert uses of Wild Shape into a spell slot (no action required). Choose a number of your unexpended uses of Wild Shape and convert them into a single spell slot, with each use contributing 2 spell levels. For example, if you convert two uses of Wild Shape, you produce a level 4 spell slot. Once you use this benefit, you can't do so again until you finish a [Long Rest](3.%20Mechanics/CLI/rules/variant-rules/long-rest-xphb.md).

#### Longevity

The primal magic that you wield causes you to age more slowly. For every ten years that pass, your body ages only one year.