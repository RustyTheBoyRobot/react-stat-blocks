import React from 'react';
import CreatureProperty from '../CreatureProperty.jsx';

export default class SpecialAttributesSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="specialAttributesSection">
        {
          this.props.attributes.map((each, i) =>
            <CreatureProperty key={i} name={each.name} details={each.description} />
          )
        }
      </section>
    );
  }
}
