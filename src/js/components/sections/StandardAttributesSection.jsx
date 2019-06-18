import React from 'react';
import CreatureProperty from '../CreatureProperty.jsx'

export default class StandardAttributesSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.stdAttributes,
      editing: true,
    };

    // Fix 'this' handling
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleAddSpeedClick = this.handleAddSpeedClick.bind(this);
    this.handleCancelClicked = this.handleCancelClicked.bind(this);
    this.handleSaveClicked = this.handleSaveClicked.bind(this);
  }

  handleEditClick() {
    this.setState({editing: true});
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

  handleCancelClicked() {
    this.setState({
      ...this.props.stdAttributes,
      editing: false
    });
  }

  handleSaveClicked() {
    this.setState({editing: false});

    this.props.update({
      ac: parseInt(this.refs.armorValue.value),
      acDescription: this.refs.armorDescription.value,
      hp: parseInt(this.refs.hpValue.value),
      speeds: this.state.speeds,
    });
  }

  renderDisplay() {
    const acDetails = this.props.stdAttributes.ac + (this.props.stdAttributes.acDescription ? ' (' + this.props.stdAttributes.acDescription + ')' : '');
    const hpDetails = this.props.stdAttributes.hp + (this.props.stdAttributes.hpDescription ? ' (' + this.props.stdAttributes.hpDescription + ')' : '');
    const speedDetails = this.props.stdAttributes.speeds.map(function(eachSpeed) {
      return eachSpeed.value + 'ft' + (eachSpeed.description ? ' (' + eachSpeed.description + ')' : '');
    }).join(', ');
    return (
      <section className="standardAttributesSection editable" onClick={this.handleEditClick}>
        <CreatureProperty name='Armor Class' details={acDetails} />
        <CreatureProperty name='Hit Points' details={hpDetails} />
        <CreatureProperty name='Speed' details={speedDetails} />
      </section>
    );
  }

  renderSpeedEdits() {
    const speeds = this.state.speeds.map((eachSpeed, i) => {
      return (
        <li key={i}>
          <input type="text" className="speedValueInput smallValueInput" defaultValue={eachSpeed.value}/>
          (<input type="text" className="speedDescInput" placeholder="Optional: Type" defaultValue={eachSpeed.description}/>)
        </li>
      );
    });
    return (
      <div>
        <ul className="speedsList">
          {speeds}
          <li>
            <button onClick={this.handleAddSpeedClick}>+ Add Speed</button>
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
          <input type="text" className="smallValueInput" ref="hpValue" defaultValue={this.props.stdAttributes.hp}/>
          ()
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
