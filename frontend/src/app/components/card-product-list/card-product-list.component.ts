import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import ColorThief from 'colorthief'
import { Router } from '@angular/router';

@Component({
  selector: 'card-product-list',
  templateUrl: './card-product-list.component.html',
  styleUrls: ['./card-product-list.component.scss']
})
export class CardProductListComponent implements OnInit {

  @ViewChild('img') img
  @Input('product') product
  @Input() darkPatterned: boolean = false

  constructor
  (
    private router: Router
  ) 
  { }

  ngOnInit(): void {
    console.log(this.product);
    
  }

  SetBackColor(event) {
    let img = event.target
    let top = img.parentNode

    const colorThief = new ColorThief()

    let colors = colorThief.getPalette(img, 5)[2]
    top.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`

    this.product = {...this.product, color: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`}
  }

  Click() {
    this.router.navigate(['product-detail'], {
      queryParams: {
        product: JSON.stringify(this.product)
      }
    })
  }
}
