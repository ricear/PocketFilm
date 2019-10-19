import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreTvPage } from './more-tv.page';

describe('MoreTvPage', () => {
  let component: MoreTvPage;
  let fixture: ComponentFixture<MoreTvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreTvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreTvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
