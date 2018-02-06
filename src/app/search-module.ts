import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared-module';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPageComponent } from './search/search-page/search-page.component';





@NgModule({
    declarations: [
        SearchComponent,
        SearchPageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ],
    providers: [],
    exports: [
        SearchComponent,
        SearchPageComponent
    ]

  })

  export class SearchModule {}