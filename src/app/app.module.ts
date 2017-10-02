import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { MenuModule } from './menu/menu.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', component:PageNotFoundComponent}
    ]),
    MenuModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
