import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NaggingService } from 'src/app/core/services/nagging/nagging.service';
import { localStorageKeys } from 'src/environments/localStorageKeys';

@Component({
  selector: 'nagging-modal',
  templateUrl: './nagging-modal.component.html',
  styleUrls: ['./nagging-modal.component.scss']
})
export class NaggingModalComponent implements OnInit {

  @ViewChild('top') top: ElementRef
  public  product
  public  peopleLooking = 0

  constructor
  (
    private naggingService: NaggingService
  ) 
  {
    this.SeeProduct = this.SeeProduct.bind(this)
    this.PeopleLooking()
  }

  PeopleLooking() {
    this.peopleLooking = Math.floor(Math.random() * 10 + 1)
  }

  ngOnInit(): void {
    this.product = JSON.parse(localStorage.getItem(localStorageKeys.naggingProduct))
  }

  ngAfterViewInit() {
    this.top.nativeElement.style.backgroundImage = this.product.color
  }

  NotInterested() {
    this.naggingService.NotInterested()
  }

  SeeProduct() {
    this.naggingService.SeeProduct(this.product)
  }
}
