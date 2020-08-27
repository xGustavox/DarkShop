import { Injectable } from '@angular/core';
import { Subscriber, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  sale = {
    user: null,
    products: [],
    logistic: 0,
    shipping: 0
  }
  
  statusChanged = new BehaviorSubject(null)

  constructor() { }

  AddToCart(product) {
    this.sale.products.unshift(product)
    this.statusChanged.next(this.sale)
  }

  Remove(index) {
    this.sale.products.splice(index, 1)
    this.statusChanged.next(this.sale)
  }
}
