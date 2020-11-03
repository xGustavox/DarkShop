import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCallComponent } from './buy-call.component';

describe('BuyCallComponent', () => {
  let component: BuyCallComponent;
  let fixture: ComponentFixture<BuyCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
