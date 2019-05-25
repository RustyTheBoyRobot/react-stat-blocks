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

    let nameData = this.props.nameData ? this.props.nameData : defaultNameData;

    this.state = {
      editing: false,
      name: nameData.name,
      size: nameData.size,
      type: nameData.type,
      alignment: nameData.alignment
    };

    // Fix 'this' handling
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.selectAlignment = this.selectAlignment.bind(this);
  }

  edit() {
    this.setState({
      editing: true
    });
  }

  save() {
    this.setState({
      editing: false,
      name: this.refs.nameInput.value,
      size: this.refs.sizeInput.value,
      type: this.refs.typeInput.value
    });
  }

  cancelEdit() {
    this.setState({
      editing: false
    });
  }

  selectAlignment(event) {
    const newAlignment = event.target.getAttribute("data-alignment");
    console.log("New alignment: " + newAlignment);
    this.setState({
      alignment: newAlignment
    });
  }

  renderDisplay() {
    const details = this.state.size + " " + this.state.type + ", " + this.state.alignment;
    return (
      <section className="nameSection">
        <h1 className='monsterName'>{this.state.name}</h1>
        <div className='overviewDetails'>{details}</div>
        <button onClick={this.edit}>Edit</button>
      </section>
    );
  }

  renderEdit() {
    let sizeOptions = CATEGORY_CHOICES.sizes.map((eachSize, i) =>
      <option key={i}>{eachSize}</option>
    );
    let typeOptions = CATEGORY_CHOICES.types.map((eachSize, i) =>
      <option key={i}>{eachSize}</option>
    );

    return (
      <section className="nameSection">
        <input className='monsterName inlineTextEdit' type='text' placeholder='Monster Name'
            defaultValue={this.state.name} ref='nameInput'/>
        <div>
          <table>
          <tbody>
            <tr>
              <td>Size:</td>
              <td>
                <select className='inlineTextEdit' defaultValue={this.state.size} ref='sizeInput'>
                  {sizeOptions}
                </select>
              </td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>
                <select className='inlineTextEdit' defaultValue={this.state.type} ref='typeInput'>
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
                      <td onClick={this.selectAlignment} data-alignment="lawful evil">LE</td>
                      <td onClick={this.selectAlignment} data-alignment="lawful neutral">LN</td>
                      <td onClick={this.selectAlignment} data-alignment="lawful good">LG</td>
                    </tr>
                    <tr>
                      <td onClick={this.selectAlignment} data-alignment="neutral evil">NE</td>
                      <td onClick={this.selectAlignment} data-alignment="neutral">TN</td>
                      <td onClick={this.selectAlignment} data-alignment="neutral good">NG</td>
                    </tr>
                    <tr>
                      <td onClick={this.selectAlignment} data-alignment="chaotic evil">CE</td>
                      <td onClick={this.selectAlignment} data-alignment="chaotic neutral">CN</td>
                      <td onClick={this.selectAlignment} data-alignment="chaotic good">CG</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan='3' onClick={this.selectAlignment} data-alignment="unaligned">Unaligned</td>
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
