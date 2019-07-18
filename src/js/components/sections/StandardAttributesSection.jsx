import React from 'react';
import CreatureProperty from '../CreatureProperty.jsx'
import DiceValue from '../DiceValue.jsx'

export default class StandardAttributesSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.stdAttributes,
      hpLastRollDetails: "",
      editing: false,
    };

    // Fix 'this' handling
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleHpDiceChanged = this.handleHpDiceChanged.bind(this);
    this.handleHpRolled = this.handleHpRolled.bind(this);
    this.handleHpManuallyChanged = this.handleHpManuallyChanged.bind(this);
    this.handleAddSpeedClick = this.handleAddSpeedClick.bind(this);
    this.handleDeleteSpeedClick = this.handleDeleteSpeedClick.bind(this);
    this.handleCancelClicked = this.handleCancelClicked.bind(this);
    this.handleSaveClicked = this.handleSaveClicked.bind(this);
  }

  handleEditClick() {
    this.setState({editing: true});
  }

  handleHpDiceChanged(newComponents) {
    this.setState({
      hpDice: newComponents
    });
  }

  handleHpRolled(total, resultsText) {
    this.setState({
      hp: total,
      hpLastRollDetails: resultsText
    });
  }

  handleHpManuallyChanged(event) {
    this.setState({
      hp: parseInt(event.target.value)
    });
  }

  handleAddSpeedClick() {
    this.setState(prevState => {
      return {
        speeds: [
          ...prevState.speeds,
          {value: 10, description: 'not walking'}
        ]
      };
    });
  }

  handleDeleteSpeedClick(speedIndex) {
    this.setState(prevState => {
      return {
        speeds: [
          ...prevState.speeds.slice(0, speedIndex),
          ...prevState.speeds.slice(speedIndex + 1)
        ]
      };
    });
  }

  handleSpeedValueChanged(event, index) {
    const newSpeed = parseInt(event.target.value);
    this.setState(prevState => {
      const updatedSpeed = prevState.speeds[index];
      updatedSpeed.value = newSpeed;
      return {
        speeds: [
          ...prevState.speeds.slice(0, index),
          updatedSpeed,
          ...prevState.speeds.slice(index + 1)
        ]
      };
    });
  }

  handleSpeedDescriptionChanged(event, index) {
    const newDesc = event.target.value;
    this.setState(prevState => {
      const updatedSpeed = prevState.speeds[index];
      updatedSpeed.description = newDesc;
      return {
        speeds: [
          ...prevState.speeds.slice(0, index),
          updatedSpeed,
          ...prevState.speeds.slice(index + 1)
        ]
      };
    });
  }

  handleCancelClicked() {
    this.setState({
      ...this.props.stdAttributes,
      editing: false
    });
  }

  handleSaveClicked() {
    this.setState({editing: false});

    const organizedDice = this.state.hpDice
        // Remove extra entries
        .filter(eachDie => eachDie.multiplier !== 0)
        // Sort from highest sides to lowest
        .sort((a, b) => b.d - a.d);

    this.props.update({
      ac: parseInt(this.refs.armorValue.value),
      acDescription: this.refs.armorDescription.value,
      hp: parseInt(this.refs.hpValue.value),
      hpDice: organizedDice,
      speeds: this.state.speeds,
    });
  }

  renderDisplay() {
    const acDetails = this.props.stdAttributes.ac + (this.props.stdAttributes.acDescription ? ' (' + this.props.stdAttributes.acDescription + ')' : '');
    let hpDiceText = null;
    if (this.props.stdAttributes.hpDice) {
      hpDiceText = (
        <span className="spaceLeft">
          (
          <DiceValue components={this.props.stdAttributes.hpDice}/>
          )
        </span>
      );
    }
    const speedDetails = this.props.stdAttributes.speeds.map(function(eachSpeed) {
      return eachSpeed.value + 'ft' + (eachSpeed.description ? ' (' + eachSpeed.description + ')' : '');
    }).join(', ');
    return (
      <section className="standardAttributesSection editable" onClick={this.handleEditClick}>
        <CreatureProperty name='Armor Class' details={acDetails} />
        <CreatureProperty name='Hit Points'>
          {this.props.stdAttributes.hp}
          {hpDiceText}
        </CreatureProperty>
        <CreatureProperty name='Speed' details={speedDetails} />
      </section>
    );
  }

  renderSpeedEdits() {
    const speeds = this.state.speeds.map((eachSpeed, i) => {
      let deleteButton;
      if (i > 0) {
        deleteButton = (<button className="minorAction" onClick={() => this.handleDeleteSpeedClick(i)}>- Remove Speed</button>);
      }
      return (
        <li key={i}>
          <input
            type="text"
            className="speedValueInput smallValueInput"
            onChange={evt => this.handleSpeedValueChanged(evt, i)}
            defaultValue={eachSpeed.value}
          />
          (<input
            type="text"
            className="speedDescInput"
            placeholder="Optional: Type"
            onChange={evt => this.handleSpeedDescriptionChanged(evt, i)}
            defaultValue={eachSpeed.description}
          />)
          {deleteButton}
        </li>
      );
    });
    return (
      <div>
        <ul className="speedsList">
          {speeds}
          <li>
            <button onClick={this.handleAddSpeedClick} className="minorAction">+ Add Speed</button>
          </li>
        </ul>
      </div>
    );
  }

  renderEdit() {
    return (
      <section className="standardAttributesSection">
        <div className="creatureProperty">
          <span className="majorTerm">Armor Class</span>
          <input type="text" className="smallValueInput" ref="armorValue" defaultValue={this.props.stdAttributes.ac}/>
          (<input type="text" ref="armorDescription" defaultValue={this.props.stdAttributes.acDescription}/>)
        </div>
        <div className="creatureProperty">
          <span className="majorTerm">Hit Points</span>
          <input
            type="text"
            className="smallValueInput"
            title={this.state.hpLastRollDetails}
            ref="hpValue"
            value={this.state.hp}
            onChange={this.handleHpManuallyChanged}
          />
          <br/>
          <DiceValue
            components={this.props.stdAttributes.hpDice}
            editing={this.state.editing}
            onRoll={this.handleHpRolled}
            onComponentsChanged={this.handleHpDiceChanged}
          />
        </div>
        <div className="creatureProperty">
          <span className="majorTerm">Speed(s)</span>
          {this.renderSpeedEdits()}
        </div>
        <div className="sectionActions">
          <button className="revert" onClick={this.handleCancelClicked}>Cancel</button>
          <button className="finalize" onClick={this.handleSaveClicked}>Save</button>
        </div>
      </section>
    );
  }

  render() {
    if (this.state.editing) {
      return this.renderEdit();
    } else {
      return this.renderDisplay();
    }
  }
}
