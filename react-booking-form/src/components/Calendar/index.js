import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import PropertyLists from './PropertyLists';
import styles from './styles';
import colors from 'styles/colors';

function Calendar() {
  return (
    <div>
      <h2>Selected properties calendar</h2>
      <div>
        <div style={{ display: 'flex',}}>
          <span style={{ color: '#0967a2',}}>See total cost of delected</span>
          <span style={{ marginLeft: 70,}}>x = booked, k = king bed, Q = Queen, D = Double bed, S = Single bed, &#9786; indicates max persons</span>
        </div>
        <div style={{ display: 'flex' }}>
          <p>Month:</p>
          <DatePicker hintText="" textFieldStyle={styles.customDate} />
        </div>
      </div>
      <PropertyLists />
      <div>
        <RaisedButton
         label="Add to cart" labelStyle={styles.textStyles}
         backgroundColor={colors.btnColors} style={styles.customStyle}
        />
        <div style={styles.colors}>
          <p>Book car</p>
          <p>Hire guide/driver + car </p>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
