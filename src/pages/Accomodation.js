import React from 'react'
import { useParams } from 'react-router-dom'
import Gallery from '../components/Gallery'
import styles from '../App.module.css'
import listLogement from '../__mock_data__/logements.json' 
import Tag from '../components/Tag'

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
      <div >
        <h1 className={styles.title_logement}>{logementData[0].title}</h1>
        <span className={styles.location_logement}>{logementData[0].location}</span>
        <div className={styles.tags_logement}>
          {logementData[0].tags.map((tag)=>{
            return <Tag key={tag} tag={tag}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Accomodation