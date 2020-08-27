import { Injectable } from '@angular/core';
import { ConnectService } from '../connect/connect.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor
  (
    private conn: ConnectService
  ) { }

  Get(filters) {

    let endPoint = "product"

    if (filters != {}) {
      let arrFilters = Object.keys(filters)
      endPoint += "?"

      arrFilters.forEach((f, i) => {
        endPoint += `${f}=${filters[f]}${i < arrFilters.length ? '&' : ''}`
      })
    }

    return this.conn.get(endPoint, {})
  }
}
