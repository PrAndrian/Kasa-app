import React from 'react'
import styles from '../../css/Footer.module.css'
import logo_var1 from '../../images/logo_var1.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo_var1} alt="Kasa_footer"/>
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  )
}

export default Footer