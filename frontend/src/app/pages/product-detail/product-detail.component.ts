import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart/shopping-cart.service';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { BlurService } from 'src/app/core/services/blur/blur.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product

  produtos_l = []
  produtos_r = []

  constructor
  (
    private location: Location,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private productService: ProductsService,
    private blurService: BlurService
  ) 
  { 
    this.AddToCart = this.AddToCart.bind(this)
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params)
        this.product = JSON.parse(params.product)
      else
        this.location.back()
    })

    this.LoadData({})
  }

  LoadData(filter) {
    this.productService.Get(filter).subscribe((res: any) => {

      this.produtos_l = []
      this.produtos_r = []

      res.map((p, i) => {
        if (i % 2 == 0)
          this.produtos_l.push(p)
        else
          this.produtos_r.push(p)
      })
    }, err => console.log(err))
  }

  Back() {
    this.location.back()
  }

  AddToCart() {
    this.shoppingCartService.AddToCart(this.product)
    this.location.back()
  }
}
