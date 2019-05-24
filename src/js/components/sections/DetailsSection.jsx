import React from 'react';

export default class DetailsSection extends React.Component {
  render() {
    return (
      <section className='detailsSection'>
        <section className='abilitiesSection'>
        </section>
        <section className='actionsSection'>
          <h2>Actions</h2>
          {this.props.children}
        </section>
      </section>
    );
  }
}
