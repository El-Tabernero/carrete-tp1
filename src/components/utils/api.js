const CUSTOM_JSON_URL = "https://www.apirequest.in/movie/api"; 

export async function fetchData() {
  
  console.log("Cargando datos desde:", CUSTOM_JSON_URL);

  try {
    const response = await fetch(CUSTOM_JSON_URL);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: No se pudo descargar el JSON.`);
    }

    const data = await response.json();
    return data; 

  } catch (error) {
    console.error("Error al obtener el JSON:", error);
    throw new Error(`Fallo al cargar la lista de películas. Detalle: ${error.message}`);
  }
}
export const IMAGE_BASE_URL = ''; 
export const BACKDROP_BASE_URL = '';

//acá lo que es para Users:

export const BASE_URL_USERS = "GET https://api.escuelajs.co/api/v1";
