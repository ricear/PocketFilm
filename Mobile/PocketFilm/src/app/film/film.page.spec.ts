import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmPage } from './film.page';

describe('FilmPage', () => {
  let component: FilmPage;
  let fixture: ComponentFixture<FilmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
