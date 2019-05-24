import React from 'react';
import {CATEGORY_CHOICES} from '../../CategoryChoiceConstants';

export default class NameSection extends React.Component {
  constructor(props) {
    super(props);

    this.defaultNameData = {
      name: "(The Nameless Thing)",
      size: CATEGORY_CHOICES.sizes[5],
      type: CATEGORY_CHOICES.types[9],
      alignment: 'neutral',
    };

    this.state = {
      editing: false,
      nameData: this.props.nameData ? this.props.nameData : defaultNameData
    };

    // Fix 'this' handling
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  edit() {
    this.setState({
      editing: true
    });
  }

  save() {
    this.setState({
      editing: false,
      nameData: {
        name: this.refs.nameInput.value,
        size: this.refs.sizeInput.value,
        type: this.refs.typeInput.value
      }
    });
  }

  cancelEdit() {
    this.setState({
      editing: false
    });
  }

  renderDisplay() {
    const details = this.state.nameData.size + " " + this.state.nameData.type + ", " + this.state.nameData.alignment;
    return (
      <section className="nameSection">
        <h1 className='monsterName'>{this.state.nameData.name}</h1>
        <div className='overviewDetails'>{details}</div>
        <button onClick={this.edit}>Edit</button>
      </section>
    );
  }

  renderEdit() {
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
  }

  render() {
    if (this.state.editing) {
      return this.renderEdit();
    } else {
      return this.renderDisplay();
    }
  }
}
