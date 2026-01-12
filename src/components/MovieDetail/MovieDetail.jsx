import { useParams, useNavigate } from "react-router-dom";
import { useFetchData } from "../Hooks/useFetchData";
import styles from "./MovieDetail.module.css";


const MovieDetail =() => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {movies} = useFetchData();

    const movie = movies.find(m => m.id === id);

    if (!movie) return <p>Cargando película...</p>

    return (
        <div className={styles.container}> 
            <div className={styles.card}>

                <button className={styles.backButton} 
                onClick={() => navigate("/")}>
                    Volver</button>
                <h1> {movie.title}</h1>
                <img 
                src={movie.backimg}
                alt={movie.title}
                className={styles.backdrop}

                />
                <div className={styles.meta}>
                    <div className={styles.tag}>📅 {movie.year}</div>
                    <div className={styles.tag}>🎬 {movie.genre}</div>
                    <div className={`${styles.tag} ${styles.rating}`}>
                    ⭐ {movie.rating}
                    </div>
                    <div className={styles.tag}>
                    ⏱ {movie.duration} min
                     </div>
                </div>

            </div>
        </div>
    )
    
};

export default MovieDetail;