import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomChangePage } from './room-change.page';

describe('RoomChangePage', () => {
  let component: RoomChangePage;
  let fixture: ComponentFixture<RoomChangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomChangePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomChangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
