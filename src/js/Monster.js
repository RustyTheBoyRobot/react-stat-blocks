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
    hpDescription: '6d8 + 6',
    speeds: [
      {value: 25, description: ''}
    ]
  },
  stats: {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
  }

};
