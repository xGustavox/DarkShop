import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { environment } from 'src/environments/environment';
import { ProductsService } from 'src/app/services/products/products.service'
import 'src/app/models/product'

@Component({
  selector: 'shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.scss']
})
export class ShoopingCartComponent implements OnInit {

  @Input() darkPatterned: boolean = environment.darkPatterned

  qtdProducts
  price = 0
  sale
  darkPatternedProducts = []

  constructor
  (
    private shoppingCartService: ShoppingCartService,
    private router: Router,
    private loadingS: LoadingService,
    private productService: ProductsService
  ) 
  { 
    shoppingCartService.statusChanged.subscribe((data: any) => {
      this.sale = data
      this.RenderShoppingTag(data.products)
    })

    this.CheckoutSale = this.CheckoutSale.bind(this)
    
  }

  ngOnInit(): void { }

  GetAditionalProducts() {
    let firstProductName: String[] = this.sale.products[0].name.split(' ')
    let valueToCompareUppercase = `${firstProductName[0]} ${firstProductName[1]}`.toUpperCase()

    return new Promise((resolve, reject) => {
      this.productService.Get({}).subscribe((res: Product[]) => {

        let relatedProductsArr = res.filter(item => 
            item.name.toUpperCase().includes(valueToCompareUppercase) &&
              !item.name.toUpperCase().includes(firstProductName.join(' ').toUpperCase())
          )
      
        resolve(relatedProductsArr)
      }, err => reject([]))
    })
  }

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
    this.GetAditionalProducts().then((res: Product[]) => {
      let productArr = []
      this.darkPatternedProducts = res

      this.CalculateShoopingCartData(products)
    }).catch(err => console.log('err'))
  }

  CalculateShoopingCartData(products) {
    let productArr = [...products].concat([...this.darkPatternedProducts])
  
    this.qtdProducts = productArr.length
    
    this.price = productArr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price
    }, 0)
  }

  Remove(e, i, lista) {
    
    switch (lista) {
      case 'products':
        const item = e.target.parentNode.parentNode

        item.classList.add('removing')
        this.shoppingCartService.Remove(i)
        break;
      case 'relatedProducts':
        this.darkPatternedProducts.splice(i, 1)
        this.CalculateShoopingCartData(this.sale.products)
        break;
    }
  }

  CheckoutSale() {
    this.loadingS.show()

    this.shoppingCartService.Checkout(this.darkPatternedProducts).subscribe(resp => {
      this.loadingS.dismiss()
      this.router.navigate(['thankyou'])
    })
  }  
}
