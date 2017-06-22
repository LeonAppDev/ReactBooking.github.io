import React, { PropTypes } from 'react';
import styles from './styles';

function Header({ day, date }) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 20px',}}>
      <span>{day}</span>
      <span style={{marginTop: 10,}}>{date}</span>
    </div>
  );
}

Header.propTypes = {
  day: PropTypes.string,
  date: PropTypes.string,
};
Header.defaultProps = {
  day: null,
  date: null,
};

export default Header;
