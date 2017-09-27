import { Component } from "@angular/core";
import { Dish } from "./dish";


@Component({
    selector: 'app-menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css']
})

export class MenuListComponent  {
    panelHeading = 'Menù della giornata'
    imageWidth = 100;
    imageMargin = 5;
    dishCounter = 0;
    dishes: Dish[] = [
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
            'name': 'Patate fritte',
            'price': 3,
            'imageUrl': 'http://www.giallozafferano.it/images/ricette/8/896/foto_hd/hd292x195.jpg',
            'counter': 1,
            'diet': 'vegetarian'
        },
    ]

    // Create a property with getter and setter
    // This property with underscore will store the data internally
    _totPrice:number = 0
    // This function will get the value of the property
    get totPrice(): number {
        this._totPrice = 0
        this.dishes.forEach(x => this._totPrice += (x.counter * x.price))
        return this._totPrice;
    }
    // This function will set the value of the property
    set totPrice(value:number){
        this._totPrice = value
    }

    incCounter(d: Dish) {
        //this.dishes[0].counter = +this.dishes[0].counter + 1
        d.counter = +d.counter + 1
    }

    decCounter(d: Dish) {
        if (d.counter > 0) {
            d.counter = +d.counter - 1
        }
    }

    reset() {
        // Here we use the 'classic' for loop
        for (let dish of this.dishes) {
            if (dish.counter > 0) {
                console.log(`Hai ordinato ${dish.counter} ${(dish.counter==1)?'porzione':'porzioni'} di ${dish.name}`)
            }
        }
    }

    doOrder() {
        // Here we use arrow functions.

        // Filter the elements and print the log
        this.dishes
        .filter(dish => dish.counter > 0)
        .forEach(dish => console.log(`Hai ordinato ${dish.counter} ${(dish.counter==1)?'porzione':'porzioni'} di ${dish.name}`))

        // Sum all the prices.
        // As you can see, the arrow function can access external vars
        let totPrice = 0
        this.dishes.forEach(x => totPrice += (x.counter * x.price))
        console.log('Hai speso un totale di '+ totPrice + ' euro')
    }
}