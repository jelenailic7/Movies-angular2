import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MoviesService } from '../shared/service/movies.service';
import { MovieRowComponent } from '../shared/movie-row/movie-row.component';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
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

constructor(private moviesService: MoviesService) { }

ngOnInit() {
    this.moviesService.getMovies().subscribe(data => {
     this.movies = data;
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

