import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.scss']
})
export class ShoopingCartComponent implements OnInit {

  qtdProducts
  price
  products = []

  constructor
  (
    private shoppingCartService: ShoppingCartService
  ) 
  { 
    shoppingCartService.statusChanged.subscribe((data: any) => {
      this.products = data
      this.RenderShoppingTag(data)
    })
  }

  ngOnInit(): void {
  }

  ToggleCart() {
    let modal = document.getElementById('shooping-modal')
    modal.classList.toggle('active')
  }

  RenderShoppingTag(products) {
    this.qtdProducts = products.length
    this.price = products.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price
    }, 0).toLocaleString('pt-BR')
  }

  Remove(e, i) {
    console.log(e);
    
    const item = e.target.parentNode.parentNode

    item.classList.add('removing')

    // Sincronia com a animação
    setTimeout(() => {
      this.shoppingCartService.Remove(i)
    }, 600)
  }
}
