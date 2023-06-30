import { Navigate, useLocation } from 'react-router-dom';
import Gallery from '../components/Gallery';
import styles from '../css/Accomodation.module.css';
import Tag from '../components/Tag';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';

function Accomodation() {
  const location = useLocation();
  const logementData = location.state?.data
  
  console.log(logementData)

  // eslint-disable-next-line no-undef
  document.title = `Kasa - ${logementData !== undefined ? logementData.title : 'Introuvable'}`;

  if (logementData === undefined) {
    return <Navigate to="/404" />;
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
            {logementData.tags.map((tag) => <Tag key={tag} tag={tag} />)}
          </div>
        </header>
        <footer className={styles.info_footer}>

          <Rating rating={logementData.rating} />

          <div className={styles.profile_info}>
            <span>{logementData.host.name}</span>
            <img
              className={styles.profile_picture}
              src={logementData.host.picture}
              alt={`${logementData.host.name}`}
            />
          </div>
        </footer>
      </section>

      <section className={styles.collapse_container}>
        <Collapse
          title="Description"
          text={logementData.description}
        />
        <Collapse
          title="Equipments"
          text={logementData.equipments.map((equipement) => (`${equipement}\r\n`))}
        />
      </section>
    </div>
  );
}

export default Accomodation;
