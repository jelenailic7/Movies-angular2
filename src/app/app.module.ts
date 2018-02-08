import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';



import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MoviesComponent } from './movies/movies.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchModule } from './search-module';
import { SharedModule } from './shared/shared-module';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { MovieFormComponent } from './movies/movie-form/movie-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent,
    MovieFormComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SearchModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
