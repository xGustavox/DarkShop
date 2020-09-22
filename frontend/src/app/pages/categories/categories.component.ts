import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { LoadingService } from 'src/app/core/services/loading/loading.service';
import { FilterService } from 'src/app/core/services/filter/filter.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  loading = true
  type = 1
  produtos_l = []
  produtos_r = []
  list

  constructor
  (
    private loadingS: LoadingService,
    private productService: ProductsService,
    private filterService: FilterService
  ) 
  { 
    this.LoadData({
      type: this.type
    })
  }

  ngOnInit(): void {
  }

  LoadData(filter, priceFilter = null) {
    this.loadingS.show()
    this.productService.Get(filter).subscribe((res: any) => {

      // Aplicação do filtro de preço temporário
      if (priceFilter)
        res = res.filter(item => item.price < priceFilter)
      
      this.produtos_l = []
      this.produtos_r = []

      res.map((p, i) => {
        if (i % 2 == 0)
          this.produtos_l.push(p)
        else
          this.produtos_r.push(p)
      })
    }, err => console.log(err), () => this.loadingS.dismiss())
  }

  ChangeCategory(categoryId) {
    this.type = categoryId

    this.LoadData({
      type: categoryId
    })
  }

  Filter(event) {
    
    // O filtro de preço é feito localmente.
    // Ainda não descobri como posso fazê-lo na API
    this.LoadData(
      {
        type: this.type,
        sort: this.filterService.Sort(event)
      }, 
      this.filterService.PriceRange(event)
    )
  }
}
