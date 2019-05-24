import React from 'react';

import {EXAMPLE_MONSTER} from '../Monster';

import BaseStatsSection from './sections/BaseStatsSection.jsx';
import DetailsSection from './sections/DetailsSection.jsx';
import MajorDivider from './sections/MajorDivider.jsx';
import NameSection from './sections/NameSection.jsx';
import SpecialAttributesSection from './sections/SpecialAttributesSection.jsx';
import StandardAttributesSection from './sections/StandardAttributesSection.jsx';

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

        <BaseStatsSection stats={EXAMPLE_MONSTER.stats}/>
        <MajorDivider />

        <SpecialAttributesSection attributes={EXAMPLE_MONSTER.specialAttributes} />
        <MajorDivider />

        <DetailsSection abilities={EXAMPLE_MONSTER.abilities} actions={EXAMPLE_MONSTER.actions}>
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
