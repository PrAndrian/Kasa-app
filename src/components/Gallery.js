import React from 'react'
import styles from '../css/Gallery.module.css'
import { useState } from 'react'
import Vector_right from '../images/Vector_right.png'
import Vector_left from '../images/Vector_left.png'

const Gallery = ({pictures}) => {
    const [positionImage, setPositionImage] = useState(0)

    const [imageShowing, setImageShowing] = useState(pictures[0])

    const nextImageShowing = () =>{
        var postitionNextImage = positionImage + 1
        if(postitionNextImage > pictures.length - 1){
            postitionNextImage = 0
            setPositionImage(0)
        }else{
            setPositionImage(postitionNextImage)
        }
        setImageShowing(pictures[postitionNextImage])
    }

    const prevImageShowing = () =>{
        var postitionPrevImage = positionImage - 1
        if(postitionPrevImage < 0){
            postitionPrevImage = pictures.length -1
            setPositionImage(pictures.length -1)
        }else{
            setPositionImage(postitionPrevImage)
        }
        setImageShowing(pictures[postitionPrevImage])
    }

  return (
    <div 
        className={styles.gallery}
        style={{ 
            backgroundImage:`url(${imageShowing})`
        }}
    >
        <div className={pictures.length > 1 ? styles.navGallery : styles.navGallery_hidden}>
            <img 
                className={styles.arrowGallery} 
                onClick={prevImageShowing} 
                src={Vector_left} 
                alt="flèche gauche"
            />
            
            <img 
                className={styles.arrowGallery} 
                onClick={nextImageShowing} 
                src={Vector_right} 
                alt="flèche droite"
            />
        </div>

        <footer className={ pictures.length > 1 ? styles.footerGallery : styles.navGallery_hidden}>
            {positionImage +1}/{pictures.length}
        </footer>
    </div>
  )
}

export default Gallery