import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreRecommendTvPage } from './more-recommend-tv.page';

describe('MoreRecommendTvPage', () => {
  let component: MoreRecommendTvPage;
  let fixture: ComponentFixture<MoreRecommendTvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreRecommendTvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreRecommendTvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
