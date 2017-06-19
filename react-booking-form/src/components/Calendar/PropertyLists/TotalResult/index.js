import React, { PropTypes } from 'react';
import styles from './styles';

function TotalResult({ label, value }) {
  return (
    <div style={styles.wrapper}>
      {label}
      <div style={{ marginLeft: 40,}}>
        {value}
      </div>
    </div>
  );
}
TotalResult.proptypes = {
  label: PropTypes.node,
  value: PropTypes.node,
};
TotalResult.defaultProps = {
  label: null,
  label: null,
};

export default TotalResult;
