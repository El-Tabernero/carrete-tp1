import { useState } from 'react';
import Header from './components/Header/Header';
import Slider from '/components/Slider';
import GenrePicker from './components/GenrePicker/GenrePicker';
import MovieList from './components/MovieList/MovieList';
import { carrete, genero } from './data/peliculas';
import './App.css'; // Para estilos globales

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);

  // Función para ver el detalle de una película
  const handleSelectMovie = (pelicula) => {
    setSelectedMovie(pelicula);
    setSelectedGenre(null); // Limpiar género al ver detalle
  };

  // Función para volver a la lista
  const handleClearSelection = () => {
    setSelectedMovie(null);
  };

  // Función para filtrar por género (vínculos/markups)
  const handleSelectGenre = (generoId) => {
    setSelectedGenre(generoId);
    setSelectedMovie(null); // Limpiar detalle al seleccionar género
  };

  // Lógica de filtrado de películas
  const filteredMovies = selectedGenero
    ? carrete.filter(pelicula => 
        pelicula.genero.some(g => g.toLowerCase() === selectedGenre)
      )
    : carrete;
  
  // Título para la lista de películas
  const listTitle = selectedGenero 
    ? `Películas de ${genero.find(g => g.id === selectedGenero)?.name}` 
    : 'Recomendaciones para ti';

  return (
    <div className="App">
      <Header />

      <main>
        {/* Renderizado Condicional: Muestra el detalle O la página principal */}
        {selectedMovie ? (
          <MovieDetail movie={selectedMovie} onBack={handleClearSelection} />
        ) : (
          <>
            {/* El slider solo aparece si no se ha seleccionado un género */}
            {!selectedGenre && <Slider pelicula={mockMovies} />} 
            
            <GenrePicker 
              genres={genres} 
              onSelectGenre={handleSelectGenre} 
              selectedGenre={selectedGenre} 
            />
            
            <MovieList 
              movies={filteredMovies} 
              onSelectMovie={handleSelectMovie} 
              title={listTitle} 
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;