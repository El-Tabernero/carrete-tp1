import React, {useState} from 'react';
import Header from "./components/Header/Header.jsx";
import Container from './components/container/Container.jsx';
// Importamos el componente con el nombre que usamos últimamente (ListaContainer)
import ListaContainer from './components/ListContainer/ListContainer.jsx';
import FilterBar from './components/FilterBar/FilterBar.jsx';
import styles from './App.module.css'; // ⬅️ IMPORTACIÓN DEL CSS MODULES

// URL de fondo por defecto (Esta es la imagen que deseas mantener)
const DEFAULT_BACKGROUND = 'url(https://media.licdn.com/dms/image/v2/D5612AQG34bnlCklpIQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1689310555077?e=2147483647&v=beta&t=gJV8vIymlVbqGxdzA8RS0ok3nvbcV8q5yKs6to2GxrE)'

function App() { // ⬅️ Nombre interno: Appa
    const [selectedGenre, setSelectedGenre] = useState('TODOS');
    // Estado inicial con la imagen de fondo predeterminada
    const [backgroundImage, setBackgroundImage] = useState(DEFAULT_BACKGROUND);

    const handleFilterChange = (genre) => {
        setSelectedGenre(genre);
    };

    const handleBackgroundChange = (url) => {
      // Usa la URL si existe, si no, usa el fondo por defecto
      setBackgroundImage(url ? `url("${url}")` : DEFAULT_BACKGROUND);
    }

    const backgroundStyle = {
      // Propiedades dinámicas que necesitan estar en línea (la URL de la imagen)
      backgroundImage: backgroundImage,
      
      // Propiedades estáticas relacionadas con el fondo que React maneja mejor en línea
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      
      // Esto asegura un cambio de fondo suave (transición de la imagen)
      transition: 'background-image 0.5s ease-in-out', 
    }; 
    
    return (
      // La estructura debe devolver un único elemento padre.
      <>
        {/* Capa de Fondo (Desenfoque) - Aplica el CSS y la URL dinámica */}
        <div 
          style={backgroundStyle} 
          className={styles.appBackgroundLayer} 
        />
        
        {/* Capa de Contenido (Visible y sin desenfoque) - Usa la clase CSS */}
        <div className={styles.appContentLayer}>
          <Header />
          
          <Container title="Filtrar por Género">
            <FilterBar 
              onFilterChange={handleFilterChange} 
              activeGenre={selectedGenre} 
            />
          </Container>
          
          <Container title={`Películas Destacadas (${selectedGenre})`}>
            {/* Usamos ListaContainer según el último cambio de nombre que pediste */}
            <ListaContainer 
              selectedGenre={selectedGenre} 
              onBackgroundChange={handleBackgroundChange}
            /> 
          </Container>
          
          <Container title="Próximamente">
            {/* Aquí iría el componente de Próximamente */}
          </Container>
        </div>
      </>
    );
}

export default App;