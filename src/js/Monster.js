import {CATEGORY_CHOICES} from './CategoryChoiceConstants';

export const EXAMPLE_MONSTER = {
  nameData: {
    name: 'Animated Armor',
    size: CATEGORY_CHOICES.sizes[4],
    type: CATEGORY_CHOICES.types[3],
    alignment: 'unaligned'
  },
  stdAttributes: {
    ac: 18,
    acDescription: 'natural armor',
    hp: 33,
    hpDice: [
      {multiplier: 6, d: 8},
      {multiplier: 6, d: 1}
    ],
    speeds: [
      {value: 25, description: ''}
    ]
  },
  stats: {
    str: 14,
    dex: 11,
    con: 13,
    int: 3,
    wis: 1,
    cha: 1
  },
  specialAttributes: [
    {
      name: 'Damage Immunities',
      description: 'poison, psychic'
    },
    {
      name: 'Condition Immunities',
      description: 'blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned'
    },
    {
      name: 'Senses',
      description: 'blindsight 60 ft. (blind beyond this radius), passive Perception 6'
    },
    {
      name: 'Languages',
      description: '—'
    },
    {
      name: 'Challenge',
      description: '1 (200 XP)'
    }
  ],
  abilities: [
    {
      name: 'Antimagic Susceptibility',
      description: 'The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster’s spell save DC or fall unconscious for 1 minute.'
    },
    {
      name: 'False Appearance',
      description: 'While the armor remains motionless, it is indistinguishable from a normal suit of armor.'
    }
  ],
  actions: [
    {
      name: 'Multiattack',
      description: 'The armor makes two melee attacks.'
    },
    {
      name: 'Slam',
      description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.'
    }
  ]
};
