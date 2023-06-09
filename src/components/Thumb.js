import React from 'react'
import styles from '../App.module.css'

const Thumb = () => {
  const image = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
  return (
    <div 
      className={styles.thumb} 
      style={{ backgroundImage:`url(${image})`}}
    >
      <p>Titre de la location</p>
    </div>
  )
}

export default Thumb