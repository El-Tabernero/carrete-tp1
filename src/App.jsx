import React, {useState} from 'react';
import Header from "./components/Header/Header.jsx";
import Container from './components/container/Container.jsx';
import ListContainer from './components/ListContainer/ListContainer.jsx';
import FilterBar from './components/FilterBar/FilterBar.jsx';

function App() {
    const [selectedGenre, setSelectedGenre] = useState('TODOS');
    const handleFilterChange = (genre) => {
        setSelectedGenre(genre);
    };
  return (
    <>
      <Header title="El Carrete 🎬" /> {/* Navbar/Encabezado */}
      
      <Container title="Filtrar por Género">
        <FilterBar
            onFilterChange={handleFilterChange}
            activeGenre={selectedGenre}
        />
      </Container>
      {/*contenedor children 8) */}
      <Container title={`Películas Destacadas (${selectedGenre})`}>
        <ListContainer selectedGenre={selectedGenre} />
      </Container>
      
      
      <Container title="Próximamente">
        <p>¡Contenido en desarrollo!</p>
      </Container>
    </>
  );
}

export default App;