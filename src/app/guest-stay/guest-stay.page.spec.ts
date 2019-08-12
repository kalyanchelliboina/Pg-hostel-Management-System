import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestStayPage } from './guest-stay.page';

describe('GuestStayPage', () => {
  let component: GuestStayPage;
  let fixture: ComponentFixture<GuestStayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestStayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestStayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
