import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartDbService } from './services/cart-db.service';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cartLink = 'http://localhost:3000/cart';

  constructor(private http: HttpClient, private cartDB: CartDbService) { }

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
      //this.cartDB.updateItem(newItem);
    } else {
      const itemObject = {
        bookNr: nr,
        price: price,
        quantity: quantity,
        title: title,
      };
      this.cartItems.push(itemObject);
      //this.cartDB.addItem(itemObject);
    }
  }

  getCartItem() {
    return this.cartItems;
  }

}
