import React from 'react';

import SingleStat from '../SingleStat.jsx';

export default class BaseStatsSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: this.props.stats,
      editing: false
    };
  }

  handleEditClicked = () => {
    if (!this.state.editing) {
      this.setState({
        editing: true
      });
    }
  }

  handleStatValueChanged = (key, value) => {
    this.setState(prevState => {
      return {
        stats: {
          ...prevState.stats,
          [key]: value
        }
      }
    });
  }

  handleSaveClicked = () => {
    this.setState({
      editing: false
    });

    this.props.update({
      ...this.state.stats
    });
  }

  handleCancelClicked = () => {
    this.setState({
      stats: this.props.stats,
      editing: false
    });
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
    let actions = null;
    let classes = 'statsSection';
    if (this.state.editing) {
      actions = this.renderActions();
    } else {
      classes += ' editable';
    }

    let statsElements = [];
    for (let i = 0; i < Object.keys(this.state.stats).length; i++) {
      const key = Object.keys(this.state.stats)[i];
      const name = key.toUpperCase();
      statsElements.push(
        <SingleStat
          name={name}
          key={key}
          value={this.state.stats[key]}
          editing={this.state.editing}
          onChange={(value) => this.handleStatValueChanged(key, value)}
        />
      );
    }

    return (
      <section className={classes} onClick={this.handleEditClicked}>
        <div className='eachStatContainer'>
          {statsElements}
        </div>
        {actions}
      </section>
    );
  }
}
