import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import styles from '../../App.module.css'

const NavBar = () => {

  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Logo" className={styles.logo}/>
      <div className={styles.links}>
        <Link to="/accueil">Accueil</Link>
        <Link to="/a-propos">A propos</Link>
      </div>
    </nav>
  )
}

export default NavBar