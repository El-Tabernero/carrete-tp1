import React from 'react';
// Importamos los estilos del archivo renombrado hader.module.css
import styles from './Header.module.css'; 
import { useAuth } from '../screens/AuthContext'; 

const Header = ({ onNavigate }) => {
    // Obtener el estado de autenticación y funciones del contexto
    const { isLoggedIn, user, logout, isLoading } = useAuth();
    if (isLoading) {
        return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <span role="img" aria-label="carrete">🎬</span> EL Carrete
                </div>
                <div className={styles.authControls}>
                    <p className={styles.loadingText}>Cargando estado...</p>
                </div>
            </header>
        );
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={() => onNavigate('home')}>
                <span role="img" aria-label="carrete">🎬</span> EL Carrete
            </div>
            
            <div className={styles.authControls}>
                {isLoggedIn ? (
                    <>
                        {user.avatar && (
                            <img 
                                src={user.avatar} 
                                alt={user.name} 
                                className={styles.userAvatar}
                                onError={(e) => { 
                                    e.target.onerror = null; 
                                    e.target.src = 'https://placehold.co/40x40/555/FFF?text=U';
                                }}
                            />
                        )}
                        <span className={styles.userName}>Hola, {user.name.split(' ')[0]}</span>
                        <button 
                            className={styles.logoutButton} 
                            onClick={logout}
                        >
                            Cerrar Sesión
                        </button>
                    </>
                ) : (
                    <button 
                        className={styles.loginButton} 
                        onClick={() => onNavigate('login')}
                    >
                        Iniciar Sesión
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;