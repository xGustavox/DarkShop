import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart/shopping-cart.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/core/services/loading/loading.service';
import { environment } from 'src/environments/environment';
import { ProductsService } from 'src/app/core/services/products/products.service'
import 'src/app/shared/models/product'

@Component({
  selector: 'shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.scss']
})
export class ShoopingCartComponent implements OnInit {

  @ViewChild('shoopingModal') shoopingModal: ElementRef
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
    this.RenderShoppingCartSubscription()
    this.CheckoutSale = this.CheckoutSale.bind(this)
  }

  ngOnInit(): void { }

  /* Renderiza a tag resumo do shoppingCart quando 
  houver uma atualização nos produtos do carrinho */
  RenderShoppingCartSubscription() {
    this.shoppingCartService.statusChanged.subscribe((data: any) => {
      if (data) {
        this.sale = data
        this.RenderShoppingTag(data.products)
      }
    })
  }

  // Recupera os produtos relacionados
  // Calcula os valores referentes aos produtos
  RenderShoppingTag(products) {
    this.GetAditionalProducts().then((res: Product[]) => {
      let productArr = []
      this.darkPatternedProducts = res

      this.CalculateShoopingCartData(products)
    }).catch(err => console.log('err'))
  }

  /* Calcula o preço total dos produtos inclusive 
  os produtos adicionados pelo próprio App */
  CalculateShoopingCartData(products) { 
    let productArr = [...products].concat([...this.darkPatternedProducts])

    this.qtdProducts = this.GetNumProducts(productArr)
    this.price = this.SumProductsPrice(productArr)
  }

  GetNumProducts(products: any[] = []) {
    return products.length
  }

  SumProductsPrice(products: any[] = []) {
    let sum = products.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price
    }, 0)

    return sum
  }

  /* Recupera os produtos relacionados baseado no primeiro 
  produto adicionado no carrinho pelo usuário */
  GetAditionalProducts() {
    // Recupera o nome do produto
    let firstProductName: String[] = this.sale.products[0].name.split(' ')
    let valueToCompareUppercase = `${firstProductName[0]} ${firstProductName[1]}`.toUpperCase()

    /* Retorna um array com os produtos cujo os nomes 
    combinam com os nomes dos outros produtos em estoque */
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

  // Abre a modal de checkout
  OpenShoppingCart() {
    const modal = this.shoopingModal.nativeElement
    modal.style.height = "98%"
    document.body.style.overflow = "hidden"
  }

  // Fecha a modal de checkout
  CloseShoppingCart() {
    const modal = this.shoopingModal.nativeElement
    modal.style.height = "0px"
    document.body.style.overflow = "auto"
  }

  // Remove um item das listas de produtos
  Remove(e, i, lista) {
    
    // Utiliza o switch para decidir de qual lista retirar o produto
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

  /* Envia as informações para que a service 
  faça o checkout e cadastre no banco */
  CheckoutSale() {
    this.loadingS.show()

    this.shoppingCartService.Checkout(this.darkPatternedProducts).subscribe(resp => {
      this.loadingS.dismiss()
      this.router.navigate(['thankyou'])
    })
  }  
}
