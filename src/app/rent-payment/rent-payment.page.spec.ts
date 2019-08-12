import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentPaymentPage } from './rent-payment.page';

describe('RentPaymentPage', () => {
  let component: RentPaymentPage;
  let fixture: ComponentFixture<RentPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentPaymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
