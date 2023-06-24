import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import styles from '../../css/Navbar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>

      <div id={styles.links}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')} end>
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className={({ isActive }) => (isActive ? styles.active : '')} end>
          A propos
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
