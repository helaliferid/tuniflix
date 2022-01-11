import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-movie-from',
  templateUrl: './add-movie-from.component.html',
  styleUrls: ['./add-movie-from.component.scss']
})
export class AddMovieFromComponent implements OnInit {

  constructor() { }

  addMovie(){
    console.log('addMovie Clicked')
  }

  ngOnInit(): void {
  }

}
