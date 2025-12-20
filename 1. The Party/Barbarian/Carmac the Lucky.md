---
Level: 5
STR: 19
DEX: 15
CON: 15
INT: 14
WIS: 12
CHA: 22
name: Carmac the Lucky
dndClass: Barbarian
subclass: Path of The Berzerker
background: Wayfarer
species: Dwarf
species_traits:
  - Darkvision
  - Dwarven Resiliance
  - Dwarven Toughness
  - Stonecunning
alignment: Neutral-Neutral
size: Medium
senses: Dark Vision (120ft)
languages:
  - Common
  - Goblin
  - Gnome
tools:
  - Gaming Set
instruments:
image:
  - z_Assets/Misc/Carmac.jpg
Spellcasting_Ability:
speed: 30
Base_AC: 10
armor_training:
  - Light Armor
  - Medium Armor
  - Shields
weapon_training:
  - Simple Weapons
  - Martial Weapons
Proficiencies:
  STR_SAVE: 1
  CON_SAVE: 1
  Athletics: 1
  Animal Handling: 1
  Perception: 1
  Survivial: 1
  Intimidation: 1
Stat_Bonus:
  Armor_Class:
    value: CON_MOD
    source: Unarmored Defense
conditions:
  rage: false
  bless: false
  prone: false
  paralyzed: false
  frightened: false
  haste: false
  exhaustion:
    count: 0
    Level: false
health:
  max: 57
  current: 57
  temp: 0
  maxTmp: 5
Hit_Dice:
  Barbarian_d12-1: true
  Barbarian_d12-2: true
  Barbarian_d12-3: true
  Barbarian_d12-4: true
  Barbarian_d12-5: true
inventory:
  HandAxe: 1
  Javelin: 4
  Light Crossbow: 1
  GreatAxe (+1): 1
attuned:
spell_slot: {}
feats:
  - Alert
  - Great Weapon Master
Spells:
  Prepared:
    Cantrips:
    Spells:
  Always_Prepared:
    Cantrips:
    Spells:
  Known:
    Cantrips: []
    Spells: []
mastery:
  GreatAxe (+1): Cleave
  HandAxe: Vex
  Javelin: Slow
  Light Crossbow: Slow
purse: 0
BASE_FOLDER: 3. Mechanics/CLI
Rage:
  rage-1: true
  rage-2: true
  rage-3: true
  rage-4: true
Luck: {}
Mage_Slayer: {}
Ritual_Caster: {}
---
```dataviewjs
// Load full cahracter sheet
await dv.view("z_Assets/Code/Character_Sheet");
```

<br>

> [!multi-column|blank] %%HIDE TITLE%%
> 
>> [!char-sheet-callout|noicon] %%HIDE TITLE%%
>>```dataviewjs
>>await dv.view("z_Assets/Code/Character_Class_Features");
>>```
>>
>> 
>>
>>```dataviewjs
>>await dv.view("z_Assets/Code/Character_Eldritch_Invocations");
>>```
>
>
>> [!char-sheet-callout|noicon] %%HIDE TITLE%%
>> #### Species Traits
>>```dataview
>>LIST WITHOUT ID
>>"[[" + file.path + "#" + replace(trait, "'", "") + "|" + trait + "]]"
>>FROM ""
>>FLATTEN this.species_traits AS trait
>>FLATTEN file.frontmatter.aliases AS alias
>>WHERE lower(alias) = lower(this.species)
>>SORT trait
>>```
>>
>>#### Feats
>>```dataviewjs
>>await dv.view("z_Assets/Code/Character_Feats");
>>```



### Money Tracking
Current Value: `VIEW[round({purse}, 2)]` gp
`INPUT[inlineSelect(option(Copper), option(Silver), option(Electrum), option(Gold), option(Platinum)):memory^money_type]` `INPUT[number(class(cssnumber)):memory^money_to_add]` `BUTTON[add_money]` `BUTTON[subtract_money]`

```dataviewjs
await dv.view("z_Assets/Code/Character_Purse_Tracking");
```

<!-- buttons for money tracking -->
```meta-bind-button
label: "Add"
style: primary
class: money
hidden: true
cssStyle: "background-color: #2e7d32"
icon: circle-dollar-sign
id: "add_money"
actions:
  - type: updateMetadata
    bindTarget: purse
    evaluate: true
    value: "getMetadata('memory^money_type') == 'Copper' ? getMetadata('purse') + (getMetadata('memory^money_to_add') * 0.01) : getMetadata('memory^money_type') == 'Silver' ? getMetadata('purse') + (getMetadata('memory^money_to_add') * 0.1) : getMetadata('memory^money_type') == 'Electrum' ? getMetadata('purse') + (getMetadata('memory^money_to_add') * 0.5) : getMetadata('memory^money_type') == 'Gold' ? getMetadata('purse') + getMetadata('memory^money_to_add') : getMetadata('memory^money_type') == 'Platinum' ? getMetadata('purse') + (getMetadata('memory^money_to_add') * 10) : getMetadata('purse')"
  - type: updateMetadata
    bindTarget: memory^money_to_add
    evaluate: true
    value: 0 
```
```meta-bind-button
label: "Withdraw"
style: primary
class: money
hidden: true
icon: circle-dollar-sign
id: "subtract_money"
actions:
  - type: updateMetadata
    bindTarget: purse
    evaluate: true
    value: "getMetadata('memory^money_type') == 'Copper' ? getMetadata('purse') - (getMetadata('memory^money_to_add') * 0.01) : getMetadata('memory^money_type') == 'Silver' ? getMetadata('purse') - (getMetadata('memory^money_to_add') * 0.1) : getMetadata('memory^money_type') == 'Electrum' ? getMetadata('purse') - (getMetadata('memory^money_to_add') * 0.5) : getMetadata('memory^money_type') == 'Gold' ? getMetadata('purse') - getMetadata('memory^money_to_add') : getMetadata('memory^money_type') == 'Platinum' ? getMetadata('purse') - (getMetadata('memory^money_to_add') * 10) :   getMetadata('purse')"
  - type: updateMetadata
    bindTarget: memory^money_to_add
    evaluate: true
    value: 0 
```