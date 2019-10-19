import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreRecommendMoviePage } from './more-recommend-movie.page';

describe('MoreRecommendMoviePage', () => {
  let component: MoreRecommendMoviePage;
  let fixture: ComponentFixture<MoreRecommendMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreRecommendMoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreRecommendMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
