import { TestBed } from '@angular/core/testing';

import { BackButtonService } from './back-button.service';

describe('BackButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackButtonService = TestBed.get(BackButtonService);
    expect(service).toBeTruthy();
  });
});
