import React from 'react'
import { useParams } from 'react-router-dom'
import Gallery from '../components/Gallery'
import styles from '../App.module.css'
import listLogement from '../__mock_data__/logements.json' 
import Tag from '../components/Tag'
import start_up from '../images/start_up.svg'
import start_down from '../images/start_down.svg'
import Collapse from '../components/Collapse'

const Accomodation = () => {
  const {logementId} = useParams()
  const logementData = listLogement.filter((logement)=>logement.id === logementId)
  
  console.log(logementData)

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
          <div className={styles.star_rating}>
            {
              Array.apply(null, { length: logementData[0].rating }).map((e, i) => 
                <img key={i} className={styles.star} src={start_up} alt="note_étoilé"/>
              )
            }
            {
              Array.apply(null, { length: 5-logementData[0].rating }).map((e, i) => 
                <img key={i} className={styles.star} src={start_down} alt="note_étoilé"/>
              )
            }
          </div>
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