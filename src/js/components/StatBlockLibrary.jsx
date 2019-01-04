import React from 'react';
import StatBlockView from './StatBlockView.jsx';

export default class StatBlockLibrary extends React.Component {
  render() {
    return (
      <header>
        <h1 id='pageTitle'>Stat Block Container</h1>
        <StatBlockView/>
      </header>
    );
  }
}
