import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { Observable, Observer } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class MoviesService {

private movies: Movie []=[];

public _url = 'http://localhost:8000/api/movies/';

  constructor(private http: HttpClient, private authService: AuthService) {

   }
 

 public getMovies()
  {  
      return new Observable((o: Observer<any>) => {
       this.http.get(this._url, {
        headers: this.authService.getRequestHeaders(),
       }).subscribe((movies: any[]) => {
            movies.forEach(movie => {
              this.movies.push (new Movie (
                movie.id,
                movie.name,
                movie.director,
                movie.image_url,
                movie.duration,
                movie.release_date,
                movie.genres)
            )});
            o.next(this.movies);
            o.complete();
          });   
      });
  }

  public search(term) {
    return new Observable((o: Observer<any>) => {
      let params = new HttpParams().append('term',term);
        this.http.get(this._url, {params,
         headers: this.authService.getRequestHeaders(),
        }).subscribe((movies: any) => {
          this.movies = movies.map((movie)=>{
            return new Movie(
              movie.id,
              movie.name,
              movie.director,
              movie.image_url,
              movie.duration,
              movie.release_date,
              movie.genres)
          });
          o.next(this.movies);
          o.complete();
        });
      });   
    }



 public addMovie(movie: Movie){
   return new Observable((o: Observer<any>) => {
     this.http.post(this._url, {
       'name':movie.name,
       'director': movie.director,
       'image_url': movie.image_url,
       'duration': movie.duration,
       'release_date': movie.release_date,
       'genres': movie.genres
     },
     {
      headers: this.authService.getRequestHeaders(),
     })
     .subscribe((m:any)=> {
       let newMovie = new Movie(movie.id,m.name, m.director, m.image_url, m.duration,m.release_date, m.genres);
       this.movies.push(newMovie);
       o.next(newMovie);
       return o.complete();
     });
   });
 }
 public getMovieById(id){
   return new Observable((o: Observer<any>) => {
     this.http.get(this._url + id,
      {
        headers: this.authService.getRequestHeaders(),
      }).subscribe((movie:any) => {
        let newMovie = new Movie(movie.id,movie.name, movie.director,
          movie.image_url,movie.duration,movie.release_date,movie.genres);
        o.next(newMovie);
          return o.complete();
      });
   });
 }
  
}
