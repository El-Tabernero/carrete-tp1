import styles from './FilterBar.module.css';
import {generos} from '../../data/peliculas';

const FilterBar= ({onFilterChange, activeGenre}) => {
    return(
        <div className={styles.filterBar}>
            <button
            className={`${styles.filterButton} ${activeGenre === 'TODOS' ? styles.active : ''}`}
            onClick={() => onFilterChange('TODOS')}
            > 
            </button>
            {generos.map(genero => (
        <button
          key={genero.id}
          className={`${styles.filterButton} ${activeGenre === genero.name.toUpperCase() ? styles.active : ''}`}
          onClick={() => onFilterChange(genero.name.toUpperCase())}
        >
          {genero.name}
        </button>
      ))}
    </div>
  );
};
export default FilterBar;
