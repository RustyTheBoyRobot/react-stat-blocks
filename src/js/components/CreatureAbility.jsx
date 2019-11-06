import React from 'react';

export default class CreatureAbility extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleValueChanged = this.handleValueChanged.bind(this);
  }

  handleValueChanged(key, event) {
    this.props.onChange(key, event.target.value);
  }

  renderDisplay() {
    return (
      <div className='creatureAbility'>
        <span className='abilityName'>{this.props.name}.</span>
        <span className='abilityDescription'>{this.props.description}</span>
      </div>
    );
  }

  renderEdit() {
    return (
      <div className='creatureAbility'>
        <input
          type="text"
          className="abilityName"
          value={this.props.name}
          placeholder="Ability Name"
          onChange={(event) => this.handleValueChanged('name', event)}
        />
        <br/>
        <textarea
          className="abilityDescription"
          value={this.props.description}
          placeholder="Description"
          onChange={(event) => this.handleValueChanged('description', event)}
        />
      </div>
    );
  }

  render() {
    return this.props.isEditing ? this.renderEdit() : this.renderDisplay();
  }
}
