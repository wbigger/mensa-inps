import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MenuListComponent } from './menu-list.component';
import { DietComponent } from './diet.component';
import { DishDetailComponent } from './dish-detail.component';
import { WelcomeComponent } from './welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { DishDetailGuard } from './dish-detail.guard';


@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    DietComponent,
    DishDetailComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'menu', component: MenuListComponent},
      {path:'menu/:id', component: DishDetailComponent, canActivate:[DishDetailGuard]},
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', component:PageNotFoundComponent}
    ])
  ],
  providers: [DishDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
