import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList = [{
    title: 'Brave HART',
    description: 'Mell Gibson play the role of william wallas',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/TitanicBeken.jpg/330px-TitanicBeken.jpg',
  }, {
    title: 'Titanic',
    description: 'Bateau',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/TitanicBeken.jpg/330px-TitanicBeken.jpg'
  },
  {
    title: 'La Légende de Zorro',
    description: 'Zorro',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/TitanicBeken.jpg/330px-TitanicBeken.jpg'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
