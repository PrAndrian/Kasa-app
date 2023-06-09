import React from 'react'
import styles from '../App.module.css'

const Tag = ({tag}) => {
  return (
    <span className={styles.tag}>{tag}</span>
  )
}

export default Tag