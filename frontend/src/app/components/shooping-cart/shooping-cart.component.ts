import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.scss']
})
export class ShoopingCartComponent implements OnInit {

  qtdProducts
  price
  sale

  constructor
  (
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) 
  { 
    shoppingCartService.statusChanged.subscribe((data: any) => {
      this.sale = data
      this.RenderShoppingTag(data.products)
    })
  }

  ngOnInit(): void {
  }

  ToggleCart() {
    let modal = document.getElementById('shooping-modal')
    modal.classList.toggle('active')

    if (modal.classList.contains('active')) {
      setTimeout(() => {
        modal.style.overflow = "auto"
      }, 450)
    }
    else
      modal.style.overflow = "hidden"
  }

  RenderShoppingTag(products) {
    this.qtdProducts = products.length
    this.price = products.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price
    }, 0)
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
