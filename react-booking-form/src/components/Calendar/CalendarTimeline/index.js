import React from 'react';

import Header from './Header';
import styles from './styles';

const items = [
  { id: 1, day: 'M', date: '22'},
  { id: 2, day: 'T', date: '23'},
  { id: 3, day: 'W', date: '24'},
  { id: 4, day: 'T', date: '25'},
  { id: 5, day: 'F', date: '26'},
  { id: 6, day: 'S', date: '27'},
  { id: 7, day: 'S', date: '28'},
  { id: 8, day: 'M', date: '29'},
  { id: 9, day: 'T', date: '30'},
  { id: 10, day: 'W', date: '31'},
  { id: 11, day: 'T', date: '1'},
  { id: 12, day: 'F', date: '2'},
  { id: 13, day: 'S', date: '3'},
  { id: 14, day: 'S', date: '4'},
];
function CalendarTimeline() {
  return (
    <div>
      <div style={{display: 'flex', alignItems: 'center',}}>
        <button style={styles.btn1}/>
        <div style={{ width: '100%', display: 'flex', margin: '0 30px',}}>
          {
            items.map(item =>
              <Header key={item.id} day={item.day} date={item.date} />,
            )
          }
        </div>
        <button style={styles.btn2}/>
      </div>
      <div style={{backgroundColor: 'blue', margin: 30,}}>
       content1
      </div>
      <div style={{backgroundColor: 'blue', margin: 30,}}>
       content2
      </div>
    </div>
  );
}

export default CalendarTimeline;
