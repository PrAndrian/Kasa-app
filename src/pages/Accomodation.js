import React from 'react'
import { useParams } from 'react-router-dom'
import Gallery from '../components/Gallery'
import styles from '../App.module.css'
import listLogement from '../__mock_data__/logements.json' 

const Accomodation = () => {
  const {logementId} = useParams()
  const logementData = listLogement.filter((logement)=>logement.id === logementId)
  
  console.log(logementData)

  return (
    <div className={styles.logement}>
      <Gallery 
        title={logementData[0].title} 
        pictures={logementData[0].pictures
      }/>
    </div>
  )
}

export default Accomodation