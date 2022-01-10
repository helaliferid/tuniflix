import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public movie:any='';

  setMovie(_movie:{title:string,year:string}){
    this.movie=_movie
  }

  log(){
    console.log(this.movie)
  }

}
