import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../App.module.css'
import Thumb from '../components/Thumb'

const Home = () => {
  const logementId = 'testId'
  
  return (
    <div id={styles.home}>
        <div className={styles.banner}>
          <h2 className={styles.banner_title}>
            <span className={styles.banner_text_1}>Chez vous,</span>
            <span className={styles.banner_text_2}> partout et ailleurs</span></h2>
        </div >

        <section className={styles.thumbs_container}>
          <Thumb/> 
          <Thumb/> 
          <Thumb/> 
          <Thumb/> 
        </section>
        <Link to={`/fiche-logement/${logementId}`}>Lien logement</Link>
    </div>
  )
}

export default Home