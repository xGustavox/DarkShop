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

  // Navega para a tela de detalhes do grupo passando o grupo como queryParam
  GoToGroup(groupId) {
    this.router.navigate(['tabs', 'group_details'], {
      queryParams: {
        ...this.groupProduct
      }
    })
  }
}