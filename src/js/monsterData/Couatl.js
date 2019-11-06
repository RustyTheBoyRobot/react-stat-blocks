import {CATEGORY_CHOICES} from '../CategoryChoiceConstants';

export const COUATL = {
  version: '1.0.0',
  nameData: {
    name: 'Couatl',
    size: CATEGORY_CHOICES.sizes[4],
    type: CATEGORY_CHOICES.types[2],
    alignment: CATEGORY_CHOICES.alignments[2]
  },
  stdAttributes: {
    ac: 19,
    acDescription: 'natural armor',
    hp: 97,
    hpDice: [
      {multiplier: 13, d: 8},
      {multiplier: 39, d: 1}
    ],
    speeds: [
      {value: 30, description: ''},
      {value: 90, description: 'fly'}
    ]
  },
  stats: {
    str: 16,
    dex: 20,
    con: 17,
    int: 18,
    wis: 20,
    cha: 18
  },
  specialAttributes: [
    {
      name: 'Saving Throws',
      description: 'Con +5, Wis +7, Cha +6'
    },
    {
      name: 'Damage Resistances',
      description: 'radiant'
    },
    {
      name: 'Damage Immunities',
      description: 'psychic; bludgeoning, piercing, and slashing from nonmagical weapons'
    },
    {
      name: 'Senses',
      description: 'truesight 120 ft., passive Perception 15'
    },
    {
      name: 'Languages',
      description: 'all, telepathy 120 ft.'
    },
    {
      name: 'Challenge',
      description: '4 (1,100 XP)'
    }
  ],
  abilities: [
    {
      name: 'Innate Spellcasting',
      description: 'The couatl\'s spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbal components:\n\nAt will: detect evil and good, detect magic, detect thoughts\n3/day each: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield\n1/day each: dream, greater restoration, scrying'
    },
    {
      name: 'Magic Weapons',
      description: 'The couatl\'s weapon attacks are magical.'
    },
    {
      name: 'Shielded Mind',
      description: 'The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location.'
    }
  ],
  actions: [
    {
      name: 'Bite',
      description: 'Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake.'
    },
    {
      name: 'Constrict',
      description: 'Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature. Hit: 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can\'t constrict another target.'
    },
    {
      name: 'Change Shape',
      description: 'The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl\'s choice).\nIn a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form.'
    }
  ]
};