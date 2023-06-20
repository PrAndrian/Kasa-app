import React from 'react'
import styles from '../css/Tag.module.css'
import PropTypes from 'prop-types';


const Tag = ({tag}) => {
  return (
    <span className={styles.tag}>{tag}</span>
  )
}

Tag.propTypes = {
  tag : PropTypes.string,
};

export default Tag