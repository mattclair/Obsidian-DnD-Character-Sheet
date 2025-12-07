---
Level: 6
STR: 9
DEX: 12
CON: 14
INT: 9
WIS: 10
CHA: 20
name: Wilhelm Destovar
dndClass: Wizard
subclass:
background: Wayfarer
species: Human
species_traits:
  - Resourceful
  - Skillful
  - Versatile
alignment: Chaotic-Good
size: Medium
senses:
languages:
  - Common
  - Giant
  - Dwarvish
tools:
instruments:
image:
  - z_Assets/Misc/ImagePlaceholder.png
Spellcasting_Ability: CHA
speed: 30
Base_AC: 10
armor_training:
weapon_training: Simple Melee
Proficiencies:
Stat_Bonus:
conditions:
health:
  max: 11
  current: 11
  temp: 0
  maxTmp: 5
Hit_Dice:
inventory:
attuned:
spell_slot:
  level1_2: true
  level1_1: true
  level2_1: true
  level3_1: true
feats:
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
Eldritch_Invocations:
mastery:
purse: 0
BASE_FOLDER: 3. Mechanics/CLI
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
>>WHERE lower(file.name) = lower(this.species) + "-xphb"
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

```meta-bind-button
label: "Damage"
style: primary
class: damage
hidden: true
icon: sword
id: "deal-damage"
actions:
  - type: updateMetadata
    bindTarget: health.current
    evaluate: true
    value: "getMetadata('health.temp') == 0 ? Math.max(0, x - (getMetadata('memory^health_change')??0)) : x"
  - type: updateMetadata
    bindTarget: health.temp
    evaluate: true
    value: "x > 0 ? x - (getMetadata('memory^health_change')??0) : 0"
  - type: updateMetadata
    bindTarget: health.current
    evaluate: true
    value: "getMetadata('health.temp') < 0 ? Math.max(0, x + getMetadata('health.temp')) : x"
  - type: updateMetadata
    bindTarget: health.temp
    evaluate: true
    value: "x < 0 ? 0 : x"
  - type: updateMetadata
    bindTarget: memory^health_change
    evaluate: true
    value: ""
  - type: inlineJS
    code: 'const file = app.workspace.getActiveFile(); app.vault.read(file).then(content => { const match = content.match(/conditions:\s*\n([\s\S]*?)(?:\n[a-zA-Z_]+:|$)/);if (match && match[1].includes("concentrating: true")) { new Notice("Make sure to roll a Concentration Check!", 5000);}});'
```
```meta-bind-button
label: "Heal"
style: primary
class: heal
hidden: true
cssStyle: "background-color: #2e7d32"
icon: heart
id: "heal-hitpoints"
actions:
  - type: updateMetadata
    bindTarget: health.current
    evaluate: true
    value: "Math.min(Math.max(0, x + (getMetadata('memory^health_change')??0)), getMetadata('health.max'))"
  - type: updateMetadata
    bindTarget: memory^health_change
    evaluate: true
    value: ""
```
```meta-bind-button
label: "Temp"
style: primary
class: temp
hidden: true
cssStyle: "background-color: #2176A5"
icon: hourglass
id: "temp-hitpoints"
actions:
  - type: updateMetadata
    bindTarget: health.temp
    evaluate: true
    value: "Math.max(x, getMetadata('memory^health_change'))"
  - type: updateMetadata
    bindTarget: health.maxTmp
    evaluate: true
    value: "getMetadata('memory^health_change')"
  - type: updateMetadata
    bindTarget: memory^health_change
    evaluate: true
    value: ""
```
```meta-bind-button
label: "Reset"
style: primary
class: reset
icon: redo
cssStyle: "background-color: #828282"
hidden: true
id: "Reset"
actions:
  - type: updateMetadata
    bindTarget: health.current
    evaluate: true
    value: getMetadata('health.max')
  - type: updateMetadata
    bindTarget: health.temp
    evaluate: true
    value: "0"
  - type: updateMetadata
    bindTarget: memory^health_change
    evaluate: true
    value: ""
```

<!-- Button for Short/Long Rest -->
```meta-bind-button
label: "Short Rest"
style: primary
class: temp
hidden: true
id: "short-rest"
actions:
  - type: updateMetadata
    bindTarget: spell_slot.pact1
    evaluate: true
    value: true
  - type: inlineJS  
    code: 'new Notice("Short Reset Completed. \nRemember to: \n  -Track spent Hit Dice\n  -Track Recovered HP", 5000);'
```
```meta-bind-button
label: "Long Rest"
style: primary
class: temp
hidden: true
id: "long-rest"
actions:
  - type: updateMetadata
    bindTarget: spell_slot.druid
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.level_1_1
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.level_1_2
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.level_1_3
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.level_1_4
    evaluate: true
  - type: updateMetadata
    bindTarget: health.current
    evaluate: true
    value: getMetadata('health.max')
  - type: updateMetadata
    bindTarget: health.temp
    evaluate: true
    value: '0'
  - type: updateMetadata
    bindTarget: Hit_Dice.Ranger_d10-1
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Ranger_d10-2
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Ranger_d10-3
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Ranger_d10-4
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Ranger_d10-5
    evaluate: true
    value: true    
  - type: updateMetadata
    bindTarget: conditions.exhaustion.count
    evaluate: true
    value: "x == 0 ? 0 : x - 1"
  - type: updateMetadata
    bindTarget: conditions.exhaustion.Level
    evaluate: true
    value: "getMetadata('conditions.exhaustion.count') > 0 ? true : false"
  - type: inlineJS  
    code: 'new Notice("Long Reset Completed", 5000);'
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