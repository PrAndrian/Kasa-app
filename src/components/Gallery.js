import React from 'react'
import styles from '../App.module.css'
import { useState } from 'react'

const Gallery = ({title,pictures}) => {
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
        <div className={styles.navGallery}>
            <button onClick={prevImageShowing}>reculé</button>
            <button onClick={nextImageShowing}>Avancé</button>
        </div>

        <footer className={styles.footerGallery}>
            {positionImage +1}/{pictures.length}
        </footer>
    </div>
  )
}

export default Gallery