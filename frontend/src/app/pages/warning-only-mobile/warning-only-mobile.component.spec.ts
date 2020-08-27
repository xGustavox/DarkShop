import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningOnlyMobileComponent } from './warning-only-mobile.component';

describe('WarningOnlyMobileComponent', () => {
  let component: WarningOnlyMobileComponent;
  let fixture: ComponentFixture<WarningOnlyMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningOnlyMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningOnlyMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
