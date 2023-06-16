import React, { useEffect } from 'react'
import styles from '../css/About.module.css'
import Collapse from '../components/Collapse'
import Banner from '../components/Banner'
import landscape_about from '../images/landscape_about.png'
import a_propos from '../data/a_propos.json'


const About = () => {
  
  useEffect(() => {
    document.title = `A propos`;
  },[]);

  return (
    <div id={styles.about}>

      <Banner image={landscape_about}/>

      <div className={styles.collapse_about}>
        { a_propos.map((collapse)=>
          <Collapse 
            title={collapse.title} 
            text={collapse.description}
          />
        )}
      </div>
    </div>
  )
}

export default About