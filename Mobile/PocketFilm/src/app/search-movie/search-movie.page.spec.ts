import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMoviePage } from './search-movie.page';

describe('SearchMoviePage', () => {
  let component: SearchMoviePage;
  let fixture: ComponentFixture<SearchMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
