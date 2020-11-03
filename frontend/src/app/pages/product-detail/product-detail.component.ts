import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart/shopping-cart.service';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @ViewChild('content') content: ElementRef
  @ViewChild('predominantColor') predominantColor: ElementRef
  product

  produtos_l = []
  produtos_r = []

  constructor
  (
    private location: Location,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private productService: ProductsService,
    private title: Title
  ) 
  { 
    this.AddToCart = this.AddToCart.bind(this)
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.product = JSON.parse(params.product)
        this.title.setTitle(this.product.name)
        this.ChangeBackColor()
      }
      else
        this.location.back()
    })

    this.LoadData({})
  }

  ngAfterViewInit() {
    this.ChangeBackColor()
  }

  ChangeBackColor() {
    if (this.predominantColor)
      this.predominantColor.nativeElement.style.backgroundImage = this.product.color
  }

  LoadData(filter) {
    this.GetAditionalProducts().then((productArr: any) => {
      this.produtos_l = []
      this.produtos_r = []

      productArr.map((p, i) => {
        if (i % 2 == 0)
          this.produtos_l.push(p)
        else
          this.produtos_r.push(p)
      })
    })

    // this.productService.Get(filter).subscribe((res: any) => {

    //   this.produtos_l = []
    //   this.produtos_r = []

    //   res.map((p, i) => {
    //     if (i % 2 == 0)
    //       this.produtos_l.push(p)
    //     else
    //       this.produtos_r.push(p)
    //   })
    // }, err => console.log(err))
  }

  Back() {
    this.location.back()
  }

  AddToCart() {
    this.shoppingCartService.AddToCart(this.product)
    this.location.back()
  }

  GetAditionalProducts() {
    // Recupera o nome do produto
    let firstProductName: String[] = this.product.name.split(' ')
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
}
