import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsListComponent } from './pages/authors-list/authors-list.component';
import { AuthorInfoComponent } from './pages/author-info/author-info.component';
import { SearchPipe } from './pipes/search.pipe';
import { SharedModule } from '../shared/shared.module';
import { AutorItemComponent } from './components/autor-item/autor-item.component';



@NgModule({
  declarations: [AuthorsListComponent, AuthorInfoComponent, SearchPipe, AutorItemComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    SharedModule
  ]
})
export class AuthorsModule { }
