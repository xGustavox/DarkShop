import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaggingModalComponent } from './nagging-modal.component';

describe('NaggingModalComponent', () => {
  let component: NaggingModalComponent;
  let fixture: ComponentFixture<NaggingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaggingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaggingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
