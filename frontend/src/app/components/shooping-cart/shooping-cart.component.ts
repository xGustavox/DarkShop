import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.scss']
})
export class ShoopingCartComponent implements OnInit {

  @Input() darkPatterned: boolean = false

  qtdProducts
  price
  sale

  constructor
  (
    private shoppingCartService: ShoppingCartService,
    private router: Router,
    private loadingS: LoadingService
  ) 
  { 
    shoppingCartService.statusChanged.subscribe((data: any) => {
      this.sale = data
      this.RenderShoppingTag(data.products)
    })

    this.CheckoutSale = this.CheckoutSale.bind(this)
    
  }

  ngOnInit(): void { }

  OpenShoppingCart() {
    const modal = document.getElementById('shooping-modal')
    modal.style.height = "98%"
    document.body.style.overflow = "hidden"
  }

  CloseShoppingCart() {
    const modal = document.getElementById('shooping-modal')
    modal.style.height = "0px"
    document.body.style.overflow = "auto"
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

  CheckoutSale() {
    this.loadingS.show()

    this.shoppingCartService.Checkout().subscribe(resp => {
      this.loadingS.dismiss()
      this.router.navigate(['thankyou'])
    })
  }

  
}
