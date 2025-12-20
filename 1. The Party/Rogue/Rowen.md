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
    count: 0
    Level: false
resistances:
  - Advantage when rolling saving throws against the Charmed condition
  - Immune to Sleep
health:
  max: 34
  current: 34
  temp: 0
  maxTmp: 10
Luck: {}
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