import styles from './Header.module.css'; 

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#">Inicio</a></li>
          <li className={styles.navItem}><a href="#">Géneros</a></li>
          <li className={styles.navItem}><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;