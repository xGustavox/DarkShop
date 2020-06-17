import { Component, OnInit } from '@angular/core';
import ColorThief from 'colorthief'
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const imgWrapper = document.getElementById(`product-image`)
    const img = imgWrapper.querySelector('img')

    if (img.complete)
      this.SetBackColor(img, imgWrapper)
    else {
      img.addEventListener('load', () => {
        this.SetBackColor(img, imgWrapper)
      })
    }
  }

  SetBackColor(img, imgWrapper) {
    const colorThief = new ColorThief()

    let colors = colorThief.getColor(img)
    imgWrapper.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`
  }

  Back() {
    this.location.back()
  }
}
