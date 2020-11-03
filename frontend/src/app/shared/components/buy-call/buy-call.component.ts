import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'buy-call',
  templateUrl: './buy-call.component.html',
  styleUrls: ['./buy-call.component.scss']
})
export class BuyCallComponent implements OnInit {

  @Input('product') product
  @Input('active') active
  @ViewChild('buyCall') buyCall: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.buyCall.nativeElement.style.backgroundImage =
      this.product.color
  }
}
