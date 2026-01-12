const BASE_URL = "https://6938377b4618a71d77cf67b1.mockapi.io/carrete/v1";

export const MOVIES_URL = `${BASE_URL}/movies`;
export const COMMENTS_URL = `${BASE_URL}/comments`;

export async function fetchData() {
  console.log("🎬 Cargando películas desde:", MOVIES_URL);

  const response = await fetch(MOVIES_URL);

  if (!response.ok) {
    throw new Error(`Error ${response.status}: No se pudieron cargar las películas`);
  }

  return response.json();
}

// 👇 NUEVO
export async function fetchCommentsByMovie(movieId) {
  console.log("💬 Cargando comentarios para movie:", movieId);

  const response = await fetch(`${COMMENTS_URL}?movieId=${movieId}`);

  if (!response.ok) {
    throw new Error("Error al cargar comentarios");
  }

  return response.json();
}
//acá lo que es para Users:

export const BASE_URL_USERS = "GET https://api.escuelajs.co/api/v1";
