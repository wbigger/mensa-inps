import { Injectable } from '@angular/core';

@Injectable()
export class NamesService {
  private names: string[] = [
    "Anna",
    "Annamaria",
    "Antonio",
    "Arianna",
    "Cesare",
    "Claudio",
    "Marco",
    "Valerio"
  ]

  constructor() { }

  getNamesByPrefix(prefix: string): string[] {
    let re = new RegExp(prefix,'i') // ignore case
    return this.names.filter(s=>s.search(re)==0)
  }

}
