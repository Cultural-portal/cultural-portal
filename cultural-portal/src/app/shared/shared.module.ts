import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MatListModule,
    MatCardModule
  ]
})
export class SharedModule { }
