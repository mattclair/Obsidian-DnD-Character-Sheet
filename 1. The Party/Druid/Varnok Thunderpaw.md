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
  heroic_inspiration: true
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
  current: 35
  temp: 0
  maxTmp: 10
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
  Potion of Healing: 3
  Bag of Holding: 1
  Staff of the Python: 1
  Shield: 1
  Backpack: 1
  Herbalism Kit: 1
  Staff: 1
  Oil: 1
  Rations: 1
  Rope: 1
  Bedroll: 1
  Tinderbox: 1
  Torch: 1
  Waterskin: 1
  studded leather armor: 1
attuned:
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
      - Fog Cloud
      - Spike Growth
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
      - Create or Destroy Water
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
      - Darkvision
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
      - Wind Wall
      - Animal Friendship
Wild_Shape:
  wild_shape-1: true
  wild_shape-2: true
mastery:
wild-shape-options:
  - frog
  - raven
  - constrictor snake
  - bat
  - ape
  - black bear
purse: 1215.5
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