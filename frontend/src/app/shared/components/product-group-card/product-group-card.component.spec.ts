import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupCardComponent } from './product-group-card.component';

describe('ProductGroupCardComponent', () => {
  let component: ProductGroupCardComponent;
  let fixture: ComponentFixture<ProductGroupCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGroupCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGroupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
