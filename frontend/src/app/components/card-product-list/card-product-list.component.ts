import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import ColorThief from 'colorthief'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'card-product-list',
  templateUrl: './card-product-list.component.html',
  styleUrls: ['./card-product-list.component.scss']
})
export class CardProductListComponent implements OnInit {

  @ViewChild('img') img
  @Input('product') product
  @Input() darkPatterned: boolean = environment.darkPatterned

  constructor
  (
    private router: Router
  ) 
  { }

  ngOnInit(): void {}

  /* Recupera a cor predominante da imagem do produto
  e retorna o objeto produto com uma nova propriedade de cor */
  SetBackColor(event) {
    let img = event.target
    let top = img.parentNode

    const colorThief = new ColorThief()

    let colors = colorThief.getPalette(img, 5)[2]
    top.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`

    this.product = {...this.product, color: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`}
  }

  // Navega para a tela de detalhes passando o produto como parametro
  Click() {
    this.router.navigate(['product-detail'], {
      queryParams: {
        product: JSON.stringify(this.product)
      }
    })
  }
}
