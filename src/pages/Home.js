import React from 'react'
import styles from '../css/Home.module.css'
import Thumb from '../components/Thumb'
import listLogement from '../__mock_data__/logements.json' 
import landscape_home from '../images/landscape_home.png'
import Banner from '../components/Banner'


const Home = () => {

  console.log(listLogement)

  return (
    <div id={styles.home}>
        <Banner type="base" image={landscape_home}/>

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