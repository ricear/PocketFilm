import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreMoviePage } from './more-movie.page';

describe('MoreMoviePage', () => {
  let component: MoreMoviePage;
  let fixture: ComponentFixture<MoreMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreMoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
