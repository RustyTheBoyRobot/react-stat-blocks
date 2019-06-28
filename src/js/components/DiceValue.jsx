import React from 'react';

export default class DiceValue extends React.Component {
  constructor(props) {
    super(props);

    /*
    props = {
      onRoll: function that accepts a value and components
    }
    */
    const compos = this.props.components || [{multiplier: 1, d: 6}];

    this.state = {
      components: compos,
      lastRolledValue: 0,
      lastRolledText: "",
    };
  }

  // TODO: When there is no d1 component, render a new d1 component
  // TODO: Update function for parent

  rollDie(dieSides) {
    return 1 + Math.floor(Math.random() * (dieSides - 1));
  }

  rollComponent(comp) {
    if (comp.d === 1) {
      return {
        value: comp.multiplier,
        text: ''
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
      this.props.onRoll(rollResult, this.state.components);
    } else {
      alert(`You rolled ${rollResult} (die values: ${rollText})`);
    }
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
      <span className="dieComponent">
        <input className="multiplier" type="number" defaultValue={die.multiplier} />
        <select className="sides" defaultValue={die.d}>
          <option value="1">(raw value)</option>
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
