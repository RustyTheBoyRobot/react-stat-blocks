import React from 'react';

export default class MajorDivider extends React.Component {
  render() {
    return (
      <svg height="5" width="400" className='majorDivider'>
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </svg>
    );
  }
}
