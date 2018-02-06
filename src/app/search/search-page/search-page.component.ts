import { Component, Injector,OnInit } from '@angular/core';
import { Movie } from '../../shared/models/movie';
import { MoviesService } from '../../shared/service/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html'
})
export class SearchPageComponent  {

 private movies=[];
 

    constructor(private route: ActivatedRoute, private router: Router, private moviesService: MoviesService) {

    }

ngOnInit() {
    this.route.params.subscribe((params) => {
        this.moviesService.search(params["term"]).subscribe(data => {
            this.movies=data;
        },
        (term) => {
            alert('There are no movies with searched term: ' + term);

            this.router.navigate(['/movies']);

        });
    });
}
    
}
