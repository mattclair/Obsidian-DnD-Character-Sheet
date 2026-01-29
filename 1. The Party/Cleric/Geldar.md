---
Level: 5
STR: 12
DEX: 12
CON: 12
INT: 12
WIS: 12
CHA: 12
name: Geldar
dndClass:
  - Cleric: 5
subclass:
  - Knowledge Domain
background: Wayfarer
species: Elf
species_traits:
  - Drow
  - Darkvision
  - Elven Lineage
  - Fey Ancestry
  - Keen Senses
  - Trance
alignment: ""
size: Medium
senses: Darkvision (120ft)
languages: Common
tools:
instruments:
image: z_Assets/Misc/Geldar.png
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
  current: 11
  max: 11
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
  level_3_2: true
  elf_faerie_fire: true
  elf_darkness: true
  shadow_touched_message: true
  shadow_touched_invisibility: true
  druid: true
feats:
Spells:
  Prepared:
    Cantrips:
      - Mending
      - Resistance
      - Toll The Dead
      - Word Of Radiance
    Spells:
      - Bane
      - Bless
      - Healing Word
      - Inflict Wounds
      - Sanctuary
      - Sacred Flame
      - Light
      - Command
      - Daylight
  Always_Prepared:
    Cantrips:
      - Thaumaturgy
    Spells:
      - Magic Weapon
      - Shield Of Faith
      - Spiritual Weapon
  Known:
    Cantrips:
      - Mending
      - Resistance
      - Sacred Flame
      - Toll The Dead
      - Light
      - Word Of Radiance
    Spells:
      - Healing Word
      - Inflict Wounds
      - Bane
      - Bless
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
  divinity-1: false
  divinity-2: false
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