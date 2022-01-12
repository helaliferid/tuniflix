import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCardComponent } from './my-card/mycard.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieFromComponent } from './movies/add-movie-from/add-movie-from.component';
import { MoviesCatalogComponent } from './movies/movies-catalog/movies-catalog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyCardComponent, 
    MovieListComponent, 
    AddMovieFromComponent, 
    MoviesCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
