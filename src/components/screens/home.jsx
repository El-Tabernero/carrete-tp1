import React, {useState} from 'react';
import Header from "../Header/Header.jsx";
import Container from '../container/Container.jsx';
import ListaContainer from '../ListContainer/ListContainer.jsx';
import FilterBar from '../FilterBar/FilterBar.jsx';
import styles from '../../App.module.css';


const DEFAULT_BACKGROUND = 'url(https://media.licdn.com/dms/image/v2/D5612AQG34bnlCklpIQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1689310555077?e=2147483647&v=beta&t=gJV8vIymlVbqGxdzA8RS0ok3nvbcV8q5yKs6to2GxrE)'

function Home() { // ⬅️ 
    const [selectedGenre, setSelectedGenre] = useState('TODOS');
    const [backgroundImage, setBackgroundImage] = useState(DEFAULT_BACKGROUND);

    const handleFilterChange = (genre) => {
        setSelectedGenre(genre);
    };

    const handleBackgroundChange = (url) => {
      setBackgroundImage(url ? `url("${url}")` : DEFAULT_BACKGROUND);
    }

    const backgroundStyle = {
      backgroundImage: backgroundImage,
      
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      
      transition: 'background-image 0.5s ease-in-out', 
    }; 
    
    return (
      <>
        <div 
          style={backgroundStyle} 
          className={styles.appBackgroundLayer} 
        />
        
        <div className={styles.appContentLayer}>
          
          <Container title="Filtrar por Género">
            <FilterBar 
              onFilterChange={handleFilterChange} 
              activeGenre={selectedGenre} 
            />
          </Container>
          
          <Container title={`Películas Destacadas (${selectedGenre})`}>
            <ListaContainer 
              selectedGenre={selectedGenre} 
              onBackgroundChange={handleBackgroundChange}
            /> 
          </Container>
          
          <Container title="Próximamente">
          </Container>
        </div>
      </>
    );
}

export default Home;