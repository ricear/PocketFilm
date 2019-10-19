import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPasswordPage } from './input-password.page';

describe('InputPasswordPage', () => {
  let component: InputPasswordPage;
  let fixture: ComponentFixture<InputPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPasswordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
