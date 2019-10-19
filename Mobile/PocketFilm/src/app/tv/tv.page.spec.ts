import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvPage } from './tv.page';

describe('TvPage', () => {
  let component: TvPage;
  let fixture: ComponentFixture<TvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
