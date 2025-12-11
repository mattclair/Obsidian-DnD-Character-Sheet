---
Level: 5
STR: 9
DEX: 12
CON: 14
INT: 9
WIS: 10
CHA: 20
name: Wilhelm Destovar
dndClass: Warlock
subclass: Archfey Patron
background: Wayfarer
species: Human
species_traits:
  - Resourceful
  - Skillful
  - Versatile
alignment: Chaotic-Good
size: Medium
senses: Devil's Sight
languages:
  - Common
  - Giant
  - Dwarvish
tools:
  - Thieve's Tools
instruments:
image:
  - z_Assets/Misc/Wilhelm_Portrait.png
  - z_Assets/Misc/Wilhelm_Eldritch_Blast.png
  - z_Assets/Misc/Wilhelm-eldritchBlast.png
Spellcasting_Ability: CHA
speed: 30
Base_AC: 10
armor_training: Light Armor
weapon_training: Simple Melee
Proficiencies:
  WIS_SAVE: 1
  CHA_SAVE: 1
  Stealth: 1
  Arcana: 1
  Investigation: 1
  Insight: 1
  Deception: 1
  Persuasion: 1
Stat_Bonus:
  Spell_Attack:
    value: 1
    source: 1 Rod of the Pact Keeper
  Spell_Save_DC:
    value: 1
    source: 1 Rod of the Pact Keeper
conditions:
  blinded: false
  charmed: false
  concentrating: true
  deafened: false
  frightened: false
  grappled: false
  heroic_inspiration: true
  incapacitated: false
  invisible: false
  mage_armor: true
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
  concentration_spell: Witch Bolt
health:
  max: 32
  current: 32
  temp: 0
  maxTmp: 9
Luck:
  luck_point_1: true
  luck_point_2: true
  luck_point_3: true
Hit_Dice:
  Warlock_d8-1: true
  Warlock_d8-2: true
  Warlock_d8-3: true
  Warlock_d8-4: true
  Warlock_d8-5: true
inventory:
  Holy Scroll Text: 2
  Silver Neclace with Holy Symbol of Torm: 1
  Holy Water: 2
  1 Rod of the Pact Keeper: 1
  Potion of Healing: 1
  Quarterstaff: 1
  Sickle: 1
  Thieves' Tools: 1
  Traveler's Clothes: 1
  Playing Cards (Gaming Set): 1
  Scholar's Pack: 1
  Book (Occult Lore): 1
  Orb (Arcane Focus): 1
  Dagger: 2
  Bedroll: 1
  Pouch: 2
attuned:
  - 1 Rod of the Pact Keeper
spell_slot:
  druid: true
  pact1: false
  pact2: true
  misty_step1: false
  misty_step2: true
  misty_step3: true
  misty_step4: true
  misty_step5: true
feats:
  - Lucky
  - Spell Sniper
  - Magic Initiate:
      class: Druid
      spell: Healing Word
      cantrips:
        - Guidance
        - Message
Spells:
  Prepared:
    Cantrips:
      - Eldritch Blast
      - Mage Hand
      - Minor Illusion
    Spells:
      - Hex
      - Suggestion
      - Witch Bolt
      - Hunger Of Hadar
      - Hellish Rebuke
      - Fly
  Always_Prepared:
    Cantrips:
      - Guidance
      - Message
      - Mage Armor
    Spells:
      - Healing Word
      - Faerie Fire
      - Calm Emotions
      - Misty Step
      - Phantasmal Force
      - Sleep
      - Tenser's Floating Disk
      - Blink
      - Plant Growth
  Known:
    Cantrips: []
    Spells: []
Eldritch_Invocations:
  - Armor of Shadows
  - Agonizing Blast
  - Devil's Sight
  - Repelling Blast
  - Eldritch Mind
Magical_Cunning:
  magical_cunning-1: true
mastery:
purse: 641.29
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
    bindTarget: Magical_Cunning.magical_cunning-1
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.pact1
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.pact2
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.pact3
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.pact4
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.arcanum1
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.arcanum2
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.arcanum3
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.arcanum4
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.druid
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.misty_step1
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.misty_step2
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.misty_step3
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.misty_step4
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.misty_step5
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: spell_slot.misty_step6
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: conditions.heroic_inspiration
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Luck.luck_point_1
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Luck.luck_point_2
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
    bindTarget: Hit_Dice.Warlock_d8-1
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Warlock_d8-2
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Warlock_d8-3
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Warlock_d8-4
    evaluate: true
    value: true
  - type: updateMetadata
    bindTarget: Hit_Dice.Warlock_d8-5
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