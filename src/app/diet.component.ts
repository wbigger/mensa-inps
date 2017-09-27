import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})

export class DietComponent implements OnInit, OnChanges {

  @Input() dietName: string

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log(this.dietName)
  }

}