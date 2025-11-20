const CUSTOM_JSON_URL = "https://www.apirequest.in/movie/api"; 

/**
 * Función para obtener los datos de tu JSON personalizado.
 * No necesita parámetros porque siempre trae la misma lista fija.
 */
export async function fetchData() {
  
  console.log("Cargando datos desde:", CUSTOM_JSON_URL);

  try {
    const response = await fetch(CUSTOM_JSON_URL);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: No se pudo descargar el JSON.`);
    }

    const data = await response.json();
    
    // Tu JSON es un array directo de películas (comienza con [ ... ])
    // por lo que devolvemos la data tal cual.
    return data; 

  } catch (error) {
    console.error("Error al obtener el JSON:", error);
    throw new Error(`Fallo al cargar la lista de películas. Detalle: ${error.message}`);
  }
}

// Estas constantes se usan en Card.jsx como fallback, pero tu JSON ya trae las imágenes.
export const IMAGE_BASE_URL = ''; 
export const BACKDROP_BASE_URL = '';