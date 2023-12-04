import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentPriceService {

  private deliverySubject = new Subject<any>();

  delivery = {
    deliveryType: '',
    deliveryPrice: ''
  };

  updateShipmentDetails(item: { deliveryType: string; deliveryPrice: string }) {
    if (item) {
      this.delivery.deliveryType = item.deliveryType;
      this.delivery.deliveryPrice = item.deliveryPrice;
    }
    this.deliverySubject.next(this.delivery);
  }

  returnShipmentDetails() {
    return  this.delivery; 
  }

  get deliveryDetailsObservable() {
    return this.deliverySubject.asObservable();
  }
}
