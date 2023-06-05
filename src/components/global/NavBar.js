import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'
import styles from '../../App.module.css'

const NavBar = () => {

  return (
    <nav className={styles.nav}>
      <Link to="/accueil">
        <img src={logo} alt="Logo" className={styles.logo}/>
      </Link>

      <div id={styles.links}>
        <NavLink to="/accueil" className={({ isActive }) => isActive ? styles.active : ''} end>
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className={({ isActive }) => isActive ? styles.active : ''} end>
          A propos
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar