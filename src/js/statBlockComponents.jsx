const CATEGORY_CHOICES = {
  sizes: [
    'Fine',
    'Diminutive',
    'Tiny',
    'Small',
    'Medium',
    'Large',
    'Huge',
    'Gargantuan',
    'Colossal',
    'Colossal+'
  ],
  types: [
    'aberration',
    'beast',
    'celestial',
    'construct',
    'dragon',
    'elemental',
    'fey',
    'fiend',
    'giant',
    'humanoid',
    'monstrosity',
    'ooze',
    'plant',
    'undead'
  ]
};

const EXAMPLE_MONSTER = {
  nameData: {
    name: 'Animated Armor',
    size: CATEGORY_CHOICES.sizes[4],
    type: CATEGORY_CHOICES.types[3],
    alignment: 'unaligned'
  },
  stdAttributes: {
    ac: 18,
    acDescription: 'natural armor',
    hp: 33,
    hpDescription: '6d8 + 6',
    speeds: [
      {value: 25, description: ''}
    ]
  },
  stats: {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
  }

};

// === COMPONENTS =========================================
const MajorDivider = React.createClass({
  render: function() {
    return (
      <svg height="5" width="400" className='majorDivider'>
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </svg>
    );
  }
});

const CreatureProperty = React.createClass({
  render: function() {
    return (
      <div className='creatureProperty'>
        <span className='propName'>{this.props.name}</span>
        <span className='propDetails'>{this.props.details}</span>
      </div>
    );
  }
});

const CreatureTrait = React.createClass({
  render: function() {
    return (
      <div className='creatureTrait'>
        <span className='traitName'>{this.props.name}</span>
        <span className='traitDetails'>{this.props.details}</span>
      </div>
    );
  }
});

const NameSection = React.createClass({
  getInitialState: function() {
    const defaultNameData = {
      name: "(The Nameless Thing)",
      size: CATEGORY_CHOICES.sizes[5],
      type: CATEGORY_CHOICES.types[9],
      alignment: 'neutral'
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
        name: this.refs.nameInput.value,
        size: this.refs.sizeInput.value,
        type: this.refs.typeInput.value
      }
    });
  },
  cancelEdit: function() {
    this.setState({
      editing: false
    });
  },
  renderDisplay: function() {
    const details = this.state.nameData.size + " " + this.state.nameData.type + ", " + this.state.nameData.alignment;
    return (
      <section className="nameSection">
        <h1 className='monsterName'>{this.state.nameData.name}</h1>
        <div className='overviewDetails'>{details}</div>
        <button onClick={this.edit}>Edit</button>
      </section>
    );
  },
  renderEdit: function() {
    let sizeOptions = CATEGORY_CHOICES.sizes.map(function(eachSize, i) {
      return (<option key={i}>{eachSize}</option>);
    });
    let typeOptions = CATEGORY_CHOICES.types.map(function(eachSize, i) {
      return (<option key={i}>{eachSize}</option>);
    });

    return (
      <section className="nameSection">
        <input className='monsterName inlineTextEdit' type='text' placeholder='Monster Name'
            defaultValue={this.state.nameData.name} ref='nameInput'/>
        <div>
          <table>
          <tbody>
            <tr>
              <td>Size:</td>
              <td>
                <select className='inlineTextEdit' defaultValue={this.state.nameData.size} ref='sizeInput'>
                  {sizeOptions}
                </select>
              </td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>
                <select className='inlineTextEdit' defaultValue={this.state.nameData.type} ref='typeInput'>
                  {typeOptions}
                </select>
              </td>
            </tr>
            <tr>
              <td>Alignment:</td>
              <td>
                <table className='alignmentTable majorTerm'>
                  <tbody>
                    <tr>
                      <td>LE</td>
                      <td>LN</td>
                      <td>LG</td>
                    </tr>
                    <tr>
                      <td>NE</td>
                      <td>TN</td>
                      <td>NG</td>
                    </tr>
                    <tr>
                      <td>CE</td>
                      <td>CN</td>
                      <td>CG</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan='3'>Unaligned</td>
                    </tr>
                  </tfoot>
                </table>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
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

const StandardAttributesSection = React.createClass({
  getInitialState: function() {
    return this.props.stdAttributes;
  },
  render: function() {
    const acDetails = this.state.ac + (this.state.acDescription ? ' (' + this.state.acDescription + ')' : '');
    const hpDetails = this.state.hp + (this.state.hpDescription ? ' (' + this.state.hpDescription + ')' : '');
    const speedDetails = this.state.speeds.map(function(eachSpeed) {
      return eachSpeed.value + 'ft' + (eachSpeed.description ? ' (' + eachSpeed.description + ')' : '');
    }).join(', ');
    return (
      <section className="standardAttributesSection">
        <CreatureProperty name='Armor Class' details={acDetails} />
        <CreatureProperty name='Hit Points' details={hpDetails} />
        <CreatureProperty name='Speed' details={speedDetails} />
      </section>
    );
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
        <MajorDivider />

        <StandardAttributesSection stdAttributes={EXAMPLE_MONSTER.stdAttributes} />
        <MajorDivider />

        <section className="statsSection">
          Str 0
        </section>
        <MajorDivider />

        <section className="specialAttributesSection">
          Armor
        </section>
        <MajorDivider />

        <DetailsSection>
          <p>This is completely customized</p>
        </DetailsSection>

        <MajorDivider />
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
