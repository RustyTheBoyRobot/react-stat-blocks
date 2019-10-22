import React from 'react';

export default class CreatureAbility extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: !!this.props.isEditing,
    };
  }

  renderDisplay() {
    return (
      <div className='creatureAbility'>
      <span className='abilityName'>{this.props.name}</span>
      <span className='abilityDescription'>{this.props.description}</span>
      </div>
    );
  }

  renderEdit() {
    return (
      <div className='creatureAbility'>
        <input type="text" className="abilityName" defaultValue={this.props.name} />
        <br/>
        <textarea className="abilityDescription" defaultValue={this.props.description}></textarea>
      </div>
    );
  }

  render() {
    return this.state.isEditing ? this.renderEdit() : this.renderDisplay();
  }
}
