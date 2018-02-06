import { Injectable } from '@angular/core';
import { movieList } from '../example/example';
import { Movie } from '../models/movie';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class MoviesService {

private movieList: Movie [];

  constructor() {
    this.movieList = movieList.map(movie => {
      return new Movie(movie);
      });
   }

 public getMovies()
  {
      return new Observable((o: Observer<any>)=> {
       o.next(movieList);
       return o.complete();
      });
  }

  public search(term): Observable<Movie[]> {
  
  const foundMovies = this.movieList.filter((movie: Movie) => {
    return movie.name.toLowerCase().includes(term.toLowerCase());
   });
   if(foundMovies.length === 0) {
     return Observable.throw(term);
   }
  return Observable.of(foundMovies);

 }
  
}
