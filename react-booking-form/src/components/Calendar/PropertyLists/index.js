import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

import TotalResult from './TotalResult';
import Lists from './Lists';
import styles from './styles';

const items1 = [
  { id:1, label: "Room 1", value: <p>$159 &#9786; &#9786; 1Q </p> },
  { id:2, label: "Room 2", value: <p>$169 &#9786; &#9786; &#9786; 1Q+1S </p> },
  { id:3, label: "Room 3", value: <p>$159 &#9786; &#9786; 1Q </p> },

];

const items2 = [
  { id:1, label: "Room 1", value: <p>$159 &#9786; &#9786; 1K </p> },
  { id:2, label: "Room 2", value: <p>$169 &#9786; &#9786; &#9786; 1Q+1S </p> },
  { id:3, label: "Room 3", value: <p>$159 &#9786; &#9786; 1Q </p> },
  { id:4, label: "Room 4", value: <p>$159 &#9786; &#9786; 1D </p> },
  { id:5, label: "Room 5", value: <p>$159 &#9786; 1S </p> },
];

const total = [
  { id:1, label: <p>English Garden Manor</p>, value: <p>Rool1 4 x 159 = NZ$ 636</p> },
  { id:2, label: <p>English Garden Manor</p>, value: <p>Rool2 4 x 169 = NZ$ 676</p> },
];
function PropertyLists() {
  return (
    <div style={{flex: 1,}}>
      <div style={styles.block}>
        <Checkbox
          label="English Garden Manor"
          labelStyle={styles.colors}
          style={styles.checkbox}
        />
        <p>Hamilton, North Island</p>
      </div>
      <div>
        {
          items1.map(item =>
            <Lists key={item.id} label={item.label} value={item.value} />,
          )
        }
      </div>
      <div style={styles.block}>
        <Checkbox
          label="Rua Resort"
          labelStyle={styles.colors}
          style={styles.checkbox}
        />
        <p>Hamilton, North Island</p>
      </div>
      <div>
        {
          items2.map(item =>
            <Lists key={item.id} label={item.label} value={item.value} />,
          )
        }
      </div>
      <FlatButton label="Return to filter" labelStyle={styles.colors}/>
      <div>
        <h4>Total cost</h4>
        {
          total.map(item =>
            <TotalResult key={item.id} label={item.label} value={item.value} />,
          )
        }
        <div style={styles.result}>
          <span>Total</span>
          <span style={{marginLeft: 20,}}>NZ$ 1312</span>
        </div>
      </div>
    </div>
  );
}
export default PropertyLists;
