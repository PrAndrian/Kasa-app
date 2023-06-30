import styles from '../css/About.module.css';
import Collapse from '../components/Collapse';
import Banner from '../components/Banner';
import landscapeAbout from '../images/landscape_about.png';
import { useEffect, useState } from 'react';

function About() {

  const url = 'http://127.0.0.1:5173/data/a_propos.json'
  const [aboutData, setAboutData] = useState([])
  
  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
      setAboutData(data)
    })
  },[])

  // eslint-disable-next-line no-undef
  document.title = 'Kasa - A propos';

  return (
    <div id={styles.about}>

      <Banner type="base" image={landscapeAbout} />

      <div className={styles.collapse_about}>
        { aboutData.map((collapse) => (
          <Collapse
            key={collapse.title}
            title={collapse.title}
            text={collapse.description}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
