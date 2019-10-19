import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDramaPage } from './search-drama.page';

describe('SerachDramaPage', () => {
  let component: SearchDramaPage;
  let fixture: ComponentFixture<SearchDramaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDramaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
