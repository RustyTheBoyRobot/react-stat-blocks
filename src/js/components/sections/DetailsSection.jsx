import React from 'react';
import CreatureAbility from '../CreatureAbility.jsx'

export default class DetailsSection extends React.Component {
  render() {
    return (
      <section className='actionsSection'>
        <h2>Actions</h2>
        {this.props.actions.map(
          (each, i) => <CreatureAbility key={i} name={each.name} description={each.description} />
        )}
      </section>
    );
  }
}
