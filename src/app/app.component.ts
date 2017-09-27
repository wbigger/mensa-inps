import { Component } from '@angular/core';
import { DishService } from './dish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DishService]
})
export class AppComponent {
  title = 'app';
}
