import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticePeriodPage } from './notice-period.page';

describe('NoticePeriodPage', () => {
  let component: NoticePeriodPage;
  let fixture: ComponentFixture<NoticePeriodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticePeriodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticePeriodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
