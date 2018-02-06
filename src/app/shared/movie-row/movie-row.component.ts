import { Component, OnInit, Input, Output, EventEmitter,OnChanges } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html'
})
export class MovieRowComponent implements OnInit {

@Input() movieRow: Movie;
@Output() onSelect = new EventEmitter<boolean>();
public selected = false;
@Input() selectedAll: boolean;
@Input() selectedAny:boolean;

  constructor() { }

public select(agreed:boolean){ 
  this.onSelect.emit(agreed);
    this.selected = true;
}

  ngOnInit() {
  }

  ngOnChanges() {
     if (this.selectedAny === false) { 
          this.selected = this.selectedAll; 
    }
  }
}
//ovako treba