import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MoviesService } from '../shared/service/movies.service';
import { MovieRowComponent } from '../shared/movie-row/movie-row.component';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  providers: [MoviesService]
})

export class MoviesComponent implements OnInit {


public counter = 0;
private movies;
public selectedAll;
public selectedAny;
public reverse = false;
public selected;
public order;
p: number = 1;

constructor(private moviesService: MoviesService,
            private router: Router) { }

ngOnInit() {
     this.moviesService.getMovies().subscribe(data => {
     this.movies = data;
    },
    (err: HttpErrorResponse) => {
      alert(`Backend returned code ${err.status} with message: ${err.error}`);
    
    });
  }

  public onSelect(agreed:boolean){
    this.counter++;
    this.selectedAny = true;   
  }

  public selectAll() {
    this.counter = this.movies.length;
    this.selectedAny = false;
 
  }
  public deselectAll() {
    this.counter = 0;
   
  }

  public setOrder(value: string) {
    if (this.order === value) {
        this.reverse = !this.reverse;
    }
    this.order = value;
}
  



}


//https://www.npmjs.com/package/ng2-order-pipe
//https://www.npmjs.com/package/ngx-pagination

