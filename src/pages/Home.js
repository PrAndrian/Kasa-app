import React from 'react'
import styles from '../App.module.css'
import Thumb from '../components/Thumb'
import listLogement from '../__mock_data__/logements.json' 

const Home = () => {

  console.log(listLogement)

  return (
    <div id={styles.home}>
        <div className={styles.banner}>
          <h2 className={styles.banner_title}>
            <span className={styles.banner_text_1}>Chez vous,</span>
            <span className={styles.banner_text_2}> partout et ailleurs</span></h2>
        </div >

        <section className={styles.thumbs_container}>
          {listLogement && listLogement.map((logement)=>{
            return (
              <Thumb 
                key={logement.id}
                id={logement.id}
                title={logement.title} 
                cover={logement.cover} 
              />
            )
          })}
        </section>
    </div>
  )
}

export default Home