import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import styles from '../css/About.module.css';
import Collapse from '../components/Collapse';
import Banner from '../components/Banner';
import landscapeAbout from '../images/landscape_about.png';

function About() {
  const aboutData = useLoaderData();

  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.title = 'Kasa - A propos';
  }, []);

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
