import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../css/Thumb.module.css';

function Thumb({logement}) {
  return (
    <Link
      to={`/fiche-logement/${logement.id}`}
      state={{ data: logement }}
      className={styles.thumb}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
          url(${logement.cover})`,
      }}
    >
      <p>{logement.title}</p>
    </Link>
  );
}

Thumb.propTypes = {
  logement:  PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string).isRequired,
    PropTypes.objectOf(PropTypes.string).isRequired,
  ]).isRequired),
};

export default Thumb;
