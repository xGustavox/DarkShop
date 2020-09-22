import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlurService } from 'src/app/core/services/blur/blur.service';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {

  groupProduct: any = {}

  produtos_l = []
  produtos_r = []

  constructor
  (
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private blurService: BlurService
  ) 
  {
    this.activatedRoute.queryParams.subscribe(res => {
      this.groupProduct = res
    })
  }

  ngOnInit(): void {
    this.productService.Get({group: this.groupProduct.groupId}).subscribe((res: any) => {

      this.produtos_l = []
      this.produtos_r = []

      res.map((p, i) => {
        if (i % 2 == 0)
          this.produtos_l.push(p)
        else
          this.produtos_r.push(p)
      })
    }, err => console.log(err))
  }
}
