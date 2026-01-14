import React from "react";
import styles from "./Header.module.css";
import NavButton from "../NavButton/NavButton";
import { useAuth } from "../screens/AuthContext";
import { useNavigate } from "react-router";

const Header = () => {
  const { isLoggedIn, user, handleLogout } = useAuth();
  const navigate = useNavigate();

  return (

    <header className={styles.header}>

      <div className={styles.logo} onClick={() => navigate("/")}>
        🎬 EL Carrete
      </div>
      {/* divs quienes somos, y como funciona */}

      <div className={styles.right}>
      <nav className={styles.link}>
        <NavButton variant="link" onClick={() => navigate("/contact")}>
          Contacto 📞
        </NavButton>
        <NavButton variant="link" onClick={() => navigate("/About")}>
          Acerca de la página 🗝️
        </NavButton>

      </nav>

      <div className={styles.authControls}>
        {isLoggedIn ? (
          <>
            {user?.avatar && (
              <img
                src={user.avatar}
                alt={user.name}
                className={styles.userAvatar}
              />
            )}
            <span className={styles.userName}>
              Hola, {user?.name?.split(" ")[0]}
            </span>

            <button className={styles.logoutButton} onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </>
        ) : (
          <button
            className={styles.loginButton}
            onClick={() => navigate("/login")}
          >
            Iniciar Sesión
          </button>
        )}
      </div>
      </div>
    </header>
  );
};

export default Header;