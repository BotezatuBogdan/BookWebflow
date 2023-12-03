import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDbService {

  private cartKey = 'shoppingCart';
  
  constructor() { }

  private getCartItems(): any[] {
    const cartItems = localStorage.getItem(this.cartKey);
    return cartItems ? JSON.parse(cartItems) : [];
  }

  private setCartItems(items: any[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(items));
  }

  getCart(): any[] {
    return this.getCartItems();
  }

  addToCart(item: { bookNr: any; price: any; quantity: any; title: any; }): void {
    const cartItems = this.getCartItems();

    // Check if the item already exists in the cart based on bookNr
    const existingIndex = cartItems.findIndex((cartItem) => cartItem.bookNr === item.bookNr);

    if (existingIndex !== -1) {
      // Item already exists in the cart, update its quantity or any other property
      cartItems[existingIndex].quantity = parseInt(item.quantity) + parseInt(cartItems[existingIndex].quantity);
    } else {
      // Item is not in the cart, add it
      const newItem = { bookNr: item.bookNr, price: item.price, quantity: item.quantity, title: item.title };
      cartItems.push(newItem);
    }

    this.setCartItems(cartItems);
}

  updateCartItem(updatedItem: any): void {
    const cartItems = this.getCartItems();
    const index = cartItems.findIndex((item) => item.bookNr === updatedItem.bookNr);

    if (index !== -1) {
      cartItems[index] = updatedItem;
      this.setCartItems(cartItems);
    }
  }

  removeCartItem(bookNr: string): void {
    const cartItems = this.getCartItems();
    const index = cartItems.findIndex((item) => item.bookNr === bookNr);

    if (index !== -1) {
      cartItems.splice(index, 1);
      this.setCartItems(cartItems);
    }
  }


}
