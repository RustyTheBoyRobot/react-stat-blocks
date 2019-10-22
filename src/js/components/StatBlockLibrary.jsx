import React from 'react';
import StatBlockView from './StatBlockView.jsx';

export default class StatBlockLibrary extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1 id='pageTitle'>Stat Block Library</h1>
        </header>
        <div id='library'>
          <div className='libraryItem'>
            <StatBlockView/>
          </div>
          <div className='libraryItem'>
            <img src="https://raw.githubusercontent.com/Valloric/statblock5e/gh-pages/images/statblock.png"/>
          </div>
        </div>
      </div>
    );
  }
}
