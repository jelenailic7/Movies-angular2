import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MoviesService } from './service/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { MovieResolver } from '../resolvers/movie.resolver';
import { MovieRowComponent } from './movie-row/movie-row.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GuestGuard } from './guards/guest.guard';
import { AuthGuard } from './guards/auth.guard';






@NgModule({
    declarations: [
       MovieRowComponent

    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        HttpModule

    
    ],
    providers: [ MoviesService, AuthService, MovieResolver,GuestGuard,AuthGuard ],
    
    exports: [ 
        MovieRowComponent
    ]

  })

  export class SharedModule {}