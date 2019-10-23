import React from 'react';

import CreatureAbility from '../CreatureAbility.jsx';

export default class AbilitiesSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      abilities: this.props.abilities,
      editing: false
    };

    // Fix 'this' handling
    this.handleEditClicked = this.handleEditClicked.bind(this);
    this.handleAbilityChanged = this.handleAbilityChanged.bind(this);
    this.handleAbilityAdded = this.handleAbilityAdded.bind(this);
    this.handleAbilityRemoved = this.handleAbilityRemoved.bind(this);
    this.handleSaveClicked = this.handleSaveClicked.bind(this);
    this.handleCancelClicked = this.handleCancelClicked.bind(this);
  }

  handleEditClicked() {
    if (!this.state.editing) {
      this.setState({
        editing: true
      });
    }
  }

  handleAbilityChanged(index, field, value) {
    this.setState(prevState => {
      return {
        abilities: [
          ...prevState.abilities.slice(0, index),
          {
            ...prevState.abilities[index],
            [field]: value
          },
          ...prevState.abilities.slice(index + 1)
        ]
      };
    });
  }

  handleAbilityRemoved(index) {
    this.setState(prevState => {
      return {
        abilities: [
          ...prevState.abilities.slice(0, index),
          ...prevState.abilities.slice(index + 1)
        ]
      };
    });
  }

  handleAbilityAdded() {
    this.setState(prevState => {
      return {
        abilities: [
          ...prevState.abilities,
          {name: '', description: ''}
        ]
      };
    });
  }

  handleSaveClicked() {
    this.setState({editing: false});

    this.props.update(this.state.abilities);
  }

  handleCancelClicked() {
    this.setState({
      abilities: this.props.abilities,
      editing: false
    });
  }

  renderAbilitiesForDisplay() {
    return this.state.abilities.map(
      (each, i) => {
        return (
          <CreatureAbility 
            key={i} 
            name={each.name} 
            description={each.description}
          />
        );
      }
    );
  }

  renderAbilitiesForEdit() {
    const abilityList = this.state.abilities.map(
      (each, i) => {
        return (
          <div key={i}>
            <CreatureAbility 
              name={each.name} 
              description={each.description} 
              isEditing={true}
              onChange={(key, value) => this.handleAbilityChanged(i, key, value)}
            />
            <button className="minorAction" onClick={() => this.handleAbilityRemoved(i)}>- Remove Ability</button>
            <hr/>
          </div>
        );
      }
    );

    return (
      <div>
        {abilityList}
        <button className='minorAction' onClick={this.handleAbilityAdded}>+ New Ability</button>
      </div>
    );
  }

  renderActions() {
    return (
      <div className="sectionActions">
        <button className="revert" onClick={this.handleCancelClicked}>Cancel</button>
        <button className="finalize" onClick={this.handleSaveClicked}>Save</button>
      </div>
    );
  }

  render() {
    let classes = 'abilitiesSection';
    let abilityComponents = null;
    let actions = null;
    if (this.state.editing) {
      abilityComponents = this.renderAbilitiesForEdit();
      actions = this.renderActions();
    } else {
      classes += ' editable';
      abilityComponents = this.renderAbilitiesForDisplay();
    }
    
    return (
      <section className={classes} onClick={this.handleEditClicked}>
        {abilityComponents}
        {actions}
      </section>
    );
  }
}