---
Level: 5
STR: 9
DEX: 19
CON: 14
INT: 12
WIS: 13
CHA: 8
name: Rowen
dndClass: Rogue
subclass: Soulknife
background: Criminal
species: Elf
species_traits:
  - Drow
  - Darkvision
  - Elven Lineage
  - Fey Ancestry
  - Keen Senses
  - Trance
alignment: Chaotic-Neutral
size: Medium
senses: Dark Vision (120ft)
Languages:
  - Common
  - Elvish
  - Gnomish
  - Common Sign Language
  - Thieves' Cant
tools:
  - Thieves' Tools
instruments:
image:
  - z_Assets/Misc/Rowen-rooftop.png
  - z_Assets/Misc/Rowan.jpg
Spellcasting_Ability: WIS
speed: 30
Base_AC: 11
armor_training: Light Armor
weapon_training:
  - Simple Weapons
  - Martial weapons that have the Finesse Property
Proficiencies:
  DEX_SAVE: 1
  INT_SAVE: 1
  Deception: 1
  Stealth: 2
  Insight: 1
  Acrobatics: 1
  Sleight of Hand: 2
  Perception: 1
Stat_Bonus:
  Initiative:
    value: PROF
    source: Alert Feat
  Speed:
    value: 10
    source: Speedy Feat
conditions:
  heroic_inspiration: true
  exhaustion:
    count: .nan
    Level: false
resistances:
  - Advantage when rolling saving throws against the Charmed condition
  - Immune to Sleep
health:
  max: 34
  current: 34
  temp: 0
  maxTmp: 5
Luck:
Hit_Dice:
  Rogue_d8-1: true
  Rogue_d8-2: true
  Rogue_d8-3: true
  Rogue_d8-4: true
  Rogue_d8-5: true
  Rogue_d8-6: true
  Rogue_d8-7: true
  Rogue_d8-8: true
  Rogue_d8-9: true
inventory:
  Cloak of Stealth: 1
  Sylvan Talon: 1
  Leather Armor: 1
  Shortbow: 1
  Shortsword: 2
  Potion of Healing: 2
  Bedroll: 1
  Traveler's Clothes: 1
  Pouch: 2
  Crowbar: 2
  Dagger: 2
  Thieves' Tools: 1
  Quiver: 1
  Burglar's Pack: 1
  Arrows (pack of 20): 1
  Psychic Blade: 2
  Bag of Tricks, Tan: 1
attuned:
  - Cloak of Stealth
  - Sylvan Talon
ammunition:
  arrow: d12
mastery:
  Dagger: Nick
  Sylvan Talon: Nick
  Psychic Blade: Vex
  Shortbow: Vex
  Shortsword: Nick
Spells:
  Prepared:
    Cantrips:
    Spells:
  Always_Prepared:
    Cantrips:
      - Dancing Lights
      - Darkness
    Spells:
      - Faerie Fire
  Known:
    Cantrips: []
    Spells: []
feats:
  - Alert
  - Speedy
energy_dice:
  energy_die_1: true
  energy_die_2: true
  energy_die_3: true
  energy_die_4: true
  energy_die_5: true
  energy_die_6: true
  energy_die_7: true
  energy_die_8: true
  energy_die_9: true
  energy_die_10: true
  energy_die_11: true
  energy_die_12: true
purse: 590.8
spell_slot:
  elf_faerie_fire: true
  elf_darkness: true
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
    bindTarget: energy_dice.energy_die_1
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
    bindTarget: spell_slot.elf_faerie_fire
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.elf_darkness
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: energy_dice.energy_die_1
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: energy_dice.energy_die_2
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: energy_dice.energy_die_3
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: energy_dice.energy_die_4
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: energy_dice.energy_die_5
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: energy_dice.energy_die_6
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: energy_dice.energy_die_7
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: energy_dice.energy_die_8
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: energy_dice.energy_die_9
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: energy_dice.energy_die_10
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: energy_dice.energy_die_11
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: energy_dice.energy_die_12
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: health.current
    evaluate: true
    value: getMetadata('health.max')
  - type: updateMetadata
    bindTarget: conditions.exhaustion.count
    evaluate: true
    value: "x == 0 ? 0 : x - 1"
  - type: updateMetadata
    bindTarget: Hit_Dice.Rogue_d8-1
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Rogue_d8-2
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Rogue_d8-3
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Rogue_d8-4
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Rogue_d8-5
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Rogue_d8-6
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Rogue_d8-7
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Rogue_d8-8
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Rogue_d8-9
    evaluate: true
    value: true
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