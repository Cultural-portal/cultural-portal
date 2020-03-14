import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopersComponent } from './pages/developers/developers.component';
import { WorklogPageComponent } from './pages/worklog-page/worklog-page.component';
import { WorklogResolverGuard } from './guards/worklog-resolver.guard';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';

const routes: Routes = [
  {
    path: 'developers', component: DevelopersComponent,
  },
  {
    path: 'worklog', component: WorklogPageComponent,
    resolve: { data: WorklogResolverGuard }
  },
  {
    path: 'styleguide', component: StyleguideComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
