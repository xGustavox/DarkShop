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
    this.ShoppingCartStatus()
    this.SyncRouteWithTab()
  }

  ngOnInit(): void {
    
  }

  // Mostra o componente de ShoppingCart se ele tiver itens
  ShoppingCartStatus() {
    this.shoppingCartService.statusChanged.subscribe((data: any) => {
      if (data)
        this.shoppingCartHasItens = data.products.length > 0  
    })
  }

  // Sincroniza o estilo tas tabs com a rota atual
  SyncRouteWithTab() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let endpointUrl = event.url.split('/')
        this.ActivateTab(endpointUrl[2])
      }
    })
  }

  // Inicializa o blur das tabs
  ngAfterViewInit() {
    this.blurService.setCanvasWrapper(this.canvasWrapper)
  }

  // Ativa o efeito de ativo nas tabs
  ActivateTab(tab) {
    this.activatedTab = {
      'home': false,
      'categories': false,
      'search': false
    }

    this.activatedTab[tab] = true
  }
}
