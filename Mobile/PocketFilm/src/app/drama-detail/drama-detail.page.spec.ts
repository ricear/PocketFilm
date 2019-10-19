import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaDetailPage } from './drama-detail.page';

describe('DramaDetailPage', () => {
  let component: DramaDetailPage;
  let fixture: ComponentFixture<DramaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramaDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
