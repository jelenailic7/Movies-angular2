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
    public isSelected: boolean;

    constructor(private route: ActivatedRoute,
                private moviesService: MoviesService,
                private router: Router) {

    }
    public ngOnInit() {
        this.route.data
            .subscribe((data: {movie: Movie})=> {
                this.movie = data.movie;
            });
            this.isSelected = true;
        
            
    }
 
}