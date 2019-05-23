import React from 'react';

export default class CreatureProperty extends React.Component {
  render() {
    return (
      <div className='creatureProperty'>
        <span className='propName majorTerm'>{this.props.name}</span>
        <span className='propDetails highlightedText'>{this.props.details}</span>
      </div>
    );
  }
}
