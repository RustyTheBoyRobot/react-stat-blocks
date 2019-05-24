import React from 'react';
import CreatureProperty from '../CreatureProperty.jsx'

export default class StandardAttributesSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.stdAttributes;
  }

  render() {
    const acDetails = this.state.ac + (this.state.acDescription ? ' (' + this.state.acDescription + ')' : '');
    const hpDetails = this.state.hp + (this.state.hpDescription ? ' (' + this.state.hpDescription + ')' : '');
    const speedDetails = this.state.speeds.map(function(eachSpeed) {
      return eachSpeed.value + 'ft' + (eachSpeed.description ? ' (' + eachSpeed.description + ')' : '');
    }).join(', ');
    return (
      <section className="standardAttributesSection">
        <CreatureProperty name='Armor Class' details={acDetails} />
        <CreatureProperty name='Hit Points' details={hpDetails} />
        <CreatureProperty name='Speed' details={speedDetails} />
      </section>
    );
  }
}
