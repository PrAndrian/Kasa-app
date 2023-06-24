import styles from '../../css/Footer.module.css';
import logoVar1 from '../../images/logo_var1.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logoVar1} alt="Kasa_footer" />
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;
