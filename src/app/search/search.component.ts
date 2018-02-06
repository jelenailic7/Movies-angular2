import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent  {

private searchTerm;

    constructor(private router: Router)
    {}

   public searchMovie(){
      this.router.navigate(['/search', this.searchTerm]);
    }
}