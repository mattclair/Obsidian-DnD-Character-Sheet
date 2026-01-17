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
subclass: Path of the Berserker
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
  - z_Assets/Misc/Carmac.webp
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
  Speed:
    value: 10
    source: Fast Movement
conditions:
  heroic_inspiration: false
  rage: true
health:
  max: 57
  current: 57
  temp: 0
  maxTmp: 0
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
  Rope: 1
  Bedroll: 1
  Riding Saddle: 1
  Riding Horse: 1
  Rations: 10
  Climbers Kit: 1
  Tinker Tools: 1
  Woodcarvers Tools: 1
  Herbalism Kit: 1
  Tent: 1
  Shovel: 1
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
Rage:
  rage-1: false
  rage-2: false
  rage-3: true
  rage-4: true
purse: 156
BASE_FOLDER: 3. Mechanics/CLI
weapon_mastery: {}
Bastion:
  name: ""
  current_day: 0
  defenders: 0
  facilities: []
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