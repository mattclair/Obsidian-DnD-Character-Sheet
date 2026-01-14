---
Level: 5
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
  mage_armor: false
  poisoned: false
  prone: false
  restrained: false
  unconscious: false
  exhaustion:
    count: 0
    Level: false
health:
  max: 35
  current: 23
  temp: 12
  maxTmp: 12
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
  pact1: true
  level_1_4: true
  level_2_1: true
  level_2_2: true
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
      - DoomTide
      - Firebolt
      - Animal Messenger
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
Bastion:
  name: Ivy Lane
  current_day: 0
  defenders: 0
  facilities:
    - name: Bedroom
      type: basic
      size: cramped
      status: operational
      hirelings: 0
    - name: Parlor
      type: basic
      size: roomy
      status: operational
      hirelings: 0
    - name: Barrack
      type: special
      size: roomy
      hirelings: 1
      order: None
      status: operational
    - name: Smithy
      type: special
      size: roomy
      hirelings: 2
      order: None
      status: operational
weapon_mastery:
  "1":
    weapon: Spear
    mastery: Sap
  "2":
    weapon: Morningstar
    mastery: Sap
wild-shape-options: []
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