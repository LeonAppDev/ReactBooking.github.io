import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

function MenuItems({ to, onTouchTap, content }) {

  const sample = (
    <div>
      <h1>test</h1>
    </div>
  );
  return (
    <div>
      <li>
        {sample}
        <Link to={to} onClick={onTouchTap}>{content}</Link>
      </li>
    </div>

  );
}

MenuItems.propTypes = {
  to: PropTypes.string,
  onTouchTap: PropTypes.func,
  content: PropTypes.string,
};
MenuItems.defaultProps = {
  to: './home',
  onTouchTap: () => {},
  content: null,
};

export default MenuItems;
