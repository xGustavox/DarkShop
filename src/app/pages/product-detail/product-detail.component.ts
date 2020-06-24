import { Component, OnInit, Input } from '@angular/core';
import ColorThief from 'colorthief'
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product

  constructor
  (
    private location: Location,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) 
  { 
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params)
        this.product = JSON.parse(params.product)
      else
        this.location.back()
    })
  }
  

  SetBackColor(event) {
    let img = event.target
    let top = img.parentNode

    const colorThief = new ColorThief()

    let colors = colorThief.getPalette(img, 5)[2]
    top.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`
  }

  Back() {
    this.location.back()
  }

  AddToCart() {
    this.shoppingCartService.AddToCart(this.product)
    this.location.back()
  }
}
