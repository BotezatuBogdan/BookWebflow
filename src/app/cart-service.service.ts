import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }

  cartItems: any[] = [];

  setCartItem(item: any) {
    let nr = parseInt(item.bookNr);
    let price = parseFloat(item.price);
    let quantity = parseInt(item.quantity);
    let title = item.title;

    let newItem = this.cartItems.find((item) => {
      return item.bookNr === nr;
    });

    if (newItem) {
      newItem.quantity += quantity;
    } else {
      const itemObject = {
        bookNr: nr,
        price: price,
        quantity: quantity,
        title: title,
      };
      this.cartItems.push(itemObject);
    }
  }

  getCartItem() {
    return this.cartItems;
  }

}
