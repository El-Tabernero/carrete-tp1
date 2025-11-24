import React from 'react';
import styles from './Card.module.css'; 
import { useAuth } from '../screens/AuthContext.jsx'; 


const secureUrl = (url) => {
    if (!url || url === 'N/A') return null;
    
    // Si la URL ya es HTTPS, la devuelve
    if (url.startsWith("https")) return url;
 
    const secureProxyUrl = `https://images.weserv.nl/?url=${encodeURIComponent(url.replace("http://", ""))}`;
    return secureProxyUrl;
};

const Card = ({ movie, onBackgroundChange }) => {
    const { isLoggedIn } = useAuth(); 

    // 1. MAPEO DE CAMPOS
    const mappedTitle = movie.title || 'Sin Título';
    const mappedYear = movie.year || '';
    
    // Imagen Vertical (Poster)
    const rawImageUrl = (movie.Poster && movie.Poster !== 'N/A') 
                     ? movie.Poster 
                     : 'https://placehold.co/500x750/333/FFF?text=Sin+Poster';
    
    // Aplicamos la función de seguridad a la URL del poster
    const imageUrl = secureUrl(rawImageUrl) || 'https://placehold.co/500x750/333/FFF?text=Sin+Poster';


    // Imagen Horizontal (Fondo) - Usamos la segunda imagen del array 'Images' si existe
    const rawBackdropUrl = (movie.Images && movie.Images.length > 1) 
                        ? movie.Images[1] 
                        : (movie.Images ? movie.Images[0] : rawImageUrl);
    
    // Aplicamos la función de seguridad a la URL del fondo.
    // Si la URL del fondo falla, se pasará null a handleBackgroundChange y se usará el fondo por defecto.
    const backdropUrl = secureUrl(rawBackdropUrl);


    // Géneros (La API devuelve un string "Action, Adventure", lo convertimos a array)
    const genresList = movie.genre ? movie.genre.split(', ') : ['Varios'];
    
    const handlePlayClick = () => {
        // usar alert y console log pq sino NOSE cuando utiliza 
        if (isLoggedIn) {
            console.log(`✅ Reproduciendo: ${mappedTitle}`);

        } else {
            console.log("🛑 Aviso: Debes iniciar sesión.");
            alert("🛑 Aviso: Debes iniciar sesión.");
        }
    };

    const handleMouseEnter = () => {
        if (typeof onBackgroundChange === 'function') {
            // Pasamos la URL del fondo (o null si falló la conversión segura)
            onBackgroundChange(backdropUrl); 
        }
    };

    const handleMouseLeave = () => {
        if (typeof onBackgroundChange === 'function') {
            // Volvemos al fondo por defecto
            onBackgroundChange(null);
        }
    };

    return (
        <div 
            className={styles.card}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.imageContainer}>
                <img 
                    src={imageUrl} 
                    alt={mappedTitle} 
                    className={styles.poster}
                    // Fallback si la imagen (incluso con proxy) falla
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = 'https://placehold.co/500x750/333/FFF?text=Sin+Imagen';
                    }}
                />
                
                <button 
                    className={styles.playButton}
                    onClick={handlePlayClick}
                    title={isLoggedIn ? "Reproducir" : "Iniciar Sesión"}
                >
                    <span role="img" aria-label="Play">▶️</span>
                </button>
            </div>
            
            <div className={styles.info}>
                <h3 className={styles.title}>{mappedTitle}</h3>
                <p className={styles.year}>{mappedYear}</p>
                
                <div className={styles.genreTags}>
                    {genresList.slice(0, 3).map((g, index) => (
                        <span key={index} className={styles.tag}>{g}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Card;