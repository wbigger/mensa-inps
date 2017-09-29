import { Component, OnInit } from "@angular/core";
import { Dish } from "./dish";
import { DishService } from "./dish.service";


@Component({
    selector: 'app-menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css']
})

export class MenuListComponent implements OnInit {
    
    panelHeading = 'Menù della giornata'
    imageWidth = 100;
    imageMargin = 5;
    dishCounter = 0;
    dietMessage: string;
    errorMessage: string
    dishes: Dish[]
    //orderedDishes: Dish[]

    constructor(private _dishService:DishService) {}

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

    get orderedDishes(): Dish[] {
        return this.dishes.filter(d=> d.counter>0);
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
            dish.counter = 0
            // if (dish.counter > 0) {
            //     console.log(`Hai ordinato ${dish.counter} ${(dish.counter==1)?'porzione':'porzioni'} di ${dish.name}`)
            // }
        }
        this.dietMessage = ''
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
        this.dietMessage = 'Grazie, hai speso un totale di '+ totPrice + ' euro'
    }

    /*onNotifyDiet(message: string) {
        this.dietMessage = message
    }*/

    ngOnInit(): void {
        this._dishService.getDishes()
        .subscribe(
            dishes=>this.dishes = dishes,
            error=>this.errorMessage = <any>error,
        )
    }
}