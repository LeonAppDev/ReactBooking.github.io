import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import colors from 'styles/colors';
import styles from './styles';

function GetSelection({ title, description, action }) {
  return (
    <div style={styles.container}>
      <div style={{marginLeft: 20,}}>
        <RaisedButton
         label={title} onTouchTap={action} labelStyle={styles.textStyles}
         backgroundColor={colors.btnColors} style={styles.customStyle}
        />
      </div>
      <div style={{ marginLeft: 20,}}>
        <p>{ description } </p>
      </div>
    </div>
  );
}
GetSelection.propTypes = {
  title: PropTypes.node,
  description: PropTypes.string,
  action: PropTypes.func,
};
GetSelection.defaultProps = {
  title: null,
  description: null,
  action: () => {},
}
export default GetSelection;
