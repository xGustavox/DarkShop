import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { localStorageKeys } from 'src/environments/localStorageKeys';

@Injectable({
  providedIn: 'root'
})
export class NaggingService {

  private sawTheProduct = 1
  public naggingModalSubject = new BehaviorSubject(null)

  constructor
  (
    private router: Router
  ) { }

  InitializeNaggingTimer() {
    const NAGGING_COUNTDOWN = 60000
    let i = 0

    let naggingLoop = setInterval(() => {
      if (this.sawTheProduct < 3) {
        this.naggingModalSubject.next(i)
        i++
        this.sawTheProduct++
      }
      else {
        this.sawTheProduct = 0
        localStorage.removeItem(localStorageKeys.naggingProduct)
        clearInterval(naggingLoop)
      }
    }, NAGGING_COUNTDOWN)
  }

  NotInterested() {
    this.naggingModalSubject.next(null)
  }

  SeeProduct(product) {
    this.router.navigate(['product-detail'], {
      queryParams: {
        product: JSON.stringify(product)
      }
    }).then(() => {
      this.naggingModalSubject.next(null)
    })
  }

  setProduct(product) {
    if (!localStorage.getItem(localStorageKeys.naggingProduct)) {
      localStorage.setItem(localStorageKeys.naggingProduct, JSON.stringify(product))
      this.InitializeNaggingTimer()
    }
  }

  AddedTheProduct(addedProductId) {
    const product: any = localStorage.getItem(localStorageKeys.naggingProduct)

    if (product)
      if (product._id == addedProductId)
        localStorage.removeItem(localStorageKeys.naggingProduct)
  }
}
