import React from 'react';

import {EXAMPLE_MONSTER} from '../Monster';

import BaseStatsSection from './sections/BaseStatsSection.jsx';
import DetailsSection from './sections/DetailsSection.jsx';
import MajorDivider from './sections/MajorDivider.jsx';
import NameSection from './sections/NameSection.jsx';
import SpecialAttributesSection from './sections/SpecialAttributesSection.jsx';
import StandardAttributesSection from './sections/StandardAttributesSection.jsx';

export default class StatBlockView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...EXAMPLE_MONSTER,
    };

    // Fix 'this' handling
    this.updateData = this.updateData.bind(this);
    this.updateNameData = this.updateNameData.bind(this);
    this.updateStandardAttributes = this.updateStandardAttributes.bind(this);
  }

  updateData(section, newData) {
    this.setState(prevState => {
      const mergedData = {
        ...prevState[section],
        ...newData
      };

      return {
        [section]: mergedData
      };
    });
  }

  updateNameData(newNameData) {
    this.updateData('nameData', newNameData);
  }

  updateStandardAttributes(newStdAttributes) {
    this.updateData('stdAttributes', newStdAttributes);
  }

  updateStats(newStats) {
    this.updateData('stats', newStats);
  }

  render() {
    return (
      <div className='fullStatBlock'>
        <div className='boundingBar'/>
        <div className="statBlockBody">
          <NameSection nameData={this.state.nameData} update={this.updateNameData} />
          <MajorDivider />

          <StandardAttributesSection stdAttributes={this.state.stdAttributes} update={this.updateStandardAttributes} />
          <MajorDivider />

          <BaseStatsSection stats={this.state.stats}/>
          <MajorDivider />

          <SpecialAttributesSection attributes={this.state.specialAttributes} />
          <MajorDivider />

          <DetailsSection abilities={this.state.abilities} actions={this.state.actions}>
          </DetailsSection>
        </div>
        <div className='boundingBar'/>
      </div>
    );
  }
}
