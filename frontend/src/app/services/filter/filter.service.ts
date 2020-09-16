import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  Sort(filter) {
    let filterProperty

    switch (filter) {
      case 'smallestPrice': 
        filterProperty = 'price'
        break;
      case 'biggerPrice': 
      filterProperty = '-price'
        break;
      case 'default': 
        filterProperty = ''
        break;
      default:
        filterProperty = ''
        break;
    }

    return filterProperty
  }

  PriceRange(filter) {
    let filterProperty

    switch (filter) {
      case 'to25': 
        filterProperty = 25
        break;
      case 'to50': 
      filterProperty = 50
        break;
      case 'to100': 
        filterProperty = 100
        break;
      case 'default': 
        filterProperty = ''
        break;
      default:
        filterProperty = ''
        break;
    }

    return filterProperty
  }
}
