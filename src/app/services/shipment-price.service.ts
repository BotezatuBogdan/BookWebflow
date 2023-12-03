import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShipmentPriceService {

  delivery = {
    deliveryType: '',
    deliveryPrice: ''
  };

  updateShipmentDetails(item: { deliveryType: string; deliveryPrice: string }) {
    if (item) {
      this.delivery.deliveryType = item.deliveryType;
      this.delivery.deliveryPrice = item.deliveryPrice;
    }
    console.log(this.delivery);
  }

  returnShipmentDetails() {
    return  this.delivery; 
  }
}
