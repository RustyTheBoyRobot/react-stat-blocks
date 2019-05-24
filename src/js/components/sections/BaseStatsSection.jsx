import React from 'react';

import SingleStat from '../SingleStat.jsx';

export default class BaseStatsSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="statsSection">
        <div className='eachStatContainer'>
          <SingleStat name='STR' value={this.props.stats.str} />
          <SingleStat name='DEX' value={this.props.stats.dex} />
          <SingleStat name='CON' value={this.props.stats.con} />
          <SingleStat name='WIS' value={this.props.stats.wis} />
          <SingleStat name='INT' value={this.props.stats.int} />
          <SingleStat name='CHA' value={this.props.stats.cha} />
        </div>
      </section>
    );
  }
}
