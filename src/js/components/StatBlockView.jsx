import React from 'react';

import {EXAMPLE_MONSTER} from '../Monster';

import BaseStatsSection from './sections/BaseStatsSection.jsx';
import AbilitiesSection from './sections/AbilitiesSection.jsx'
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
    this.updateArrayData = this.updateArrayData.bind(this);
    this.updateNameData = this.updateNameData.bind(this);
    this.updateStandardAttributes = this.updateStandardAttributes.bind(this);
    this.updateStats = this.updateStats.bind(this);
    this.updateAbilities = this.updateAbilities.bind(this);
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

  updateArrayData(section, newArray) {
    this.setState({
      [section]: newArray
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

  updateAbilities(newAbilities) {
    this.updateArrayData('abilities', newAbilities);
  }

  render() {
    return (
      <div className='fullStatBlock'>
        <div className='boundingBar'/>
        {/* TODO: make this bounding bar clickable to allow users to select pre-set creatures...? */}
        <div className="statBlockBody">
          <NameSection nameData={this.state.nameData} update={this.updateNameData} />
          <MajorDivider />

          <StandardAttributesSection stdAttributes={this.state.stdAttributes} update={this.updateStandardAttributes} />
          <MajorDivider />

          <BaseStatsSection stats={this.state.stats} update={this.updateStats}/>
          <MajorDivider />

          <SpecialAttributesSection attributes={this.state.specialAttributes} />
          <MajorDivider />

          <AbilitiesSection abilities={this.state.abilities} update={this.updateAbilities}/>
          <DetailsSection abilities={this.state.abilities} actions={this.state.actions} />
        </div>
        <div className='boundingBar'/>
        {/* TODO: make this bounding bar clickable to customize which sections show up */}
      </div>
    );
  }
}
