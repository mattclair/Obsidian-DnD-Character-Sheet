---
Level: 4
STR: 11
DEX: 20
CON: 15
INT: 10
WIS: 15
CHA: 11
name: Harlan Wyvernspur
dndClass: Ranger
subclass: Gloom Stalker
background: Guide
species: Human
species_traits:
  - Resourceful
  - Skillful
  - Versatile
alignment: Neutral-Good
size: Medium
senses: Darkvision 60ft
languages:
  - Common
  - Orc
  - Dwarvish
  - Goblin
  - Giant
tools:
  - Cartographer's Tools
instruments:
image: z_Assets/Misc/Harlen_Wyvernspur.webp
Spellcasting_Ability: WIS
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
  DEX_SAVE: 1
  Athletics: 1
  Stealth: 1
  History: 1
  Insight: 1
  Perception: 1
  Survival: 2
Stat_Bonus:
  Armor_Class:
    value: 2
    source: Studded Leather Armor
  Initiative:
    value: WIS_MOD
    source: Dread Ambusher
conditions:
  blinded: false
  charmed: false
  concentrating: false
  deafened: false
  frightened: false
  grappled: false
  heroic_inspiration: true
  incapacitated: false
  invisible: false
  mage_armor: false
  paralyzed: false
  petrified: false
  poisoned: false
  prone: false
  restrained: false
  stunned: false
  unconscious: false
  exhaustion:
    count: 0
    Level: false
health:
  max: 35
  current: 35
  temp: 0
  maxTmp: 10
Luck:
Hit_Dice:
  Ranger_d10-1: true
  Ranger_d10-2: true
  Ranger_d10-3: true
  Ranger_d10-4: true
  Ranger_d10-5: true
inventory:
  Shortsword: 2
  Studded Leather Armor: 1
  LongBow: 1
  Arrows (pack of 20): 1
  Quiver: 1
  Sprig of Mistletoe (Druid Focus): 1
  Backpack: 1
  Bedroll: 1
  Oil: 1
  Rope: 1
  Tinderbox: 1
  Waterskin: 1
  Potion of Healing: 2
  Cloak of Billowing: 1
  Sack: 8
  Boots of Striding and Springing: 1
attuned:
  - Cloak of Billowing
ammunition:
  arrow: d12
spell_slot:
  druid: true
  level_1_1: true
  level_1_2: true
  level_1_3: true
  hunters_mark1: true
  hunters_mark2: true
  hunters_mark3: true
  hunters_mark4: true
  hunters_mark5: true
feats:
  - Savage Attacker
  - Sharpshooter
  - Archery
  - Magic Initiate:
      class: Druid
      spell: Goodberry
      cantrips:
        - Druidcraft
        - Guidance
Spells:
  Prepared:
    Cantrips:
    Spells:
      - Hunters Mark
      - Faerie Fire
      - Cure Wounds
  Always_Prepared:
    Cantrips:
      - Guidance
      - Druidcraft
    Spells:
      - Disguise Self
  Known:
    Cantrips: []
    Spells:
      - Alert
      - Jump
      - Detect Magic
      - Longstrider
mastery:
  Shortsword: Vex
  LongBow: Slow
purse: 213.5
Dreadful_Strike:
  dreadful_strike-1: true
  dreadful_strike-2: true
  dreadful_strike-3: true
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
    bindTarget: spell_slot.hunters_mark1
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.hunters_mark2
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.hunters_mark3
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.hunters_mark4
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.hunters_mark5
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Dreadful_Strike.dreadful_strike-1
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Dreadful_Strike.dreadful_strike-2
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Dreadful_Strike.dreadful_strike-3
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: conditions.heroic_inspiration
    evaluate: true
    value: true
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