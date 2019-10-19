import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecePage } from './piece.page';

describe('PiecePage', () => {
  let component: PiecePage;
  let fixture: ComponentFixture<PiecePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
