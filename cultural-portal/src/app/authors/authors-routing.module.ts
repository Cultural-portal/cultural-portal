import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsListComponent } from './pages/authors-list/authors-list.component';
import { AuthorInfoComponent } from './pages/author-info/author-info.component';

const routes: Routes = [
  {path: 'list', component: AuthorsListComponent},
  {path: 'info', component: AuthorInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
