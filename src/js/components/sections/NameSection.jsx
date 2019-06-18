import React from 'react';

import {CATEGORY_CHOICES} from '../../CategoryChoiceConstants';
import AlignmentOption from '../AlignmentOption.jsx';

export default class NameSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      alignment: this.props.nameData.alignment
    };

    // Fix 'this' handling
    this.save = this.save.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.selectAlignment = this.selectAlignment.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  save() {
    this.setState({
      editing: false
    });

    this.props.update({
      name: this.refs.nameInput.value,
      size: this.refs.sizeInput.value,
      type: this.refs.typeInput.value,
      alignment: this.state.alignment
    });
  }

  cancelEdit() {
    this.setState({
      editing: false,
      alignment: this.props.nameData.alignment
    });
  }

  selectAlignment(event) {
    const newAlignment = event.target.getAttribute("data-alignment");
    this.setState({
      alignment: newAlignment
    });
  }

  handleEditClick() {
    this.setState({
      editing: true
    });
  }

  renderDisplay() {
    const details = this.props.nameData.size + " " + this.props.nameData.type + ", " + this.props.nameData.alignment;
    return (
      <section className="nameSection editable" onClick={this.handleEditClick}>
        <h1 className='monsterName'>{this.props.nameData.name}</h1>
        <div className='overviewDetails'>{details}</div>
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
            defaultValue={this.props.nameData.name} ref='nameInput'/>
        <div>
          <table>
          <tbody>
            <tr>
              <td>Size:</td>
              <td>
                <select className='inlineTextEdit' defaultValue={this.props.nameData.size} ref='sizeInput'>
                  {sizeOptions}
                </select>
              </td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>
                <select className='inlineTextEdit' defaultValue={this.props.nameData.type} ref='typeInput'>
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
                      <AlignmentOption
                        selectAlignment={this.selectAlignment}
                        alignment={CATEGORY_CHOICES.alignments[0]}
                        currentAlignment={this.state.alignment}
                      />
                      <AlignmentOption
                        selectAlignment={this.selectAlignment}
                        alignment={CATEGORY_CHOICES.alignments[1]}
                        currentAlignment={this.state.alignment}
                      />
                      <AlignmentOption
                        selectAlignment={this.selectAlignment}
                        alignment={CATEGORY_CHOICES.alignments[2]}
                        currentAlignment={this.state.alignment}
                      />
                    </tr>
                    <tr>
                      <AlignmentOption
                        selectAlignment={this.selectAlignment}
                        alignment={CATEGORY_CHOICES.alignments[3]}
                        currentAlignment={this.state.alignment}
                      />
                      <AlignmentOption
                        selectAlignment={this.selectAlignment}
                        alignment={CATEGORY_CHOICES.alignments[4]}
                        currentAlignment={this.state.alignment}
                      />
                      <AlignmentOption
                        selectAlignment={this.selectAlignment}
                        alignment={CATEGORY_CHOICES.alignments[5]}
                        currentAlignment={this.state.alignment}
                      />
                    </tr>
                    <tr>
                      <AlignmentOption
                        selectAlignment={this.selectAlignment}
                        alignment={CATEGORY_CHOICES.alignments[6]}
                        currentAlignment={this.state.alignment}
                      />
                      <AlignmentOption
                        selectAlignment={this.selectAlignment}
                        alignment={CATEGORY_CHOICES.alignments[7]}
                        currentAlignment={this.state.alignment}
                      />
                      <AlignmentOption
                        selectAlignment={this.selectAlignment}
                        alignment={CATEGORY_CHOICES.alignments[8]}
                        currentAlignment={this.state.alignment}
                      />
                    </tr>
                    <tr>
                      <AlignmentOption
                        selectAlignment={this.selectAlignment}
                        alignment={CATEGORY_CHOICES.alignments[9]}
                        currentAlignment={this.state.alignment}
                      />
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
        <div className="sectionActions">
          <button className="revert" onClick={this.cancelEdit}>Cancel</button>
          <button className="finalize" onClick={this.save}>Save</button>
        </div>
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
