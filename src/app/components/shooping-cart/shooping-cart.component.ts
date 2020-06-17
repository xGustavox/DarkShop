import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.scss']
})
export class ShoopingCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ToggleCart() {
    let modal = document.getElementById('shooping-modal')
    modal.classList.toggle('active')
  }
}
