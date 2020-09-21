import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { Router, NavigationEnd } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { BlurService } from 'src/app/services/blur/blur.service';


@Component({
  selector: 'nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {

  activatedTab = {
    'home': true,
    'categories': false,
    'search': false
  }

  bluring = false
  shoppingCartHasItens = false

  @ViewChild('canvasWrapper') canvasWrapper: ElementRef

  constructor
  (
    private shoppingCartService: ShoppingCartService,
    private router: Router,
    private blurService: BlurService
  ) 
  { 
    shoppingCartService.statusChanged.subscribe((data: any) => {
      if (data)
        this.shoppingCartHasItens = data.products.length > 0  
    })
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.blurService.setCanvasWrapper(this.canvasWrapper)
  }

  ToggleShoppingCart(show) {
    this.shoppingCartHasItens = show
  }

  ActivateTab(tab) {
    this.activatedTab = {
      'home': false,
      'categories': false,
      'search': false
    }

    this.activatedTab[tab] = true
  }
}
