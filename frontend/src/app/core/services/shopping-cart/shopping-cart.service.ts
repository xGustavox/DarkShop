import { Injectable } from '@angular/core';
import { Subscriber, BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ConnectService } from './../connect/connect.service';
import { UserService } from './../user/user.service';
import { NaggingService } from '../nagging/nagging.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  sale = {
    user: null,
    products: [],
    logistic: 0,
    shipping: 10
  }
  
  statusChanged = new BehaviorSubject(null)

  constructor(
    private toastr: ToastrService,
    private conn: ConnectService,
    private user: UserService,
    private naggingService: NaggingService,
  ) 
  { 
    this.sale.logistic = this.LogisticValue()
  }

  AddToCart(product) {
    this.naggingService.AddedTheProduct(product)
    this.sale.products.unshift(product)
    this.statusChanged.next(this.sale)
    this.toastr.show('Produto adicionado na sacola!')
  }

  Remove(index) {
    this.sale.products.splice(index, 1)
    this.statusChanged.next(this.sale)

    if (this.sale.products.length == 0)
      this.toastr.warning('Sua sacola esta vazia!')
  }

  ClearSale() {
    this.sale = {
      user: null,
      products: [],
      logistic: 0,
      shipping: 10
    }

    this.statusChanged.next(null)
  }

  LogisticValue() {
    return Number((Math.random() * 5 + 10).toFixed())
  }

  Checkout(aditionalProducts: Product[]) {
    this.sale.products.concat(aditionalProducts)

    this.sale = {...this.sale, user: this.user.getUser()}
    
    return this.conn.post("sale", this.sale)
  }
}
