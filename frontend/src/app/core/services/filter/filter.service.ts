import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  // Retorna o valor para ordenação baseado no filtro
  Sort(filter) {
    if (!filter)
      return ''

    return {
      smallestPrice: 'price',
      biggerPrice: '-price',
      default: ''
    }[filter]
  }

  PriceRange(filter) {
    if (!filter)
      return ''

    return {
      to25: 25,
      to50: 50,
      to100: 100,
      default: ''
    }[filter]
  }
}
