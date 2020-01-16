import React from 'react';

export default class CreatureProperty extends React.Component {
  constructor(props) {
    super(props);
  }

  handleValueChanged = (key, event) => {
    this.props.onChange(key, event.target.value);
  }

  handleNameChanged = (event) => {
    this.handleValueChanged('name', event)
  }

  handleDescriptionChanged = (event) => {
    this.handleValueChanged('description', event)
  }

  renderDisplay() {
    return (
      <div className='creatureProperty'>
        <span className='propName majorTerm'>{this.props.name}</span>
        <span className='propDetails highlightedText'>{this.props.description || this.props.children}</span>
      </div>
    );
  }

  renderEdit() {
    return (
      <div className='creatureProperty'>
        <input
          type="text"
          className="propName majorTerm"
          value={this.props.name}
          placeholder="Property"
          list="propertyChoices"
          onChange={this.handleNameChanged}
        />
        <br/>
        <textarea
          className="propDetails highlightedText"
          value={this.props.description || this.props.children}
          placeholder="Details"
          onChange={this.handleDescriptionChanged}
        />
      </div>
    );
  }

  render() {
    return this.props.isEditing ? this.renderEdit() : this.renderDisplay();
  }
}
