import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { MovieFormComponent } from './movies/movie-form/movie-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MovieResolver } from './resolvers/movie.resolver';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';



const appRoutes: Routes = [
   { path: '', 
     redirectTo: '/movies',
     pathMatch: 'full'
   },

    { path:'movies',
      component: MoviesComponent },

    { path:'add',
      component: MovieFormComponent },
    
    { path:'movies/search/:term',
    component: SearchPageComponent },

    { path: 'login',
    component: LoginComponent },

    { path: 'register',
    component: RegisterComponent },
    
    { path: 'movies/:id',
    component: MovieDetailsComponent,
    resolve: {
      movie: MovieResolver
      } 
    },
    
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}
  
