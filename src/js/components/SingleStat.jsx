import React from 'react';

export default class SingleStat extends React.Component {
  constructor(props) {
    super(props);

    this.handleStatValueChanged = this.handleStatValueChanged.bind(this);
  }

  calculateModifier(statValue) {
    return Math.floor(statValue / 2) - 5;
  }

  handleStatValueChanged(event) {
    this.props.onChange(parseInt(event.target.value));
  }

  renderModifier() {
    const modifier = this.calculateModifier(this.props.value);
    return (
      <span>
        <span className='modSign'>{modifier < 0 ? '' : '+'}</span>
        <span className='modValue'>{modifier}</span>
      </span>
    );
  }

  renderDisplayValues() {
    return (
      <div className='highlightedText'>
        <span className='statValue'>{this.props.value}</span>
        (
          {this.renderModifier()}
        )
      </div>
    );
  }

  renderEditableValues() {
    return (
      <div>
        <input type="number" max="30" min="1" value={this.props.value} onChange={this.handleStatValueChanged}/>
        <br/>
        {this.renderModifier()}
      </div>
    );
  }

  render() {
    const display = this.props.editing ? this.renderEditableValues() : this.renderDisplayValues();
    return (
      <div className='indivStat'>
        <div className='statName majorTerm'>{this.props.name}</div>
        {display}
      </div>
    );
  }
}
