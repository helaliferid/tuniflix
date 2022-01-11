import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-catalog',
  templateUrl: './movies-catalog.component.html',
  styleUrls: ['./movies-catalog.component.scss']
})
export class MoviesCatalogComponent implements OnInit {
  movies = [
    {
      title: 'The Oval',
      description: 'Action Movie',
      cover: 'https://fr.web.img4.acsta.net/c_310_420/pictures/19/10/16/16/53/3090773.jpg'
    },
    {
      title: 'Yori Boy',
      description: 'Action Movie MMA',
      cover: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Boyka_Undisputed.jpg'
    },
    {
      title: 'Casa de Papel',
      description: 'Action Movie',
      cover: 'https://wiflix.biz/wfimages/stream-vf-5f5f-f80a-9cd1-4440.jpg'
    },
    {
      title: 'Free Fight',
      description: 'Action Movie Martial Art',
      cover: 'https://wiflix.biz/wfimages/stream-vf-5f5f-f80a-9cd1-4440.jpg'
    },
    {
      title: 'Pearl Harobour',
      description: 'Japan agains USA 2 WW War',
      cover: 'https://metro.co.uk/wp-content/uploads/2021/12/pearl-harbor-movie-511e.jpg?quality=90&strip=all&zoom=1&resize=644%2C483'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
