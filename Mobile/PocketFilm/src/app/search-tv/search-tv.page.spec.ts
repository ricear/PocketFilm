import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTvPage } from './search-tv.page';

describe('SearchTvPage', () => {
  let component: SearchTvPage;
  let fixture: ComponentFixture<SearchTvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
