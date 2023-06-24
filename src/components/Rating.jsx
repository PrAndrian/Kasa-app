/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import styles from '../css/Rating.module.css';
import startUp from '../images/start_up.svg';
import startDown from '../images/start_down.svg';

function Rating({ rating }) {
  const ratingNumber = Number(rating);
  return (
    <div className={styles.star_rating}>
      {[...Array(5)].map((star, i) => {
        if (i < ratingNumber) {
          return <img key={i} className={styles.star} src={startUp} alt="note_étoilé" />;
        }
        return <img key={i} className={styles.star} src={startDown} alt="note_étoilé" />;
      })}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
