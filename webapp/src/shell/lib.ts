
export const getAllMovies = (anchor)=>{
    fetch('http://localhost:3000/movies/all')
    .then(response => response.json())
    .then(json=>anchor.innerHTML=JSON.stringify(json,undefined,2))
  }