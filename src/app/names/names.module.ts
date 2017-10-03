import { NgModule } from '@angular/core';

import { NamesService } from './names.service';
import { NamesComponent } from './names.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot([
      {path:'names', component: NamesComponent},
    ]),
  ],
  declarations: [NamesComponent],
  providers: [NamesService]
})
export class NamesModule { }
