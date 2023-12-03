import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartDbService } from 'src/app/services/cart-db.service';
import { ShipmentPriceService } from 'src/app/services/shipment-price.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})



export class CardComponent implements OnInit, OnDestroy {

  cartItems: any[] = [];
  sum: number = 0;
  displayedColumns: string[] = ['Title', 'Quantity', 'Price'];
  tableItems: { position: number, title: string, quantity: string, price: number }[] = [];
  mergedRows: any[] = [];

  private cartSubscription!: Subscription;
  deliveryDetails: any;

  constructor(private cartDB: CartDbService, private deliveryService: ShipmentPriceService) { }

  ngOnInit(): void {

    this.cartItems = this.cartDB.getCart();

    this.cartSubscription = this.cartDB.getCartItemsObservable().subscribe((updatedCartItems) => {
      this.cartItems = updatedCartItems;
      this.updateTableItems();
    });

    this.deliveryDetails = this.deliveryService.returnShipmentDetails();
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  private updateTableItems(): void {
    this.tableItems = [];

    this.cartItems.forEach((element, index) => {
      let obj = {
        position: (index + 1),
        title: element.title,
        quantity: element.quantity,
        price: element.price,
      }

      if (obj.price > 1) {
        obj.price = obj.quantity * obj.price;
      }

      this.tableItems.push(obj);
    });

  }



  private getDeliveryPriceAsFloat(): number {
    const priceString = this.deliveryDetails.deliveryPrice;

    // Check if the price is 'free'
    if (priceString.toLowerCase() === 'free') {
      return 0;
    }

    // Extract numeric part (excluding the first character) and convert to float
    const numericPart = parseFloat(priceString.substring(1));

    // Check if the conversion is successful
    if (!isNaN(numericPart)) {
      return numericPart;
    } else {
      // Handle the case where the conversion is not successful (e.g., invalid format)
      console.error('Invalid delivery price format:', priceString);
      return 0;
    }
  }

}
