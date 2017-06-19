import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import GetSelection from './GetSelection';
import { print } from 'utils';
import styles from './styles';

const items = [
  { id: 1, title: <p>Add selected<br /> properties</p>, description: "Add properties ticked above", action: () => { print('Add selected properties Btn Clicked'); } },
  { id: 2, title: <p>Remove<br/> unticked below</p>, description: "Remove properties unticked below", action: () => { print('Remove unticked below Btn Clicked'); } },
  { id: 3, title: <p>Clear selection</p>, description: "Remove all properties below", action: () => { print('Clear selection Btn Clicked'); } },
];

function ChangeSelection() {
  return (
    <div style={styles.wrapper}>
      <h2>View availability or book</h2>
      <h2>Change selection</h2>
      {
        items.map( item =>
          <GetSelection key={item.id} title={item.title} description={item.description} action={item.action} />,
        )
      }
    </div>
  );
}
export default ChangeSelection;
