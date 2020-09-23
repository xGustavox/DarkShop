import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { element } from 'protractor';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConnectService } from 'src/app/core/services/connect/connect.service';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart/shopping-cart.service';

import { ShoopingCartComponent } from './shooping-cart.component';

describe('ShoopingCartComponent', () => {
  let component: ShoopingCartComponent;
  let fixture: ComponentFixture<ShoopingCartComponent>;
  let element: HTMLElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), HttpClientModule, RouterTestingModule],
      declarations: [ ShoopingCartComponent ],
      providers: [
        ConnectService,
        {provide: ShoppingCartService, useClass: ShoppingCartServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoopingCartComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should sum all the products values', () => {
  //   const mock_products = [
  //     { price: 10 }, { price: 4.50 }, { price: 7.50 }
  //   ]

  //   expect(component.SumProductsPrice(mock_products)).toBe(22)
  // })

  // it('should show the number of products inside the shopping cart', () => {
  //   const priceWrapper = element.querySelector('#price')
  //   const mock_products = [
  //     { price: 10 }, { price: 4.50 }, { price: 7.50 }
  //   ]

  //   let numProducts = component.GetNumProducts(mock_products)

  //   fixture.detectChanges()

  //   expect(priceWrapper.textContent).toContain(`R$ ${numProducts.toLocaleString('pt-BR')}`)
  // })
});

class ShoppingCartServiceStub {
  darkPatternedProducts = []
  
  statusChanged = new BehaviorSubject([
    { price: 10 }, { price: 4.50 }, { price: 7.50 }
  ])
}