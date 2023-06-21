import React, { useEffect, useState } from 'react'
import { Navigate, useLoaderData, useParams } from 'react-router-dom'
import Gallery from '../components/Gallery'
import styles from '../css/Accomodation.module.css'
import Tag from '../components/Tag'
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'

const Accomodation = () => {
  
  const {logementId} = useParams();
  const listLogement = useLoaderData();

  const [logementData] = useState(listLogement.find((logement)=>logement.id === logementId))

  useEffect(() => {
    document.title = `Kasa - ${logementData !== undefined ? logementData.title : "Introuvable" }`
  },[logementData,listLogement,logementId])

  if(logementData === undefined){
    return <Navigate to="/Introuvable"/>
  }

  return (
      <div className={styles.logement}>
          <Gallery 
            title={logementData.title} 
            pictures={logementData.pictures}
          />
          <section className={styles.info_container}>
            <header className={styles.info_header}>
              <h1 className={styles.title_logement}>
                {logementData.title}
              </h1>
              <span className={styles.location_logement}>
                {logementData.location}
              </span>
              <div className={styles.tags_logement}>
                {logementData.tags.map((tag)=>{
                  return <Tag key={tag} tag={tag}/>
                })}
              </div>
            </header>
            <footer className={styles.info_footer}>
              
              <Rating rating={logementData.rating }/>

              <div className={styles.profile_info}>
                <span>{logementData.host.name}</span>
                <img 
                  className={styles.profile_picture} 
                  src={logementData.host.picture} 
                  alt={"Photo de "+logementData.host.name}
                />
              </div>
            </footer>
          </section>

          <section className={styles.collapse_container}>
            <Collapse 
              title={'Description'} 
              text={logementData.description}
            />
            <Collapse 
              title={'Equipments'} 
              text={logementData.equipments.map((equipement)=>(equipement+"\r\n"))}
            />
          </section>
      </div>
  )
}

export default Accomodation