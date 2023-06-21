import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Collapse.module.css';
import chevronDown from '../images/chevron_down.svg';

function Collapse({ title, text }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={styles.collapse}>
      <header onClickCapture={handleClick} className={styles.collapse_header}>
        <span>{title}</span>
        <img
          className={active ? styles.collapse_icon_active : undefined}
          src={chevronDown}
          alt="icon dépliant fermé"
        />
      </header>
      <div className={!active ? styles.collapse_content : `${styles.collapse_content} ${styles.collapse_content_active}`}>
        { typeof text === 'string'
          ? (
            <p>
              {text && text}
            </p>
          )
          : (
            <p className={styles.equipement}>
              {text && text.map((equipement) => (equipement))}
            </p>
          )}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string).isRequired,
  ]).isRequired,
};

export default Collapse;
