import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './service/movies.service';
import { MovieRowComponent } from './movie-row/movie-row.component';




@NgModule({
    declarations: [
        MovieRowComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [ MoviesService ],
    exports: [ 
        MovieRowComponent
    ]

  })

  export class SharedModule {}