import React from 'react'
import styles from '../App.module.css'
import { Link } from 'react-router-dom'


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

export default Thumb