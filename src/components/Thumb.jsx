import React from 'react'
import styles from '../css/Thumb.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const Thumb = ({id,title,cover}) => {
  return (
      <Link 
        to={`/fiche-logement/${id}`} 
        className={styles.thumb}
        style={{ 
          backgroundImage:`linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
          url(${cover})`
        }}
      >
        <p>{title}</p>
      </Link>
  )
}

Thumb.propTypes = {
  id : PropTypes.string,
  title : PropTypes.string,
  cover : PropTypes.string,
};

export default Thumb