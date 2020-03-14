// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }   from '@angular/common/http';
import { TeamRoutingModule } from './team-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// components
import { DevelopersComponent } from './pages/developers/developers.component';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { DeveloperCardComponent } from './components/developer-card/developer-card.component';
import { WorklogPageComponent } from './pages/worklog-page/worklog-page.component';
import { WorklogsListComponent } from './components/worklogs-list/worklogs-list.component';
import { MainDifficultiesComponent } from './components/main-difficulties/main-difficulties.component';
import { EvaluationListComponent } from './components/evaluation-list/evaluation-list.component';
import { WorklogComponent } from './components/worklog/worklog.component';
import { EvaluationScopeComponent } from './components/evaluation-scope/evaluation-scope.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DevelopersComponent,
    StyleguideComponent,
    DeveloperCardComponent,
    WorklogPageComponent,
    DeveloperCardComponent,
    WorklogsListComponent,
    MainDifficultiesComponent,
    EvaluationListComponent,
    WorklogsListComponent,
    WorklogComponent,
    EvaluationScopeComponent,
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [DevelopersComponent, WorklogPageComponent]
})
export class TeamModule { }
