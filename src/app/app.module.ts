import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MenuListComponent } from './menu-list.component';
import { DietComponent } from './diet.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    DietComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
