import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseRecordPage } from './browse-record.page';

describe('BrowseRecordPage', () => {
  let component: BrowseRecordPage;
  let fixture: ComponentFixture<BrowseRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseRecordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
