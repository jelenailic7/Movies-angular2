import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './service/movies.service';
import { MovieRowComponent } from './movie-row/movie-row.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
    declarations: [
        MovieRowComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [ MoviesService ],
    
    exports: [ 
        MovieRowComponent
    ]

  })

  export class SharedModule {}