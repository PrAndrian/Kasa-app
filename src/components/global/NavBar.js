import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'
import styles from '../../App.module.css'

const NavBar = () => {

  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Logo" className={styles.logo}/>
      <div id={styles.links}>
        <NavLink to="/accueil" className={({ isActive }) => isActive ? styles.active : ''}>
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className={({ isActive }) => isActive ? styles.active : ''}>
          A propos
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar