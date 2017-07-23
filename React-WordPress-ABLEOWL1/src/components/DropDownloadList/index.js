
import React from 'react';
import OptionallyDisplayed from '../OptionallyDisplayed';
import PropTypes from 'prop-types';

export default class TextField extends React.Component {

  constructor(props) {
    super(props);
    this.shouldDisplayError = this.shouldDisplayError.bind(this);
    this.state={selectValue:''}
  }

  shouldDisplayError() {
    return this.props.showError && this.props.errorText !== "";
  }

 handleChange=(e)=>this.setState({selectValue:e.target.value});

  render() {


    return (
    <div>
      <select value={this.state.selectValue} onChange={this.handleChange}>
        <option value="Select country">
          Select country
        </option>
        <option value="USA">
          USA
        </option>
        <option value="Australia">
          Australia
        </option>
        <option value="New Zealand">
          New Zealand
        </option>
      </select>

        <OptionallyDisplayed display={this.shouldDisplayError()}>
          <div className="validation-error">
            <span className="text">{this.props.errorText}</span>
          </div>
        </OptionallyDisplayed>
        </div>
    );
  }
}

TextField.propTypes = {
  showError: PropTypes.bool.isRequired,
  onFieldChanged: PropTypes.func.isRequired
};
