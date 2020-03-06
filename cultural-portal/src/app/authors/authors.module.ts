import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsListComponent } from './pages/authors-list/authors-list.component';
import { AuthorInfoComponent } from './pages/author-info/author-info.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [AuthorsListComponent, AuthorInfoComponent, TimelineComponent],
    exports: [
        AuthorInfoComponent
    ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    MatCardModule
  ]
})
export class AuthorsModule { }
