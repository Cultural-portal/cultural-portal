import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './components/header/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { DescriptionComponent } from './components/description/description/description.component';
import { TitleComponent } from './components/title/title.component';
import { AuthorOfDayComponent } from './components/author-of-day/author-of-day/author-of-day.component';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './components/footer/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    DescriptionComponent,
    TitleComponent,
    AuthorOfDayComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
