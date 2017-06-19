import React, { Component } from 'react';
import ChangeSelection from 'components/ChangeSelection';
import Filter from 'components/Filter';
import Calendar from 'components/Calendar';
import styles from './styles';

class BookingFormPage extends Component {

  render() {
    return (
      <div style={styles.parent}>
        <Filter />
        <ChangeSelection />
        <Calendar />
      </div>
    )
  }
}
export default BookingFormPage;
