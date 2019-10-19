import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaPage } from './drama.page';

describe('DramaPage', () => {
  let component: DramaPage;
  let fixture: ComponentFixture<DramaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
