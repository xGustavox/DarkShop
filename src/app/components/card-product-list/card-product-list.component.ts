import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import ColorThief from 'colorthief'
import { Router } from '@angular/router';

@Component({
  selector: 'card-product-list',
  templateUrl: './card-product-list.component.html',
  styleUrls: ['./card-product-list.component.scss']
})
export class CardProductListComponent implements OnInit {

  @Input('product') product

  constructor
  (
    private router: Router
  ) 
  { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    const top = document.getElementById(`top_${this.product.id}`)
    const img = top.querySelector('img')
    let colors

    if (img.complete)
      this.SetBackColor(img, top)
    else {
      img.addEventListener('load', () => {
        this.SetBackColor(img, top)
      })
    }
  }

  SetBackColor(img, top) {
    const colorThief = new ColorThief()

    let colors = colorThief.getColor(img)
    top.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`
  }

  Click() {
    this.router.navigate(['product-detail'])
  }
}
