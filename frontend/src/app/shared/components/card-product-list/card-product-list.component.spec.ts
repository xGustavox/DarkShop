import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from 'protractor';

import { CardProductListComponent } from './card-product-list.component';

describe('CardProductListComponent', () => {
  let component: CardProductListComponent;
  let fixture: ComponentFixture<CardProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProductListComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'product-detail', component: GotoComponent }
        ])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductListComponent);
    component = fixture.componentInstance;
    component.product = {
      id: 1
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to product details when clicked', () => {
    // const location = TestBed.inject(Location)
    // const nativeCard: HTMLElement = document.getElementById('product-card')
    // nativeCard.click()
    // fixture.detectChanges()
    // fixture.whenStable().then(() => {
    //   expect(location.href).toBe('/product-detail')
    // })
  })
});

@Component({template: ''})
class GotoComponent {}