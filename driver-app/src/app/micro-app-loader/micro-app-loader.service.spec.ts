import { TestBed } from '@angular/core/testing';

import { MicroAppLoaderService } from './micro-app-loader.service';

describe('MicroAppLoaderService', () => {
  let service: MicroAppLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroAppLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
