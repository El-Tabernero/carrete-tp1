import React, {useState} from 'react';
import Header from "./components/Header/Header.jsx";
import Container from './components/container/Container.jsx';
import ListContainer from './components/ListContainer/ListContainer.jsx';
import FilterBar from './components/FilterBar/FilterBar.jsx';

const DEFAULT_BACKGROUND = 'url(https://media.licdn.com/dms/image/v2/D5612AQG34bnlCklpIQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1689310555077?e=2147483647&v=beta&t=gJV8vIymlVbqGxdzA8RS0ok3nvbcV8q5yKs6to2GxrE)'

function App() {
    const [selectedGenre, setSelectedGenre] = useState('TODOS');
    const [backgroundImage, setBackgroundImage] = useState(DEFAULT_BACKGROUND);

    const handleFilterChange = (genre) => {
        setSelectedGenre(genre);
    };

    const handleBackgroundChange = (url) => {
      // Tu lógica está correcta: usa la URL si existe, si no, usa el fondo por defecto
      setBackgroundImage(url ? `url("${url}")` : DEFAULT_BACKGROUND);
    }

    const appStyle = {
      backgroundImage: backgroundImage,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      // Esto asegura un cambio de fondo suave
      transition: 'background-image 0.5s ease-in-out',
      
    }; 
    
    return (
      <div style={appStyle}>
        <Header />
        
        <Container title="Filtrar por Género">
          <FilterBar 
            onFilterChange={handleFilterChange} 
            activeGenre={selectedGenre} 
          />
        </Container>
        
        <Container title={`Películas Destacadas (${selectedGenre})`}>
          {/* ⬅️ ¡ESTO ES LO QUE NECESITA REVISAR EN SU ARCHIVO! */}
          <ListContainer 
            selectedGenre={selectedGenre} 
            onBackgroundChange={handleBackgroundChange}
          /> 
        </Container>
        
        <Container title="Próximamente">
          {/* Aquí iría el componente de Próximamente */}
        </Container>
      </div>
    );
}

export default App;
