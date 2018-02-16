import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from '../service/movies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html'
})
export class MovieRowComponent implements OnInit, OnChanges {

@Input() movie: Movie;
@Output() onSelect = new EventEmitter<boolean>();
@Input() selectedAll: boolean;
@Input() selectedAny:boolean;
@Input() isSelected: boolean;
@Input() selected: boolean;
private movies:Movie[]=[];

//public selected = false;
  constructor(private router:Router) {

   }

public select(agreed:boolean){ 
  this.onSelect.emit(agreed);
    this.selected = true;
    this.isSelected = false;
   
}

 public ngOnInit() {
  }

 public ngOnChanges() {
     if (this.selectedAny === false) { 
          this.selected = this.selectedAll;
 
     
    }
  }
  public goBackToMovies(){
    this.router.navigate(['/movies']);
    this.selected=false;
  }

}
