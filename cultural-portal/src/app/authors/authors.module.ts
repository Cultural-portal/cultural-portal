import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsListComponent } from './pages/authors-list/authors-list.component';
import { AuthorInfoComponent } from './pages/author-info/author-info.component';


@NgModule({
  declarations: [AuthorsListComponent, AuthorInfoComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule
  ]
})
export class AuthorsModule { }
