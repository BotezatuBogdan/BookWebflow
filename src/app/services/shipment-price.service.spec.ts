import { TestBed } from '@angular/core/testing';

import { ShipmentPriceService } from './shipment-price.service';

describe('ShipmentPriceService', () => {
  let service: ShipmentPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
