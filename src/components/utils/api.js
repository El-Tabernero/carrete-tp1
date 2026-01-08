const CUSTOM_JSON_URL = "https://6938377b4618a71d77cf67b1.mockapi.io/carrete/v1/movies";

export async function fetchData() {
  console.log("Cargando datos desde:", CUSTOM_JSON_URL);

  try {
    const response = await fetch(CUSTOM_JSON_URL);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: No se pudo descargar el JSON.`);
    }

    const data = await response.json();
    console.log("Películas obtenidas:", data);
    return data;
  } catch (error) {
    console.error("Error al obtener las películas:", error);
    throw new Error(`Fallo al cargar las películas. Detalle: ${error.message}`);
  }
}
//acá lo que es para Users:

export const BASE_URL_USERS = "GET https://api.escuelajs.co/api/v1";
