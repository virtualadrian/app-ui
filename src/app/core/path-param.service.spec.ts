import { TestBed, inject } from '@angular/core/testing';

import { PathParamService } from './path-param.service';

describe('PathParamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PathParamService]
    });
  });

  it('should be created', inject([PathParamService], (service: PathParamService) => {
    expect(service).toBeTruthy();
  }));
});
