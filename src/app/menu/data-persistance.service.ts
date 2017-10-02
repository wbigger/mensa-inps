import { Injectable } from '@angular/core';
import { Dish } from './dish';

@Injectable()
export class DataPersistanceService {
  dishes: Dish[]
}
