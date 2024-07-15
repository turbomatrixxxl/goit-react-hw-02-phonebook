import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

function Button({ type, children, disabled, handleClick }) {
  return (
    <button
      className={styles.button}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
