import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


interface IMovie{
  title:string
  description:string,
  cover?:string
}
@Component({
  selector: 'app-add-movie-from',
  templateUrl: './add-movie-from.component.html',
  styleUrls: ['./add-movie-from.component.scss']
})
export class AddMovieFromComponent implements OnInit {
  movie:IMovie

  constructor(private http:HttpClient) { 
    this.movie={
      title:'',
      description:''
    }
  }

  addMovie(){
    this.http.post('http://localhost:3000/movies/add',this.movie)
      .subscribe({
        next:(data)=>{
          alert(JSON.stringify(data,undefined,2))
        },
        error:(error)=>{
          alert(JSON.stringify(error,undefined,2))
        },
        complete:()=>{
          console.log('POST the movie is completed')
        }
      })
  }

  ngOnInit(): void {
  }

}
