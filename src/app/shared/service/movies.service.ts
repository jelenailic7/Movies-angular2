import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MoviesService {

private movies: Movie []=[];

public _url = 'http://localhost:8000/api/movies';

  constructor(private http: HttpClient) {

   }

 public getMovies()
  {
    
      return new Observable((o: Observer<any>) => {
       this.http.get(this._url)
          .subscribe((movies: any[]) => {
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

  public search(term): Observable<Movie[]> {
  
  const foundMovies = this.movies.filter((movie: Movie) => {
    return movie.name.toLowerCase().includes(term.toLowerCase());
   });
   if(foundMovies.length === 0) {
     return Observable.throw(term);
   }
  return Observable.of(foundMovies);

 }
  
}
