/* eslint-disable no-undef */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Gallery.module.css';
import VectorRight from '../images/Vector_right.png';
import VectorLeft from '../images/Vector_left.png';

function Gallery({ pictures }) {
  const [positionImage, setPositionImage] = useState(0);

  const [imageShowing, setImageShowing] = useState(pictures[0]);

  const nextImageShowing = () => {
    let postitionNextImage = positionImage + 1;
    if (postitionNextImage > pictures.length - 1) {
      postitionNextImage = 0;
      setPositionImage(0);
    } else {
      setPositionImage(postitionNextImage);
    }
    setImageShowing(pictures[postitionNextImage]);
  };

  const prevImageShowing = () => {
    let postitionPrevImage = positionImage - 1;
    if (postitionPrevImage < 0) {
      postitionPrevImage = pictures.length - 1;
      setPositionImage(pictures.length - 1);
    } else {
      setPositionImage(postitionPrevImage);
    }
    setImageShowing(pictures[postitionPrevImage]);
  };

  const selectImageShowing = (i) => {
    setPositionImage(i);
    setImageShowing(pictures[i]);
  };

  return (
    <div
      className={styles.gallery}
      style={{
        backgroundImage: `url(${imageShowing})`,
      }}
    >
      <div className={pictures.length > 1 ? styles.navGallery : styles.navGallery_hidden}>
        <img
          onClickCapture={prevImageShowing}
          className={styles.arrowGallery}
          src={VectorLeft}
          alt="flèche gauche"
        />

        <img
          className={styles.arrowGallery}
          onClickCapture={nextImageShowing}
          src={VectorRight}
          alt="flèche droite"
        />
      </div>

      <footer className={pictures.length > 1 ? styles.footerGallery : styles.navGallery_hidden}>
        <div>
          {pictures.map((picture, i) => (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              id={`dot${i}`}
              onClickCapture={() => selectImageShowing(i)}
              className={positionImage === i ? `${styles.circle} ${styles.active}` : styles.circle}
            />
          ))}
        </div>
        <p>
          {positionImage + 1}
          /
          {pictures.length}
        </p>
      </footer>
    </div>
  );
}

Gallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
