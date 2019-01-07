import React from 'react';

import SingleStat from './SingleStat.jsx';

export default class BaseStatsSection extends React.Component {
  render() {
    return (
      <section className="statsSection">
        <div className='eachStatContainer'>
          <SingleStat name='STR' value='14' />
          <SingleStat name='DEX' value='11' />
          <SingleStat name='CON' value='13' />
          <SingleStat name='WIS' value='1' />
          <SingleStat name='INT' value='3' />
          <SingleStat name='CHA' value='1' />
        </div>
      </section>
    );
  }
}
