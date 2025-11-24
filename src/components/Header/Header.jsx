import React from "react";
import styles from "./Header.module.css";
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
    </header>
  );
};

export default Header;