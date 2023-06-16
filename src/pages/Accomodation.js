import React from 'react'
import { useParams } from 'react-router-dom'
import Gallery from '../components/Gallery'
import styles from '../css/Accomodation.module.css'
import listLogement from '../__mock_data__/logements.json' 
import Tag from '../components/Tag'
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'

const Accomodation = () => {
  const {logementId} = useParams()
  const logementData = listLogement.filter((logement)=>logement.id === logementId) //find c'est mieux

  return (
    <div className={styles.logement}>
      <Gallery 
        title={logementData[0].title} 
        pictures={logementData[0].pictures}
      />
      <section className={styles.info_container}>
        <header className={styles.info_header}>
          <h1 className={styles.title_logement}>{logementData[0].title}</h1>
          <span className={styles.location_logement}>{logementData[0].location}</span>
          <div className={styles.tags_logement}>
            {logementData[0].tags.map((tag)=>{
              return <Tag key={tag} tag={tag}/>
            })}
          </div>
        </header>
        <footer className={styles.info_footer}>
          <Rating rating={logementData[0].rating }/>
          <div className={styles.profile_info}>
            <span>{logementData[0].host.name}</span>
            <img 
              className={styles.profile_picture} 
              src={logementData[0].host.picture} 
              alt={"Photo de "+logementData[0].host.name}
            />
          </div>
        </footer>
      </section>

      <section className={styles.collapse_container}>
        <Collapse title={'Description'} text={logementData[0].description} length={"petit"}/>
        <Collapse title={'Equipments'} list={logementData[0].equipments} length={"petit"}/>
      </section>
    </div>
  )
}

export default Accomodation