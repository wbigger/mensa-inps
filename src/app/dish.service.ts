import { Injectable } from '@angular/core';
import { Dish } from './dish';

@Injectable()
export class DishService {

  constructor() { }

  getDishes() : Dish[] {
    return [
      {
          'course': 'Primo',
          'name': 'Carbonara',
          'price': 6.5,
          'imageUrl': 'http://img.taste.com.au/86bOXAkG/taste/2016/11/carbonara-sauce-28894-1.jpeg',
          'counter': 0,
          'diet': 'pork'
      },
      {
          'course': 'Primo',
          'name': 'Cacio & Pepe',
          'price': 6.5,
          'imageUrl': 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Cacio-e-Pepe_TASTING-ROME.jpg',
          'counter': 0,
          'diet': 'vegetarian'
      },
      {
          'course': 'Secondo',
          'name': 'Platessa',
          'price': 5,
          'imageUrl': 'http://www.buonissimo.org/archive/borg/ivbJTo6zUXMeIkTw3%252FB%252BOe%252FYr971i3%252BH%252BDl3jE%252FTTk6gnY0PsxvV6g%253D%253D',
          'counter': 0,
          'diet': ''
      },
      {
          'course': 'Contorno',
          'name': 'Patate fritte vegane',
          'price': 3,
          'imageUrl': 'http://www.giallozafferano.it/images/ricette/8/896/foto_hd/hd292x195.jpg',
          'counter': 1,
          'diet': 'vegan'
      },
  ]
  }
}
