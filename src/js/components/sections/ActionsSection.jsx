import React from 'react';
import CreatureAbility from '../CreatureAbility.jsx'

export default class ActionsSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actions: this.props.actions,
      editing: false
    };
  }

  handleEditClicked = () => {
    if (!this.state.editing) {
      this.setState({
        editing: true
      });
    }
  }

  handleActionChanged = (index, field, value) => {
    this.setState(prevState => {
      return {
        actions: [
          ...prevState.actions.slice(0, index),
          {
            ...prevState.actions[index],
            [field]: value
          },
          ...prevState.actions.slice(index + 1)
        ]
      };
    });
  }

  handleActionRemoved = (index) => {
    this.setState(prevState => {
      return {
        actions: [
          ...prevState.actions.slice(0, index),
          ...prevState.actions.slice(index + 1)
        ]
      };
    });
  }

  handleActionAdded = () => {
    this.setState(prevState => {
      return {
        actions: [
          ...prevState.actions,
          {name: '', description: ''}
        ]
      };
    });
  }

  handleSaveClicked = () => {
    this.setState({editing: false});

    this.props.update(this.state.actions);
  }

  handleCancelClicked = () => {
    this.setState({
      actions: this.props.actions,
      editing: false
    });
  }

  renderActionsForDisplay() {
    return this.state.actions.map(
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

  renderActionsForEdit() {
    const abilityList = this.state.actions.map(
      (each, i) => {
        return (
          <div key={i}>
            <CreatureAbility 
              name={each.name} 
              description={each.description} 
              isEditing={true}
              onChange={(key, value) => this.handleActionChanged(i, key, value)}
            />
            <button className="minorAction" onClick={() => this.handleActionRemoved(i)}>- Remove Action</button>
            <hr/>
          </div>
        );
      }
    );

    return (
      <div>
        {abilityList}
        <button className='minorAction' onClick={this.handleActionAdded}>+ New Action</button>
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
    let classes = 'actionsSection';
    let actionComponents = null;
    let actions = null;
    if (this.state.editing) {
      actionComponents = this.renderActionsForEdit();
      actions = this.renderActions();
    } else {
      classes += ' editable';
      actionComponents = this.renderActionsForDisplay();
    }
    
    return (
      <section className={classes} onClick={this.handleEditClicked}>
        <h2>Actions</h2>
        {actionComponents}
        {actions}
      </section>
    );
  }
}
