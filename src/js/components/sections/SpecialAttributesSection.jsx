import React from 'react';
import CreatureProperty from '../CreatureProperty.jsx';

export default class SpecialAttributesSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attributes: this.props.attributes,
      editing: false
    }
  // Fix 'this' handling
  this.handleEditClicked = this.handleEditClicked.bind(this);
  this.handleAttributeChanged = this.handleAttributeChanged.bind(this);
  this.handleAttributeAdded = this.handleAttributeAdded.bind(this);
  this.handleAttributeRemoved = this.handleAttributeRemoved.bind(this);
  this.handleSaveClicked = this.handleSaveClicked.bind(this);
  this.handleCancelClicked = this.handleCancelClicked.bind(this);
}

handleEditClicked() {
  if (!this.state.editing) {
    this.setState({
      editing: true
    });
  }
}

handleAttributeChanged(index, field, value) {
  this.setState(prevState => {
    return {
      attributes: [
        ...prevState.attributes.slice(0, index),
        {
          ...prevState.attributes[index],
          [field]: value
        },
        ...prevState.attributes.slice(index + 1)
      ]
    };
  });
}

handleAttributeRemoved(index) {
  this.setState(prevState => {
    return {
      attributes: [
        ...prevState.attributes.slice(0, index),
        ...prevState.attributes.slice(index + 1)
      ]
    };
  });
}

handleAttributeAdded() {
  this.setState(prevState => {
    return {
      attributes: [
        ...prevState.attributes,
        {name: '', description: ''}
      ]
    };
  });
}

handleSaveClicked() {
  this.setState({editing: false});

  this.props.update(this.state.attributes);
}

handleCancelClicked() {
  this.setState({
    attributes: this.props.attributes,
    editing: false
  });
}

renderAttributesForDisplay() {
  return this.state.attributes.map(
    (each, i) => {
      return (
        <CreatureProperty 
          key={i} 
          name={each.name} 
          description={each.description}
        />
      );
    }
  );
}

renderAttributesForEdit() {
  const attributeList = this.state.attributes.map(
    (each, i) => {
      return (
        <div key={i}>
          <CreatureProperty
            name={each.name} 
            description={each.description} 
            isEditing={true}
            onChange={(key, value) => this.handleAttributeChanged(i, key, value)}
          />
          <button className="minorAction" onClick={() => this.handleAttributeRemoved(i)}>- Remove Attribute</button>
          <hr/>
        </div>
      );
    }
  );

  return (
    <div>
      {attributeList}
      <button className='minorAction' onClick={this.handleAttributeAdded}>+ New Attribute</button>
    </div>
  );
}

renderActions() {
  return (
    <div className="sectionActions">
      <button className="revert" onClick={this.handleCancelClicked}>Cancel</button>
      <button className="finalize" onClick={this.handleSaveClicked}>Save</button>
    </div>
  );
}

render() {
  let classes = 'specialAttributesSection';
  let attributeComponents = null;
  let pageActions = null;
  if (this.state.editing) {
    attributeComponents = this.renderAttributesForEdit();
    pageActions = this.renderActions();
  } else {
    classes += ' editable';
    attributeComponents = this.renderAttributesForDisplay();
  }
  
  return (
    <section className={classes} onClick={this.handleEditClicked}>
      {attributeComponents}
      {pageActions}
    </section>
  );
}

  // render() {
  //   return (
  //     <section className="specialAttributesSection">
  //       {
  //         this.state.attributes.map((each, i) =>
  //           <CreatureProperty key={i} name={each.name} details={each.description} />
  //         )
  //       }
  //     </section>
  //   );
  // }
}
