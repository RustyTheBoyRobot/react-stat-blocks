import React from 'react';

import {ANIMATED_ARMOR} from '../monsterData/AnimatedArmor';
import {COUATL} from '../monsterData/Couatl';

import StatBlockView from './StatBlockView.jsx';

export default class StatBlockLibrary extends React.Component {
  render() {
    const creatures = [
      ANIMATED_ARMOR,
      COUATL
    ];
    const creatureBlocks = creatures.map((each, i) => (
        <div className='libraryItem' key={i}>
          <StatBlockView data={each}/>
        </div>
    ));
    return (
      <div>
        <header>
          <h1 id='pageTitle'>Stat Block Library</h1>
        </header>
        <div id='library'>
          {creatureBlocks}
        </div>
        <datalist id="propertyChoices">
          <option>Saving Throws</option>
          <option>Skills</option>
          <option>Damage Vulnerabilities</option>
          <option>Damage Resistances</option>
          <option>Damage Immunities</option>
          <option>Condition Immunities</option>
          <option>Senses</option>
          <option>Languages</option>
          <option>Challenge</option>
        </datalist>
      </div>
    );
  }
}
