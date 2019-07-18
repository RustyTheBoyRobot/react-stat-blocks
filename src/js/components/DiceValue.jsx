import React from 'react';

export default class DiceValue extends React.Component {
  constructor(props) {
    super(props);

    /*
    props = {
      onRoll: function that accepts a value and roll results
      onComponentsChanged: function that reports changes to the dice components/values to encapsulating components
    }
    */
    const compos = this.props.components || [{multiplier: 1, d: 6}];

    this.state = {
      components: compos,
      lastRolledValue: 0,
      lastRolledText: "",
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.components !== prevState.components && this.props.onComponentsChanged) {
      this.props.onComponentsChanged(this.state.components);
    }
  }

  rollDie(dieSides) {
    return 1 + Math.floor(Math.random() * (dieSides - 1));
  }

  rollComponent(comp) {
    if (comp.d === 1) {
      return {
        value: comp.multiplier,
        text: comp.multiplier
      };
    }

    let total = 0;
    let text = '';
    for (let i = 0; i < comp.multiplier; i++) {
      const singleResult = this.rollDie(comp.d);
      if (i > 0) {
        text += ' + ';
      }
      text += `${singleResult}/${comp.d}`;
      total += singleResult;
    }

    return {
      value: total,
      text
    };
  }

  handleRollClicked() {
    const allRollResults = this.state.components.map(each => this.rollComponent(each));
    const rollResult = allRollResults.map(each => each.value).reduce((a, b) => a + b);
    const rollText = allRollResults.map(each => each.text).filter(each => each !== '').join(' + ');

    this.state.lastRolledValue = rollResult;
    this.state.lastRolledText = rollText

    if (this.props.onRoll) {
      this.props.onRoll(rollResult, rollText);
    }
  }

  handleMultiplierChanged(event, componentIndex) {
    const updatedMultiplier = parseInt(event.target.value);
    this.setState(prevState => {
      return {
        components: [
          ...prevState.components.slice(0, componentIndex),
          {
            ...prevState.components[componentIndex],
            multiplier: updatedMultiplier
          },
          ...prevState.components.slice(componentIndex + 1)
        ]
      };
    });
  }

  handleDieChanged(event, componentIndex) {
    const updatedSides = parseInt(event.target.value);
    this.setState(prevState => {
      const updatedComponents = [
        ...prevState.components.slice(0, componentIndex),
        {
          ...prevState.components[componentIndex],
          d: updatedSides
        },
        ...prevState.components.slice(componentIndex + 1)
      ];
      if (!this.hasD1Component(updatedComponents)) {
        updatedComponents.push({multiplier: 0, d: 1});
      }
      return {
        components: updatedComponents
      };
    });
  }

  hasD1Component(components) {
    return components.filter(comp => comp.d === 1).length > 0;
  }

  renderDisplay() {
    const dieText = this.state.components.map(eachDie => {
      const ending = eachDie.d === 1 ? '' : `d${eachDie.d}`;
      return `${eachDie.multiplier}${ending}`;
    }).reduce((a,b) => `${a} + ${b}`);

    return (
      <span>{dieText}</span>
    );
  }

  renderSingleDieInput(die, index) {
    return (
      <span className="dieComponent" key={index}>
        <input className="multiplier" type="number" defaultValue={die.multiplier} onChange={(evt) => this.handleMultiplierChanged(evt, index)}/>
        <select className="sides" defaultValue={die.d} onChange={(evt) => this.handleDieChanged(evt, index)}>
          <option value="1"> </option>
          <option value="4">d4</option>
          <option value="6">d6</option>
          <option value="8">d8</option>
          <option value="10">d10</option>
          <option value="12">d12</option>
          <option value="20">d20</option>
          <option value="100">d100</option>
          <option value="2">d2</option>
        </select>
      </span>
    );
  }

  renderEdit() {
    const forms = this.state.components.map((eachDie, i) => this.renderSingleDieInput(eachDie, i));
    return (
      <span className="diceValue">
        <span>
          {forms}
        </span>
        <span className="rollIcon" onClick={evt => this.handleRollClicked(evt)}>&#9860;</span>
      </span>
    );
  }

  render() {
    if (this.props.editing) {
      return this.renderEdit();
    } else {
      return this.renderDisplay();
    }
  }
}
