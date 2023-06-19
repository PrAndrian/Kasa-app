import React, { useEffect } from 'react'
import styles from '../css/Home.module.css'
import Thumb from '../components/Thumb'
import { useLoaderData } from 'react-router-dom'
import landscape_home from '../images/landscape_home.png'
import Banner from '../components/Banner'


const Home = () => {

  useEffect(() => {
    document.title = `Kasa - Accueil`;
  },[]);

  const listLogement = useLoaderData();

  return (
    <div id={styles.home}>
        <Banner image={landscape_home}/>

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