import React from 'react';
import { useLoaderData } from 'react-router-dom';
import styles from '../css/Home.module.css';
import Thumb from '../components/Thumb';
import landscapeHome from '../images/landscape_home.png';
import Banner from '../components/Banner';

function Home() {
  // eslint-disable-next-line no-undef
  document.title = 'Kasa - Accueil';

  const listLogement = useLoaderData();

  return (
    <div id={styles.home}>
      <Banner image={landscapeHome} />

      <section className={styles.thumbs_container}>
        {listLogement && listLogement.map((logement) => (
          <Thumb
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;
