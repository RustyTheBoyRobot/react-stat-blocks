import React from 'react';

export default class CreatureTrait extends React.Component {
  render: function() {
    return (
      <div className='creatureTrait'>
        <span className='traitName'>{this.props.name}</span>
        <span className='traitDetails'>{this.props.details}</span>
      </div>
    );
  }
}
