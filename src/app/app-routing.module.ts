import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { MovieFormComponent } from './movies/movie-form/movie-form.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
   { path: '', 
     redirectTo: '/movies',
     pathMatch: 'full'
   },

    { path:'movies',
      component: MoviesComponent },

    { path:'add',
      component: MovieFormComponent },
    
    { path:'search/:term',
    component: SearchPageComponent },

    { path: 'login',
    component: LoginComponent },
    
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
  
