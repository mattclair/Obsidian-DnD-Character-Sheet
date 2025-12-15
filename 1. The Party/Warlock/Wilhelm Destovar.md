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
  concentration_spell: Sleep
health:
  max: 39
  current: 39
  temp: 0
  maxTmp: 15
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
  pact1: true
  pact2: true
  misty_step1: true
  misty_step2: true
  misty_step3: true
  misty_step4: true
  misty_step5: true
  misty_step6: true
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