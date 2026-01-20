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
  heroic_inspiration: false
  mage_armor: true
health:
  max: 39
  current: 11
  temp: 0
  maxTmp: 4
Luck:
  luck_point_1: false
  luck_point_2: false
  luck_point_3: false
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
  Tent: 1
  Shovel: 1
  Torch: 1
  Pole: 1
  Waterskin: 1
  Riding Horse: 1
  Rations: 11
  Riding Saddle: 1
attuned:
  - 1 Rod of the Pact Keeper
spell_slot:
  druid: false
  pact1: false
  pact2: true
  misty_step1: false
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
  magical_cunning-1: false
mastery:
purse: 1897
Bastion:
  name: Ivy Lane
  current_day: 1
  defenders: 0
  facilities:
    - name: Bedroom
      type: basic
      size: cramped
      hirelings: 0
      order: None
      status: operational
    - name: Storage
      type: basic
      size: roomy
      hirelings: 0
      order: None
      status: operational
    - name: Library
      type: special
      size: roomy
      hirelings: 1
      order: None
      status: operational
    - name: Arcane Study
      type: special
      size: roomy
      hirelings: 1
      order: "Craft: Blank Book"
      status: operational
      order_started_day: 1
      order_duration: 7
      order_result: A blank book is carefully prepared and ready for use.
BASE_FOLDER: 3. Mechanics/CLI
weapon_mastery: {}
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
