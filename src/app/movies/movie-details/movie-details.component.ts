import { Component, OnInit} from '@angular/core';
import { Movie } from '../../shared/models/movie';
import { MoviesService } from '../../shared/service/movies.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-movie-details',
    templateUrl:'./movie-details.component.html',
    providers: [MoviesService]

})
export class MovieDetailsComponent implements OnInit {

    private movie: Movie;

    constructor(private route: ActivatedRoute,
                private moviesService: MoviesService,
                private router: Router) {

    }
    public ngOnInit() {
        this.route.data
            .subscribe((data: {movie: Movie})=> {
                this.movie = data.movie;
            });
    }
    public goToMovies(){
        this.router.navigate(['/movies']);
      }
}