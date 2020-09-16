import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs'
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators'
import { ConnectService } from 'src/app/services/connect/connect.service';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  recentSearch = true
  produtos_l = []
  produtos_r = []
  produtos = []

  pesquisaNaoEncontrada = false

  searchValue = ''
  filter = {}
  price

  @ViewChild('searchInput') searchInput: ElementRef

  constructor
  (
    private conn: ConnectService, 
    private filterService: FilterService
  ) { 
    
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    const searchObservable = fromEvent(this.searchInput.nativeElement, 'input')

    searchObservable
    .pipe(
      map((resp: any) => resp.target.value),
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe(value => {
      if (value != '') {
        this.searchValue = value
        this.LoadData(this.filter, this.price, value)
      }
    })
  }

  LoadData(filter, priceFilter = null, searchValue) {
    this.clearList()

    this.conn.get('/product', filter).subscribe((res: any) => {
      this.produtos = res.filter(item => 
        item.name.toUpperCase().includes(searchValue.toUpperCase()))

      if (this.produtos.length > 0) {
        if (priceFilter)
          this.produtos = [...this.produtos.filter(item => item.price < priceFilter)]
  
        this.produtos.map((p, i) => {
          if (i % 2 == 0)
            this.produtos_l.push(p)
          else
            this.produtos_r.push(p)
        })
  
        this.pesquisaNaoEncontrada = false
      }
      else {
        this.pesquisaNaoEncontrada = true
      }
    })
  }

  clearList() {
    this.produtos = []
    this.produtos_l = []
    this.produtos_r = []
  }

  Filter(event) {
    
    this.filter = {
      sort: this.filterService.Sort(event)
    }

    this.price = this.filterService.PriceRange(event)

    this.LoadData(
      this.filter, 
      this.price,
      this.searchValue
    )
  }
}
