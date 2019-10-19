import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySlidePage } from './my-slide.page';

describe('MySlidePage', () => {
  let component: MySlidePage;
  let fixture: ComponentFixture<MySlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySlidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
