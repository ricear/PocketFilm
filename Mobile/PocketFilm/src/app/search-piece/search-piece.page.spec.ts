import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPiecePage } from './search-piece.page';

describe('SearchPiecePage', () => {
  let component: SearchPiecePage;
  let fixture: ComponentFixture<SearchPiecePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPiecePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPiecePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
