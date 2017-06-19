import React, { PropTypes } from 'react';
import styles from './styles';

function Lists({ label, value }) {
  return (
    <div>
      <div style={styles.colors}>
        {label}
      </div>
      <div>
        {value}
      </div>
    </div>
  );
}
Lists.proptypes = {
  label: PropTypes.string,
  value: PropTypes.node,
};
Lists.defaultProps = {
  label: null,
  value: null,
};

export default Lists;
