import styles from '../css/Home.module.css';
import Thumb from '../components/Thumb';
import landscapeHome from '../images/landscape_home.png';
import Banner from '../components/Banner';
import { useEffect, useState } from 'react';

function Home() {
  const url = 'http://127.0.0.1:5173/data/logements.json'
  const [listLogement, setListLogement] = useState([])
  
  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
      setListLogement(data)
    })
  },[])

  // eslint-disable-next-line no-undef
  document.title = 'Kasa - Accueil';


  return (
    <div id={styles.home}>
      <Banner image={landscapeHome} />

      <section className={styles.thumbs_container}>
        {listLogement && listLogement.map((logement) => (
          <Thumb
            key={logement.id}
            logement={logement}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;
