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
      case 'from1to25': 
        filterProperty = 'price'
        break;
      case 'from25to50': 
      filterProperty = '-price'
        break;
      case 'from50to100': 
        filterProperty = ''
        break;
      case 'default': 
        filterProperty = ''
        break;
      default:
        filterProperty = ''
        break;
    }
  }
}
