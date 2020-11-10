import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import ColorThief from 'colorthief'
import { Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { NaggingService } from 'src/app/core/services/nagging/nagging.service';

@Component({
  selector: 'card-product-list',
  templateUrl: './card-product-list.component.html',
  styleUrls: ['./card-product-list.component.scss']
})
export class CardProductListComponent implements OnInit {

  @ViewChild('img') img
  @Input('product') product
  // @Input() darkPatterned = false
  @Input() darkPatterned = JSON.parse(localStorage.getItem('darkPatterned')).darkPatterned
  loadedImg = false

  constructor
  (
    private router: Router,
    private gtmService: GoogleTagManagerService,
    private nagging: NaggingService
  ) 
  { 
    
  }

  ngOnInit(): void {}

  /* Recupera a cor predominante da imagem do produto
  e retorna o objeto produto com uma nova propriedade de cor */
  SetBackColor(event) {
    this.loadedImg = true
    let img = event.target
    let top = img.parentNode

    const colorThief = new ColorThief()
    const colors = colorThief.getPalette(img, 5)
 
    let color1 = colors[2]
    let color2 = colors[3]
    
    let leftTopColor = `rgb(${color1[0]}, ${color1[1]}, ${color1[2]})`
    let bottomRightColor = `rgb(${color2[0]}, ${color2[1]}, ${color2[2]})`
    
    const gradiente = `linear-gradient(to bottom right, ${leftTopColor}, ${bottomRightColor})`

    top.style.backgroundImage = gradiente

    this.product = {...this.product, color: gradiente}
  }

  // Navega para a tela de detalhes passando o produto como parametro
  Click() {
    this.gtmService.pushTag({
      event: this.darkPatterned ? 'DP-PRODUCT-CARD-CLICKED' : 'PRODUCT-CARD-CLICKED'
    })

    this.nagging.setProduct(this.product)

    this.router.navigate(['product-detail'], {
      queryParams: {
        product: JSON.stringify(this.product)
      }
    })
  }
}
