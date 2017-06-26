import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import { currentEndDateSelector, currentStartDateSelector } from 'reducers/form/selectors';
import { handleGetEndDate, handleGetStartDate } from 'reducers/form/actions';
import LocationFilter from './LocationFilter';
import colors from 'styles/colors';
import styles from './styles';

const mapStateToProps state => ({
  currentStartDate: currentStartDateSelector(state),
  currentEndDate: currentEndDateSelector(state),
});
const mapDispatchToProps = dispatch => ({
  handleGetEndDate: maxDate => dispatch(handleGetEndDate(maxDate)),
  handleGetStartDate: minDate => dispatch(handleGetStartDate(minDate)),
});

class Filter extends Component {

  static propTypes = {
    handleGetEndDate: PropTypes.func,
    handleGetStartDate: PropTypes.func,
  };

  static defaultProps = {
    handleGetEndDate: () => {},
    handleGetStartDate: () => {},
  };

  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setDate(minDate.getDate());
    minDate.setHours(0,0,0,0);
    maxDate.setDate(maxDate.getDate() + 14);
    maxDate.setHours(0,0,0,0);
    this.state = {
      minDate: minDate,
      maxDate: maxDate,
    };
  }

  componentDidMount() {
    this.props.handleGetStartDate(this.state.minDate);
    this.props.handleGetEndDate(this.state.maxDate);
  }
  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };
  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };

  render() {
    const Date = [
      { id: 1, label: <p>start date: </p>, setting: <DatePicker hintText="" defaultDate={this.state.minDate} onChange={this.handleChangeMinDate} textFieldStyle={styles.customDate} /> },
      { id: 2, label: <p>end date: </p>, setting: <DatePicker hintText="" defaultDate={this.state.maxDate} onChange={this.handleChangeMaxDate} textFieldStyle={styles.customDate} /> },
      { id: 3, label: <p>Locations: </p>, setting: <LocationFilter /> },
    ];
    console.log('startDate', this.state.minDate);
    return (
      <div>
        <div style={{display: 'flex'}}>
          <h2> Filter </h2>
          <span style={{marginLeft: 10, marginTop: 25,}}>(to show only properties that match criteria)</span>
        </div>
        {
          Date.map(date =>
            <div key={date.id} style={styles.date}>
              {date.label}
              {date.setting}
            </div>,
          )
        }
        <div style={styles.applyContainer}>
          <Checkbox
            label="List only properties with all dates available"
            style={styles.checkbox}
          />
          <RaisedButton
            label="Apply filter"
            labelStyle={styles.textStyles}
            backgroundColor={colors.btnColors}
            style={styles.customStyle}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapDispatchToProps, mapStateToProps)(Filter);
