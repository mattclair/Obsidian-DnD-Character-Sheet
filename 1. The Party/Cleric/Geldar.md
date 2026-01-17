---
Level: 5
STR: 12
DEX: 12
CON: 12
INT: 12
WIS: 12
CHA: 12
name: Geldar
dndClass: Cleric
subclass: Knowledge Domain
background: Wayfarer
species: Elf
species_traits:
  - Drow
  - Darkvision
  - Elven Lineage
  - Fey Ancestry
  - Keen Senses
  - Trance
alignment: Chaotic-Good
size: Medium
senses: Darkvision (120ft)
languages:
  - Common
tools:
instruments:
image:
  - z_Assets/Misc/Geldar.png
Spellcasting_Ability: WIS
speed: 30
Base_AC: 10
armor_training:
weapon_training: Simple Melee
Proficiencies:
Stat_Bonus:
conditions:
  heroic_inspiration: false
health:
  max: 11
  current: 11
  temp: 0
  maxTmp: 0
Hit_Dice:
  Cleric_d8-1: true
  Cleric_d8-2: true
  Cleric_d8-3: true
  Cleric_d8-4: true
  Cleric_d8-5: true
inventory: {}
attuned:
spell_slot:
  level1_2: true
  level1_1: true
  level_1_1: true
  level_1_2: true
  level_1_3: true
  level_1_4: true
  level_2_3: true
  level_2_2: true
  level_2_1: true
  level_3_1: true
  level_3_2: false
  elf_faerie_fire: true
  elf_darkness: true
feats:
Spells:
  Prepared:
    Cantrips:
    Spells:
  Always_Prepared:
    Cantrips:
    Spells:
      - Command
      - Identity
      - Augury
      - Suggestion
      - Nondetection
      - Speak with Dead
  Known:
    Cantrips: []
    Spells: []
Eldritch_Invocations:
mastery:
purse: 0
BASE_FOLDER: 3. Mechanics/CLI
weapon_mastery: {}
Bastion:
  name: ""
  current_day: 0
  defenders: 0
  facilities: []
Channel_Divinity:
  divinity-1: true
  divinity-2: true
Wild_Shape: {}
Second_Wind: {}
Action_Surge: {}
Focus_Points: {}
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



### 💰Money Tracking `VIEW[{purse}]`gp

```dataviewjs
await dv.view("z_Assets/Code/Character_Purse_Tracking");
```