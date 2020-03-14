import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsListComponent } from './pages/authors-list/authors-list.component';
import { AuthorInfoComponent } from './pages/author-info/author-info.component';
import { SearchPipe } from './pipes/search.pipe';
import { SharedModule } from '../shared/shared.module';
import { AuthorItemComponent } from './components/autor-item/author-item.component';
import { SearchComponent } from './components/search/search.component';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    AuthorsListComponent,
    AuthorInfoComponent,
    SearchPipe,
    AuthorItemComponent,
    SearchComponent,
    TimelineComponent
  ],
  imports: [CommonModule, AuthorsRoutingModule, SharedModule]
})
export class AuthorsModule {}
