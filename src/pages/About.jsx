import React, { useEffect } from 'react'
import styles from '../css/About.module.css'
import Collapse from '../components/Collapse'
import Banner from '../components/Banner'
import landscape_about from '../images/landscape_about.png'
import { useLoaderData } from 'react-router-dom'


const About = () => {
  
  const a_propos = useLoaderData()

  useEffect(() => {
    document.title = `Kasa - A propos`;
  },[]);

  return (
    <div id={styles.about}>

      <Banner type="base" image={landscape_about}/>

      <div className={styles.collapse_about}>
        { a_propos.map((collapse)=>
          <Collapse 
            key={collapse.title}
            title={collapse.title} 
            text={collapse.description}
          />
        )}
      </div>
    </div>
  )
}

export default About