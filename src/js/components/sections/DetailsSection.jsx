import React from 'react';
import CreatureAbility from '../CreatureAbility.jsx'

export default class DetailsSection extends React.Component {
  render() {
    return (
      <section className='detailsSection'>
        <section className='abilitiesSection'>
          {this.props.abilities.map(each => <CreatureAbility name={each.name} description={each.description} />)}
        </section>
        <section className='actionsSection'>
          <h2>Actions</h2>
          {this.props.actions.map(each => <CreatureAbility name={each.name} description={each.description} />)}
        </section>
      </section>
    );
  }
}
