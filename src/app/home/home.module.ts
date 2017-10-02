import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { SharedModule } from './../shared/shared.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot([
      {path:'welcome', component: WelcomeComponent},
    ]),
  ],
  declarations: [WelcomeComponent]
})
export class HomeModule { }
