import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatGridListModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatGridListModule
  ]
})
export class SharedModule { }
