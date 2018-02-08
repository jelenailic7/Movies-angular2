import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Movie } from '../../shared/models/movie';
import { MoviesService } from '../../shared/service/movies.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-movie-form',
    templateUrl:'./movie-form.component.html',
})
export class MovieFormComponent implements OnInit {

private movie: Movie = new Movie();
constructor(private router:Router,
            private moviesService:MoviesService){}

public submitMovie(movie: Movie) {
    this.moviesService.addMovie(movie).subscribe();
    this.router.navigate(['/']);
}
public ngOnInit(){

}


}