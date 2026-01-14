---
Level: 5
STR: 9
DEX: 11
CON: 16
INT: 17
WIS: 19
CHA: 12
name: Varnok Thunderpaw
dndClass: Druid
subclass: Circle of the Moon
background: Sage
species: Goliath
species_traits:
  - Giant Ancestry
  - Large Form
  - Powerful Build
  - Cloud Giant
alignment: Neutral-Good
size: Medium
senses:
resistances: Cold Damage
languages:
  - Common
  - Druidic
  - Giant
  - Orc
tools:
  - Calligrapher's Supplies
  - Herbalism Kit
instruments:
image: z_Assets/Misc/Varnok-Thunderpaw.jpg
Spellcasting_Ability: WIS
speed: 35
Base_AC: 10
armor_training:
  - Light Armor
  - Shields
weapon_training:
  - Simple Weapons
Proficiencies:
  INT_SAVE: 1
  WIS_SAVE: 1
  Animal Handling: 1
  Arcana: 1
  Athletics: 1
  History: 1
  Medicine: 1
Stat_Bonus:
  Arcana:
    value: 4
    source: "Primal Order: Magician"
  Nature:
    value: 4
    source: "Primal Order: Magician"
  Armor_Class:
    value: 2 + 2
    source: Shield and Studded Leather Armor
conditions:
  blinded: false
  charmed: false
  concentrating: false
  deafened: false
  frightened: false
  grappled: false
  heroic_inspiration: false
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
  current: 28
  temp: 0
  maxTmp: 5
Luck: {}
Hit_Dice:
  Druid_d8-1: true
  Druid_d8-2: true
  Druid_d8-3: true
  Druid_d8-4: true
  Druid_d8-5: true
  Ranger_d10-1: true
  Ranger_d10-2: true
  Ranger_d10-3: true
  Ranger_d10-4: true
  Ranger_d10-5: true
inventory:
  HandAxe: 1
  Javelin: 4
  Light Crossbow: 1
  Rope: 1
  Bedroll: 1
  Riding Horse: 1
  Rations: 9
  Climbers Kit: 1
  Tinker Tools: 1
  Woodcarvers Tools: 1
  Herbalism Kit: 1
  Tent: 1
  Shovel: 1
  Potion of Healing: 1
  Riding Saddle: 1
attuned:
  - Bag of Holding
spell_slot:
  wizard: true
  shadow_touched_invisibility: true
  shadow_touched_silent_image: true
  level_3_2: true
  level_3_1: true
  level_2_3: true
  level_2_2: true
  level_2_1: true
  level_1_1: true
  level_1_2: true
  level_1_3: true
  level_1_4: true
  druid: true
  hunters_mark1: true
  hunters_mark2: true
  hunters_mark3: true
  hunters_mark4: true
  hunters_mark5: true
  misty_step1: true
  misty_step2: true
  misty_step3: true
feats:
  - Shadow Touched:
      spell: Silent Image
  - Magic Initiate:
      class: Wizard
      spell: Detect Magic
      cantrips:
        - Minor Illusion
        - Prestidigitation
Spells:
  Prepared:
    Cantrips:
      - Elementalism
      - Message
    Spells:
      - Thunderwave
      - Pass Without Trace
      - Hold Person
      - Heat Metal
      - Spike Growth
      - Wind Wall
      - Fog Cloud
      - Darkvision
      - Create Or Destroy Water
  Always_Prepared:
    Cantrips:
      - Minor Illusion
      - Prestidigitation
      - Druidcraft
      - Speak with Animals
    Spells:
      - Cure Wounds
      - Moonbeam
      - Starry Wisp
      - Invisibility
      - Find Familiar
      - Detect Magic
      - Silent Image
      - Entangle
      - Conjure Animals
      - Misty Step
  Known:
    Cantrips: []
    Spells:
      - Charm Person
      - Detect Poison and Disease
      - Faerie Fire
      - Goodberry
      - Healing Word
      - Ice Knife
      - Jump
      - Longstrider
      - Protection from Evil and Good
      - Purify Food and Drink
      - Aid
      - Animal Messenger
      - Augury
      - Barkskin
      - Beast Sense
      - Continual Flame
      - Enhance Ability
      - Enlarge Reduce
      - Find Traps
      - Flame Blade
      - Flaming Sphere
      - Gust of Wind
      - Lesser Restoration
      - Locate Animals or Plants
      - Locate Object
      - Protection from Poison
      - Summon Beast
      - Aura of Vitality
      - Call Lightning
      - Conjure Animals
      - Daylight
      - Dispel Magic
      - Elemental Weapon
      - Feign Death
      - Meld into Stone
      - Plant Growth
      - Protection from Energy
      - Revivify
      - Sleet Storm
      - Speak with Plants
      - Summon Fey
      - Water Breathing
      - Water Walk
      - Animal Friendship
      - Speak With The Dead
Wild_Shape:
  wild_shape-1: true
  wild_shape-2: true
mastery:
wild-shape-options: []
purse: 1615.5
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