import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { DietComponent } from './diet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DietComponent],
  exports: [
    DietComponent,
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
