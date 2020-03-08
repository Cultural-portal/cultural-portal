import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsListComponent } from './pages/authors-list/authors-list.component';
import { AuthorInfoComponent } from './pages/author-info/author-info.component';
<<<<<<< Author-detalied
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
=======
import { SearchPipe } from './pipes/search.pipe';
import { SharedModule } from '../shared/shared.module';
import { AuthorItemComponent } from './components/autor-item/author-item.component';
import { SearchComponent } from './components/search/search.component';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    AuthorsListComponent,
    AuthorInfoComponent,
    SearchPipe,
    AuthorItemComponent,
    SearchComponent,
    TranslatePipe
  ],
  imports: [CommonModule, AuthorsRoutingModule, SharedModule]
>>>>>>> Authors-List
})
export class AuthorsModule {}
