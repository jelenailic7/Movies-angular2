import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html'
})
export class MovieRowComponent implements OnInit, OnChanges {

@Input() movie: Movie;
@Output() onSelect = new EventEmitter<boolean>();
@Input() selectedAll: boolean;
@Input() selectedAny:boolean;

private selected = false;
private movies:Movie[]=[];

  constructor() { }

public select(agreed:boolean){ 
  this.onSelect.emit(agreed);
    this.selected = true;
}

 public ngOnInit() {
  }

 public ngOnChanges() {
     if (this.selectedAny === false) { 
          this.selected = this.selectedAll; 
    }
  }
}
