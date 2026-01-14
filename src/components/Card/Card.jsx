import React from 'react';
import styles from './Card.module.css'; 
import { useAuth } from '../screens/AuthContext.jsx'; 
import { useNavigate } from 'react-router-dom';


const secureUrl = (url) => {
    if (!url || url === 'N/A') return null;
    
    if (url.startsWith("https")) return url;
 
    const secureProxyUrl = `https://images.weserv.nl/?url=${encodeURIComponent(url.replace("http://", ""))}`;
    return secureProxyUrl;
};

const Card = ({ movie, onBackgroundChange }) => {
    const { isLoggedIn } = useAuth(); 
    const navigate = useNavigate();

    const mappedTitle = movie.title || 'Sin Título';
    const mappedYear = movie.year || '';
    
    const rawImageUrl = (movie.poster && movie.poster !== 'N/A') 
                     ? movie.poster 
                     : 'https://placehold.co/500x750/333/FFF?text=Sin+Poster';
    
    const imageUrl = secureUrl(rawImageUrl) || 'https://placehold.co/500x750/333/FFF?text=Sin+Poster';
    const rawBackdropUrl = movie.backimg || movie.poster || rawImageUrl;
    const backdropUrl = secureUrl(rawBackdropUrl);


    const genresList = movie.genre ? movie.genre.split(', ') : ['Varios'];
    
    const handlePlayClick = () => {
        // usar alert y console log pq sino NOSE cuando utiliza 
        if (isLoggedIn) {
            console.log(`✅ Abriendo detalles de: ${mappedTitle}`);
            navigate(`/movie/${movie.id}`);

        } else {
            console.log("🛑 Aviso: Debes iniciar sesión.");
            alert("🛑 Aviso: Debes iniciar sesión.");
        }
    };

    const handleMouseEnter = () => {
        if (typeof onBackgroundChange === 'function') {
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
                    <span role="img" aria-label="Play">▶</span>
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