import { TestBed } from '@angular/core/testing';

import { ContaasService } from './contaas.service';

describe('ContaasService', () => {
  let service: ContaasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContaasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
