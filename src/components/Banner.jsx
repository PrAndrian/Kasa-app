import React from 'react'
import styles from '../css/Banner.module.css'

const Banner = ({type,image}) => {  
  return (
    <div 
        className={type==="base" ? styles.banner : styles.banner +" "+ styles.banner_v1}
        style={{
            background:`linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('${image}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}
    >
      {  type==="base" &&
          (<h2 className={styles.banner_title}>
          <span className={styles.banner_text_1}>Chez vous,</span>
          <span className={styles.banner_text_2}> partout et ailleurs</span>
        </h2>)
      }
    </div>
  )
}

export default Banner