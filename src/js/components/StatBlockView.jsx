import React from 'react';

import {EXAMPLE_MONSTER} from '../Monster';

import DetailsSection from './DetailsSection.jsx';
import MajorDivider from './MajorDivider.jsx';
import NameSection from './NameSection.jsx';
import StandardAttributesSection from './StandardAttributesSection.jsx';

export default class StatBlockView extends React.Component {
  edit() {
    console.debug("You clicked Edit. Hopefully someone implements that at some point.");
  }

  render() {
    return (
      <div className='fullStatBlock'>
        <NameSection nameData={EXAMPLE_MONSTER.nameData} />
        <MajorDivider />

        <StandardAttributesSection stdAttributes={EXAMPLE_MONSTER.stdAttributes} />
        <MajorDivider />

        <section className="statsSection">
          Str 0
        </section>
        <MajorDivider />

        <section className="specialAttributesSection">
          Armor
        </section>
        <MajorDivider />

        <DetailsSection>
          <p>This is completely customized</p>
        </DetailsSection>

        <MajorDivider />
        <section className="buttonsSection">
          <button onClick={this.edit}>Edit</button>
          <button>Save</button>
        </section>
      </div>
    );
  }
}
