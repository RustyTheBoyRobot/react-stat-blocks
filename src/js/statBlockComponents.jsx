const EXAMPLE_MONSTER = {
  nameData: {
    name: 'Animated Armor'
  },

};

// Components
const NameSection = React.createClass({
  getInitialState: function() {
    const defaultNameData = {
      name: "(The Nameless Thing)"
    };
    let data = this.props.nameData ? this.props.nameData : defaultNameData

    return {
      editing: false,
      nameData: data
    };
  },
  edit: function() {
    this.setState({
      editing: true
    });
  },
  save: function() {
    this.setState({
      editing: false,
      nameData: {
        name: this.refs.nameInput.value
      }
    });
  },
  cancelEdit: function() {
    this.setState({
      editing: false
    });
  },
  renderDisplay: function() {
    return (
      <section className="nameSection">
        <h1 className='monsterName'>{this.state.nameData.name}</h1>
        <div className='overviewDetails'>Subtext</div>
        <button onClick={this.edit}>Edit</button>
      </section>
    );
  },
  renderEdit: function() {
    return (
      <section className="nameSection">
        <input className='inlineTextEdit' type='text' placeholder='Monster Name'
            defaultValue={this.state.nameData.name} ref='nameInput'/>
        <div>Subtext</div>
        <button onClick={this.save}>Save</button>
        <button onClick={this.cancelEdit}>Cancel</button>
      </section>
    );
  },
  render: function() {
    if (this.state.editing) {
      return this.renderEdit();
    } else {
      return this.renderDisplay();
    }
  }
});

const DetailsSection = React.createClass({
  render: function() {
    return (
      <section className='detailsSection'>
        <section className='abilitiesSection'>
        </section>
        <section className='actionsSection'>
          <h2>Actions</h2>
          <hr/>
          {this.props.children}
        </section>
      </section>
    );
  }
});

const StatBlockView = React.createClass({
  edit: function() {
    console.debug("You clicked Edit. Hopefully someone implements that at some point.");
  },
  render: function() {
    return (
      <div className='fullStatBlock'>
        <NameSection nameData={EXAMPLE_MONSTER.nameData} />
        <hr className='sectionBound'/>

        <section className="standardAttributesSection">
          Armor
        </section>
        <hr className='sectionBound'/>

        <section className="statsSection">
          Str 0
        </section>
        <hr className='sectionBound'/>

        <section className="specialAttributesSection">
          Armor
        </section>
        <hr className='sectionBound'/>

        <DetailsSection>
          <p>This is completely customized</p>
        </DetailsSection>
        <hr className='sectionBound'/>

        <section className="buttonsSection">
          <button onClick={this.edit}>Edit</button>
          <button>Save</button>
        </section>
      </div>
    );
  }
});

const StatBlockLibrary = React.createClass({
  render: function() {
    return (
      <header>
        <h1 id='pageTitle'>Stat Block Container</h1>
        <StatBlockView/>
      </header>
    );
  }
});

// Bootstrap
ReactDOM.render(
  <StatBlockLibrary/>,
  document.getElementById("root")
);
