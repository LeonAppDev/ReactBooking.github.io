import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import LocationFilter from './LocationFilter';
import colors from 'styles/colors';
import styles from './styles';

class Filter extends Component {
  constructor(props) {
    super(props);

    const startDate = new Date();
    const endDate = new Date();
    startDate.setDate(startDate.getDate());
    startDate.setHours(0,0,0,0);
    endDate.setDate(endDate.getDate() + 14);
    endDate.setHours(0,0,0,0);
    this.state = {
      startDate: startDate,
      endDate: endDate,
    };
  }
  handleChangeStartDate = (event, date) => {
    this.setState({
      startDate: date,
    });
  };
  handleChangeEndDate = (event, date) => {
    this.setState({
      endDate: date,
    });
  };

  render() {
    const Date = [
      { id: 1, label: <p>start date: </p>, setting: <DatePicker hintText="" defaultDate={this.state.startDate} onChange={this.handleChangeStartDate} textFieldStyle={styles.customDate} /> },
      { id: 2, label: <p>end date: </p>, setting: <DatePicker hintText="" defaultDate={this.state.endDate} onChange={this.handleChangeEndDate} textFieldStyle={styles.customDate} /> },
      { id: 3, label: <p>Locations: </p>, setting: <LocationFilter /> },
    ];
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

export default Filter;
