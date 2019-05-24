import React from 'react';

export default class CreatureAbility extends React.Component {
  render() {
    return (
      <div className='creatureAbility'>
        <span className='abilityName'>{this.props.name}</span>
        <span className='abilityDescription'>{this.props.description}</span>
      </div>
    );
  }
}
