

export const getAllMovies = async ()=>{
  try {
    let movies =await fetch('http://localhost:3000/movies/all');
    return movies.json()
  } catch (error) {
    return error;
  }
}