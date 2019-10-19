import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvDetailPage } from './tv-detail.page';

describe('TvDetailPage', () => {
  let component: TvDetailPage;
  let fixture: ComponentFixture<TvDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
