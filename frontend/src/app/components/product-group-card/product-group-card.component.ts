import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product-group-card',
  templateUrl: './product-group-card.component.html',
  styleUrls: ['./product-group-card.component.scss']
})
export class ProductGroupCardComponent implements OnInit {

  @Input('groupProduct') groupProduct
  @Input('noBorder') noBorder
  @ViewChild('cardGroupCall') card: ElementRef;

  opened = false
  type = 1

  constructor
  (
    private router: Router
  ) 
  { }

  ngOnInit(): void {
    this.type = this.groupProduct.type
  }

  GoToGroup(groupId) {
    this.router.navigate(['tabs', 'group_details'], {
      queryParams: {
        ...this.groupProduct
      }
    })
  }
}