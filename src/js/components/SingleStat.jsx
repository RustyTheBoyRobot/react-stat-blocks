import React from 'react';

export default class SingleStat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statValue: this.props.value,
      modifier: this.calculateModifier(this.props.value)
    }
  }

  calculateModifier(statValue) {
    return Math.floor(statValue / 2) - 5;
  }

  render() {
    return (
      <div className='indivStat'>
        <div className='statName majorTerm'>{this.props.name}</div>
        <div className='highlightedText'>
          <span className='statValue'>{this.state.statValue}</span>

          (
            <span className='modSign'>{this.state.modifier < 0 ? '' : '+'}</span>
            <span className='modValue'>{this.state.modifier}</span>
          )
        </div>
      </div>
    );
  }
}
