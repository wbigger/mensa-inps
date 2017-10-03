import { Component, OnInit } from '@angular/core';
import { NamesService } from './names.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  namesPrefix: string
  get filteredNames() {
    return this._namesService.getNamesByPrefix(this.namesPrefix)
  }
  constructor(private _namesService: NamesService) { }

  ngOnInit() {
  }

}
