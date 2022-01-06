import * as bootstrap from 'bootstrap';
import { getAllMovies } from './shell/lib';

const output = document.querySelector('#output');


const displayMovies = async ()=>{
    let movies = await getAllMovies();
    for(let movie of movies){
        let movieItem=document.createElement('li');
        movieItem.innerHTML=`
        <li class="list-group-item">${movie.title}</li>
        <li class="list-group-item">${movie.description}</li>
        <li class="list-group-item">${movie.year}</li>
        <li class="list-group-item"><img src="${movie.cover}"></li>  
        `
        output.appendChild(movieItem);
    }
}

displayMovies()





