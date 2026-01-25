---
BASE_FOLDER: 3. Mechanics/CLI
health:
  current: 17
  max: 17
  temp: 0
  maxTmp: 0
inventory: {}
weapon_mastery: {}
conditions:
  heroic_inspiration: true
Bastion:
  name: ""
  current_day: 0
  defenders: 0
  facilities: []
Hit_Dice:
  Wizard_d6-1: true
  Wizard_d6-2: true
  Wizard_d6-3: true
name: Gandolf
dndClass:
  - Wizard: 3
subclass:
  - Evoker
background: Scribe
species: Human
alignment: Lawful Good
size: Medium
languages:
  - Common
  - Dwarvish
species_traits:
  - Resourceful
  - Skillful
  - Versatile
Spellcasting_Ability: INT
speed: 30
image: z_Assets/Misc/ImagePlaceholder.png
Spells:
  Prepared:
    Cantrips: []
    Spells: []
  Always_Prepared:
    Cantrips:
      - Message
      - Guidance
    Spells:
      - Healing Word
  Known:
    Cantrips: []
    Spells: []
spell_slot: {}
STR: 9
DEX: 12
CON: 13
INT: 17
WIS: 14
CHA: 10
Proficiencies:
  INT_SAVE: 1
  WIS_SAVE: 1
  Arcana: 1
  Medicine: 1
feats:
  - Magic Initiate:
      class: Cleric
      spell: Healing Word
      cantrips:
        - Message
        - Guidance
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