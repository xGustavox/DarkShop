import { Injectable } from '@angular/core';
import { Subscriber, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  products = []
  statusChanged = new BehaviorSubject(null)

  constructor() { }

  AddToCart(product) {
    this.products.unshift(product)
    this.statusChanged.next(this.products)
  }

  Remove(index) {
    this.products.splice(index, 1)
    this.statusChanged.next(this.products)
  }
}
