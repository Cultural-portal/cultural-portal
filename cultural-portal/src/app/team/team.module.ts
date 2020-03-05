import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { DevelopersComponent } from './pages/developers/developers.component';
import { WorklogComponent } from './pages/worklog/worklog.component';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { DeveloperCardComponent } from './components/developer-card/developer-card.component';


@NgModule({
  declarations: [DevelopersComponent, WorklogComponent, StyleguideComponent, DeveloperCardComponent],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
